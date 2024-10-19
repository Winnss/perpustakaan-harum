const books = [

    {
        "id": 1,
        "judul": "Laskar Pelangi",
        "penulis": "Andrea Hirata",
        "tahun": 2005,
        "cover": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkmC0o7qruNeYlMX4DJ28Hpuidmwd4IbNmy5fpnGnHJnkIYpeJ",
        "isi": "Isi dari Laskar Pelangi...",
        "link":"https://books.google.co.id/books?id=S0ZNe2iqM54C&printsec=frontcover&hl=id#v=onepage&q&f=false",
    },
    {
        "id": 2,
        "judul": "Bumi Manusia",
        "penulis": "Pramoedya Ananta Toer",
        "tahun": 1980,
        "cover": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmBikboqh6GKlG-i4iw1PobxZUg8ygGmNvUjlbORZD4oKj_p5C",
        "isi": "Isi dari Bumi Manusia...",
        "link":"https://books.google.co.id/books?id=Jt_BAAAACAAJ&lpg=PP1&hl=id&pg=PP1#v=onepage&q&f=false",
    },
    {
        "id": 3,
        "judul": "Supernova: Ksatria Puteri dan Bintang Jatuh",
        "penulis": "Dee Lestari",
        "tahun": 2001,
        "cover": "https://books.google.co.id/books/content?id=4xny6BO9wLsC&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3fQ7jkUoIPTmvIzuNdQmrx-NXlFQ&w=1280",
        "isi": "Isi dari Supernova: Ksatria Puteri dan Bintang Jatuh...",
        "link":"https://books.google.co.id/books?id=Wt2OCwAAQBAJ&lpg=PP1&pg=PP1#v=onepage&q&f=false",
    },
    {
        "id": 4,
        "judul": "Negeri 5 Menara",
        "penulis": "Ahmad Fuadi",
        "tahun": 2009,
        "cover": "https://cdn.gramedia.com/uploads/items/9789792248616_negeri-5-menara-_cu-cover-baru_.jpg",
        "isi": "Isi dari Negeri 5 Menara...",
        "link":"https://docs.google.com/file/d/0B7JNiMWP0BJHWWFUR3dHX0RHZzg/edit?resourcekey=0-oeyyaf3SkmSOdo_9NUTWAw",
    },
    {
        "id": 5,
        "judul": "Ronggeng Dukuh Paruk",
        "penulis": "Ahmad Tohari",
        "tahun": 1982,
        "cover": "https://ebooks.gramedia.com/ebook-covers/53333/image_highres/BLK_RDP2020706247.jpg",
        "isi": "Isi dari Ronggeng Dukuh Paruk...",
        "link":"",
    },
    {
        "id": 6,
        "judul": "Ayat-Ayat Cinta",
        "penulis": "Habiburrahman El Shirazy",
        "tahun": 2004,
        "cover": "https://upload.wikimedia.org/wikipedia/id/thumb/b/b4/Ayatayatcinta.jpg/330px-Ayatayatcinta.jpg",
        "isi": "Isi dari Ayat-Ayat Cinta...",
        "link":"",
    },
    {
        "id": 7,
        "judul": "Sang Pemimpi",
        "penulis": "Andrea Hirata",
        "tahun": 2006,
        "cover": "https://upload.wikimedia.org/wikipedia/id/8/89/Sang_Pemimpi_sampul.jpg",
        "isi": "Isi dari Sang Pemimpi...",
        "link":"",
    },
    {
        "id": 8,
        "judul": "Rectoverso",
        "penulis": "Dee Lestari",
        "tahun": 2008,
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1222564447i/4815886.jpg",
        "isi": "Isi dari Rectoverso...",
        "link":"",
    },
    {
        "id": 9,
        "judul": "Perahu Kertas",
        "penulis": "Dee Lestari",
        "tahun": 2009,
        "cover": "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/31752/100792/1.jpg",
        "isi": "Isi dari Perahu Kertas...",
        "link":"",
    },
    {
        "id": 10,
        "judul": "Tetralogi Pulau Buru: Rumah Kaca",
        "penulis": "Pramoedya Ananta Toer",
        "tahun": 1988,
        "cover": "https://perpol.sman1kdg.sch.id/assets/buku/19b9a9da49632295c8113371740ffcee.png",
        "isi": "Isi dari Rumah Kaca...",
        "link":"",
    },
    {
        "id": 11,
        "judul": "Gajah Mada: Hamukti Palapa",
        "penulis": "Langit Kresna Hariadi",
        "tahun": 2004,
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1476002409i/1439771.jpg",
        "isi": "Isi dari Gajah Mada: Hamukti Palapa...",
        "link":"",  
    },
    {
        "id": 12,
        "judul": "5 cm",
        "penulis": "Donny Dhirgantoro",
        "tahun": 2005,
        "cover": "https://cdn.gramedia.com/uploads/picture_meta/2023/12/22/2hegsxjpmzzanpbrp6erk9.jpg",
        "isi": "Isi dari 5 cm...",
        "link":"",
    },
    {
        "id": 13,
        "judul": "Pulang",
        "penulis": "Leila S. Chudori",
        "tahun": 2012,
        "cover": "https://cdn.gramedia.com/uploads/picture_meta/2023/12/20/xoid3bznddxudnurccgqxi.jpg",
        "isi": "Isi dari Pulang...",
        "link":"",
    },
    {
        "id": 14,
        "judul": "Dilan: Dia Adalah Dilanku Tahun 1990",
        "penulis": "Pidi Baiq",
        "tahun": 2014,
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgCYehingRhbEfbXXUpEzP2kCrFO-SLtlag&s",
        "isi": "Isi dari Dilan: Dia Adalah Dilanku Tahun 1990...",
        "link":"",
    },
    {
        "id": 15,
        "judul": "Garis Waktu",
        "penulis": "Fiersa Besari",
        "tahun": 2016,
        "cover": "https://cdn.gramedia.com/uploads/items/Garis_waktu.jpg",
        "isi": "Isi dari Garis Waktu...",
        "link":"",
    },
    {
        "id": 16,
        "judul": "Selamat Tinggal",
        "penulis": "Tere Liye",
        "tahun": 2020,
        "cover": "https://cdn.gramedia.com/uploads/items/selamat_tinggal.jpg",
        "isi": "Isi dari Selamat Tinggal...",
        "link":"",
    },
    {
        "id": 17,
        "judul": "Hujan",
        "penulis": "Tere Liye",
        "tahun": 2016,
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1451905281i/28446637.jpg",
        "isi": "Isi dari Hujan...",
        "link":"",
    },
    {
        "id": 18,
        "judul": "Si Anak Pelangi",
        "penulis": "Tere Liye",
        "tahun": 2014,
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1615742267i/57407023.jpg",
        "isi": "Isi dari Si Anak Pelangi...",
        "link":"",
    },
    {
        "id": 19,
        "judul": "Api Tauhid",
        "penulis": "Habiburrahman El Shirazy",
        "tahun": 2014,
        "cover": "https://bukurepublika.id/wp-content/uploads/2019/02/api-tauhid.jpg",
        "isi": "Isi dari Api Tauhid...",
        "link":"",
    },
    {
        "id": 20,
        "judul": "Rindu",
        "penulis": "Tere Liye",
        "tahun": 2014,
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Gll9QXjPWc6cyJIYVS8DGzO-LMREDI4iWA&s",
        "isi": "Isi dari Rindu...",
        "link":"",
    },
    {
        "id": 21,
        "judul": "Orang-Orang Biasa",
        "penulis": "Andrea Hirata",
        "tahun": 2019,
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VpIGNwtoCkhfwnlrKtmPa4e5N_xlPAK6Gw&s",
        "isi": "Isi dari Orang-Orang Biasa...",
        "link":"",
    },
    {
        "id": 22,
        "judul": "Anak Semua Bangsa",
        "penulis": "Pramoedya Ananta Toer",
        "tahun": 1981,
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwz2YcS0h-_n6L5TcktIeoh6MGD5_wt8Z7_g&s",
        "isi": "Isi dari Anak Semua Bangsa...",
        "link":"",
    },
    {
        "id": 23,
        "judul": "Cantik Itu Luka",
        "penulis": "Eka Kurniawan",
        "tahun": 2002,
        "cover": "https://inc.mizanstore.com/aassets/img/com_cart/produk/covGRM-189.jpg",
        "isi": "Isi dari Cantik Itu Luka...",
        "link":"",
    },
    {
        "id": 24,
        "judul": "Suti",
        "penulis": "Sapardi Djoko Damono",
        "tahun": 2015,
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485408612i/27393777.jpg",
        "isi": "Isi dari Suti...",
        "link":"",
    },
    {
        "id": 25,
        "judul": "Para Priyayi",
        "penulis": "Umar Kayam",
        "tahun": 1992,
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1484380572i/984819.jpg",
        "isi": "Isi dari Para Priyayi...",
        "link":"",
    },
    {
        "id": 26,
        "judul": "Aku",
        "penulis": "Chairil Anwar",
        "tahun": 1943,
        "cover": "https://bukurepublika.id/wp-content/uploads/2019/02/api-tauhid.jpg",
        "isi": "Isi dari Aku...",
        "link":"",
    },
    {
        "id": 27,
        "judul": "Karya Agung",
        "penulis": "Sapardi Djoko Damono",
        "tahun": 1996,
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPwZkgxV2DdT2dBSjcr5PdZ7V0-kNfjFgjA&s",
        "isi": "Isi dari Karya Agung...",
        "link":"",
    },
    {
        "id": 28,
        "judul": "Manusia Setengah Salmon",
        "penulis": "Raditya Dika",
        "tahun": 2010,
        "cover": "https://upload.wikimedia.org/wikipedia/id/2/2f/Manusia_Setengah_Salmon.jpg",
        "isi": "Isi dari Manusia Setengah Salmon...",
        "link":"",
    },
    {
        "id": 29,
        "judul": "Kambing Jantan",
        "penulis": "Raditya Dika",
        "tahun": 2007,
        "cover": "https://cdn.gramedia.com/uploads/items/9789797808952C_9789797808952.jpg",
        "isi": "Isi dari Kambing Jantan...",
        "link":"",
    },
    {
        "id": 30,
        "judul": "Cinta dan Logika",
        "penulis": "Sandy Tumiwa",
        "tahun": 2021,
        "cover": "https://i.pinimg.com/474x/9d/04/c9/9d04c9ef41b1ebb8b1f130327f108840.jpg",
        "isi": "Isi dari Cinta dan Logika...",
        "link":"",
    },
    {
      "id": 31,
      "judul": "Sirkus Pohon",
      "penulis": "Andrea Hirata",
      "tahun": 2016,
      "cover": "https://cdn.gramedia.com/uploads/items/cover-sirkus-pohon.jpg",
      "isi": "isi dari sirkus pohon",
      "link":"",
    },
    {
      "id": 32,
      "judul": "Dua garis biru",
      "penulis": "Lcia Pradini",
      "tahun": 2019,
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562035459l/52243156.jpg",
      "isi": "isi dari sirkus pohon",
      "link": "https://books.google.co.id/books/about/Dua_Garis_Biru.html?id=AHOpDwAAQBAJ&redir_esc=y",
    },
];


function displayBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';

  books.forEach((book) => {
      const bookDiv = document.createElement('div');
      bookDiv.innerHTML = `
          <img src="${book.cover}" alt="${book.judul}">
          <h2>${book.judul}</h2>
          <p>Penulis: ${book.penulis}</p>
          <p>Tahun: ${book.tahun}</p>
          <button onclick="showBookDetail(${book.id})">Baca</button>
      `;
      bookList.appendChild(bookDiv);
  });
}

function showBookDetail(id) {
  const book = books.find(b => b.id === id);
  if (book) {
      // Arahkan pengguna ke link buku
      window.location.href = book.link; // Mengarahkan ke URL buku
  }
}

// Memanggil fungsi untuk menampilkan buku saat halaman dimuat
displayBooks();
