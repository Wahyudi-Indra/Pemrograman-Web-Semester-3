// Membuat Object
// Object Literal
var siswa1 = {
	nama : 'Indra Wahyudi',
	nrp : '098765432123',
	email : 'indrawahyudi@gmail.com',
	jurusan : 'Rekayasa Perangkat Lunak'
}

var siswa2 = {
	nama : 'Hani Rianti',
	nrp : '098765432123',
	email : 'hanirianti@gmail.com',
	jurusan : 'Rekayasa Perangkat Lunak'
}

// function Declaration
function buatObjectSiswa(nama, nrp, email, jurusan) {
	var siswa = {};
	siswa.nama = nama;
	siswa.nrp = nrp;
	siswa.email = email;
	siswa.jurusan = jurusan;
	return siswa;
}

var siswa3 = buatObjectSiswa('Keyla Zahra', '0949258791', 'keyla@gmail.com', 'tata boga')


// Construktor
function SiswaSMK(nama, nrp, email, jurusan) {
	// var this = {};
	this.nama = nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan;
	// return this;
}

var siswa4 = new SiswaSMK('Zahra','06538971938', 'zahra@gmail.com', 'arsitektur bangunan');