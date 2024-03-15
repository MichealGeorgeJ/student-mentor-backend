import mongoose from "./database.js";;

const mentorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "students" }],
  },
  {
    collection: "mentors",
    versionKey: false, 
  }
);

const Mentor = mongoose.model("mentors", mentorSchema);

export default Mentor;