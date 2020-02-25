// 1. HTML Fragments
const mhs1 = {
	nama: 'Arief',
	umur: 18,
	nim: '41518010106',
	email: 'ariefnh14@gmail.com'
};

const elm1 = `<div class="mhs">
	<h2>${mhs1.nama}</h2>
	<span class="nim">${mhs1.nim}</span>
</div>`;

// 2. Looping
const mhs2 = [
	{
		nama: 'Arief',
		jurusan: 'Informatika'
	},
	{
		nama: 'Nur',
		jurusan: 'Informatika'
	},
	{
		nama: 'Hidayah',
		jurusan: 'Informatika'
	}
];

const elm2 = `<div class="mhs">
	${mhs2.map((m) => `<ul>
		<li>${m.nama}</li>
		<li>${m.jurusan}</li>
	</ul>`).join('')}
</div>`;


// 3. Conditional
// ternary
const lagu = {
	judul: 'Anjay',
	penyanyi: 'Not Found'
};

const elm3 = `<div class="lagu">
	<ul>
		<li>${lagu.penyanyi}</li>
		<li>${lagu.judul} ${lagu.feat ? `(feat . ${lagu.feat})` : ``}</li>
	</ul>
</div>`;

// 4. Nested
const mhs3 = {
	nama: 'arief',
	jurusan: 'Informatika',
	mata_kuliah: ['Rekayasa Perangkat Lunak', 'Sistem Basis Data', 'Aplikasi Berbasis Rapid']
};

const elm4 = `<div class="mhs">
	<h2>${mhs3.nama}</h2>
	<span class="jurusan">${mhs3.jurusan}</span>
	<h4>Mata Kuliah</h4>
	<ol>
		${mhs3.mata_kuliah.map((mk) => {
			return `<li>${mk}</li>`
		}).join('')}
	</ol>
</div>`;

console.log(elm1);
console.log(elm2);
console.log(elm3);
console.log(elm4);