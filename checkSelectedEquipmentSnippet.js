(function() {

	var barcodes = [
	];
	
    var allRows = document.querySelectorAll("tr[class=rgRow]")	
    for (var i = 0; i < allRows.length; i++){
	
		if(barcodes.includes(allRows[i].childNodes[4].innerText)){
			allRows[i].childNodes[1].childNodes[1].checked = true;
		}
		else{
		    allRows[i].childNodes[1].childNodes[1].checked = false;
		}
    }
})()
