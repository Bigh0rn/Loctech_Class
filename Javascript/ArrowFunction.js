// const changeToUpperCase = (arr) => {
//     const newArry = []
//     for (const items of arr){
//         newArry.push(items.toUpperCase())
//     }
//     return newArry
// }

// const countries = ['Algeria', 'United State', 'Sweden', 'Norway', 'Switzerland', 'Nigeria']
// console.log(changeToUpperCase(countries))

// const fullName = (firstName, lastName) => {
//     console.log(`${firstName} ${lastName}`)
//   }
//   fullName('Lord', 'Luggard')

// const luggardWife = (firstName, lastName) => `${firstName} ${lastName}`
// console.log(luggardWife('Miss', 'Flora Shaw'))

// const states = ['Abia', 'Delta', 'Edo', 'Rivers', 'Lagos']
// states.forEach((state, index) => {
//     console.log(state.toUpperCase())
//     console.log(state)
// })

// const cart = [
//     { item: 'Apple', quantity: 10, price: 0.5 },
//     { item: 'Banana', quantity: 5, price: 0.25 },
//     { item: 'Orange', quantity: 8, price: 0.75 },
//     { item: 'Mango', quantity: 3, price: 1.5 },
//     { item: 'Pineapple', quantity: 2, price: 3.0 },
//     { item: 'Grapes', quantity: 15, price: 2.0 },
//     { item: 'Strawberry', quantity: 20, price: 0.1 },
//     { item: 'Blueberry', quantity: 25, price: 0.2 },
//     { item: 'Watermelon', quantity: 1, price: 5.0 },
//     { item: 'Peach', quantity: 7, price: 1.0 },
//     { item: 'Plum', quantity: 6, price: 0.8 },
//     { item: 'Kiwi', quantity: 12, price: 0.6 },
//     { item: 'Papaya', quantity: 4, price: 2.5 },
//     { item: 'Cherry', quantity: 30, price: 0.15 },
//     { item: 'Apricot', quantity: 9, price: 1.2 },
//     { item: 'Pomegranate', quantity: 5, price: 2.8 },
//     { item: 'Lemon', quantity: 10, price: 0.4 },
//     { item: 'Lime', quantity: 10, price: 0.3 },
//     { item: 'Coconut', quantity: 2, price: 3.5 },
//     { item: 'Avocado', quantity: 6, price: 1.8 }
//  ];
// const groceryPrice = cart.map((item, index) => {
//     return item.price
// })
// console.log(groceryPrice)

// function formatNames(names) {
//     return names.map(name => name.toLowerCase().replace(' ', ', '));
// }

// const usernames = formatNames(['John Doe', 'Jane Smith', 'Alice Brown']);
// console.log(usernames);

// const celsiusTemps = [0, 20, 30, 40]
// const Fahrenheit = celsiusTemps.map((c) => c * 1.8 + 32)
// console.log(Fahrenheit)
// console.log(Fahrenheit[2])

// const users = [
//     { name: 'Alice Wonderland', age: 25 },
//     { name: 'Bob Builder', age: 17 },
//     { name: 'Charlie Brown', age: 32 },
//     { name: 'Daisy Duke', age: 19 }
// ];
// const Adults = users.filter(user => user.age >= 18)
// console.log(Adults)

// const usernames = users.map(user => user.name.toLowerCase().replace(' ', '_'))
// console.log(usernames)

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);
// const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// console.log(product);


function greet(name = 'Stranger') {
    console.log(`Hello, ${name}!`)
}
greet()
greet('Deji')
