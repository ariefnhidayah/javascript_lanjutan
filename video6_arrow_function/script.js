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
let mahasiswa = ['Arief', 'Nur', 'Hidayah'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
// 	return nama.length;
// });

// let jumlahHuruf = mahasiswa.map( nama => nama.length );
// let jumlahHuruf = mahasiswa.map( (nama) => {
// 	return nama.length;
// } );

let jumlahHuruf = mahasiswa.map( (nama) => ({
	nama,
	jmlHuruf: nama.length
}) )

console.table(jumlahHuruf);