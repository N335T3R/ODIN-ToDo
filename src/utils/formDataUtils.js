import Item from "../classes/item";
import Project from "../classes/project";

export default function storeData() {
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);

    console.log(obj);
    console.log(obj.hostProject);

    const item = new Item({
        title: obj.title,
        dueDate: obj.dueDate,
        dueTime: obj.dueTime,
        details: obj.details,
        priority: obj.priority,
        hostProject: obj.hostProject
    });

    console.log(item.hostProject);
    return item;

    // localStorage.setItem('form', json);
}


export function storeProjectData() {
    const projectForm = document.getElementById('projectForm');
    const fd = new FormData(projectForm);
    const obj = Object.fromEntries(fd);
    const json = JSON.stringify(obj);
    console.log(obj);
    console.log(json);

    localStorage.setItem('projectForm', json);
}

export function extractProjectData() {
    const json = localStorage.getItem('projectForm');
    const obj = JSON.parse(json);

    const project = new Project({
        title: obj.prjctTitle,
        dueDate: obj.prjctDueDate,
        dueTime: obj.prjctDueTime,
        details: obj.prjctDetails,
        priority: obj.prjctPriority
    });

    console.log(project);
    return project;
}