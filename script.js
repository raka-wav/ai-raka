const brain = {
  hello: "Hello artinya halo. Contoh: Hello, how are you?",
  cat: "Cat artinya kucing.",
  love: "Love artinya cinta."
};

function ask() {
  const input = document.getElementById("userInput");
  const text = input.value.toLowerCase();
  input.value = "";

  addChat("user", text);

  let answer = "";

  /* ===================== INTENT ===================== */

  // bingung / curhat belajar
  if (
    text.includes("bingung") ||
    text.includes("ga ngerti") ||
    text.includes("susah") ||
    text.includes("capek")
  ) {
    answer =
      "Tenang ya 😊 belajar itu proses. Bilangin aku bagian mana yang bikin kamu bingung, nanti kita bahas pelan-pelan.";
  }

  // minta arti / meaning
  if (
    text.includes("arti") ||
    text.includes("artinya") ||
    text.includes("meaning")
  ) {
    for (let key in brain) {
      if (text.includes(key)) {
        answer = brain[key];
        break;
      }
    }
  }

  // tanya belajar umum
  if (
    text.includes("belajar") ||
    text.includes("grammar") ||
    text.includes("bahasa inggris")
  ) {
    answer =
      "Belajar bahasa Inggris paling enak mulai dari kosa kata dasar, lalu latihan kalimat. Mau mulai dari vocab, grammar, atau speaking?";
  }

  // fallback vocab otomatis
  if (answer === "") {
    for (let key in brain) {
      if (text.includes(key)) {
        answer = brain[key];
        break;
      }
    }
  }

  // fallback pintar
  if (answer === "") {
    answer =
      "Aku belum sepenuhnya yakin jawabannya 🤔 Tapi kamu bisa tanya arti kata, contoh kalimat, atau minta bantuan belajar bahasa Inggris.";
  }

  setTimeout(() => {
    addChat("bot", answer);
  }, 500);
}
