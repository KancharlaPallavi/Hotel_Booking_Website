if (!isLogin || isLogin === 'false') {
	document.getElementById('payNow').setAttribute('disabled', 'disabled');
}
else{
	document.getElementById('payNow').addEventListener('click', function(){
	alert('Hi your booking is successfull !!');
})
}