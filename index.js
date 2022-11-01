//function receivesAFunction(cb){
//    cb();
//}
const receivesAFunction = cb => cb();

//function returnsANamedFunction(){
//    return function something(name){
//        console.log('');
//    };
//   };
const returnsANamedFunction =() => function something(name){
console.log('ahh');
}


//function returnsAnAnonymousFunction(){
//    return function () {
//        console.log(`I dont know what I am doing`);
//}
//}

const returnsAnAnonymousFunction = () => function(){console.log('somethin')};