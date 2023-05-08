const Task = require("./task");

class TaskRepository {
  getAllTask() {
    return Task.findAll();
  }

  getTaskById(id) {
    return Task.findByPk(id);
  }

  async createTask(state, stateid) {
    return await Task.bulkCreate(
      state.map(({ email }) => {
        return { email, stateid };
      })
    );
  }

  /*  createTask(task) {
    return Task.create(task);
  } */

  editTask(task, id) {
    return Task.update(task, { where: { id } });
  }

  dropTask(id) {
    return Task.destroy({ where: { id } });
  }
}

module.exports = TaskRepository;
