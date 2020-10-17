const getTodos = (resource) => {

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            //console.log(request,request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if (request.readyState === 4) {
                reject("erro getting resource");
            }

        })

        request.open('GET', resource);
        request.send();
    });
};


getTodos('todos/asyn.json').then(data => {
    console.log("promise 1 resolved:", data);
    return getTodos('todos/bootstrap.json');
}).then(data => {
    console.log("promise 2 resolved:", data);
    return getTodos('todos/vue.json');
}).then(data => {
    console.log("promise 3 resolved:", data);
}).catch(error => {
    console.log("promise rejected:", error);
})