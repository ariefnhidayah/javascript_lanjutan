// cara membuat object

// 1. Object Literal
// PROBLEM : TIDAK EFEKTIF UNTUK OBJECT YANG BANYAK
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