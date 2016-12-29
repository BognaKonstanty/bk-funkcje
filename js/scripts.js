var triangle1Area = getTriangleArea(10,15);
var triangle2Area = getTriangleArea(5,2);
var triangle3Area = getTriangleArea(7, 4);

function getTriangleArea(a, h) {
	if (a > 0) && (h > 0) { 
    var result = a*h/2;
		console.log(' a wynosi: ' + a +', h wynosi: ' + h +', a i h mają     wartość większą od zera'+' Wynik działania: '+result);
    return result;
	  }else  {
		  console.log(' Nieprawidłowe dane');
	  }
  }




