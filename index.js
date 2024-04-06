// index.js

// Mendapatkan elemen-elemen yang dibutuhkan
const historyElement = document.getElementById('history');
const inputElement = document.getElementById('input');
const tempResultElement = document.getElementById('tempResult');

let history = ''; // Menyimpan riwayat operasi
let input = ''; // Menyimpan input saat ini
let tempResult = ''; // Menyimpan hasil sementara

// Fungsi untuk menambah karakter ke input
function appendCharacter(char) {
    input += char;
    inputElement.textContent = input;
}

// Fungsi untuk membersihkan semua
function clearAll() {
    history = '';
    input = '';
    tempResult = '';
    updateDisplay();
}

// Fungsi untuk membersihkan input terakhir
function clearLastEntry() {
    input = '';
    updateDisplay();
}

// Fungsi untuk melakukan perhitungan
function calculate() {
    try {
        tempResult = eval(input);
        history = input + ' =';
        input = tempResult;
        updateDisplay();
    } catch (error) {
        input = 'Error';
        updateDisplay();
    }
}

// Fungsi untuk memperbarui tampilan
function updateDisplay() {
    historyElement.textContent = history;
    inputElement.textContent = input;
    tempResultElement.textContent = tempResult;
}
