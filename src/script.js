import css from "./styles.css";

// IMPORTS
import Item from "./classes/item";
import storeData from "./utils/formDataUtils";
import { extractData } from "./utils/formDataUtils";
import Project from "./classes/project";
import { storeProjectData } from "./utils/formDataUtils";
import { extractProjectData } from "./utils/formDataUtils";


// VARIABLES
const form = document.getElementById('form');
const projectForm = document.getElementById('projectForm');
const userItems = [];
const userProjects = [];
const defaultProject = new Project({
    title: "default",
    details: "",
    priority: null,
    dueDate: null,
    dueTime: null
});
userProjects.push(defaultProject);


// load Projects on DOM load
window.addEventListener('DOMContentLoaded', () => {
    const hostProject = document.getElementById('hostProject');

    for (let i = 0; i < userProjects.length; i++) {
        let option = userProjects[i];
        let selection = document.createElement('option');
        selection.textContent = option.title;
        selection.value = option.title;
        hostProject.appendChild(selection);
    }
});




// Open-Close Item Form Modal
const addBtn = document.getElementById('addBtn');
const exitBtn = document.getElementById('exitForm');
const modal = document.getElementById('modal');

addBtn.addEventListener('click', () => {
    modal.classList.add('modalOpen');
    modal.classList.remove('modal');
    console.log(userProjects);
});
exitBtn.addEventListener('click', () => {
    modal.classList.add('modal');
    modal.classList.remove('modalOpen');
});
// Project Modal Open-Close
const projectModal = document.getElementById('projectModal');
const projectBtn = document.getElementById('addPrjct');
const projectExitBtn = document.getElementById('exitPrjctForm');

projectBtn.addEventListener('click', () => {
    projectModal.classList.add('modalOpen');
    projectModal.classList.remove('modal');
});
projectExitBtn.addEventListener('click', () => {
    projectModal.classList.add('modal');
    projectModal.classList.remove('modalOpen');
});



// Saves new Item
form.addEventListener('submit', (e) => {
    e.preventDefault();
    userItems.push(storeData());
    // Adds to selected Project
    addToProject(storeData());
    modal.classList.add('modal');
    modal.classList.remove('modalOpen');

    console.log(userItems);
    console.log(userProjects);
});
// ADDS NEW ITEM to SELECTED PROJECT
function addToProject(Item) {
    for (let i = 0; i < userProjects.length; i++) {
        if (Item.hostProject == userProjects[i].title) {
            userProjects[i].items.push(Item);
        }
    }
}

// Saves new Project
projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    storeProjectData();
    userProjects.push(extractProjectData());
    projectModal.classList.add('modal');
    projectModal.classList.remove('modalOpen');

    const hostProject = document.getElementById('hostProject');

    for (let i = 0; i < userProjects.length; i++) {
        let option = userProjects[i];
        let selection = document.createElement('option');
        selection.textContent = option.title;
        selection.value = option.title;
        hostProject.appendChild(selection);
    }

    popProjects();
    console.log(userProjects);
});






// MODIFY DOM CONTENT
const projectsContent = document.getElementById('projectsContent');
const itemsContent = document.getElementById('itemsContent');
const detailsContent = document.getElementById('detailsContent');

function popProjects() {
    projectsContent.innerHTML = "";

    for (let i = 0; i < userProjects.length; i++) {
        const projectBtn = document.createElement('button');
        projectBtn.classList.add('projectBtn');
        projectBtn.textContent = userProjects[i].title;
        projectsContent.appendChild(projectBtn);


        projectBtn.addEventListener('click', () => {
            detailsContent.innerHTML = "";
            Object.keys(userProjects[i]).forEach(key => {
                const value = userProjects[i][key];
        
                const detail = document.createElement('p');
                detail.classList.add('detail');
                detail.textContent = `${key}: ${value}`;
                detailsContent.appendChild(detail);
            });

            itemsContent.innerHTML = ""; 

            for (let j = 0; j < userProjects[i].items.length; j++) {
                const thisItem = userProjects[i].items[j];
                const itemBtn = document.createElement('button');
                itemBtn.classList.add('itemBtn');
                itemBtn.textContent = userProjects[i].items[j].title;
                itemsContent.appendChild(itemBtn);

                itemBtn.addEventListener('click', () => {
                    detailsContent.innerHTML = "";

                    Object.keys(thisItem).forEach(key => {
                        const value = thisItem[key];
                
                        const detail = document.createElement('p');
                        detail.classList.add('detail');
                        detail.textContent = `${key}: ${value}`;
                        detailsContent.appendChild(detail);
                    });
                });
            }
        });
    }
}
popProjects();

