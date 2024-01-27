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



//**************************  Website Animation with jquery    ******************************

 $("button").on("click", function(){
    //$("h1").css("color", "red");
    //$("h1").hide(); //when i click the button it will hide the h1
    //$("h1").show(); //this will show the h1
    //$("h1").toggle(); //this will show and hide the h1 every time when we click button
    //$("h1").fadeOut(); //it reduces the opacity of selected element and then it will hide it
    //$("h1").fadeIn(); // it will make our h1 appear and also fade into full opacity
    //$("h1").fadeToggle(); //Now all of these methods come with a toggle option, so fadeToggle will allow our buttons to fade out, then fade in, then fade out.
    //$("h1").slideUp(); //what this does is it kind of just collapses our element that was selected
    //$("h1").slidedown(); // this just uncollapses our element (opposite of slideUp)
    //$("h1").slideToggle(); //So this will just slide up, slide down, slide up, slide down, and this can be really useful if you have something like a drop down menu for example.


}); 


/* Now if you wanted more fine grained control over your animations 
then instead of using these pre-built ones you can use something called .animate. 
And this allows you to define some custom CSS that you want to gradually animate 
towards.
 */

$("button").on("click", function(){
  $("h1").animate({opacity:0.5}); //when i click the button the opacity of h1 decreases

  /*   Now the thing to remember about the animate method is that in between 
the curly braces you can only add the CSS rules that have a numeric value. 

So that means that you can’t animate to something like a color, right? You 
can't change the color to red. 
And when I run this you can see that we get 
an error. Red is not defined. And this is because it's very difficult to create 
that kind of tween animation that gradually progresses from one style to another 
using the animate method. 
So you have to stick to things that have a numeric value. 
For example a margin of 20 pixels, that it can do. Or if you wanted to make it a 
percentage, then you can include it as a string. So 20 percent margin which makes 
it much bigger. But essentially make sure that this second value in the CSS that 
you're trying to animate to is a number value......
 */


});




/* Now if you wanted to have more than one of these animations happening then 
you can chain them together. So what do I mean by chaining? So for example if 
we wanted our h1 to slide up, but then after it slid up, I then want it to slide 
down, and after it slid down I want to change the CSS to have an opacity of 0.5, 
so 50 percent. So essentially what we've done here is chained three methods together
 so that we target our h1 and first get it to slide up, then slide down, then animate. 
 Now remember that if this is all targeting the same thing it can't slide up and slide 
 down at the same time. So it will do it in order.... */

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})
