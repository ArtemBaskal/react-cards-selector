(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,r){},19:function(e){e.exports={dc:[{name:"\u0410\u043a\u0432\u0430\u043c\u0435\u043d",image:"http://www.ramrus.ru/pic/dc/aquaman.jpg"},{name:"\u0411\u044d\u0442\u043c\u0435\u043d",image:"http://www.ramrus.ru/pic/dc/batman.jpg"},{name:"\u041a\u0438\u0431\u043e\u0440\u0433",image:"http://www.ramrus.ru/pic/dc/cyborg.jpg"},{name:"\u0424\u043b\u044d\u0448",image:"http://www.ramrus.ru/pic/dc/flash.jpg"},{name:"\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u0424\u043e\u043d\u0430\u0440\u044c",image:"http://www.ramrus.ru/pic/dc/greenlantern.jpg"},{name:"\u0421\u0443\u043f\u0435\u0440\u0433\u0451\u0440\u043b",image:"http://www.ramrus.ru/pic/dc/supergirl.jpg"},{name:"\u0421\u0443\u043f\u0435\u0440\u043c\u0435\u043d",image:"http://www.ramrus.ru/pic/dc/superman.jpg"},{name:"\u0427\u0443\u0434\u043e-\u0436\u0435\u043d\u0449\u0438\u043d\u0430",image:"http://www.ramrus.ru/pic/dc/wonderwoman.jpg"}],marvel:[{name:"\u0427\u0451\u0440\u043d\u0430\u044f \u041f\u0430\u043d\u0442\u0435\u0440\u0430",image:"http://www.ramrus.ru/pic/marvel/blackpanther.jpg"},{name:"\u041a\u0430\u043f\u0438\u0442\u0430\u043d \u0410\u043c\u0435\u0440\u0438\u043a\u0430",image:"http://www.ramrus.ru/pic/marvel/captainamerica.jpg"},{name:"\u0421\u043e\u0440\u0432\u0438\u0433\u043e\u043b\u043e\u0432\u0430",image:"http://www.ramrus.ru/pic/marvel/daredevil.jpg"},{name:"\u0414\u043e\u043a\u0442\u043e\u0440 \u0421\u0442\u0440\u044d\u043d\u0434\u0436",image:"http://www.ramrus.ru/pic/marvel/doctorstrange.jpg"},{name:"\u0425\u0430\u043b\u043a",image:"http://www.ramrus.ru/pic/marvel/hulk.jpg"},{name:"\u0416\u0435\u043b\u0435\u0437\u043d\u0439 \u0427\u0435\u043b\u043e\u0432\u0435\u043a",image:"http://www.ramrus.ru/pic/marvel/ironman.jpg"},{name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-\u043f\u0430\u0443\u043a",image:"http://www.ramrus.ru/pic/marvel/spiderman.jpg"},{name:"\u0422\u043e\u0440",image:"http://www.ramrus.ru/pic/marvel/thor.jpg"}]}},24:function(e,t,r){e.exports=r.p+"static/media/dc.e627f7ed.svg"},25:function(e,t,r){e.exports=r.p+"static/media/marvel.06125b3c.svg"},34:function(e,t,r){e.exports=r(45)},45:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(30),o=r.n(c),i=r(20),u=r(13),s=r(6),l=r(14),p=r(9),m=r(10),f=r(12),d=r(11),h=r(2),v=function(e){return{type:"NAME_SEARCHED",payload:e}},g=r(32),y=r.n(g);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=Object(h.a)(e);if(t){var a=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var w=function(e){Object(f.a)(r,e);var t=E(r);function r(){var e;Object(p.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onCardClick=function(){y.a.countBy(e.props.selectedCards,"name")[e.props.name]?e.props.multipleSelectCards(Object.assign({},e.props,e.props.selectedCards.filter(function(t){return t.name===e.props.name})[0].counter++)):e.props.selectCards(Object.assign({},e.props,{counter:1}))},e}return Object(m.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:"Card",onClick:this.onCardClick},a.a.createElement("img",{src:this.props.image,alt:this.props.name}),a.a.createElement("figcaption",{className:"HeroName font-style "},this.props.name))}}]),r}(a.a.Component),C=Object(s.b)(function(e){return{selectedCards:e.selectedCards}},{selectCards:function(e){return{type:"CARDS_SELECTED",payload:e}},multipleSelectCards:function(e){return{type:"CARD_MULTIPLE_SELECTED",payload:e}}})(w),j=r(19),b=(r(16),Object(s.b)(function(e){return{name:e.searchedName,heroes:e.foundHeroes,universe:e.selectedUniverse}})(function(e){var t,r=e.name,n=e.heroes,c=e.universe,o=c;if(r.length&&o===c?t=n:(t=j[c],o=c),!t.length)return a.a.createElement("div",{className:"nothingFound font-style "},"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e");var i=t.map(function(e){return a.a.createElement("div",{className:"CardContainer",key:e.name},a.a.createElement(C,{name:e.name,image:e.image}))});return a.a.createElement("div",{className:"CardsContainer"},i)}));function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=Object(h.a)(e);if(t){var a=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var R=function(e){Object(f.a)(r,e);var t=O(r);function r(){var e;Object(p.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onInputChange=function(t){e.props.findHeroes(j[e.props.universe].filter(function(e){return e.name.toLowerCase().indexOf(t.target.value.toLowerCase())>-1})),e.props.searchName(t.target.value)},e}return Object(m.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:"SearchBar"},a.a.createElement("input",{type:"text",value:this.props.searchHeroName,placeholder:"\u0418\u043c\u044f \u0433\u0435\u0440\u043e\u044f",onChange:this.onInputChange}),a.a.createElement("i",{className:"fas fa-search"}))}}]),r}(a.a.Component),N=Object(s.b)(function(e){return{searchHeroName:e.searchedName,heroes:e.foundHeroes,universe:e.selectedUniverse}},{findHeroes:function(e){return{type:"HEROES_FOUND",payload:e}},searchName:v})(R),D=r(24),S=r.n(D),k=r(25),_=r.n(k);function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=Object(h.a)(e);if(t){var a=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var H=function(e){Object(f.a)(r,e);var t=A(r);function r(){return Object(p.a)(this,r),t.apply(this,arguments)}return Object(m.a)(r,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:this.props.name,onClick:function(){e.props.searchName(""),e.props.selectUniverse(e.props.name)}},a.a.createElement(i.b,{to:"/".concat(this.props.name)},a.a.createElement("img",{src:"dc"===this.props.name?S.a:_.a,alt:"dc"===this.props.name?S.a:_.a})))}}]),r}(a.a.Component),L=Object(s.b)(function(e){return{universe:e.selectedUniverse}},{selectUniverse:function(e){return{type:"UNIVERSE_SELECTED",payload:e}},searchName:v})(H);function U(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=Object(h.a)(e);if(t){var a=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var x=function(e){Object(f.a)(r,e);var t=U(r);function r(){return Object(p.a)(this,r),t.apply(this,arguments)}return Object(m.a)(r,[{key:"render",value:function(){var e=this;if(!this.props.selectedCards.length)return a.a.createElement("div",{className:"absence fontStyle"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0435\u0440\u043e\u044f");var t=this.props.selectedCards.map(function(t,r){return a.a.createElement("div",{className:"SelectedCardContainer",key:t.name},a.a.createElement("span",{onClick:function(){e.props.removeCard(e.props.selectedCards[r].name)},className:"Xicon",role:"img","aria-label":"X"},"\u274c"),a.a.createElement(C,{name:t.name,image:t.image,className:"selectedCard font-style "}),a.a.createElement(a.a.Fragment,null,function(){if(t.counter>1)return a.a.createElement("span",{className:"counter"},t.counter)}()))});return a.a.createElement("div",{className:"SelectedCardsContainer"},t)}}]),r}(a.a.Component),T=Object(s.b)(function(e){return{selectedCards:e.selectedCards}},{removeCard:function(e){return{type:"CARDS_REMOVED",payload:e}}})(x);function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=Object(h.a)(e);if(t){var a=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var I=function(e){Object(f.a)(r,e);var t=P(r);function r(){return Object(p.a)(this,r),t.apply(this,arguments)}return Object(m.a)(r,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(T,null),a.a.createElement("div",{className:"mainBody"},a.a.createElement(N,null),a.a.createElement(b,null),a.a.createElement("div",{className:"universesContainer"},a.a.createElement(L,{name:"dc"}),a.a.createElement(L,{name:"marvel"}))))}}]),r}(a.a.Component),M=r(28),F=Object(l.b)({selectedUniverse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dc",t=arguments.length>1?arguments[1]:void 0;return"UNIVERSE_SELECTED"===t.type?t.payload:e},foundHeroes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"HEROES_FOUND"===t.type?t.payload:e},searchedName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"NAME_SEARCHED"===t.type?t.payload:e},selectedCards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CARDS_SELECTED":return[].concat(Object(M.a)(e),[t.payload]);case"CARD_MULTIPLE_SELECTED":return Object(M.a)(e);case"CARDS_REMOVED":return e.filter(function(e){return e.name!==t.payload});default:return e}}}),V=Object(l.c)(F);o.a.render(a.a.createElement(i.a,null,a.a.createElement(s.a,{store:V},a.a.createElement(u.a,{path:"/",component:I}))),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1476651f.chunk.js.map