var restaurantDatas = [
{
    title: "リラッ",
    catchcopy:"和洋中が織りなすハーモニー",
    largesrc:"./images/rilassa_01_restaurant2.jpg",
    smallsrc:"./images/thumbs/rilassa_01_restaurant2.jpg",
    description:"○○が○○ですごくおいしいです！特に○○は○○な食感で○○です",
    link:"http://www.tokyodome-hotels.co.jp/restaurants/rilassa/"
},
{
    title: "アーティストカフェ",
    catchcopy: "音楽と食を楽しむ",
    largesrc: "./images/artistscafe_happyvegetable_1510.jpg",
    smallsrc: "./images/thumbs/artistscafe_happyvegetable_1510.jpg",
    description: "名前がおしゃれです",
    link: "http://www.tokyodome-hotels.co.jp/restaurants/artistcafe/#hv"
},
{
    title: "リラッサ",
    catchcopy: "和洋中が織りなすハーモニー",
    largesrc: "./images/rilassa_01_restaurant2.jpg",
    smallsrc: "./images/thumbs/rilassa_01_restaurant2.jpg",
    description: "○○が○○ですごくおいしいです！特に○○は○○な食感で○○です",
    link: "http://www.tokyodome-hotels.co.jp/restaurants/rilassa/"
},
{
    title: "リラッサ",
    catchcopy: "和洋中が織りなすハーモニー",
    largesrc: "./images/rilassa_01_restaurant2.jpg",
    smallsrc: "./images/thumbs/rilassa_01_restaurant2.jpg",
    description: "○○が○○ですごくおいしいです！特に○○は○○な食感で○○です",
    link: "http://www.tokyodome-hotels.co.jp/restaurants/rilassa/"
},
{
    title: "リラッサ",
    catchcopy: "和洋中が織りなすハーモニー",
    largesrc: "./images/rilassa_01_restaurant2.jpg",
    smallsrc: "./images/thumbs/rilassa_01_restaurant2.jpg",
    description: "○○が○○ですごくおいしいです！特に○○は○○な食感で○○です",
    link: "http://www.tokyodome-hotels.co.jp/restaurants/rilassa/"
},
{
    title: "リラッサ",
    catchcopy: "和洋中が織りなすハーモニー",
    largesrc: "./images/rilassa_01_restaurant2.jpg",
    smallsrc: "./images/thumbs/rilassa_01_restaurant2.jpg",
    description: "○○が○○ですごくおいしいです！特に○○は○○な食感で○○です",
    link: "http://www.tokyodome-hotels.co.jp/restaurants/rilassa/"
},
{
    title: "リラッサ",
    catchcopy: "和洋中が織りなすハーモニー",
    largesrc: "./images/rilassa_01_restaurant2.jpg",
    smallsrc: "./images/thumbs/rilassa_01_restaurant2.jpg",
    description: "○○が○○ですごくおいしいです！特に○○は○○な食感で○○です",
    link: "http://www.tokyodome-hotels.co.jp/restaurants/rilassa/"
},
{
    title: "リラッサ",
    catchcopy: "和洋中が織りなすハーモニー",
    largesrc: "./images/rilassa_01_restaurant2.jpg",
    smallsrc: "./images/thumbs/rilassa_01_restaurant2.jpg",
    description: "○○が○○ですごくおいしいです！特に○○は○○な食感で○○です",
    link: "http://www.tokyodome-hotels.co.jp/restaurants/rilassa/"
},
{
    title: "リラッサ",
    catchcopy: "和洋中が織りなすハーモニー",
    largesrc: "./images/rilassa_01_restaurant2.jpg",
    smallsrc: "./images/thumbs/rilassa_01_restaurant2.jpg",
    description: "○○が○○ですごくおいしいです！特に○○は○○な食感で○○です",
    link: "http://www.tokyodome-hotels.co.jp/restaurants/rilassa/"
},
{
    title: "リラッサ",
    catchcopy: "和洋中が織りなすハーモニー",
    largesrc: "./images/rilassa_01_restaurant2.jpg",
    smallsrc: "./images/thumbs/rilassa_01_restaurant2.jpg",
    description: "○○が○○ですごくおいしいです！特に○○は○○な食感で○○です",
    link: "http://www.tokyodome-hotels.co.jp/restaurants/rilassa/"
},
{
    title: "リラッサ",
    catchcopy: "和洋中が織りなすハーモニー",
    largesrc: "./images/rilassa_01_restaurant2.jpg",
    smallsrc: "./images/thumbs/rilassa_01_restaurant2.jpg",
    description: "○○が○○ですごくおいしいです！特に○○は○○な食感で○○です",
    link: "http://www.tokyodome-hotels.co.jp/restaurants/rilassa/"
},
{
    title: "リラッサ",
    catchcopy: "和洋中が織りなすハーモニー",
    largesrc: "./images/rilassa_01_restaurant2.jpg",
    smallsrc: "./images/thumbs/rilassa_01_restaurant2.jpg",
    description: "○○が○○ですごくおいしいです！特に○○は○○な食感で○○です",
    link: "http://www.tokyodome-hotels.co.jp/restaurants/rilassa/"
},
];

var outputHTML = ""
restaurantDatas.forEach(
    function (restaurantData) {
        var text = "";
        console.log(restaurantData);
        text += "<li>";
        text += "<a href\"" + restaurantData.link + "\" ";
        for (var param in restaurantData) {
            text += "data-" + param + "=\"" + restaurantData[param] + "\" ";
        }
        text += ">"
        text += "<img src=\"" + restaurantData.smallsrc + "\" alt=\"" + restaurantData.title + "\">";
        text += "<span>" + restaurantData.title + "</span>"
        text += "</a>";
        text += "</li>";
        outputHTML += text;
    }
);
document.getElementById("og-grid").innerHTML = outputHTML;
!function(n,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():n.transformicons=r()}(this||window,function(){"use strict";var n={},r="tcon-transform",t={transform:["click"],revert:["click"]},e=function(n){return"string"==typeof n?Array.prototype.slice.call(document.querySelectorAll(n)):"undefined"==typeof n||n instanceof Array?n:[n]},o=function(n){return"string"==typeof n?n.toLowerCase().split(" "):n},f=function(n,r,f){var c=(f?"remove":"add")+"EventListener",u=e(n),s=u.length,a={};for(var l in t)a[l]=r&&r[l]?o(r[l]):t[l];for(;s--;)for(var d in a)for(var v=a[d].length;v--;)u[s][c](a[d][v],i)},i=function(r){n.toggle(r.currentTarget)};return n.add=function(r,t){return f(r,t),n},n.remove=function(r,t){return f(r,t,!0),n},n.transform=function(t){return e(t).forEach(function(n){n.classList.add(r)}),n},n.revert=function(t){return e(t).forEach(function(n){n.classList.remove(r)}),n},n.toggle=function(t){return e(t).forEach(function(t){n[t.classList.contains(r)?"revert":"transform"](t)}),n},n});