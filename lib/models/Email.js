// models/Email.js
import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema({
  from: String,
  to: String,
  subject: String,
  body: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export const Email= mongoose.models.Email || mongoose.model('Email', EmailSchema);