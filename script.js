document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const setGridButton = document.querySelector('.set-grid');
    let drawColor = 'black';

    function blockSize(amount) {
        return (100/amount) + '%';
    };

    function createDivs(amount) {
        for (let i = 0; i < Math.pow(amount, 2); i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('block');
            newDiv.style.width = `${blockSize(amount)}`;
            newDiv.style.height = `${blockSize(amount)}`;
            container.appendChild(newDiv);
        };
    };

    createDivs(4);

    function removeGrid() {
        const blocks = document.querySelectorAll('.block');
        blocks.forEach(block => block.remove());
    };

    function setGrid() {
        const userInput = prompt('Type in the desired number of blocks per side (max. 100)', 4);
        const convertedInput = Number(userInput);

        if (isNaN(convertedInput)) {
            return alert('Wrong input type! Please put in a number between 2 and 100.');
        };
        if(convertedInput < 2 || convertedInput > 100) {
            return alert('Please put in a number between 2 and 100!');
        } else {
            removeGrid();
            console.log('drawcolor reset:', drawColor)
            createDivs(convertedInput);
            drawColor = `black`;
        };
    };

    setGridButton.addEventListener('click', function(event) {
        event.stopPropagation();
        setGrid();
    });

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