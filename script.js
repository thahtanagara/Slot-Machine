// Simbol untuk slot
const symbols = ["🍒", "🍋", "🍇", "🔔", "🍉"];

function playSlot() {
  const slot1 = document.getElementById("slot1");
  const slot2 = document.getElementById("slot2");
  const slot3 = document.getElementById("slot3");
  const winChance = parseInt(document.getElementById("winChance").value);

  // Tambahkan animasi spin ke setiap slot
  slot1.classList.add("spin");
  slot2.classList.add("spin");
  slot3.classList.add("spin");

  // Tentukan apakah pemain menang berdasarkan winChance
  const isWin = Math.random() * 100 < winChance;

  setTimeout(() => {
    if (isWin) {
      // Jika menang, semua slot akan memiliki simbol yang sama
      const winningSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      slot1.textContent = winningSymbol;
      slot2.textContent = winningSymbol;
      slot3.textContent = winningSymbol;
      document.getElementById("resultMessage").textContent = "🎉 You Win!";
    } else {
      // Jika kalah, hasil slot akan acak
      slot1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      slot2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      slot3.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      document.getElementById("resultMessage").textContent = "😢 Try Again!";
    }

    // Hapus kelas animasi setelah selesai
    slot1.classList.remove("spin");
    slot2.classList.remove("spin");
    slot3.classList.remove("spin");
  }, 500); // Waktu sesuai dengan durasi animasi
}
