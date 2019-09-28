
"use strict";

MYAPP.Forms = { name: '' };


/*
 검색조건: jquery form filed object

 http://stackoverflow.com/questions/5603117/jquery-create-object-from-form-fields

 사용법:  var obj = MYAPP.serializeJSON( $(form).serializeArray() );
 */
MYAPP.serializeJSON = function (arr) {
    //var arr = $(form).serializeArray(),
    var obj = {};

    for(var i = 0; i < arr.length; i++) {
        if(obj[arr[i].name] === undefined) {
            obj[arr[i].name] = arr[i].value;
        } else {
            if(!(obj[arr[i].name] instanceof Array)) {
                obj[arr[i].name] = [obj[arr[i].name]];
            }
            obj[arr[i].name].push(arr[i].value);
        }
    }
    return obj;
};