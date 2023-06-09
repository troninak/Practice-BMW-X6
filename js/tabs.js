const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFiledElems = document.querySelectorAll('[data-tabs-field]');

for (const tab of tabsHandlerElems) {
    tab.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => {
            if (tab == item) {
                item.classList.add('design-list__item_active');
            }
            else {
                item.classList.remove('design-list__item_active');
            }
        });
        tabsFiledElems.forEach(item => {
            if (item.dataset.tabsField == tab.dataset.tabsHandler) {
                item.classList.remove('hidden');
            }
            else {
                item.classList.add('hidden');
            }
        });
    });
}