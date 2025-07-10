// Create a program to store and display user profiles for a basic application. Your
// program should store and display one profile that contains the following:
// ● User name
// ● Age
// ● Subscription status
// ● User’s location
// ● User’s hobbies (at least two)

// Task 1: Create the Profile. Write code to create a profile array containing the
// required elements. Fill the array with data for one fictional user profile. Remember
// to include all the elements (user name, age, subscription status, user’s location,
// user’s hobbies).
let userProfile = [
    "Michael",
    37,
    true,
    {city: "Cincinatti"},
    ["tennis", "ballroom dancing", "painting"]
];
// Task 2: Access and Log Profile Details. Use console.log() to access and display
// the following:
// ● The user’s name.
// ● The second hobby from the hobbies array.
console.log(`${userProfile[0]}, ${userProfile[4][1]}`);

// Task 3: Modify the Profile. Make the following updates:
// ● Update the user’s age to a new value.
// ● Add a new hobby to the hobbies array.
userProfile.fill(38,1,2);
// for(const key in userProfile){ ///thought maybe i could get this to work but didn't change the output...
//     if(typeof userProfile[key] === "object"){
//         let hobbies = userProfile[4]
//         for(let i = 0; i < hobbies.length; i++){
//             if (i === hobbies.length){
//                 hobbies[i] = "cooking"
//             }
//         }

//     }
// }
userProfile[4] = ["tennis", "ballroom dancing", "painting", "cooking"];
console.log(userProfile);
// Task 4: Display the Updated Profile. Log the entire updated profile to verify the
// changes.
