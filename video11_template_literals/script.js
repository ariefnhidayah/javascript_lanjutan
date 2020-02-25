// Template literals adalah string literal yang memungkinkan adanya expression didalamnya
// template literal menggunakan (``)


// const name = 'Arief';
// const age = 18;
// console.log(`Halo nama saya ${name}, umur saya ${age} tahun`);

// embedded expression
// console.log(`${1 + 1}`);
// console.log(`${alert('ok')}`);

// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// html fragments
const mhs = {
	nama: 'Arief',
	umur: 18,
	nim: '41518010106',
	email: 'ariefnh14@gmail.com'
};

const elm = `<div class="mhs">
	<h2>${mhs.nama}</h2>
	<span class="nrp">${mhs.nim}</span>
	<span class="age">${mhs.umur}</span>
</div>`;
console.log(elm);