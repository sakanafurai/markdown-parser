window.onload = async () => {
  // await for ready
  await markdown.ready;

  $input.oninput = () => {
    // parse every input
    var md = markdown.parse($input.value);
    $output.innerHTML = md;
  };

  // run it once
  $input.oninput();
};

// Get header element
const header = document.querySelector("#header");

// Get toggle button element
const sideBtn = document.querySelector(".side-btn");

const sideBtnLabel = document.querySelector(".side-btn-label");

// initial value
header.classList.add("active");
sideBtnLabel.innerHTML="Hide Menu";

// If botton is clicked
sideBtn.addEventListener("click", () => {

  // toggle class "active"
  sideBtnLabel.classList.toggle("active");

  // if not "active", add "active" to class list
  if (!header.classList.contains("active")) {
    header.classList.add("active");
    sideBtnLabel.innerHTML="Hide Menu";
  } else {
    // else, remove "active"
    header.classList.remove("active");
    sideBtnLabel.innerHTML="Show Menu";
  }
});
