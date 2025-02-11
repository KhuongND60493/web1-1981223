const reCaptchaKey = "6Lcrb8EpAAAAAI4c3yBKYGtTsS0kfJQfCQs0h7Ob";
const HOST = "https://web1-api.vercel.app";
const keyAccessToken = "1981223_ACCESSTOKEN";
const BASE_URL = `${HOST}/api`;
const api = {
  products: `products`,
  news: `news`,
  aboutus: `aboutus`,
  visions: `visions`,
  team: `team`,
  testimonials: `testimonials`,
  login: `${HOST}/users/authenticate`,
  verifyAuthentication: `${HOST}/users/verify`,
  sendMail: `${HOST}/users/send`,
  sendBlogComment: `${HOST}/users/comment`,
  search: `search?keyword=`,
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
  getList(api.products, templates.productListTemplate, views.productSection);
}

async function getNews() {
  getList(api.news, templates.newsListTemplate, views.newsSection);
}

async function getAboutUs() {
  getList(api.aboutus, templates.aboutUsTemplate, views.aboutSection);
}

async function getOurTeams() {
  getList(api.team, templates.ourTeamListTemplate, views.ourTeamSection);
}

async function getVisions() {
  getList(api.visions, templates.visionsListTemplate, views.visionSection);
}
async function getTestimonials() {
  getList(api.testimonials, templates.testimonialsListTemplate, views.testimonialsSection);
}
async function getList(subUrl, idTemplate, idSection) {
  const res = await fetch(`${BASE_URL}/${subUrl}`);
  const data = await res.json();
  var template = Handlebars.templates[`${idTemplate}.hbs`];
  var context = { data: data };
  var html = template(context);
  document.getElementById(idSection).innerHTML = html;
}

async function getListBlogs(subUrl, idTemplate, idSection, page = undefined) {
  const res = await fetch(`${BASE_URL}/${subUrl}`);
  const data = await res.json();
  const blogs = data?.data || [];

  const currentPage = page ? parseInt(`${page}`) : 1;
  var template = Handlebars.templates[`${idTemplate}.hbs`];
  var context = { data: blogs, currentPage, pageCount: data?.pageCount || 0 };
  var html = template(context);
  document.getElementById(idSection).innerHTML = html;
}
async function getDetailByType(urlGetById, idTemplate, idView) {
  const res = await fetch(`${BASE_URL}/${urlGetById}`);
  const data = await res.json();
  var template = Handlebars.templates[`${idTemplate}.hbs`];
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
  throw Error(rs.message);
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
  const response = await fetch(api.sendMail, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(postData),
  });
  const rs = await response.json();
  if (response.status == 200) {
    if (fnCbSuccess) fnCbSuccess(rs.message);
  } else {
    if (fnCbError) fnCbError(rs.message);
  }
}

function onLogin(e) {
  e.preventDefault();
  let notiMsg = document.getElementById("errorMessage");
  login(
    document.getElementById("username").value,
    document.getElementById("password").value,
    function (msg) {
      showLoginLogoutLink(true);
      document.getElementsByClassName("btn-close")[0].click();
    },
    function (msg) {
      notiMsg.innerHTML = msg;
      notiMsg.className = "text-danger";
    }
  );
}
async function login(username, password, fnCbSuccess = undefined, fnCbError) {
  try {
    const response = await getAuthenticateToken(username, password);
    saveAccessToken(response);
    if (fnCbSuccess) fnCbSuccess("login successfully");
  } catch (error) {
    if (fnCbError) fnCbError(error);
  }
}

async function verifyAuthentication() {
  const token = getAccessToken();
  if (token) {
    try {
      const res = await fetch(api.verifyAuthentication, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const rs = await res.json();
      if (res.status == 200) {
        showLoginLogoutLink(true);
      } else {
        localStorage.clear();
        showLoginLogoutLink(false);
      }
    } catch (error) {
      showLoginLogoutLink(false);
      localStorage.clear();
    }
  } else {
    localStorage.clear();
    showLoginLogoutLink(false);
  }
}
function logout() {
  localStorage.clear();
  showLoginLogoutLink(false);
}

function saveAccessToken(token) {
  localStorage.setItem(keyAccessToken, token);
}

function getAccessToken() {
  return localStorage.getItem(keyAccessToken);
}
function showCommens() {
  showLoginLogoutLink(getAccessToken() != null);
}
function showLoginLogoutLink(isLoginned = false) {
  let linksLogin = document.getElementsByClassName("linkLogin");
  let linksLogout = document.getElementsByClassName("linkLogout");
  let leaveComments = document.getElementById("leave-comments");
  let displayLogin = "block";
  let displayLogout = "none";
  if (isLoginned) {
    displayLogin = "none";
    displayLogout = "block";
  }
  for (let i = 0; i < linksLogin.length; i++) {
    linksLogin[i].style.display = displayLogin;
    linksLogout[i].style.display = displayLogout;
  }
  if (leaveComments) {
    leaveComments.style.display = displayLogout;
  }
}

async function sendBlogComment(
  postData,
  fnCbSuccess = undefined,
  fnCbError = undefined
) {
  const response = await fetch(api.sendBlogComment, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + getAccessToken(),
    },
    body: JSON.stringify(postData),
  });
  const rs = await response.json();
  if (response.status == 200) {
    if (fnCbSuccess) fnCbSuccess(rs.message);
  } else {
    if (fnCbError) fnCbError(rs.message);
  }
}

async function searchWithKeyword(keyword, idTemplate, idSection) {
  getList(`${api.search}${keyword}`,idTemplate,idSection);
}
