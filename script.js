document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    function blockSize(amount) {
        return (100/amount) + '%';
    };

    function borderSize(amount) {
        return (1/Math.sqrt(amount)) + 'px solid lightgrey';
    }

    function createDivs(amount) {
        for (let i = 0; i < Math.pow(amount, 2); i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('block');
            newDiv.style.width = `${blockSize(amount)}`;
            newDiv.style.height = `${blockSize(amount)}`;
            newDiv.style.border = `${borderSize(amount)}`;
            container.appendChild(newDiv);
        };
    };

    createDivs(100);
    
    let drawColor = 'black';

    container.addEventListener('mouseover', function(event) {
        if (event.target.classList.contains('block')) {
            event.target.style.backgroundColor = `${drawColor}`;
        }
    });
    
    document.addEventListener('click', function(event) {
        if (event.button === 0) {
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            const newColor = `rgb(${r}, ${g}, ${b})`;
            drawColor = newColor;
        }
    });
});