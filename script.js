const truthTasks = [
    "Apa ketakutan terbesar yang kamu miliki?",
    "Pernahkah kamu berbohong kepada orang tua?",
    "Apa rahasia terbesar yang belum pernah kamu ceritakan kepada siapa pun?",
    "Siapa orang yang diam-diam kamu sukai?",
    "Apa kebiasaan aneh yang kamu miliki?",
    "Pernahkah kamu mencuri sesuatu?",
    "Siapa teman yang paling kamu percaya?",
    "Apa rahasia terbesar yang pernah kamu simpan?",
    "Siapa orang yang kamu sukai saat ini?",
    "Apa hal paling aneh yang pernah kamu lakukan secara diam-diam?",
    "Apa hal paling memalukan yang pernah kamu alami?",
    "Apa satu hal di masa lalu yang ingin kamu ubah jika bisa?",
    "Pernahkah kamu curang dalam suatu situasi? Ceritakan.",
    "Apa satu hal di dalam daftar kerja sama impianmu?",
    "Apa hobi rahasia yang tidak banyak orang tahu?",
    "Apa mimpi teraneh yang pernah kamu alami?",
    "Jelaskan pengalaman pertamamu dalam hal asmara.",
    "Apa satu hal di dirimu yang ingin kamu tingkatkan?",
    "Pernahkah kamu dite caught camera melakukan sesuatu yang lucu?",
    "Apa sesuatu yang paling kamu takuti?",
    "Ceritakan tentang momen paling konyol dalam hidupmu.",
    "Apa peristiwa yang membuatmu menangis secara diam-diam?",
    "Apa satu hal yang ingin kamu capai dalam hidup dalam 5 tahun ke depan?",
    "Pernahkah kamu terlibat dalam suatu aksi kriminal kecil? Ceritakan.",
    "Jika kamu bisa bertukar tempat dengan seseorang selama sehari, siapa yang akan kamu pilih dan mengapa?",
    "Apa hal paling menyenangkan yang pernah kamu lakukan tanpa mengeluarkan uang?",
    "Jika kamu hanya boleh memilih satu makanan untuk dimakan selama sisa hidupmu, apa yang akan kamu pilih?",
    "Ceritakan tentang pengalaman paling menegangkan yang pernah kamu alami.",
    "Pernahkah kamu menolak seseorang yang menyatakan perasaan pada kamu? Bagaimana kamu merasa?",
    "Apa satu hal yang ingin kamu pelajari atau kuasai di masa depan?",
    "Jika kamu bisa mengubah satu keputusan di masa lalu, apa yang akan kamu ubah?",
    "Pernahkah kamu memberikan hadiah yang kamu anggap istimewa pada seseorang, namun mereka tidak menghargainya?",
    "Pernahkah kamu memalsukan sakit hanya untuk menghindari sesuatu? Ceritakan.",
    "Apa satu hal yang ingin kamu ceritakan kepada temanmu, tapi belum pernah kamu katakan?",
    "Jika kamu memiliki kesempatan untuk bertemu dengan tokoh terkenal, siapa yang ingin kamu temui dan mengapa?",
    "Ceritakan tentang momen paling lucu yang pernah kamu alami.",
    "Jika kamu bisa memiliki keahlian super, apa yang ingin kamu miliki?",
    "Pernahkah kamu memberi saran palsu kepada seseorang? Mengapa?",
    "Jika kamu bisa tinggal di tempat apa pun di dunia selama sebulan, di mana kamu akan pergi?",
    "Apa satu hal di dalam hidupmu yang kamu sesali?",
    "Ceritakan tentang pertemanan atau hubungan yang paling berarti bagi kamu.",
    "Pernahkah kamu terlibat dalam kejadian yang membuatmu sangat ketakutan? Ceritakan.",
    "Apa satu hal aneh yang kamu yakini saat kecil, tetapi sekarang kamu tahu itu salah?",
    "Pernahkah kamu jatuh cinta pada teman dekatmu? Ceritakan.",
    "Jika kamu bisa menghabiskan sehari dengan siapa pun di dunia, siapa yang akan kamu pilih?",
    "Apa satu hal yang ingin kamu lakukan tapi selalu takut untuk mencobanya?",
    "Ceritakan tentang pengalaman terburuk yang pernah kamu alami dalam suatu perjalanan.",
    "Jika kamu memiliki kekuatan super untuk satu hari, apa yang akan kamu lakukan?",
    "Pernahkah kamu merahasiakan sesuatu dari orang tua kamu? Apa itu?",
    "Jika kamu harus memilih satu teman untuk bertahan bersamamu di pulau terpencil, siapa yang akan kamu pilih?",
    "Apa satu hal yang ingin kamu pelajari lebih dalam?",
    "Ceritakan tentang mimpi paling aneh yang pernah kamu alami.",
    "Pernahkah kamu mendapatkan hukuman di sekolah? Apa yang kamu lakukan?",
    "Jika kamu bisa bertukar tempat dengan seseorang selama satu hari, siapa yang akan kamu pilih?",
    "Apa hal paling gila yang pernah kamu lakukan demi perhatian seseorang?",
    "Jika kamu memiliki waktu dan uang tak terbatas, apa yang akan kamu pelajari atau ikuti?",
    "Ceritakan tentang suatu mimpi atau ambisi yang ingin kamu capai dalam hidup.",
    "Pernahkah kamu memiliki pengalaman hampir mati atau sangat berbahaya? Ceritakan.",
    "Jika kamu bisa bertemu dengan siapa pun, baik yang masih hidup atau sudah meninggal, siapa yang akan kamu pilih?",
    "Apa satu hal yang ingin kamu lakukan tetapi belum pernah kamu coba karena terlalu takut?",
    "Ceritakan tentang momen paling menyenangkan yang pernah kamu alami dengan teman-temanmu.",
    "Jika kamu bisa memilih satu kemampuan supernatural, apakah itu akan menjadi kekuatan super atau kemampuan sihir? Mengapa?",
    "Pernahkah kamu mendapatkan hadiah yang paling tidak kamu sukai? Apa itu?",
    "Jika kamu harus memilih satu makanan untuk dimakan setiap hari, apa yang akan kamu pilih?",
    "Ceritakan tentang satu kesalahan besar yang pernah kamu lakukan dan bagaimana kamu belajar dari itu.",
    "Jika kamu bisa mengubah satu hal dalam dunia ini, apa yang akan kamu ubah?",
    "Apa hal paling aneh yang pernah kamu lihat di internet?",
    "Acara TV apa yang paling kamu benci? Beri tahu alasannya!",
    "Kapan terakhir kali kamu berbohong?",
    "Kapan terakhir kali kamu menangis?",
    "Kapan terakhir kali kamu kentut?",
    "Apa ketakutan terbesarmu?",
    "Apa fantasi terbesar atau terhanehmu?",
    "Apa hal yang membuatmu senang orang tuamu tidak mengetahuinya?",
    "Pernahkah kamu selingkuh?",
    "Apa hal terburuk yang pernah kamu lakukan?",
    "Apa rahasia yang tidak pernah kamu ceritakan kepada siapa pun?",
    "Apakah kamu punya bakat terpendam?",
    "Siapa selebriti yang pertama kali bikin kamu naksir?",
    "Apa pendapatmu tentang perselingkuhan?",
    "Apa pengalaman intim terburuk yang pernah kamu alami?",
    "Apakah kamu pernah melanggar hukum?",
    "Apa hal paling memalukan yang pernah kamu lakukan? Kapan?",
    "Apa hal yang paling membuatmu merasa insecure?",
    "Kesalahan terburuk apa yang pernah kamu lakukan?",
    "Apa hal paling menjijikkan yang pernah kamu lakukan?",
    "Siapa orang yang paling ingin kamu cium di antara kita?",
    "Hal terburuk apa yang pernah dilakukan orang terhadapmu?",
    "Apa kebiasaan terburukmu?",
    "Hal terburuk apa yang pernah kamu katakan/lakukan terhadap orang lain?",
    "Apa penyesalan terburukmu?",
    "Kalau kamu bisa jadi tidak terlihat, apa hal pertama yang akan kamu lakukan?",
    "Kenapa kamu putus dengan mantanmu?",
    "Apa rahasia yang kamu sembunyikan dari orang tuamu?",
    "Siapa orang yang diam-diam kamu sukai?",
    "Siapa orang terakhir yang kamu kepoin di media sosial?",
    "Kalau ada jin yang memberikanmu tiga permohonan, apa yang kamu inginkan?",
    "Siapa orang di antara kita yang menurutmu bisa lolos dari kiamat zombi dan siapa yang akan mati duluan? Beri tahu alasannya!",
    "Siapa orang yang paling sering kamu chat?",
    "Apa kebohongan terbesar yang pernah kamu katakan kepada orang tuamu?",
    "Apa mimpi paling aneh yang pernah kamu alami?",
    "Ceritakan detail ciuman pertamamu!",
    "Kapan terakhir kali kamu ngompol?",
    "Menurutmu, hewan apa yang terlihat paling mirip denganmu?",
    "Di antara kita, siapa orang yang paling kamu suka dalam konteks romantis?",
    "Di antara kita, siapa orang yang menurutmu paling baik dan paling buruk sifatnya?",
    "Siapa mantan terindahmu?",
    "Siapa orang yang ingin kamu jadikan istri/suami?",
    "Apa aib yang kamu sembunyikan dari kami?",
    "Berapa jumlah mantanmu?",
    "Kalau kamu punya kesempatan untuk bertukar tubuh dengan salah satu orang di antara kita, siapa yang kamu pilih?",
    "Kalau kamu punya kemampuan untuk tidak terlihat, apa hal terburuk yang akan kamu lakukan?",
    "Kalau kamu punya kesempatan balikan dengan mantan, siapa yang akan kamu pilih dan kenapa?",
    "Hal terburuk yang pernah kamu lakukan di lingkungan kerja?",
    "Nilai setiap orang yang bermain dari yang paling sampai tidak favorit.",
    "Siapa orang yang paling kamu benci di antara kita?",
    "Siapa orang yang terakhir kamu hubungi di WhatsApp?",
    "Hal apa yang membuat kamu sangat bahagia?",
    "Hal apa yang membuat kamu sangat ketakutan?",
    "Apa yang paling kamu benci dari dirimu?",
    "Apa yang kamu lakukan saat bertemu dengan orang yang membencimu?",
    "Siapa orang yang diam-diam kamu sukai?",
    "Siapa orang terakhir yang kamu stalk di media sosial?",
    "Seperti apa kriteria pasanganmu?",
    "Apakah kamu pernah selingkuh dan apa pendapatmu tentang perselingkuhan?",
    "Apakah kamu punya bakat tersembunyi?",
    "Apakah kamu pernah ngompol?",
    "Hal paling aneh apa yang pernah kamu lakukan di depan cermin?",
    "Apakah kamu pernah berbohong untuk kabur dari sebuah kencan? Kalau iya, apa kebohongannya?",
    "Apa hal yang terakhir kamu cari di ponselmu?",
    "Lebih pilih mana, pergi ke luar rumah tanpa celana dalam atau sebulan tidak keramas?",
    "Apakah kamu pernah digedor-gedor saat sedang di dalam toilet umum?",
    "Apakah kamu pernah mengupil, tapi ada orang lain yang memperhatikanmu?",
    "Apakah kamu pernah bicara sendiri di tempat umum?",
    "Apa hal dalam histori pencarianmu di internet yang membuatmu malu jika diketahui seseorang?",
    "Pernahkah kamu mencoba mengambil foto diri sendiri dengan gaya seksi?",
    "Apa lagu favoritmu saat sedang mandi?",
    "Berapa penilaianmu terhadap penampilan diri sendiri dalam skala 1 sampai 5?",
    "Saat kamu berada di toilet umum dan baru saja selesai buang air, kamu baru sadar air dan tisunya habis, apa yang akan kamu lakukan?",
    "Pernahkah kamu kentut keras di depan umum?",
    "Apa hal yang paling membuatmu merasa hidup?",
    "Apa pengalaman paling menarik yang pernah kamu alami?",
    "Jika kamu memiliki kekuatan super, kekuatan apa yang ingin kamu miliki?",
    "Apa kegiatan favoritmu saat sedang bersantai?",
    "Jika kamu bisa tinggal di tempat lain di dunia ini, di mana kamu ingin tinggal?",
    "Jika kamu bisa mengubah satu hal dalam hidupmu, apa yang akan kamu ubah?",
    "Apa lagu yang selalu bisa membuatmu bernyanyi atau menari?",
    "Apa hal yang paling kamu syukuri dalam hidupmu saat ini?",
    "Apa sesuatu yang ingin kamu ubah dalam persahabatan atau hubunganmu dengan seseorang?",
    "Apa tujuan hidupmu yang paling penting bagimu saat ini?",
    "Apa pendapatmu tentang cinta pada pandangan pertama?",
    "Apa hal yang paling ingin kamu pelajari dari temanmu?",
    "Apa hal yang paling membuatmu stres atau cemas?",
    "Apa film favoritmu sepanjang masa?",
    "Apa mimpi teraneh yang pernah kamu alami?",
    "Apa hal yang paling kamu takuti"
];

const dareTasks = [
    "Menari seperti orang gila selama 1 menit.",
    "Berbicara dengan aksen lucu selama 3 menit.",
    "Bernyanyi lagu favoritmu dengan nada yang salah.",
    "Berjalan di ruangan dengan tangan dan kaki seperti hewan.",
    "Melakukan tarian konyol tanpa musik.",
    "Coba menirukan suara hewan favoritmu.",
    "Telepon seseorang dan ceritakan tentang makanan favoritmu dengan suara aneh.",
  "Lakukan tarian lucu selama 1 menit.",
  "Kirim pesan acak kepada kontakmu yang paling terakhir dihubungi.",
  "Pergi ke luar dan nyanyikan lagu favoritmu dengan keras.",
  "Tantang dirimu untuk tidak menggunakan ponselmu selama 30 menit.",
  "Berbicaralah dengan aksen aneh selama 3 putaran.",
  "Pilih satu makanan dari dapur tanpa melihat, lalu makan tanpa mengetahui apa itu.",
  "Kirim pesan teks kepada mantanmu dengan emoji terserah pilihanmu.",
  "Bajulah temanmu dengan aksi tarian tanpa musik selama 1 menit.",
  "Pergi ke luar dan berbicara kepada orang asing dengan sapaan yang ajaib.",
  "Lakukan imitasi lucu dari tokoh terkenal.",
  "Lihat di luar jendela dan deskripsikan apa yang kamu lihat dengan detail.",
  "Kirim pesan romantis pada kontak pertamamu di daftar telepon.",
  "Lakukan panggilan telepon kepada temanmu dan tuturkan kata-kata dengan kecepatan sangat cepat.",
  "Cobalah membuat senyum di wajah orang yang ditemui di dalam waktu 5 menit.",
  "Kirim pesan teks kepada kontakmu yang paling dekat dengan hanya menggunakan emoji.",
  "Tantang dirimu untuk berbicara bahasa asing selama 5 menit.",
  "Pergi ke luar dan coba berbicara dengan 3 orang yang berbeda tanpa menggunakan kata 'aku' atau 'saya'.",
  "Buatlah puisi singkat tentang benda di sekitarmu saat ini.",
  "Cobalah membuat seni dengan menggunakan benda-benda di sekitarmu dalam waktu 3 menit.",
  "Kirim pesan pada seseorang yang kamu tidak pernah bicara selama setahun dengan ucapan 'Hai, apa kabar?'",
  "Telepon restoran lokal dan tanya apakah mereka memiliki menu makanan alien.",
  "Lakukan video pendek menirukan suara hewan secara mendramatisasi.",
  "Pergi ke luar dan berbicara dengan suara paling keras yang bisa kamu hasilkan selama 1 menit.",
  "Coba makan kombinasi makanan yang aneh, seperti mentimun dengan selai kacang.",
  "Telepon salah satu temanmu dan buatlah cerita fiksi dengan total ketidaknyataan yang meyakinkan.",
  "Ambil benda apa pun di dekatmu dan buatlah cerita pendek tentang benda itu dalam waktu 2 menit.",
  "Pergi ke luar dan berbicaralah kepada seorang pohon seperti teman baikmu.",
  "Tantang dirimu untuk berbicara dengan nada suara yang sangat rendah selama 5 menit.",
  "Kirim pesan teks kepada temanmu dengan ucapan 'Aku tahu rahasiamu!' dan biarkan mereka bingung.",
  "Pilih lagu acak dan cobalah membuat lirik baru di tempat.",
  "Berbicaralah dalam bahasa robot selama 3 putaran.",
  "Pergi ke akun media sosialmu dan tulis status aneh tanpa penjelasan.",
  "Ambil benda di dalam rumahmu dan ceritakan kisah yang aneh tentang bagaimana benda itu menjadi benda berhantu.",
  "Kirim pesan teks kepada seseorang yang kamu kenal tetapi jarang berbicara dengan ucapan 'Aku punya pertanyaan sangat penting: Apa warna favoritnya?'",
  "Telepon salah satu anggota keluargamu dan berbicaralah dengan suara sangat tinggi selama 2 menit.",
  "Pergi ke luar dan berbicaralah dengan suara sangat pelan selama 3 menit.",
  "Tantang dirimu untuk tidak menggunakan kata 'ya' atau 'tidak' selama 5 menit.",
  "Kirim pesan teks kepada temanmu dengan ucapan, 'Aku menemukan harta karun di belakang rumahku! Siap mencari?'",
  "Berikan tarian cepat dengan lagu yang diputar dalam 10 detik.",
  "Ambil sebuah benda dan cobalah menjualnya kepada temanmu seperti kamu adalah seorang sales profesional.",
  "Pergi ke luar dan berbicara seperti kamu sedang membawakan berita cuaca.",
  "Kirim pesan teks pada mantanmu dengan ucapan 'Apakah kita bisa berteman lagi?' tanpa penjelasan lebih lanjut.",
  "Cobalah membuat suara hewan dan biarkan temanmu menebak hewan apa itu.",
  "Tulis puisi singkat tentang makanan favoritmu dan bagikan kepada semua peserta.",
  "Kirim pesan teks kepada temanmu dengan ucapan 'Aku lupa cara membuka pintu rumahku. Bisa tolong jelaskan?'",
  "Pergi ke luar dan berteriaklah 'Aku mencintai es krim!' sebanyak tiga kali.",
  "Tantang dirimu untuk melakukan 10 kali putaran tarian gila.",
  "Kirim pesan teks pada seseorang yang kamu tahu sedang sibuk dan minta mereka menebak berapa banyak jari yang kamu pegang.",
  "Pergi ke luar dan berbicara kepada benda yang kamu pilih, lalu minta mereka 'tuturkan jawaban' dalam bahasa yang berbeda.",
  "Tantang dirimu untuk mengirim pesan teks dengan kata-kata yang diucapkan secara terbalik selama 10 menit.",
  "Lakukan tarian spontan di tengah-tengah kamar selama 2 menit.",
  "Pergi ke luar dan berbicaralah dengan suara sangat tinggi seolah-olah kamu adalah pemandu sorak.",
  "Kirim pesan teks kepada seseorang di daftar kontakmu dan katakan 'Kamu masih ingat mimpi anehku semalam?' dan lihat reaksinya.",
  "Cobalah membuat senyum di wajah seseorang di jalan tanpa mengucapkan sepatah kata pun.",
  "Telepon nomor acak dan berbicaralah dengan aksen ajaib selama 3 menit.",
  "Berikan monolog singkat tentang kehidupan sehari-hari benda di sekitarmu.",
  "Ambil dua barang acak di rumahmu dan gunakan untuk membuat cerita pendek dalam 2 menit.",
  "Kirim pesan teks kepada seseorang dengan ucapan 'Aku tahu apa yang kamu lakukan tahun lalu pada hari ini…'",
  "Cobalah berbicara dengan suara sangat lambat dan rendah, seolah-olah kamu adalah karakter dalam film misteri.",
  "Lakukan rap gaya bebas selama 3 menit.",
  "Biarkan orang lain membuat status menggunakan akun sosial mediamu.",
  "Berikan ponselmu kepada salah satu di antara kita dan biarkan orang tersebut mengirim satu pesan kepada siapa pun yang dia mau.",
  "Cium salah satu kaus kaki di antara kita.",
  "Makan satu gigitan kulit pisang.",
  "Peragakan salah satu orang di antara kita sampai ada yang bisa menebak siapa orang yang diperagakan.",
  "Katakan ‘meong’ di setiap akhir kalimat sampai giliranmu yang selanjutnya.",
  "Tirukan seorang selebriti sampai ada yang bisa menebak.",
  "Bertingkahlah seperti ayam sampai giliranmu yang selanjutnya.",
  "Biarkan satu orang menggambar tato di wajahmu.",
  "Gunakan penutup mata lalu raba muka salah satu di antara kita sampai kamu bisa menebak siapa orang itu.",
  "Ungkapkan perasaanmu kepada gebetanmu.",
  "Push up 20 kali.",
  "Kayang selama satu menit.",
  "Plank selama satu menit.",
  "Biarkan salah satu di antara kita merias wajahmu menggunakan make up.",
  "Baca dengan lantang pesan yang terakhir kali kamu kirim ke gebetanmu.",
  "Tunjukkan gerakan dance terbaikmu.",
  "Ulangi setiap perkataan orang yang ada di sampingmu sampai giliranmu yang selanjutnya.",
  "Nyanyikan sebuah lagu dengan namaku.",
  "Bicara dengan gaya sang sangat genit.",
  "Kirim fotomu yang paling jelek.",
  "Beri 10 pujian yang tulus.",
  "Bicara selama 3 menit tanpa berhenti.",
  "Lakukan standup comedy selama 3 menit.",
  "Bisikkan rahasia paling kelam yang kamu sembunyikan.",
  "Tiru 5 emoji.",
  "Tunjukkan seluru isi tasmu secara detail.",
  "Katakan 'aku cinta kamu' sambil push up sebanyak 10 kali.",
  "Tunjukkan riwayat pencarian di ponselmu.",
  "Biarkan aku menggambar tato di tubuhmu.",
  "Biarkan aku memegang ponselmu selama 3 menit.",
  "Teriakkan satu kata yang pertama kali muncul di benakmu.",
  "Katakan 5 hal jujur tentangku.",
  "Kirim gebetanmu selfie yang memalukan.",
  "Menarilah selama satu menit tanpa musik.",
  "Pergi keluar dan berteriaklah sekeras yang kamu bisa.",
  "Ketuk pintu tetangga dan minta telur.",
  "Cobalah tarian TikTok pertama yang muncul di FYP-mu.",
  "Minum segelas air tanpa menggunakan tangan.",
  "Minum kecap langsung dari botolnya.",
  "Makan camilan tanpa menggunakan tangan.",
  "Coba jilat sikomu.",
  "Makan satu bawang mentah.",
  "Pergi keluar dan nyanyikan lagu 'Let It Go' dari film Frozen.",
  "Menari balet selama satu 1 menit.",
  "Hubungi kontak ke-12 di ponselmu dan lakukan percakapan selama 30 detik.",
  "Berbicara dengan suara penyanyi opera selama 4 putaran.",
  "Berbicara dengan mulut tertutup selama 4 putaran.",
  "Nyanyikan lagu rap dengan memasukkan setiap nama pemain.",
  "Menari salsa selama 1 menit.",
  "Like semua foto gebetanmu.",
  "Buat story dengan wajah memelas.",
  "Tunjukkan history pencarian Instagram-mu.",
  "Buatlah puisi dengan tema alam.",
  "Buatlah puisi dengan tema cinta.",
  "Buatlah puisi dengan tema galau.",
  "Buat tato dengan spidol di dahimu.",
  "Tunjukkan foto yang paling kamu sukai di galerimu.",
  "Unggah foto gebetan di instastory Instagram.",
  "Buat pantun 4 bait yang lucu.",
  "Berdiri di luar, lalu sapa 10 orang pertama yang kamu temui.",
  "Chat gebetanmu dan katakan 'Aku tahu rahasiamu selama ini'.",
  "Telepon teman secara acak dan katakan 'Ada yang bisa kami bantu?'",
  "Joget jamet dan upload di Instastory.",
  "Kayang selama 1 menit.",
  "Berdiri di luar dan bilang 'I love you' ke orang yang pertama kali kamu temui.",
  "Tutup mata, lalu raba muka salah satu di antara kita sampai kamu bisa menebaknya.",
  "Joget pargoy WhatsApp story.",
  "Lap semua kaca di ruangan ini.",
  "Matikan lampu tanpa menggunakan tangan dan kepala.",
  "jalan 5 meter dengan satu kaki.",
  "Gambar lingkaran menggunakan mulut.",
  "Nyanyikan lagu 'Indonesia Raya' di luar.",
  "Memakai topi atau topi dengan bentuk yang aneh selama sisa pertemuan.",
  "Mengenakan pakaian dalam terbalik dan tidak mengubahnya selama 1 jam.",
  "Meniru gerakan burung selama 1 menit di tempat umum.",
  "Berjalan dengan langkah yang sangat kecil dan perlahan selama 10 menit.",
  "Meniru suara alarm kebakaran selama 30 detik di tempat umum.",
  "Mencoba membuat suara binatang yang paling aneh dan membuat orang lain menebaknya.",
  "Berjalan seperti burung unta selama 2 menit di sekitar ruangan.",
  "Berjalan di sekitar ruangan dengan kaus kaki di tangan dan tangan kosong di kaki.",
  "Memasang rambutmu dengan banyak jepit rambut dalam waktu 5 menit.",
  "Mengikuti langkah dansa yang konyol dari lagu yang sedang diputar."
];

let selectedOption = null;
const sound1 = document.getElementById("gregetanSound");

// Enable the generate button when an option is selected
document.querySelectorAll('input[name="truthDare"]').forEach((input) => {
    input.addEventListener('change', function () {
        selectedOption = this.value;
        document.getElementById("generateButton").disabled = false;
    });
});

function generateTask() {
    if (!selectedOption) return;

    const taskArray = selectedOption === "Truth" ? truthTasks : dareTasks;
    const animationContainer = document.getElementById("animationContainer");
    const animationText = document.getElementById("animationText");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popupContent");

    // Play sound
    sound1.currentTime = 0; // Reset sound to the beginning
    sound1.play();

    let interval;
    let count = 0;

    // Show the animation container
    animationContainer.classList.remove("hidden");

    // Start the animation
    interval = setInterval(() => {
        const randomTask = taskArray[Math.floor(Math.random() * taskArray.length)];
        animationText.textContent = randomTask;
        count++;
    }, 100);

    // Stop the animation after 2 seconds and show the result
    setTimeout(() => {
        clearInterval(interval); // Stop the interval
        animationContainer.classList.add("hidden"); // Hide animation container

        const randomTask = taskArray[Math.floor(Math.random() * taskArray.length)];
        popupContent.innerHTML = `<strong class="text-2xl">${selectedOption}:</strong><br>${randomTask}`;
        // sound1.pause(); // Stop sound when animation finishes
        // sound1.currentTime = 0;
        popup.classList.remove("hidden"); // Show the popup
    }, 6200);


    // Disable the generate button after generating
    document.getElementById("generateButton").disabled = true;
}

// Refresh the page and hide the popup
function refreshPage() {
    location.reload(); // Refresh the page
}
