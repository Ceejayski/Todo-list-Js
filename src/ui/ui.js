import Project from "../project/project";
import Task from "../task/task";
import Store from '../store/store'

class UI {
  static showAlert(message, className) {
    // Create div
    const div = document.createElement("div");
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector("#main-page");
    // Get form
    const form = document.querySelector("#book-form");
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  static projectValidator(name, e) {
    if (Object.values(Project.getProject()).includes(name)) {
      this.showAlert("Project Already Exists", "alert-danger");
      name = "";
      e.preventDefault();
    } else if (name === "") {
      this.showAlert("Project name input empty", "alert-danger");
      name = "";
      e.preventDefault();
    } else {
      this.showAlert("Project Added", "alert-sucess");
      Project.addProject(name);
    }
  }

  static taskValidator(title, description, date, priority, project, id) {
    const varDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (title === "" || description === "" || date === "") {
      this.showAlert("Please Fill all Fields", "alert-danger");
      e.preventDefault();
    } else if (varDate <= today) {
      this.showAlert("enter a valid Date", "alert-danger");
      date = ''
      e.preventDefault();
    } else {
      const task = new Task(title, description, date, priority, project,id);
      Store.addTask(task);
    }
  }

  static checkBox(target){
    if(target.id.includes('check')){
      let mainid = parseInt(target.id.replace('check', '')) - 1
      let task =  Store.getTask()[mainid]
      let p = target.nextSibling
      if (target.checked === true){
        p.classList.add('slash')
        task.checked = true
      }else{
        p.classList.remove('slash')
        task.checked = false
      }
      console.log(task)
      Store.checkboxUpdate(mainid, task)
      console.log(Store.getTask()[mainid])
    }
  }
}
export default UI;
