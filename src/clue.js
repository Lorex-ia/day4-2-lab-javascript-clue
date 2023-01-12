// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 35,
    description: 'Cool dude',
    image: 'imgJacobGreen',
    color: 'Green',
   },

   {
    firstName: 'Vanessa',
    lastName: 'White',
    occupation: 'Dancer',
    age: 25,
    description: 'Cool girl',
    image: 'imgVanessaWhite',
    color: 'White',
   },

   {
    firstName: 'Sam',
    lastName: 'Blu',
    occupation: 'Scientist',
    age: 30,
    description: 'Chistoso guy',
    image: 'imgSamBlu',
    color: 'Azul',
   },

   {
    firstName: 'Jane',
    lastName: 'Free',
    occupation: 'Fighter',
    age: 29,
    description: 'Courageous lady',
    image: 'imgJaneFree',
    color: 'Lagoon',
   },

   {
    firstName: 'Alex',
    lastName: 'Spriti',
    occupation: 'Artist',
    age: 31,
    description: 'Inventive lady',
    image: 'imgAlexSpirit',
    color: 'Black',
   },

      {
    firstName: 'Emile',
    lastName: 'Lalle',
    occupation: 'Artist',
    age: 27,
    description: 'Beautiful lady',
    image: 'imgEmileLady',
    color: 'Red',
   },


];

// Rooms Array

const roomsArray = [
          {
    name: 'Kitchen',
    Type: 'Kitchen',
   },

         {
    name: 'smallKitchen',
    Type: 'smallKitchen',
   },

            {
    name: 'redKitchen',
    Type: 'redKitchen',
   },
               {
    name: 'greenKitchen',
    Type: 'greenKitchen',
   },

               {
    name: 'blueitchen',
    Type: 'blueKitchen',
   },

               {
    name: 'garden',
    Type: 'gardenn',
   },

               {
    name: 'room',
    Type: 'room',
   },

                  {
    name: 'astro tower',
    Type: 'astro tower',
   },

                     {
    name: 'hogwarts',
    Type: 'hogwartsr',
   },

{
    name: 'gym',
    roomType: 'gym',
   },

    {
    name: 'kingKitchen',
    Type: 'kingKitchen',
    },
        {
    name: 'smallestKitchen',
    Type: 'smallestKitchen',
        },
        
        {
    name: 'redishKitchen',
    Type: 'redishKitchen',
        },

     {
    name: 'blackKitchen',
    Type: 'blackKitchen',
     },
   
        {
    name: 'pool',
    roomType: 'pool',
   },
   

];

// Weapons Array

const weaponsArray = [

    {
    name:'knife',
    weight:5,
},

    {
    name:'fork',
    weight:2,
},

    {
    name:'bottle',
    weight:6,
},

    {
    name:'glass',
    weight:0,
},

    {
    name:'popcorn',
    weight:1,
},

    {
    name:'window',
    weight:6,
},

    {
    name:'rock',
    weight:9,
},

    {
    name:'knife2',
    weight:45,
},

    {
    name:'surf',
    weight:78,
},
];


// ITERATION 2


function selectRandom() {
    if(!suspectsArray.length){
        return undefined
    }
let randomIndex = Math.floor(Math.random() * suspectsArray.length);
let randomSuspect = suspectsArray[randomIndex];
return randomSuspect;

};
console.log(selectRandom());



function pickMystery() {
    let outerArray = [{key: 'suspect', array: suspectsArray}, {key: 'weapon', array: weaponsArray}, {key: 'room', array: roomsArray}];
    let mystery = {};
    outerArray.forEach(({key, array}) => {
        let randomIndex = Math.floor(Math.random() * array.length);
        mystery[key] = array[randomIndex];
    });
    return mystery;
}
console.log(pickMystery());


// ITERATION 3
// Declare a function named revealMystery that receives an envelope object (with the shape of the object returned by pickMystery) as the single argument, and returns a revealing message in the following format:

// <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!

function revealMystery() {}

