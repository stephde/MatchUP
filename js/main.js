function init() {
	
}

$(function(){
    init();
});


function fetchData(){
	$.ajax("https://s10hanaxs.hanatrial.ondemand.com/i848741trial/hanatrial/innojam/innojam_xs_backend/db_test.xsjs")
		.done(function(data){
			console.log(data);
		});
}

fetchData();

function loadTemplate(template){
	$("#contentWrapper").load("templates/" + template + ".html");
}

function addSport(){
	var newSport = "<div class='mySportWrapper'><input type='text' placeholder='Sport...'><input type='number' placeholder='Skilllevel' min=1 max=10></div>";
	$("#mySportsWrapper").append(newSport);
}