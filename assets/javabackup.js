var userHealth = 100; 
var comHealth = 100; 
var damage = 0; 
var special = '';
var start = $("<img>").addClass("startBtn").attr("src", "images/ryuKenStartFight.gif");

var kenAttacksRight = {
	kenPunchRight: $("<img>").addClass("kenPunchRight").attr("src", "images/Ken/kenPunchRight.gif"),

	kenSpecialRight: $("<img>").addClass("kenSpecialRight").attr("src", "images/Ken/kenSpecialRight.gif"),
	kenKickRight: $("<img>").addClass("kenKick").attr("src", "images/Ken/kenKickRight.gif"),
	kenNoogieRight: $("<img>").addClass("kenNoogieRight").attr("src", "images/Ken/kenNoogieRight.gif"),
 	
 	}
var kenAttacksLeft = {

	kenNoggieLeft: $("<img>").addClass("kenNoogieLeft").attr("src", "images/Ken/kenNoogieLeft.gif"),
 	
 	kenPunchLeft: $("<img>").addClass("kenPunchLeft").attr("src", "images/Ken/kenPunchLeft.gif"),
	kenSpecialLeft: $("<img>").addClass("kenSpecialLeft").attr("src", "images/Ken/kenSpecialLeft.gif"),
 	kenKickLeft: $("<img>").addClass("kenKickLeft").attr("src", "images/Ken/kenKickLeft.gif"),
 	}

var ryuAttacksRight = {
	ryuPunchRight: $("<img>").addClass("ryuPunchRight").attr("src", "images/ryu/ryuPunchRight.gif"),
	ryuSpecialRight: $("<img>").addClass("ryuSpecialRight").attr("src", "images/ryu/ryuFireBallRight.gif"),
 	ryuKickRight: $("<img>").addClass("ryuKick").attr("src", "images/ryu/ryuKickRight.gif"),
 	}

var ryuAttacksLeft = {
	ryuPunchLeft: $("<img>").addClass("ryuPunchLeft").attr("src", "images/ryu/ryuPunchLeft.gif"),
	ryuSpecialLeft: $("<img>").addClass("ryuSpecialLeft").attr("src", "images/ryu/ryuFireBallLeft.gif"),
 	ryuKickLeft: $("<img>").addClass("ryuKickLeft").attr("src", "images/ryu/ryuKickLeft.gif"),
 	}

var bossArr = {
	bossPunch: $("<img>").addClass("bossIntroLeft").attr("src", "images/boss/mBisonPunchLeft.gif"),
	bossSpecial: $("<img>").addClass("bossSpecial").attr("src", "images/boss/mBisonSpecialLeft.gif"),
}

var	bossIntroLeft = $("<img>").addClass("bossIntroLeft").attr("src", "images/boss/mBisonIntroLeft.gif");
var boss = $("<img>").addClass("bisonLeft").attr("src", "images/boss/mBisonLeft.gif");


var kenPlayerRight = $("<img>").addClass("kenPlayer").attr("src", "images/Ken/kenReadyRight.gif");
var kenPlayerLeft = $("<img>").addClass("kenPlayer").attr("src", "images/Ken/kenReadyLeft.gif");
var ryuPlayerRight = $("<img>").addClass("ryuPlayer").attr("src", "images/ryu/ryuReadyRight.gif");
var ryuPlayerLeft = $("<img>").addClass("ryuPlayer").attr("src", "images/ryu/ryuReadyLeft.gif");
var random;
var computerAttack;
var keys;

var comPoints = 0;


	//choosing a player--make choosing a player the same as the calculator (choose number (character) ends the function--choose operator(othercharacter--ends other functions?)game starts ='s)
	
	//loading window stuff

$(document).ready(function() {

	// $(document).on('click','.special, .punch, .kick',  function () {
	// 	$('.comHealth').text("Computer Health: " + comHealth);
	// 	$('.userHealth').text("User Health: " + userHealth);
	// }) 

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


$(document).on('click','.choiceOne, .choiceTwo', function () {
	$(this).hide();
	var divClass = $(this).data('divclass');

	if (divClass == 'ryu'){
		$('.playerOne').append(ryuPlayerRight);
		$('.playerTwo').append(kenPlayerLeft);
		$('.choiceTwo').hide();

		playerOne = 'ryu';
		playerTwo = 'ken'
	} 
	else if (divClass == 'ken') {
	 	$('.playerOne').append(kenPlayerRight); 
	 	$('.playerTwo').append(ryuPlayerLeft)
	 	$('.choiceOne').hide();

	 	playerOne = 'ken';
	 	playerTwo = 'ryu';
	 }
	  
});

// var randomProperty = function (obj) {
//     var keys = kenAttacks.keys(obj)
//     return obj[keys[ keys.length * Math.random() << 0]];
// };


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
		$('.special').show();
		$('.punch').show();
		$('.kick').show();
		$(this).hide();
		$('.choose').hide();
		$('.fighters').append(start);
		start.show().delay(2500).fadeOut();
		
		
	
	});

//**********************************************ATTACKS******************************************************

$(document).on('click','.special, .punch, .kick',  function () {
		$('.comHealth').text("Computer Health: " + comHealth);
		$('.userHealth').text("User Health: " + userHealth);
	}) 
	



	$(document).on('click','.special', function () {
			
			special = (Math.floor(Math.random()* 10) + 25);

			if (special >= 30){
				comHealth = comHealth - 10;
			}else if (special <= 30){
			$('.block').show().delay(2000).fadeOut();
				comHealth = comHealth - 2;
			} 

//ken	
			special = (Math.floor(Math.random()* 15) + 15);

				if (special >= 25){
					comHealth = comHealth - 20;
					$('.damage').html('Attack Damage: ' + 20);					
				}else if (special <= 25){
				$('.block').show().delay(2000).fadeOut();
					comHealth = comHealth - 6;
					$('.damage').html('Attack Damage: ' + 6);					
				} 
		if (playerOne == 'ken'){
			$('.playerOne').html(kenAttacksRight.kenSpecialRight);
			
			
			setTimeout(function(){
				$('.playerOne').html(kenPlayerRight);
			}, 2000);

			computerAttack = setTimeout(function (){
				
				// for (compSpecial = 6; compSpecial += 6; compSpecial += 6) {
				// 		console.log(compSpecial)
				// 		// $('.userHealth').text("User Health: " + (userHealth - compSpecial));
				// 	}
			$('.playerTwo').html(ryuAttacksLeft[Object.keys(ryuAttacksLeft)[Math.floor(Math.random()*Object.keys(ryuAttacksLeft).length)]])
			 	$('.damage').html('Attack Damage: ' + (comPoints += 8));
				userHealth = userHealth - comPoints;

				}, 3000);
				

			setTimeout(function(){
				$('.playerTwo').html(ryuPlayerLeft);

					// if (computerAttack == ryuAttacksLeft.ryuPunchLeft){
					// 	userHealth = userHealth - 6;
					// } else if(computerAttack == ryuAttacksLeft.ryuKickLeft){
					// 	userHealth = userHealth - 12;
					// }else if(computerAttack == ryuAttacksLeft.ryuSpecialLeft){
					// 	userHealth = userHealth - 20;
					// }
				}, 6001);


//ryu
		}else {
			$('.playerOne').html(ryuAttacksRight.ryuSpecialRight)

			setTimeout(function(){
				$('.playerOne').html(ryuPlayerRight);
			}, 4000);

			computerAttack = setTimeout(function (){

				// for (compSpecial = 6; compSpecial += 6; compSpecial += 6) {
				// 		console.log(compSpecial)
				// 		// $('.userHealth').text("User Health: " + (userHealth - compSpecial));
				// 	}
			$('.playerTwo').html(kenAttacksLeft[Object.keys(kenAttacksLeft)[Math.floor(Math.random()*Object.keys(kenAttacksLeft).length)]])
			 	$('.damage').html('Attack Damage: ' + (comPoints += 8));
				userHealth = userHealth - comPoints;

				}, 3000);
				

			setTimeout(function(){
				$('.playerTwo').html(kenPlayerLeft);

					// if (computerAttack == ryuAttacksLeft.ryuPunchLeft){
					// 	userHealth = userHealth - 6;
					// } else if(computerAttack == ryuAttacksLeft.ryuKickLeft){
					// 	userHealth = userHealth - 12;
					// }else if(computerAttack == ryuAttacksLeft.ryuSpecialLeft){
					// 	userHealth = userHealth - 20;
					// }
				}, 6001);

		}

	});	


//********************************************************PUNCH******************************************************

	$(document).on('click','.punch', function () {

//ken
				punch = (Math.floor(Math.random()* 10) + 10);

				if (punch >= 15){
					comHealth = comHealth - 10;
					$('.damage').html('Attack Damage: ' + 10);					
				}else if (punch <= 15){
				$('.block').show().delay(2000).fadeOut();
					comHealth = comHealth - 2;
					$('.damage').html('Attack Damage: ' + 2);					
				} 

			
			if (playerOne == 'ken'){
				$('.playerOne').html(kenAttacksRight.kenPunchRight);
				
				// setTimeout(function(){
				// 	ryuPlayerLeft.hide().delay(2000).fadeIn();

				// 	$('.playerOne').html(kenAttacksRight.kenNoogieRight);
				// 	}, 2000);
				
				setTimeout(function(){
					$('.playerOne').html(kenPlayerRight);
					}, 3000);
					comHealth = comHealth - 5;

				computerAttack = setTimeout(function (){
					var random = $('.playerTwo').html(ryuAttacksLeft[Object.keys(ryuAttacksLeft)[Math.floor(Math.random()*Object.keys(ryuAttacksLeft).length)]])
					 	$('.damage').html('Attack Damage: ' + (comPoints += 4));
						userHealth = userHealth - comPoints;

					}, 3500);
				
				setTimeout(function(){
					$('.playerTwo').html(ryuPlayerLeft);

						// if (computerAttack == ryuAttacksLeft.ryuPunchLeft){
						// 	userHealth = userHealth - 6;
						// } else if(computerAttack == ryuAttacksLeft.ryuKickLeft){
						// 	userHealth = userHealth - 12;
						// }else if(computerAttack == ryuAttacksLeft.ryuSpecialLeft){
						// 	userHealth = userHealth - 20;
						// }
					}, 6001);


//ryu
			}else {
				$('.playerOne').html(ryuAttacksRight.ryuPunchRight)

				setTimeout(function(){
					$('.playerOne').html(ryuPlayerRight);
				}, 6500);
				computerAttack = setTimeout(function (){

				// for (compSpecial = 6; compSpecial += 6; compSpecial += 6) {
				// 		console.log(compSpecial)
				// 		// $('.userHealth').text("User Health: " + (userHealth - compSpecial));
				// 	}
			$('.playerTwo').html(kenAttacksLeft[Object.keys(kenAttacksLeft)[Math.floor(Math.random()*Object.keys(kenAttacksLeft).length)]])
			 	$('.damage').html('Attack Damage: ' + (comPoints += 4));
				userHealth = userHealth - comPoints;

				}, 3000);
				

			setTimeout(function(){
				$('.playerTwo').html(kenPlayerLeft);

					// if (computerAttack == ryuAttacksLeft.ryuPunchLeft){
					// 	userHealth = userHealth - 6;
					// } else if(computerAttack == ryuAttacksLeft.ryuKickLeft){
					// 	userHealth = userHealth - 12;
					// }else if(computerAttack == ryuAttacksLeft.ryuSpecialLeft){
					// 	userHealth = userHealth - 20;
					// }
				}, 6001);
			}

	});	


//********************************************************KICK******************************************************

	$(document).on('click','.kick', function () {

//ken
			kick = (Math.floor(Math.random()* 15) + 10);

			if (kick >= 20){
				comHealth = comHealth - 14;
				$('.damage').html('Attack Damage: ' + 14);
			}else if (kick <= 20){
			$('.block').show().delay(2000).fadeOut();
				comHealth = comHealth - 4;
				$('.damage').html('Attack Damage: ' + 4);				
			} 


			
			if (playerOne == 'ken'){
				$('.playerOne').html(kenAttacksRight.kenKickRight);

				setTimeout(function(){
					$('.playerOne').html(kenPlayerRight);
				}, 1000);

			computerAttack = setTimeout(function (){
				 $('.playerTwo').html(ryuAttacksLeft[Object.keys(ryuAttacksLeft)[Math.floor(Math.random()*Object.keys(ryuAttacksLeft).length)]])
				 	$('.damage').html('Attack Damage: ' + (comPoints += 5));
					userHealth = userHealth - comPoints;
				// if (Object.keys(ryuAttacksLeft) === [0]){
				// 	console.log('tired')
				// } else if (Object.keys(ryuAttacksLeft) === [1]){
				// 	console.log('tired')
				// } else if (Object.keys(ryuAttacksLeft) === [2]){
				// 	console.log('tired')
				// }

					// if (ryuAttacksLeft[ran] == 0){
					// 		console.log(userHealth = userHealth - 6);
					// 	} 
					// 	else if (ryuAttacksLeft[ran] == 1){
					// 		console.log(userHealth = userHealth - 12);
					// 	}
					// 	else if (ryuAttacksLeft[ran] == 2){
					// 		console.log(userHealth = userHealth - 20);
					// 	}
					// 	else {
					// 		console.log('nothin');
					// 	}
				}, 1500);

			
			setTimeout(function(){
				$('.playerTwo').html(ryuPlayerLeft);
				}, 5001);				


//ryu
			}else {
				$('.playerOne').html(ryuAttacksRight.ryuKickRight)
					kenPlayerLeft.hide().delay(2000).fadeIn();

				setTimeout(function(){
					$('.playerOne').html(ryuPlayerRight);
				}, 2000);
				computerAttack = setTimeout(function (){

					// for (compSpecial = 6; compSpecial += 6; compSpecial += 6) {
					// 		console.log(compSpecial)
					// 		// $('.userHealth').text("User Health: " + (userHealth - compSpecial));
					// 	}
				$('.playerTwo').html(kenAttacksLeft[Object.keys(kenAttacksLeft)[Math.floor(Math.random()*Object.keys(kenAttacksLeft).length)]])
				 	$('.damage').html('Attack Damage: ' + (comPoints += 5));
					userHealth = userHealth - comPoints;

					}, 3000);
					

				setTimeout(function(){
					$('.playerTwo').html(kenPlayerLeft);

						// if (computerAttack == ryuAttacksLeft.ryuPunchLeft){
						// 	userHealth = userHealth - 6;
						// } else if(computerAttack == ryuAttacksLeft.ryuKickLeft){
						// 	userHealth = userHealth - 12;
						// }else if(computerAttack == ryuAttacksLeft.ryuSpecialLeft){
						// 	userHealth = userHealth - 20;
						// }
					}, 6001);
			}



	});

			if (userHealth <= 0){
				$('.block').text('YOU LOSE!');

			}
			else if (comHealth <=0){
				$('.block').text('WINNER!');
				//reset userHealth to 100;
				$('.playerTwo').html(bossIntroLeft);
					setTimeout(function(){
					$('.playerTwo').html(boss);
				}, 1000);

					$(document).on('click','.special, .punch, .kick',  function () {
							$('.comHealth').text("Computer Health: " + comHealth);
							$('.userHealth').text("User Health: " + userHealth);
						}) 
						


//************************************ Attacks Boss ************************************

						$(document).on('click','.special', function () {
								
								special = (Math.floor(Math.random()* 10) + 25);

								if (special >= 30){
									comHealth = comHealth - 10;
								}else if (special <= 30){
								$('.block').show().delay(2000).fadeOut();
									comHealth = comHealth - 2;
								} 

					//ken	
								special = (Math.floor(Math.random()* 15) + 15);

									if (special >= 25){
										comHealth = comHealth - 20;
										$('.damage').html('Attack Damage: ' + 20);					
									}else if (special <= 25){
									$('.block').show().delay(2000).fadeOut();
										comHealth = comHealth - 6;
										$('.damage').html('Attack Damage: ' + 6);					
									} 
							if (playerOne == 'ken'){
								$('.playerOne').html(kenAttacksRight.kenSpecialRight);
								
								
								setTimeout(function(){
									$('.playerOne').html(kenPlayerRight);
								}, 2000);

								computerAttack = setTimeout(function (){
								$('.playerTwo').html(bossArr[Object.keys(bossArr)[Math.floor(Math.random()*Object.keys(bossArr).length)]])
								 	$('.damage').html('Attack Damage: ' + (comPoints += 12));
									userHealth = userHealth - comPoints;

									}, 3000);
									

								setTimeout(function(){
									$('.playerTwo').html(boss);

									}, 6001);


					//ryu
							}else {
									$('.playerOne').html(ryuAttacksRight.ryuSpecialRight)

									setTimeout(function(){
										$('.playerOne').html(ryuPlayerRight);
									}, 4000);

									computerAttack = setTimeout(function (){
									$('.playerTwo').html(bossArr[Object.keys(bossArr)[Math.floor(Math.random()*Object.keys(bossArr).length)]])
									 	$('.damage').html('Attack Damage: ' + (comPoints += 12));
										userHealth = userHealth - comPoints;

										}, 3000);
										

									setTimeout(function(){
										$('.playerTwo').html(boss);
										}, 6001);

								}

						});	


					//********************************************************PUNCH******************************************************

						$(document).on('click','.punch', function () {

					//ken
									punch = (Math.floor(Math.random()* 10) + 10);

									if (punch >= 15){
										comHealth = comHealth - 10;
										$('.damage').html('Attack Damage: ' + 10);					
									}else if (punch <= 15){
									$('.block').show().delay(2000).fadeOut();
										comHealth = comHealth - 2;
										$('.damage').html('Attack Damage: ' + 2);					
									} 

								
								if (playerOne == 'ken'){
									$('.playerOne').html(kenAttacksRight.kenPunchRight);
									setTimeout(function(){
										$('.playerOne').html(kenPlayerRight);
										}, 3000);
										comHealth = comHealth - 5;

									computerAttack = setTimeout(function (){
										var random = $('.playerTwo').html(bossArr[Object.keys(bossArr)[Math.floor(Math.random()*Object.keys(bossArr).length)]])
										 	$('.damage').html('Attack Damage: ' + (comPoints += 8));
											userHealth = userHealth - comPoints;

										}, 3500);
									
									setTimeout(function(){
										$('.playerTwo').html(boss);
										}, 6001);


					//ryu
								} else {
										$('.playerOne').html(ryuAttacksRight.ryuPunchRight)

										setTimeout(function(){
											$('.playerOne').html(ryuPlayerRight);
										}, 6500);
										computerAttack = setTimeout(function (){
									$('.playerTwo').html(bossArr[Object.keys(bossArr)[Math.floor(Math.random()*Object.keys(bossArr).length)]])
									 	$('.damage').html('Attack Damage: ' + (comPoints += 8));
										userHealth = userHealth - comPoints;

										}, 3000);
										

									setTimeout(function(){
										$('.playerTwo').html(boss);

										}, 6001);
									}

						});	


					//********************************************************KICK******************************************************

						$(document).on('click','.kick', function () {

					//ken
								kick = (Math.floor(Math.random()* 15) + 10);

								if (kick >= 20){
									comHealth = comHealth - 14;
									$('.damage').html('Attack Damage: ' + 14);
								}else if (kick <= 20){
								$('.block').show().delay(2000).fadeOut();
									comHealth = comHealth - 4;
									$('.damage').html('Attack Damage: ' + 4);				
								} 


								
								if (playerOne == 'ken'){
									$('.playerOne').html(kenAttacksRight.kenKickRight);

									setTimeout(function(){
										$('.playerOne').html(kenPlayerRight);
									}, 1000);

								computerAttack = setTimeout(function (){
									 $('.playerTwo').html(bossArr[Object.keys(bossArr)[Math.floor(Math.random()*Object.keys(bossArr).length)]])
									 	$('.damage').html('Attack Damage: ' + (comPoints += 2));
										userHealth = userHealth - comPoints;
									}, 1500);

								
								setTimeout(function(){
									$('.playerTwo').html(boss);
									}, 5001);				


					
								}else {
									$('.playerOne').html(ryuAttacksRight.ryuKickRight)
										kenPlayerLeft.hide().delay(2000).fadeIn();

									setTimeout(function(){
										$('.playerOne').html(ryuPlayerRight);
									}, 2000);
									computerAttack = setTimeout(function (){

								
									$('.playerTwo').html(bossArr[Object.keys(bossArr)[Math.floor(Math.random()*Object.keys(bossArr).length)]])
									 	$('.damage').html('Attack Damage: ' + (comPoints += 2));
										userHealth = userHealth - comPoints;

										}, 3000);
										

									setTimeout(function(){
										$('.playerTwo').html(boss);
										}, 6001);
								}
							});
			}


});	
// $(document).on('click','.punch', function () {
// 		special = (Math.floor(Math.random()* 10) + 25);
// 			kenPlayerRight.hide().delay(2500).fadeIn();
// 			$('.playerOne').append(kenAttacks.kenPunchRight)
// 			kenAttacks.kenPunchRight.show().delay(2500).fadeOut();
// 			punch = (Math.floor(Math.random()* 8) + 10);
// 			var comAttack = setTimeout(function(){
// 			randomMove = moves[Math.floor(Math.random()*ryuAttacks.length)];
//     		  }, 3000);
			
// 			var comAttackPoint = setTimeout(function(){
			
// 			for (userHealth = userHealth-6; userHealth <= 100; userHealth += 6) {
// 					$('.userHealth').text("User Health: " + userHealth);
// 				}
//     		});

// 			if (punch >= 14){
// 				comHealth = comHealth - 10;
// 			}else {
// 			$('.block').show().delay(2000).fadeOut();
// 				comHealth = comHealth - 2;
// 			} 

		
	
// 	});
		// debugger;
		// special = (Math.floor(Math.random()* 10) + 25);



		// kenPlayerRight.hide().delay(2500).fadeIn();

		// $('.playerOne').append(kenAttacks.kenPunchRight)

		// kenAttacks.kenPunchRight.show().delay(2500).fadeOut();

		// punch = (Math.floor(Math.random()* 8) + 10);

		// var comAttack = setTimeout(function(){
		// 	randomMove = moves[Math.floor(Math.random()*ryuAttacks.length)];

		// }, 3000);
			
		// var comAttackPoint = setTimeout(function(){
		
		// for (userHealth = userHealth-6; userHealth <= 100; userHealth += 6) {
		// 	$('.userHealth').text("User Health: " + userHealth);
		// }

		// if (punch >= 14){
		// 	comHealth = comHealth - 10;
		// }else {
		// 	$('.block').show().delay(2000).fadeOut();
		// 	comHealth = comHealth - 2;
		// } 

		// $('.comHealth').text("Computer Health: " + comHealth);
		// $('.userHealth').text("User Health: " + userHealth);
	








// $(document).on('click', '.punch', function (){
// 	$('.playerTwo').append(kenAttacks.kenPunch);

// })
		
// 	$('.punch').on('click', function(){
// 			kenAttacks.kenPlayerLeft.hide().delay(2000).fadeIn();
// 		$('.playerTwo').append(kenAttacks.kenPunch);
// 		kenAttacks.kenPunch.show().delay(2000).fadeOut();
	










