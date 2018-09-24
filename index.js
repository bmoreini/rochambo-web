$(document).ready(function(){
	var total = 0;
	var score = 0;
  var compscore=0;
	var loses = 0;
	var draws = 0;
	var userChoice;
	var computerChoice;

	var compare = function(choice1, choice2){
		if(choice1 === choice2){
			draws++;
			return "Draw!";
		}
		if(choice1 === "Rock"){
			if(choice2 === "Scissors"){
				score++;
				return "You win!";
			} else {
				compscore++;
				loses++;
				return "You lose.";
			}
		}
		if(choice1 === "Paper"){
			if(choice2 === "Rock"){
				score++;
				return "You win!";
			} else {
				compscore++;
				loses++;
				return "You lose."
			}
		}
		if(choice1 === "Scissors"){
			if(choice2 === "Paper"){
				score++;
				return "You win!";
			} else {
				compscore++;
				loses++;
				return "You lose."
			}
		}
	}

	$("#score, #wins").append(score);
  $("#compscore, #wins").append(score);
	$("#total").append(total);
	$("#loses").append(loses);
	$("#draws").append(draws);

	$('.play_button')
		//Button clicking changing to black
		.mousedown(function(){
			$( this ).addClass('on_click');
		})
		.mouseleave(function(){
			$('.play_button').removeClass('on_click');
		})
		.mouseup(function(){
			$( this ).removeClass('on_click');
		})
		//Game play ish?
		.click(function(event){
			$(".coc").empty();
			userChoice = event.target.id;
			$("#user_display").append(userChoice);

			computerChoice = Math.random();
			if(computerChoice < 0.34){
				computerChoice = "Rock";
			} else if(computerChoice <= 0.67){
				computerChoice = "Paper";
			} else {
				computerChoice = "Scissors";
			}
			$("#computer_display").append(computerChoice);

			$("#outcome").append(compare(userChoice, computerChoice));

			total++;

			$("#score, #wins").append(score);
			$("#compscore, #wins").append(compscore);
			$("#total").append(total);
			$("#loses").append(loses);
			$("#draws").append(draws);
		});
	$("#stats_box").hide();
	$("#stats_toggle").click(function(){
		if($("#stats_box").is(":hidden")){
			$( this ).removeClass("down_arrow").addClass("up_arrow");
			$("#stats_box").slideDown("slow");
		} else {
			$( this ).removeClass("up_arrow").addClass("down_arrow");
			$("#stats_box").slideUp("slow");
		}
	});

});