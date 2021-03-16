const person = {
    name: 'max',
    age: 20,
    greet() {
        console.log('hello Im ' + this.name);
    }
};
const printName = ({ name, age }) => {
    console.log(name, age);
}
printName(person);

const { name, age } = person;
console.log(name, age);

const hobbies = ['sports', 'cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => {
//     return hobby + ': is a hobby';
// }));
// const copiedArray = [...hobbies];
// const copiedPerson = { ...person }
// hobbies.push('hacer kk');
// person.age = 99;
// console.log(copiedArray);
// console.log(copiedPerson);
// console.log(person);

// const toArray = (...args) => {
//     return args;
// }
// console.log(toArray(1, 2, 3, 4, 5));
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('timer is done!');
    fetchData()
        .then(text => {
            console.log(text + " numero 1");
            return fetchData();
        })
        .then(text2 => {
            console.log(text2 + " numero 2");
        });
}, 2000);

console.log('hello');
console.log('hi!');
