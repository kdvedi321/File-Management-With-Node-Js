function memchecker(obj){
    obj.newProp="this property was updated by obj but the reference was"
    obj = {newProp:"this property was updated by obj but the reference was"}
}
let myobj={name: "myobj"};
memchecker(myobj);
console.log(myobj);