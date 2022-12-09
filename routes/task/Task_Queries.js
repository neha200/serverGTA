const postTask = "insert into task (task_heading,task_description,mname,time_posted) values($1,$2,$3,$4)"; 
const getTask= "select task_id,task_heading,task_description,mname,time_posted from task order by time_posted asc";
const updateTask="UPDATE task SET task_description=$2 , mname=$3 , time_posted=$4  Where task_heading=$1;"
const deleteTask="delete from task where task_heading=$1"
module.exports={
    postTask,
    updateTask,
    deleteTask,
    getTask
};