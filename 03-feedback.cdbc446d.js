function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,s=l||u||Function("return this")(),c=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return s.Date.now()};function v(e,t,n){var r,a,o,i,f,l,u=0,s=!1,c=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=a;return r=a=void 0,u=t,i=e.apply(o,n)}function h(e){return u=e,f=setTimeout(j,t),s?y(e):i}function T(e){var n=e-l;return void 0===l||n>=t||n<0||c&&e-u>=o}function j(){var e=g();if(T(e))return S(e);f=setTimeout(j,function(e){var n=t-(e-l);return c?m(n,o-(e-u)):n}(e))}function S(e){return f=void 0,v&&r?y(e):(r=a=void 0,i)}function w(){var e=g(),n=T(e);if(r=arguments,a=this,l=e,n){if(void 0===f)return h(l);if(c)return f=setTimeout(j,t),y(l)}return void 0===f&&(f=setTimeout(j,t)),i}return t=p(t)||0,b(n)&&(s=!!n.leading,o=(c="maxWait"in n)?d(p(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),u=0,r=l=a=f=void 0},w.flush=function(){return void 0===f?i:S(g())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),v(e,t,{leading:r,maxWait:t,trailing:a})};var y={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}};const h=document.querySelector(".feedback-form");let T={email:"",message:""};localStorage.length>0&&y.load("feedback-form-state")&&(T.email=y.load("feedback-form-state").email,T.message=y.load("feedback-form-state").message,h.email.value=y.load("feedback-form-state").email,h.message.value=y.load("feedback-form-state").message);h.addEventListener("input",e(t)((e=>{T[e.target.name]=e.target.value,y.save("feedback-form-state",T)}),500));h.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;""!==n.value&&""!==t.value?(T.email=t.value,T.message=n.value,console.log(T),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),T={email:"",message:""}):alert("Будь ласка, заповніть всі поля!")}));
//# sourceMappingURL=03-feedback.cdbc446d.js.map
