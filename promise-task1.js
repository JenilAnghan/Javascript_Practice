const p1 = new Promise((resolve, rejeact) => {

    const arr = ["jenil", "parth", "piyush", "sahil", "akshay"];

    let isExist = arr.includes("jenil");

    if(isExist){
        // return { name : "jenil"}
        resolve("jenil");
    }else{
        rejeact("not jenil");
    }

    console.log("isExit",isExist);
});


p1.then((key) => {
    console.log("----- key -----", key);
    return key.teacherId
}).catch((err) => {
    console.log("err----->",err.massage);
});