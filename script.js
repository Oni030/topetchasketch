document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const helpPopup = document.querySelector('.help-popup');
    const setGridButton = document.querySelector('.set-grid');
    const resetButton = document.querySelector('.reset');
    const helpButton = document.querySelector('.help');

    let drawColor = 'black';
    let blockNum = 4;

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

    function removeGrid() {
        const blocks = document.querySelectorAll('.block');
        blocks.forEach(block => block.remove());
    };

    function setGrid(event) {
        event.stopPropagation();
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
            blockNum = convertedInput;
            createDivs(blockNum);
            drawColor = 'black';
        };
    };

    function reset(event) {
        event.stopPropagation();
        const confirmation = confirm('Do you want to reset the grid?');
        if (confirmation === false) {
            return;
        };
        removeGrid();
        createDivs(blockNum);
        drawColor = 'black';
    };

    function colorBlock(event) {
        if (event.target.classList.contains('block')) {
            event.target.style.backgroundColor = `${drawColor}`;
        }
    };
    
    function randomColor(event) {
        if (event.button === 0) {
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            const newColor = `rgb(${r}, ${g}, ${b})`;
            drawColor = newColor;
        }
    };

    function resetColor(event) {
        if (event.button === 0) {
            drawColor = 'black';
        }
    };

    function openPopup(event) {
        event.stopPropagation();
        helpPopup.style.display = 'block';
        container.style.display = 'none';
    };

    createDivs(blockNum);

    setGridButton.addEventListener('click', setGrid);
    resetButton.addEventListener('click', reset);
    container.addEventListener('mouseover', colorBlock);
    document.addEventListener('click', randomColor);
    document.addEventListener('dblclick', resetColor);
    helpButton.addEventListener('click', openPopup);
});