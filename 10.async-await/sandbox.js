//async & await

const getTodos = async() => {
    const response = await fetch('todos/asyn.json');
    const data = await response.json();
    return data;
}


console.log(1);
console.log(2);


getTodos()
    .then(data => console.log('resolved', data))
    .catch(error => console.log('rejected', error));


console.log(3);
console.log(4);