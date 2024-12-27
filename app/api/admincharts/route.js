import { connectToDatabase } from "@/lib/mongodb";
import Paper from "@/lib/models/paper";
import User from "@/lib/models/user";

export async function GET() {
  try {
    await connectToDatabase();

    // Define all possible paper statuses
    const allStatuses = ["under review", "completed", "uploaded"];

    // Fetch and normalize paper status counts
    const paperStatusCounts = await Paper.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);
    const statusCountsMap = Object.fromEntries(paperStatusCounts.map(s => [s._id, s.count]));
    const normalizedCounts = allStatuses.map(status => ({
      label: status, 
      count: statusCountsMap[status] || 0,
    }));

    // Count Users with published papers
    const usersWithPapers = await Paper.distinct("submitted_researcher_id", {
      submitted_researcher_id: { $ne: null },
    });
    const totalUsers = await User.countDocuments();

    console.log("Normalized Paper Status Counts:", normalizedCounts);
    console.log("Distinct Users With Papers:", usersWithPapers.length);

    return new Response(
      JSON.stringify({
        success: true,
        paperStatusCounts: normalizedCounts,
        publishedUserCount: usersWithPapers.length,
        totalUsers,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching chart data:", error.stack);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
