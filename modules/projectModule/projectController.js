const ProjectService = require("./projectService");

class ProjectController {
  constructor() {
    this.projectService = new ProjectService();
  }

  getAllProjects(req, res) {
    this.projectService
      .getAllProjects(req.body)
      .then((Project) => res.status(201).send(Project))
      .catch((err) => res.status(500).send(err));
  }

  getOneProject(req, res) {
    this.projectService
      .getOneProject(req.params.id)
      .then((project) => res.status(201).send(project))
      .catch((err) => res.status(500).send(err));
  }

  createOneProject(req, res) {
    const { title } = req.body;

    if (!(title )) {
      return res.status(406).send({ message: "Missing Project Info" });
    }
    this.projectService
      .addProject(title)
      .then((project) => res.status(201).send(project))
      .catch((err) => res.status(500).send(err));
  }

  patchOneProject(req, res) {
    this.projectService
      .editOneProject(req.body, req.params.id)
      .then((updatedProject) => res.status(202).send(updatedProject))
      .catch((err) => res.status(401).send(err));
  }

  deleteOneProject(req, res) {
    this.projectService
      .deleteOneProject(+req.params.id)
      .then(() => res.sendStatus(202))
      .catch((err) => res.status(500).send(err));
  }
}

// const patchOneProject = async (req, res) => {
//   const Project = await Project.findOne({ where: { id: +req.params.id } });

//   if (!Project) return res.status(401).send("{ Project does not exist }");

//   await Project.update(req.body, { where: { id: +req.params.id } });

//   const updatedProject = await Project.findOne({ where: { id: req.params.id } });

//   res.status(202).send(updatedProject);
// };

/* console.log('this ProjectController in controller', ProjectController, new ProjectController()) */

module.exports = ProjectController;
