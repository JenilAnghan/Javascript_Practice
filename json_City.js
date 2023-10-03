const DATA = require("../React_Practice/data.json")


function getcitypopulation (population){
    let filterData = DATA.filter((e)=>{
        return e?.city < population

    })

    let cityArr = filterData.map((e)=>{
        return e.population;
    })

    return cityArr
}

let cityList = getcitypopulation("Delhi")
// let cityList2 = getcitypopulation("24973000")
console.log("cityList:", cityList)
// console.log("cityList2:", cityList2)
