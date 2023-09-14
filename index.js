function hitungLuas() {
    // Mengambil nilai dari input field
    var angka = parseFloat(document.getElementById("InputLuas").value);

    // Memeriksa apakah nilai adalah angka yang valid
    if (!isNaN(angka)) {
        // Menghitung hasil perkalian
        var hasilLuas = angka * angka;

        // Menampilkan hasil luas dalam format "L = hasil"
        document.getElementById("rumusLuas").textContent = "L = S x S";
        document.getElementById("perhitunganLuas").textContent = "L = " + angka + " x " + angka;
        document.getElementById("hasilLuas").textContent = "L = " + hasilLuas;
    } else {
        // Jika nilai tidak valid, tampilkan pesan kesalahan
        document.getElementById("rumusLuas").textContent = "";
        document.getElementById("perhitunganLuas").textContent = "";
        document.getElementById("hasilLuas").textContent = "Masukkan angka yang valid.";
    }


}

function HitungKeliling() {
    // Mengambil nilai dari input field
    var angka = parseFloat(document.getElementById("InputKeliling").value);

    // Memeriksa apakah nilai adalah angka yang valid
    if (!isNaN(angka)) {
        // Menghitung hasil penambahan
        var hasilKeliling = angka + angka + angka + angka;

        // Menampilkan hasil luas dalam format "K = hasil"
        document.getElementById("rumusKeliling").textContent = "K = S + S + S + S";
        document.getElementById("perhitunganKeliling").textContent = "K = " + angka + " + " + angka + " + " + angka + " + " + angka;
        document.getElementById("hasilKeliling").textContent = "K = " + hasilKeliling;
    } else {
        // Jika nilai tidak valid, tampilkan pesan kesalahan
        document.getElementById("rumusKeliling").textContent = "";
        document.getElementById("perhitunganKeliling").textContent = "";
        document.getElementById("hasilKeliling").textContent = "Masukkan angka yang valid.";
    }
}

function Ulang() {
    // Mengosongkan input dan hasil
    document.getElementById("InputLuas").value = "";
    document.getElementById("InputKeliling").value = "";
}

