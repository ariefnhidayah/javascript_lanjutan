// Latihan Filter, Map, Reduce 

// Flow
// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('ul li[data-duration]'));

// pilih hanya javascript lanjutan &
// ambil durasi masing2 video &
// ubah durasi menjadi float, ubah menit menjadi detik & 
// jumlahkan semua detik
let javascriptLanjutan = videos.filter(video => video.textContent.includes('javascript lanjutan'))
	.map(item => item.dataset.duration)
	.map(time => {
		const parts = time.split(':').map(part => parseFloat(part));
		return (parts[0] * 60) + parts[1];
	})
	.reduce((total, second) => total + second);

// ubah menjadi jam menit detik
const jam = Math.floor(javascriptLanjutan / 3600);
javascriptLanjutan -= jam * 3600;

const menit = Math.floor(javascriptLanjutan / 60);
const detik = javascriptLanjutan - menit * 60;

// simpan di DOM
const elm_durasi = document.querySelector('.total-durasi');
elm_durasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jml_video = videos.filter(video => video.textContent.includes('javascript lanjutan')).length;
const elm_video = document.querySelector('.jumlah-video');
elm_video.textContent = `${jml_video} Video`;