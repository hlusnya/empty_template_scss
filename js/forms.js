$(document).ready(function(){

	


$('body').find('.form-valid').each(function() {
	$(this).validate({
		errorPlacement: function(error, element) {},
		debug: false,
		rules: {
			'phone':{
				required: true,					
			},		
		},
		submitHandler: function(form) {
			sendMail(form, '');
		
		}
	});
});

jQuery.validator.addMethod(
	"phones", 
	function(value, element) {
		return this.optional(element) || /^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}\-[0-9]{2}/.test(value);
	}, 
	"������� ������ �������"
);  


function sendMail(form, message) {   
    var ya = $(form).attr('data-push');
    $.ajax({
        type: "POST",
        url: $(form).attr('data-action'),
        data: $(form).serialize(),
        beforeSend: function() {
            $('.popup').fadeOut(500);
            $('.popup_bg').fadeIn(800);
            formPosition('.popup-message.'+message);
            $('.popup-message.'+message).fadeIn(500);
        },
        success: function(html) {	
            //dataLayer.push({'event': ya});			
        }
    });		
}
	

	
});
	
