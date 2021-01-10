// @ts-nocheck
// 4. styles directives: ( HW )
//    * v-bind:class="{ 'class-name as string': Boolean, 'another-class-name': Boolean variable, .., }"
//    * v-bind:class="['activeClass', errorClassAsVar]"
//    * v-bind:style="{ cssPropName: activeColorAsVar, fontSize: n + 'px', matgin: '10px' }"


const firstTempalte =  `
<div class="parent">
    <h3>Parent Component</h3>
    messages from children !!! {{ parentValue }} !!
    <div class="parent__inner"> 
        <child 
            v-for="(child, $index) in children"
            @foo="listener"
            :id="$index"
            :title="child"
        >
        </child>
    </div>
</div>
`;

const secondTemplate = `
<div class="parent">
    <h3>Parent Component</h3>
    messages from children !!! {{ parentValue }} !!
    <div class="parent__inner"> 
        <child-first @up="listener"></child-first>
    </div>
</div>
`;



Vue.component(
    'parent-component',
    {
        data: () => ({
            name: 'Valera',
            age: 12,
            nameSecond: 'Pety',
            parentValue: '',
            children: [
                'child-1',
                'child-2',
            ]
        }),
        methods: {
            hello(){
                alert('hello')
            },
            listener(someValue) {
                console.log(someValue, 'someValue FROM PARENT');

                this.$set(this, 'age', someValue)
                // console.log(value, 'value', 'payload');
                // this.children[id] = payload;
                //this.$set(obj, key, value)
                // this.$set(this.children, id, payload); //pop, push...

                // console.log(this.children)
                // this.parentValue = value;
                // console.log('call listent method in --> parent compt -->', value);
            }
        },
        template: secondTemplate
    }
);
Vue.component(
    'child-first', 
    {
        data: () => ({
            someValue: 123
        }),
        methods: {
            sendToParent() {
                this.$emit('up', this.someValue);
            }
        },
        template: `
            <div class="child-first">
            <input @input="sendToParent" type="text" v-model.number="someValue"/>

            {{ typeof someValue }}

            <button @input="sendToParent"> send </button>
                child-first
            </div>
        `
    }
);

Vue.component(
    'child-second',
    {
        props: {
            value: Number
        },
        template: `
            <div class="child-second">
                child-second {{ value }}
            </div>
        `
    }
)


// Vue.component(
//     'child', 
//     {
//         props: ['title', 'id'], //title = 9999
//         data: () => ({
//             someText: ''
//         }),
//         methods: {
//             notifyToParent() {
//                 // this.title = 'child-vip';//bad, error
//                 // console.log('call notifyToParent method in -->> child cmpnt');
//                 // console.log(this.id, 'id');
//                 this.$emit('foo', {
//                     id: this.id,
//                     payload: this.someText
//                 });
//             }
//         },
//         template: `
//             <div class="child-first">
//                 {{title}} 

//                 component

//                 <input type="text" v-model="someText">   

//                 <button @click="notifyToParent">
//                     change
//                 </button>
//             </div>
//         `
//     }
// );

// function child(title: String, foo) {
//console.log(title, foo)
// }

// for(child of children) {
//     child(9999)
// }



const vue = new Vue({
    el: '#app'
});


