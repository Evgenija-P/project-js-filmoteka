!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(t){return t&&t.__esModule?t.default:t}var n={},e={},o=t.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in e){var r=e[t];delete e[t];var o={id:t,exports:{}};return n[t]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(t,r){e[t]=r},t.parcelRequired7c6=o),o.register("fCSDZ",(function(n,e){var u=o("l5bVx"),i="__lodash_hash_undefined__",a=1/0,c=9007199254740991,f="[object Arguments]",l="[object Array]",s="[object Boolean]",p="[object Date]",v="[object Error]",h="[object Function]",_="[object Map]",d="[object Number]",y="[object Object]",g="[object Promise]",b="[object RegExp]",j="[object Set]",w="[object String]",m="[object Symbol]",O="[object WeakMap]",A="[object ArrayBuffer]",x="[object DataView]",S=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/,E=/^\./,T=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,I=/\\(\\)?/g,U=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,D={};D["[object Float32Array]"]=D["[object Float64Array]"]=D["[object Int8Array]"]=D["[object Int16Array]"]=D["[object Int32Array]"]=D["[object Uint8Array]"]=D["[object Uint8ClampedArray]"]=D["[object Uint16Array]"]=D["[object Uint32Array]"]=!0,D[f]=D[l]=D[A]=D[s]=D[x]=D[p]=D[v]=D[h]=D[_]=D[d]=D[y]=D[b]=D[j]=D[w]=D[O]=!1;var F="object"==typeof t&&t&&t.Object===Object&&t,C="object"==typeof self&&self&&self.Object===Object&&self,L=F||C||Function("return this")(),M=e&&!e.nodeType&&e,P=M&&n&&!n.nodeType&&n,R=P&&P.exports===M&&F.process,N=function(){try{return R&&R.binding("util")}catch(t){}}(),z=N&&N.isTypedArray;function q(t,r){return!!(t?t.length:0)&&function(t,r,n){if(r!=r)return function(t,r,n,e){var o=t.length,u=n+(e?1:-1);for(;e?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,Z,n);var e=n-1,o=t.length;for(;++e<o;)if(t[e]===r)return e;return-1}(t,r,0)>-1}function B(t,r,n){for(var e=-1,o=t?t.length:0;++e<o;)if(n(r,t[e]))return!0;return!1}function V(t,r){for(var n=-1,e=t?t.length:0;++n<e;)if(r(t[n],n,t))return!0;return!1}function Z(t){return t!=t}function J(t,r){return t.has(r)}function W(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function X(t){var r=-1,n=Array(t.size);return t.forEach((function(t,e){n[++r]=[e,t]})),n}function G(t){var r=-1,n=Array(t.size);return t.forEach((function(t){n[++r]=t})),n}var K,Y,H,Q=Array.prototype,tt=Function.prototype,rt=Object.prototype,nt=L["__core-js_shared__"],et=(K=/[^.]+$/.exec(nt&&nt.keys&&nt.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",ot=tt.toString,ut=rt.hasOwnProperty,it=rt.toString,at=RegExp("^"+ot.call(ut).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ct=L.Symbol,ft=L.Uint8Array,lt=rt.propertyIsEnumerable,st=Q.splice,pt=(Y=Object.keys,H=Object,function(t){return Y(H(t))}),vt=Vt(L,"DataView"),ht=Vt(L,"Map"),_t=Vt(L,"Promise"),dt=Vt(L,"Set"),yt=Vt(L,"WeakMap"),gt=Vt(Object,"create"),bt=Ht(vt),jt=Ht(ht),wt=Ht(_t),mt=Ht(dt),Ot=Ht(yt),At=ct?ct.prototype:void 0,xt=At?At.valueOf:void 0,St=At?At.toString:void 0;function kt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function Et(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function Tt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function It(t){var r=-1,n=t?t.length:0;for(this.__data__=new Tt;++r<n;)this.add(t[r])}function Ut(t){this.__data__=new Et(t)}function $t(t,r){var n=nr(t)||rr(t)?function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}(t.length,String):[],e=n.length,o=!!e;for(var u in t)!r&&!ut.call(t,u)||o&&("length"==u||Jt(u,e))||n.push(u);return n}function Dt(t,r){for(var n=t.length;n--;)if(tr(t[n][0],r))return n;return-1}function Ft(t,r){for(var n=0,e=(r=Wt(r,t)?[r]:Nt(r)).length;null!=t&&n<e;)t=t[Yt(r[n++])];return n&&n==e?t:void 0}function Ct(t,r){return null!=t&&r in Object(t)}function Lt(t,r,n,e,o){return t===r||(null==t||null==r||!ir(t)&&!ar(r)?t!=t&&r!=r:function(t,r,n,e,o,u){var i=nr(t),a=nr(r),c=l,h=l;i||(c=(c=Zt(t))==f?y:c);a||(h=(h=Zt(r))==f?y:h);var g=c==y&&!W(t),O=h==y&&!W(r),S=c==h;if(S&&!g)return u||(u=new Ut),i||fr(t)?qt(t,r,n,e,o,u):function(t,r,n,e,o,u,i){switch(n){case x:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case A:return!(t.byteLength!=r.byteLength||!e(new ft(t),new ft(r)));case s:case p:case d:return tr(+t,+r);case v:return t.name==r.name&&t.message==r.message;case b:case w:return t==r+"";case _:var a=X;case j:var c=2&u;if(a||(a=G),t.size!=r.size&&!c)return!1;var f=i.get(t);if(f)return f==r;u|=1,i.set(t,r);var l=qt(a(t),a(r),e,o,u,i);return i.delete(t),l;case m:if(xt)return xt.call(t)==xt.call(r)}return!1}(t,r,c,n,e,o,u);if(!(2&o)){var k=g&&ut.call(t,"__wrapped__"),E=O&&ut.call(r,"__wrapped__");if(k||E){var T=k?t.value():t,I=E?r.value():r;return u||(u=new Ut),n(T,I,e,o,u)}}return!!S&&(u||(u=new Ut),function(t,r,n,e,o,u){var i=2&o,a=lr(t),c=a.length,f=lr(r).length;if(c!=f&&!i)return!1;var l=c;for(;l--;){var s=a[l];if(!(i?s in r:ut.call(r,s)))return!1}var p=u.get(t);if(p&&u.get(r))return p==r;var v=!0;u.set(t,r),u.set(r,t);var h=i;for(;++l<c;){var _=t[s=a[l]],d=r[s];if(e)var y=i?e(d,_,s,r,t,u):e(_,d,s,t,r,u);if(!(void 0===y?_===d||n(_,d,e,o,u):y)){v=!1;break}h||(h="constructor"==s)}if(v&&!h){var g=t.constructor,b=r.constructor;g==b||!("constructor"in t)||!("constructor"in r)||"function"==typeof g&&g instanceof g&&"function"==typeof b&&b instanceof b||(v=!1)}return u.delete(t),u.delete(r),v}(t,r,n,e,o,u))}(t,r,Lt,n,e,o))}function Mt(t){return!(!ir(t)||function(t){return!!et&&et in t}(t))&&(or(t)||W(t)?at:U).test(Ht(t))}function Pt(t){return"function"==typeof t?t:null==t?sr:"object"==typeof t?nr(t)?(e=t[0],o=t[1],Wt(e)&&Xt(o)?Gt(Yt(e),o):function(t){var r=function(t,r,n){var e=null==t?void 0:Ft(t,r);return void 0===e?n:e}(t,e);return void 0===r&&r===o?function(t,r){return null!=t&&function(t,r,n){r=Wt(r,t)?[r]:Nt(r);for(var e,o=-1,u=r.length;++o<u;){var i=Yt(r[o]);if(!(e=null!=t&&n(t,i)))break;t=t[i]}return e||!!(u=t?t.length:0)&&ur(u)&&Jt(i,u)&&(nr(t)||rr(t))}(t,r,Ct)}(t,e):Lt(o,r,void 0,3)}):(n=function(t){for(var r=lr(t),n=r.length;n--;){var e=r[n],o=t[e];r[n]=[e,o,Xt(o)]}return r}(r=t),1==n.length&&n[0][2]?Gt(n[0][0],n[0][1]):function(t){return t===r||function(t,r,n,e){var o=n.length,u=o,i=!e;if(null==t)return!u;for(t=Object(t);o--;){var a=n[o];if(i&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<u;){var c=(a=n[o])[0],f=t[c],l=a[1];if(i&&a[2]){if(void 0===f&&!(c in t))return!1}else{var s=new Ut;if(e)var p=e(f,l,c,t,r,s);if(!(void 0===p?Lt(l,f,e,3,s):p))return!1}}return!0}(t,r,n)}):function(t){return Wt(t)?(r=Yt(t),function(t){return null==t?void 0:t[r]}):function(t){return function(r){return Ft(r,t)}}(t);var r}(t);var r,n,e,o}function Rt(t){if(n=(r=t)&&r.constructor,e="function"==typeof n&&n.prototype||rt,r!==e)return pt(t);var r,n,e,o=[];for(var u in Object(t))ut.call(t,u)&&"constructor"!=u&&o.push(u);return o}function Nt(t){return nr(t)?t:Kt(t)}kt.prototype.clear=function(){this.__data__=gt?gt(null):{}},kt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},kt.prototype.get=function(t){var r=this.__data__;if(gt){var n=r[t];return n===i?void 0:n}return ut.call(r,t)?r[t]:void 0},kt.prototype.has=function(t){var r=this.__data__;return gt?void 0!==r[t]:ut.call(r,t)},kt.prototype.set=function(t,r){return this.__data__[t]=gt&&void 0===r?i:r,this},Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var r=this.__data__,n=Dt(r,t);return!(n<0)&&(n==r.length-1?r.pop():st.call(r,n,1),!0)},Et.prototype.get=function(t){var r=this.__data__,n=Dt(r,t);return n<0?void 0:r[n][1]},Et.prototype.has=function(t){return Dt(this.__data__,t)>-1},Et.prototype.set=function(t,r){var n=this.__data__,e=Dt(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},Tt.prototype.clear=function(){this.__data__={hash:new kt,map:new(ht||Et),string:new kt}},Tt.prototype.delete=function(t){return Bt(this,t).delete(t)},Tt.prototype.get=function(t){return Bt(this,t).get(t)},Tt.prototype.has=function(t){return Bt(this,t).has(t)},Tt.prototype.set=function(t,r){return Bt(this,t).set(t,r),this},It.prototype.add=It.prototype.push=function(t){return this.__data__.set(t,i),this},It.prototype.has=function(t){return this.__data__.has(t)},Ut.prototype.clear=function(){this.__data__=new Et},Ut.prototype.delete=function(t){return this.__data__.delete(t)},Ut.prototype.get=function(t){return this.__data__.get(t)},Ut.prototype.has=function(t){return this.__data__.has(t)},Ut.prototype.set=function(t,r){var n=this.__data__;if(n instanceof Et){var e=n.__data__;if(!ht||e.length<199)return e.push([t,r]),this;n=this.__data__=new Tt(e)}return n.set(t,r),this};var zt=dt&&1/G(new dt([,-0]))[1]==a?function(t){return new dt(t)}:function(){};function qt(t,r,n,e,o,u){var i=2&o,a=t.length,c=r.length;if(a!=c&&!(i&&c>a))return!1;var f=u.get(t);if(f&&u.get(r))return f==r;var l=-1,s=!0,p=1&o?new It:void 0;for(u.set(t,r),u.set(r,t);++l<a;){var v=t[l],h=r[l];if(e)var _=i?e(h,v,l,r,t,u):e(v,h,l,t,r,u);if(void 0!==_){if(_)continue;s=!1;break}if(p){if(!V(r,(function(t,r){if(!p.has(r)&&(v===t||n(v,t,e,o,u)))return p.add(r)}))){s=!1;break}}else if(v!==h&&!n(v,h,e,o,u)){s=!1;break}}return u.delete(t),u.delete(r),s}function Bt(t,n){var e,o,i=t.__data__;return("string"==(o=void 0===(e=n)?"undefined":r(u)(e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e)?i["string"==typeof n?"string":"hash"]:i.map}function Vt(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return Mt(n)?n:void 0}var Zt=function(t){return it.call(t)};function Jt(t,r){return!!(r=null==r?c:r)&&("number"==typeof t||$.test(t))&&t>-1&&t%1==0&&t<r}function Wt(t,n){if(nr(t))return!1;var e=void 0===t?"undefined":r(u)(t);return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!cr(t))||(k.test(t)||!S.test(t)||null!=n&&t in Object(n))}function Xt(t){return t==t&&!ir(t)}function Gt(t,r){return function(n){return null!=n&&(n[t]===r&&(void 0!==r||t in Object(n)))}}(vt&&Zt(new vt(new ArrayBuffer(1)))!=x||ht&&Zt(new ht)!=_||_t&&Zt(_t.resolve())!=g||dt&&Zt(new dt)!=j||yt&&Zt(new yt)!=O)&&(Zt=function(t){var r=it.call(t),n=r==y?t.constructor:void 0,e=n?Ht(n):void 0;if(e)switch(e){case bt:return x;case jt:return _;case wt:return g;case mt:return j;case Ot:return O}return r});var Kt=Qt((function(t){var r;t=null==(r=t)?"":function(t){if("string"==typeof t)return t;if(cr(t))return St?St.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}(r);var n=[];return E.test(t)&&n.push(""),t.replace(T,(function(t,r,e,o){n.push(e?o.replace(I,"$1"):r||t)})),n}));function Yt(t){if("string"==typeof t||cr(t))return t;var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}function Ht(t){if(null!=t){try{return ot.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Qt(t,r){if("function"!=typeof t||r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var e=arguments,o=r?r.apply(this,e):e[0],u=n.cache;if(u.has(o))return u.get(o);var i=t.apply(this,e);return n.cache=u.set(o,i),i};return n.cache=new(Qt.Cache||Tt),n}function tr(t,r){return t===r||t!=t&&r!=r}function rr(t){return function(t){return ar(t)&&er(t)}(t)&&ut.call(t,"callee")&&(!lt.call(t,"callee")||it.call(t)==f)}Qt.Cache=Tt;var nr=Array.isArray;function er(t){return null!=t&&ur(t.length)&&!or(t)}function or(t){var r=ir(t)?it.call(t):"";return r==h||"[object GeneratorFunction]"==r}function ur(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=c}function ir(t){var n=void 0===t?"undefined":r(u)(t);return!!t&&("object"==n||"function"==n)}function ar(t){return!!t&&"object"==typeof t}function cr(t){return"symbol"==(void 0===t?"undefined":r(u)(t))||ar(t)&&it.call(t)==m}var fr=z?function(t){return function(r){return t(r)}}(z):function(t){return ar(t)&&ur(t.length)&&!!D[it.call(t)]};function lr(t){return er(t)?$t(t):Rt(t)}function sr(t){return t}n.exports=function(t,r){return t&&t.length?function(t,r,n){var e=-1,o=q,u=t.length,i=!0,a=[],c=a;if(n)i=!1,o=B;else if(u>=200){var f=r?null:zt(t);if(f)return G(f);i=!1,o=J,c=new It}else c=r?[]:a;t:for(;++e<u;){var l=t[e],s=r?r(l):l;if(l=n||0!==l?l:0,i&&s==s){for(var p=c.length;p--;)if(c[p]===s)continue t;r&&c.push(s),a.push(l)}else o(c,s,n)||(c!==a&&c.push(s),a.push(l))}return a}(t,Pt(r)):[]}}));var u=o("bpxeT"),i=o("2TvXO"),a=o("fCSDZ"),c=(u=o("bpxeT"),i=o("2TvXO"),o("dIxxU")),f=o("8oFZ1");function l(){return s.apply(this,arguments)}function s(){return(s=r(u)(r(i).mark((function t(){var n,e,o;return r(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(f.URL,"/3/movie/").concat(554,"?api_key=").concat(f.API_KEY,"&language=en-US"),t.next=3,r(c).get(n);case 3:return e=t.sent,t.next=6,e.data;case 6:return o=t.sent,console.log(o),t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var p=document.querySelector("[button-add-watch]");console.log(r(a));var v=[],h=[],_=function(t){v.push(t),h=r(a)(v,"id"),localStorage.setItem("films",JSON.stringify(h))};function d(){return(d=r(u)(r(i).mark((function t(n){var e;return r(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,l();case 3:e=t.sent,_(e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}localStorage.getItem("films")&&(v=JSON.parse(localStorage.getItem("films")),console.log(v)),p.addEventListener("click",(function(t){return d.apply(this,arguments)}))}();
//# sourceMappingURL=index.654a3dc2.js.map