import StudentsModel from '../model/students.js'

const createStudents = async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ error: "Name is required" });
      }
      const existingStudents = await StudentsModel.findOne({ name });
      if (existingStudents) {
        return res.status(400).json({ error: "Students Name exists already" });
      }
      const Students = await StudentsModel.create(req.body);
      res.status(200).json({ message: "Students Created successfully", Students});
    } catch (error) {
      console.error("Error creating Students:", error);
      console.log({ error: "Failed to create Students!! Try Again " });
    }
  };
  
  const getAllStudents = async(req,res)=>{
    try{
const allStudentss = await StudentsModel.find();
res.json(allStudentss)
    }
    catch(error){
        console.error("Error fetching all Studentss:", error);
        console.log({ error: "Failed to fetch all Studentss!! Try Again " });
    }
}

  export default{
    createStudents, 
    getAllStudents
  }