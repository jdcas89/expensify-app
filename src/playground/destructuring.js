

//Object destructuring

// const person = {
//   name: "Andrew",
//   age: 27,
//   location: {
//     city: "Philadelphia",
//     temp: 88
//   }
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     //name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);


//Array destructuring

const address = [ 'Biesterfeld 299', 'Arnhem', 'Gelderland', '3232MT']

const [ , city, , postalCode ='23123MG'] = address;

console.log(`You are in ${city}. Postal code : ${postalCode}`)

const item = ['Coffee', '$2.00', '$2.50', '$3.00'];

const [itemName, , priceMedium] = item;

console.log(`${itemName} costs ${priceMedium}`)