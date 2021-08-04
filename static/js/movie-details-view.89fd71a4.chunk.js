(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{124:function(e,t,n){e.exports={MovieMainInfo:"MovieMainInfo_MovieMainInfo__317JT",MovieTitle:"MovieMainInfo_MovieTitle__DvMd3",MovieContent:"MovieMainInfo_MovieContent__1u35Y",ImageURL:"MovieMainInfo_ImageURL__BOHF5",MovieScore:"MovieMainInfo_MovieScore__2FS3_",MovieTitleName:"MovieMainInfo_MovieTitleName__2La_-",MovieOverview:"MovieMainInfo_MovieOverview__5g7rv",MovieGenreList:"MovieMainInfo_MovieGenreList__2Ea0x",MovieGenreItem:"MovieMainInfo_MovieGenreItem__ka1yi",Line:"MovieMainInfo_Line__1LZJN"}},125:function(e,t,n){e.exports={MovieAddInfo:"MovieAddInfo_MovieAddInfo__2QIK4",AddInfo:"MovieAddInfo_AddInfo__1aJm7",InfoList:"MovieAddInfo_InfoList__1SEZF",InfoListItem:"MovieAddInfo_InfoListItem__3ejHh",link:"MovieAddInfo_link__3GVeG",activeLink:"MovieAddInfo_activeLink__7wdom MovieAddInfo_link__3GVeG",Line:"MovieAddInfo_Line__15nUj"}},126:function(e,t,n){e.exports={ButtonIcon:"ButtonIcon_ButtonIcon__2C4eH"}},127:function(e,t,n){e.exports={IconBtn:"MovieDetailsPage_IconBtn__1R33v"}},134:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var a=n(64),r=n(1),c=n(4),i=n(62),o=n.p+"static/media/noImg.a227329d.jpg",s=n(124),l=n.n(s),u=n(2);function v(e){var t=e.movie,n=""!==t.title&&t.title?t.title:t.original_title;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:l.a.MovieMainInfo,children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):o,alt:n,className:l.a.ImageURL})}),Object(u.jsxs)("div",{className:l.a.MovieContent,children:[Object(u.jsxs)("h2",{className:l.a.MovieTitle,children:[n,t.release_date&&Object(u.jsxs)("span",{children:[" (",t.release_date.slice(0,4),")"]})]}),Object(u.jsxs)("p",{className:l.a.MovieScore,children:["User Score: ",t.popularity.toFixed(2),"%"]}),t.overview&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:l.a.MovieTitleName,children:"Overview"}),Object(u.jsx)("p",{className:l.a.MovieOverview,children:t.overview})]}),t.genres.length>0&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:l.a.MovieTitleName,children:"Genres"}),Object(u.jsx)("ul",{className:l.a.MovieGenreList,children:t.genres.map((function(e){return Object(u.jsx)("li",{className:l.a.MovieGenreItem,children:e.name},e.id)}))})]})]})]}),Object(u.jsx)("hr",{className:l.a.Line})]})}v.defaultProps={title:"",original_title:"",poster_path:o,overview:"",genres:[],popularity:0,release_date:"no release date"};var d=n(11),j=n(16),f=n(125),p=n.n(f),b=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,135))})),h=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,138))}));function m(){var e=Object(c.i)(),t=e.url,n=e.path,a=Object(c.g)();return Object(u.jsxs)("div",{className:p.a.MovieAddInfo,children:[Object(u.jsx)("p",{className:p.a.AddInfo,children:"Additional Information"}),Object(u.jsxs)("ul",{className:p.a.InfoList,children:[Object(u.jsx)("li",{className:p.a.InfoListItem,children:Object(u.jsx)(d.c,{to:{pathname:"".concat(t,"/cast"),state:{from:a.state?a.state.from:"/"}},className:p.a.link,activeClassName:p.a.activeLink,children:"Cast"})}),Object(u.jsx)("li",{className:p.a.InfoListItem,children:Object(u.jsx)(d.c,{to:{pathname:"".concat(t,"/reviews"),state:{from:a.state?a.state.from:"/"}},className:p.a.link,activeClassName:p.a.activeLink,children:"Reviews"})})]}),Object(u.jsx)("hr",{className:p.a.Line}),Object(u.jsxs)(r.Suspense,{fallback:Object(u.jsx)(j.a,{}),children:[Object(u.jsx)(c.a,{path:"".concat(n,"/cast"),children:Object(u.jsx)(b,{})}),Object(u.jsx)(c.a,{path:"".concat(n,"/reviews"),children:Object(u.jsx)(h,{})})]})]})}var _=n(83),O=n(132),M=n(126),x=n.n(M),I=["type","onClick","children"],g=function(e){var t=e.type,n=e.onClick,a=e.children,r=Object(O.a)(e,I);return Object(u.jsx)("button",Object(_.a)(Object(_.a)({type:t,onClick:n,className:x.a.ButtonIcon},r),{},{children:a}))};g.defaultProps={onClick:function(){return null},children:null,type:"button"};var k=g,w=n(128),N=n(61),L=n(75),y=n(127),C=n.n(y);function S(){var e=Object(c.f)(),t=Object(c.g)(),n=Object(c.h)().movieId,o=Object(r.useState)(null),s=Object(a.a)(o,2),l=s[0],d=s[1],f=Object(r.useState)(!1),p=Object(a.a)(f,2),b=p[0],h=p[1],_=Object(r.useState)(null),O=Object(a.a)(_,2),M=O[0],x=O[1];Object(r.useEffect)((function(){h(!0),i.a.fetchMovieById(n).then((function(e){d(e),h(!1)})).catch((function(e){console.log(e),x("Whoops, something went wrong. Enter your request again"),h(!1)}))}),[n]);return L.animateScroll.scrollToBottom(),Object(u.jsxs)(u.Fragment,{children:[M&&Object(u.jsx)(N.a,{errorContent:M}),b&&Object(u.jsx)(j.a,{}),Object(u.jsxs)(k,{onClick:function(){var n,a;e.push(null!==(n=null===t||void 0===t||null===(a=t.state)||void 0===a?void 0:a.from)&&void 0!==n?n:"/")},"aria-label":"Go back",children:[Object(u.jsx)(w.a,{}),Object(u.jsx)("span",{className:C.a.IconBtn,children:"Go back"})]}),l&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{movie:l}),Object(u.jsx)(m,{})]})]})}function A(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(S,{})})}},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(63),r=n.n(a),c=n(2),i=function(e){var t=e.errorContent;return Object(c.jsx)("div",{role:"alert",className:r.a.Error,children:Object(c.jsx)("p",{text:t,className:r.a.ErrorContent,children:t})})}},62:function(e,t,n){"use strict";var a=n(65),r=n.n(a),c=n(66),i=n(71),o=n.n(i),s="https://api.themoviedb.org/3",l="d0babcf2df0d52b515db9698a0e458bb",u={fetchSearchMovies:function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(s,"/search/movie?api_key=").concat(l,"&language=en-US&page=").concat(n,"&query=").concat(t),e.prev=1,e.next=4,o.a.get(a);case 4:return c=e.sent,i=c.data,e.abrupt("return",i.results);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),fetchTrendingMovies:function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/trending/movie/day?api_key=").concat(l,"&language=en-US&page=").concat(t),e.prev=1,e.next=4,o.a.get(n);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.results);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),fetchMovieById:function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"?api_key=").concat(l,"&language=en-US"),e.prev=1,e.next=4,o.a.get(n);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),fetchCastMovie:function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(l,"&language=en-US"),e.prev=1,e.next=4,o.a.get(n);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.cast);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),fetchReviewMovie:function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(l,"&language=en-US&page=1"),e.prev=1,e.next=4,o.a.get(n);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.results);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()};t.a=u},63:function(e,t,n){e.exports={Error:"Error_Error__zscxp",ErrorContent:"Error_ErrorContent__2fFjr"}}}]);
//# sourceMappingURL=movie-details-view.89fd71a4.chunk.js.map