(function () {
  "use strict";

  function Product(name, price, expirationDate) {
    this.productId = (function () {
      return parseInt(Math.random().toFixed(5) * 1e5);
    })();
    this.name = name;
    this.price = parseFloat(price.toFixed(2));
    this.expirationDate = expirationDate;
  }

  Product.prototype.getInfo = function () {
    var productCode;
    var firstLastLetter = this.name[0] + this.name[name.length - 1];
    productCode = firstLastLetter.toUpperCase() + this.productId;
    console.log(productCode + "," + this.name + "," + this.price);
  };

  function ShoppingBag() {
    this.productList = [];
  }


  ShoppingBag.prototype.addProduct = function (product) {
    if (product.expirationDate > new Date()) {
      this.productList.push(product);
    } else {
      console.log("Expiration date of this product expired!");
    }
  };
  ShoppingBag.prototype.getAveragePrice = function () {
    // this.productList
    var avrPrice;
    var sum = 0;
    for (var i = 0; i < this.productList.length; i++) {
      sum += this.productList[i];
    }
    avrPrice = parseFloat((sum / this.productList.length).toFixed(3));
    console.log("Average price: " + avrPrice);
    return avrPrice;
  };
  ShoppingBag.prototype.getMostExpensive = function () {
    //TODO
    // var mostExpensive = this.productList[0].price;
    // var expensiveProduct = this.productList[0].name;
    var mostExpensiveProduct = {
      name: this.productList[0].name,
      price: this.productList[0].price
    }
    for (var i = 0; i < this.productList.length; i++) {
      // var currentPrice = this.productList[i].price;
      // var currentName = this.productList[i].name;
      var currentProduct = {
        name: this.productList[i].name,
        price: this.productList[i].price
      }
      if (currentProduct.price > mostExpensiveProduct.price) {
        // mostExpensive = currentPrice;
        // expensiveProduct = currentName;
        mostExpensiveProduct.price = currentProduct.price;
        mostExpensiveProduct.name = currentProduct.name;
      }
    }
    console.log("Most expensive product is " + mostExpensiveProduct.name + " ,at price of " + mostExpensiveProduct.price);
    return mostExpensiveProduct;
  };
  ShoppingBag.prototype.getTotalPrice = function () {
    var totalPrice = 0;
    for (var i = 0; i < this.productList.length; i++) {
      totalPrice += this.productList[i].price;
    }
    console.log(totalPrice);

    return totalPrice;
  };

  function PaymentCard(accountBalance, status, validation) {
    this.accountBalance = parseFloat(accountBalance.toFixed(2));
    this.status = status;
    this.validation = validation;
  }

  function checkoutAndBuy(bag, card) {
    if (card.validation > new Date()) {
      console.log("Your card expired");
    } else if (bag.getTotalPrice() <= card.accountBalance && card.status == "active") {
      console.log("Purchase is successful");
    } else {
      console.log("You don't have enough money on your account");
    }
  }


  //validation date
  var cardExpirationDate = new Date('August 19, 2018 23:15:30');
  //


  /*shopping list created*/
  var shoppingBag = new ShoppingBag();
  ///

  //Credit card created
  var creditCard1 = new PaymentCard(2000, "active", cardExpirationDate);
  //

  /*here are expirations dates for product */
  var milkExpDate = new Date('August 19, 2019 23:15:30');
  var meatExpDate = new Date('October 19, 2020 23:15:30');
  var beerExpDate = new Date('October 19, 2021 23:15:30')
  //////////////////////////////
  /* products start here */
  var milk = new Product("Milk", 1.8564752552, milkExpDate);
  var meat = new Product("Meat", 500.1256988, meatExpDate);
  var beer = new Product("Bear", 16.2598756, beerExpDate);
  ////////////////////////////////////

  shoppingBag.addProduct(milk);
  shoppingBag.addProduct(beer);
  shoppingBag.addProduct(meat);


  checkoutAndBuy(shoppingBag, creditCard1);

  shoppingBag.getMostExpensive();

})();