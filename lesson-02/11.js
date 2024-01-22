let prep = {
    name: "Igor",
     sizes: {
         height: 177,
         weight: 80
     }
 };
 let prep2 = { ...prep, sizes: { ...prep.sizes } };
prep.name = 'Nastya';
prep.sizes.weight = 50;
console.log(prep);
console.log(prep2);