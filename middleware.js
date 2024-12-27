import { withAuth } from "next-auth/middleware";
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export default withAuth({
  pages: {
    signIn: "/login", 
  },
});

export const config = {
  matcher: ["/profile"], 
};
