// arrow function = bentuk lain yang lebih ringkas dari function expression
// contoh : 
// let tampilPesan = (nama) => {
// 	console.log(`Halo ${nama}`);
// }

// tampilPesan('Arief');

// const tampilNama = function(nama) {
// 	return `Halo, ${nama}`;
// }

// console.log(tampilNama('Arief'));

// const tampilNama = (nama) => { return `Halo, ${nama}`; }
// console.log(tampilNama('arief'));

// const tampilNama = (nama, waktu) => {
// 	return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('arief', 'sore'));

// implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('arief'));

// const tampilNama = () => 'Hello world!';
// console.log(tampilNama());

// contoh lain
// let mahasiswa = ['Arief', 'Nur', 'Hidayah'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
// 	return nama.length;
// });

// let jumlahHuruf = mahasiswa.map( nama => nama.length );
// let jumlahHuruf = mahasiswa.map( (nama) => {
// 	return nama.length;
// } );

// let jumlahHuruf = mahasiswa.map( (nama) => ({
// 	nama,
// 	jmlHuruf: nama.length
// }) )

// console.table(jumlahHuruf);




// THIS pada arrow function
// const Mahasiswa = function() {
// 	this.nama = 'Arief';
// 	this.umur = 18;
// 	this.hello = function() {
// 		console.log(`Hallo nama saya ${this.nama}, saya ${this.umur}`);
// 	}
// }

// const arief = new Mahasiswa();

// arrow function (THIS)
// const Mahasiswa = function() {
// 	this.nama = 'Arief';
// 	this.umur = 18;
// 	this.hello = function() {
// 		console.log(`Hallo nama saya ${this.nama}, saya ${this.umur}`);
// 	}
// }

// const arief = new Mahasiswa();

// object literal
// const mhs1 = {
// 	nama: 'Arief',
// 	umur: 18,
// 	hello: () => {
// 		// console.log(`Hallo nama saya ${this.nama}, saya ${this.umur}`);
// 		console.log(this);
// 	}
// }

// const Mahasiswa = function() {
// 	this.nama = 'Arief';
// 	this.umur = 18;
// 	this.hello = () => {
// 		console.log(`Hallo nama saya ${this.nama}, saya ${this.umur}`);
// 	}

// 	// setInterval(() => {
// 	// 	console.log(this.umur++);
// 	// }, 500);

// }

// const arief = new Mahasiswa();



// CATATAN = ARROW FUNCTION TIDAK MEMPUNYAI THIS



// contoh studi kasus
const box = document.querySelector('.box');

box.addEventListener('click', function() {

	let satu = 'size';
	let dua = 'caption';

	if(this.classList.contains(satu)) {
		[satu, dua] = [dua, satu];
	}

	this.classList.toggle(satu);
	setTimeout(() => {
		this.classList.toggle(dua);
		// console.log(this);
	}, 600)
});