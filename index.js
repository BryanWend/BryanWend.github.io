
$(document).ready(function(){

	var em = 'gmail.com';
	em = 'bryanjwendlandt' + '@' + em;

	// var $sendEle = $('#sendBtn');
	var $formEle = $('#contactForm');
	var $subjectEle = $('#subject');
	var $bodyEle = $('#body');
	var mailto;
	// https://formspree.io/email@domain.tld
	// function update(){
		// console.log($sendEle.attr('href'));
		// console.log($subjectEle.val());
		$('#subject,#body').on('change', function(){
			mailto = "https://formspree.io/" + em;
			console.log(mailto);
			$formEle.attr('action', mailto);
			console.log($formEle.attr('action'));

		})
		// mailto = "https://formspree.io/" + em + ".tld";
		// // mailto = 'mailto:' + em +
		// // 	'&subject=' + encodeURI($subjectEle.val()) +
		// // 	'&body=' + encodeURI($bodyEle.val());
		// 	// '&subject=' + $subjectEle.val() +
		// 	// '&body=' + $bodyEle.val();
		// console.log(mailto);
		// $formEle.attr('action', mailto);
		// console.log($formEle.attr('action'));
		// console.log($sendEle.attr('href'));
	// }
	// function update(){
	// 	$bodyEle = $('#bodyInput').val();
	// 		console.log($bodyEle);
	// }
	// $('#subject,#body').on('change', update);
	// $('#sendBtn').on('click', function(){
	// 	if($subjectEle.val() == null){
	// 		$('#subjInput')[0].setCustomValidity('Blank Value in Subj');
	// 	}
	// 	else if($bodyEle.val() == null){
	// 		$('#bodyInput')[0].setCustomValidity('Blank Value in Subj');
	// 	}
	// 	else{
	// 		$('#subjInput')[0].setCustomValidity('');
	// 		$('#bodyInput')[0].setCustomValidity('');
	// 		$sendEle.attr('href', mailto);
	// 	}
	// })
	// update();

})

