function counting()
	{
		var today = new Date();
		
		
		var hours = today.getHours();
		if (hours<10) hours = "0"+hours;
		
		var minutes = today.getMinutes();
		if (minutes<10) minutes = "0"+minutes;
		
		var sec = today.getSeconds();
		if (sec <10) sec = "0"+sec;
		
		document.getElementById("time").innerHTML = 
		hours+":"+minutes+":"+sec;
		 
		 setTimeout("counting()",1000);
	}