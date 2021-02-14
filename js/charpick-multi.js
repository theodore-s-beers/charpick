const charDisplay = document.getElementById("charInput");

function copyChar() {
  if (charDisplay.value.length > 0) {
    const success = "Copied: " + charDisplay.value;
    charDisplay.select();
    charDisplay.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
    charDisplay.blur();
    $("#copyButton").tooltip("enable");
    $("#copyButton").attr("data-original-title", success).tooltip("show");
    $("#copyButton").tooltip("disable");
  }
}

$("#buttonsGalore").on("click", ".btn", function () {
  const selectedChar = $(this).val();
  charDisplay.value += selectedChar;
  charDisplay.focus();
});

$("#copyButton").on("click", copyChar);

$("#backspaceButton").on("click", function () {
  if (charDisplay.value.length > 0) {
    charDisplay.value = charDisplay.value.slice(0, -1);
  }
  if (charDisplay.value.length > 0) {
    charDisplay.focus();
  }
});

$("#clearButton").on("click", function () {
  charDisplay.value = "";
});

charDisplay.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    copyChar();
  }
});
