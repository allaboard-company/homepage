"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[216],{6637:function(e,t,a){a.r(t),a.d(t,{Head:function(){return i}});var l=a(7294),r=a(5716),s=a(184),c=a(9357);const n=[],i=()=>l.createElement(c.Z,{title:"Work"});t.default=()=>(l.useEffect((()=>{!async function(){function e(e,t){var a=new RegExp(t+"='([^']+)'"),l=e.match(a);return l?l[1]:null}function t(e){var t=/vimeo\.com\/(\d+)/,a=e.match(t);return a?a[1]:null}function a(e){return'<iframe src="https://player.vimeo.com/video/'+e+'" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'}document.querySelectorAll(".work-list li").forEach((e=>{e.querySelector(".thumb-wrap").setAttribute("data-aos","fade-up"),e.querySelector(".title").setAttribute("data-aos","fade-up"),e.querySelector(".subtitle").setAttribute("data-aos","fade-up")})),r.ZP.utils.toArray(".thumb-wrap img").forEach((e=>{r.ZP.timeline({scrollTrigger:{trigger:e,scrub:!0,pin:!1}}).fromTo(e,{yPercent:-10,ease:"none"},{yPercent:10,ease:"none"})})),document.querySelectorAll(".work-list li").forEach(((e,t)=>{e.addEventListener("click",(function(){s(t),document.body.classList.add("show-full-popup"),document.querySelector(".work-detail-page").style.display="block",r.ZP.to(".work-detail-page",{opacity:1})}))})),document.querySelector(".btn-close").addEventListener("click",(function(){r.ZP.to(".work-detail-page",{opacity:0,onComplete:()=>{document.body.classList.remove("show-full-popup"),document.querySelector(".work-detail-page").style.display="none"}})}));let l=-1;function s(r){l=r;const s=n[r];if(!s)return;const{title:c,main_img:i,hashtags:m,head_desc:o,foot_desc:u,content:E,notes:p=[]}=s;let d="";c&&(d+="<h2>"+c+"</h2>"),m&&(d+='<p class="hashtags">'+m.map((e=>"#"+e)).join(" ")+"</p>"),o&&(d+='<p class="desc float-right">'+o+"</p>"),i&&(d+='<img class="main-img" src="'+i+'"/>'),E&&(d+='<div class="inner-container">',d+=E.map((l=>{if(l.startsWith("<vimeo")){let r=e(l,"id");return r.startsWith("http")&&(r=t(r)),r?'<div class="video-wrap">'+a(r)+"</div>":""}return l})).join(""),d+="</div>"),u&&(d+='<p class="desc">'+u+"</p>"),p.length>0&&(d+='<ul class="notes">',d+=p.map((e=>'<li class="text"><span>'+e.name+"</span>"+e.value+"</li>")).join(""),d+="</ul>"),document.querySelector(".work-detail-page .container").innerHTML=d}function c(){document.querySelector(".btn-left").addEventListener("click",(function(){s(l-1)})),document.querySelector(".btn-right").addEventListener("click",(function(){s(l+1)}))}c()}()}),[]),l.createElement(s.Z,{pageName:"work"},l.createElement("div",{className:"work-page"},l.createElement("img",{src:"/img/work_bg.webp",className:"w100"}),l.createElement("ul",{className:"work-list"},l.createElement("li",null,l.createElement("div",{className:"thumb-wrap"},l.createElement("img",{src:"/img/works/01.jpg",alt:"LOTTE EBC #1 이미지"})),l.createElement("p",{className:"title"},"LOTTE EBC #1"),l.createElement("p",{className:"subtitle"},"Lotte Executive Briefing Center : WELCOME")),l.createElement("li",null,l.createElement("div",{className:"thumb-wrap"},l.createElement("img",{src:"/img/works/02.jpg",alt:"LOTTE EBC #2 이미지"})),l.createElement("p",{className:"title"},"LOTTE EBC #2"),l.createElement("p",{className:"subtitle"},"Lotte Executive Briefing Center : WELCOME")),l.createElement("li",null,l.createElement("div",{className:"thumb-wrap"},l.createElement("img",{src:"/img/works/03.jpg",alt:"LOTTE EBC #1 이미지"})),l.createElement("p",{className:"title"},"MOBIS CES"),l.createElement("p",{className:"subtitle"},"Hyundai Mobis CES Show 2023")),l.createElement("li",null,l.createElement("div",{className:"thumb-wrap"},l.createElement("img",{src:"/img/works/04.jpg",alt:"LOTTE EBC #2 이미지"})),l.createElement("p",{className:"title"},"STANDARD ENERGY"),l.createElement("p",{className:"subtitle"},"Lighting Control System")),l.createElement("li",null,l.createElement("div",{className:"thumb-wrap"},l.createElement("img",{src:"/img/works/05.jpg",alt:"LOTTE EBC #1 이미지"})),l.createElement("p",{className:"title"},"CLEANTOPIA"),l.createElement("p",{className:"subtitle"},"Service App GUI Design")),l.createElement("li",null,l.createElement("div",{className:"thumb-wrap"},l.createElement("img",{src:"/img/works/06.jpg",alt:"LOTTE EBC #2 이미지"})),l.createElement("p",{className:"title"},"AMWAY"),l.createElement("p",{className:"subtitle"},"Amway Kiosk GUI Design")),l.createElement("li",null,l.createElement("div",{className:"thumb-wrap"},l.createElement("img",{src:"/img/works/07.jpg",alt:"LOTTE EBC #1 이미지"})),l.createElement("p",{className:"title"},"MOBIS PLATFORM"),l.createElement("p",{className:"subtitle"},"Hyundai Mobis B to B Service Platform")),l.createElement("li",null,l.createElement("div",{className:"thumb-wrap"},l.createElement("img",{src:"/img/works/08.jpg",alt:"LOTTE EBC #2 이미지"})),l.createElement("p",{className:"title"},"MOBIS SHOWROOM"),l.createElement("p",{className:"subtitle"},"Hyundai Mobis Virtual Showroom")),l.createElement("li",null,l.createElement("div",{className:"thumb-wrap"},l.createElement("img",{src:"/img/works/09.jpg",alt:"LOTTE EBC #1 이미지"})),l.createElement("p",{className:"title"},"SEOSA"),l.createElement("p",{className:"subtitle"},"Seosa App Film Contents")),l.createElement("li",null,l.createElement("div",{className:"thumb-wrap"},l.createElement("img",{src:"/img/works/10.jpg",alt:"LOTTE EBC #2 이미지"})),l.createElement("p",{className:"title"},"LG DISPLAY"),l.createElement("p",{className:"subtitle"},"LG Display Virtual Exhibition")))),l.createElement("div",{className:"work-detail-page","data-lenis-prevent":!0},l.createElement("button",{className:"btn-close"}),l.createElement("div",{className:"container"}),l.createElement("div",{className:"bot-float"},l.createElement("button",{className:"btn-left"}),l.createElement("button",{className:"btn-right"})))))}}]);
//# sourceMappingURL=component---src-pages-work-jsx-4c392bf0f17f4e404c75.js.map