document.addEventListener('DOMContentLoaded', () => {

    const featureLinkElems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');

    featureLinkElems.forEach((elem, index) => {
        elem.addEventListener('click', () => {

            if (featureSubElems[index].classList.toggle('hidden') == false) {
                featureSubElems.forEach((featureSubElem) => {
                    featureSubElem.classList.add('hidden')
                });
                featureLinkElems.forEach((featureLinkElem) => {
                    featureLinkElem.classList.remove('feature__link_active')
                });
                featureSubElems[index].classList.remove('hidden');
                elem.classList.add('feature__link_active');
            }
            else {
                elem.classList.remove('feature__link_active');
            }

        });
    });
    
});