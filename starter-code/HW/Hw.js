

for (var i = 99; i >= 2; i--) {
 var a = [i] +' bottles of coke on the wall, ' + [i] +' bottles of coke.\n'+'Take one down and pass it around,'+ [i-1] +' bottles of coke on the wall.'
//  console.log(a)
  function myFunction() {
  var node = document.createElement("LI");
//  event.preventDefault();
  var textnode = document.createTextNode(a);
  node.appendChild(textnode);
  document.getElementById("Lyrics").appendChild(node);
}
myFunction();
}
b = 'Take one down and pass it around, no more bottles of coke on the wall.\nNo more bottles of coke on the wall, no more bottles of coke.\nGo to the store and buy some more, 99 bottles of coke on the wall.'

  function myFunction1() {
  var node1 = document.createElement("LI");
  //event.preventDefault();
  var textnode1 = document.createTextNode(b);
  node1.appendChild(textnode1);
  document.getElementById("Lyrics").appendChild(node1);
}
myFunction1();