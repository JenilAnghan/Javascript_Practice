const p1 = new Promise((resolve, rejeact) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let isExist = arr.includes(1);

  if (isExist) {
    // return { name : "jenil"};
    resolve("1");
  } else {
    rejeact("do not match id");
  }

  console.log("isExit", isExist);
});

p1.then((key) => {
  console.log( key);
  return {name: "jenil" };
})

.then((key1) => {
    console.log(key1);
    return { city: "surat" };
})
  

.then((key2) => {
    console.log( key2);
    return { age: "20" };
})
  

.then((key3) => {
    console.log(key3);
    return { age: "20" };
})
  

.catch((err) => {
    console.log("err----->", err.massage);
});
