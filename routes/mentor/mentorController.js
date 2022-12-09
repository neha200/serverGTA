const pool = require("../../db");
const queries = require("./Mentor_queries");
const bcrypt = require("bcrypt");

// const getmentor = (req,res)=>{
//     pool.query(queries.getmentor, (error,results)=>{
//         if(error) throw error
//         res.status(200).json(results.rows);
//     })
//     console.log('getting mentors');
// }

//login
const getmentorbyemailandpassword = async (req, res) => {
  const { mentor_email, Mpassword } = req.body;
  pool.query(
    queries.checkemailexists,
    [mentor_email],
    async (error, results) => {
      const hashedp = await bcrypt.compare(
        Mpassword,
        results.rows[0].mpassword
      );
      if (error) throw error;
      if (!results.rows.length) {
        res.status(400).send("not a valid mentor");
      } else {
        pool.query(
          queries.getmentorbyemailandpassword,
          [mentor_email],
          (error, results) => {
            if (results.rows.length && hashedp) {
              res.send(req.body.mentor_email);
            } else {
              res.status(400).send("provide valid credentials");
            }
            // if(!hashedp){
            //     res.status(401).send("provide valid credentials")
            // }
          }
        );
      }
    }
  );
};
//post trainee (registration)
const addmentor = async (req, res) => {
  //temp color table
  const {
    Mid,
    Mname,
    designation,
    department,
    mobile_no,
    mentor_email,
    Mpassword,
  } = req.body;
  const hashedPassword = await bcrypt.hash(Mpassword, 10);
  //check if email already present
  pool.query(queries.checkemailexists, [mentor_email], (error, results) => {
    if (results.rows.length) {
      res.send("you are already registered please login");
    }
    // pool.query(queriesm.checkmentorcount,[mentor_email], (error,results)=>{
    //     console.log(results)
    //     if(results.rows.find(count)){
    //         res.send("choose another mentor");
    //     }
    // })
    //add mentor to db
    pool.query(
      queries.addmentor,
      [
        Mid,
        Mname,
        designation,
        department,
        mobile_no,
        mentor_email,
        hashedPassword,
      ],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("mentor added successfully");
      }
    );
  });
};

//profile
// const removeMentor=async(req,res)=>{
//     const categoryid = (req.params.id);
//     console.log(categoryid);
//     pool.query(queries.removeMentor,[categoryid],(error,results)=>{
//         console.log(results)
//         const nomentorfound = !results.rowCount;
//         console.log(error);
//         console.log(nomentorfound);
//         if(nomentorfound){
//             res.send("mentor does not exist");
//         }
//         // if(error) throw error;
//         res.staconsttus(200).send("mentor removed successfully");
//     });
// };
//profile
// const updateMentor=(req,res)=>{
//     const id=parseInt(req.params.id);
//     const {categoryname}=req.body;
//     const hashedp = bcrypt.compare(
//       Mpassword,
//       results.rows[0].mpassword
//     );
//     console.log(hashedp)
//     pool.query(queries.getmentorbyemail,[id],(error,results)=>{
//         const nomentorfound = !results.rows.length;
//         // console.log(nomentorfound);
//         if(nomentorfound){
//             res.send("mentor does not exist");
//         }
//         pool.query(queries.updateMentor,[categoryname,id],(error,results)=>{
//             if(error) throw error;
//             res.status(200).send("successfully updated");
//         });
//     });
// };

module.exports = {
  getmentorbyemailandpassword,
  addmentor,
};
