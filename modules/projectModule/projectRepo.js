const Project = require("./project");


class ProjectRepository {
  getAllProject() {
    return Project.findAll();
  }

  getProjectById(id) {
    return Project.findByPk(id);
  }

  createProject(project) {
    return Project.create(project);
  }

  editProject(project, id) {
    return Project.update(project, { where: { id } });
  }

  dropProject(id) {
    return Project.destroy({ where: { id } });
  }

  
}

module.exports = ProjectRepository;