(()=>{"use strict";class t{constructor({title:t,dueDate:e,dueTime:n,details:o,priority:l,hostProject:s}){this.title=t,this.dueDate=e,this.dueTime=n,this.details=o,this.priority=l,this.hostProject=s}print(){console.log("Title: "+this.title),console.log("Due Date: "+this.due),console.log("Details: "+this.details),console.log("Priority: "+this.priority)}}class e{constructor({title:t,details:e,dueDate:n,dueTime:o,priority:l}){this.title=t,this.dueDate=n,this.dueTime=o,this.details=e,this.priority=l,this.items=[]}}function n(){const e=new FormData(form),n=Object.fromEntries(e);console.log(n),console.log(n.hostProject);const o=new t({title:n.title,dueDate:n.dueDate,dueTime:n.dueTime,details:n.details,priority:n.priority,hostProject:n.hostProject});return console.log(o.hostProject),o}const o=document.getElementById("form"),l=document.getElementById("projectForm"),s=[],i=[],d=new e({title:"default",details:"",priority:null,dueDate:null,dueTime:null});i.push(d),window.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("hostProject");for(let e=0;e<i.length;e++){let n=i[e],o=document.createElement("option");o.textContent=n.title,o.value=n.title,t.appendChild(o)}}));const c=document.getElementById("addBtn"),a=document.getElementById("exitForm"),r=document.getElementById("modal");c.addEventListener("click",(()=>{r.classList.add("modalOpen"),r.classList.remove("modal"),console.log(i)})),a.addEventListener("click",(()=>{r.classList.add("modal"),r.classList.remove("modalOpen")}));const m=document.getElementById("projectModal"),u=document.getElementById("addPrjct"),p=document.getElementById("exitPrjctForm");u.addEventListener("click",(()=>{m.classList.add("modalOpen"),m.classList.remove("modal")})),p.addEventListener("click",(()=>{m.classList.add("modal"),m.classList.remove("modalOpen")})),o.addEventListener("submit",(t=>{t.preventDefault(),s.push(n()),function(t){for(let e=0;e<i.length;e++)t.hostProject==i[e].title&&i[e].items.push(t)}(n()),r.classList.add("modal"),r.classList.remove("modalOpen"),console.log(s),console.log(i)})),l.addEventListener("submit",(t=>{t.preventDefault(),function(){const t=document.getElementById("projectForm"),e=new FormData(t),n=Object.fromEntries(e),o=JSON.stringify(n);console.log(n),console.log(o),localStorage.setItem("projectForm",o)}(),i.push(function(){const t=localStorage.getItem("projectForm"),n=JSON.parse(t),o=new e({title:n.prjctTitle,dueDate:n.prjctDueDate,dueTime:n.prjctDueTime,details:n.prjctDetails,priority:n.prjctPriority});return console.log(o),o}()),m.classList.add("modal"),m.classList.remove("modalOpen");const n=document.getElementById("hostProject");n.innerHTML="";for(let t=0;t<i.length;t++){let e=i[t],o=document.createElement("option");o.textContent=e.title,o.value=e.title,n.appendChild(o)}L(),console.log(i)}));const h=document.getElementById("projectsContent"),g=document.getElementById("itemsContent"),E=document.getElementById("detailsContent");function L(){h.innerHTML="";for(let t=0;t<i.length;t++){const e=document.createElement("button");e.classList.add("projectBtn"),e.textContent=i[t].title,h.appendChild(e),e.addEventListener("click",(()=>{E.innerHTML="",Object.keys(i[t]).forEach((e=>{const n=i[t][e],o=document.createElement("p");o.classList.add("detail"),o.textContent=`${e}: ${n}`,E.appendChild(o)}));const e=document.createElement("button");e.classList.add("deleteBtn"),e.textContent="delete",E.appendChild(e),e.addEventListener("click",(()=>{i.splice(t,1),L()})),function e(){g.innerHTML="";for(let n=0;n<i[t].items.length;n++){const o=i[t].items[n],l=document.createElement("button");l.classList.add("itemBtn"),l.textContent=i[t].items[n].title,g.appendChild(l),l.addEventListener("click",(()=>{E.innerHTML="",Object.keys(o).forEach((t=>{const e=o[t],n=document.createElement("p");n.classList.add("detail"),n.textContent=`${t}: ${e}`,E.appendChild(n)}));const l=document.createElement("button");l.classList.add("deleteBtn"),l.textContent="delete",E.appendChild(l),l.addEventListener("click",(()=>{i[t].items.splice(n,1),e()}))}))}}()}))}}L()})();