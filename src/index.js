import './style.scss';
import Project from './project/project';
import Store from './store/store';
import Pagination from './pagination/page';
import UI from './ui/ui';
import Aside from './sidebar/sidenav';

const body = document.getElementsByTagName('body')[0];
let page = new Pagination(Aside().arrSelector());
const mainArr = Object.values(Store.getTask());
const asideTag = document.getElementsByTagName('aside')[0];
Project.projectSelcectOption();

asideTag.addEventListener('click', (e) => {
  const array = Aside().arrSelector(e.target.id);
  if (Array.isArray(array)) {
    page = new Pagination(array);
    page.changePage(1);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  Project.displayProjects();
  if (Array.isArray(Aside().arrSelector())) {
    page.changePage(1);
  }
});

document.getElementById('newProjectForm').addEventListener('submit', (e) => {
  const projectName = document.getElementById('projectName').value;

  // Project.addProject(projectName);
  UI.projectValidator(projectName, e);
});

document.getElementById('create-form').addEventListener('submit', (e) => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const priority = document.getElementById('priority').value;
  const project = document.getElementById('project').value;
  const curr_id = mainArr.length + 1;

  // const task = new Task(title, description, date, priority, project);
  // Store.addTask(task);
  const taskNew = UI.taskValidator(e, title, description, date, priority, project, curr_id);
  Store.addTask(taskNew);
});

document.getElementById('edit-form').addEventListener('submit', (e) => {
  UI.editTask(e);

  setTimeout(() => {
    window.location.reload();
  }, 100);
});

body.addEventListener('click', (e) => {
  if (e.target.id === 'btn_prev') {
    page.prevPage();
  } else if (e.target.id === 'btn_next') {
    page.nextPage();
  }

  UI.checkBox(e.target);
  UI.taskInfoDiv(e.target);
  UI.deleteTaskDom(e.target);
});
