const input_data = document.querySelector(".display_input");
const output_data = document.querySelector(".display_output");

const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  console.log(input_data.innerText);
  fetch(
    "https://api.funtranslations.com/translate/ferb-latin.json" +
      "?" +
      "text=" +
      input_data.nodeValue
  )
    .then((response) => response.json())
    .then((json) => {
      var translated = json.contents.translated;
      output_data.innerText = translated;
    });
});
