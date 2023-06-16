(()=>{"use strict";function e(e){const t=function(){const e=document.createElement("div"),t=document.createElement("div");t.classList.add("body-container"),t.classList.add("body-container","main-page");const n=document.createElement("h1");n.textContent="Odin's Place",e.appendChild(n);const d=document.createElement("h2");d.textContent="Good Food. Good Mood.",e.appendChild(d);const o=document.createElement("p");o.textContent="The best food you will ever taste. Visit us once and you will never stop coming back. That's a promise!",e.appendChild(o),o.style.maxWidth="500px";const c=document.createElement("div");c.classList.add("bottom-div");const a=document.createElement("h2");a.textContent="TIMING",c.appendChild(a);const i=document.createElement("p");i.textContent="11 a.m to 11 p.m",c.appendChild(i);const s=document.createElement("p");s.textContent="52 weeks a year",c.appendChild(s);const l=document.createElement("div");l.classList.add("bottom-div");const m=document.createElement("h2");m.textContent="LOCATION",l.appendChild(m);const r=document.createElement("p");return r.textContent="Top Floor, Real building, Actual City, That Country.",l.appendChild(r),t.appendChild(e),t.appendChild(c),t.appendChild(l),t}();e.appendChild(t)}function t(e,t,n,d){const o=document.createElement("div");o.classList.add("menu-item");const c=document.createElement("img");c.setAttribute("src",`../src/menu-images/${n}`),c.classList.add("menu-item-image");const a=document.createElement("div");a.classList.add("menu-image-container"),a.appendChild(c);const i=document.createElement("h3");i.classList.add("item-heading"),i.textContent=e;const s=document.createElement("p");s.textContent=t;const l=document.createElement("h3");return l.classList.add("item-price"),l.textContent=`Rs. ${d}`,o.appendChild(a),o.appendChild(i),o.appendChild(s),o.appendChild(l),o.addEventListener("mouseenter",(function(){this.querySelector("img").classList.toggle("hover")})),o.addEventListener("mouseleave",(function(){this.querySelector("img").classList.toggle("hover")})),o}function n(e,n){const d=document.createElement("h3");d.textContent=`${n}`,d.classList.add("menu-row-heading");const o=document.createElement("div");o.appendChild(d);const c=document.createElement("div");c.classList.add("menu-container"),"Burgers"==n?(c.appendChild(t("Big Meat Burger","Our bestselling burger comes with a giant chicken patty to satisfy your needs.","big-meat.jpg",320)),c.appendChild(t("Death by Cheese","There's no such thing as too much cheese!","death-by-cheese.jpg",380)),c.appendChild(t("The Big Boy","Are you sure you can finish this one?","big-boy.jpg",650))):"Pizza"==n?(c.appendChild(t("Veggie Pizza","For those who can't choose which veggies to add.","veggie.jpg",450)),c.appendChild(t("Mushroom Delight","Only mushrooms. Nothing more. Nothing less.","mushroom.jpg",380)),c.appendChild(t("Pepperoni","The most popular option.","pepperoni.jpg",320))):"Drinks"==n&&(c.appendChild(t("Lemon Drink","Tangy lemon flavor.","lemon.jpg",160)),c.appendChild(t("Alcohol","A really fancy drink.","alcohol.jpg",720)),c.appendChild(t("Fruit Juice","Refreshing fruit juice.","juice.jpg",120))),e.appendChild(o),e.appendChild(c)}!function(e){const t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div");t.setAttribute("class","header"),n.setAttribute("class","main"),d.setAttribute("class","footer"),t.classList.add("main-page"),n.classList.add("main-page"),d.classList.add("main-page"),e.appendChild(t),e.appendChild(n),e.appendChild(d);const o=function(){const e=document.createElement("ul");return e.setAttribute("id","nav-list"),["Home","Menu","Contact"].forEach((t=>{let n=document.createElement("li");n.textContent=t,n.setAttribute("id",`${t.toLowerCase()}`),e.appendChild(n)})),e}();t.appendChild(o);const c=function(){const e=document.createElement("div"),t=document.createElement("p");return t.innerHTML='Created by <a href="https://www.github.com/WebHead2211" target="blank">Aayush</a>',e.appendChild(t),e}();d.appendChild(c)}(document.querySelector("#content")),e(document.querySelector(".main"));const d=document.getElementById("home"),o=document.getElementById("menu"),c=document.getElementById("contact");d.addEventListener("click",(function(){document.querySelector(".main").innerHTML="",e(document.querySelector(".main"))})),o.addEventListener("click",(function(){const e=document.querySelector(".main");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("body-container"),e.classList.add("body-container","menu-page");const t=document.createElement("div"),d=document.createElement("div"),o=document.createElement("h1");return o.textContent="Menu",t.appendChild(o),d.classList.add("menu-row-container"),function(e){const t=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div");t.classList.add("menu-row"),d.classList.add("menu-row"),o.classList.add("menu-row"),n(t,"Burgers"),n(t,"Pizza"),n(t,"Drinks"),e.appendChild(t),e.appendChild(d),e.appendChild(o)}(d),e.appendChild(t),e.appendChild(d),e}())})),c.addEventListener("click",(function(){const e=document.querySelector(".main");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("body-container"),e.classList.add("body-container","contact-page");const t=document.createElement("h1");t.textContent="Contact Us",e.appendChild(t);const n=document.createElement("div");e.appendChild(n);const d=document.createElement("h2");d.textContent="Call us",n.appendChild(d);const o=document.createElement("p");o.textContent="+91 9808805678",o.style.margin="0",n.appendChild(o);const c=document.createElement("div");e.appendChild(c);const a=document.createElement("h2");a.textContent="Write to us",c.appendChild(a);const i=document.createElement("p");return i.textContent="realemail@website.com",i.style.margin="0",c.appendChild(i),e}())}))})();