var seamlessImmutableJs = require('seamless-immutable');
var immutableJs = require('immutable');
var moriJs = require('mori');
var update = require('react-addons-update');
var updateih = require('immutability-helper');
var iassign = require("immutable-assign");

var REPEATS;
var repeats = [1000, 10000, 1000000];

function getFormatedRepeats() {
    switch (REPEATS) {
        case 1000: return '    1000';
        case 10000: return '   10000';
        case 1000000: return ' 1000000';
    }
}

function test(callback) {
    console.log('```javascript');
    for (var i = 0; i < repeats.length; i++) {
        REPEATS = repeats[i]
        var startTime = Date.now();
        callback();
        var testTime = Date.now() - startTime;
        console.log(getFormatedRepeats() + ' / ' + testTime);
        global.gc();
    }
    console.log('```');
}

//== get object ==

function objectGetNative() {
    var obj = {
        value: Math.random()
    };
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = obj.value;
    }
}

function objectGetSeamlessImmutableJs() {
    var obj = seamlessImmutableJs.from({
        value: Math.random()
    });
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = obj.value;
    }
}

function objectGetImmutableJs() {
    var obj = new immutableJs.fromJS({
        value: Math.random()
    });
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = obj.get('value');
    }
}

function objectGetMoriJs() {
    var obj = moriJs.hashMap('value', Math.random());
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = moriJs.get(obj, 'value');
    }
}

function objectGetReactAddonsUpdateJs() {
    var obj = {
        value: Math.random()
    };
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = obj.value;
    }
}

function objectGetImmutabilityHelperJs() {
    var obj = {
        value: Math.random()
    };
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = obj.value;
    }
}

function objectGetImmutablyAssignJs() {
    var obj = {
        value: Math.random()
    };
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = obj.value;
    }
}

//== get array ==

function arrayGetNative() {
    var arr = [
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ];
    var value;
    var maxIndex = arr.length - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = arr[~~(Math.random() * maxIndex)];
    }
}

function arrayGetSeamlessImmutableJs() {
    var arr = seamlessImmutableJs.from([
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]);
    var value;
    var maxIndex = arr.length - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = arr[~~(Math.random() * maxIndex)];
    }
}

function arrayGetImmutablejs() {
    var arr = new immutableJs.fromJS([
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]);
    var value;
    var maxIndex = arr.size - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = arr.get(~~(Math.random() * maxIndex));
    }
}

function arrayGetMoriJs() {
    var arr = moriJs.vector(Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
    var value;
    var maxIndex = moriJs.count(arr) - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = moriJs.get(arr, ~~(Math.random() * maxIndex));
    }
}

function arrayGetReactAddonsUpdateJs() {
    var arr = [
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ];
    var value;
    var maxIndex = arr.length - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = arr[~~(Math.random() * maxIndex)];
    }
}

function arrayGetImmutabilityHelperJs() {
    var arr = [
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ];
    var value;
    var maxIndex = arr.length - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = arr[~~(Math.random() * maxIndex)];
    }
}

function arrayGetImmutablyAssignJs() {
    var arr = [
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ];
    var value;
    var maxIndex = arr.length - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = arr[~~(Math.random() * maxIndex)];
    }
}

//=== getIn object ===

function objectGetInNative() {
    var obj = {
        data: {
            value: Math.random()
        }
    };
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = obj.data.value;
    }
}

function objectGetInSeamlessImmutableJs() {
    var obj = seamlessImmutableJs.from({
        data: {
            value: Math.random()
        }
    });
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = obj.data.value;
    }
}

function objectGetInImmutableJs() {
    var obj = immutableJs.Map({
        data: immutableJs.Map({
            value: Math.random()
        })
    });
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = obj.getIn(['data', 'value']);
    }
}

function objectGetInMoriJs() {
    var obj = moriJs.hashMap('data', moriJs.hashMap('value', Math.random()));
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = moriJs.getIn(obj, ['data', 'value']);
    }
}

function objectGetInReactAddonsUpdateJs() {
    var obj = {
        data: {
            value: Math.random()
        }
    };
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = obj.data.value;
    }
}

function objectGetInImmutabilityHelperJs() {
    var obj = {
        data: {
            value: Math.random()
        }
    };
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = obj.data.value;
    }
}

function objectGetInImmutablyAssignJs() {
    var obj = {
        data: {
            value: Math.random()
        }
    };
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = obj.data.value;
    }
}

//=== getIn array ===

function arrayGetInNative() {
    var arr = [[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]];
    var value;
    var maxIndex = arr[0].length - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = arr[0][~~(Math.random() * maxIndex)];
    }
}

function arrayGetInSeamlessImmutableJs() {
    var arr = seamlessImmutableJs.from([[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]]);
    var value;
    var maxIndex = arr[0].length - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = arr[0][~~(Math.random() * maxIndex)];
    }
}

function arrayGetInImmutableJs() {
    var arr = new immutableJs.fromJS([[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]]);
    var value;
    var maxIndex = arr.get(0).size - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = arr.getIn([0, ~~(Math.random() * maxIndex)]);
    }
}

function arrayGetInMoriJs() {
    var arr = moriJs.vector(moriJs.vector(Math.random(), Math.random(), Math.random(), Math.random(), Math.random()));
    var value;
    var maxIndex = moriJs.count(moriJs.get(arr, 0)) - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = moriJs.getIn(arr, [0, ~~(Math.random() * maxIndex)]);
    }
}

function arrayGetInReactAddonsUpdateJs() {
    var arr = [[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]];
    var value;
    var maxIndex = arr[0].length - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = arr[0][~~(Math.random() * maxIndex)];
    }
}

function arrayGetInImmutabilityHelperJs() {
    var arr = [[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]];
    var value;
    var maxIndex = arr[0].length - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = arr[0][~~(Math.random() * maxIndex)];
    }
}

function arrayGetInImmutablyAssignJs() {
    var arr = [[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]];
    var value;
    var maxIndex = arr[0].length - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = arr[0][~~(Math.random() * maxIndex)];
    }
}

//== set object ==

function objectSetNative() {
    var obj = {
        value: Math.random()
    };
    for (var i = 0; i < REPEATS; i++) {
        obj = Object.assign({}, obj, {
            value: Math.random()
        });
    }
}

function objectSetSeamlessImmutableJs() {
    var obj = seamlessImmutableJs.from({
        value: Math.random()
    });
    for (var i = 0; i < REPEATS; i++) {
        obj.set('value', Math.random());
    }
}


function objectSetImmutableJs() {
    var obj = seamlessImmutableJs.from({
        value: Math.random()
    });
    for (var i = 0; i < REPEATS; i++) {
        obj.set('value', Math.random());
    }
}

function objectSetMoriJs() {
    var obj = moriJs.hashMap('value', Math.random());
    var value;
    for (var i = 0; i < REPEATS; i++) {
        moriJs.assoc(obj, 'value', Math.random());
    }
}

function objectSetReactAddonsUpdateJs() {
    var obj = {
        value: Math.random()
    };
    for (var i = 0; i < REPEATS; i++) {
        update(obj, { value: { $set: Math.random() } })
    }
}

function objectSetImmutabilityHelperJs() {
    var obj = {
        value: Math.random()
    };
    for (var i = 0; i < REPEATS; i++) {
        updateih(obj, { value: { $set: Math.random() } })
    }
}

function objectSetImmutablyAssignJs() {
    var obj = {
        value: Math.random()
    };
    for (var i = 0; i < REPEATS; i++) {
        iassign(obj,
            function (o) { o.value = Math.random(); return o; });
    }
}

//== set array ==

function arraySetNative() {
    var arr = [
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ];
    var maxIndex = arr.length - 1;
    for (var i = 0; i < REPEATS; i++) {
        arr = [].concat(arr);
        arr[~~(Math.random() * maxIndex)] = Math.random();
    }
}

function arraySetSeamlessImmutableJs() {
    var arr = seamlessImmutableJs.from([
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]);
    var maxIndex = arr.length - 1;
    for (var i = 0; i < REPEATS; i++) {
        arr.set(~~(Math.random() * maxIndex), Math.random());
    }
}

function arraySetImmutableJs() {
    var arr = new immutableJs.fromJS([
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]);
    var maxIndex = arr.size - 1;
    for (var i = 0; i < REPEATS; i++) {
        arr = arr.set(~~(Math.random() * maxIndex), Math.random());
    }
}

function arraySetMoriJs() {
    var arr = moriJs.vector(Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
    var value;
    var maxIndex = moriJs.count(arr) - 1;
    for (var i = 0; i < REPEATS; i++) {
        value = moriJs.assoc(arr, ~~(Math.random() * maxIndex), Math.random());
    }
}

function arraySetReactAddonsUpdateJs() {
    var arr = [
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ];
    var maxIndex = arr.length - 1;
    for (var i = 0; i < REPEATS; i++) {
        arr = update(arr, { [~~(Math.random() * maxIndex)]: { $set: Math.random() } })
    }
}

function arraySetImmutabilityHelperJs() {
    var arr = [
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ];
    var maxIndex = arr.length - 1;
    for (var i = 0; i < REPEATS; i++) {
        arr = updateih(arr, { [~~(Math.random() * maxIndex)]: { $set: Math.random() } })
    }
}

function arraySetImmutablyAssignJs() {
    var arr = [
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ];
    var maxIndex = arr.length - 1;
    for (var i = 0; i < REPEATS; i++) {
        arr = iassign(arr,
            function (a) { a[~~(Math.random() * maxIndex)] = Math.random(); return a; });
    }
}

//== setIn object ==

function objectSetInNative() {
    var obj = {
        data: {
            value: Math.random()
        }
    };
    for (var i = 0; i < REPEATS; i++) {
        obj = Object.assign({}, obj, {
            data: Object.assign({}, obj.data, {
                value: Math.random()
            })
        });
    }
}

function objectSetInSeamlessImmutableJs() {
    var obj = seamlessImmutableJs.from({
        data: {
            value: Math.random()
        }
    });
    for (var i = 0; i < REPEATS; i++) {
        obj = obj.setIn(['data', 'value'], Math.random());
    }
}

function objectSetInImmutableJs() {
    var obj = immutableJs.Map({
        data: immutableJs.Map({
            value: Math.random()
        })
    });
    for (var i = 0; i < REPEATS; i++) {
        obj = obj.setIn(['data', 'value'], Math.random());
    }
}

function objectSetInMoriJs() {
    var obj = moriJs.hashMap('data', moriJs.hashMap('value', Math.random()));
    var value;
    for (var i = 0; i < REPEATS; i++) {
        value = moriJs.assocIn(obj, ['data', 'value'], Math.random());
    }
}

function objectSetInReactAddonsUpdateJs() {
    var obj = {
        data: {
            value: Math.random()
        }
    };
    for (var i = 0; i < REPEATS; i++) {
        obj = update(obj, { data: { value: { $set: Math.random() } } });
    }
}

function objectSetInImmutabilityHelperJs() {
    var obj = {
        data: {
            value: Math.random()
        }
    };
    for (var i = 0; i < REPEATS; i++) {
        obj = updateih(obj, { data: { value: { $set: Math.random() } } });
    }
}

function objectSetInImmutablyAssignJs() {
    var obj = {
        data: {
            value: Math.random()
        }
    };
    for (var i = 0; i < REPEATS; i++) {
        obj = iassign(obj,
            function (o) { return o.data; },
            function (data) { data.value = Math.random(); return data; });
    }
}

//== setIn array ==

function arraySetInNative() {
    var arr = [[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]];
    var maxIndex = arr[0].length - 1;
    for (var i = 0; i < REPEATS; i++) {
        arr = [].concat(arr);
        arr[0] = [].concat(arr[0]);
        arr[0][~~(Math.random() * maxIndex)] = Math.random();
    }
}

function arraySetInSeamlessImmutableJs() {
    var arr = seamlessImmutableJs.from([[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]]);
    var maxIndex = arr[0].length - 1;
    for (var i = 0; i < REPEATS; i++) {
        arr = arr.setIn([0, ~~(Math.random() * maxIndex)], Math.random());
    }
}

function arraySetInImmutableJs() {
    var arr = new immutableJs.fromJS([[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]]);
    var maxIndex = arr.get(0).size - 1;
    for (var i = 0; i < REPEATS; i++) {
        arr = arr.setIn([0, ~~(Math.random() * maxIndex)], Math.random());
    }
}

function arraySetInMoriJs() {
    var arr = moriJs.vector(moriJs.vector(Math.random(), Math.random(), Math.random(), Math.random(), Math.random()));
    var maxIndex = moriJs.count(moriJs.get(arr, 0)) - 1;
    for (var i = 0; i < REPEATS; i++) {
        arr = moriJs.assocIn(arr, [0, ~~(Math.random() * maxIndex)], Math.random());
    }
}

function arraySetInReactAddonsUpdateJs() {
    var arr = [[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]];
    var maxIndex = arr[0].length - 1;
    for (var i = 0; i < REPEATS; i++) {
        update(arr, { [0]: { [~~(Math.random() * maxIndex)]: { $set: Math.random() } } });
    }
}

function arraySetInImmutabilityHelperJs() {
    var arr = [[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]];
    var maxIndex = arr[0].length - 1;
    for (var i = 0; i < REPEATS; i++) {
        updateih(arr, { [0]: { [~~(Math.random() * maxIndex)]: { $set: Math.random() } } });
    }
}

function arraySetInImmutablyAssignJs() {
    var arr = [[
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random()
    ]];
    var maxIndex = arr[0].length - 1;
    for (var i = 0; i < REPEATS; i++) {
        iassign(arr,
            function (a) { return a[0]; },
            function (ci) { ci[~~(Math.random() * maxIndex)] = Math.random(); return ci; });
    }
}

console.log('[get] Object Native (repeats / ms):');
test(objectGetNative);
console.log('[get] Object Seamless-immutable.js (repeats / ms): ');
test(objectGetSeamlessImmutableJs);
console.log('[get] Object Immutable.js (repeats / ms):');
test(objectGetImmutableJs);
console.log('[get] Object Mori.js (repeats / ms):');
test(objectGetMoriJs);
console.log('[get] Object react-addons-update.js (repeats / ms):');
test(objectGetReactAddonsUpdateJs);
console.log('[get] Object immutability-helper.js (repeats / ms):');
test(objectGetImmutabilityHelperJs);
console.log('[get] Object immutable-assign.js (repeats / ms):');
test(objectGetImmutablyAssignJs);

console.log('[get] Array Native (repeats / ms):');
test(arrayGetNative);
console.log('[get] Array Seamless-immutable.js (repeats / ms):');
test(arrayGetSeamlessImmutableJs);
console.log('[get] Array Immutable.js (repeats / ms):');
test(arrayGetImmutablejs);
console.log('[get] Array Mori.js (repeats / ms):');
test(arrayGetMoriJs);
console.log('[get] Array react-addons-update.js (repeats / ms):');
test(arrayGetReactAddonsUpdateJs);
console.log('[get] Array immutability-helper.js (repeats / ms):');
test(arrayGetImmutabilityHelperJs);
console.log('[get] Array immutable-assign.js (repeats / ms):');
test(arrayGetImmutablyAssignJs);

console.log('[getIn] Object Native. GetIn (repeats / ms):');
test(objectGetInNative);
console.log('[getIn] Object Seamless-immutable (repeats / ms):');
test(objectGetInSeamlessImmutableJs);
console.log('[getIn] Object Immutable.js (repeats / ms):');
test(objectGetInImmutableJs);
console.log('[getIn] Object Mori.js (repeats / ms):');
test(objectGetInMoriJs);
console.log('[getIn] Object react-addons-update.js (repeats / ms):');
test(objectGetInReactAddonsUpdateJs);
console.log('[getIn] Object immutability-helper.js (repeats / ms):');
test(objectGetInImmutabilityHelperJs);
console.log('[getIn] Object immutable-assign.js (repeats / ms):');
test(objectGetInImmutablyAssignJs);

console.log('[getIn] Array Native (repeats / ms):');
test(arrayGetInNative);
console.log('[getIn] Array Seamless-immutable.js (repeats / ms):');
test(arrayGetInSeamlessImmutableJs);
console.log('[getIn] Array Immutable.js (repeats / ms):');
test(arrayGetInImmutableJs);
console.log('[getIn] Array Mori.js (repeats / ms):');
test(arrayGetInMoriJs);
console.log('[getIn] Array react-addons-update.js (repeats / ms):');
test(arrayGetInReactAddonsUpdateJs);
console.log('[getIn] Array immutability-helper.js (repeats / ms):');
test(arrayGetInImmutabilityHelperJs);
console.log('[getIn] Array immutable-assign.js (repeats / ms):');
test(arrayGetInImmutablyAssignJs);

console.log('[set] Object Native (repeats / ms):');
test(objectSetNative);
console.log('[set] Object Seamless-immutable.js (repeats / ms):');
test(objectSetSeamlessImmutableJs);
console.log('[set] Object Immutable.js (repeats / ms):');
test(objectSetImmutableJs);
console.log('[set] Object Mori.js (repeats / ms):');
test(objectSetMoriJs);
console.log('[set] Object react-addons-update.js (repeats / ms):');
test(objectSetReactAddonsUpdateJs);
console.log('[set] Object immutability-helper.js (repeats / ms):');
test(objectSetImmutabilityHelperJs);
console.log('[set] Object immutable-assign.js (repeats / ms):');
test(objectSetImmutablyAssignJs);

console.log('[set] Array Native (repeats / ms):');
test(arraySetNative);
console.log('[set] Array Seamless-immutable.js (repeats / ms):');
test(arraySetSeamlessImmutableJs);
console.log('[set] Array Immutable.js (repeats / ms):');
test(arraySetImmutableJs);
console.log('[set] Array Mori.js (repeats / ms):');
test(arraySetMoriJs);
console.log('[set] Array react-addons-update.js (repeats / ms):');
test(arraySetReactAddonsUpdateJs);
console.log('[set] Array immutability-helper.js (repeats / ms):');
test(arraySetImmutabilityHelperJs);
console.log('[set] Array immutable-assign.js (repeats / ms):');
test(arraySetImmutablyAssignJs);

console.log('[setIn] Object Native (repeats / ms):');
test(objectSetInNative);
console.log('[setIn] Object Seamless-immutable.js (repeats / ms):');
test(objectSetInSeamlessImmutableJs);
console.log('[setIn] Object Immutable.js (repeats / ms):');
test(objectSetInImmutableJs);
console.log('[setIn] Object Mori.js (repeats / ms):');
test(objectSetInMoriJs);
console.log('[setIn] Object react-addons-update.js (repeats / ms):');
test(objectSetInReactAddonsUpdateJs);
console.log('[setIn] Object immutability-helper.js (repeats / ms):');
test(objectSetInImmutabilityHelperJs);
console.log('[setIn] Object immutable-assign.js (repeats / ms):');
test(objectSetInImmutablyAssignJs);

console.log('[setIn] Array Native (repeats / ms):');
test(arraySetInNative);
console.log('[setIn] Array Seamless-immutable.js (repeats / ms):');
test(arraySetInSeamlessImmutableJs);
console.log('[setIn] Array Immutable.js (repeats / ms):');
test(arraySetInImmutableJs);
console.log('[setIn] Array Mori.js (repeats / ms):');
test(arraySetInMoriJs);
console.log('[setIn] Array react-addons-update.js (repeats / ms):');
test(arraySetInReactAddonsUpdateJs);
console.log('[setIn] Array immutability-helper.js (repeats / ms):');
test(arraySetInImmutabilityHelperJs);
console.log('[setIn] Array immutable-assign.js (repeats / ms):');
test(arraySetInImmutablyAssignJs);
