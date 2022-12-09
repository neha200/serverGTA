const { timeStamp } = require("console");
const pool = require("../../db");
const queries = require("./Task_Queries");

const postTask = (req, res) => {
  const { task_heading, task_description, mname, time_posted } = req.body;
  pool.query(
    queries.postTask,
    [task_heading, task_description, mname, time_posted],
    (error, results) => {
      if (error) throw error;
      res.status(200).send("posted task");
    }
  );
};

const getTask = (req, res) => {
  pool.query(queries.getTask, (error, results) => {
      if (error)
          throw error;
      res.json(results.rows);
  })
//   const result = await pool.query(queries.getTask);
//   res.json(result.rows);
};

const updateTask = (req, res) => {
  const { task_heading, task_description, mname, time_posted } = req.body;
  pool.query(
    queries.updateTask,
    [task_heading, task_description, mname, time_posted],
    (error, results) => {
      if (error) throw error;
      res.status(200).send("updated task");
    }
  );
};

const deleteTask = (req, res) => {
  const { task_heading } = req.body;
  pool.query(queries.deleteTask, [task_heading], (error, results) => {
    if (error) throw error;
    res.status(200).send("deleted task");
  });
};

module.exports = {
  postTask,
  getTask,
  updateTask,
  deleteTask,
};
