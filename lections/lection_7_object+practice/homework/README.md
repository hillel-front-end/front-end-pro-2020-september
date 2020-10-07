# Изучить материал

* https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects
* https://learn.javascript.ru/array-methods (!!!)
* https://learn.javascript.ru/object
* https://learn.javascript.ru/object-for-in
* https://learn.javascript.ru/object-reference
* https://drive.google.com/open?id=0B121aJ52ADuLNzhLM09ZeXR2aUk (страницы 37-39, 45-47, 78-85)

# Практика
1) Написать функцию `convert(obj)`, он получает аргументом `obj`.
Функция должна вернуть новый объект:
    newObj = {
        a: 10,
        b: 12,
        f: 13
    }


2) Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый, который состоит из свойство обоих обьектов (склеить). Если свойство повторяется, то взять значение второго обьекта

```
assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }

assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }
```

3) Адаптировать функцию assignObjects() под неопределенное количество объектов. assignObjects(obj1, obj2, ....., objn);




