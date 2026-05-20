const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.work-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  });
});
const langToggle = document.getElementById("lang-toggle");
let isEnglish = false;

langToggle.addEventListener("click", () => {

if(!isEnglish){

// 導覽列
document.querySelector('a[href="#services"]').textContent = "Services";
document.querySelector('a[href="#works"]').textContent = "Portfolio";
document.querySelector('a[href="#system"]').textContent = "System";
document.querySelector('a[href="#contact"]').textContent = "Contact";

// CTA
document.querySelector(".header-cta").textContent =
"Free Traffic Audit";

// Hero
document.querySelector(".hero h1").innerHTML =
'We Don’t Do Marketing,<br>We Turn Traffic Into<br><span>Cash Flow.</span>';

document.querySelector(".hero-text").textContent =
"Jenny Leadflow Marketing helps restaurants, brands, trophy businesses and local stores build a real conversion system — from visual attraction, social content and ad campaigns to direct-message closing.";

document.querySelector(".hero-actions .primary").textContent =
"Book Consultation";

document.querySelector(".hero-actions .ghost").textContent =
"View Portfolio";

// About
document.querySelector(".intro h2").innerHTML =
'The Market Is Not Missing Exposure,<br>It Is Missing Conversion.';

document.querySelector(".intro p:last-child").textContent =
"Many brands are not bad — they just look low value. We design not only visuals, but an entire conversion process.";

// Services title
document.querySelector("#services h2").innerHTML =
"We Provide More Than Services,<br>We Build Conversion Systems.";

// Services
const serviceTitles = document.querySelectorAll(".service-card h3");
serviceTitles[0].textContent = "Traffic Strategy";
serviceTitles[1].textContent = "Conversion Design";
serviceTitles[2].textContent = "Short-form Content";
serviceTitles[3].textContent = "Ad Management";
serviceTitles[4].textContent = "DM Closing Scripts";
serviceTitles[5].textContent = "Restaurant Growth";

// Works
document.querySelector("#works h2").textContent =
"Portfolio";

document.querySelector(".tab[data-filter='all']").textContent =
"All";
document.querySelector(".tab[data-filter='food']").textContent =
"Food";
document.querySelector(".tab[data-filter='brand']").textContent =
"Brand";
document.querySelector(".tab[data-filter='social']").textContent =
"Social";
document.querySelector(".tab[data-filter='package']").textContent =
"Packaging";
document.querySelector(".tab[data-filter='award']").textContent =
"Trophy";

// System
document.querySelector("#system h2").textContent =
"Conversion System";

// Contact
document.querySelector("#contact h2").innerHTML =
"Get a Free Traffic Audit,<br>Find Out What Stops Your Growth.";

document.querySelector(".contact-actions .primary").textContent =
"LINE Consultation";

document.querySelector(".contact-actions .ghost").textContent =
"Call Us";

// 按鈕切換
langToggle.textContent = "中文";
isEnglish = true;

}else{

location.reload();

}

});
