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
    
    createDivs(4);
})