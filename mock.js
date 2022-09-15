const dp = require('./dp.json');
const newData = {
    data: [],
    summary: [],
    reviews: [],
    category: []
}

newData.category = dp.category;
newData.summary = dp.summary;

dp.data.forEach((course) => {
    course.id = parseInt(course.id);
    course.review.results.forEach((res) => {
        res.courseId = course.id;
        newData.reviews.push(res);
    })

    delete course.review.results;
    newData.data.push(course);
})

const fs = require("fs");

fs.writeFile("dp1.json", JSON.stringify(newData, null, 2), (err) => {
    if (err) throw err;
    console.log("Completed!");
});
