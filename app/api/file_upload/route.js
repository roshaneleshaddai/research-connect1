import { NextResponse } from 'next/server';
import multer from 'multer';
import { connectToDatabase } from '@/lib/mongodb';
import { File } from '@/lib/models/file';
import { Paper } from '@/lib/models/paper';

// Setup multer to handle file uploads
const upload = multer({
  storage: multer.memoryStorage(),
});

// Disable body parser for multipart form data
export const config = {
  api: {
    bodyParser: false,
  },
};

// Handle POST requests for file uploads
export async function POST(req) {
  try {
    console.log('Connecting to database...');
    await connectToDatabase();  // Connect to the database
    console.log('Database connected, processing file upload...');

    // Use multer to parse the form data
    const formDat = await req.formData();
    const file = formDat.get('file');
    const fileName = formDat.get('file-name'); // Retrieve file name
    const fileType = formDat.get('file-type'); // Retrieve file type

    if (!file || !fileName || !fileType) {
      console.log('File,  or metadata missing');
      return NextResponse.json({ error: 'File or metadata missing' }, { status: 400 });
    }

    // Create and save the file
    const newFile = new File({
      name: fileName,
      type: fileType,
      data: Buffer.from(await file.arrayBuffer()),  // Convert file to Buffer
    });
    const savedFile = await newFile.save();
    console.log('File saved with ID:', savedFile._id);
    // Update the ticket with the file ID
    return NextResponse.json({ file_id: savedFile._id }, { status: 201 });
  } catch (error) {
    console.error('File upload failed:', error);
    return NextResponse.json({ error: `File upload failed: ${error.message}` }, { status: 500 });
  }
}
