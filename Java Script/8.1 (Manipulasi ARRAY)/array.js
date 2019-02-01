// Manipulasi Array

//1. Menambah isi array
//var arr = [];
//arr[0] = "Indra";
//arr[1] = "wahyudi";
//arr[2] = "iwa";
//arr[6] = "radi";

//console.log(arr);

//2. Menghapus isi array
// var arr = ["Indra","wahyudi","iwa"];
// arr[1] = undefined;
// console.log(arr);

//3. Menampilkan isi array
// var arr = ["Indra","wahyudi","iwa","radi"];

// for( var i = 0; i < 3; i++){
// 	console.log('Mahasiswa ke-' + i + ' : ' + arr[i]);
// } 
	
// Methode pada array
var arr = ['Indra','wahyudi','iwa'];
// 1.join
// console.log(arr.join(' - '));

//2. push & pop
// arr.push('Hani','Rianti');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
//arr.ushift('Indra');
arr.shift();
console.log(arr.join(' - '));