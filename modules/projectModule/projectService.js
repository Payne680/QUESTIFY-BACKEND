const ProjectRepository = require("./projectRepo");

class ProjectService {
  constructor() {
    this.projectRepo = new ProjectRepository(); 
  }
  async getAllProjects() {
    const allProjects = await this.projectRepo.getAllProject();
    return allProjects;
  }

  async getOneProject(id) {
    const oneProjects = await this.projectRepo.getProjectById(id);
    return oneProjects;
  }

  async addProject(title) {
    return this.projectRepo.createProject({
      title
    });
  }

  async editOneProject(projectToEdit, id) {
    const project = await this.projectRepo.getProjectById(id);

    if (!project) throw new Error("Project_DOES_NOT_EXIST");

    await this.projectRepo.editProject(projectToEdit, id);

    const updatedProject = await this.projectRepo.getProjectById(id);

    return updatedProject;
  }

  async deleteOneProject(id) {
    try {
      await this.projectRepo.dropProject(id);
    } catch {
      throw new Error("COULD_NOT_DELETE_Project");
    }
  }

}

module.exports = ProjectService;