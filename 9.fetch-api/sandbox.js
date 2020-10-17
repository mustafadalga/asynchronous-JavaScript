fetch('todos/asyn.json').then(response => {

    console.log("resolved", response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log("rejected", error);
})