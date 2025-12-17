const items = document.querySelectorAll('.item');
console.log(`Number of caregories: ${items.length}`);

items.forEach(item => {
    const category = item.querySelector('h2').textContent;
    const elCount =item.querySelectorAll('li').length;

    console.log(`Category: ${category}`);
    console.log(`Elements: ${elCount}`);
});