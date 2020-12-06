const data = { 
    name: 'menu', 
    type: 'row', 
    items: [ 
        { title: 'title 1', handler: 'actionAdd' }, 
        { title: 'title 2', handler: 'actionSaveAs' }, 
        { title: 'title 3', handler: 'actionExit' },
         { title: 'title 5', handler: 'actionUpdate' }  ] 
}

const actions = {
 	actionAdd() {
         console.log('add..')
     },
 	actionSaveAs() {
        console.log('save..')
     },
 	actionExit() { 
         console.log('ActionExit')
    },
     actionUpdate(){
        console.log('update..')
     }
 }

//  actions[ 'ActionAdd']
// 1)Создать вертикальное или горизонтальное (в зависимости от свойства type) меню, в котором будут элементы из свойства items.

// hander - хранит название функции, которая выполнится при нажатии на пункт меню.


// function makeMenu(model) {
//     const { items } = model;
//     const ul = document.createElement('ul');
//     ul.classList.add('menu');
//     ul.classList.add(model.type);


//     items.forEach(item => {
//         const li = document.createElement('li');
//         console.log(item.handler, 'item.handler');
//         li.addEventListener('click', actions[item.handler]);
//         li.classList.add('menu__item')
//         li.innerHTML = item.title;
//         ul.append(li);
//     })

//     document.body.append(ul);
// }


// makeMenu(data)


function MenuComponent(model = {}, actions = {}) {
    this.model = model;
    this.actios = actions;
    this.ul = null;
}


const menu = new MenuComponent(data, actions);



MenuComponent.prototype.makeMenuContainer = function() {
    const ul = document.createElement('ul');

    ul.classList.add('menu');
    ul.classList.add(this.model.type || 'row');

    return ul;
};

MenuComponent.prototype.makeMenuItems = function() {
    const { items } = this.model;
    const fragment = document.createDocumentFragment();

    items.forEach(item => {
        const li = document.createElement('li');
        li.addEventListener('click', actions[item.handler]);
        li.classList.add('menu__item')
        li.innerHTML = item.title;
        fragment.append(li);
    })

    return fragment;
};


MenuComponent.prototype.makeMenu = function() {
    const container = this.makeMenuContainer();
    const buttons = this.makeMenuItems();

    if (buttons && buttons.children.length > 0) {
        container.append(buttons);
    }

    return container;
};

MenuComponent.prototype.onInitMenu = function() {
    this.ul = this.makeMenu();
    return this;
};

MenuComponent.prototype.render = function(selector) {
   if (this.ul) {
       document.querySelector(selector).append(this.ul);
       return;
   }

   this.onInitMenu();
   return this;
};



menu
    .onInitMenu()
    .render('.menu-container')

console.log(menu, 'menu');


