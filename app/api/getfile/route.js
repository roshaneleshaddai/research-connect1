import { connectToDatabase } from "@/lib/mongodb";
import { File } from "@/lib/models/file";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Extract file_id from query parameters
    const { searchParams } = new URL(request.url);
    const file_id = searchParams.get("file_id");

    if (!file_id) {
      return new Response("File ID is required", { status: 404 });
    }

    // Connect to the database
    await connectToDatabase();

    // Find the file by ID
    const file = await File.findById(file_id);
    if (!file) {
      return NextResponse.json(
        { success: false, message: "File not found for this Ticket" },
        { status: 404 }
      );
    }

    // Convert file data to a binary response
    const fileBuffer = file.data; // Assuming `file.data` holds the binary data
    const fileName = file.name || "downloaded-file"; // Provide a default file name
    const fileType = file.type || "application/octet-stream"; // Default MIME type

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": fileType,
        "Content-Disposition": `${fileName}`,
      },
      
    });
  } catch (error) {
    console.error("Failed to fetch file:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch file" },
      { status: 500 }
    );
  }
}
