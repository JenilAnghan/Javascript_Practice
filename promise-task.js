const p1 = new Promise((resolve, rejeact) => {

    const arr = ["jenil", "parth"];

    let isExist = arr.includes("jenil");

    if(isExist){
        resolve("jenil")
    }else{
        rejeact("does not match jenil")
    }
})

const p2 = new Promise((resolve, rejeact) => {

    const city = ["surat", "bhavangar"];

    let isExist = city.includes("surat");

    if(isExist){
        resolve("surat")
    }else{
        rejeact(" do not match surat")
    }
})


const p3 = new Promise((resolve, rejeact) => {

    const age = [70, 90];

    let isExist = age.includes(90);

    if(isExist){
        resolve(90)
    }else{
        rejeact(90)
    }
})


let Promise_all = Promise.all([p1,p2,p3])

Promise_all.then((value) => {
    console.log(value)
})