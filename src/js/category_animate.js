// We enable .scrollline-text when full load page
export const categoryAnimate = () => {
    window.addEventListener('load', (event) => {
        var elements = document.querySelectorAll('.scrollline-text');
        for (var i = 0; i < elements.length; i++)
            elements[i].style.display = 'block';
    });
}
