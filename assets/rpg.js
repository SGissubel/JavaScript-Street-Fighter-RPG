
// 	//choosing a player--make choosing a player the same as the calculator (choose number (character) ends the function--choose operator(othercharacter--ends other functions?)game starts ='s)

	



var userHealth = 100; //or health--100
var comHealth = 100; //or health--100
var damage = 0; //display damage points
var special = '';
var punch;
var kick;
var hit;
var start = $("<img>").addClass("startBtn").attr("src", "images/ryuKenStartFight.gif");

// var kenAttacks = [{
	var kenPunchRight = $("<img>").addClass("kenPunchRight").attr("src", "images/Ken/kenPunchRight.gif");

	var kenSpecialRight = $("<img>").addClass("kenSpecialRight").attr("src", "images/Ken/kenSpecialRight.gif");
	var kenKickRight = $("<img>").addClass("kenKick").attr("src", "images/Ken/kenKickRight.gif");
 	var kenPunchLeft = $("<img>").addClass("kenPunchLeft").attr("src", "images/Ken/kenPunchLeft.gif");
	var kenSpecialLeft =  $("<img>").addClass("kenSpecialLeft").attr("src", "images/Ken/kenSpecialLeft.gif");
 	var kenKickLeft = $("<img>").addClass("kenKickLeft").attr("src", "images/Ken/kenKickLeft.gif");
 // 	}
 // ]
 var ryuAttacks = [{
	ryuPunchRight: $("<img>").addClass("ryuPunchRight").attr("src", "images/ryu/ryuPunchRight.gif"),
	ryuSpecialRight: $("<img>").addClass("ryuSpecialRight").attr("src", "images/ryu/ryuSpecialRight.gif"),
 	ryuKickRight: $("<img>").addClass("ryuKick").attr("src", "images/ryu/ryuKickRight"),
	ryuPunchLeft: $("<img>").addClass("ryuPunchLeft").attr("src", "images/ryu/ryuPunchLeft.gif"),
	ryuSpecialLeft: $("<img>").addClass("ryuSpecialLeft").attr("src", "images/ryu/ryuSpecialLeft.gif"),
 	ryuKickLeft: $("<img>").addClass("ryuKickLeft").attr("src", "images/ryu/ryuKickLeft"),
 	}
 ]
var kenPlayerRight = $("<img>").addClass("kenPlayer").attr("src", "images/Ken/kenReadyRight.gif");
var kenPlayerLeft = $("<img>").addClass("kenPlayer").attr("src", "images/Ken/kenReadyLeft.gif");
var ryuPlayerRight = $("<img>").addClass("ryuPlayer").attr("src", "images/ryu/ryuReadyRight.gif");
var ryuPlayerLeft = $("<img>").addClass("ryuPlayer").attr("src", "images/ryu/ryuReadyLeft.gif");
var playerOne = '';
var playerTwo = '';
var ryuAttacks = ['ryuPunch', 'ryuKick', 'ryuSpecial'];
var ryuPunch = '';
var ryuKick = '';
var ryuSpecial = '';
// var characters = {
//    "ken": {
//     image1: $("<img>").addClass("kenPlayer").attr("src", "images/Ken/kenReadyRight.gif"),
//     image2: $("<img>").addClass("kenPlayer").attr("src", "images/Ken/kenReadyLeft.gif"),
//     health: 100,
// 	kenPunch: 6,
// 	kenKick: 10,
// 	kenSpecial: 15;
// 	}
//   "ryu": {
// 	ryuPlayerRight: $("<img>").addClass("ryuPlayer").attr("src", "images/ryu/ryuReadyRight.gif");
// 	ryuPlayerLeft = $("<img>").addClass("ryuPlayer").attr("src", "images/ryu/ryuReadyLeft.gif");
// 	health: 100,
// 	ryuPunch: 

//    }
// }

	//choosing a player--make choosing a player the same as the calculator (choose number (character) ends the function--choose operator(othercharacter--ends other functions?)game starts ='s)
	
	//loading window stuff
$(document).ready(function() {

	$(window).load(function (){
		$('.readybtn').hide()
		$('.selector').hide();
		$('.special').hide();
		$('.punch').hide();
		$('.kick').hide();
		$('.block').hide();
		$('.userHealth').text("User Health: " + userHealth);
		$('.comHealth').text("Computer Health: " + comHealth);




	});

// 	$('.player').on('click', function () {
//     if (playerOne != "") {
//     playerOne = $(this).hide;
//     $('.playerOne').append(this);
//     } else {
//       computer = $(this).hide;
//       $('.computer').append(this);
//       $(this).attr("src", "images/ryu/ryuReadyLeft.gif");
//     }
// });
//array for every character. (look up array of objects js)--objects inside of array [{0}{1}{2}{3}]


//this works--make it better though. 
// $('.choiceOne, .choiceTwo').on('click', function () {
// 	$(this).hide();
// 	var divClass = $(this).data('divclass');

// 	if (divClass == 'ryu'){
// 		$('.playerOne').append(ryuPlayerRight);

// 	}else if(divClass == 'ken'){
// 		$('.playerOne').append(kenPlayerRight);
// 		$('.playerTwo').append(ryuPlayerLeft);
// 	}
// });


// this didn't work
$('.choiceOne, .choiceTwo').on('click', function () {
	$(this).hide();
	var divClass = $(this).data('divclass');

	if (divClass == 'ryu'){
		$('.playerOne').append(ryuPlayerRight);
		$('.playerTwo').append(kenPlayerLeft);
		$('.choiceTwo').hide();
	} 
	else if (divClass == 'ken') {
	 	$('.playerOne').append(kenPlayerRight); 
	 	$('.playerTwo').append(ryuPlayerLeft)
	 	$('.choiceOne').hide();
	 }
	  
});

var randomProperty = function (obj) {
    var keys = kenAttacks.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};






	// for (var punch = 6; i+6) {
	// 	//I don't know...also, this probably doesn't go here...
	// }
	$('.startbtn').one('click', function () {
		ryuPlayerRight.hide().delay(2300).fadeIn();
		kenPlayerLeft.hide().delay(2300).fadeIn();
		$(this).hide();
		$('.selector').show();
		$('.readybtn').show();
	});


	$('.readybtn').one('click', function(){
		$('.playerOne').hide().delay(2500).fadeIn();
		$('.playerTwo').hide().delay(2500).fadeIn();
		$('.fighters').append(start);
		start.show().delay(2500).fadeOut();
		$('.special').show();
		$('.punch').show();
		$('.kick').show();
		$(this).hide();
		$('.choose').hide();
	});


	$('.special').on('click', function () {
		if (divClass === 'ken') {
		kenttacks.kenPlayerRight.hide().delay(2500).fadeIn();
		$('.computer').append(kenAttacks.kenSpecialRight);
		kenAttacks.kenSpecialRight.show().delay(1200).fadeOut();}
		special = (Math.floor(Math.random()* 10) + 25);
		$('.comHealth').text("Computer Health: " + comHealth);
		$('.userHealth').text("User Health: " + userHealth);
		if (special >= 30) {
			$('.block').show().delay(2000).fadeOut();
			comHealth = comHealth - 5;
			$('.damage').text('Attack Damage: -5');
		} else {
			comHealth = comHealth - 25;
			$('.damage').text('Attack Damage: -25');
		}
		  // ryuPunch = setTimeout(function punch() {
		  //   ryuPlayerRight.hide().delay(2500).fadeIn();
		  //   ryuPunch = setTimeout(punch(), 3000)
	
	});
		
		$('.punch').on('click', function(){
			kenAttacks.kenPlayerLeft.hide().delay(2000).fadeIn();
		$('.computer').append(kenAttacks.kenPunch);
		kenAttacks.kenPunch.show().delay(2000).fadeOut();
		punch = (Math.floor(Math.random()* 8) + 10);
		$('.comHealth').text("Computer Health: " + comHealth);
			if (punch >= 14){
				comHealth = comHealth - 10;
			}else {
			$('.block').show().delay(2000).fadeOut();
				comHealth = comHealth - 2;
			}
			
		})//end attackTwo function

		$('.kick').on('click', function(){
		kick = (Math.floor(Math.random()* 8) + 12);
		comHealth = comHealth - kick;
		$('.comHealth').text("Computer Health: " + comHealth);

		})//end kick function

		
		
		
		if (userHealth <= 0) {
			console.log("Muahahahaha!")

		} if (comHealth <= 0) {
			console.log("Victory is Yours!!");
			setGame();


		} 
			else { //end if...begin else.
			 
		}//end else. 

	});//end attack function

// });


	//street fighter? 
		//On click (change image of character doing something)
			//randomize opponent's image---no block, and sometimes block
			//if block image appears--less damage??????????????  I don't know.....
			//maybe...use a forloop to create buttons...make those buttons do fun things (dance) and make dance button create a gif?...and dance takes away 10 health.

	//create a button (buttons) for what will go on between things
	//for each...use an .on(click function{}).
	//for each on-click function--use $(this) to activate each button?


	//showing an image for a few seconds, and then it disappears. 

							  // (function(){
							  //   var myDiv = document.getElementById("myDiv"),

							  //     show = function(){
							  //       myDiv.style.display = "block";
							  //       setTimeout(hide, 5000); // 5 seconds
							  //     },

							  //     hide = function(){
							  //       myDiv.style.display = "none";
							  //     };

							  //   show();
							  // })();

							  // include if () { make original image invisible--make new gif visible}



//later later later...if player pushes space bar, damage is minimized (probably not...)


// $('.attack').on('click', function () {
// 		attack = (Math.floor(Math.random()* 50));
// 		userHealth = userHealth - attack;
// 		$('.userHealth').text("User Health: " + userHealth);
// 		if (userHealth <= 0) {
// 			console.log("you lose");
// 		}
// 		else if (comHealth <= 0) {
// 			console.log("You Win")
// 		} else { //end if...begin else.
			 
// 		}


//Click start game to begin.
//Choose your character (after clicked, the characters will pop up--user clicked character on the left, comp character on the right.)
//Click any of the attacks to injure the 








// attackThreesdf