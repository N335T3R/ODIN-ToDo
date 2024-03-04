import css from "./styles.css";



import Item from "./classes/item";
import storeData from "./utils/formDataUtils";
import { extractData } from "./utils/formDataUtils";

const addBtn = document.getElementById('addBtn');
const exitBtn = document.getElementById('exitForm');
const modal = document.getElementById('modal');
const form = document.getElementById('form');
const userItems = [];

// Open Form

//Save Form Data as Item object
form.addEventListener('submit', (e) => {
    e.preventDefault();
    storeData();
    userItems.push(extractData());
    console.log(userItems);
});
// Open-Close Form Modal
addBtn.addEventListener('click', () => {
    modal.classList.add('modalOpen');
    modal.classList.remove('modal');
});
exitBtn.addEventListener('click', () => {
    modal.classList.add('modal');
    modal.classList.remove('modalOpen');
});
