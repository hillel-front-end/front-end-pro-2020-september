window.onload = function() {
    const boxes = document.querySelectorAll('.box');
    const randomColor = (min, max) =>
    `rgb(${random(min, max)}, ${random(min, max)}, ${random(min, max)})`;
    const random = (min, max) => Math.round(Math.random() * (max - min) + min);

    function inigDragAndDrop(box) {
        const state = {
            shiftX: null,
            shiftY: null,
            // get pxShiftX() {
            //     return  `${Math.floor(this.shiftX)}px`
            // }
        };

        function onDrag({offsetX, offsetY}) {
            state.shiftX = offsetX;
            state.shiftY = offsetY;
            document.addEventListener('mousemove', onMove);
        }

        function onDrop() {
            document.removeEventListener('mousemove', onMove);
        }

        function onMove({clientX, clientY}) {
            // box.style.left = `${clientX}px`;
            // box.style.top = `${clientY}px`;
            box.style.top = `${clientY - state.shiftY}px`;
            box.style.left = `${clientX - state.shiftX}px`;
            box.style.backgroundColor = randomColor(0, 155);
            // setTimeout(() => {
            //     box.style.top = `${clientY - state.shiftY}px`;
            //     box.style.left = `${clientX - state.shiftX}px`;
            // }, 1000);
        }


        box.addEventListener('mousedown', onDrag);
        box.addEventListener('mouseup', onDrop);
    }

    boxes.forEach(box => {
        inigDragAndDrop(box);
    })

};