//(string,bool,interger,string)
function ContentBurger(name,lactose, kcal, extra){
    this.name = name;
    this.kcal = kcal;
    this.lactose = lactose;
    this.gluten = gluten;
};

function PrintContentBurger(burger){
    document.write("Cool burger name:"+burger.name +" "+burger.kcal+"kcal, WoW! look at that powerlevel");
}
/*
//////////////////////////////////////////////////
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click",logToConsoleButton);
function logToConsoleButton(){
    console.log("Button press");
    createReturnArray();
}


//Returns a array with all user info
function createReturnArray(){
    var radioButton = getRadioButton();
    var returnArray = [
        document.getElementById("fullname").value,
        document.getElementById("email").value,
        document.getElementById("street").value,
        document.getElementById("house").value,
        document.getElementById("PaymentOption").value,
        radioButton
    ];
    for(var i = 0; i < food.length; i++){
        if( document.getElementById(i).checked == true){
            returnArray.push(document.getElementById(i).parentElement.parentElement.className);
        }
    }
    alert(returnArray);
    console.log(returnArray);
    return returnArray;
}


function getRadioButton(){
    var gender = document.getElementsByName('gender');
    for(var i = 0; i < gender.length; i++){
        if(gender[i].checked){
            return gender[i].value;
        }
    }
    
}
/*
//////////////////////////////////////////////////
for (i = 0; i < food.length; i++){
    console.log(food[i].name);

    var innerDivOne = document.createElement('DIV');
    innerDivOne.setAttribute("class", food[i].name);

    var title = document.createTextNode(food[i].name);
    var titleSize = document.createElement("H3")
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", i);
    titleSize.appendChild(checkbox);
    titleSize.appendChild(title);
    innerDivOne.appendChild(titleSize);
    var pic = document.createElement("IMG");
    pic.setAttribute("src", food[i].img);
    pic.setAttribute("width", "230");
    pic.setAttribute("height", "230");
    pic.setAttribute("alt", food[i].name);
    innerDivOne.appendChild(pic);

    var list = document.createElement('UL');

    var firstDot = document.createElement('LI');
    var kcal = document.createTextNode(food[i].kCal);
    firstDot.appendChild(kcal);
    list.appendChild(firstDot);

    if(food[i].lactose)
    {
        var lactose = document.createTextNode("Lactose");
        var secondDot = document.createElement('LI');
        secondDot.appendChild(lactose);
        list.appendChild(secondDot);
    }
    if(food[i].gluten)
    {
        var gluten = document.createTextNode("Gluten");
        var thirdDot = document.createElement('LI');
        thirdDot.appendChild(gluten);
        list.appendChild(thirdDot);
    }
    innerDivOne.appendChild(list);
    document.getElementById("allTheBurgers").appendChild(innerDivOne);
}
*/
