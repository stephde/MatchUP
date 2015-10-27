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