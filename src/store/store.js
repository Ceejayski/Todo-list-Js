class Store {
  static getTask() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    return tasks;
  }

  static addTask(task) {
    const tasks = Store.getTask();
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  static checkboxUpdate(index,task) {
    const tasks = Store.getTask();
    tasks[index] = task

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  static displayTask(task) {
    let taskPara = document.createElement("p");
    let flex = document.createElement('div')
    flex.className = 'd-flex'
    let checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox")
    checkbox.className = 'todo-check mt-1'
    checkbox.id = `check${task.id}`
    if(task.checked === true){
      checkbox.setAttribute('checked', true)
    }
    console.log(checkbox.checked)
    let paragraph = document.createElement('p')
    paragraph.innerHTML = `<a href="#"> ${task.title}: ${task.description} due ${task.date}
    </a>`
    flex.appendChild(checkbox)
    flex.appendChild(paragraph)
    taskPara.appendChild(flex)

    return taskPara;
  }
}

export default Store;
