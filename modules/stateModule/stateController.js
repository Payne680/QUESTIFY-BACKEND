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
      .then((states) => {
        /*    console.log(states[0].toJSON());
          console.log(states.toJSON()); */
        res.status(201).send(
          states.map((state) => {
            const rebase = state.toJSON();
            return { ...rebase, db_id: rebase.id };
          })
        );
        /*  res.status(201).send(states); */
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  }

  getOneState(req, res) {
    this.stateService
      .getOneState(req.params.id)
      .then((State) => res.status(201).send(State))
      .catch((err) => res.status(500).send(err));
  }

  /*   createOneState(req, res) {
    const title = req.body;
    console.log(title,50);
    if (!title) {
      return res.status(406).send({ message: "Missing State Info" });
    }
    this.stateService
      .addState(title)
      .then((State) => res.status(201).send(State))
      .catch((err) => res.status(500).send(err));
  } */

  async createOneState(req, res) {
    const el = req.body;
    console.log(el);

    /*  board.map(async (el) => { */
    if (!el.title) {
      return res.status(406).send({ message: "Missing Project Info" });
    }

    try {
      let columns = { ...el, id: el.db_id };
      if (el.db_id === null) {
        columns = await this.stateService.addState(el.title);
        console.log(el.title);
        columns.save();
        columns = columns.toJSON();
      }

      const task = await this.taskService.addTask(el.cards, columns.id);

      res.status(201).send({ ...columns, cards: task });
    } catch (e) {
      console.error(e);
      res.status(500).send(e);
    }
    /*     }); */
  }

  async patchOneState(req, res) {
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
