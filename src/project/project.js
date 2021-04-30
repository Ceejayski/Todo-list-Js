class Project {
  static getProject() {
    let projects;
    if (localStorage.getItem('projects') === null) {
      projects = ['Default'];
    } else {
      projects = JSON.parse(localStorage.getItem('projects'));
    }
    return projects;
  }

  static addProject(name) {
    const projects = Project.getProject();

    projects.push(name);

    localStorage.setItem('projects', JSON.stringify(projects));
  }

  static displayProjects() {
    const projects = Project.getProject();
    const projectList = document.querySelector('.project-nav-list');

    for (const index in projects) {
      const projectLink = document.createElement('li');
      projectLink.className = 'd-flex pt-2';
      projectLink.innerHTML = `<a href="#" class="link-dark text-center w-100 rounded" id="project${index}">${projects[index]}</a>`;
      projectList.appendChild(projectLink);
    }
  }

  static projectSelcectOption() {
    const select = document.getElementById('project');
    const editSelect = document.getElementById('editproject');
    const projects = Project.getProject();
    for (const index in projects) {
      const projectOption = document.createElement('option');
      projectOption.value = index;
      projectOption.textContent = projects[index];
      select.appendChild(projectOption);
      editSelect.innerHTML = select.innerHTML;
    }
  }
}

export default Project;
