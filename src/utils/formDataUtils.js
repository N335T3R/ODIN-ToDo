import Item from "../classes/item";

export default function storeData() {
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    const json = JSON.stringify(obj);

    localStorage.setItem('form', json);
}

export function extractData() {
    const json = localStorage.getItem('form');
    const obj = JSON.parse(json);

    const item = new Item({
        title: obj.title,
        dueDate: obj.dueDate,
        details: obj.details,
        priority: obj.priority
    });

    return item;
}
