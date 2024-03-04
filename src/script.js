import Item from "./classes/item";
import storeData from "./utils/formDataUtils";
import { extractData } from "./utils/formDataUtils";

const form = document.getElementById('form');
const userItems = [];

//Save Form Data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    storeData();
    userItems.push(extractData());
    console.log(userItems);
});


