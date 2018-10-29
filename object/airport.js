"use strict"
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
            this.number = (function () {
                if (number == "") {
                    return Math.floor(Math.random() * 90) + 10;

                } else if (number == number) {
                    return number;
                }
            })();
            this.category = (function () {
                if (category.toLowerCase() === "b") {
                    return "B";

                } else {
                    return "E";
                }

            })();

            this.getData = function () {
                return this.number + ", " + this.category.toUpperCase();
            }
        }


        function Passenger(person, seat) {
            this.person = person;
            this.seat = seat;
            this.getData = function () {
                return this.seat.getData() + ", " + this.person.getData();
            }
        }

        function Flight(passanger, relation, date) {
            this.passanger = passanger;
            this.relation = relation;
            this.date = date;
            this.passangerList = [];
            this.addPassanger = function (passanger) {
                var passangerFlight = passanger.getData();
                this.passangerList.push(passangerFlight);
                return this.passangerList;
            }

        }

        function Airport(name) {
            this.name = name;
            this.listOfFlights = [];
        }

        var person1 = new Person("Mirjana", "Glisic");
        var person2 = new Person("Ivan", "Saric");
        console.log(person1);
        console.log(person2);
        var seat1 = new Seat("", "B");
        var seat2 = new Seat(15, "e");
        console.log(seat1);
        console.log(seat2);
        var passanger1 = new Passenger(person1, seat1);
        var passanger2 = new Passenger(person2, seat2);
        console.log(passanger1);
        console.log(passanger2);
        console.log(person1.getData());
        console.log(seat1.getData());
        console.log(passanger1.getData());
        var flight1 = new Flight(passanger1);
        var flight2 = new Flight(passanger2);
        console.log(flight1.addPassanger(passanger1));
        // console.log(flight2.addPassanger(passanger2));
    })();