import css from "./styles.css";
import Item from "./classes/item";
import storeData from "./utils/formDataUtils";
import { extractData } from "./utils/formDataUtils";
import Project from "./classes/project";
import { storeProjectData } from "./utils/formDataUtils";
import { extractProjectData } from "./utils/formDataUtils";
const form = document.getElementById("form"),
  projectForm = document.getElementById("projectForm"),
  userItems = [],
  userProjects = [],
  defaultProject = new Project({
    title: "default",
    details: "",
    priority: null,
    dueDate: null,
    dueTime: null,
  });
userProjects.push(defaultProject),
  window.addEventListener("DOMContentLoaded", () => {
    const t = document.getElementById("hostProject");
    for (let e = 0; e < userProjects.length; e++) {
      let o = userProjects[e],
        s = document.createElement("option");
      (s.textContent = o.title), (s.value = o.title), t.appendChild(s);
    }
  });
const addBtn = document.getElementById("addBtn"),
  exitBtn = document.getElementById("exitForm"),
  modal = document.getElementById("modal");
addBtn.addEventListener("click", () => {
  modal.classList.add("modalOpen"),
    modal.classList.remove("modal"),
    console.log(userProjects);
}),
  exitBtn.addEventListener("click", () => {
    modal.classList.add("modal"), modal.classList.remove("modalOpen");
  });
const projectModal = document.getElementById("projectModal"),
  projectBtn = document.getElementById("addPrjct"),
  projectExitBtn = document.getElementById("exitPrjctForm");
function addToProject(t) {
  for (let e = 0; e < userProjects.length; e++)
    t.hostProject == userProjects[e].title && userProjects[e].items.push(t);
}
projectBtn.addEventListener("click", () => {
  projectModal.classList.add("modalOpen"),
    projectModal.classList.remove("modal");
}),
  projectExitBtn.addEventListener("click", () => {
    projectModal.classList.add("modal"),
      projectModal.classList.remove("modalOpen");
  }),
  form.addEventListener("submit", (t) => {
    t.preventDefault(),
      userItems.push(storeData()),
      addToProject(storeData()),
      modal.classList.add("modal"),
      modal.classList.remove("modalOpen"),
      console.log(userItems),
      console.log(userProjects);
  }),
  projectForm.addEventListener("submit", (t) => {
    t.preventDefault(),
      storeProjectData(),
      userProjects.push(extractProjectData()),
      projectModal.classList.add("modal"),
      projectModal.classList.remove("modalOpen");
    const e = document.getElementById("hostProject");
    e.innerHTML = "";
    for (let t = 0; t < userProjects.length; t++) {
      let o = userProjects[t],
        s = document.createElement("option");
      (s.textContent = o.title), (s.value = o.title), e.appendChild(s);
    }
    popProjects(), console.log(userProjects);
  });
const projectsContent = document.getElementById("projectsContent"),
  itemsContent = document.getElementById("itemsContent"),
  detailsContent = document.getElementById("detailsContent");
function popProjects() {
  projectsContent.innerHTML = "";
  for (let t = 0; t < userProjects.length; t++) {
    const e = document.createElement("button");
    e.classList.add("projectBtn"),
      (e.textContent = userProjects[t].title),
      projectsContent.appendChild(e),
      e.addEventListener("click", () => {
        (detailsContent.innerHTML = ""),
          Object.keys(userProjects[t]).forEach((e) => {
            const o = userProjects[t][e],
              s = document.createElement("p");
            s.classList.add("detail"),
              (s.textContent = `${e}: ${o}`),
              detailsContent.appendChild(s);
          });
        const e = document.createElement("button");
        e.classList.add("deleteBtn"),
          (e.textContent = "delete"),
          detailsContent.appendChild(e),
          e.addEventListener("click", () => {
            userProjects.splice(t, 1), popProjects();
          }),
          (function e() {
            itemsContent.innerHTML = "";
            for (let o = 0; o < userProjects[t].items.length; o++) {
              const s = userProjects[t].items[o],
                n = document.createElement("button");
              n.classList.add("itemBtn"),
                (n.textContent = userProjects[t].items[o].title),
                itemsContent.appendChild(n),
                n.addEventListener("click", () => {
                  (detailsContent.innerHTML = ""),
                    Object.keys(s).forEach((t) => {
                      const e = s[t],
                        o = document.createElement("p");
                      o.classList.add("detail"),
                        (o.textContent = `${t}: ${e}`),
                        detailsContent.appendChild(o);
                    });
                  const n = document.createElement("button");
                  n.classList.add("deleteBtn"),
                    (n.textContent = "delete"),
                    detailsContent.appendChild(n),
                    n.addEventListener("click", () => {
                      userProjects[t].items.splice(o, 1), e();
                    });
                });
            }
          })();
      });
  }
}
popProjects();
