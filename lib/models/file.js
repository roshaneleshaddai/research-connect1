// lib/models/file.js
import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  name: String,
  type: String,
  data: Buffer,
});

const File = mongoose.models.File || mongoose.model('File', fileSchema);

export { File };
