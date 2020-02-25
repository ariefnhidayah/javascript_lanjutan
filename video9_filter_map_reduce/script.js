// HIGHER ORDER FUNCTION
// alasan kenapa membuat higher order function :
// Abstraksi / Untuk membuat kodenya menjadi sederhana

// Contoh higer order function yang sering digunakan :
// filter
// map
// reduce

// contoh penggunaan 3 higher order function diatas
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// filter : mencari angka yang lebih besar = 3
const new_angka_filter = angka.filter((e) => e >= 3);
// console.log(new_angka_filter);


// map : kalikan semua angka dengan 2
const new_angka_map = angka.map((e) => e * 2);
// console.log(new_angka_map);

// reduce : untuk melakukan suatu terhadap seluruh elemen array
// contoh menjumlahkan seluruh elemen pada array
// prototype.reduce(function, nilai_awal = defaultnya 0);
const new_angka_reduce = angka.reduce((accumulator, current_value) => {
	return accumulator + current_value;
}, 0);
// console.log(new_angka_reduce);

// method chaining = menggabungkan fungsi2 higher order
// contoh cari angka > 5
// kalikan 3
// jumlahkan
const new_angka_chaining = angka.filter((e) => e > 5)
								.map((e) => e * 3)
								.reduce((e, a) => e + a);
console.log(new_angka_chaining);