const StateRepository = require("./stateRepo");

class StateService {
  constructor() {
    this.StateRepo = new StateRepository();
  }
  async getAllStates() {
    const allStates = await this.StateRepo.getAllState();
    return allStates;
  }

  async getOneState(id) {
    const oneStates = await this.StateRepo.getStateById(id);
    return oneStates;
  }

  async addState(title) {
    console.log(title, 1);
    return this.StateRepo.createState({ title });
  }

  async editOneState(StateToEdit, id) {
    const State = await this.StateRepo.getStateById(id);

    if (!State) throw new Error("State_DOES_NOT_EXIST");

    await this.StateRepo.editState(StateToEdit, id);

    const updatedState = await this.StateRepo.getStateById(id);

    return updatedState;
  }

  async deleteOneState(id) {
    try {
      await this.StateRepo.dropState(id);
    } catch {
      throw new Error("COULD_NOT_DELETE_State");
    }
  }
}

module.exports = StateService;
