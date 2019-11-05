function toggleIcon(e) {
    $(e.target)
    	.prev(".faqHeader")
        .find(".openerThing")
        .toggleClass('fa-plus fa-minus');
}

$('.collapse').on('hidden.bs.collapse', toggleIcon);
$('.collapse').on('shown.bs.collapse', toggleIcon);

$('.previewToggle').click(function() {
	var link = $(this);
	var linkParent = link.parent();
	var fullTextEls = linkParent.find('.fullText');
    fullTextEls.toggle();
    if (fullTextEls.is(':visible')) {
         link.text('Read Less');                
    } else {
         link.text('Read More');                
    }

    linkParent.find('.preview').toggleClass('font-weight-bold');
})