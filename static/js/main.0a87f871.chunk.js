(this.webpackJsonpsideroomrecordings=this.webpackJsonpsideroomrecordings||[]).push([[0],{43:function(e,t,a){e.exports=a(78)},48:function(e,t,a){},53:function(e,t,a){e.exports=a.p+"static/media/PortErin1.fe5d38e9.mp4"},54:function(e,t,a){e.exports=a.p+"static/media/Radiohead.7e24023f.mp4"},55:function(e,t,a){e.exports=a.p+"static/media/TheBrackish.b657761d.mp4"},56:function(e,t,a){e.exports=a.p+"static/media/NickHarper.0d1685a4.mp4"},6:function(e,t,a){e.exports={color1:"#e64c43",color2:"#eb6d7f",color3:"#eab000",color4:"#018f98"}},76:function(e,t,a){e.exports=a.p+"static/media/RecordingGif.ecf3b3d2.gif"},77:function(e,t,a){e.exports=a.p+"static/media/Studio.4f7561e7.gif"},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),i=(a(48),a(6),a(19));var s,c,m,u,d=function(){return r.a.createElement("nav",{className:"puttoback color1"},r.a.createElement("ul",{className:"nav-links color2 color1"},r.a.createElement(i.b,{className:"color3",to:"/Basic-Website-To-React"},r.a.createElement("li",null,"Home |")),r.a.createElement(i.b,{className:"color3",to:"/About"},r.a.createElement("li",null,"About |")),r.a.createElement(i.b,{className:"color3",to:"/Projects"},r.a.createElement("li",null,"Projects"))))};function g(e,t){for(s=document.getElementsByClassName("showMore"),c=0;c<s.length;c++)s[c].style.display="block";for(s=document.getElementsByClassName("button_slide"),c=0;c<s.length;c++)s[c].style.display="none"}function f(){for(m=document.getElementsByClassName("dot"),u=0;u<m.length;u++)m[u].style.cssText="  justify-content: center;animation-name:stretch; animation-duration: 0.5s; animation-delay: 0;animation-fill-mode: forwards;animation-play-state: running;";for(m=document.getElementsByClassName("addInfo"),u=0;u<m.length;u++)m[u].style.cssText="display:flex;animation-name:fadein;animation-duration: 0.5s; animation-delay: 0;animation-fill-mode: forwards;animation-play-state: running;"}var p,h,E,v=a(11),y=a(12),b=a(14),w=a(13),N=a(39),x=a.n(N),C=function(e){Object(b.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).Sketch=function(e){var t,a,n,r,o,l=3,i=[],s=[],c=[],m=0,u=!1,d=!1,g=!1,f=!1,p=0;e.random_boolean;e.centerCanvas=function(){(e.windowWidth-e.width)/2,(e.windowHeight-e.height)/2,r.position(0,0)},e.setup=function(){o=e.color(255,204,0),r=e.createCanvas(e.windowWidth-20,e.windowHeight),e.centerCanvas(),l=e.random(1,5),t=e.random(1,5),a=t,1==(n=e.int(e.random(1,5)))&&(u=!0),2==n&&(d=!0),3==n&&(g=!0),4==n&&(f=!0),e.windowResized(),e.width/2,e.height/2;for(var s=0;s<50;s++)i[s]=new h(e.random(e.int(e.width)),e.random(e.int(e.height)),l,l,t,a,Math.random()>=.5,Math.random()>=.5,0)},e.draw=function(){i.forEach((function(t){e.noStroke(),t.display()}))},e.mouseClicked=function(){1==(p+=1)?o=e.color(20,159,157):2==p?o=e.color(238,243,220):3==p&&(o=e.color(233,94,87),p=0)},e.windowResized=function(){e.windowWidth>1200?e.resizeCanvas(e.windowWidth-20,e.windowWidth/1.77):e.resizeCanvas(e.windowWidth-20,e.windowWidth/1.1),e.centerCanvas()};var h=function a(n,r,l,i,p,h,E,y,b){var w=this;Object(v.a)(this,a),this.display=function(){if(w.y<=2&&(w.y=3,w.directionup=!1),w.y>=e.height&&(w.directionup=!0,w.y=e.height-1),w.x<=2&&(w.directionleft=!1,w.x=3),w.x>=e.width&&(w.directionleft=!0,w.x=e.width-1),w.directionup?w.y=w.y-w.wiggleamount-t/2:w.y=w.y+w.wiggleamount+t/2,w.directionleft?w.x=w.x-t+w.wiggleamount/2:w.x=w.x+t-w.wiggleamount/2,u&&(1==w.wiggletoggle&&(w.wiggleamount=w.wiggleamount-1),2==w.wiggletoggle&&(w.wiggleamount=w.wiggleamount-1),3==w.wiggletoggle&&(w.wiggleamount=w.wiggleamount-1),4==w.wiggletoggle&&(w.wiggleamount=w.wiggleamount+1),5==w.wiggletoggle&&(w.wiggleamount=w.wiggleamount+1),6==w.wiggletoggle&&(w.wiggleamount=w.wiggleamount+1,w.wiggletoggle=0)),1==d&&(3==w.wiggletoggle&&(w.wiggleamount=-1*w.wiggleamount),6==w.wiggletoggle&&(w.wiggleamount=-1*w.wiggleamount,w.wiggletoggle=0)),1==f&&(0==w.wiggletoggle&&(w.wiggleamount=8),2==w.wiggletoggle&&(w.wiggleamount=0),12==w.wiggletoggle&&(w.wiggleamount=-8),14==w.wiggletoggle&&(w.wiggleamount=0),24==w.wiggletoggle&&(w.wiggleamount=8,w.wiggletoggle=0)),1==g&&(1==w.wiggletoggle&&(w.wiggleamount=8),2==w.wiggletoggle&&(w.wiggleamount=0),8==w.wiggletoggle&&(w.wiggletoggle=0)),w.wiggletoggle==w.wiggletoggle){s[m]=w.x,c[m]=w.y,m++,e.fill(o),1==m&&(m=0);for(var a=0;a<s.length;a++)e.ellipse(s[a],c[a],4,4)}w.wiggletoggle++},this.x=n,this.y=r,this.directionup=E,this.directionleft=y,this.wiggleamount=l,this.wiggleamount1=p,this.wiggletoggle=b}},n.myRef=r.a.createRef(),n}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.myP5=new x.a(this.Sketch,this.myRef.current)}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.myRef})}}]),a}(r.a.Component),k="rgb(230,76,67)",j="rgb(235,109,127)",O="rgb(234,176,0)",S="rgb(1,143,152)";function B(e,t,a,n){for(p=k,k=j,j=O,O=S,S=p,h=document.getElementsByClassName("color1"),E=0;E<h.length;E++)h[E].style.backgroundColor=k;for(h=document.getElementsByClassName("color2"),E=0;E<h.length;E++)h[E].style.color=j;for(h=document.getElementsByClassName("color3"),E=0;E<h.length;E++)h[E].style.color=O;for(h=document.getElementsByClassName("color4"),E=0;E<h.length;E++)h[E].style.backgroundColor=S;for(h=document.getElementsByClassName("color5"),E=0;E<h.length;E++)h[E].style.backgroundColor=O;for(h=document.getElementsByClassName("color6"),E=0;E<h.length;E++)h[E].style.color=S}var R,I,T=a(15),P=a(16),L=a(18),M=a.n(L);function A(e){for(R=document.getElementsByClassName(e),I=0;I<R.length;I++)R[I].style.cssText="  visibility: visible;  transition-delay: 0s; animation-name:TrasitionY;  transition: transform 1.8s; transform-style: preserve-3d;    backface-visibility: hidden; animation-duration: 1.0s; animation-fill-mode: forwards;animation-play-state: running;animation-timing-function: ease-in;transform-origin: 0 0;"}var Y,V,W=function(e){Object(b.a)(n,e);var t=Object(w.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return r.a.createElement(M.a,{partialVisibility:!0,onChange:function(e){e&&A("PerspectiveTransition1")}},r.a.createElement("div",{className:"innerVideoContainer v1"},r.a.createElement(P.a,{className:"PerspectiveTransition1",videoSrc:a(53),loadingOverlay:r.a.createElement("div",{className:"loading-spinner-overlay "}," ")}),r.a.createElement("div",{className:"VtextContainer "},r.a.createElement("p",null,"Port Erin"),r.a.createElement("p",null,"Port Erin"),r.a.createElement("p",null,"Port Erin"),r.a.createElement("p",null,"Port Erin"),r.a.createElement("p",null,"Port Erin")),r.a.createElement("div",{className:"vBorders "})))}}]),n}(n.Component),z=function(e){Object(b.a)(n,e);var t=Object(w.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return r.a.createElement(M.a,{partialVisibility:!0,onChange:function(e){e&&A("PerspectiveTransition2")}},r.a.createElement("div",{className:"innerVideoContainer v2"},r.a.createElement(P.a,{className:"PerspectiveTransition2",videoSrc:a(54),loadingOverlay:r.a.createElement("div",{className:"loading-spinner-overlay "}," ")}),r.a.createElement("div",{className:"VtextContainer "},r.a.createElement("p",null,"Radiohead"),r.a.createElement("p",null,"Radiohead"),r.a.createElement("p",null,"Radiohead")),r.a.createElement("div",{className:"vBorders "})))}}]),n}(n.Component),G=function(e){Object(b.a)(n,e);var t=Object(w.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return r.a.createElement(M.a,{partialVisibility:!0,onChange:function(e){e&&A("PerspectiveTransition3")}},r.a.createElement("div",{className:"innerVideoContainer v3"},r.a.createElement(P.a,{className:"PerspectiveTransition3",videoSrc:a(55),loadingOverlay:r.a.createElement("div",{className:"loading-spinner-overlay "}," ")}),r.a.createElement("div",{className:"VtextContainer "},r.a.createElement("p",null,"The Brackish"),r.a.createElement("p",null,"The Brackish"),r.a.createElement("p",null,"The Brackish"),r.a.createElement("p",null,"The Brackish"),r.a.createElement("p",null,"The Brackish")),r.a.createElement("div",{className:"vBorders "})))}}]),n}(n.Component),D=function(e){Object(b.a)(n,e);var t=Object(w.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return r.a.createElement(M.a,{partialVisibility:!0,onChange:function(e){e&&A("PerspectiveTransition4")}},r.a.createElement("div",{className:"innerVideoContainer v4"},r.a.createElement(P.a,{className:"PerspectiveTransition4",videoSrc:a(56),loadingOverlay:r.a.createElement("div",{className:"loading-spinner-overlay "}," ")}),r.a.createElement("div",{className:"VtextContainer "},r.a.createElement("p",null,"Nick Harper"),r.a.createElement("p",null,"Nick Harper"),r.a.createElement("p",null,"Nick Harper")),r.a.createElement("div",{className:"vBorders "})))}}]),n}(n.Component);var H=function(){var e=Object(n.useState)("innerVideoContainer"),t=Object(T.a)(e,2),a=(t[0],t[1],function(e){var t=window.scrollY;if(window.scrollY>200)for(Y=document.getElementsByClassName("mainborder"),V=0;V<Y.length;V++)Y[V].style.cssText="transform: translateY(45px);";for(Y=document.getElementsByClassName("play"),V=0;V<Y.length;V++)Y[V].style.cssText="transform: translateY("+(t/8-200)+"px);";for(Y=document.getElementsByClassName("gifRecording"),V=0;V<Y.length;V++)Y[V].style.cssText="transform: translateY("+(t/5-100)+"px);";for(Y=document.getElementsByClassName("PlayBox"),V=0;V<Y.length;V++)Y[V].style.cssText="transform: translateX(-"+(t/10-90)+"px);";if(window.scrollY>2e3){var a=window.scrollY;for(Y=document.getElementsByClassName("v1"),V=0;V<Y.length;V++)Y[V].style.cssText="transform: translateY(-"+(a/10-400)+"px);";for(Y=document.getElementsByClassName("v2"),V=0;V<Y.length;V++)Y[V].style.cssText="transform: translateY(-"+(a/5-700)+"px);";for(Y=document.getElementsByClassName("v3"),V=0;V<Y.length;V++)Y[V].style.cssText="transform: translateY(-"+(a/5.5-800)+"px);";for(Y=document.getElementsByClassName("v4"),V=0;V<Y.length;V++)Y[V].style.cssText="transform: translateY(-"+(a/12-400)+"px);"}});return Object(n.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"videoContainer"},r.a.createElement(W,null),r.a.createElement(z,null)),r.a.createElement("div",{className:"videoContainer"},r.a.createElement(G,null),r.a.createElement(D,null)))},F=a(20),_=a(21),J=a(40),q=a.n(J),X=a(80),$=a(79),K=function(){var e=Object(n.useState)({name:"",email:"",subject:"",message:""}),t=Object(T.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(null),i=Object(T.a)(l,2),s=i[0],c=i[1],m=function(e){var t=e.target,n=t.name,r=t.value;o(Object(_.a)(Object(_.a)({},a),{},Object(F.a)({},n,r)))};return r.a.createElement("div",null,s&&r.a.createElement("p",{className:"".concat(s.success?"success":"error")},s.message),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),q.a.post("/send",Object(_.a)({},a)).then((function(e){c(e.data),o({name:"",email:"",subject:"",message:""})})).catch((function(){c({success:!1,message:"Something went wrong. Try again later"})}))}},r.a.createElement($.a.Group,{controlId:"name"},r.a.createElement($.a.Label,null,"Full Name"),r.a.createElement($.a.Control,{type:"text",name:"name",value:a.name,placeholder:"Enter your full name",onChange:m})),r.a.createElement($.a.Group,{controlId:"email"},r.a.createElement($.a.Label,null,"Email"),r.a.createElement($.a.Control,{type:"text",name:"email",value:a.email,placeholder:"Enter your email",onChange:m})),r.a.createElement($.a.Group,{controlId:"subject"},r.a.createElement($.a.Label,null,"Subject"),r.a.createElement($.a.Control,{type:"text",name:"subject",value:a.subject,placeholder:"Enter subject",onChange:m})),r.a.createElement($.a.Group,{controlId:"subject"},r.a.createElement($.a.Label,null,"Message"),r.a.createElement($.a.Control,{as:"textarea",name:"message",value:a.message,rows:"3",placeholder:"Enter your message",onChange:m})),r.a.createElement(X.a,{variant:"primary",type:"submit"},"Submit")))};var Q=function(){return r.a.createElement("div",{onClick:B,style:{cursor:"/cursor.cur"}},r.a.createElement("div",{className:"wrapper color1 color2"},r.a.createElement("div",{className:"borders color1 color2 mainborder"}),r.a.createElement(C,null),r.a.createElement("div",{className:"page1",id:"page1"},r.a.createElement("h1",{className:"title color3",id:"title"},"SIDE ROOM",r.a.createElement("br",null),"RECORDINGS"),r.a.createElement("h1",{className:"title1",id:"side"},"SIDE ROOM",r.a.createElement("br",null),"RECORDINGS ")),r.a.createElement("div",{className:"borders color1"}),r.a.createElement("div",{className:"page2",id:"page2 color1"},r.a.createElement("div",{className:"playContainer"},r.a.createElement("img",{className:"gifRecording",src:a(76)}),r.a.createElement("div",{className:"PlayBox"},r.a.createElement("div",{className:"playButton color4"},r.a.createElement("p",{className:"play"},"PLAY"))))),r.a.createElement("div",{className:"borders color1"}),r.a.createElement("div",{className:"page3 color1",id:"page3"},r.a.createElement("div",{className:"aboutGifContainer"},r.a.createElement("img",{className:"aboutGif",src:a(77)})),r.a.createElement("div",{className:"aboutpcontainer"},r.a.createElement("div",{className:"aboutP"},r.a.createElement("h4",null,"Side Room Recordings is a portable recording studio founded by Jacob Myles Tyghe and situated in centre of Bath, Somerset, England, near its counter-part Bristol."),r.a.createElement("h4",{className:"showMore"},"Portable Studios give us here at Side Room Recordings a chance to record you in your natural habitat"),r.a.createElement("h4",{className:"showMore"}," The possibilities of where to record are endless, use the contact form at the end of the page to discuss any ideas you have"),r.a.createElement("a",{className:"showMore",href:"About",target:"_self"},"The full Story")),r.a.createElement("div",{className:"button_slide slide_left",onClick:g},"Find Out More"))),r.a.createElement("div",{className:"borders color1"}),r.a.createElement("div",{className:"page4 color1",id:"page4"},r.a.createElement("h1",null,"Projects"),r.a.createElement(H,null),r.a.createElement("a",{className:"color2",id:"MPLink",href:"/Projects",target:"_self"},"More Projects")),r.a.createElement("div",{className:"borders"}),r.a.createElement("div",{className:"page5 color1",id:"page5"},r.a.createElement("h2",null,"Packages"),r.a.createElement("div",{className:"dotcontainer"},r.a.createElement("div",{className:"dotInnerContainer"},r.a.createElement("div",{className:"dot color4",onClick:f},r.a.createElement("h4",null,"\xa350")," ",r.a.createElement("h4",null,"1 x Track"),r.a.createElement("h4",null,"Solo"),r.a.createElement("p",{className:"addInfo"},"One track any instrument within a 15mile radius of bath")),r.a.createElement("div",{className:"dot color4",onClick:f},r.a.createElement("h4",null,"\xa370")," ",r.a.createElement("h4",null,"1 x Track")," ",r.a.createElement("h4",null,"Duo "),r.a.createElement("p",{className:"addInfo"},"Two track any instrument within a 15mile radius of bath"))),r.a.createElement("div",{className:"dotInnerContainer"},r.a.createElement("div",{className:"dot color4",onClick:f},r.a.createElement("h4",null,"\xa3100")," ",r.a.createElement("h4",null,"1 x Song ")," ",r.a.createElement("h4",null,"Full"),r.a.createElement("p",{className:"addInfo"},"One Song any number of instrument within a 15mile radius of bath")),r.a.createElement("div",{className:"dot color4",onClick:f},r.a.createElement("h4",null,"\xa3300")," ",r.a.createElement("h4",null,"1 x Album")," ",r.a.createElement("h4",null,"Info"),r.a.createElement("p",{className:"addInfo"},"Ten Songs any number of instrument within a 15mile radius of bath"))))),r.a.createElement("div",{className:"borders"}),r.a.createElement("div",{className:"page6 color1 color2"},r.a.createElement("div",{className:"container color4 color2"},r.a.createElement(K,null)))))};var U=function(){return r.a.createElement("div",{class:"aboutPage"},r.a.createElement("h1",null,"About In Full"),r.a.createElement("p",{className:"aboutPageP"},"Side Room Recordings is a portable recording studio founded by Jacob Myles Tyghe and situated in centre of Bath, Somerset, England, near its counter-part Bristol.",r.a.createElement("br",null),"Portable Studios give us here at Side Room Recordings a chance to record you in your natural habitat",r.a.createElement("br",null),"The possibilities of where to record are endless, use the contact form at the end of the page to discuss any ideas you have",r.a.createElement("br",null),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of ..."),r.a.createElement("p",{className:"aboutPageP"},"Side Room Recordings is a portable recording studio founded by Jacob Myles Tyghe and situated in centre of Bath, Somerset, England, near its counter-part Bristol.",r.a.createElement("br",null),"Portable Studios give us here at Side Room Recordings a chance to record you in your natural habitat",r.a.createElement("br",null),"The possibilities of where to record are endless, use the contact form at the end of the page to discuss any ideas you have",r.a.createElement("br",null),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of ..."))};var Z=function(){return r.a.createElement("div",{className:"projectsDiv"},r.a.createElement("div",{className:"page4 color1",id:"page4"},r.a.createElement("h1",null,"Projects"),r.a.createElement(H,null),r.a.createElement("p",null,"More Information Here"),r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))},ee=a(5);function te(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,n=r.a.useRef();r.a.useEffect((function(){n.current=t}),[t]),r.a.useEffect((function(){if(a&&a.addEventListener){var t=function(e){return n.current(e)};return a.addEventListener(e,t),function(){a.removeEventListener(e,t)}}}),[e,a])}var ae=function(e){var t=e.color,a=void 0===t?"250, 250, 250":t,n=e.outerAlpha,o=void 0===n?.9:n,l=e.innerSize,i=void 0===l?8:l,s=e.outerSize,c=void 0===s?8:s,m=e.outerScale,u=void 0===m?5:m,d=e.innerScale,g=void 0===d?.7:d,f=r.a.useRef(),p=r.a.useRef(),h=r.a.useRef(),E=r.a.useRef(),v=r.a.useState({x:0,y:0}),y=Object(T.a)(v,2),b=y[0],w=y[1],N=r.a.useState(!0),x=Object(T.a)(N,2),C=x[0],k=x[1],j=r.a.useState(!1),O=Object(T.a)(j,2),S=O[0],B=O[1],R=r.a.useState(!1),I=Object(T.a)(R,2),P=I[0],L=I[1],M=r.a.useRef(0),A=r.a.useRef(0),Y=r.a.useCallback((function(e){var t=e.clientX,a=e.clientY;w({x:t,y:a}),p.current.style.top=a+"px",p.current.style.left=t+"px",M.current=t,A.current=a}),[]),V=r.a.useCallback((function(e){void 0!==E.current&&(b.x+=(M.current-b.x)/8,b.y+=(A.current-b.y)/8,f.current.style.top=b.y+"px",f.current.style.left=b.x+"px"),E.current=e,h.current=requestAnimationFrame(V)}),[h]);r.a.useEffect((function(){return h.current=requestAnimationFrame(V)}),[V]);var W=r.a.useCallback((function(){return B(!0)}),[]),z=r.a.useCallback((function(){return B(!1)}),[]),G=r.a.useCallback((function(){return k(!0)}),[]),D=r.a.useCallback((function(){return k(!1)}),[]);te("mousemove",Y,document),te("mousedown",W,document),te("mouseup",z,document),te("mouseenter",G,document),te("mouseleave",D,document),r.a.useEffect((function(){S?(p.current.style.transform="scale(".concat(g,")"),f.current.style.transform="scale(".concat(u,")")):(p.current.style.transform="scale(1)",f.current.style.transform="scale(1)")}),[g,u,S]),r.a.useEffect((function(){P&&(p.current.style.transform="scale(".concat(1.3*g,")"),f.current.style.transform="scale(".concat(1.4*u,")"))}),[g,u,P]),r.a.useEffect((function(){C?(p.current.style.opacity=1,f.current.style.opacity=1):(p.current.style.opacity=0,f.current.style.opacity=0)}),[C]),r.a.useEffect((function(){var e=document.querySelectorAll('a, input[type="submit"], input[type="image"], label[for], select, button, .link, .dot, .button_slide');return e.forEach((function(e){e.style.cursor="none",e.addEventListener("mouseover",(function(){B(!0)})),e.addEventListener("click",(function(){B(!0),L(!1)})),e.addEventListener("mousedown",(function(){L(!0)})),e.addEventListener("mouseup",(function(){B(!0)})),e.addEventListener("mouseout",(function(){B(!1),L(!1)}))})),function(){e.forEach((function(e){e.removeEventListener("mouseover",(function(){B(!0)})),e.removeEventListener("click",(function(){B(!0),L(!1)})),e.removeEventListener("mousedown",(function(){L(!0)})),e.removeEventListener("mouseup",(function(){B(!0)})),e.removeEventListener("mouseout",(function(){B(!1),L(!1)}))}))}}),[S]);var H={cursor:{zIndex:999,position:"fixed",opacity:.8,pointerEvents:"none",transition:"opacity 0.35s ease-in-out, transform 0.15s ease-in-out"},cursorInner:{zIndex:999,opacity:.8,position:"fixed",borderRadius:"50%",width:i,height:i,pointerEvents:"none",backgroundColor:"rgba(".concat(a,", 1)"),transition:"opacity 0.85s, ease-in-out, transform 0.25s ease-in-out, "},cursorOuter:{zIndex:999,opacity:.2,position:"fixed",borderRadius:"50%",pointerEvents:"none","mix-blend-mode":"exclusion",width:c,height:c,backgroundColor:"rgba(".concat(a,", ").concat(o,")"),transition:"opacity 0.65s, ease-in-out, transform 0.15s ease-in-out"}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:f,style:H.cursorOuter,className:"color2"}),r.a.createElement("div",{ref:p,style:H.cursorInner,className:"color5"}))};var ne=function(){return r.a.createElement(i.a,null,r.a.createElement(ae,{className:"color3"}),r.a.createElement("div",{className:"App color1 color3",id:"app"},r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.a.createElement(d,null),r.a.createElement(ee.c,null,r.a.createElement(ee.a,{path:"/Basic-Website-To-React",exact:!0,component:Q}),r.a.createElement(ee.a,{path:"/About",exact:!0,component:U}),r.a.createElement(ee.a,{path:"/Projects",exact:!0,component:Z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.0a87f871.chunk.js.map