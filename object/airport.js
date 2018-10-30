"use strict";
(function () {

    console.log("Hi");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + " " + this.surname;
        }
    }



    function Seat(number, category) {
        //ToDo
        this.number = (function () {
            if (number == undefined) {
                return Math.floor(Math.random() * 90) + 10;

            } else {
                return number;
            }
        })();
        this.category = (function () {

            if (category == undefined) {
                return "E";
            }

            if (category.toLowerCase() == "b") {
                return "B";

            } else {
                return "E";
            }

        })();

        this.getData = function () {
            return this.number + ", " + this.category.toUpperCase();
        }
    }

    // var seat = new Seat();
    // console.log(seat.getData());


    function Passenger(personObj, seatObj) {
        this.person = personObj;
        this.seat = seatObj;
        this.getData = function () {
            return this.seat.getData() + ", " + this.person.getData();
        }
    }

    function Flight(relation, date) {
        this.date = date;
        this.relation = relation;
        this.passangerList = [];
        this.addPassanger = function (passangerObj) {
            this.passangerList.push(passangerObj);

        }
        this.getData = function () {
            var passangerPrint = "";
            for (var i = 0; i < this.passangerList.length; i++) {
                var currentPassanger = this.passangerList[i];
                passangerPrint += "\t\t\t";
                passangerPrint += currentPassanger.getData();
                passangerPrint += "\n";
            }

            return this.date + ", " + this.relation + "\n" + passangerPrint;
        }
    }

    function Airport() {
        this.name = 'Nikola Tesla';
        this.listOfFlights = [];
        this.addFlight = function (flightObj) {
            this.listOfFlights.push(flightObj);
        }
    }


    function createFlight(relation, dateString) {
        var date = new Date(dateString);

        var flightRandom = new Flight(relation, date);
        return flightRandom;
    }

    function createPassenger(name, surname, seatNumber, seatCategory) {
        var person = new Person(name, surname);
        var seat = new Seat(seatNumber, seatCategory);

        return new Passenger(person, seat);
    }


    var person1 = new Person("Mirjana", "Glisic");
    var seat1 = new Seat(55, "B");
    var passanger1 = new Passenger(person1, seat1);




    var person2 = new Person("Ivan", "Saric");


    var seat2 = new Seat(15, "e");



    var passanger2 = new Passenger(person2, seat2);

    var passanger3 = createPassenger('Perica', 'Peric', 15, 'e');
    var passanger4 = createPassenger("Marija", "Lazic", 43, "B");






    var flight1 = createFlight('Belgrade-Minhen', '2018-12-12');

    flight1.addPassanger(passanger1);
    flight1.addPassanger(passanger2);
    flight1.addPassanger(passanger3);
    var flight2 = createFlight("Barselona-Belgrade", '2018-12-25');
    flight2.addPassanger(passanger4);
    //Console.log(flight1.getData());

    //console.log(flight2.getData());
    var airport = new Airport();
    airport.addFlight(flight1);
    var airport2 = new Airport();
    airport2.addFlight(flight2);
    console.log(airport);

})();