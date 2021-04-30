class Task {
  constructor(title, description, date, priority, project, id, checked = false) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.project = project;
    this.id = id;
    this.checked = checked;
  }
}

export default Task;
