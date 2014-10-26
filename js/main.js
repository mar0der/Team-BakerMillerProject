$(document).ready(function() {
	//load default message
	replaceContent("img-1");
	//check if some of the navigation buttons is clicked
	$(".next").click(function() {
		replaceContent($(this).attr("for"));
	});
	$(".prev").click(function() {
		replaceContent($(this).attr("for"));
	});

	function replaceContent(messageNumber) {
		if ($("p.triangle-right").attr("id") == "scene1") {
			switch(messageNumber) {
			case 'img-1':
				messageNumber = "Nakov had a dream...";
				break;
			case 'img-2':
				messageNumber = "...Nakov meets the headquarters of the other universities...";
				break;
			case 'img-3':
				messageNumber = "...The process of training a softUni warrior programmer...";
				break;
			case 'img-4':
				messageNumber = "...Some spartan programmers fail to survive the training...";
				break;
			case 'img-5':
				messageNumber = "...Many code bugs and system errors threatened Nakov...";
				break;
			case 'img-6':
				messageNumber = "...Nakov summons the soft spartan programming warriors...";
				break;
			case 'img-7':
				messageNumber = "...We march towards victory...";
				break;
			case 'img-8':
				messageNumber = "...SoftUni troops Attack...";
				break;
			case 'img-9':
				messageNumber = "...Bugs and Errors approaching...";
				break;
			case 'img-10':
				messageNumber = "...Ladies or Lads, it does not matters, we all code!";
				break;
			default:
				messageNumber = "Nakov had a dream...";
			}
		} else {
			switch(messageNumber) {
			case 'img-1':
				messageNumber = "...Prepare For Brutal Coding...";
				break;
			case 'img-2':
				messageNumber = "...Initializing software attack...";
				break;
			case 'img-3':
				messageNumber = "...Some errors are labelled unsolvable, or are they...";
				break;
			case 'img-4':
				messageNumber = "...A true programmer is relentless and never gives up debugging...";
				break;
			case 'img-5':
				messageNumber = "...After a hard coding day, and a sweet victory solutions, we return to drinking...";
				break;
			case 'img-6':
				messageNumber = "...Even though everyone is exhausted and falls asleep, the King never sleeps, he thinks and dreams - IN CODE!";
				break;
			case 'img-7':
				messageNumber = "...Sometimes even the King needs some BigInteger range-like number of beers!";
				break;
			default:
				messageNumber = "...Prepare For Brutal Coding...";
			}
		}

		$("p.triangle-right").text(messageNumber);
	};
});
