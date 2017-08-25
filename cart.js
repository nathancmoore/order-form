'use strict';

if (localStorage.getItem('submittedOrders')) {
  var savedOrders = (JSON.parse(localStorage.getItem('submittedOrders')));
}
var products = [];

var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'watercan', 'wineglass'];

var paths = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dogduck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/petsweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/watercan.jpg', 'img/wineglass.jpg'];

for (var i = 0; i < names.length; i++) {
  products.push(new Product(names[i], paths[i]));
}

function Product(prodName, paths) {
  this.prodName = prodName;
  this.paths = paths;
}

function generateCurrentOrders() {
  for (var i = 0; i < savedOrders.length; i++) {
    var orders = document.getElementById('listOfOrders');
    var table = document.createElement('table');
    table.setAttribute('id', 'order ' + i);
    orders.appendChild(table);
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    td.setAttribute('id', 'picture ' + i);
    tr.appendChild(td);
    var img = document.createElement('img');
    for(var j = 0; j < products.length; j++) {
      if(products[j].prodName === savedOrders[i].custProduct) {
        img.setAttribute('src', products[j].paths);
        td.appendChild(img);
      }
    }

  }
}

generateCurrentOrders();
