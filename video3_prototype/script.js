// PROTOTYPE

// Object Function Declaration
// PROBLEM : MELAKUKAN DUPLIKASI YANG MEMBUAT BANYAK RESOURCE / CARA NGAKALINNYA MEMBUAT OBJECT BARU UNTUK METHOD
// const methodMahasiswa = {
// 	makan: function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	},
// 	main: function(jam) {
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, selamat bermain!`);
// 	},
// 	tidur: function(jam) {
// 		this.energi += (jam * 2);
// 		console.log(`Halo ${this.nama}, selamat tidur!`);	
// 	}
// }

// function Mahasiswa(nama, energi) {
// 	// Object.create(parentObject);
// 	let mahasiswa = Object.create(methodMahasiswa);
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	return mahasiswa;
// }

// let arief = Mahasiswa('Arief', 10);
// let hidayah = Mahasiswa('Hidayah', 20);

// ubah menjadi constructor function
// versi object dengan prototype
// function Mahasiswa(nama, energi) {
// 	this.nama = nama;
// 	this.energi = energi;
// };

// Mahasiswa.prototype.makan = function (porsi) {
// 	this.energi += porsi;
// 	return `Halo ${this.nama}, selamat makan!`;
// };

// Mahasiswa.prototype.main = function(jam) {
// 	this.energi -= jam;
// 	return `Halo ${this.nama}, selamat bermain!`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
// 	this.energi += (jam * 2);
// 	return `Halo ${this.nama}, selamat tidur!`;
// }

// let arief = new Mahasiswa('arief', 20);


// versi class
// class Mahasiswa {
// 	constructor(nama, energi) {
// 		this.nama = nama;
// 		this.energi = energi;
// 	}

// 	umur = 18;

// 	makan(porsi) {
// 		this.energi += porsi;
// 		return `Halo ${this.nama}, selamat makan!`;
// 	}

// 	main(jam) {
// 		this.energi -= jam;
// 		return `Halo ${this.nama}, selamat bermain!`;
// 	}

// 	tidur(jam) {
// 		this.energi += (jam * 2);
// 		return `Halo ${this.nama}, selamat tidur!`;
// 	}
// }

// let arief = new Mahasiswa('Arief', 10);

let angka = [2,1,3];
console.log(angka);