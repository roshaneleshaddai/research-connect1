import { connectToDatabase } from "@/lib/mongodb";
import Paper from "@/lib/models/paper";

export async function GET(request) {
  try {
    await connectToDatabase();

    const url = new URL(request.url);
    const filters = {
      publication_option: url.searchParams.get("publication_option") || "",
      participation_type: url.searchParams.get("participation_type") || "",
      paper_category: url.searchParams.get("paper_category") || "",
      fields_of_research: url.searchParams.get("fields_of_research") || "",
      sort: url.searchParams.get("sort") || "",
    };

    // Build query based on filters
    const query = {};
    if (filters.publication_option) {
      query.publication_option = filters.publication_option;
    }
    if (filters.participation_type) {
      query.participation_type = filters.participation_type;
    }
    if (filters.paper_category) {
      query.paper_category = filters.paper_category;
    }
    if (filters.fields_of_research) {
      query.fields_of_research = { $regex: filters.fields_of_research, $options: "i" }; // Case-insensitive search
    }

    // Fetch filtered papers
    const papers = await Paper.find(query);

    // Sort papers if a sort option is provided
    if (filters.sort === "last_month") {
      papers.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date));
    } else if (filters.sort === "last_year") {
      papers.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date));
    }

    return new Response(
      JSON.stringify({ success: true, data: papers }),
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
