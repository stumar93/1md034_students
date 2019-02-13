let food_test = '{"name": "Basic","kCal": 500,"lactose": true,"gluten": true,"img":"https://www.language-trainers.de/blog/wp-content/uploads/2013/11/hamburger-1.jpg"}'

new Vue({
    el: 'main',
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
