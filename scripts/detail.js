let updatePrice = ()=>{
	let noOfAdults=document.getElementById('adults');
	let fromDates=document.getElementById('fromDate');
	let toDates = document.getElementById('toDate');
	let totalPrice=document.getElementById('total');

	let toDateValue = new Date(toDates.value);
	let fromDateValue = new Date(fromDates.value);

	toDates.min = fromDates.value;

	let noOfDays = (toDateValue - fromDateValue)/(1000 * 3600 * 24);
	if(noOfAdults.value && toDates.value && fromDates.value){
		totalPrice.value = 'Rs. '+parseInt(noOfAdults.value)*noOfDays*1000;
	}
	else{
		totalPrice.value="Rs.0";
	}
}
