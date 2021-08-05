


// ------------------  Accordeon slider for FAQ page (depends on bulma-accordion.min.js) ------------------------------
//------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
	let cardHeaders = document.getElementsByClassName('card-header');
  let cardIcons = document.getElementsByClassName('icon-toggle');
	for (let i = 0; i < cardHeaders.length; i++) {
		cardHeaders[i].addEventListener('click', e => {
			e.currentTarget.parentElement.childNodes[3].classList.toggle('is-hidden');
      cardIcons[i].classList.toggle('fa-angle-down');
      cardIcons[i].classList.toggle('fa-angle-right');
      //console.log(e.currentTarget.parentElement.childNodes);
		});
	}
});


