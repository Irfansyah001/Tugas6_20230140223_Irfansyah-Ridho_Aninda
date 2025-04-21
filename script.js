let audioPlayed = false; // Menyimpan status apakah audio sudah pernah diputar atau belum

document.getElementById("bitcoinAudio").addEventListener("play", function () { // Menambahkan event listener saat audio mulai diputar
  if (!audioPlayed) { // Jika audio belum pernah diputar sebelumnya
    Swal.fire({ // Tampilkan popup menggunakan SweetAlert
      title: "Playing Audio", // Judul popup
      text: "You're now listening to Bitcoin explanation.", // Isi pesan popup
      icon: "info", // Ikon popup berupa info
      confirmButtonText: "Nice" // Teks tombol konfirmasi
    });
    audioPlayed = true; // Set agar audio dianggap sudah diputar, supaya popup tidak muncul lagi
  }
});