(function(){
  var app = angular.module('store', [ ]);
  app.controler('StoreController', function(){
    this.product = items;
  });

  var items = [
  {
    name: 'Spavati 10,000 Thread Count Egyptian Cotton Sheets',
    price: 699.99,
    description: "Hand-woven by ancient Egyptian slaves, these luxurious sheets contain a thread count so high that they are likely to destabilize and explode on contact.",
    images: []
  },
  {
    name: 'Tahitian South Sea Pearl Bath Beads',
    price: 6699.99,
    description: "Want some fancy shit in your bath water? These lavish bath beads made from genuine Tahitian Pearls will be sure to fill the void she or he left in your heart.",
    images: []
  },
  {
    name: 'The Former Incan Empire',
    price: 179999999.99,
    description: "Enjoy a Tawantinsuyu of your own in the style of Pedro Cieza de León. Rule over this fabulous stretch of land Between Quillota and the Bio Bio River. <i>They</i> will worship you. They will always worship you.",
    images: []
  },
  {
    name: "A Date With Josh",
    price: 899.99,
    description: "There are some things money can't buy. This is not one of those things.",
    images: []
  }
];

})();
