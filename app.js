var index = 0;


$(document).ready(function(){
	$("#container").on("click", ".generateButton", function(){
		console.log("Button is ineed being clicked");
		$("#container").append("<div class='userContainer'></div>");
		var $el = $("#container").children().last();
		$el.append("<button class='delete'>Delete</button>");
		$el.append("<button class='change'>Change</button>");

		
		// $el.append("<div class = 'index'>Number clicks:</div>");

	});

	$("#container").on('click', '.change', function(){
		console.log("I'm changed!");
		$(this).css("background-color", "red");//need to make this .toggle()
});
	$("#container").on('click', '.delete', function(){
		$(this).remove().children().last();



	});
});

