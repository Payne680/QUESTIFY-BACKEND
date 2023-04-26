const TaskRepository = require("./taskRepo");

class TaskService {
  constructor() {
    this.TaskRepo = new TaskRepository(); 
  }
  async getAllTasks() {
    const allTasks = await this.TaskRepo.getAllTask();
    return allTasks;
  }

  async getOneTask(id) {
    const oneTasks = await this.TaskRepo.getTaskById(id);
    return oneTasks;
  }

  async addTask(title) {
    try {

      const newTask = await this.TaskRepo.createTask({
        title
      })
      return newTask;
      
    }
    catch(err) {
      throw new Error("COULD_NOT_REGISTER_Task");
    }
  }

  async editOneTask(TaskToEdit, id) {
    const Task = await this.TaskRepo.getTaskById(id);

    if (!Task) throw new Error("Task_DOES_NOT_EXIST");

    await this.TaskRepo.editTask(TaskToEdit, id);

    const updatedTask = await this.TaskRepo.getTaskById(id);

    return updatedTask;
  }

  async deleteOneTask(id) {
    try {
      await this.TaskRepo.dropTask(id);
    } catch {
      throw new Error("COULD_NOT_DELETE_Task");
    }
  }

}

module.exports = TaskService;