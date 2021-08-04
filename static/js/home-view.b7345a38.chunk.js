(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{136:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var r=n(1),a=n(2);function c(t){var e=t.text;return Object(a.jsx)("h1",{children:e})}c.defaultProps={text:""};var o=n(65),u=n.n(o),i=n(94),s=n(66),l=n(64),p=n(62),v=n(77),f=n(78),b=n(16),d=n(61),j=n(90);function h(){var t=Object(r.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1],o=Object(r.useState)([]),h=Object(l.a)(o,2),g=h[0],x=h[1],m=Object(r.useState)(1),O=Object(l.a)(m,2),_=O[0],M=O[1],w=Object(r.useState)(!1),k=Object(l.a)(w,2),y=k[0],L=k[1],S=Object(r.useState)(null),E=Object(l.a)(S,2),B=E[0],C=E[1];Object(r.useEffect)((function(){(function(){var t=Object(s.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,L(!0),t.next=4,p.a.fetchTrendingMovies(_);case 4:e=t.sent,x(e),c((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))})),L(!1),0===e.length&&C("There are no trend movies"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),C("Whoops, something went wrong. Enter your request again");case 14:return t.prev=14,L(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})));return function(){return t.apply(this,arguments)}})()()}),[_]);return Object(a.jsxs)(a.Fragment,{children:[B&&Object(a.jsx)(d.a,{errorContent:B}),y&&Object(a.jsx)(b.a,{}),n.length>0&&!B&&Object(a.jsx)(v.a,{movies:n}),g.length>19&&!y&&!B&&Object(a.jsx)(f.a,{contentBtn:"Load More",onLoadMore:function(){M((function(t){return t+1})),j.animateScroll.scrollToBottom()}}),g.length<20&&g.length>0&&!y&&!B&&Object(a.jsx)(f.a,{disabled:!0,contentBtn:"End"})]})}function g(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(c,{text:"Trending today"}),Object(a.jsx)(h,{})]})}},61:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(63),a=n.n(r),c=n(2),o=function(t){var e=t.errorContent;return Object(c.jsx)("div",{role:"alert",className:a.a.Error,children:Object(c.jsx)("p",{text:e,className:a.a.ErrorContent,children:e})})}},62:function(t,e,n){"use strict";var r=n(65),a=n.n(r),c=n(66),o=n(69),u=n.n(o),i="https://api.themoviedb.org/3",s="d0babcf2df0d52b515db9698a0e458bb",l={fetchSearchMovies:function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(i,"/search/movie?api_key=").concat(s,"&language=en-US&page=").concat(n,"&query=").concat(e),t.prev=1,t.next=4,u.a.get(r);case 4:return c=t.sent,o=c.data,t.abrupt("return",o.results);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}(),fetchTrendingMovies:function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(i,"/trending/movie/day?api_key=").concat(s,"&language=en-US&page=").concat(e),t.prev=1,t.next=4,u.a.get(n);case 4:return r=t.sent,c=r.data,t.abrupt("return",c.results);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",null);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),fetchMovieById:function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(i,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"),t.prev=1,t.next=4,u.a.get(n);case 4:return r=t.sent,c=r.data,t.abrupt("return",c);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",null);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),fetchCastMovie:function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"),t.prev=1,t.next=4,u.a.get(n);case 4:return r=t.sent,c=r.data,t.abrupt("return",c.cast);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",null);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),fetchReviewMovie:function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),t.prev=1,t.next=4,u.a.get(n);case 4:return r=t.sent,c=r.data,t.abrupt("return",c.results);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",null);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()};e.a=l},63:function(t,e,n){t.exports={Error:"Error_Error__zscxp",ErrorContent:"Error_ErrorContent__2fFjr"}},70:function(t,e,n){t.exports={MovieListItem:"MovieListItem_MovieListItem__3UxJ6",MovieLink:"MovieListItem_MovieLink__aPKO5"}},71:function(t,e,n){t.exports={MoviesList:"MoviesList_MoviesList__2Bmda"}},72:function(t,e,n){t.exports={Button:"Button_Button__z2W-M"}},77:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));n(1);var r=n(4),a=n(11),c=n(70),o=n.n(c),u=n(2);function i(t){var e=t.id,n=t.title,c=t.original_title,i=Object(r.g)(),s=""!==n&&n?n:c;return Object(u.jsx)("li",{className:o.a.MovieListItem,children:Object(u.jsx)(a.b,{className:o.a.MovieLink,to:{pathname:"/movies/".concat(e),state:{from:i}},children:s})})}i.defaultProps={title:"",original_title:""};var s=n(71),l=n.n(s);function p(t){var e=t.movies;return Object(u.jsx)("ul",{className:l.a.MoviesList,children:e.map((function(t){var e=t.id,n=t.original_title,r=t.title;return Object(u.jsx)(i,{id:e,title:r,original_title:n},e)}))})}},78:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n(1);var r=n(72),a=n.n(r),c=n(2),o=function(t){var e=t.onLoadMore,n=t.contentBtn,r=t.disabled;return Object(c.jsx)("button",{disabled:r,onClick:e,className:a.a.Button,children:n})};o.defaultProps={onLoadMore:function(){return null},disabled:!1};var u=o}}]);
//# sourceMappingURL=home-view.b7345a38.chunk.js.map