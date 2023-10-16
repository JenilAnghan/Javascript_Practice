const DATA= require("./data.json");


let arr = [];
DATA.map((objEle) => {
  // console.log("objEle", objEle.state_name);
  // objEle.state_name = delhi
  let index = arr.findIndex((ele) => ele.state === objEle.state_name);
  if (index === -1) {
    // console.log("if --------called------>");
    arr.push({
      state: objEle.state_name,
      population: +objEle.population,
    });
    // console.log("arr", arr);
  } else {
    // console.log("else --------called---------------->");
    arr[index].population += +objEle.population;
  }
});
console.log("arr", arr);