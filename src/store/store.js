class Store {
  static getTask() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }

  static getID() {
    let id;
    if (localStorage.getItem('taskId') === null) {
      id = 0
    } else {
      id = parseInt(localStorage.getItem('taskId'), 10)
    }
    return id
  }

  static setID() {
    let id = this.getID();

    let newID = id + 1

    localStorage.setItem('taskId', newID)
  }

  static addTask(task) {
    const tasks = Store.getTask();
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static storeUpdate(index, task) {
    const tasks = Store.getTask();
    tasks[index] = task;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static deleteTask(index) {
    const tasks = Store.getTask();

    tasks.splice(index, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static displayTask(task) {
    const taskPara = document.createElement('p');
    const flex = document.createElement('div');
    flex.className = 'd-flex';
    flex.id = `paragragh${task.id}`;
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.className = 'todo-check mt-1';
    checkbox.id = `check${task.id}`;
    const paragraph = document.createElement('p');
    if (task.checked === true) {
      checkbox.setAttribute('checked', true);
      paragraph.classList.add('slash');
    }

    paragraph.innerHTML = `<a href="#" id="paraLink${task.id}"> ${task.title}: ${task.description} due ${task.date}
    </a>`;
    flex.appendChild(checkbox);
    flex.appendChild(paragraph);
    taskPara.appendChild(flex);

    return taskPara;
  }
}

export default Store;
