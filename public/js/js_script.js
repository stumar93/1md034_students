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



//var myFather = new Person("JohnANDTEST", "Doe", 50, "blue");
//dument. getelement by id
//createlement div

// var name = textNode(food[i].name)

//createlemen p
//title.appendChild(name1)

var food1 = '{"name": "Basic","kCal": 500,"lactose": true,"gluten": true,"img":"https://www.language-trainers.de/blog/wp-content/uploads/2013/11/hamburger-1.jpg"}'


var json = JSON.parse(food1);

var innerDivOne = document.createElement('DIV');

var title = document.createTextNode(json.name);
var titleSize = document.createElement("H3")
titleSize.appendChild(title);
innerDivOne.appendChild(titleSize);

var list = document.createElement('UL');

var firstDot = document.createElement('LI');
var kcal = document.createTextNode(json.kCal);
firstDot.appendChild(kcal);
list.appendChild(firstDot);

if(json.lactose)
{
    var lactose = document.createTextNode("Lactose");
    var secondDot = document.createElement('LI');
    secondDot.appendChild(lactose);
    list.appendChild(secondDot);
}

innerDivOne.appendChild(list);
document.getElementById("burgers").appendChild(innerDivOne);
