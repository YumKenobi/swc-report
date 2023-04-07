/**
* 
*
* @ version 1.0.0
* @ author Marvic R. Macalintal
*/
 var cities = {
	'Johor'  : [
		'Ayer Baloi','Ayer Hitam','Ayer Tawar 2','Bandar Penawar','Bandar Tenggara','Batu Anam',
		'Batu Pahat','Bekok','Benut','Bukit Gambir','Bukit Pasir','Chaah',
		'Endau','Gelang Patah','Gerisek','Gugusan Taib Andak','Jementah','Johor Bahru',
		'Kahang','Kluang','Kota Tinggi','Kukup','Kulai','Labis',
		'Layang-Layang','Masai','Mersing', 'Muar', 'Nusajaya', 'Pagoh', 'Paloh',
		'Panchor', 'Parit Jawa', 'Parit Raja', 'Parit Sulong', 'Pasir Gudang',
		'Pekan Nenas', 'Pengerang', 'Pontian', 'Pulau Satu', 'Rengam',
		'Rengit', 'Segamat', 'Semerah', 'Senai', 'Senggarang', 'Seri Gading',
		'Seri Medan', 'Simpang Rengam', 'Sungai Mati', 'Tangkak', 'Ulu Tiram',
		'Yong Peng'
		],

	'Kedah' : ["Alor Setar", "Ayer Hitam", "Baling", "Bandar Baharu", "Bedong", 
		"Bukit Kayu Hitam", "Changloon", "Gurun", "Jeniang", "Jitra", "Karangan", 
		"Kepala Batas", "Kodiang", "Kota Kuala Muda", "Kota Sarang Semut", "Kuala Kedah", 
		"Kuala Ketil", "Kuala Nerang", "Kuala Pegang", "Kulim", "Kupang", "Langgar", 
		"Langkawi", "Lunas", "Lunas", "Merbok", "Padang Serai", "Pendang", "Pokok Sena", 
		"Serdang", "Sik", "Simpang Empat", "Sungai Petani", "Universiti Utara Malaysia", "Yan"],

	'Kelantan' : ["Ayer Lanas", "Bachok", "Cherang Ruku", "Dabong", "Gua Musang", "Jeli", 
		"Kem Desa Pahlawan", "Ketereh", "Kota Bharu", "Kuala Balah", "Kuala Krai", 
		"Machang", "Melor", "Pasir Mas", "Pasir Puteh", "Pulai Chondong", "Rantau Panjang", 
		"Selising", "Tanah Merah", "Temangan", "Tumpat", "Wakaf Bharu"],

	'Kuala Lumpur' : ["Ampang", "Cheras", "Sentul"],

	'Melaka' : ["Alor Gajah", "Asahan", "Ayer Keroh", "Bemban", "Durian Tunggal", 
		"Jasin", "Kem Trendak", "Kuala Sungai Baru", "Lubok China", "Masjid Tanah", 
		"Merlimau", "Selandar", "Sungai Rambai", "Sungai Udang", "Tanjong Kling"],

	'Negeri Sembilan' : ["Bahau", "Bandar Enstek", "Bandar Seri Jempol", "Batu Kikir", 
		"Gemas", "Gemencheh", "Johol", "Kota", "Kuala Klawang", "Kuala Pilah", "Labu", "Linggi", "Mantin", 
		"Niai", "Nilai", "Nilai", "Port Dickson", "Pusat Bandar Palong", "Rantau", 
		"Rembau", "Rompin", "Seremban", "Seremban", "Si Rusa", "Simpang Durian", "Simpang Pertang", 
		"Tampin", "Tanjong Ipoh"],

	'Pahang' : ["Balok", "Bandar Bera", "Bandar Pusat Jengka", "Bandar Pusat Jengka", "Bandar Tun Abdul Razak", 
		"Benta", "Bentong", "Brinchang", "Bukit Fraser", "Bukit Goh", "Bukit Kuin", "Chenor", "Chini", "Damak", 
		"Dong", "Gambang", "Genting Highlands", "Jerantut", "Karak", "Kemayan", "Kuala Krau", "Kuala Lipis", 
		"Kuala Rompin", "Kuantan", "Kuantan", "Lanchang", "Lurah Bilut", "Maran", "Mentakab", "Muadzam Shah", 
		"Padang Tengku", "Pekan", "Raub", "Ringlet", "Sega", "Sungai Koyan", "Sungai Lembing", "Tanah Rata", 
		"Temerloh", "Temerloh", "Triang"],

	'Perak' : ["Ayer Tawar", "Bagan Datoh", "Bagan Serai", "Bandar Seri Iskandar", "Batu Gajah", "Batu Kurau", 
		"Behrang Stesen", "Bidor", "Bota", "Bruas", "Changkat Jering", "Changkat Keruing", "Chemor", 
		"Chenderiang", "Chenderong Balai", "Chikus", "Enggor", "Gerik", "Gopeng", "Hutan Melintang",
		"Intan", "Ipoh", "Jeram", "Kampar", "Kampung Gajah", "Kampung Kepayang", "Kamunting", "Kuala Kangsar", 
		"Kuala Kurau", "Kuala Sepetang", "Lambor Kanan", "Langkap", "Lenggong", "Lumut", "Malim Nawar", 
		"Manong", "Matang", "Padang Rengas", "Pangkor", "Pantai Remis", "Parit", "Parit Buntar", "Pengkalan Hulu", 
		"Pusing", "Rantau Panjang", "Sauk", "Selama", "Selekoh", "Seri Manjong", "Seri Manjung", 
		"Simpang", "Simpang Ampat Semanggol", "Sitiawan", "Slim River", "Sungai Siput", "Sungai Sumun", 
		"Sungkai", "Taiping", "Tanjong Malim", "Tanjong Piandang", "Tanjong Rambutan", "Tanjong Tualang", 
		"Tapah", "Tapah Road", "Teluk Intan", "Temoh", "TLDM Lumut", "Trolak", "Trong", "Tronoh", 
		"Ulu Bernam", "Ulu Kinta"],

	'Perlis' : ["Arau", "Kaki Bukit", "Kangar", "Kuala Perlis", "Padang Besar", "Simpang Ampat"],

	'Pulau Pinang' : ["Ayer Itam", "Balik Pulau", "Batu Ferringhi", "Batu Maung", "Bayan Lepas", 
		"Bukit Mertajam", "Butterworth", "Gelugor", "Jelutong", "Kepala Batas", "Kubang Semang", 
		"Nibong Tebal", "Penaga", "Penang Hill", "Perai", "Permatang Pauh",  
		"Simpang Ampat", "Sungai Jawi", "Tanjong Bungah", "Tanjung Bungah", "Tasek Gelugor", 
		"Tasek Gelugur", "USM Pulau Pinang"],

	'Sabah' : ["Beaufort", "Beluran", "Beverly", "Bongawan", "Inanam", "Keningau", 
		"Kota Belud", "Kota Kinabalu", "Kota Kinabatangan", "Kota Marudu", "Kuala Penyu", 
		"Kudat", "Kunak", "Lahad Datu", "Likas", "Membakut", "Menumbok", "Nabawan", "Pamol", 
		"Papar", "Penampang", "Putatan", "Ranau", "Sandakan", "Semporna", "Sipitang", "Tambunan", 
		"Tamparuli", "Tanjung Aru", "Tawau", "Tenghilan", "Tenom", "Tuaran"],

	'Sarawak' : ["Asajaya", "Balingian", "Baram", "Bau", "Bekenu", "Belaga", "Belaga", "Belawai", 
		"Betong", "Bintangor", "Bintulu", "Dalat", "Daro", "Debak", "Engkilili", "Julau", "Kabong", 
		"Kanowit", "Kapit", "Kota Samarahan", "Kuching", "Lawas", "Limbang", "Lingga", "Long Lama", 
		"Lubok Antu", "Lundu", "Lutong", "Matu", "Miri", "Mukah", "Nanga Medamit", "Niah", "Pusa", 
		"Roban", "Saratok", "Sarikei", "Sebauh", "Sebuyau", "Serian", "Sibu", "Siburan", "Simunjan", 
		"Song", "Spaoh", "Sri Aman", "Sundar", "Tatau"],
	
	'Selangor' : ["Ampang", "Bandar Baru Bangi", "Bandar Puncak Alam", "Banting", "Batang Kali", 
		"Batu Arang", "Batu Caves", "Beranang", "Bestari Jaya", "Bukit Rotan", "Cheras", "Cyberjaya", 
		"Dengkil", "Hulu Langat", "Jenjarom", "Jeram", "Kajang", "Kajang", "Kapar", "Kerling", "Klang", 
		"KLIA", "Kuala Kubu Baru", "Kuala Selangor", "Kuang", "Pelabuhan Klang", "Petaling Jaya", 
		"Puchong", "Pulau Carey", "Pulau Indah", "Pulau Ketam", "Rasa", "Rawang", "Sabak Bernam", 
		"Sekinchan", "Semenyih", "Sepang", "Serdang", "Serendah", "Seri Kembangan", "Shah Alam", 
		"Shah Alam", "Subang Jaya", "Sungai Ayer Tawar", "Sungai Besar", "Sungai Buloh", "Sungai Pelek", 
		"Tanjong Karang", "Tanjong Sepat", "Tanjung Sepat", "Telok Panglima Garang"],

	'Terengganu' : ["Ajil", "Al Muktatfi Billah Shah", "Ayer Puteh", "Bukit Besi", 
		"Bukit Payong", "Ceneh", "Chalok", "Cukai", "Dungun", "Jerteh", "Kampung Raja", 	
		"Kemasek", "Kerteh", "Ketengah Jaya", "Kijal", "Kuala Berang", "Kuala Besut", 
		"Kuala Terengganu", "Marang", "Paka", "Permaisuri", "Sungai Tong"],	
		
 }

 var City = function() {

	this.p = [],this.c = [],this.a = [],this.e = {};
	window.onerror = function() { return true; }
	
	this.getProvinces = function() {
		for(let province in cities) {
			this.p.push(province);
		}
		return this.p;
	}
	this.getCities = function(province) {
		if(province.length==0) {
			console.error('Please input province name');
			return;
		}
		for(let i=0;i<=cities[province].length-1;i++) {
			this.c.push(cities[province][i]);
		}
		return this.c;
	}
	this.getAllCities = function() {
		for(let i in cities) {
			for(let j=0;j<=cities[i].length-1;j++) {
				this.a.push(cities[i][j]);
			}
		}
		this.a.sort();
		return this.a;
	}
	this.showProvinces = function(element) {
		var str = '<option selected disabled>Select Province</option>';
		for(let i in this.getProvinces()) {
			str+='<option>'+this.p[i]+'</option>';
		}
		this.p = [];		
		document.querySelector(element).innerHTML = '';
		document.querySelector(element).innerHTML = str;
		this.e = element;
		return this;
	}
	this.showCities = function(province,element) {
		var str = '<option selected disabled>Select City / Municipality</option>';
		var elem = '';
		if((province.indexOf(".")!==-1 || province.indexOf("#")!==-1)) {
			elem = province;
		}
		else {
			for(let i in this.getCities(province)) {
				str+='<option>'+this.c[i]+'</option>';
			}
			elem = element;
		}
		this.c = [];
		document.querySelector(elem).innerHTML = '';
		document.querySelector(elem).innerHTML = str;
		document.querySelector(this.e).onchange = function() {		
			var Obj = new City();
			Obj.showCities(this.value,elem);
		}
		return this;
	}
}
