// *************************************************
// Async/Await
// Introduced in ES8, async/await makes handling asynchronous code more readable, like synchronous code.


async function fetchDigimondata () {
    try {
        let result = await fetch('https://digimon-api.vercel.app/api/digimon');
        if (!result.ok) {
            throw new Error('Failed to fetch Digimon data');
        }
        let digimons = await result.json();// Promise { <pending> }
        console.log(digimons); // 
        const names = digimons.map((item) => item.name);
        console.log(names);
    }catch(error) {
        console.error(error);
        
    }
    
}

console.log('before');

fetchDigimondata();

console.log('after');





// console.log('before');

// fetch('https://digimon-api.vercel.app/api/digimon')
//     .then((result) => {
//         // console.log(result.json());
//         return result.json();
//     }).then((digimons) => {
//         const names = digimons.map((item) => {
//             return item.name;
//         });
//         // console.log(names);
//         return names;
//     })
//     .then((digimonsNames) => {
//         console.log(digimonsNames);
//     }).catch((error) => {
//         console.error(error);
//     });
// console.log('after');
