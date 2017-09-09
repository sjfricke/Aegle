console.log("main.js");

function count() {
  $.get( "/api/count", function( data ) {
    console.log(data);
  });
}

function add() {
  $.post( "/api/count/add", {}, function( data ) {
    console.log(data);
  });
}