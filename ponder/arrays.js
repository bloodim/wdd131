// arrays javascripts

let courses = ['WDD131', 'DANC290', 'REL100', 'ITM111', 'DANC300', 'SPAN120'];

console.log(courses[5]);

// array methods/functions
courses.forEach(item => console.log(item));

let course = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 3,
    instructor: "Brother Warner"
}

console.log(course.instructor);

let coursesArrayOfObjects = [
    {
        name: "Dynamic Web Fundamentals",
        code: "WDD131",
        credits: 2,
        instructor: "Brother Warner"
    },
    {
        name: "Web Fundamentals",
        code: "WDD231",
        credits: 3,
        instructor: "Brother Warner"
    }

];

console.log(coursesArrayOfObjects[1].name + coursesArrayOfObjects[1].code)

let body = document.querySelector('body');

coursesArrayOfObjects.forEach((course) => {
    // build out an HTML div with course contents 
    let courseDiv = `
        <div>
            <h2>${course.name}</h2>
            <p>Code: ${course.code}</p>
            <p>Credits: ${course.credits}</p>
            <p>Instructor ${course.instructor}</p>
        </div>    
    `;
    // add that div to the body
    body.innerHTML += courseDiv;

})
