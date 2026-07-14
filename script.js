/* ============================================================
   DATA MURID
   Ganti / tambahkan sesuai jumlah murid (36 murid).
   Sesuaikan path foto dengan folder img/
============================================================ */
const students = [
  { name: "Adi Nur Faizi", absen: "01", photo: "img/01.jpg", message: "Kepada Bu Desty, wali kelas kami yang luar biasa. Rasanya baru kemarin kami masuk ke kelas 11 di bawah bimbingan Ibu, dan sekarang kami harus melangkah lagi menuju jenjang terakhir kelas 12. Terima kasih karena sudah menjadi orang tua kedua kami di sekolah. Terima kasih sudah sabar menghadapi tingkah laku kami, menegur saat kami salah, dan menyemangati saat kami merasa lelah atau ragu. Bimbingan Bu Desty sangat berarti bagi kami. Kami minta maaf jika sering mengecewakan atau kurang berusaha sesuai harapan Ibu. Kami berjanji akan berusaha sebaik mungkin di kelas 12 nanti. Sehat selalu dan bahagia terus ya Bu Desty, kami tidak akan melupakan Ibu!" },
  { name: "Adnan Sya'ban Mubarok", absen: "02", photo: "img/02.jpg", message: "Ibuuu😭, Anan gabakal lupain ibu bu, selama ibu menjadi wali kelas XI 3 ibu selalu sabar menghadapi ujian ujian yang kita buat, dan Anan juga minta maap ya bu karna Anan sepertinya kurang bertanggung jawab atas kebersihan kelas hhee :v, pengen banget di wali kelasin sama ibu lagi tapi takdir berkata lain, cuma kelas kita loh bu yang ngasih kenangan lewat web ini hahaha, kelas lain mah masih pake kertas bu, kelas kita mah udah menggunakan teknologi koding, kata kata hari ini dari king Adnan. Dalam dunia pemrograman, ada yang namanya bug. Di kelas XI-3 juga banyak bug-nya... dan sepertinya Adnan salah satu dari bug itu. 🤣 Tapi hebatnya, ibu nggak pernah menyerah buat terus memperbaiki kami satu satu. yah gitu aja sih bu, aku doain agar ibu sehat selalu, di lancarkan rezekinya, dan di panjang kan juga umurnya amin 🤲❤️" },
  { name: "Alena Aulia Marla", absen: "03", photo: "img/03.jpg", message: "Terimakasih banyak atas semua arahan, bimbingan, dan dedikasi Ibu selama ini. Terimakasih karena Ibu tidak pernah lelah menegur kami dengan cara yang baik, mengarahkan kami ke jalan yang benar, dan selalu percaya bahwa kami bisa jadi lebih baik. Maafkan kami ya Bu, jika selama ini ada kata-kata dan perbuatan kami yang kurang sopan, yang bikin Ibu kecewa atau capek. Kami sadar kami masih banyak belajar. Semoga Ibu selalu diberi kesehatan, rezeki yang berkah, dan kebahagiaan. Jangan lupakan kami ya Bu. Kami akan selalu ingat setiap nasihat Ibu. Kalau ada waktu nanti, kita kumpul lagi ya Bu. Kami rindu suasana belajar, rindu cerita, dan rindu dibimbing Ibu lagi. Kami sayang Ibu." },
  { name: "Arizza Jihan Tsurroya", absen: "04", photo: "img/04.jpg", message: "assalamualaikum buu desty. Maaf mengganggu waktunya ya, sayaa ingin mengucapkan trimakasih banyak untuk ibuu yang telahh mendidik kamii dengan sabarr,penuh tanggung jawab,walaupun kita sering buatt ibuu marahh tapii ibuu tetapp menjalann kan tugas ibu sebagai guruu,kita bahagia bangett bisa ketemuu guruu kayaa buu desty.. Sekarang kita semua udaa kelas 12 dan uda ga sama ibu lagii :( makasii buatt waktu ibuu selama inii maafinn kitaa karnaa kitaa belum bisaa jadi murid yang ibuu mauu. Semoga kedepan nyaa sukses teruss dann semakinn kompakk,buu desty jagaa kesehatannn dann semangatt teruss ngajarrnyaa,thank u andd see u bu desty🤍🤍🥹👥️👥️. Terimakasih telah menjadi wali kelas yang baik dan sabar terhadap kami,semua jasa ibu akan selalu kami kenang ,orangtua kedua kami di sekola,kami bukan lah apa apa jika tidak di didik dan di bimbing oleh ibu ,semoga hal baik selalu menyertai ibu terimakasih telah menjadi wali kelas yang terbaik,maaf bila saat ibu menjadi wali kelas kami selalu mendapatkan informasi buruk dari guru" },
  { name: "Arya Wiralaga", absen: "05", photo: "img/05.jpg", message: "makasihh ibu, atas segala bimbingan, kesabaran, dan perhatian yang telah diberikan sama kita anak teknik yang kadang suka susah banget di aturnya banyak tingkah. makasih udah menjadi sosok yang selalu mendukung dan membimbing kami selama ini. semoga bu desty selalu sehat, bahagia, dan sukses dalam menjalankan tugas sebagai guru. semua kebaikan ibu bakal selalu kita kenang. makasih atas jasa dan segalanya selama ibu jadi walikelas kita ❤️‍🩹" },
  { name: "Azmika Ramadhani", absen: "06", photo: "img/06.jpg", message: "setiap pertemuan pasti ada perpisahan. terima kasih telah menjadi bagian dari cerita dan perjalanan kami. semoga kebaikan Ibu selalu dibalas dengan kebahagiaan" },
  { name: "Bandi Fahrezi", absen: "07", photo: "img/07.jpg", message: "ibu makasih atas bimbingannya setahun ini, maap ya bu bandi suka nunda nunda tugas hehe, ibu semoga di sehatkan selalu bu, biar bisa bercanda lagi sama bandi and gank ya bu" },
  { name: "Benny Collin", absen: "08", photo: "img/08.jpg", message: "ibu makasih yaa atas arahan dan dedikasinya selama ngebimbing kita, maaf juga ya bu kalo ada salah ucapan atau perbuatan. Benny seneng banget ibu bisa jadi walikelas kita andai aja bisa bareng sampe lulus sama ibu, benny baru pertama kali ngerasa deket banget sama guru, makasih juga ya bu udah bantu ngenalin dia ke benny, kalo bukan karena ibu belum tentu benny bisa chatan sama dia makasih banyak buu, apa yang ibu bilang ke benny pasti benny inget terus, pokoknya ibu sehat2 terus yaa, kalo ada waktu kita pasti kumpul lagi, LOVE YOU IBUUU 💟💝💖" },
  { name: "Cindy Melanie Putri Haryadi", absen: "09", photo: "img/09.jpg", message: "terimakasih banyak untuk satu tahunnya ibuu, maafin kesalahan aku ya buu, semoga ibuu sehat selalu dan jangan lupa sama aku yaa hehe❣️" },
  { name: "Elgian Hilal Ramadhan", absen: "10", photo: "img/10.jpg", message: "Makasih ibu karena udah mendidik dan membimbing elgian selama ini, meskipun elgian masih suka buat kesalahan sama ibu, pokonya makasih dan maaf buat ibu💖💖" },
  { name: "Faisal Awara", absen: "11", photo: "img/11.jpg", message: "Assalamu'alaikum, Bu Desty. Terima kasih banyak ya, Bu, sudah menjadi wali kelas Isal selama ini. Terima kasih karena sudah menganggap Isal seperti anak sendiri di sekolah. Rasanya beruntung banget bisa punya wali kelas yang selalu perhatian, walaupun kadang cerewet, tapi justru itu yang bikin Isal merasa diperhatikan. Terima kasih juga sudah banyak membantu Isal, mulai dari belajar monolog, teater, sampai selalu ngasih semangat setiap Isal ikut kegiatan. Ilmu dan nasihat dari Ibu benar-benar berarti buat Isal. Nanti kalau Isal sudah kelas 12 dan butuh belajar lagi buat esai atau teater, Isal masih boleh minta bantuan ke Ibu kan? Hehe. Maaf ya, Bu, kalau selama jadi anak wali Ibu Isal sering ngerepotin, banyak salah, kadang bikin pusing, dan tugas juga sering telat ngumpulin. Isal minta maaf yang sebesar-besarnya. Insyaallah di kelas 12 nanti Isal mau lebih serius belajar. Isal janji bakal lebih disiplin, nggak telat ngumpulin tugas lagi, dan mulai mengurangi kegiatan organisasi supaya bisa lebih fokus ke akademik. Doain ya, Bu. Tahun depan Isal akan menghadapi TKA. Mata pelajaran pilihan Isal nanti Bahasa Indonesia Tingkat Lanjut dan Antropologi. Mohon doanya juga semoga Isal bisa lolos kuliah di UNESA Surabaya, mengambil jurusan Perfilman. Semoga semua mimpi Isal dimudahkan dan dilancarkan. Sekali lagi, terima kasih atas semua kebaikan, kesabaran, perhatian, dan semua pelajaran yang Ibu berikan. Terima kasih sudah menjadi wali kelas sekaligus sosok ibu untuk Isal di sekolah.Sehat selalu ya, Bu. Semoga Ibu selalu diberi kebahagiaan, rezeki yang berkah, dan selalu menjadi guru hebat yang menginspirasi banyak murid. Terima kasih atas segalanya, Ibu cerewetku, Bu Desty Mulyani." },
  { name: "Fakhri Miftahur Ramadhan", absen: "12", photo: "img/12.jpg", message: "terimakasih banyak buu atas dedikasinya, inget aku terus yaa buu si fakhri yang ranking satu karna juara futsal hahaha. Ini jadi tahun terakhir fakhri di smanti buu, doakan terus fakhri yaa buu semoga kedepannya bisa jadi pribadi yang lebih baik. Fakhri janji bakalan jadi orang pertama dari smanti yang jadi masinis, ibu bakalan liat fakhri beberapa tahun kedepan dinas kereta bawa lokomotif. Semoga ibu desty sehat selalu dan panjang umur, semoga bisa liat fakhri jadi masinis. besok kalo fakhri udah jadi masinis ajak diwan nonton kereta buu, nanti biar fakhri sapa dari dalam kabis masinis hehehe. Bersyukur dipertemukan sama walikelas sebaik bu desty, yang selalu sabar walaupun fakhri banyak kurangnya dari segala hal, ntah itu tugasnya masih kurang, Sering tidur, atau etikanya masih belum cukup baik, maafin fakhri yaa buu untuk beberapa bulan kebelakang, semoga jadi pembelajaran untuk fakhri kedepannya. Terimakasih dari lubuk hati terdalam" },
  { name: "Ferry Apriansyah", absen: "13", photo: "img/13.jpg", message: "buu maapin feri ya bu, feri suka kadang gada kabar, suka di omelin sama ibu, pasti ibu cape ya bu ngomelin feri hhe. Makasih ya bu atas bimbingannya setahun ini, semoga ibu sehat selalu" },
  { name: "Galuh Mauludin", absen: "14", photo: "img/14.jpg", message: "Terima kasih atas semuanya, Bu. Semoga Ibu selalu diberikan kesehatan, kebahagiaan, dan keberkahan dalam setiap langkah.." },
  { name: "Gazza Kafka Nafisha", absen: "15", photo: "img/15.jpg", message: "Bu, terima kasih atas bimbingannya selama ini ya Bu, jujur bu Gaza sedih ga di wali kelasin sama ibu lagi, ibu kalo nge walikelasin tuh kayak emang bener bener ibu itu merangkul kita semua bu, tapi sekarang kita harus berpisah😭, tapi Gaza and gank gabakalan lupakan kesenangan kita kita sama Ibu, sehat sehat selalu Ibu🔥🔥" },
  { name: "Illiyyina Fauzyiah Lebannia Carsony", absen: "16", photo: "img/16.jpg", message: "Saya Illiyyina, Bu. Terima kasih banyak atas semua ilmu, bimbingan, dan kesabaran Ibu selama mengajar kami. Saya senang bisa menjadi salah satu murid Ibu dan mendapatkan banyak pengalaman selama belajar di kelas Ibu. Tidak terasa sekarang waktunya pindah ke kelas berikutnya. Saya juga ingin minta maaf kalau selama belajar masih banyak salah, baik dalam sikap, perkataan, maupun saat mengikuti pelajaran. Terima kasih karena Ibu selalu membimbing dan mengingatkan kami dengan sabar. Semoga Ibu selalu sehat, diberikan kemudahan dalam mengajar, dan selalu diberi kebahagiaan. Terima kasih sekali lagi untuk semua yang sudah Ibu berikan kepada kami. Mohon doa dan restunya supaya saya bisa terus belajar dengan baik dan menjadi pribadi yang lebih baik lagi. Sekali lagi, terima kasih banyak, Bu. Semoga suatu saat nanti saya bisa menjadi murid yang membuat Ibu bangga." },
  { name: "Intan Putri Yulanda", absen: "17", photo: "img/17.jpg", message: "Halo Ibuu, jujur aja aku sedih banget waktu tau kalau Ibu udah nggak bakal jadi wali kelas kami lagi. Padahal aku sama temen-temen tuh bener-bener berharap banget Ibu bisa lanjut jadi wali kelas kami pas kelas 12 nanti. Selama Ibu jadi wali kelas, banyak banget hal yang bikin kami nyaman. Cara Ibu ngajar, ngobrol, sampai ngadepin tingkah kami yang kadang bikin pusing pun selalu sabar. Suasana kelas jadi lebih seru, belajar juga jadi lebih semangat karena Ibu selalu bisa bikin pelajaran terasa menyenangkan. Walaupun kami paham kalau semua ini memang udah jadi keputusannya, tetap aja rasanya sedih. Bakal kangen sama momen-momen di kelas bareng Ibu, candaan-candaan kecil, sama perhatian Ibu ke kami. Semoga Ibu selalu sehat, makin sukses ke depannya, dan semoga suatu saat nanti kami masih bisa ketemu lagi. Terima kasih banyak ya, Bu, buat semua waktu, kesabaran, dan kebaikan yang udah Ibu kasih ke kami. ❤️" },
  { name: "Luthfi Andrea Gading Utama", absen: "18", photo: "img/18.jpg", message: "ibooo, hehe sebelumnya saya mau meminta maaf bu bahwasanya saya kadang datang terlambat ke sekolah, jadinya malah ngerepotin ibu yang harus nyamperin saya hehe, tapi nanti pas kelas 12 saya mau menjadi pribadi yang disiplin bu, gabakalan terlambat lagi, asli inimah bu, dan bakal lebih semangat lagi belajar nya hahaha" },
  { name: "Malik Al Falah", absen: "19", photo: "img/19.jpg", message: "Nggak kerasa 365 hari sudah terlewati ya bu, Makasih udah sabar banget ngadepin teknoperse khususnya aiqq sendiri yang random😁🤟🏼❤️ini. Sehat selalu ibu hehehe, jangan lupain kami! jujur bu pengen di walasin ibu lagi, tapi ya gimana lagi ya bu, dan pasti b.indo nya juga ga sama ibu lagi( intinya ilmu dan ajaran dari ibu akan selalu aiqqq ingat dan juga ibu akan selalu ada ruang tersendiri di aiqqq, HATUR TENGSSS IBUUU🤎🤍" },
  { name: "Muhammad Farel Agung Amrulloh", absen: "20", photo: "img/20.jpg", message: "ibu trimakasih atas dedikasinya 1 tahun ini, farel sangat menghargai ibu yang sudah sabar membimbing kita para anak kelas 11 3, farel harap ibu masih bisa bersilaturahmi sama kita kita, dan semoga ibu terus di sehatkan, di lancarkan rezekinya, dan selalu pada jalan yang benar." },
  { name: "Muhammad Rizvan Pandowo", absen: "21", photo: "img/21.jpg", message: "Terima kasih banyak ibuu desty atas segala bimbingan, kesabaran, perhatian, dan kasih sayang selama menjadi wali kelas rizvan. Banyak pelajaran, nasihat, serta kenangan indah yang akan selalu Rizvan ingat. Meski Ibu desty tidak lagi menjadi wali kelas Rizvan, rasa hormat dan terima kasih rizvan tidak akan pernah berkurang. Semoga ibu desty selalu diberikan kesehatan, kebahagiaan, kemudahan dalam setiap langkah, dan semakin sukses dalam mendidik generasi berikutnya. Terima kasih atas semua jasa dan pengorbanan yang telah ibu desty diberikan." },
  { name: "Nabil Rizki Ramadhan", absen: "22", photo: "img/22.jpg", message: "terima kasih banyak ibu,atas semua bimbingan, kesabaran, dan perhatian yang telah ibu,berikan selama menjadi wali kelas saya. saya sangat bersyukur pernah dibimbing oleh ibu,walaupun sekarang ibu,sudah tidak lagi menjadi wali kelas saya, semua nasihat dan kebaikan ibu,akan selalu saya ingat. semoga ibu,sehat selalu bahagia, dan sukses aamiin,terima kasih atas segala jasa dan dedikasinya ibu.dari nabil segitu aja buat ibu,maaffin kalo nabil pernah bikin salah sama ibu.🥺💕💌" },
  { name: "Putria Silviani", absen: "23", photo: "img/23.jpg", message: "Terima kasih ibu atas setiap ilmu, kesabaran, dan ketulusan yang telah diberikan. Jejak kebaikan ibu akan selalu menjadi bekal berharga dalam setiap langkah kami. Semoga selalu sehat, bahagia, dan diberkahi dalam setiap pengabdian." },
  { name: "Raffi Yusuf Advan Saputra", absen: "24", photo: "img/24.jpg", message: "bu, maap ya bu Raffi suka tidur mulu di kelas, tapi Raffi sadar sekarang udah kelas 12, jadi penentu nilai akhir, Raffi bakal berubah bu, bakal kurang kurangin tidur di kelasnya, bakal jadi orang sip deh pokonya hehe" },
  { name: "Rahma Nurul Azizah", absen: "25", photo: "img/25.jpg", message: "Untuk Ibu desty ❤️❤️. tidak terasa satu tahun sudah berlalu.rasanya baru kemarin kami masuk ke kelas ini, belajar bersama, bercanda, dimarahi saat salah, dan diberi semangat ketika mulai lelah. Sekarang kami harus melanjutkan perjalanan ke kelas 12 dengan wali kelas yang berbeda. terima kasih karena sudah sabar menghadapi berbagai macam sifat kami. terima kasih atas setiap nasihat, perhatian, waktu, dan doa yang mungkin sering tidak kami sadari. Maaf jika selama menjadi anak didik Ibu kami pernah mengecewakan, membantah, atau membuat Ibu lelah. Mungkin kami tidak selalu menjadi murid yang terbaik, tetapi Ibu akan selalu menjadi salah satu guru yang akan kami kenang. Semoga semua kebaikan yang telah Ibu berikan menjadi amal yang terus mengalir, dan semoga Ibu selalu diberikan kesehatan, kebahagiaan, serta keberkahan dalam setiap langkah.terima kasih sudah menjadi bagian dari cerita kami. Semoga suatu hari nanti, ketika kami berhasil meraih cita-cita, ada sedikit rasa bangga di hati Ibu karena pernah menjadi bagian dari perjalanan kami." },
  { name: "Raka Juliansyah Nurhidayat", absen: "26", photo: "img/26.jpg", message: "Halo Bu hhe, maap ya bu Raka dari semester 1 suka tidur mulu di kelas, Raka juga pengen di walikelasin sama ibu lagi tapi ya gimana ya Bu itu udah aturan dari sekolah, Raka bakal kurang kurangin tidur di kelas deh Bu, bakal jadi anak yang mantep nanti di kelas 12 mah hhe, izin tampil Bu di kelas 12🔥🔥" },
  { name: "Rayhan Abrar Bayhaqi", absen: "27", photo: "img/27.jpg", message: "Terima kasih, Bu, atas semua bimbingan dan kesabaran Ibu selama menjadi wali kelas kami. Mohon maaf atas segala kesalahan kami.Semoga Ibu selalu sehat dan bahagia." },
  { name: "Rehan Ananda Dimas", absen: "28", photo: "img/28.jpg", message: "Ibooo, Rehan kayaknya pas dari awal smester 1 suka tidur di kelas ya bu hehe, maap ya bu Rehan pas itu emang lagi males malesnya, tapi Rehan nanti pas kelas 12 akan full mengikuti pelajaran tanpa tidur samasekali, Rehan bakal mengalahkan Adnan hahaha, ibu jaga kesehatan ya, rehan doain yang terbaik buat ibu" },
  { name: "Rendi Saepudin", absen: "29", photo: "img/29.jpg", message: "For my dear teacher. Ibu Desty, ibu makasi ya udah selalu support Rendi dalam setiap langkah yang Rendi jalani, ibu selalu dukung dan semangatin Rendi, terimakasih juga sudah memberi ilmu yang sangat berguna dan bermanfaat bagi Rendi, bukan hanya tentang ilmu, tapi tentang bagaimana ibu bisa menjadi walikelas yang hebat dan supportif untuk kami. Semoga ibu selalu diberikan kesehatan, kelancaran dalam mencari rezeki, dan dipertemukan dengan anak-anak yang baik di kelas yang baru, jangan lupain kami ya bu😇." },
  { name: "Reyfan Khairul Sudaryat Putra", absen: "30", photo: "img/30.jpg", message: "Halo buu, reyfan gatau harus ngomong apa hhe tapi reyfan mau minta maaf dulu takutnya reyfan ada salah mohon maafin ya buu, reyfan harap setelah pembelajaran baru ini di mulai... ibu jangan sampe malah kayak pura pura ga kenal sama kita ya buu, reyfan harap ibu tetep bisa silaturahmi kayak biasa sama kita ya bu setelah kita duduk di bangku kelas 12." },
  { name: "Shafira Febriani Setiawan", absen: "31", photo: "img/31.jpg", message: "Terima kasih banyak, Bu Desty, atas segala waktu, kesabaran, dan kasih sayang yang sudah Ibu berikan selama membimbing kami. Kami benar-benar bersyukur bisa belajar dan bertemu dengan guru sebaik Ibu. Setiap nasihat, perhatian, dan pengertian yang Ibu berikan akan selalu menjadi hal yang kami ingat dan hargai. 🤍" },
  { name: "Syahira Indriani", absen: "32", photo: "img/32.jpg", message: "Jazakillahu khairan katsiran Ibu. Terima kasih atas bimbingan dan kasih sayangnya. Mohon maaf lahir batin. Semoga Allah membalas kebaikan Ibu dengan surga-Nya." },
  { name: "Syahla Ridfa Rhasyd", absen: "33", photo: "img/33.jpg", message: "​Di balik keberhasilan kami naik kelas, ada doa dan lelahnya Ibu yang luar biasa. Terima kasih telah menjadi sosok yang selalu mempercayai kami, Bu. Sehat dan bahagia selalu!" },
  { name: "Yulia Nadya Shofwah", absen: "34", photo: "img/34.jpg", message: "Terima kasih banyak ya ibuquu udah sabar banget membersamai kita selama 1 tahun ini. Maaf ya Bu kami sering bikin Ibu ngomel-ngomel. Nanti kalau Ibu kangen calling calling kitaa ajaa buu dan pastinya ocehan ibu lah yang akan kita rindukan, hehe. Jangan pernah lupain anak-anak 11.3 ini yaa, karena walau nanti ganti wali kelas, Ibu tetap Ibu kita selamanya! Sekali lagii terimakasi banyak banyakk, I love you Ibuqq 🙌❤️" },
  { name: "Zahraini Fajrianty", absen: "35", photo: "img/35.jpg", message: "Ibu... terima kasih banyak ya udah sabar banget ngadepin kami selama ini. Kami tahu kami bukan kelas yang selalu nurut, kadang berisik, susah diatur, suka lupa tugas, dan sering bikin Ibu geleng-geleng kepala. Maaf kalau selama ini kami banyak bikin repot atau tanpa sadar pernah ngecewain Ibu. Semoga Ibu selalu sehat dan bahagia yaa. Terima kasih sudah membimbing dan nemenin kami selama di kelas XI.3 🤍" },
  { name: "Zazkia Fakhita Lestari", absen: "36", photo: "img/36.jpg", message: "Makasih banyak ya, Bu, udah nemenin dan ngebimbing kita selama ini. Makasih juga karena selalu sabar ngadepin kita yang kadang suka bikin pusing, tapi Ibu tetap perhatian dan selalu ngingetin kita kalo lagi salah🤍🤍, Maaf ya, Bu, kalau selama jadi anak anak ibu, kita masih sering bandel, berisik, atau ngerepotin. Tapi kita yakin deh, semua perhatian, nasehat, dan kebaikan Ibu bakal selalu kita inget🥺🥺, Semoga Ibu selalu sehat, bahagia, makin sukses, dan selalu dikelilingi hal-hal baik. Pokoknya makasih buat semuanya ya, Bu. Seneng banget bisa jadi muridnya Ibu. Semoga nanti kalo kita udah berhasil, kita masih bisa bikin Ibu bangga. 🤍🌷" }
];
  // ... tambahkan hingga absen 36 sesuai data asli

// Placeholder otomatis jika data belum lengkap 36
while (students.length < 36) {
  const n = students.length + 1;
  const absen = n < 10 ? `0${n}` : `${n}`;
  students.push({
    name: `Nama Murid ${absen}`,
    absen: absen,
    photo: `img/${absen}.jpg`,
    message: "Terima kasih Bu, atas semua ilmu dan kasih sayang yang telah diberikan."
  });
}

/* ============================================================
   STATE
============================================================ */
let currentIndex = 0;
const totalStudents = students.length;

/* ============================================================
   ELEMENT REFERENCES
============================================================ */
const loadingScreen = document.getElementById("loading-screen");
const loadingBar = document.getElementById("loading-bar");
const loadingPercent = document.getElementById("loading-percent");

const openingScreen = document.getElementById("opening-screen");
const envelope = document.getElementById("envelope");
const envelopeSeal = document.getElementById("envelope-seal");

const introLetterScreen = document.getElementById("intro-letter-screen");
const startReadingBtn = document.getElementById("start-reading-btn");

const messagesScreen = document.getElementById("messages-screen");
const messagePaper = document.getElementById("message-paper");
const studentPhoto = document.getElementById("student-photo");
const studentName = document.getElementById("student-name");
const studentAbsen = document.getElementById("student-absen");
const studentMessage = document.getElementById("student-message");
const progressCurrent = document.getElementById("progress-current");
const progressTotal = document.getElementById("progress-total");
const progressHint = document.getElementById("progress-hint");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const classPhotoScreen = document.getElementById("class-photo-screen");
const fadeTextContainer = document.getElementById("fade-text-container");
const fadeLines = document.querySelectorAll(".fade-line");

const creditScreen = document.getElementById("credit-screen");
const creditList = document.getElementById("credit-list");
const creditScroll = document.getElementById("credit-scroll");

const closingScreen = document.getElementById("closing-screen");
const replayBtn = document.getElementById("replay-btn");

const musicToggle = document.getElementById("music-toggle");
const bgMusic = document.getElementById("bg-music");

/* ============================================================
   UTIL: SWITCH SCREEN
============================================================ */
function switchScreen(fromScreen, toScreen, delay = 300) {
  fromScreen.classList.add("fade-out");
  fromScreen.classList.remove("active");

  setTimeout(() => {
    fromScreen.classList.remove("fade-out");
    toScreen.classList.add("active");
  }, delay);
}

/* ============================================================
   1. LOADING SCREEN LOGIC
============================================================ */
function startLoading() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15 + 10;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      loadingBar.style.width = progress + "%";
      loadingPercent.textContent = Math.floor(progress) + "%";

      setTimeout(() => {
        switchScreen(loadingScreen, openingScreen, 500);
      }, 400);
      return;
    }
    loadingBar.style.width = progress + "%";
    loadingPercent.textContent = Math.floor(progress) + "%";
  }, 300);
}

/* ============================================================
   2 & 3. OPENING - KLIK SEGEL -> BUKA AMPLOP
============================================================ */
envelopeSeal.addEventListener("click", () => {
  envelopeSeal.classList.add("cracked");

  setTimeout(() => {
    envelope.classList.add("open");
    playMusic();
  }, 350);

  // Setelah surat keluar, pindah ke surat pendahuluan
  setTimeout(() => {
    switchScreen(openingScreen, introLetterScreen, 600);
  }, 2200);
});

/* ============================================================
   4. SURAT PENDAHULUAN -> MULAI MEMBACA
============================================================ */
startReadingBtn.addEventListener("click", () => {
  switchScreen(introLetterScreen, messagesScreen, 500);
  renderStudent(currentIndex);
});

/* ============================================================
   5. RENDER PESAN MURID
============================================================ */
function renderStudent(index) {
  const student = students[index];

  studentPhoto.src = student.photo;
  studentPhoto.alt = "Foto " + student.name;
  studentName.textContent = student.name;
  studentAbsen.textContent = "Absen " + student.absen;
  studentMessage.textContent = student.message;

  progressCurrent.textContent = index + 1;
  progressTotal.textContent = totalStudents;

  const remaining = totalStudents - (index + 1);
  if (remaining > 0) {
    progressHint.textContent = `Sedang membaca pesan ke-${index + 1} — ${remaining} pesan lagi menunggu`;
  } else {
    progressHint.textContent = `Ini adalah pesan terakhir`;
  }

  // Tombol Previous
  prevBtn.disabled = index === 0;

  // Tombol Next -> berubah di halaman terakhir
  if (index === totalStudents - 1) {
    nextBtn.textContent = "📖 Buka Kenangan Terakhir";
  } else {
    nextBtn.textContent = "Berikutnya →";
  }
}

/* ============================================================
   6. TRANSISI ANTAR HALAMAN PESAN (SLIDE + FADE)
============================================================ */
function goToStudent(newIndex, direction) {
  // 1. Tentukan arah keluar
  const outClass = direction === "next" ? "slide-out-left" : "slide-out-right";
  messagePaper.classList.add(outClass);

  setTimeout(() => {
    // 2. Matikan transisi secara total biar kertas bisa pindah posisi tanpa ketahuan
    messagePaper.style.transition = "none";
    
    // 3. Ganti data murid & hapus class animasi keluar
    renderStudent(newIndex);
    messagePaper.classList.remove(outClass);

    // 4. Pasang class posisi bersiap masuk (dari kanan atau kiri luar layar)
    const inClass = direction === "next" ? "slide-in-right" : "slide-in-left";
    messagePaper.classList.add(inClass);

    // 5. Paksa browser merender posisi stand-by tersebut
    void messagePaper.offsetWidth;

    // 6. Hidupkan kembali transisi halusnya dari CSS
    messagePaper.style.transition = "";

    // 7. Hapus class masuk untuk mengayunkan kertas kembali ke tengah layar
    messagePaper.classList.remove(inClass);
  }, 1700); // Durasi delay 1.2 detik
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalStudents - 1) {
    currentIndex++;
    goToStudent(currentIndex, "next");
  } else {
    // Halaman terakhir -> buka kenangan terakhir
    goToClassPhoto();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    goToStudent(currentIndex, "prev");
  }
});

/* ============================================================
   7. FADE KE FOTO KELAS
============================================================ */
function goToClassPhoto() {
  switchScreen(messagesScreen, classPhotoScreen, 1000);

  setTimeout(() => {
    playFadeTextSequence();
  }, 1200);
}

/* ============================================
   8. TULISAN MUNCUL SATU PER SATU DI FOTO KELAS - TIMING MANTAP
============================================ */
function playFadeTextSequence() {
  let i = 0;

  function showNextLine() {
    // Hapus class 'show' dari semua baris biar bersih
    fadeLines.forEach(line => line.classList.remove("show"));

    if (i < fadeLines.length) {
      // Tambah class 'show' ke baris sekarang
      fadeLines[i].classList.add("show");
      i++;
      
      // Timing nunggu antar baris (dalam milidetik). 
      // 3500ms (3.5 detik) biar teks sempet dinikmati sebelum ganti.
      setTimeout(showNextLine, 3500); 
    } else {
      // Setelah baris hati terakhir muncul, kasih jeda dikit
      // baru lanjut ke credit.
      setTimeout(() => {
        goToCredit();
      }, 2500); // Jeda 2.5 detik pas di hati ❤️
    }
  }

  // Mulai urutan
  showNextLine();
}
/* ============================================================
   9. CREDIT - GENERATE NAMA & SCROLL
============================================================ */
function generateCreditList() {
  creditList.innerHTML = "";
  students.forEach(student => {
    const li = document.createElement("li");
    li.textContent = student.name;
    creditList.appendChild(li);
  });
}

function goToCredit() {
  generateCreditList();
  switchScreen(classPhotoScreen, creditScreen, 800);

  // Restart animasi scroll credit setiap kali masuk
  creditScroll.style.animation = "none";
  void creditScroll.offsetWidth; // reflow trick
  creditScroll.style.animation = "creditRoll 18s linear forwards";

  // Setelah credit selesai scroll -> ke penutup
  setTimeout(() => {
    goToClosing();
  }, 18500);
}

/* ============================================================
   10. PENUTUP
============================================================ */
function goToClosing() {
  switchScreen(creditScreen, closingScreen, 800);
}

/* ============================================================
   11. BACA LAGI (RESET SEMUA)
============================================================ */
replayBtn.addEventListener("click", () => {
  currentIndex = 0;

  // Reset envelope
  envelope.classList.remove("open");
  envelopeSeal.classList.remove("cracked");

  // Reset fade text
  fadeLines.forEach(line => line.classList.remove("show"));

  switchScreen(closingScreen, openingScreen, 600);
});

/* ============================================================
   12. MUSIK BACKGROUND
============================================================ */
let musicPlaying = false;

function playMusic() {
  if (!musicPlaying) {
    bgMusic.volume = 1;
    bgMusic.play().catch(() => {
      // Autoplay diblokir browser, akan menunggu interaksi user
    });
    musicPlaying = true;
    musicToggle.textContent = "🔊";
  }
}

musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.textContent = "🔊";
  } else {
    bgMusic.pause();
    musicToggle.textContent = "🔇";
  }
});

/* ============================================================
   INIT
============================================================ */
window.addEventListener("DOMContentLoaded", () => {
  startLoading();
});