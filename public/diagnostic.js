/// Ember Object Diagnostic ///

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
const Order = Ember.Object.extend({
  orderPrice: Ember.computed('price', 'quantity', function () {
    return this.get('price') * this.get('quantity');
  })
});

const Cart = Ember.Object.extend({
  addToCart: function (order) {
    this.get('orders').push(order);
  },
  totalPrice: Ember.computed('orders', function () {
    return this.get('orders').reduce(function (sum, order) {
      return sum + order.get('orderPrice');
    });
  })
});

// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity
//
// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.
//
// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)

let hats = Order.create({
  price: 5,
  quantity: 2
});

let deskLamp = Order.create({
  price: 20,
  quantity: 1
});

let handTowels = Order.create({
  price: 8,
  quantity: 3
});

let cart = Cart.create({
  orders: []
});

cart.addToCart(hats);
cart.addToCart(deskLamp);
cart.addToCart(handTowels);
