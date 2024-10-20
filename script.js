var cbutton = document.getElementById("credit");
var dbutton = document.getElementById("debit");

cbutton.addEventListener('click', function(){
	var cbalance= document.getElementById('balance');
	var eamount= document.getElementById("amount").value;
	var m= document.getElementById('message');
	var abalance = parseInt(cbalance.innerText) + parseInt(eamount);
	if(!eamount){
		m.innerText = "Please enter amount.";
		m.style.color = "#ff0000";
	}
	else{
		if(parseInt(eamount)>0){
			cbalance.innerText = parseInt(abalance); 
			m.innerText = "";
		}
		else{
			m.innerText = "Please enter amount greater than 0";
			m.style.color = "white";
		}
	}
	eamount.value = "0"; 
});

dbutton.addEventListener('click', function(){
	var cbalance= document.getElementById('balance');
	var eamount= document.getElementById("amount").value;
	var m= document.getElementById('message');
	var abalance = parseInt(cbalance.innerText) - parseInt(eamount);
	
	if(!eamount){
		m.innerText = "Please enter amount.";
		m.style.color = "white";
	}
	else if(parseInt(eamount) > parseInt(cbalance.innerText)){
		m.innerText = "You don't have balance.Please enter lesser amount.";
		m.style.color = "#ff0000";
	}
	else{
		cbalance.innerText = parseInt(abalance);  
		m.innerText = "";
	}
	eamount.value = "0"; 
});