const cards = document.querySelector(".cards");

const words = [
    {
        en: "keep",
        ru: "держать"
    },
    {
        en: "recommend",
        ru: "рекомендовать"
    },
    {
        en: "prefer",
        ru: "предпочитать"
    },
    {
        en: "suggest",
        ru: "предлогать"
    },
    {
        en: "admit",
        ru: "признавать"
    },
];

words.forEach((word) => {
    const div = document.createElement("div");
    div.classList.add("card");
    const ruP = document.createElement("p");
    ruP.classList.add("ru", "hidden");
    const enP = document.createElement("p");
    enP.classList.add("en");

    enP.textContent = word.en;
    ruP.textContent = word.ru;
    div.append(ruP, enP);
    cards.append(div);

    div.addEventListener("click", () => {
        toggleLanguage(div);
    });
});

function toggleLanguage(card) {
    const ruP = card.querySelector(".ru");
    const enP = card.querySelector(".en");
  
    if (ruP.classList.contains("hidden")) {
      ruP.classList.remove("hidden");
      enP.classList.add("hidden");
    } else {
      ruP.classList.add("hidden");
      enP.classList.remove("hidden");
    }
}
