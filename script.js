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

  let answer = "Maaf, aku belum ngerti 😅";

  for (let key in brain) {
    if (text.includes(key)) {
      answer = brain[key];
    }
  }

  setTimeout(() => {
    addChat("bot", answer);
  }, 500);
}

function addChat(type, text) {
  const chat = document.getElementById("chat");
  const div = document.createElement("div");
  div.className = type;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}
window.onload = () => {
  addChat("bot", "Halo 👋 ada yang bisa dibantu? Aku AI Raka 🤖");
};
