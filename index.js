document.getElementById('keyword').onkeypress = function(e){
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == '13'){
    var search = this.value
  }
}


var url = "https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Automobiles/1.json";
url += '?' + $.param({
  'api-key': "8e36df88f55e4de6a37ab4b310540c0c"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});



τάσεις
táseis
