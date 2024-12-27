import mongoose from 'mongoose';


// Define the file schema
const fileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  data: { type: Buffer, required: true },
});

// Check if the model is already compiled, then export it; otherwise, define and compile it.
const File = mongoose.models.File || mongoose.model("File", fileSchema);

const paperSchema = new mongoose.Schema(
  {
    paper_id: {
      type:String,
    },
    title:{
      type:String,
    },
    publishing_year:{
      type:String,
    },
    paper_file: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
    },
    submitted_researcher_id: {
      type: String,
    },
    team_id: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    name_of_author: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    publication_option: {
      type: String,
    },
    participation_type: {
      type: String,
    },
    mobile_no: {
      type: String,
    },
    co_authors: {
      type: [String],
    },
    paper_abstract: {
      type: String,
    },
    keywords: {
      type: String,
    },
    paper_category: {
      type: String,
    },
    status: {
      type: String,
      },
    fields_of_research: {
      type: [String],
    },
    reviewer:{
      type: String,
      default:"roshan",
    },
  },
  {
    timestamps: true,
  }
);

const Paper = mongoose.models.Paper || mongoose.model('Paper', paperSchema);
export default Paper;
