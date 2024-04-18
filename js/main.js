
const BASE_URL='https://web1-api.vercel.app/api';
const api={
    products:`${BASE_URL}/products`,
    news:`${BASE_URL}/news`,
}
const templates={
    productListTemplate:'products-template',
    newsListTemplate:'news-template'
}
const views={
    productSection:'section-products',
    newsSection:'section-news'
}
async function getProducts(){
    const res=await fetch(api.products);
    const data=await res.json();
    var source = document.getElementById(templates.productListTemplate).innerHTML;
    var template = Handlebars.compile(source);
    var context = { data: data };
    var html = template(context);
    document.getElementById(views.productSection).innerHTML=html;
}
async function getNews(){
    const res=await fetch(api.news);
    const data=await res.json();
    var source = document.getElementById(templates.newsListTemplate).innerHTML;
    var template = Handlebars.compile(source);
    var context = { data: data };
    var html = template(context);
    document.getElementById(views.newsSection).innerHTML=html;
}