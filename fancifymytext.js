function onBiggerClick() {
  const textArea = document.getElementById("text-input");
  textArea.style.fontSize = "24pt";
}

function onStyleChange() {
  const textArea = document.getElementById("text-input");
  const fancy = document.getElementById("fancy-radio").checked;

  if (fancy) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}
function onMooClick() {
  const textArea = document.getElementById("text-input");
  let text = textArea.value.toUpperCase();

  // Split sentences by "."
  let sentences = text.split(".");
  for (let i = 0; i < sentences.length; i++) {
    let words = sentences[i].trim().split(" ");
    if (words.length > 0 && words[0] !== "") {
      words[words.length - 1] = words[words.length - 1] + "-MOO";
      sentences[i] = words.join(" ");
    }
  }

  textArea.value = sentences.join(". ");
}
