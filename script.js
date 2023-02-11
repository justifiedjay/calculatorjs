var screen = document.querySelector(".screen")
var buttons = document.querySelectorAll("button")

var data = []
var res;
function handleClick(button){
    value = button.innerText

    if(value === "CLEAR ALL"){
        data = []

        screen.innerText = "0"

    }else if(value === "="){


        res = eval(data.join(""))

        data = []
        
        data.push(res)

        screen.innerText = res

    }else if(value === "C"){
        data.pop()
        screen.innerText = data.join("")

    }else{
        data.push(value)
        screen.innerText = data.join("")
    }

       

}


buttons.forEach((button) => button.onclick = () => console.log(button.innerText))

buttons.forEach(function(button){
    button.onclick = function(){
        handleClick(button)
    }
})




    
 class Person{
    constructor(name, country){
            this.name = name;
            this.country = country;
    
    }

 }


    p1 = new Person("kayode", "uk")
    p2 = new Person("yusuf", "nigeria")
    p3 = new Person()

    console.log(p1.country)
    
