//Dataset of Pinab Berry
let data = {"firmness":{"name":"very-hard","url":"https://pokeapi.co/api/v2/berry-firmness/4/"},"flavors":[{"flavor":{"name":"spicy","url":"https://pokeapi.co/api/v2/berry-flavor/1/"},"potency":0},{"flavor":{"name":"dry","url":"https://pokeapi.co/api/v2/berry-flavor/2/"},"potency":0},{"flavor":{"name":"sweet","url":"https://pokeapi.co/api/v2/berry-flavor/3/"},"potency":10},{"flavor":{"name":"bitter","url":"https://pokeapi.co/api/v2/berry-flavor/4/"},"potency":10},{"flavor":{"name":"sour","url":"https://pokeapi.co/api/v2/berry-flavor/5/"},"potency":0}],"growth_time":2,"id":18,"item":{"name":"nanab-berry","url":"https://pokeapi.co/api/v2/item/143/"},"max_harvest":10,"name":"nanab","natural_gift_power":70,"natural_gift_type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"},"size":77,"smoothness":20,"soil_dryness":35}

//Flavor of Pinab Berry
console.log(data.flavors[2]);
//Smoothness of Pinab Berry
console.log(data.smoothness);
//Nature Gift Type of Pinab Berry
console.log(data.natural_gift_type.name);

//Dataset of Victini's Ability, Base Exp, and Forms
let data2 = {"abilities":[{"ability":{"name":"victory-star","url":"https://pokeapi.co/api/v2/ability/162/"},"is_hidden":false,"slot":1}],"base_experience":270,"forms":[{"name":"victini","url":"https://pokeapi.co/api/v2/pokemon-form/494/"}]}

console.log(data2.abilities);

//Dataset of Vicitini's Type
 let victiniType = {"types":[{"slot":1,"type":{"name":"psychic","url":"https://pokeapi.co/api/v2/type/14/"}},{"slot":2,"type":{"name":"fire","url":"https://pokeapi.co/api/v2/type/10/"}}],"weight":40}

console.log(victiniType.types[1]);

