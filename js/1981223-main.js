const BASE_URL = "https://web1-api.vercel.app/api";
const api = {
  products: `${BASE_URL}/products`,
  news: `${BASE_URL}/news`,
  aboutus: `${BASE_URL}/aboutus`,
  visions: `${BASE_URL}/visions`,
  team: `${BASE_URL}/team`,
  testimonials: `${BASE_URL}/testimonials`,
};
const templates = {
  productListTemplate: "products-template",
  newsListTemplate: "news-template",
  aboutUsTemplate: "aboutus-template",
  visionsListTemplate: "our-vision-template",
  ourTeamListTemplate: "our-team-template",
  testimonialsListTemplate: "testimonials-template",
};
const views = {
  productSection: "section-products",
  newsSection: "section-news",
  aboutSection: "section-aboutus",
  visionSection: "section-our-vision",
  ourTeamSection: "section-our-team",
  testimonialsSection: "section-testimonials",
};

async function getProducts() {
  const res = await fetch(api.products);
  const data = await res.json();
  var source = document.getElementById(templates.productListTemplate).innerHTML;
  var template = Handlebars.compile(source);
  var context = { data: data };
  var html = template(context);
  document.getElementById(views.productSection).innerHTML = html;
}

async function getNews() {
  const res = await fetch(api.news);
  const data = await res.json();
  var source = document.getElementById(templates.newsListTemplate).innerHTML;
  var template = Handlebars.compile(source);
  var context = { data: data };
  var html = template(context);
  document.getElementById(views.newsSection).innerHTML = html;
}

async function getAboutUs() {
  const res = await fetch(api.aboutus);
  const data = await res.json();
  var source = document.getElementById(templates.aboutUsTemplate).innerHTML;
  var template = Handlebars.compile(source);
  var context = { data: data };
  var html = template(context);
  document.getElementById(views.aboutSection).innerHTML = html;
}

async function getOurTeams() {
  const res = await fetch(api.team);
  const data = await res.json();
  var source = document.getElementById(templates.ourTeamListTemplate).innerHTML;
  var template = Handlebars.compile(source);
  var context = { data: data };
  var html = template(context);
  document.getElementById(views.ourTeamSection).innerHTML = html;
}

async function getVisions() {
  const res = await fetch(api.visions);
  const data = await res.json();
  var source = document.getElementById(templates.visionsListTemplate).innerHTML;
  var template = Handlebars.compile(source);
  var context = { data: data };
  var html = template(context);
  document.getElementById(views.visionSection).innerHTML = html;
}
async function getTestimonials() {
  const res = await fetch(api.testimonials);
  const data = await res.json();
  var source = document.getElementById(
    templates.testimonialsListTemplate
  ).innerHTML;
  var template = Handlebars.compile(source);
  var context = { data: data };
  var html = template(context);
  document.getElementById(views.testimonialsSection).innerHTML = html;
}
async function getList(subUrl, idTemplate, idSection) {
  const res = await fetch(`${BASE_URL}/${subUrl}`);
  const data = await res.json();
  var source = document.getElementById(idTemplate).innerHTML;
  var template = Handlebars.compile(source);
  var context = { data: data };
  var html = template(context);
  document.getElementById(idSection).innerHTML = html;
}
async function handleLoadReadMore(urlGetById, idTemplate, idView) {
  const res = await fetch(`${BASE_URL}/${urlGetById}`);
  const data = await res.json();
  var source = document.getElementById(idTemplate).innerHTML;
  var template = Handlebars.compile(source);
  var context = { data: data };
  var html = template(context);
  document.getElementById(idView).innerHTML = html;
}
function handleToggleImage(self, imagePath, isHover = true) {
  self.src = isHover
    ? imagePath.replace(".", "-active.")
    : imagePath.replace("-active.", ".");
  self.nextElementSibling.classList.toggle("web1-text-blue");
}
