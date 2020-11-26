/*
   1. attrs: getAttribute, setAttribute, removeAttribute,
    dataset,
   2. createElement
   3. append
   4. Fragment
   4. Навесить событие на дин. элем.
   5. cycles event
   6. insertAdjacentHTML // HW
   7. replaceWith(node) // hw
*/


window.onload = function() {
    const block = document.querySelector('#block');
    const buttons = document.querySelectorAll('button');

    const actions = {
        close() {
            console.log('close...');
        },
        edit() {
            console.log('edit...');
        },
        create() {
            console.log('create...');
        },
        update() {
            console.log('update ....');
        }
    }
    // console.log(button.myAction, 'myAction');
    //node.dataset.action => close
    //dataset.foo
    function onClick() {
        // const behavior = this.getAttribute('my-action');
        //    const behavior = this.dataset
        // console.dir(this.dataset.action, 'action');
        const behavior = this.dataset.action;

        actions[behavior] && actions[behavior]();
        // console.log(this.getAttribute('my-action'), 'my-action');
        // setTimeout(() => this.setAttribute('my-action', 'hello'), 3000);
        // setTimeout(() => this.removeAttribute('my-action'), 3000);
    }

    buttons.forEach(button => (button.onclick = onClick));

    

    // getAttribute, setAttribute, removeAttribute,

    const link = document.querySelector('#foo');

    console.log(link.dataset.action);

    //(this.getAttribute('my-action')
};