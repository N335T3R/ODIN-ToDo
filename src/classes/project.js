export default class Project {
    constructor({title, details, dueDate, dueTime, priority}) {
        this.title = title;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.details = details;
        this.priority = priority;
        this.items = [];
    }
};