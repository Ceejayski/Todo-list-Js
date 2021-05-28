import Project from '../project/project';
import Task from '../task/task';
import Store from '../store/store';

class UI {
  static findWithId(array, value) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i].id === value) {
        return i;
      }
    }
    return -1;
  }

  static showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('#main-page');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  static projectValidator(name, e) {
    if (Object.values(Project.getProject()).includes(name)) {
      this.showAlert('Project Already Exists', 'alert-danger');
      name = '';
      e.preventDefault();
    } else if (name === '') {
      this.showAlert('Project name input empty', 'alert-danger');
      name = '';
      e.preventDefault();
    } else {
      this.showAlert('Project Added', 'alert-sucess');
      Project.addProject(name);
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }

  static taskValidator(e, title, description, date, priority, project, id, type = 'new', index = 0) {
    const varDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (title === '' || description === '' || date === '') {
      this.showAlert('Please Fill all Fields', 'alert-danger');
      e.preventDefault();
    } else if (varDate <= today) {
      this.showAlert('enter a valid Date', 'alert-danger');
      date = '';
      e.preventDefault();
    } else {
      let task = new Task(title, description, date, priority, project, id);
      if (type === 'new'){
        Store.addTask(task);
      }else if(type === 'edit'){
        Store.storeUpdate(index, task);
      }
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }

  static checkBox(target) {
    if (target.id.includes('check')) {
      const mainArr = Store.getTask();
      const mainid = parseInt(target.id.replace('check', ''), 10);
      const index = this.findWithId(mainArr, mainid);

      const task = Store.getTask()[index];
      const p = target.nextSibling;
      if (target.checked === true) {
        task.checked = true;
        p.classList.add('slash');
      } else {
        task.checked = false;
        p.classList.remove('slash');
      }
      Store.storeUpdate(index, task);
    }
  }

  static taskInfoDiv(target) {
    if (target.id.includes('paraLink')) {
      const mainArr = Store.getTask();
      const clickMessage = document.querySelector('.click-message');
      const mainTaskDetails = document.querySelector('.main-task-details');
      const id = parseInt(target.id.replace('paraLink', ''), 10);
      const index = this.findWithId(mainArr, id);
      const task = mainArr[index];

      const titleP = document.getElementById('title-info');
      const idP = document.querySelector('.title-id');
      idP.id = `${id}`;
      const formP = document.querySelector('.form-id');
      formP.id = `form${id}`;
      const dateP = document.getElementById('date-info');
      const descriptionP = document.getElementById('description-info');
      const priorityP = document.getElementById('priority-info');
      const projectP = document.getElementById('project-info');
      const title = document.getElementById('edittitle');
      const description = document.getElementById('editdescription');
      const date = document.getElementById('editdate');
      const status = document.getElementById('editstatus');
      const priority = document.getElementById('editpriority');
      const projectInp = document.getElementById('editproject');
      title.value = task.title;
      description.value = task.description;
      date.value = task.date;
      status.checked = task.checked;
      priority.value = task.priority;
      projectInp.options.selectedIndex = parseInt(task.project, 10);

      titleP.innerText = `Title: ${task.title}`;
      dateP.innerText = `Due Date: ${task.date}`;
      descriptionP.innerText = `Description: ${task.description}`;

      if (task.priority === '3') {
        priorityP.innerText = 'Priority: High';
      } else if (task.priority === '2') {
        priorityP.innerText = 'Priority: Medium';
      } else if (task.priority === '1') {
        priorityP.innerText = 'Priority: Low';
      }
      const project = Project.getProject();
      projectP.innerText = `Project: ${project[parseInt(task.project, 10)]}`;

      clickMessage.classList.add('dnone');
      mainTaskDetails.classList.remove('dnone');
    }
  }

  static deleteTaskDom(target) {
    if (target.classList.contains('delete-task')) {
      const mainArr = Store.getTask();
      const idP = document.querySelector('.title-id');
      const clickMessage = document.querySelector('.click-message');
      const mainTaskDetails = document.querySelector('.main-task-details');
      let id;
      if (idP.id != null) {
        id = parseInt(idP.id, 10);
        const index = this.findWithId(mainArr, id);
        const flexDiv = document.getElementById(`paragragh${id}`);
        flexDiv.remove();
        Store.deleteTask(index);
        clickMessage.classList.remove('dnone');
        mainTaskDetails.classList.add('dnone');
      }
    }
  }

  static editTask(e) {
    const title = document.getElementById('edittitle').value;
    const description = document.getElementById('editdescription').value;
    const date = document.getElementById('editdate').value;
    const status = document.getElementById('editstatus').checked;
    const priority = document.getElementById('editpriority').value;
    const project = document.getElementById('editproject').value;
    const mainArr = Store.getTask();
    const idP = document.querySelector('.form-id');
    let id;
    if (idP.id != null) {
      id = parseInt(idP.id.replace('form', ''), 10);
      const index = this.findWithId(mainArr, id);
      this.taskValidator(e, title, description, date, priority, project, id, status, 'edit', index);
    }
  }
}
export default UI;
