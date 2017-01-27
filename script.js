var wallet= 500;
var won= 0;
var lost= 0;
var hiScore= 0;
var userChoice;
var matchWin=false;
var pcChoice="none";
//computer chooses below/ run pc and saves it to pcChoice
var pcChoosing=function(pc){

        if(0<=pc<=0.3333333333333333){
            pcChoice="rock";
        }
        else if(0.3333333333333333<pc<=0.6666666666666667){
            pcChoice="paper";
        }
        else if(0.6666666666666667<pc<=1){
            pcChoice="scissors";
        }
        else{
            alert("something went wrong on pcChoosing");
        }};
//compare user and pc choice and change matchWinn var
function compare(userChoice){
 if(userChoice===pcChoice){matchWin="undefined";}
 else if(userChoice === "rock" && pcChoice === "paper"){matchWin=false;}
 else if(userChoice === "rock" && pcChoice === "scissors"){matchWin=true;}
 else if(userChoice === "paper" && pcChoice === "rock"){matchWin=true;}
 else if(userChoice === "paper" && pcChoice === "scissors"){matchWin=false;}
 else if(userChoice === "scissors" && pcChoice === "rock"){matchWin=false;}
 else if(userChoice === "scissors" && pcChoice === "paper"){matchWin=true;}
 else{alert("error on compare function");}
}
//events start
$(document).ready(function(){
//jquery start
$("#balance").text("Your starting balance is $"+wallet);
//animations
$("#sidebar").hide();
$(".pick").hide();
$("#pcChoice").hide();
$("#alert").hide();
$("#won").hide();
$("#balance").hide();
$("#lost").hide();
$("#hiScore").hide();
$("#attribuition").hide();
//fadein below
$("#landing").click(function(){
    $("#landing").hide(1000);
    $("#sidebar").fadeIn(2000);
    $(".pick").fadeIn(3000);
    $("#pcChoice").fadeIn(4000);
    $("#alert").fadeIn(5000);
    $("#won").fadeIn(6000);
    $("#balance").fadeIn(7000);
    $("#lost").fadeIn(8000);
    $("#hiScore").fadeIn(9000);
    $("#attribuition").fadeIn(1000);
    });
//end of animations
//game
$("#rock").click(function(){
    if(wallet>0){
    //balance check
    userChoice="rock";
    pcChoosing(Math.random());
    compare(userChoice);
    if(matchWin===true){
        wallet+=100;
        won+=1;
        //hiscore update finish
        $("#pcChoice").text("Computer Chose "+ pcChoice);
        $("#alert").text("You Win");
        $("#alert").css("background-color","green");
        $("#alert").css("color","white");
        $("#won").text("Times Won: "+won);
        $("#balance").text("Your Current Balance is: $"+wallet);
//some style and updates above
    }
//userWin before me
    else if(matchWin===false){
        wallet-=100;
        lost+=1;
        //hiscore update finish
        $("#pcChoice").text("Computer Chose "+ pcChoice);
        $("#alert").text("You Loose");
        $("#alert").css("background-color","#ff0000");
        $("#alert").css("color","white");
        $("#lost").text("Times Lost: "+lost);
        $("#balance").text("Your Current Balance is: $"+wallet);
//some style and updates above
    }
//end of match loose
    else if(matchWin==="undefined"){
        $("#pcChoice").text("Computer Chose the same as You");
        $("#alert").text("Tie");
        $("#alert").css("background-color","rgb(16,64,106)");
        $("#alert").css("color","white");
    }
//end of tie
    else{alert("oops something wrong happened");}
//troubleshoot
if(won > hiScore){hiScore=won;$("#hiScore").text("High Score: "+hiScore);}
        else{}
//hiscore
    }else{wallet=500;won=0;lost=0;$("#pcChoice").text("Ran out of money");$("#balance").text("Your Current Balance is: $"+wallet);alert("Game auto-restarted");$("#won").text("Times Won: "+won);$("#lost").text("Times Lost: "+lost);}
    //wallet restart
    });
//rock end
$("#paper").click(function(){
    if(wallet>0){
    //balance check
    userChoice="paper";
    pcChoosing(Math.random());
    compare(userChoice);
    if(matchWin===true){
        wallet+=100;
        won+=1;
        //hiscore update finish
        $("#pcChoice").text("Computer Chose "+ pcChoice);
        $("#alert").text("You Win");
        $("#alert").css("background-color","green");
        $("#alert").css("color","white");
        $("#won").text("Times Won: "+won);
        $("#balance").text("Your Current Balance is: $"+wallet);
//some style and updates above
    }
//userWin before me
    else if(matchWin===false){
        wallet-=100;
        lost+=1;
        //hiscore update finish
        $("#pcChoice").text("Computer Chose "+ pcChoice);
        $("#alert").text("You Loose");
        $("#alert").css("background-color","#ff0000");
        $("#alert").css("color","white");
        $("#lost").text("Times Lost: "+lost);
        $("#balance").text("Your Current Balance is: $"+wallet);
//some style and updates above
    }
//end of match loose
    else if(matchWin==="undefined"){
        $("#pcChoice").text("Computer Chose the same as You");
        $("#alert").text("Tie");
        $("#alert").css("background-color","rgb(16,64,106)");
        $("#alert").css("color","white");
    }
//end of tie
    else{alert("oops something wrong happened");}
//troubleshoot
if(won>hiScore){hiScore=won;$("#hiScore").text("High Score: "+hiScore);}
        else{}
        }else{wallet=500;won=0;lost=0;$("#pcChoice").text("Ran out of money");$("#balance").text("Your Current Balance is: $"+wallet);alert("Game auto-restarted");$("#won").text("Times Won: "+won);$("#lost").text("Times Lost: "+lost);}
    //wallet restart
    });
//paper end
$("#scissors").click(function(){
    if(wallet>0){
    //balance check
    userChoice="scissors";
    pcChoosing(Math.random());
    compare(userChoice);
    if(matchWin===true){
        wallet+=100;
        won+=1;
        //hiscore update finish
        $("#pcChoice").text("Computer Chose "+ pcChoice);
        $("#alert").text("You Win");
        $("#alert").css("background-color","green");
        $("#alert").css("color","white");
        $("#won").text("Times Won: "+won);
        $("#balance").text("Your Current Balance is: $"+wallet);
//some style and updates above
    }
//userWin before me
    else if(matchWin===false){
        wallet-=100;
        lost+=1;
        //hiscore update finish
        $("#pcChoice").text("Computer Chose "+ pcChoice);
        $("#alert").text("You Loose");
        $("#alert").css("background-color","#ff0000");
        $("#alert").css("color","white");
        $("#lost").text("Times Lost: "+lost);
        $("#balance").text("Your Current Balance is: $"+wallet);
//some style and updates above
    }
//end of match loose
    else if(matchWin==="undefined"){
        $("#pcChoice").text("Computer Chose the same as You");
        $("#alert").text("Tie");
        $("#alert").css("background-color","rgb(16,64,106)");
        $("#alert").css("color","white");
    }
//end of tie
    else{alert("oops something wrong happened");}
//troubleshoot
if(won>hiScore){hiScore=won;$("#hiScore").text("High Score: "+hiScore);$("#lost").text("Times Lost: "+lost);}
        else{}
    }else{wallet=500;won=0;lost=0;$("#pcChoice").text("Ran out of money");$("#balance").text("Your Current Balance is: $"+wallet);alert("Game auto-restarted");$("#won").text("Times Won: "+won);$("#lost").text("Times Lost: "+lost);}
    //wallet restart
    });
//scissors end
    });
//jquery end