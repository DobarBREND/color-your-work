function callPopUp(){
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl)
	})
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



/*-----------------------------------CMYK row 11-----------------------------*/

function copyToClipboard1() {
  // Get the text field
  var copyText = document.getElementById("myInput1");
  var copyValue = document.getElementById("myInput1").attributes.getNamedItem("1text").value;
 	
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard2() {
  var copyText = document.getElementById("myInput2");
  var copyValue = document.getElementById("myInput2").attributes.getNamedItem("2text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard3() {
  var copyText = document.getElementById("myInput3");
  var copyValue = document.getElementById("myInput3").attributes.getNamedItem("3text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard4() {
  var copyText = document.getElementById("myInput4");
  var copyValue = document.getElementById("myInput4").attributes.getNamedItem("4text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard5() {
  var copyText = document.getElementById("myInput5");
  var copyValue = document.getElementById("myInput5").attributes.getNamedItem("5text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard6() {
  var copyText = document.getElementById("myInput6");
  var copyValue = document.getElementById("myInput6").attributes.getNamedItem("6text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard7() {
  var copyText = document.getElementById("myInput7");
  var copyValue = document.getElementById("myInput7").attributes.getNamedItem("7text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard8() {
  var copyText = document.getElementById("myInput8");
  var copyValue = document.getElementById("myInput8").attributes.getNamedItem("8text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard9() {
  var copyText = document.getElementById("myInput9");
  var copyValue = document.getElementById("myInput9").attributes.getNamedItem("9text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard10() {
  var copyText = document.getElementById("myInput10");
  var copyValue = document.getElementById("myInput10").attributes.getNamedItem("10text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}

/*-----------------------------------CMYK row 12 -----------------------------*/

function copyToClipboard11() {
  var copyText = document.getElementById("myInput11");
  var copyValue = document.getElementById("myInput11").attributes.getNamedItem("11text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard12() {
  var copyText = document.getElementById("myInput12");
  var copyValue = document.getElementById("myInput12").attributes.getNamedItem("12text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard13() {
  var copyText = document.getElementById("myInput13");
  var copyValue = document.getElementById("myInput13").attributes.getNamedItem("13text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard14() {
  var copyText = document.getElementById("myInput14");
  var copyValue = document.getElementById("myInput14").attributes.getNamedItem("14text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard15() {
  var copyText = document.getElementById("myInput15");
  var copyValue = document.getElementById("myInput15").attributes.getNamedItem("15text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard16() {
  var copyText = document.getElementById("myInput16");
  var copyValue = document.getElementById("myInput16").attributes.getNamedItem("16text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard17() {
  var copyText = document.getElementById("myInput17");
  var copyValue = document.getElementById("myInput17").attributes.getNamedItem("17text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard18() {
  var copyText = document.getElementById("myInput18");
  var copyValue = document.getElementById("myInput18").attributes.getNamedItem("18text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard19() {
  var copyText = document.getElementById("myInput19");
  var copyValue = document.getElementById("myInput19").attributes.getNamedItem("19text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard20() {
  var copyText = document.getElementById("myInput20");
  var copyValue = document.getElementById("myInput20").attributes.getNamedItem("20text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}

/*-----------------------------------CMYK row 13 -----------------------------*/

function copyToClipboard21() {
  var copyText = document.getElementById("myInput21");
  var copyValue = document.getElementById("myInput21").attributes.getNamedItem("21text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard22() {
  var copyText = document.getElementById("myInput22");
  var copyValue = document.getElementById("myInput22").attributes.getNamedItem("22text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard23() {
  var copyText = document.getElementById("myInput23");
  var copyValue = document.getElementById("myInput23").attributes.getNamedItem("23text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard24() {
  var copyText = document.getElementById("myInput24");
  var copyValue = document.getElementById("myInput24").attributes.getNamedItem("24text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard25() {
  var copyText = document.getElementById("myInput25");
  var copyValue = document.getElementById("myInput25").attributes.getNamedItem("25text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard26() {
  var copyText = document.getElementById("myInput26");
  var copyValue = document.getElementById("myInput26").attributes.getNamedItem("26text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard27() {
  var copyText = document.getElementById("myInput27");
  var copyValue = document.getElementById("myInput27").attributes.getNamedItem("27text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard28() {
  var copyText = document.getElementById("myInput28");
  var copyValue = document.getElementById("myInput28").attributes.getNamedItem("28text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard29() {
  var copyText = document.getElementById("myInput29");
  var copyValue = document.getElementById("myInput29").attributes.getNamedItem("29text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard30() {
  var copyText = document.getElementById("myInput30");
  var copyValue = document.getElementById("myInput30").attributes.getNamedItem("30text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}

/*-----------------------------------CMYK row 14 -----------------------------*/

function copyToClipboard31() {
  var copyText = document.getElementById("myInput31");
  var copyValue = document.getElementById("myInput31").attributes.getNamedItem("31text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard32() {
  var copyText = document.getElementById("myInput32");
  var copyValue = document.getElementById("myInput32").attributes.getNamedItem("32text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard33() {
  var copyText = document.getElementById("myInput33");
  var copyValue = document.getElementById("myInput33").attributes.getNamedItem("33text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard34() {
  var copyText = document.getElementById("myInput34");
  var copyValue = document.getElementById("myInput34").attributes.getNamedItem("34text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard35() {
  var copyText = document.getElementById("myInput35");
  var copyValue = document.getElementById("myInput25").attributes.getNamedItem("35text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard36() {
  var copyText = document.getElementById("myInput36");
  var copyValue = document.getElementById("myInput36").attributes.getNamedItem("36text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard37() {
  var copyText = document.getElementById("myInput37");
  var copyValue = document.getElementById("myInput37").attributes.getNamedItem("37text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard38() {
  var copyText = document.getElementById("myInput38");
  var copyValue = document.getElementById("myInput38").attributes.getNamedItem("38text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard39() {
  var copyText = document.getElementById("myInput39");
  var copyValue = document.getElementById("myInput39").attributes.getNamedItem("39text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard40() {
  var copyText = document.getElementById("myInput40");
  var copyValue = document.getElementById("myInput40").attributes.getNamedItem("40text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}

/*-----------------------------------CMYK row 15 -----------------------------*/

function copyToClipboard41() {
  var copyText = document.getElementById("myInput41");
  var copyValue = document.getElementById("myInput41").attributes.getNamedItem("41text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard42() {
  var copyText = document.getElementById("myInput42");
  var copyValue = document.getElementById("myInput42").attributes.getNamedItem("42text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard43() {
  var copyText = document.getElementById("myInput43");
  var copyValue = document.getElementById("myInput43").attributes.getNamedItem("43text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard44() {
  var copyText = document.getElementById("myInput44");
  var copyValue = document.getElementById("myInput44").attributes.getNamedItem("44text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard45() {
  var copyText = document.getElementById("myInput45");
  var copyValue = document.getElementById("myInput45").attributes.getNamedItem("45text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard46() {
  var copyText = document.getElementById("myInput46");
  var copyValue = document.getElementById("myInput46").attributes.getNamedItem("46text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard47() {
  var copyText = document.getElementById("myInput47");
  var copyValue = document.getElementById("myInput47").attributes.getNamedItem("47text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard48() {
  var copyText = document.getElementById("myInput48");
  var copyValue = document.getElementById("myInput48").attributes.getNamedItem("48text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard49() {
  var copyText = document.getElementById("myInput49");
  var copyValue = document.getElementById("myInput49").attributes.getNamedItem("49text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard50() {
  var copyText = document.getElementById("myInput50");
  var copyValue = document.getElementById("myInput50").attributes.getNamedItem("50text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}

/*-----------------------------------CMYK row 16 -----------------------------*/

function copyToClipboard51() {
  var copyText = document.getElementById("myInput51");
  var copyValue = document.getElementById("myInput51").attributes.getNamedItem("51text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard52() {
  var copyText = document.getElementById("myInput52");
  var copyValue = document.getElementById("myInput52").attributes.getNamedItem("52text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard53() {
  var copyText = document.getElementById("myInput53");
  var copyValue = document.getElementById("myInput53").attributes.getNamedItem("53text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard54() {
  var copyText = document.getElementById("myInput54");
  var copyValue = document.getElementById("myInput54").attributes.getNamedItem("54text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard55() {
  var copyText = document.getElementById("myInput55");
  var copyValue = document.getElementById("myInput55").attributes.getNamedItem("55text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard56() {
  var copyText = document.getElementById("myInput56");
  var copyValue = document.getElementById("myInput56").attributes.getNamedItem("56text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard57() {
  var copyText = document.getElementById("myInput57");
  var copyValue = document.getElementById("myInput57").attributes.getNamedItem("57text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard58() {
  var copyText = document.getElementById("myInput58");
  var copyValue = document.getElementById("myInput58").attributes.getNamedItem("58text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard59() {
  var copyText = document.getElementById("myInput59");
  var copyValue = document.getElementById("myInput59").attributes.getNamedItem("59text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard60() {
  var copyText = document.getElementById("myInput60");
  var copyValue = document.getElementById("myInput60").attributes.getNamedItem("60text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}

/*-----------------------------------CMYK row 17 -----------------------------*/

function copyToClipboard61() {
  var copyText = document.getElementById("myInput61");
  var copyValue = document.getElementById("myInput61").attributes.getNamedItem("61text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard62() {
  var copyText = document.getElementById("myInput62");
  var copyValue = document.getElementById("myInput62").attributes.getNamedItem("62text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard63() {
  var copyText = document.getElementById("myInput63");
  var copyValue = document.getElementById("myInput63").attributes.getNamedItem("63text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard64() {
  var copyText = document.getElementById("myInput64");
  var copyValue = document.getElementById("myInput64").attributes.getNamedItem("64text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard65() {
  var copyText = document.getElementById("myInput65");
  var copyValue = document.getElementById("myInput65").attributes.getNamedItem("65text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard66() {
  var copyText = document.getElementById("myInput66");
  var copyValue = document.getElementById("myInput66").attributes.getNamedItem("66text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard67() {
  var copyText = document.getElementById("myInput67");
  var copyValue = document.getElementById("myInput67").attributes.getNamedItem("67text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard68() {
  var copyText = document.getElementById("myInput68");
  var copyValue = document.getElementById("myInput68").attributes.getNamedItem("68text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard69() {
  var copyText = document.getElementById("myInput69");
  var copyValue = document.getElementById("myInput69").attributes.getNamedItem("69text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard70() {
  var copyText = document.getElementById("myInput70");
  var copyValue = document.getElementById("myInput70").attributes.getNamedItem("70text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}

/*-----------------------------------CMYK row 18 -----------------------------*/

function copyToClipboard71() {
  var copyText = document.getElementById("myInput71");
  var copyValue = document.getElementById("myInput71").attributes.getNamedItem("71text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard72() {
  var copyText = document.getElementById("myInput72");
  var copyValue = document.getElementById("myInput72").attributes.getNamedItem("72text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard73() {
  var copyText = document.getElementById("myInput73");
  var copyValue = document.getElementById("myInput73").attributes.getNamedItem("73text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard74() {
  var copyText = document.getElementById("myInput74");
  var copyValue = document.getElementById("myInput74").attributes.getNamedItem("74text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard75() {
  var copyText = document.getElementById("myInput75");
  var copyValue = document.getElementById("myInput75").attributes.getNamedItem("75text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard76() {
  var copyText = document.getElementById("myInput76");
  var copyValue = document.getElementById("myInput76").attributes.getNamedItem("76text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard77() {
  var copyText = document.getElementById("myInput77");
  var copyValue = document.getElementById("myInput77").attributes.getNamedItem("77text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard78() {
  var copyText = document.getElementById("myInput78");
  var copyValue = document.getElementById("myInput78").attributes.getNamedItem("78text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard79() {
  var copyText = document.getElementById("myInput79");
  var copyValue = document.getElementById("myInput79").attributes.getNamedItem("79text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
function copyToClipboard80() {
  var copyText = document.getElementById("myInput80");
  var copyValue = document.getElementById("myInput80").attributes.getNamedItem("80text").value;
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
 
  navigator.clipboard.writeText(copyText.value);

  alert(copyText.value + " color is copied on the clipboard." + " The name of the color is " + copyValue + ".");
}
