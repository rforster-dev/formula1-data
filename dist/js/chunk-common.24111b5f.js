(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"0418":function(e,t,a){"use strict";var n=a("7a23"),c={class:"text-gray-600 body-font"},s={class:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"},i=Object(n["g"])("a",{class:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"},[Object(n["i"])(" 🏁 "),Object(n["g"])("span",{class:"ml-3 text-xl"},"F1 2021 Season data")],-1),r={class:"md:ml-auto flex flex-wrap items-center text-base justify-center"};function o(e,t,a,o,l,p){var f=Object(n["w"])("Navigation"),m=Object(n["w"])("NextRace");return Object(n["p"])(),Object(n["f"])("header",c,[Object(n["g"])("div",s,[i,Object(n["g"])("nav",r,[Object(n["j"])(f)])]),Object(n["j"])(m)])}var l={id:"primary-nav",class:"md:ml-auto flex flex-wrap items-center text-base justify-center"},p={class:"grid grid-cols-4 gap-y-4 gap-x-8"},f=["href"];function m(e,t,a,c,s,i){return Object(n["p"])(),Object(n["f"])("nav",l,[Object(n["g"])("ul",p,[(Object(n["p"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(c.navigationLinks,(function(e){return Object(n["p"])(),Object(n["f"])("li",{key:e.id},[Object(n["g"])("a",{class:"mr-5 hover:text-gray-900",href:e.linkURL},Object(n["x"])(e.linkTitle),9,f)])})),128))])])}var d={name:"NavigationBar",setup:function(){var e=Object(n["u"])([{linkTitle:"Home",linkURL:"/"},{linkTitle:"Drivers",linkURL:"/all-drivers.html"},{linkTitle:"Final standings",linkURL:"/championship-standings.html"},{linkTitle:"Race results",linkURL:"/season-list.html"}]);return{navigationLinks:e}}},u=a("6b0d"),x=a.n(u);const b=x()(d,[["render",m]]);var g=b,j=function(e){return Object(n["s"])("data-v-42cad55a"),e=e(),Object(n["q"])(),e},h={class:"bg-animated"},v={class:"container mx-auto px-5 pt-3 pb-3"},O={class:"flex items-center justify-between flex-wrap"},w={class:"w-0 flex-1 flex items-center"},R=j((function(){return Object(n["g"])("span",{class:"flex p-2 rounded-lg bg-indigo-800"},[Object(n["g"])("svg",{class:"h-6 w-6 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Object(n["g"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"})])],-1)})),k={class:"ml-3 font-medium text-white truncate"},y={class:"nextrace-cta md:inline"},T=["href"];function M(e,t,a,c,s,i){return Object(n["p"])(),Object(n["f"])("div",h,[Object(n["g"])("div",v,[Object(n["g"])("div",O,[Object(n["g"])("div",w,[R,Object(n["g"])("p",k,[Object(n["g"])("span",y,[Object(n["i"])(" Round "+Object(n["x"])(s.nextRaceRound)+" of the "+Object(n["x"])(s.nextRaceSeason)+" season at the ",1),Object(n["g"])("a",{href:s.nextRaceLink,target:"_blank"},Object(n["x"])(s.nextRaceName),9,T),Object(n["i"])(" on the "+Object(n["x"])(s.nextRaceDate)+" is the next race ",1)])])])])])])}var L=a("bc3a"),D=a.n(L),N={name:"HeroBanner",data:function(){return{nextRaceRound:[],nextRaceSeason:[],nextRaceName:[],nextRaceLink:[],nextRaceDate:[]}},created:function(){var e=this;D.a.get("https://ergast.com/api/f1/2022/1.json").then((function(t){e.nextRaceSeason=t.data.MRData.RaceTable.season,e.nextRaceRound=t.data.MRData.RaceTable.round,e.nextRaceName=t.data.MRData.RaceTable.Races[0].raceName,e.nextRaceDate=t.data.MRData.RaceTable.Races[0].date,e.nextRaceLink=t.data.MRData.RaceTable.Races[0].url})).catch((function(t){e.errors.push(t)}))}};a("fd10");const B=x()(N,[["render",M],["__scopeId","data-v-42cad55a"]]);var _=B,H={name:"HeaderBar",components:{Navigation:g,NextRace:_}};const S=x()(H,[["render",o]]);t["a"]=S},"0e62":function(e,t,a){e.exports=a.p+"img/haas.b3af45c3.jpg"},"1ea5":function(e,t,a){e.exports=a.p+"img/williams.08c9bfe7.jpg"},"356c":function(e,t,a){e.exports=a.p+"img/alpine.f72a7a65.jpg"},4172:function(e,t,a){e.exports=a.p+"img/ferrari.b091a3d2.jpg"},"6f81":function(e,t,a){e.exports=a.p+"img/red_bull.cd189202.jpg"},9090:function(e,t,a){e.exports=a.p+"img/max-wins.8cb2b9b1.jpg"},a766:function(e,t,a){},ac01:function(e,t,a){e.exports=a.p+"img/alphatauri.60653826.jpg"},b01a:function(e,t,a){e.exports=a.p+"img/aston_martin.f4611fa0.jpg"},b032:function(e,t,a){e.exports=a.p+"img/alfa.a8f60472.jpg"},b6c2:function(e,t,a){},c553:function(e,t,a){e.exports=a.p+"img/mercedes.07556459.jpg"},da16:function(e,t,a){e.exports=a.p+"img/mclaren.deb8f737.jpg"},fd10:function(e,t,a){"use strict";a("b6c2")},fd2d:function(e,t,a){"use strict";var n=a("7a23"),c={class:"mt-10 text-gray-600 body-font"},s=Object(n["h"])('<div class="bg-gray-100"><div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col"><a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"> 👋 <span class="ml-3 text-xl">Russ Forster</span></a><p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">This is a demo project using the <a href="https://ergast.com/">ergast f1 api</a>, VueJS and TailWind. </p><span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"><a href="https://github.com/rforster-dev" target="_blank" class="ml-3 text-gray-500"><span class="sr-only">View my github profile</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a><a href="https://www.linkedin.com/in/rcforster/" target="_blank" class="ml-3 text-gray-500"><span class="sr-only">View my linkedin profile</span><svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg></a></span></div></div>',1),i=[s];function r(e,t,a,s,r,o){return Object(n["p"])(),Object(n["f"])("footer",c,i)}var o={name:"FooterBar"},l=a("6b0d"),p=a.n(l);const f=p()(o,[["render",r]]);t["a"]=f}}]);
//# sourceMappingURL=chunk-common.24111b5f.js.map