import { connectToDatabase } from "@/lib/mongodb";
import Paper from "@/lib/models/paper";

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const submittedResearcherId = url.searchParams.get("submitted_researcher_id");

    // Ensure the researcher ID is provided
    if (!submittedResearcherId) {
      return new Response(
        JSON.stringify({ success: false, message: "submitted_researcher_id is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Fetch papers based on the provided researcher ID
    const papers = await Paper.find({ submitted_researcher_id: submittedResearcherId });

    // Handle case when no papers are found
    if (!papers || papers.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "No papers found for the given researcher ID" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Return papers with success
    return new Response(
      JSON.stringify({ success: true, papers }), // Ensure consistency with frontend
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching papers:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal server error", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
