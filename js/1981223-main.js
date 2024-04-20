const reCaptchaKey = "6Lcrb8EpAAAAAI4c3yBKYGtTsS0kfJQfCQs0h7Ob";
const HOST = "https://web1-api.vercel.app";
const BASE_URL = `${HOST}/api`;
const api = {
  products: `${BASE_URL}/products`,
  news: `${BASE_URL}/news`,
  aboutus: `${BASE_URL}/aboutus`,
  visions: `${BASE_URL}/visions`,
  team: `${BASE_URL}/team`,
  testimonials: `${BASE_URL}/testimonials`,
  login: `${HOST}/users/authenticate`,
  sendMail: `${HOST}/users/send`,
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

  console.log("aaaa", data);
  var source = document.getElementById(idTemplate).innerHTML;
  var template = Handlebars.compile(source);
  var context = { data: data };
  var html = template(context);
  document.getElementById(idSection).innerHTML = html;
}

async function getListBlogs(subUrl, idTemplate, idSection, page = undefined) {
  const res = await fetch(`${BASE_URL}/${subUrl}`);
  const data = await res.json();
  const blogs = data?.data || [];

  const currentPage = page ? parseInt(`${page}`) : 1;
  var source = document.getElementById(idTemplate).innerHTML;
  var template = Handlebars.compile(source);
  var context = { data: blogs, currentPage, pageCount: data?.pageCount || 0 };
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

async function getAuthenticateToken(username, password) {
  const res = await fetch(api.login, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const rs = await res.json();
  if (res.status == 200) {
    return rs.token;
  }
  throw Error(res.message);
}
function reCaptcha(fnCbSuccess = undefined, fnCbError = undefined) {
  grecaptcha.enterprise.ready(async () => {
    const token = await grecaptcha.enterprise.execute(reCaptchaKey, {
      action: "submit",
    });
    let response = await fetch("verify.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ "g-token": token }),
    });

    if (response.status == 200) {
      if (fnCbSuccess) fnCbSuccess();
    } else {
      if (fnCbError) fnCbError();
    }
  });
}

async function sendMail(
  postData,
  token,
  fnCbSuccess = undefined,
  fnCbError = undefined
) {
  const res = await fetch(api.sendMail, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(postData),
  });
  const rs = await res.json();
  if (response.status == 200) {
    if (fnCbSuccess) fnCbSuccess(rs.message);
  } else {
    if (fnCbError) fnCbError(rs.message);
  }
}
