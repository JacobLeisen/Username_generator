const adjective = ['mini', 'giant', 'fluffy', 'ugly', 'cozy', 'hairy', 'tasty', 'small', 'amazing', 'monster'];
const animal = ['hippo', 'cat', 'dog', 'monkey', 'squid', 'giraffe', 'bird', 'eagle', 'spider', 'fox'];

const adjGenerator = arr => {
    let adj = arr[Math.floor(Math.random() * arr.length)];
    return adj;
};
const animalGenerator = arr => {
    let animal = arr[Math.floor(Math.random() * arr.length)];
    return animal;
};
const numGenerator = () => {
    let num = Math.floor(Math.random() * 1000);
    return num;
};
let username = adjGenerator(adjective) + animalGenerator(animal) + numGenerator();


console.log(username);






