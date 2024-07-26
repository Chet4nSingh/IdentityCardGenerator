function handleGenerate() {
  const studentName = document.querySelector("#input-name").value;
  const college = document.querySelector("#input-college").value;
  const location = document.querySelector("#input-location").value;
  const image = document.querySelector("#input-image").files[0];
  if (studentName && college && location && image) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.querySelector(
        "#image"
      ).style.backgroundImage = `url(${e.target.result})`;
    };
    reader.readAsDataURL(image);
    document.querySelector(".name").textContent = studentName;
    document.querySelector(".college").textContent = college;
    document.querySelector(".location").textContent = location;
    
  } else {
    alert("Please provide all the input and try again.");
  }
}

document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    handleGenerate();
    const card = document.querySelector('#card');
    card.classList.remove('hidden');
    card.style.animation = 'appear 500ms';
});
