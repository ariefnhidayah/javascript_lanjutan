// CLOSURE = merupakan kombinasi antara functon dan lexical scope didalam function tersebut (definisi dr MDN)

// CLOSURE = sebuah function ketika memiliki akses ke parent scope-nya meskipun parent scope-nya sudah selesai dieksekusi (definisi dari w3school)

// CLOSURE = sebuah function yang dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan (definisi code fellow)

// function init() {
// 	// let nama = 'Arief';
// 	return function (nama) {
// 		console.log(nama);
// 	}
// }
// let panggilNama = init();
// panggilNama('Arief');
// panggilNama('Hidayah');

// contoh penggunaan closure untuk membuat function factories
// function ucapkanSalam(waktu) {
// 	return function (nama) {
// 		console.log(`Halo ${nama}, selamat ${waktu}`);
// 	}
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatPagi('Arief');
// selamatSiang('Hidayah');

// contoh closure untuk membuat private method
// imidietly inbox function
let add = (function() {
	let counter = 0;
	return function() {
		return ++counter;
	}
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());