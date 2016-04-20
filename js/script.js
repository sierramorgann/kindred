$(document).ready(function() { 
	$(function(){
		$('#Container').mixItUp();
	});

	$('.mix').hover(function() {
		$(this).find('.name').show();
		},
	function() {
		$('.name').hide();
	});

	$('.mix').on('click', function() {
        var correspondingDiv = $(this).attr('data-divider');
        $('.myDivider').each(function() { $(this).hide(); });
        $('.exit').on('click', function() { $('.myDivider').hide(); })
        $(correspondingDiv).show();
    });

	$( '.cross' ).hide();
	$( '.menu' ).hide();
		$( '.hamburger' ).on('click', function() {
			$( '.menu' ).slideToggle( "slow", function() {
				$( '.hamburger' ).hide();
				$( '.cross' ).show();
			});
		});

	$( '.cross' ).on('click',function() {
		$( '.menu' ).slideToggle( "slow", function() {
			$( '.cross' ).hide();
			$( '.hamburger' ).show();
		});
	});

});

