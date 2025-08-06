const startSortable = document.querySelector('.edit-sortable-start');
const endSortable = document.querySelector('.edit-sortable-end');
const monitorSortable = document.querySelector('.monitor-sortable');

startSortable.addEventListener('click',()=>{
    monitorSortable.classList.add('sortable');
    initNestedSortable(monitorSortable);
    $('.sortable').nestedSortable('enable');
});
endSortable.addEventListener('click',()=>{
    console.log('end');    
    monitorSortable.classList.remove('sortable');
    $('.sortable').nestedSortable('destroy');
});


function initNestedSortable(monitorSortable) {
    const $sortableRoot = $(monitorSortable);

    $sortableRoot.nestedSortable({
        items: 'li',
        cancel: '.no-sort',       // 禁止拖曳的項目
        maxLevels: 3,
        helper: 'clone',
        relocate: function (event, ui) {
            getHierarchyData($sortableRoot);
        },
        // 例外定義區
        isAllowed: function (placeholder, placeholderParent, currentItem) {
        const $placeholder = $(placeholder);
        const $noSort = $sortableRoot.children('li.no-sort');

        // 禁止成為 .no-sort 的子層
        if (placeholderParent && placeholderParent.hasClass('no-sort')) {
            return false;
        }

        // 禁止插入到 .no-sort 前面（保持它為第一個）
        const isAtRootLevel = $placeholder.parent().is($sortableRoot);
        if (isAtRootLevel && $placeholder.index() === 0) {
            return false;
        }

        return true;
        }
    });

    // 初始呼叫一次渲染
    getHierarchyData($sortableRoot);
    makeMobileFriendly(); // 你原本的函式，如無需作用也可移除
}
