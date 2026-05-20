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

    document.querySelector('a[href="#services"]').textContent = "Services";
    document.querySelector('a[href="#works"]').textContent = "Portfolio";
    document.querySelector('a[href="#system"]').textContent = "System";
    document.querySelector('a[href="#contact"]').textContent = "Contact";

    document.querySelector(".hero h1").innerHTML =
    'We Don’t Do Marketing,<br>We Turn Traffic Into<br><span>Cash Flow.</span>';

    document.querySelector(".hero-text").textContent =
    "Jenny Leadflow Marketing helps brands turn traffic into real customers.";

    document.querySelector(".header-cta").textContent =
    "Free Traffic Audit";

    langToggle.textContent = "中文";

    isEnglish = true;

  }else{

    document.querySelector('a[href="#services"]').textContent = "服務";
    document.querySelector('a[href="#works"]').textContent = "作品";
    document.querySelector('a[href="#system"]').textContent = "成交系統";
    document.querySelector('a[href="#contact"]').textContent = "聯絡";

    document.querySelector(".hero h1").innerHTML =
    '不是做行銷，<br>是把流量變成<br><span>現金流。</span>';

    document.querySelector(".hero-text").textContent =
    "傑倪引流行銷協助品牌從流量到成交。";

    document.querySelector(".header-cta").textContent =
    "免費流量健檢";

    langToggle.textContent = "EN";

    isEnglish = false;
  }

});
