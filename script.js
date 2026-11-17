const form = document.getElementById("formKontak");
const info = document.getElementById("info");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const hp = document.getElementById("hp").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (nama === "" || hp === "" || pesan === "") {
    info.textContent = "Mohon isi semua kolom dulu.";
    info.className = "salah";
    return;
  }

  if (pesan.length < 10) {
    info.textContent = "Keluhan minimal 10 huruf.";
    info.className = "salah";
    return;
  }

  info.textContent = "Terima kasih, " + nama + ". Pesan Anda sudah tercatat.";
  info.className = "benar";
  form.reset();
});