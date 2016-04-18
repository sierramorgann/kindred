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
        // Get data attribute from clicked header
        var correspondingDiv = $(this).attr('data-divider');
        // Hide any open 'myDivider' dividers
        $('.myDivider').each(function() { $(this).hide(); })
        $('.exit').on('click', function() { $('.myDivider').hide(); })
        // Display the corresponding divider
        $(correspondingDiv).show();
    });

	$( ".cross" ).hide();
	$( ".menu" ).hide();
	$( ".hamburger" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
	$( ".hamburger" ).hide();
	$( ".cross" ).show();
	});
	});

	$( ".cross" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
	$( ".cross" ).hide();
	$( ".hamburger" ).show();
	});
	});
});

