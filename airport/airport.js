'use strict';
(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Person.prototype.getData = function () {
        return this.name + ' ' + this.surname;
    };

    function Seat(number, category) {
        this.number = (typeof number != "number") ? parseInt(Math.random() * (100 - 10) + 10) : number;
        this.category = (category != "e" && category != "b") ? "e" : category;
    }

    Seat.prototype.getData = function () {
        return this.number + ', ' + this.category.toUpperCase();
    };

    function Passenger(personObj, seatObj) {
        this.person = personObj;
        this.seat = seatObj;
    }

    Passenger.prototype.getData = function () {
        var fullCategoryName;
        if (this.seat.category == "e") {
            fullCategoryName = "economy";
        } else {
            fullCategoryName = "business"
        }
        return this.seat.number + ", " + fullCategoryName + ", " + this.person.getData();
    };

    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listOfPassengers = [];
    }

    Flight.prototype.addPassenger = function (passengerObj) {
        for (var i = 0; i < this.listOfPassengers.length; i++) {
            var currentPassenger = this.listOfPassengers[i];
            var currentSeatNumber = currentPassenger.seat.number;
            var currentFullName = currentPassenger.person.getData();
            if (passengerObj.seat.number == currentSeatNumber) {
                passengerObj.seat.number = parseInt(Math.random() * (100 - 10) + 10);
                i = -1;
                continue;
            }
            if (passengerObj.person.getData() == currentFullName) {
                this.listOfPassengers[i] = passengerObj;
                return;
            }
        }
        this.listOfPassengers.push(passengerObj);
    };

    Flight.prototype.formatRelation = function () {
        var arrayOfWords = this.relation.split(" - ");
        var arrayOfFormatedWords = [];
        for (var i = 0; i < arrayOfWords.length; i++) {
            var arrayOfConsonants = [];
            var currentWord = arrayOfWords[i];
            for (var j = 0; j < currentWord.length; j++) {
                var currentChar = currentWord[j];
                switch (currentChar) {
                    case "a":
                    case "e":
                    case "i":
                    case "o":
                    case "u":
                        break;
                    default:
                        arrayOfConsonants.push(currentChar);
                        break;
                };
            }
            var lastIndex = arrayOfConsonants.length - 1;
            var firstConsonant = arrayOfConsonants[0];
            var lastConsonant = arrayOfConsonants[lastIndex];
            var formatedWord = firstConsonant.toUpperCase() + lastConsonant.toUpperCase();
            arrayOfFormatedWords.push(formatedWord);
        }
        return arrayOfFormatedWords.join(" - ");
    };
    Flight.prototype.getBusinessTotal = function () {
        var businessTotal = 0;
        var currentPassenger;
        for (var i = 0; i < this.listOfPassengers.length; i++) {
            currentPassenger = this.listOfPassengers[i];
            if (currentPassenger.seat.category == "b") {
                businessTotal++;
            }
        }
        return businessTotal;
    };
    Flight.prototype.getData = function () {
        var passengersPrint = "";
        for (var i = 0; i < this.listOfPassengers.length; i++) {
            var currentPassenger = this.listOfPassengers[i];
            passengersPrint += "\t\t\t";
            passengersPrint += currentPassenger.getData();
            passengersPrint += "\n";
        }
        return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + this.formatRelation() + ", " + this.getBusinessTotal() + " passanger(s) in business category\n" + passengersPrint;
    };


    function Airport() {
        this.name = 'Nikola Tesla';
        this.listOfFlights = [];
    }

    Airport.prototype.addFlight = function (flightObj) {
        this.listOfFlights.push(flightObj);
    };

    Airport.prototype.getData = function () {
        var flightPrint = "";
        var totalPassengers = 0;
        var businessTotal = 0;
        for (var i = 0; i < this.listOfFlights.length; i++) {
            var currentFlight = this.listOfFlights[i];
            flightPrint += "\t";
            flightPrint += currentFlight.getData();
            totalPassengers += currentFlight.listOfPassengers.length;
            businessTotal += currentFlight.getBusinessTotal();
        }
        return "Airport: " + this.name + ", total passengers " + totalPassengers + ", " + " business category passengers " + businessTotal + "\n" + flightPrint;
    };

    function createPassenger(firstName, lastName, seatNumber, category) {
        var person = new Person(firstName, lastName);
        var seat = new Seat(seatNumber, category);
        return new Passenger(person, seat);
    }

    function createFlight(relation, dateObj) {
        return new Flight(relation, dateObj);
    }


    //----------PASSENGER---------
    var passenger1 = createPassenger("John", "Snow", 1, "b");
    var passenger2 = createPassenger("John", "Snow", 1, "b");
    var passenger3 = createPassenger("Daenerys", "Targaryen", 5);
    var passenger4 = createPassenger("Tyrion", "Lanister");

    //---------FLIGHT--------
    var flight1 = createFlight("Belgrade - New York", new Date("October-25-2017"));
    var flight2 = createFlight("Barcelona - Belgrade", new Date("November-11-2017"));
    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    //-------AIRPORT--------
    var airport1 = new Airport();
    airport1.addFlight(flight1);
    airport1.addFlight(flight2);
    console.log(airport1.getData());

})();
