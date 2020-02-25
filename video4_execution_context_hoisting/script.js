// KONSEP JAVASCRIPT

// EXECUTION CONTEXT (2 Fase) = Saat program dijalankan
// 1. Creation
// createion phase pada global context
// variabel = contoh (var nama = undefined)
// function = contoh (nama function = fn())
// window = global object
// this = window 


// 2. Execution
// execution phase adalah mengeksekusi dari baris pertama

// var nama = `Arief`;
// var umur = 18;
// console.log(test());

// function test() {
// 	console.log(`Hallo, nama saya ${nama}, saya ${umur} tahun.`);
// }

// function membuat local execution context
// didalamnya terdapat creation dan execution phase
// var nama = 'Arief';
// var username = 'ariefnhidayah';

// function cetakURL() {
// 	console.log(arguments[1]);
// 	var instagramURL = 'http://instagram.com/';
// 	return instagramURL + username;
// }

// console.log(cetakURL('username', 'arief'));

