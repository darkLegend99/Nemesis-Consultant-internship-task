const targetDiv = document.getElementById("Paris");
const btn = document.getElementById("userdatabtn");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};