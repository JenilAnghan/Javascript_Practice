const DATA = require("./data.json");

function fivecity() {
  let data = DATA.sort((a, b) => {
    return a.population - b.population;
  });

  let cities = data.slice(0, 5);
  return cities;
}

let x = fivecity();
console.log("----- x -----", x);
