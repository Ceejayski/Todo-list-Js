class Project {
  static getProject() {
    let projects;
    if (localStorage.getItem("projects") === null) {
      projects = ["Default"];
    } else {
      projects = JSON.parse(localStorage.getItem("projects"));
    }
    return projects;
  }

  static addProject(name) {
    const projects = Project.getProject();

    projects.push(name);

    localStorage.setItem("projects", JSON.stringify(projects));
  }

  static displayProjects() {
    const projects = Project.getProject();
    const projectList = document.querySelector('.project-nav-list')

    for (const index in projects) {
      let projectLink = document.createElement('li')
      projectLink.className = 'd-flex pt-2'
      projectLink.innerHTML = `<a href="#" class="link-dark text-center w-100 rounded" id="project${index}">${projects[index]}</a>`
      projectList.appendChild(projectLink)
    }
    console.log(typeof(projects[0]))
  }

  static projectSelcectOption() {
    const select = document.getElementById('project')
    const projects = Project.getProject();
    for (const index in projects){

      let projectOption = document.createElement('option')
      projectOption.value = index
      projectOption.textContent = projects[index]
      select.appendChild(projectOption)
      console.log(index)
    }
  }
}

export default Project;
