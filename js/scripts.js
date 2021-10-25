function formPosition(form) {
	var top =  window.pageYOffset || document.documentElement.scrollTop;
	//alert($(form).outerHeight());
	if ($(window).outerHeight() < $(form).outerHeight()) {
		top += 20;
	}
	else {
		top += $(window).outerHeight()/2-$(form).outerHeight()/2;
	}
	$(form).css({'top':top,	 'margin-left':($(window).width()-$(form).outerWidth())/2});								
}

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

	$(".phone-mask").mask("+7(999)999-99-99");
	
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
	$('.popup-close').click(function(){
		$('.popup').fadeOut(500);
		$('body').removeClass('noscroll');
	})

	/**************************************************************
	меню
	**************************************************************/
	$('#menu_toggler').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.header__fix').toggleClass('active');
	})
	$('.close-menu').click(function(e){
		e.preventDefault();
		$('#menu_toggler').removeClass('active');
		$('.header__fix').removeClass('active');
	})

	/**************************************************************
	ВЫБОР СВЯЗИ
	**************************************************************/
	$('.variant_input .ac_in').click(function(){
		$(this).parent('.variant_input').toggleClass('dropdown');
		$(this).next().fadeIn(100);
	})
	$('.variant_input .item_v').click(function(){
		$(this).parent().children('.item_v').removeClass('active');
		$(this).addClass('active'); 
		$(this).parents('form').find('.in_sv').css('display','none');  
		$(this).parents('form').find('.in_sv[data-name='+$(this).attr('data-name')+']').css('display','block');   
		$(this).parents('.variant_input').toggleClass('dropdown').children('.ac_in').html( $(this).html() );
		$(this).parent().fadeOut(100);
	})

});


