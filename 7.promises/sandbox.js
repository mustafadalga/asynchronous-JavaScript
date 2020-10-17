const getTodos = (resource) => {

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            //console.log(request,request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if (request.readyState === 4) {
                reject("erro gettinf resource");
            }

        })

        request.open('GET', resource);
        request.send();
    });
};


getTodos('todos/assyn.json').then(data => {
    console.log("promise resolve:", data);
}).catch(error => {
    console.log("promise rejected:", error);
})


// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         //resolve("some data");
//         reject("some error");
//     });
// };


// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// })



// getSomething().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error)
// });