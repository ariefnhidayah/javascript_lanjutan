// cara membuat object

// 1. Object Literal
// let mahasiswa1 = {
// 	nama: 'Arief Nur Hidayah',
// 	energi: 10,
// 	makan: function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Selamat makan ${this.nama}, selamat makan`);
// 	}
// }

// let mahasiswa2 = {
// 	nama: 'Hidayah',
// 	energi: 20,
// 	makan: function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Selamat makan ${this.nama}, selamat makan`);
// 	}
// }



// 2. Function Declaration
// function Mahasiswa(nama, energi) {
// 	let mahasiswa = {};
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	mahasiswa.makan = function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	}

// 	mahasiswa.main = function(jam) {
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, selamat bermain!`);
// 	}

// 	return mahasiswa;
// }

// let arief = Mahasiswa('Arief', 10);
// let hidayah = Mahasiswa('Hidayah', 20);



// 3. Construction Function (Menggunakan keyword new)
// function Mahasiswa(nama, energi) {
// 	this.nama = nama;
// 	this.energi = energi;

// 	this.makan = function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	}

// 	this.main = function(jam) {
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, selamat bermain!`);
// 	}
// }

// let arief = new Mahasiswa('Arief', 10);
// let hidayah = new Mahasiswa('Hidayah', 20);