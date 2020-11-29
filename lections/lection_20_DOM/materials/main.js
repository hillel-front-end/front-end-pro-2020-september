/*
   1.
   2. createElement
   3. append
   4. Fragment
   4. Навесить событие на дин. элем.
   5. cycles event
   6. insertAdjacentHTML // HW
   7. replaceWith(node) // hw
*/


window.onload = function() {
    //--------- Create Element --------
    const div = document.createElement('div');
    // document.body.append(div);

    console.log(div, 'div');
    div.style.color = 'red';
    div.innerText = 'Hello world';

    // document.body.append(div);
    // setTimeout(() => {
        // document.body.append(div);
    // }, 3000);

    // div.innerText = 'Hello world';


    
    // setTimeout(() => {
    //     div.innerText = 'Hello world';
    // }, 3000);

        
    // setTimeout(() => {
    //     div.style.color = 'red';
    // }, 5000);


    // setTimeout(() => {
    //     div.innerText = 'Hell Briz';
    // }, 8000);

    // ---------- Appends + Fragment ----------------
    const a = document.createElement('a');
    const container = document.querySelector('.container');

    console.log(container, 'container');

    a.innerText = 'Hello link';

    setTimeout(() => {
        // container.append/Child
        // container.append(a);
        // container.prepend(a);
        // container.after(a);
        // container.before(a);
        // container.appendChild('TExt');
    }, 2000);

    setTimeout(() => {
        // container.append/Child
        // container.before(a);
        // container.prepend(a);
        // container.after(a);
        // container.before(a);
        // container.appendChild('TExt');
    }, 5000);




    // ------------- example -----------


    const goods = [
        { name: 'juice', price: 1, isBougth: false },
        { name: 'cola', price: 2, isBougth: true },
        { name: 'sprite', price: 3, isBougth: false },
        { name: 'sprite', price: 3, isBougth: true },
        { name: 'sprite', price: 30, isBougth: false },
        { name: 'sprite', price: 30, isBougth: false }

    ];

    // const div2 = document.createElement('div');
    // div2.classList.add('container');
    const fragment = document.createDocumentFragment();
    // console.dir(fragment, 'fragment');

    for(const good of goods) {
       const section = createGood(good);
       fragment.append(section)
    }

    // document.body.prepend(div2);
    container.append(fragment);

    function createGood(good) {
        const section = document.createElement('section');
        section.classList.add('good__item')
        section.innerText = `${good.name} ${good.price}`;

        return section;
    }


    counter = 1;
    setInterval(() => {
        counter++;
        container.append(createGood({name: 'cock', price: '100' * counter}))
    }, 3000);


    container.addEventListener('click', function({ target }) {
        if (target.classList.contains('good__item')) {
            showGoodDetailInfo();
        }
    })

    function showGoodDetailInfo() {
       alert('show info')
    }



    
};




