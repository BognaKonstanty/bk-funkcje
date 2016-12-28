/// plik scripts.js


  function getTriangleArea(a, h) {
  
	if ((a > 0) && (h > 0)) { 
		console.log(' a wynosi: ' + a +' h wynosi: ' + h +' a i h mają wartość większą od zera');
    var result = a*h/2;
    return result;
	}else if ((a < 0) && (h < 0))  {
		console.log(' a wynosi: ' + a +' h wynosi: ' + h +' a i h mają wartość mniejszą od zera');
	}else  {
		console.log(' Nieprawidłowe dane');
	}

}
var triangle1Area = getTriangleArea(10,15);
console.log( getTriangleArea(10,15) )
var triangle2Area = getTriangleArea(10,15);
console.log( getTriangleArea(5,2) )
var triangle3Area = getTriangleArea(7, 4);
console.log( getTriangleArea(7,4) )





