const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(function callback(el) {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.childElementCount}`);
})


