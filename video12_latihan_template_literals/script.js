// 1. HTML Fragments
// const mhs = {
// 	nama: 'Arief',
// 	umur: 18,
// 	nim: '41518010106',
// 	email: 'ariefnh14@gmail.com'
// };

// const elm = `<div class="mhs">
// 	<h2>${mhs.nama}</h2>
// 	<span class="nim">${mhs.nim}</span>
// </div>`;

// 2. Looping
// const mhs = [
// 	{
// 		nama: 'Arief',
// 		jurusan: 'Informatika'
// 	},
// 	{
// 		nama: 'Nur',
// 		jurusan: 'Informatika'
// 	},
// 	{
// 		nama: 'Hidayah',
// 		jurusan: 'Informatika'
// 	}
// ];

// const elm = `<div class="mhs">
// 	${mhs.map((m) => `<ul>
// 		<li>${m.nama}</li>
// 		<li>${m.jurusan}</li>
// 	</ul>`).join('')}
// </div>`;


// 3. Conditional
// ternary
// const lagu = {
// 	judul: 'Anjay',
// 	penyanyi: 'Not Found'
// };

// const elm = `<div class="lagu">
// 	<ul>
// 		<li>${lagu.penyanyi}</li>
// 		<li>${lagu.judul} ${lagu.feat ? `(feat . ${lagu.feat})` : ``}</li>
// 	</ul>
// </div>`;

// 4. Nested
const mhs = {
	nama: 'arief',
	jurusan: 'Informatika',
	mata_kuliah: ['Rekayasa Perangkat Lunak', 'Sistem Basis Data', 'Aplikasi Berbasis Rapid']
};

const elm = `<div class="mhs">
	<h2>${mhs.nama}</h2>
	<span class="jurusan">${mhs.jurusan}</span>
	<h4>Mata Kuliah</h4>
	<ol>
		${mhs.mata_kuliah.map((mk) => {
			return `<li>${mk}</li>`
		}).join('')}
	</ol>
</div>`;

document.body.innerHTML = elm;