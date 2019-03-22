new Vue({
    el: 'main',
    data: {
        burgerMenu:food,
        checkedNames: [],
        info:[],
        full_name: '',
        email:'',
        PaymentOption:'',
        radio:'',
        returnArray: []
        },
    methods: {
        click: function (event) {
            alert(this.checkedNames+this.full_name+this.email+this.PaymentOption+this.radio);
            returnArray = [this.checkedNames,this.full_name,this.email,this.PaymentOption,this.radio]
            console.log(returnArray)
        }
    }
})



