const pool = require('../../db')
const queries= require('./Trainee_queries')
const queriesm= require('../mentor/Mentor_queries')
const bcrypt= require('bcrypt')

// const gettrainee = (req,res)=>{
//     pool.query(queries.gettrainee, (error,results)=>{
//         if(error) throw error
//         res.status(200).json(results.rows);
//     })
//     console.log('getting trainees');   
// }
//login
const gettraineebyemailandpassword=async (req,res)=>{
    const {trainee_email,Tpassword}=req.body
    // console.log(req.body)
    pool.query(queries.checkemailexists,[trainee_email],async (error,results)=>{
        // console.log(results);
        const hashedp=await bcrypt.compare(Tpassword, results.rows[0].tpassword)
        if(!results.rows.length){
            res.send("not a valid user");
        }
        else{
        pool.query(queries.gettraineebyemailandpassword,[trainee_email],(error,results)=>{
            if(results.rows.length && hashedp){
                res.send("login successful");
                res.send(req.body);
            }
        })
        }

    });
}
//post trainee (registration)
const addtrainee=async (req,res)=>{
    //temp color table
    const {Tid,Tname,designation,department,mobile_no,trainee_email,Tpassword}=req.body;
    const hashedPassword = await bcrypt.hash(Tpassword, 10)
    //check if email already present
    pool.query(queries.checkemailexists,[trainee_email], (error,results)=>{
        if(results.rows.length){
            res.send("you are already registered please login");
        }
        // pool.query(queriesm.checkmentorcount,[mentor_email], (error,results)=>{
        //     console.log(results)
        //     if(results.rows.find(count)){
        //         res.send("choose another mentor");
        //     }
        // })
        //add mentor to db
        pool.query(queries.addtrainee,[Tid,Tname,designation,department,mobile_no,trainee_email,hashedPassword],(error,results)=>{
            if(error) throw error;
            res.status(200).send("trainee added successfully")
        })
    });
};

// const removetrainee=async(req,res)=>{
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
//         res.status(200).send("mentor removed successfully");
//     });
// };

// const updatetrainee=(req,res)=>{
//     const id=parseInt(req.params.id);
//     const {categoryname}=req.body;
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

module.exports ={
    gettraineebyemailandpassword,
    addtrainee
}