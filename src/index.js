import FetchWrapper from "./fetch-wrapper";

const API = new FetchWrapper("https://v6.exchangerate-api.com/v6/");
const cards = document.querySelectorAll(".card")
console.log(cards)

// API.get("/codes")
// .then((data) => {
//   console.log(data.supported_codes.map(item => item[1]));
// });

document
  .querySelectorAll(".basecurrency-container .cards .card")
  .forEach((card) => {
    card.addEventListener("click", (event) => {
      // remove the previous active currency
      document
        .querySelector(".basecurrency-container .cards .card.active")
        ?.classList.remove("active");

      // mark select currency as active
      const activeCard = event.currentTarget.classList.add("active");
      console.log(activeCard);

      //unhide the Select Target Currency container and Track Exchange Rate button
      document.querySelector(".target-currency-container").style.display = "";
      document.querySelector(".exchange-rate").style.display = "";

      //disable the Base currency that has been selected in Target currencies
    });
  });
