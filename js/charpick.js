$('[data-toggle="tooltip"]').tooltip();
$("button").on("click", function () {
  const myChar = $(this).val();
  const success = "Copied: " + myChar;
  const failure = "Failed to copy: " + myChar;
  const reset = "";
  navigator.clipboard
    .writeText(myChar)
    .then(() => {
      $(this).attr("data-original-title", success).tooltip("show");
      $(this).blur();
      $(this).attr("data-original-title", reset);
    })
    .catch(() => {
      $(this).attr("data-original-title", failure).tooltip("show");
      $(this).blur();
      $(this).attr("data-original-title", reset);
    });
});
