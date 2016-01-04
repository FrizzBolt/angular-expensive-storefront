(function(){
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.products = items;
  });
  app.controller("PanelController", function() {
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });
  var items = [
  {
    name: 'Spavati 10,000 Thread Count Egyptian Cotton Sheets',
    price: 699.99,
    description: "Hand-woven by ancient Egyptian slaves, these luxurious sheets contain a thread count so high that they are likely to destabilize and explode on contact.",
    images: [
      "images/sheets.jpg"
    ],
    reviews: [
      {
        stars: 5,
        body: "I will definitely sell my dog to buy another set of these.",
        author: "johnny@fakerton.com"
      }
    ]
  },
  {
    name: 'Tahitian South Sea Pearl Bath Beads',
    price: 6699.99,
    description: "Want some fancy shit in your bath water? These lavish bath beads will fill the bath-bead shaped hole he or she left in your heart.",
    images: [
      "images/bathbeads.png"
    ],
    reviews: [
      {
        stars: 4,
        body: "Bath beads did not dissolve in water but made my bath more expensive.",
        author: "sheila@themonkey.com"
      }
    ]
  },
  {
    name: 'The Former Incan Empire',
    price: 179999999.99,
    description: "Enjoy a Tawantinsuyu of your own in the style of Pedro Cieza de León. Rule over this fabulous stretch of land Between Quillota and the Bio Bio River. They will worship you. They will always worship you.",
    images: [
      "images/inca.jpg"
    ],
    reviews: [
    {
      stars: 5,
      body: "Came with batteries as expected.",
      author: "viracocha@nachopichu.com"
    }
    ]
  },
  {
    name: "Josh's Love",
    price: 899.99,
    description: "There are some things money can't buy. This is not one of those things.",
    images: [
      "images/joshlove.jpg"
    ],
    reviews: [
    {
      stars: 1,
      body: "Worst $900 I've ever spent. He stole a bowl of fruit off of my table and made a scene at the restaurant.",
      author: "heidi@tabletennischamps.com"
    }
  ]
  }
];

})();
