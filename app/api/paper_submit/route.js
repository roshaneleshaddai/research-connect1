import { connectToDatabase } from "@/lib/mongodb";
import Paper from "@/lib/models/paper";
import nodemailer from "nodemailer";

export async function POST(request) {
  console.log("Debug: Received POST request");

  try {
    const {
      paper_file,
      title,
      publication_year,
      submitted_researcher_id,
      team_id,
      name_of_author,
      email,
      publication_option,
      participation_type,
      mobile_no,
      co_authors,
      paper_abstract,
      keywords,
      paper_category,
      status,
      fields_of_research,
    } = await request.json();

    if (!title || !email || !submitted_researcher_id) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing required fields: title, email, or researcher ID" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await connectToDatabase();

    // Generate a unique paper ID
    const timestamp = Date.now();
    const randomSuffix = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    const paper_id = `PAPER-${timestamp}-${randomSuffix}`;

    // Save the data in MongoDB
    const paper = new Paper({
      paper_id,
      title,
      publication_year,
      paper_file,
      submitted_researcher_id,
      team_id,
      name_of_author,
      email,
      publication_option,
      participation_type,
      mobile_no,
      co_authors,
      paper_abstract,
      keywords,
      paper_category,
      status,
      fields_of_research,
    });

    const saved = await paper.save();

    // Send email to the researcher with paper details
    const emailSubject = `Paper Submission Confirmation: ${title}`;
    const emailBody = `
      <h3>Your paper has been successfully submitted!</h3>
      <p><strong>Paper ID:</strong> ${paper_id}</p>
      <p><strong>Title:</strong> ${title}</p>
      <p><strong>Abstract:</strong> ${paper_abstract}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Check if email credentials are present
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email credentials are missing in environment variables.");
      throw new Error("Email credentials are not configured.");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    

    try {
      const emailResponse = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: emailSubject,
        html: emailBody,
      });

      console.log("Email sent successfully:", emailResponse.messageId);
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Paper saved but failed to send email notification",
          error: emailError.message,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Paper saved and email sent successfully", data: saved }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error: Failed to process request", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to process request", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
