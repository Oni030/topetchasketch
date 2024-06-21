document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    function createDivs(amount) {
        for (let i = 0; i < Math.pow(amount, 2); i++) {
            const newDiv = document.createElement('div');
            container.appendChild(newDiv);
        };
    };
    
    createDivs(4);
})