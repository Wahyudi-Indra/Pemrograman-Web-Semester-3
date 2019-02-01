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

// 1.join
// console.log(arr.join(' - '));

//2. push & pop
// arr.push('Hani','Rianti');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
//arr.ushift('Indra');
// arr.shift();
// console.log(arr.join(' - '));


// 4. Splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemen Baru2, ...)
// arr.splice(2, 0, 'Hani', 'Rianti');
// console.log(arr.join(' - '));

//5. slice
// slice(awal,akhir);
// var arr = ['Indra','wahyudi','iwa', 'Hani','Rianti'];
// var arr2 = arr.slice(1,4);
// console.log(arr.join('-'));
// console.log(arr2.join('-'));

//6. forEach
// var angka =[1,2,3,4,5,6,7,8];
// var arr = ['Indra','wahyudi','iwa', 'Hani','Rianti'];
//for(var i = 0; i < angka.lenght; i++){
//	console.log(angka[i]);	
//}

// angka.forEach(function(e){
// 	console.log(e);
// });

// nama.forEach(function(e, i){
// 	console.log('Mahasiswa ke-' + (i+1) + 'adalah : ' + e);
// })

//7. map
// var angka=[1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e){
// 	return e * 2;
// });
// console.log(angka2.join('-'));

// 8. sort
// var angka=[1,2,10,5,20,3,6,8,4];
// angka.sort(function(a,b) {
// 	return a-b;
// });
// console.log(angka.join('-'));

//9. filter & find
var angka=[1,2,10,5,20,3,6,8,4];
var angka2 = angka.find(function(x){
	return x > 5;
});
console.log(angka2);