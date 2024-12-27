import { connectToDatabase } from "@/lib/mongodb";
import User from "@/lib/models/user";
import jwt from "jsonwebtoken";
const JWT_SECRET = "secret"; 

export async function POST(req, res) {
  try {
    await connectToDatabase();

    const { username, password } = await req.json();

    const user = await User.findOne({
      user_name: username,
      password: password,
    });

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    
    const token = jwt.sign(
      { user_id: user.user_id}, 
      JWT_SECRET, 
      { expiresIn: "1h" } 
    );

    return new Response(
      JSON.stringify({
        success: true,
        token: token,
        user: { user_id: user.user_id,role:user.role },
        message: "Successfully fetched details",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
