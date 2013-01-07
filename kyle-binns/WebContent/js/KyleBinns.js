/**
 * 
 */
$(document).ready(function(){
	
	$('.search-query').keyup(function(event){
		event.preventDefault();
		var code = event.which;
		
		console.log(code);
	    if(code == 13){
	    	console.log("here");
	        $('.modal').modal();
	    }
	    
	});
	
	
});