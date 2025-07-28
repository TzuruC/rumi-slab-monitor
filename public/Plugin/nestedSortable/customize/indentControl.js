function applyIndentPadding() {
    $('.sortable li').each(function () {
        const level = $(this).parents('ol').length - 1;
        const pad = 1.5; // rem
        $(this)
            .find('.indent')
            .first()
            .css('padding-left', `${level * pad}rem`);
    });
}
