console.log('person1 : shows ticket');

console.log('person2:shows ticket');

const preMovie=async()=> {

    const promiseWifeBringingTickets=new Promise((resolve,reject)=> {

        setTimeout(()=> 

            resolve('ticket'),3000);

    });

    const getpoporn=new Promise((resolve,reject)=> resolve(`popcorn`));

     const addButter=new Promise((resolve,reject)=> resolve(`butter`));

     const getColdDrinks=new Promise((resolve,reject)=>resolve(`colddrinks`));

     let ticket=await promiseWifeBringingTickets;

     console.log(`wife: i have the ${ticket}`);

     console.log(`husband:we should go in`);

     console.log(`wife:no i am hungary`);

     let popcorn=await getpoporn;

     console.log(`husband:i got some ${popcorn}`);

     console.log(`husband:we should go in`);

     console.log(`wife:i need butter`);

       let butter=await addButter;

       console.log(`husband:i got some ${butter} on popcorn`);

       console.log(`husband:we should go in`);

       console.log(`wife:i need colddrinks`);

       let colddrinks=await getColdDrinks;

       console.log(`husband:i got ${colddrinks}`);

       console.log(`husband:anything else dear`);

       console.log(`sife: lets go we are getting late`);

       console.log(`husband:thank you for the reminder`);

       return ticket; 

     }

     preMovie().then((m)=> console.log(`person3:shows ${m}`));

     console.log('person4:shows ticket');

     console.log('person5:shows ticket');         

