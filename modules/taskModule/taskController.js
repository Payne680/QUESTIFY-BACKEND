const TaskService = require("./taskService");

class TaskController {
  constructor() {
    this.TaskService = new TaskService();
  }

  getAllTasks(req, res) {
    this.TaskService
      .getAllTasks(req.body)
      .then((Task) => res.status(201).send(Task))
      .catch((err) => res.status(500).send(err));
  }

  getOneTask(req, res) {
    this.TaskService
      .getOneTask(req.params.id)
      .then((Task) => res.status(201).send(Task))
      .catch((err) => res.status(500).send(err));
  }

  createOneTask(req, res) {
    const { title } = req.body;

    if (!(title )) {
      return res.status(406).send({ message: "Missing Task Info" });
    }
    this.TaskService
      .addTask(title)
      .then((Task) => res.status(201).send(Task))
      .catch((err) => res.status(500).send(err));
  }

  patchOneTask(req, res) {
    this.TaskService
      .editOneTask(req.body, req.params.id)
      .then((updatedTask) => res.status(202).send(updatedTask))
      .catch((err) => res.status(401).send(err));
  }

  deleteOneTask(req, res) {
    this.TaskService
      .deleteOneTask(+req.params.id)
      .then(() => res.sendStatus(202))
      .catch((err) => res.status(500).send(err));
  }
}

// const patchOneTask = async (req, res) => {
//   const Task = await Task.findOne({ where: { id: +req.params.id } });

//   if (!Task) return res.status(401).send("{ Task does not exist }");

//   await Task.update(req.body, { where: { id: +req.params.id } });

//   const updatedTask = await Task.findOne({ where: { id: req.params.id } });

//   res.status(202).send(updatedTask);
// };

/* console.log('this TaskController in controller', TaskController, new TaskController()) */

module.exports = TaskController;
