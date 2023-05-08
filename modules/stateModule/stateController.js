const StateService = require("./stateService");
const TaskService = require("../taskModule/taskService");

class StateController {
  constructor() {
    this.stateService = new StateService();
    this.taskService = new TaskService();
  }

  getAllStates(req, res) {
    this.stateService
      .getAllStates(req.body)
      .then((State) => res.status(201).send(State))
      .catch((err) => res.status(500).send(err));
  }

  getOneState(req, res) {
    this.stateService
      .getOneState(req.params.id)
      .then((State) => res.status(201).send(State))
      .catch((err) => res.status(500).send(err));
  }

  createOneState(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(406).send({ message: "Missing State Info" });
    }
    this.stateService
      .addState(name)
      .then((State) => res.status(201).send(State))
      .catch((err) => res.status(500).send(err));
  }

  async createOneState(req, res) {
    const  board  = req.body;
    console.log(board);

    board.map(async (el) => {
      if (!el.title) {
        return res.status(406).send({ message: "Missing Project Info" });
      }
      try {
        const columns = await this.stateService.addState(el.title);
      
        const task = await this.taskService.addTask(el.cards, columns.id);
        console.log(el.cards,2)
        columns.addTask(task);
        columns.save();
        /*       task.map(async (element) => {
          const url = `${process.env.BASE_URL}/confirmation/${element.inviteToken}`;
          await sendEmail(element.email, "Verify Token", url);
        }); */
        res.status(201).send(columns);
      } catch (e) {
        console.error(e);
        res.status(500).send(e);
      }
    })

    
  }

  patchOneState(req, res) {
    this.stateService
      .editOneState(req.body, req.params.id)
      .then((updatedState) => res.status(202).send(updatedState))
      .catch((err) => res.status(401).send(err));
  }

  deleteOneState(req, res) {
    this.stateService
      .deleteOneState(+req.params.id)
      .then(() => res.sendStatus(202))
      .catch((err) => res.status(500).send(err));
  }
}

// const patchOneState = async (req, res) => {
//   const State = await State.findOne({ where: { id: +req.params.id } });

//   if (!State) return res.status(401).send("{ State does not exist }");

//   await State.update(req.body, { where: { id: +req.params.id } });

//   const updatedState = await State.findOne({ where: { id: req.params.id } });

//   res.status(202).send(updatedState);
// };

/* console.log('this StateController in controller', StateController, new StateController()) */

module.exports = StateController;
