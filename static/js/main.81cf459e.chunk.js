(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{17:function(e,t,n){e.exports={link:"Navigation_link__nHVx8",activeLink:"Navigation_activeLink__2NlCg Navigation_link__nHVx8"}},22:function(e,t,n){e.exports={SearchForm:"Searchbar_SearchForm__10JQA",SearchFormButton:"Searchbar_SearchFormButton__2Foje",SearchFormInput:"Searchbar_SearchFormInput__3ObGx"}},31:function(e,t,n){e.exports={Error:"Error_Error__zscxp",ErrorContent:"Error_ErrorContent__2fFjr"}},37:function(e,t,n){e.exports={container:"Container_container__3DzbV"}},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){e.exports={Button:"Button_Button__z2W-M"}},44:function(e,t,n){e.exports={LoaderSpinner:"LoaderSpinner_LoaderSpinner__14JuI"}},81:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(12),o=n.n(a),s=n(13),i=n(3),u=n(37),j=n.n(u),l=n(1),b=function(e){var t=e.children;return Object(l.jsx)("div",{className:j.a.container,children:t})},h=function(e){var t=e.children;return Object(l.jsx)(b,{children:t})},f=n(17),O=n.n(f),d=function(){return Object(l.jsxs)("nav",{children:[Object(l.jsx)(s.b,{exact:!0,to:"/",className:O.a.link,activeClassName:O.a.activeLink,children:"Home"}),Object(l.jsx)(s.b,{to:"/movies",className:O.a.link,activeClassName:O.a.activeLink,children:"Movies"})]})},v=n(39),p=n.n(v);function x(){return Object(l.jsx)("header",{className:p.a.header,children:Object(l.jsx)(d,{})})}function m(e){var t=e.text;return Object(l.jsx)("h1",{children:t})}m.defaultProps={text:""};var g=n(9),S=n.n(g),_=n(14),k=n(10),w=n(5),F="https://api.themoviedb.org/3",N="d0babcf2df0d52b515db9698a0e458bb",y={fetchSearchMovies:function(){var e=Object(k.a)(S.a.mark((function e(t,n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(F,"/search/movie?api_key=").concat(N,"&language=en-US&page=").concat(n,"&query=").concat(t),e.prev=1,e.next=4,fetch(r).then((function(e){return e.json()})).then((function(e){var t=e.results;return console.log(t),t}));case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),fetchTrendingMovies:function(){var e=Object(k.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(F,"/trending/movie/day?api_key=").concat(N,"&language=en-US&page=").concat(t),e.prev=1,e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){var t=e.results;return console.log(t),t}));case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},L=n(40),B=n.n(L);function E(e){var t=e.title;return Object(l.jsx)("li",{className:B.a.MovieListItem,children:t})}var C=n(41),M=n.n(C);function I(e){var t=e.movies;return Object(l.jsx)("ul",{className:M.a.MoviesList,children:t.map((function(e){var t=e.id,n=e.title;return Object(l.jsx)(E,{title:n},t)}))})}var T=n(42),q=n.n(T),J=function(e){var t=e.onLoadMore,n=e.contentBtn,r=e.disabled;return Object(l.jsx)("button",{disabled:r,onClick:t,className:q.a.Button,children:n})};J.defaultProps={onLoadMore:function(){return null},disabled:!1};var W=J,z=n(43),H=n.n(z),V=(n(73),n(44)),A=n.n(V),D=function(){return Object(l.jsx)("div",{className:A.a.LoaderSpinner,children:Object(l.jsx)(H.a,{type:"Watch",color:"#00BFFF",height:100,width:100,timeout:0})})},P=n(31),U=n.n(P),G=function(e){var t=e.errorContent;return Object(l.jsx)("div",{role:"alert",className:U.a.Error,children:Object(l.jsx)("p",{text:t,className:U.a.ErrorContent,children:t})})},Q=n(21);n(81);function K(){var e=Object(r.useState)([]),t=Object(w.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),o=Object(w.a)(a,2),s=o[0],i=o[1],u=Object(r.useState)(1),j=Object(w.a)(u,2),b=j[0],h=j[1],f=Object(r.useState)(!1),O=Object(w.a)(f,2),d=O[0],v=O[1],p=Object(r.useState)(null),x=Object(w.a)(p,2),m=x[0],g=x[1];Object(r.useEffect)((function(){(function(){var e=Object(k.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,y.fetchSearchMovies(b);case 4:t=e.sent,i(t),c((function(e){return[].concat(Object(_.a)(e),Object(_.a)(t))})),v(!1),0===t.length&&g("There are no trend movies"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),g("Whoops, something went wrong. Enter your request again");case 14:return e.prev=14,v(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}})()()}),[b]);return Object(l.jsxs)(l.Fragment,{children:[m&&Object(l.jsx)(G,{errorContent:m}),d&&Object(l.jsx)(D,{}),n.length>0&&!m&&Object(l.jsx)(I,{movies:n}),s.length>19&&!d&&!m&&Object(l.jsx)(W,{contentBtn:"Load More",onLoadMore:function(){h((function(e){return e+1})),Q.animateScroll.scrollToBottom()}}),s.length<19&&s.length>0&&!d&&!m&&Object(l.jsx)(W,{disabled:!0,contentBtn:"End"})]})}function R(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{text:"Trending today"}),Object(l.jsx)(K,{})]})}var X=n(16),Y=n(22),Z=n.n(Y),$=function(e){var t=e.handleSubmit,n=Object(r.useState)(""),c=Object(w.a)(n,2),a=c[0],o=c[1];return Object(l.jsxs)("form",{className:Z.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===a.trim())return X.c.warn("Enter your request",{position:"top-left",transition:X.b,style:{top:100,left:237,textAlign:"center",width:290,margin:"0 auto"}});t(a),o("")},children:[Object(l.jsx)("input",{className:Z.a.SearchFormInput,type:"text",value:a,onChange:function(e){var t=e.target.value;o(t.toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),Object(l.jsx)("button",{className:Z.a.SearchFormButton,type:"submit","aria-label":"Search movies",children:"Search"})]})};n(82),n(83);function ee(){var e=Object(r.useState)([]),t=Object(w.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),o=Object(w.a)(a,2),s=o[0],i=o[1],u=Object(r.useState)(""),j=Object(w.a)(u,2),b=j[0],h=j[1],f=Object(r.useState)(1),O=Object(w.a)(f,2),d=O[0],v=O[1],p=Object(r.useState)(!1),x=Object(w.a)(p,2),m=x[0],g=x[1],F=Object(r.useState)(null),N=Object(w.a)(F,2),L=N[0],B=N[1];Object(r.useEffect)((function(){b&&function(){var e=Object(k.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,y.fetchSearchMovies(b,d);case 4:t=e.sent,i(t),c((function(e){return[].concat(Object(_.a)(e),Object(_.a)(t))})),g(!1),0===t.length&&B('There are no movies on your request "'.concat(b,'"')),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),B("Whoops, something went wrong. Enter your request again");case 14:return e.prev=14,g(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}()()}),[b,d]);var E=function(){c([]),v(1),B(null),i([])};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)($,{handleSubmit:function(e){h(e),E()}}),L&&Object(l.jsx)(G,{errorContent:L}),m&&Object(l.jsx)(D,{}),n.length>0&&!L&&Object(l.jsx)(I,{movies:n}),s.length>19&&!m&&!L&&Object(l.jsx)(W,{contentBtn:"Load More",onLoadMore:function(){v((function(e){return e+1})),Q.animateScroll.scrollToBottom()}}),s.length<19&&s.length>0&&!m&&!L&&Object(l.jsx)(W,{disabled:!0,contentBtn:"End"}),Object(l.jsx)(X.a,{autoClose:3e3})]})}function te(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(ee,{})})}function ne(){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{}),Object(l.jsx)(i.a,{path:"/",exact:!0,children:Object(l.jsx)(R,{})}),Object(l.jsx)(i.a,{path:"/movies",exact:!0,children:Object(l.jsx)(te,{})})]})}n(84),n(85);o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(ne,{})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.81cf459e.chunk.js.map