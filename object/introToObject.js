var breakfast = {

    typeOfFoods: ['eggs', 'oatmeal', 'pie', 'sandwich'],
    drinks: ['tea', 'coffee', 'milk', 'orange juice'],
    snack: 'banana',
    isHungry: false,
    time: 10,
    prepareTime: 30,
    doWeNeedToBuyIngridients: true,
    changeTime: function (newTime) {
        breakfast.time = newTime;
    },
    addTypeOfFoods: function (newFood) {
        return breakfast.typeOfFoods[breakfast.typeOfFoods.length] = newFood;
    },

};


breakfast.changeTime(12);
console.log(breakfast.time);


breakfast.addTypeOfFoods('pizza');
console.log(breakfast.typeOfFoods);







function Meal(typeOfFood, drinks, snack, isHungry, time, prepareTime) {

    this.typeOfFoods = typeOfFood;
    this.drinks = drinks;
    this.snack = snack;
    this.isHungry = isHungry;
    this.time = time;
    this.prepareTime = prepareTime;

    this.changeTime = function (newTime) {
        this.time = newTime;
    }

}


var rucak = new Meal('egg', 'water', 'orange', false, 14, 45);


console.log(rucak);

rucak.changeTime(50);

console.log(rucak.time);


function Vacation(country, duration, cost, isExpensive, year) {

    this.country = country;
    this.duration = duration;
    this.cost = cost;
    this.isExpensive = isExpensive;
    this.year = year;

}

var summerVacation = new Vacation('Greece', 14, 300, true, 2019);

console.log(summerVacation);