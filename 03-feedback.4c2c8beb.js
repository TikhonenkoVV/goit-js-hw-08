function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var r,a,o,i,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=a;return r=a=void 0,l=t,i=e.apply(o,n)}function h(e){return l=e,f=setTimeout(S,t),c?y(e):i}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function S(){var e=m();if(j(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?g(n,o-(e-l)):n}(e))}function T(e){return f=void 0,v&&r?y(e):(r=a=void 0,i)}function w(){var e=m(),n=j(e);if(r=arguments,a=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),i}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=a=f=void 0},w.flush=function(){return void 0===f?i:T(m())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),v(e,t,{leading:r,maxWait:t,trailing:a})};var y={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}};const h=document.querySelector(".feedback-form"),j={email:"",message:""};localStorage.length>0&&(j.email=y.load("feedback-form-state").email,j.message=y.load("feedback-form-state").message,h.email.value=y.load("feedback-form-state").email,h.message.value=y.load("feedback-form-state").message);h.addEventListener("input",e(t)((e=>{""===e.target.value?j[e.target.name]=null:j[e.target.name]=e.target.value,y.save("feedback-form-state",j)}),500));h.addEventListener("submit",(e=>{e.preventDefault(),j[e.target.name]=e.target.value,console.log(j),e.currentTarget.reset(),localStorage.clear()}));
//# sourceMappingURL=03-feedback.4c2c8beb.js.map
