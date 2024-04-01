"use strict";

function choice(items) {
    const randomIndex = Math.floor((Math.random() * items.length));
    return items[randomIndex];
}

function remove(items, item) {
    const deleteIndex = items.indexOf(item);
    const deletedItem = items.splice(deleteIndex, 1);
    return deletedItem;
}

export { choice, remove };