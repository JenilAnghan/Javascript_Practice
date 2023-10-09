const p1 = new Promise((resolve, rejeact) => {

    const arr = [1,2,3,4,5,6,7,8,9];

    let isExist = arr.includes(1);

    if(isExist){
        // return { name : "jenil"}
        resolve("1");
    }else{
        rejeact("not jenil");
    }

    console.log("isExit",isExist);
});


p1.then((key) => {
    console.log("----- key -----", key);
    return { name : "jenil"}
}).then((key1) => {
    console.log("----- city -----",key1);
    return {city : "surat"}
}).then((key2) => {
    console.log("----- age -----",key2);
    return {age : "20"}
}).then((key3) => {
    console.log("----- key -----",key3);
    return {age : "20"}

})



.catch((err) => {
    console.log("err----->",err.massage);
});



// const p1 = new Promise ((resolve, rejeact) => {
//     const arr =[1, 2, 3, 4, 5, 6];
//     let isExist = arr.includes(6);
//     if (isExist) {
//         resolve({name:"jeel"});
//     }else{
//         rejeact()
//     }
//     console.log("isExist",isExist);
// });
// p1.then((res1) =>{
//     console.log(res1);
//     return {city : "surat"}
// })
// .then((res2) => {
//     console.log(res2);
//     return {age : "20"}
// })

// .then((res3) => {
//     console.log(res3)
// })

// .catch((err) => {
//     console.log("err---->",err)
// })