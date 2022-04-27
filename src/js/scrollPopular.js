// For Menu header fullscreen
export const scrollPopular = () => {
    
    let scroll = document.querySelector('.popular-items');
    let scrollItem = document.querySelectorAll('.popular-item');

    let left = 0;
    let drag = false;
    let coorX = 0;

    let scrollSpeed = 1;

    scroll.addEventListener('mousedown', function(e) {
        drag = true;
        coorX = e.pageX - this.offsetLeft;

        
    });

    document.addEventListener('mouseup', function(e) {
        drag = false;
        left = scroll.scrollLeft;

        let delayAnimate = 0;
        let startDelay = 0;

        setInterval(() => {
            if(startDelay < delayAnimate) {
                left < coorX ? ++scroll.scrollLeft : --scroll.scrollLeft;
                startDelay++;
            }
        }, 10);

    });

    scroll.addEventListener('mousemove', function(e) {
        if (drag) {
            this.scrollLeft = left - (e.pageX - this.offsetLeft - coorX) * scrollSpeed;
        }
    });

    scrollItem.forEach((item) => {
        item.addEventListener('mousedown', function(e) {
            e.preventDefault();
        })
    })

};