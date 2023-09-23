
function changePage(id)
{
	page = '#'+id+'Page';
	$(document).ready(function() {
		$('#homePage, #contactPage, #testimonialPage,#aboutPage,#servicePage,#galleryPage').hide();


		$('#home,#contact,#testimonial,#about,#service,#gallery').parent().removeClass('active');
		$('#'+id).parent().addClass('active'); 		
		$(page).show();

		$("#navbarSupportedContent").removeClass('navbar-collapse collapse show');
				$("#navbarSupportedContent").addClass('navbar-collapse collapse hide');	

				document.getElementById('scroll').scrollIntoView();	
            
	});
	
}

