'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
  let strung = JSON.stringify(this.allProducts)
  localStorage.setItem('allProducts', strung)
}

AppState.prototype.loadItems = function () {
  let storedData = localStorage.getItem('allProducts');

  if (storedData) {
    let parsed = JSON.parse(storedData);

    for (let i = 0; i < parsed.length; i++) {
      let product;

      if (parsed[i].name === 'sweep') {
        product = new Product(parsed[i].name, 'png');
      } else {
        product = new Product(parsed[i].name);
      }

      product.timesShown = parsed[i].timesShown;
      product.timesClicked = parsed[i].timesClicked;
      this.allProducts.push(product);
    }

  } else {
    this.instantiateProducts();
  }
}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;

}
