import "./style.scss";
import Project from "./project/project";
import Task from "./task/task";
import Store from "./store/store";
import Pagination from "./pagination/page";
import UI from "./ui/ui";
import Aside from "./sidebar/sidenav";

const body = document.getElementsByTagName("body")[0];
let page = new Pagination(Aside().arrSelector());
const mainArr = Object.values(Store.getTask());
const asideTag = document.getElementsByTagName("aside")[0];
console.log(Store.getTask());
Project.projectSelcectOption();

asideTag.addEventListener("click", (e) => {
  let array = Aside().arrSelector(e.target.id);
  if (Array.isArray(array)) {
    page = new Pagination(array);
    page.changePage(1);
  }
});
console.log(mainArr);

document.addEventListener("DOMContentLoaded", () => {
  Project.displayProjects();
  if(Array.isArray(Aside().arrSelector())){
    page.changePage(1);
  }
});

document.getElementById("newProjectForm").addEventListener("submit", (e) => {
  const projectName = document.getElementById("projectName").value;

  // Project.addProject(projectName);
  UI.projectValidator(projectName, e);

  console.log(Project.getProject());
});

document.getElementById("create-form").addEventListener("submit", (e) => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const priority = document.getElementById("priority").value;
  const project = document.getElementById("project").value;
  let curr_id = mainArr.length + 1

  // const task = new Task(title, description, date, priority, project);
  // Store.addTask(task);
  UI.taskValidator(title, description, date, priority, project, curr_id);
  console.log(Store.getTask());
});

body.addEventListener("click", (e) => {
  if (e.target.id === "btn_prev") {
    page.prevPage();
  } else if (e.target.id === "btn_next") {
    page.nextPage();
  }

  UI.checkBox(e.target)
  console.log(e.target.nextSibling)
});
