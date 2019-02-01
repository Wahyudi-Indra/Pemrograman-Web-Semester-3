// this
// var a = 10;
// console.log(window.a);


// membuat object

// cara 1 - function declaration
// function halo() {
// 	console.log(this);
// 	console.log('halo');
// }
// window.halo();






// cara 2 - object literal
// var obj = {a : 22, nama :'Indra'};
// obj.halo = function() {
// 	console.log(this);
// 	console.log('halo');
// }
// obj.halo();






// cara 3 - constructor
function Halo() {
	console.log(this);
	console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();

// this mengembalikan object yang bersangkutan