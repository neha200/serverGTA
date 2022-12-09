// const getmentor = "select * from mentor"; //temp product table
//temp category table
const getmentorbyemailandpassword="select * from mentor where mentor_email = $1";
//temp color table
const checkemailexists="select * from mentor where mentor_email= $1";
const addmentor="insert into mentor(Mid,Mname, designation,department,mobile_no,mentor_email, Mpassword) VALUES ($1,$2,$3,$4,$5,$6,$7)";
// const removeMentor="delete from mentor where mentor_email = $1";
// const updateMentor="update mentor set mentor_email=$1 where mentor_email=$2 "



module.exports={
    getmentorbyemailandpassword,
    checkemailexists,
    addmentor
};