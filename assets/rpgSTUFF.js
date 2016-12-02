// rpgSTUFF.html

// attack as a function ()--increment as a variable everytime an attack is used

// var characters = {
//    {
// 		name: "ken"
//    imageOne: $("<img>").addClass("kenPlayer").attr("src", "images/Ken/kenReadyRight.gif"),
//     imageTwo: $("<img>").addClass("kenPlayer").attr("src", "images/Ken/kenReadyLeft.gif"),
//     health: 100,
//  	Punch: function () {};,
//  	Kick: function () {};,
// 	special: function() {
// 				special = (Math.floor(Math.random()* 10) + 25);
// 				if (special >= 30) {
// 					comHealth = comHealth - 5;
// 				} else {
// 					comHealth = comHealth - 25;
// 				}
// 			};
//  	}
//    "ryu": {
//  	ryuPlayerRight: $("<img>").addClass("ryuPlayer").attr("src", "images/ryu/ryuReadyRight.gif");
//  	ryuPlayerLeft = $("<img>").addClass("ryuPlayer").attr("src", "images/ryu/ryuReadyLeft.gif");
//  	health: 100,
//  	ryuPunch: function (){}

//     }
//  }   

// 			      characters.ken.punch ---- goes below in the called function

		

// 				$('.special').on('click', function () { 
// 					characters.ken.special();
// 				}

// 				$(.'')


// // (this).on('click', function() {								//  or create a function that will
// // 	setTimeOut for 3500 milisecs							//  be called on every onClick (
// // 	randomize array of computer attacks.					//  timout activity)
// // 	computer attacks.
// // 	attack += attack;
// // 	userHealth - attack;

// })



// //new code for onclick of face--choosing a character & opponent

// $('.player').on('.click', function () {
// 	var divClass = $(this).data('divclass');
// 	// $(this).hide();
// 	debugger;
// 	$('.playerOne' + divClass).append(this)
// });






// //old stuff below 

// // $('.choiceOne').on('click', function () {
// // 		$('.choiceOne').hide();
// // 		$('.computer').append(kenPlayerLeft);
// // 	})
// // $('.choiceTwo').on('click', function () {
// // 		$('.choiceTwo').hide();
// // 		$('.playerOne').append(ryuPlayerRight);



var kenAttacks = {
   kenPunch: $("<img>").addClass("kenPunchRight").attr("src", "images/Ken/kenPunchRight.gif")
}

$(document).on('click', '.punch', function (){
	$('.computer').append(kenAttacks.kenPunch);

})






			