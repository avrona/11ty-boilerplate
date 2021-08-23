// ------------------  NavBar Management ------------------------------
//------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

// ------------------  Google tag Manager ------------------------------
//------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
	/** init gtm after 3500 seconds - this could be adjusted */
	setTimeout(initGTM, 3500);
});
document.addEventListener('scroll', initGTMOnEvent);
document.addEventListener('mousemove', initGTMOnEvent);
document.addEventListener('touchstart', initGTMOnEvent);

function initGTMOnEvent (event) {
	initGTM();
	event.currentTarget.removeEventListener(event.type, initGTMOnEvent); // remove the event listener that got triggered
}

function initGTM () {
	if (window.gtmDidInit) {
		return false;
	}
	window.gtmDidInit = true; // flag to ensure script does not get added to DOM more than once.
	const script = document.createElement('script');
	script.type = 'text/javascript';
	script.async = true;
	script.onload = () => { dataLayer.push({ event: 'gtm.js', 'gtm.start': (new Date()).getTime(), 'gtm.uniqueEventId': 0 }); } // this part ensures PageViews is always tracked
	script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-WQ8N9Z5';

	document.head.appendChild(script);
}

