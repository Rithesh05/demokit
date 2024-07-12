let var4;
for(var3=0;var3<document.querySelectorAll(".drum").length;var3++){
    document.querySelectorAll(".drum")[var3].addEventListener("click",function(){
        var4=this.innerText;
    
switch(var4){
    case "w":
        tom1=new Audio("tom-1.mp3");
        tom1.play();
        pressed(var4);
        break;
    case "a":
        tom2=new Audio("tom-2.mp3");
        tom2.play();
        pressed(var4);
        break;
    case "s":
        tom3=new Audio("tom-3.mp3");
        tom3.play();
        pressed(var4);
         break;
    case "d":
        tom4=new Audio("tom-4.mp3");
        tom4.play();
        pressed(var4);
        break;
    case "j":
        tom5=new Audio("snare.mp3");
        tom5.play();
        pressed(var4);
        break;
    case "k":
        tom6=new Audio("crash.mp3");
        tom6.play();
        pressed(var4);
        break;
    case "l":
        tom7=new Audio("kick-bass.mp3");
        tom7.play();
        pressed(var4);
        break;
}});
}
document.addEventListener("keydown",function(event){
switch(event.key){
    case "w":
        tom1=new Audio("tom-1.mp3");
        tom1.play();
        pressed(event.key);
        break;
    case "a":
        tom2=new Audio("tom-2.mp3");
        tom2.play();
        pressed(event.key);
        break;
    case "s":
        tom3=new Audio("tom-3.mp3");
        tom3.play();
        pressed(event.key);
         break;
    case "d":
        tom4=new Audio("tom-4.mp3");
        tom4.play();
        pressed(event.key);
        break;
    case "j":
        tom5=new Audio("snare.mp3");
        tom5.play();
        pressed(event.key);
        break;
    case "k":
        tom6=new Audio("crash.mp3");
        tom6.play();
        pressed(event.key);
        break;
    case "l":
        tom7=new Audio("kick-bass.mp3");
        tom7.play();
        pressed(event.key);
        break;
}

});

function pressed(divname){
    document.querySelector("."+divname).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+divname).classList.remove("pressed");
    },100);

}




























































































// document.querySelectorAll(".drum")[0].addEventListener("click",function (){
//     console.log(this);
   
// });
// document.addEventListener("keydown",function (event){
//     console.log(event);
//     var so1=new Audio("./sounds/tom-1.mp3");
//     so1.play();
// });