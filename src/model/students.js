import mongoose from "./database.js";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mentors",
      default: null,
    },
  },
  {
    collection: "students",
    versionKey: false,
  }
);

const StudentsModel = mongoose.model("students", studentSchema);
export default StudentsModel