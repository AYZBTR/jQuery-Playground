/* If i click in the h1 then its background color should change to red!! */

 $("h1").click(function(){
    $("h1").css("background-color","red")
}) 

/* There are 5 buttons in a webpage if we click one button then the 
color of h1 should be changed to purple.
Below you can find how we do using Plane Js and using jQuery.*/

 /*using plane JS*/
 for (var i = 0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color = "Purple";
    });
} 

/*Using jQuery*/
$("button").click(function(){
    $("h1").css("color","purple")
}); 


/* If we want to detect keystrokes inside a text box from keyboard we can do that using jQuery */

$("input").keypress(function(event){
    console.log(event.key);
}); 


//display those keys in h1 which we press in that textbox 
$("input").keypress(function(event){
    $("h1").text(event.key);
})

/* There is actually even more flexible way of We can simply use 
the method on. And this takes two parameters. 
The first one is the event that you're looking to 
listen for and that can be any of the events that we 
had access to by using Javascript.  */
$(document).on("mouseover",function(){
    $("h1").css("color", "red")
})



//creating buttons using jquery
$("h1").before("<button>New Btn</button>")
$("h1").after("<button>New Btn</button>")

//this append adds the button before the content i.e h1
$("h1").prepend("<button>New Btn</button>")
//this append adds the button after the content i.e h1
$("h1").append("<button>New Btn</button>")

//removing every buttons from our webpages
$("button").remove();