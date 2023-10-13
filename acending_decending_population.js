// const DATA = require("./data.json")


// function data (){
//     let dat = DATA.sort((a,b) => {
//         return a.population - b.population
//     })

//     return dat
// }

// let x = data()
// console.log(x)



const DATA = require("./data.json");

function data() {
  let dat = DATA.sort((a, b) => {
    return b.population - a.population;
  });

  return dat;
}

let x = data("population");
console.log(x);
