// const gettrainee = "select * from trainee"; //temp product table
//temp category table
const gettraineebyemailandpassword="select * from trainee where trainee_email = $1";
//temp color table
const checkemailexists="select * from trainee where trainee_email= $1";
const addtrainee="insert into trainee(Tid,Tname,designation,department,mobile_no,trainee_email,Tpassword) VALUES ($1,$2,$3,$4,$5,$6,$7)";
// const removetrainee="delete from mentor where trainee_email = $1";
// const updatetrainee="update trainee set trainee_email=$1 where trainee_email=$2 "


module.exports={
    gettraineebyemailandpassword,
    checkemailexists,
    addtrainee,
};