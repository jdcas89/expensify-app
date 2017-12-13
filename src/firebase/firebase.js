import * as firebase from 'firebase';
import moment from 'moment';

// https://firebase.google.com/docs/reference/js/

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })
// //this also runs for all data existing
// database.ref('expenses').on('child_added', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })
// const expenses = [
//   {
//     description: 'Gum',
//     note:'Biology',
//     amount:195,
//     createdAt: 0
//   },
//   {
//     description: 'Rent',
//     note:'September',
//     amount:3000,
//     createdAt: moment(0).subtract(4, 'day').valueOf()
//   }, 
//   {
//     description: 'Credit card',
//     note:'',
//     amount:4000,
//     createdAt: moment(0).add(4, 'day').valueOf()
//   } 
// ]
//https://firebase.google.com/docs/reference/js/
// database.ref('expenses').push(expenses[0])
// database.ref('expenses').push(expenses[1])
// database.ref('expenses').push(expenses[2])


// database.ref('expenses').once('value')
//   .then((snapshot) => {
//     let expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses);
//   })

  // database.ref('expenses').on('value', (snapshot) => {
  //   let expenses = [];
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id:childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //   })
  //   console.log(expenses);
  // })


//adding data
// database.ref().set({
//   name: 'J.C.',
//   location:{
//     city: 'World',
//     country:'Universe'
//   }
// }).then(() =>{
//   successfulSave()
// }).catch((e) => {
//   failedSave();
// })

//removing data
// database.ref('location/country').set(null);

// database.ref('location/city').remove().then(() => {
//   successfulSave()
// }).catch((e) => {
//   failedSave(e)
// })

//updating data

// database.ref().update({
//   name: 'Annonymous',
//   'location/city':'newCity',
//   job: 'Software developer'
// })

//fetching data

// database.ref().once('value').then((snapshot) => {
//   console.log(snapshot.val())
// })

//subscribe
//
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error: '. e)
// })
// to turn off subscribe
// database.ref().off(onValueChange)

//adding unique values
// database.ref('notes').push({
//   note: 'Testing'
// })

// manipulating a unique entry to the array
// database.ref('notes/UNIQUEID')

// const successfulSave = () => {
//   console.log('Data is updated')
// }

// const failedSave = (e) => {
//   console.log('Data failed to sync. '. e)
// }

// database.ref('location/city').set('test')
