const translateMorse = async (e) => {
  e.preventDefault();
  const str = document.querySelector(".morse-input");
  const resultDiv = document.querySelector(".result");
  const file = await fetch("./morse-code.json").then((response) =>
    response.json()
  );
  const result = str.value
    .split(" / ")
    .reduce(
      (acc, elem) =>
        acc +
        " " +
        elem
          .split(" ")
          .reduce(
            (acc, elem) =>
              acc + Object.keys(file)[Object.values(file).indexOf(elem)],
            ""
          ),
      ""
    );
  resultDiv.innerText = result;
  str.value = "";
};

const form = document.querySelector(".translate-form");
form.addEventListener("submit", translateMorse);
