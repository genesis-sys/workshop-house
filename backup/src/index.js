function onOff() {
  document.querySelector("#modal").classList.toggle("hide");

  document.querySelector("body").classList.toggle("hideScroll");

  document.querySelector("#modal").classList.toggle("addScroll");
}
function checkFields(event) {
  // const { title, image, category, description, link } = event.target

  const valuesToCheck = ["title", "image", "category", "description", "link"];

  const isEmpty = valuesToCheck.find((value) => {
    const checkIfIsString = typeof event.target[value].value === "string";
    const checkIfIsEmpty = !event.target[value].value.trim();

    console.log(checkIfIsString, checkIfIsEmpty);

    if (checkIfIsString && checkIfIsEmpty) {
      return true;
    }
  });

  console.log(isEmpty);

  if (isEmpty) {
    event.preventDefault();
    alert("Preencha todos os campos");
  }
}
