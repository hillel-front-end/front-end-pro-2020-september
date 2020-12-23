// console.log('Lection 27 __ VUE INTRO __');

/*
1. Instance
2. {{}} Interpolations (https://ru.vuejs.org/v2/guide/syntax.html)
3. Expression in nterpolations({{?:}})
3. directives: 
    * v-html="'String with html value'"
    * v-bind:disabled="boolean"
    * v-bind:href="url"
    * v-model
    * v-if="boolean" - v-else-if="boolean" - v-else
    * v-show="boolean"
    * v-for - loop (Work like  for-in), (value, name, index)

4. styles directives: ( HW )
   * v-bind:class="{ 'class-name as string': Boolean, 'another-class-name': Boolean variable, .., }"
   * v-bind:class="['activeClass', errorClassAsVar]"
   * v-bind:style="{ cssPropName: activeColorAsVar, fontSize: n + 'px', matgin: '10px' }"
5. v-on:click,mousenove .. (@click)

6. $set(vm.items, indexOfItem, newValue) // next lesson
*/

// console.log(Vue, 'vue');
const config = {
    el: '#app',
    data: {
        name: 'Hello front-end Pro',
        appVersion: '1.0.0',
        isMarried: false,
        collection: [1, 2, 3, 'last element from collection'],
        getLastCollectionValue() {
            console.log(this.collection, 'this');
            // return this.collection[this.collection.length - 1];
        },
        products: [ 'milk', 'shugar', 'salt'],
        addProduct() {
            this.products.push('wather');
        },
        removeProduct() {
            this.products.pop();
        }
    }
};

const vue = new Vue(config);

/*
    button press -> action (chagne model ) {name: valera} 

*/