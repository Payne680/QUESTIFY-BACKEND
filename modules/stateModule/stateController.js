const StateService = require("./stateService");

class StateController {
  constructor() {
    this.stateService = new StateService();
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

    if (!(name )) {
      return res.status(406).send({ message: "Missing State Info" });
    }
    this.stateService
      .addState(name)
      .then((State) => res.status(201).send(State))
      .catch((err) => res.status(500).send(err));
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
