
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
	
$(function(){

    $.mask.definitions['~']='[78]';
	$(".phone-mask").mask("~(999)999-99-99");
	
	let param = getUrlVars();
	let utm = '<input type="hidden" name="utm_source" value="'+((param['utm_source']!=undefined)?decodeURIComponent(param['utm_source']):'')+'">'+
		      '<input type="hidden" name="utm_medium" value="'+((param['utm_medium']!=undefined)?decodeURIComponent(param['utm_medium']):'')+'">'+
		      '<input type="hidden" name="utm_campaign" value="'+((param['utm_campaign']!=undefined)?decodeURIComponent(param['utm_campaign']):'')+'">'+
		      '<input type="hidden" name="utm_content" value="'+((param['utm_content']!=undefined)?decodeURIComponent(param['utm_content']):'')+'">'+
		      '<input type="hidden" name="utm_term" value="'+((param['utm_term']!=undefined)?decodeURIComponent(param['utm_term']):'')+'">';
	$('form').append(utm);

	$('.click-contact').click(function(e){
		//dataLayer.push({'event': 'contact'});	
	})	


	/**************************************************************
	ПОПАПЫ
	**************************************************************/
	$('body').on('click', '.btn-popup', function(e){
        e.preventDefault();
        let popup = $('.popup[data-popup="'+$(this).attr('data-popup')+'"]');
        //formPosition(popup);
        if ($(this).attr('data-push') != '')
        	$(popup).find('form').attr('data-push', $(this).attr('data-push'));
        $(popup).fadeIn(800); 
		$('body').addClass('noscroll');
	})		
	$('.popup-close').click(function(e){
		e.preventDefault();
		$('.popup').fadeOut(500);
		$('body').removeClass('noscroll');
	})

	/**************************************************************
	меню
	**************************************************************/
	$('#menu_toggler').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.header__navfix').toggleClass('active');
		$('body').toggleClass('noscroll');
	})
	$('.close-menu').click(function(e){
		e.preventDefault();
		$('#menu_toggler').removeClass('active');
		$('.header__navfix').removeClass('active');
		$('body').removeClass('noscroll');
	})


});


