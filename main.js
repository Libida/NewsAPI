!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);const s="news-categories",r="news-container",i="global-spinner",o="modal",a="modal-text",c="modal-heading-close",l="backdrop",d="hidden",h="https://static.thenounproject.com/png/340719-200.png";var u=class{constructor(){this.spinner=document.getElementById(i)}};var w=class{constructor(e){this.view=e}startLoading(e,t){e&&e(),this.view.spinner.classList.remove(d),t&&t()}finishLoading(e,t){e&&e(),this.view.spinner.classList.add(d),t&&t()}};let v;var p=class{constructor(){return v||((v=this).view=new u,v.controller=new w(v.view)),v}};var m=class{constructor(e){this.id=e,this.dropdown=document.getElementById(e)}};var f=class{constructor(e,t){this.view=e,this.addListeners(t)}addListeners(e={}){const{changeCallback:t}=e;t&&this.view.dropdown.addEventListener("change",t)}};var g=class{constructor(e,t){this.view=new m(e),this.controller=new f(this.view,t)}};var b=class{constructor(){this.container=document.getElementById(r),this.dropdown=new g(s),this.spinner=new p}getNewsArticleMarkup(e){const{url:t,urlToImage:n,title:s,description:r}=e;return`\n            <article class="news-article">\n                <a class="news-article-link" href="${t}" target="_blank">\n                    <div class="news-article-additional-content">\n                        <img class="news-article-img" src="${n||h}" alt="${s}">\n                    </div>\n                    <div class="news-article-main-content">\n                        <h3 class="news-article-title">${s}</h3>\n                        <p class="news-article-location">${r}</p>\n                    </div>\n                </a>\n            </article>\n            `}appendNews(e){for(let t in e)this.container.insertAdjacentHTML("beforeend",this.getNewsArticleMarkup(e[t]))}clearNews(){this.container.innerHTML=""}};var y=class{constructor(){this.create(),this.backdrop=document.getElementById(l)}create(){document.body.insertAdjacentHTML("beforeend",`<div class="backdrop hidden" id="${l}"></div>`)}};var L=class{constructor(e){this.view=e}show(){this.view.backdrop.classList.remove(d)}hide(){this.view.backdrop.classList.add(d)}};let x=null;var k=class{constructor(e){return x||((x=this).view=new y,x.controller=new L(x.view)),x}};var T=class{constructor(e){this.create(),this.modal=document.getElementById(o),this.errorText=document.getElementById(a),this.errorClose=document.getElementById(c),this.backdrop=new k}create(){const e=`\n                <div class="modal ${d}" id="${o}">\n                    <div class="modal-heading">\n                        <h2>Attention</h2>\n                        <a href="#" class="${c}" id="${c}">Close</a>\n                    </div>\n                    <p class="modal-text" id="${a}"></p>\n                </div>\n                `;document.body.insertAdjacentHTML("beforeend",e)}getText(){return this.text}setText(e="Could you please retry later."){this.getText!==e&&(this.errorText.textContent=e,this.text=e)}};var j=class{constructor(e){this.view=e,this.initListeners()}initListeners(){this.view.errorClose.addEventListener("click",this.close.bind(this))}open(){this.view.modal.classList.remove(d),this.view.backdrop.controller.show()}close(e){e.preventDefault(),this.view.modal.classList.add(d),this.view.backdrop.controller.hide()}};let E=null;var $=class{constructor(e){return E||((E=this).view=new T,E.controller=new j(E.view)),E.view.setText(e),E.controller.open(),E}};var N=class{constructor(e,t,n={}){this.model=e,this.view=t,this.addListeners()}addListeners(){this.view.dropdown.controller.addListeners({changeCallback:this.updateNews.bind(this)})}async updateNews(e){this.view.spinner.controller.startLoading(this.view.clearNews.bind(this.view));const t=this.model.getNews(e.target.value),n=await t||{};this.view.appendNews(n.articles),this.view.spinner.controller.finishLoading()}};var M=class{async getNews(e){return fetch(`https://newsapi.org/v2/everything?q=${e}&sortBy=popularity&apiKey=a1e2ae38e5ff42f1aa3175998837d6ca&from=2019-10-24&to=2019-10-24`).then(e=>{if(200!=e.status)throw new SyntaxError("Empty results from the NEWS API server");return e.json()}).catch(e=>{new $(e)})}};new class{constructor(e){this.model=new M,this.view=new b,this.controller=new N(this.model,this.view,e)}}}]);