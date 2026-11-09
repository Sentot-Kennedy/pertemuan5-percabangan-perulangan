// Tugas Pemrograman Web
// Nama          : Sandy Viandhito
// NIM           : 25533974
// Program Studi : Teknik Informatika

const inputNilai = document.getElementById("inputNilai");
const btnCek = document.getElementById("btnCek");
const btnReset = document.getElementById("btnReset");
const pesan = document.getElementById("pesan");
const areaHasil = document.getElementById("areaHasil");
const isiHasil = document.getElementById("isiHasil");

// Percabangan (if-else): menentukan predikat berdasarkan nilai
function tentukanPredikat(teks) {
  // Cek apakah input kosong atau bukan angka
  if (teks === "" || isNaN(teks)) {
    return "Data tidak valid";
  }

  const nilai = Number(teks);

  if (nilai < 0 || nilai > 100) {
    return "Data tidak valid";
  } else if (nilai >= 85) {
    return "A";
  } else if (nilai >= 75) {
    return "B";
  } else if (nilai >= 60) {
    return "C";
  } else if (nilai >= 50) {
    return "D";
  } else {
    return "E";
  }
}

function prosesNilai() {
  const teks = inputNilai.value.trim();

  if (teks === "") {
    pesan.textContent = "Masukkan minimal satu nilai terlebih dahulu.";
    areaHasil.hidden = true;
    return;
  }

  pesan.textContent = "";
  isiHasil.innerHTML = "";

  // Ambil data input yang dipisahkan koma
  const daftarNilai = teks.split(",");

  // Perulangan (for): memproses nilai satu per satu
  for (let i = 0; i < daftarNilai.length; i++) {
    const item = daftarNilai[i].trim();
    const predikat = tentukanPredikat(item);

    const baris = document.createElement("tr");

    const kolomNo = document.createElement("td");
    kolomNo.textContent = i + 1;

    const kolomInput = document.createElement("td");
    kolomInput.textContent = item === "" ? "(kosong)" : item;

    const kolomPredikat = document.createElement("td");
    const badge = document.createElement("span");
    badge.textContent = predikat;
    badge.className = "badge " + (predikat.length === 1 ? predikat : "invalid");
    kolomPredikat.appendChild(badge);

    baris.appendChild(kolomNo);
    baris.appendChild(kolomInput);
    baris.appendChild(kolomPredikat);
    isiHasil.appendChild(baris);
  }

  areaHasil.hidden = false;
}

function resetForm() {
  inputNilai.value = "";
  pesan.textContent = "";
  isiHasil.innerHTML = "";
  areaHasil.hidden = true;
  inputNilai.focus();
}

btnCek.addEventListener("click", prosesNilai);
btnReset.addEventListener("click", resetForm);
inputNilai.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    prosesNilai();
  }
});
