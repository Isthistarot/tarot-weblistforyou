const services = [
    { titleRo: "Citire Tarot (30 minute)", titleEn: "Tarot Reading (30 minutes)", price: "150 RON | 33 EUR" },
    { titleRo: "Matrix Chart / Analiză Astrologică", titleEn: "Matrix Chart / Astrology Analysis", price: "200 RON | 44 EUR" },
    { titleRo: "Citire Generală", titleEn: "General Reading", price: "60 RON | 13 EUR" },
    { titleRo: "Citire Tarot (3 întrebări)", titleEn: "Tarot Reading (3 questions)", price: "33 RON | 11 EUR" },
    { titleRo: "Numerologie", titleEn: "Numerology", price: "88 RON | 55 EUR" },
    { titleRo: "Analiză Astrală", titleEn: "Astrological Analysis", price: "111 RON | 22 EUR" },
    { titleRo: "Tarot - Ghidare Spirituală", titleEn: "Tarot - Spiritual Guidance", price: "444 RON | 111 EUR" },
    { titleRo: "Cum să îți Vindeci Chakrele", titleEn: "How to Heal Your Chakras", price: "67 RON | 25 EUR" },
    { titleRo: "Mesaje de la Univers", titleEn: "Messages from the Universe", price: "44 RON | 14 EUR" },
    { titleRo: "Spiritual Journey cu Mine", titleEn: "Spiritual Journey with Me", price: "444 RON | 111 EUR" },
    { titleRo: "Matrix Chart cuplu", titleEn: "Couple Matrix Chart", price: "255 RON | 66 EUR" },
    { titleRo: "Carte PDF - Semnificații Tarot", titleEn: "PDF Book - Tarot Meanings", price: "99 RON | 33 EUR" }
];

let currentPage = 1;
const itemsPerPage = 5;
let language = "ro";

function renderServices() {
    const servicesList = document.getElementById("services-list");
    servicesList.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const displayedServices = services.slice(start, end);

    displayedServices.forEach(service => {
        const li = document.createElement("li");
        li.classList.add("service-item");
        li.innerHTML = <h3>${language === "ro" ? service.titleRo : service.titleEn}</h3><p class="price">${service.price}</p>;
        servicesList.appendChild(li);
    });

    document.getElementById("page-number").innerText = Pagina ${currentPage};
}

document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderServices();
    }
});

document.getElementById("next-page").addEventListener("click", () => {
    if (currentPage * itemsPerPage < services.length) {
        currentPage++;
        renderServices();
    }
});

document.getElementById("language-toggle").addEventListener("click", () => {
    language = language === "ro" ? "en" : "ro";
    document.getElementById("language-toggle").innerText = language === "ro" ? "🇬🇧 English" : "🇷🇴 Română";
    renderServices();
});

renderServices();
