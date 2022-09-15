const dp = require('./dp.json');
const newData = {
    data: dp.data,
    summary: [],
    category: []
}

dp.summary.forEach((cat) => {
    const newCat = {
        id: cat.id,
        title: cat.title,
        header: cat.header,
        description: cat.description
    }

    cat.items.forEach(course => {
        course.categoryId = cat.id;
    })

    newData.category.push(newCat);
    newData.summary.push(...cat.items);
})

const fs = require("fs");

fs.writeFile("dp1.json", JSON.stringify(newData, null, 2), (err) => {
    if (err) throw err;
    console.log("Completed!");
});
