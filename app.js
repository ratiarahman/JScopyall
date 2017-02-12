$("#btn1").click( function(){

	var a = $("#name").text();
	$("#copy1").val(a);
});

$("#btn2").click( function(){

	var a = $("#email").text();
	$("#copy2").val(a);
});

$("#btn3").click( function(){

	var a = $("#address").text();
	$("#copy3").val(a);
});

$("#btn").click( function(){
	var a = $("#name").text();
	$("#copy1").val(a);
	var a = $("#email").text();
	$("#copy2").val(a);

	var a = $("#address").text();
	$("#copy3").val(a);
});