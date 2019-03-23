/*
var vm2 =  new Vue({
    el: 'send_order',
    data: {
        burgerMenu:food,
        checkedNames: [],
        info:[],
        full_name: '',
        email:'',
        street:'',
        house_number:'',
        PaymentOption:'',
        radio:'',
        returnArray: []
        },
    methods: {
        click: function (event) {
            alert(this.checkedNames+this.full_name+this.email+this.street+this.house_number+this.PaymentOption+this.radio);
            returnArray = [this.checkedNames,this.full_name,this.email,this.street,this.house_number,this.PaymentOption,this.radio]
            console.log(returnArray)
        }
    }
})
*/
'use strict';
var socket = io();

var vm_1 = new Vue({
  el: '#dots',
  data: {
    orders: {},
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: event.clientX - 10 - offset.x,
                                           y: event.clientY - 10 - offset.y },
                                orderItems: ["Beans", "Curry"]
                              });
    }
  }
});

var vm2 =  new Vue({
    el: '#send_order',
    data: {
        full_name: '',
        email:'',
        returnArray: []
        },
    methods: {
        send_order_button: function (event) {
            alert(this.full_name+this.email);
            this.returnArray = [this.full_name,this.email];
            console.log(this.returnArray);
        }
    }
})
