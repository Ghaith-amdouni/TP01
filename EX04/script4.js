document.addEventListener('DOMContentLoaded', (event) => {//make sure the DOM is fully loaded and parsed before executing the code
    const selectElement = document.getElementById('select');
    const changeColorButton = document.getElementById('changeColorButton');

    changeColorButton.addEventListener('click', () => {
        const selectedItemValue = selectElement.value;
        const selectedItem = document.getElementById(`item${selectedItemValue}`);
        const randomColor = generateRandomColor();
        selectedItem.style.color = randomColor;
    });

    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});// before to excute the code u have to make sure that the dom is parsed and loaded