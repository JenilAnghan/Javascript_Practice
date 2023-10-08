const DATA = require("../React_Practice/data.json")


function getCityLength(length){
    let data = DATA.filter((ele) => {
        return ele.city.length > length;
    });
    const cities = data.map((e) => {
        return e.city;
    })
    return cities;
    }

    const x = getCityLength(14);
    console.log("x",x);
