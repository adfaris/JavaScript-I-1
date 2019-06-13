// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  'id': 0,
  'name': 'Example',
  'email': 'examples@you.edu',
  'gender': 'F'
}

// Write your intern objects here:
const intern1 = 
  {
    'id': 0,
    'name': 'Mitzi',
    'email': 'mmelloy0@PushSubscription.edu',
    'gender': 'F'
}
const intern2 = {
  'id': 1,
  'name': 'Kennan',
  'email': 'kdiben1@tinypic.com',
  'gender': 'M',
  'speak' : function () {
    console.log('Hello my name is Kennan')
  }
}
const intern3 = {
  'id': 3,
  'name': 'Keven',
  'email': 'kmummery2@wikimedia.org',
  'gender': 'M'
}

const intern4 = {
  'id': 4,
  'name': 'Gannie',
  'email': 'gmartinson3@illinois.edu',
  'gender': 'M'
}

const intern5 = {
  'id': 5,
  'name': 'Antonietta',
  'email': 'adaine5@samsung.com',
  'gender': 'F',
  'multiplyNums': function (x, y) {
    return x * y
  }
}
// console.log(intern5.multiplyNums(4,5))

// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
// console.log(interns.name = 'Mitzi')
console.log(intern1.name)

// Kennan's ID
// for (let i = 0; i < interns.length; i++) {
//   if (interns[i].name === 'Kennan') {
//     console.log(interns[i].id)
//   }
// }
console.log(intern2.id)

// Keven's email
// for (let i = 0; i < interns.length; i++) {
//   if (interns[i].name === 'Keven') {
//     console.log(interns[i].email)
//   }
// }
console.log(intern3.email)

// Gannie's name
// for (let i = 0; i < interns.length; i++) {
//   if (interns[i].id === 4) {
//     console.log(interns[i].name)
//   }
// }
console.log(intern4.name)


// Antonietta's Gender
// for (let i = 0; i < interns.length; i++) {
//   if (interns[i].name === 'Antonietta') {
//     console.log(interns[i].gender)
//   }
// }
console.log(intern5.gender)

// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
// console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  'name': 'Susan',
  'age': 70,
  'child': {
    'name': 'George',
    'age': 50,
    'speak': function () {
      console.log(`Hello my name is ${this.name}`)
    },
    'grandChild': {
      'name': 'Sam',
      'age': 30,
      'speak': function () {
        console.log(`Hello my name is ${this.name}`)
      }
    }
  },
  'speak': function () {
    console.log(`Hello my name is ${this.name}`)
  }
}

// Log the parent object's name
console.log(parent.name)

// Log the child's age
console.log(parent.child.age)

// Log the name and age of the grandchild
console.log(parent.child.grandChild.name, parent.child.grandChild.age)

// Have the parent speak
parent.speak()

// Have the child speak
parent.child.speak()

// Have the grandchild speak
parent.child.grandChild.speak()