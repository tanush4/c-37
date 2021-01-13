class Form{
    constructor(){

    }
    dislay(){
        var title=createElement("h4")
    title.html("Welcome to our car racing game")
    title.position(150,10)
    
var input=createInput("Enter your name")
input.position(150,50)

var email=createInput("Enter your email")
email.position(150,90)

var button=createButton("Click me to play the Game")
button.position(150,140)

button.mousePresses(function(){

input.hide()
button.hide()
title.hide()
email.hide()
var name=input.value()
playerCount+=1
player.update(name)
player.updateCount(playerCount)
var greeting=createElement("h4")
greeting.html("Thanks for logging in Your Game is about to begin")
greeting.position(150,200)
})

}
}