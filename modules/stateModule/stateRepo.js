const Project = require("../projectModule/project");
const Task = require("../taskModule/task");
const State = require("./state");

class StateRepository {
  getAllState() {
    return State.findAll({
      include: [{ model: Task, attributes: ["title", "id"] }],
    });
  }

  getStateById(id) {
    return State.findByPk(id, { include: Task });
  }

  createState(state) {
    console.log(3, state);
    return State.create(state);
  }

  editState(state, id) {
    return State.update(state, { where: { id } });
  }

  dropState(id) {
    return State.destroy({
      where: { id },
    });
  }
}

module.exports = StateRepository;
