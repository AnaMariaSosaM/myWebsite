var pageName = document.location.pathname.match(/[^\/]+$/)[0];
function addClassSelected (argument) {
	switch(pageName) {
		case "index.html":
			console.log('test');
			$("#navbar_portfolio").addClass('selected')
			break;
		case "about.html":
			$("#navbar_about").addClass('selected')
			break;
		case "contact.html":
			$("#navbar_contact").addClass('selected')
			break;
	}
}
$( document ).ready(function() {
	addClassSelected();
});