export default class Item{
    constructor({title, dueDate, details, priority}) {
        this.title = title;
        this.dueDate = dueDate;
        this.details = details;
        this.priority = priority;
        this.due = new Date(this.dueDate);
    }

    print() {
        console.log("Title: " + this.title);
        console.log("Due Date: " + this.due);
        console.log("Details: " + this.details);
        console.log("Priority: " + this.priority);
    }
};