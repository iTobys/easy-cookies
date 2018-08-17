"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function r(e,s){for(var o=0;o<s.length;o++){var r=s[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,s,o){return s&&r(e.prototype,s),o&&r(e,o),e}}();function _classCallCheck(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}var CodeCookies=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"getCookies",value:function(e){var t=this,n=e;return void 0===n&&(n=this.BASE_COOKIES_KEY),new Promise(function(e,s){if(0<document.cookie.length){var o=document.cookie.indexOf(n+"=");if(-1!==o){o=o+n.length+1;var r=document.cookie.indexOf(";",o);-1===r&&(r=document.cookie.length),e(document.cookie.substring(o,r))}else t.errorMsg.msg="你的key值不存在或已经过期了",s(t.errorMsg)}else t.errorMsg.msg="你的cookies列表为空",s(t.errorMsg)})}},{key:"setCookies",value:function(e,r,t){var n=this,c=(3<arguments.length&&void 0!==arguments[3]&&arguments[3],e||this.BASE_COOKIES_KEY),i=this.BASE_RUNTIME;return new Promise(function(s,o){switch(""===r&&(n.errorMsg.msg="传入的value不能为空，必须携带值",o(n.errorMsg)),t.constructor){case Number:i="; expires=Fri, 31 Dec 9999 23:59:59 GMT";break;case String:i="; expires="+i;break;case Date:i="; expires="+t.toUTCString()}document.cookie=c+"="+r+i,n.getCookies(c).then(function(e){n.successMsg.msg="设置成功",s(n.successMsg)}).catch(function(e){n.errorMsg.msg="设置cookies失败",o(n.errorMsg)})})}},{key:"cleanCookies",value:function(e){var r=this;return new Promise(function(s,o){r.setCookies(e,-1).then(function(e){r.successMsg.msg="删除成功",s(r.successMsg)}).catch(function(e){r.errorMsg.msg="删除失败或值已经不存在",o(r.errorMsg)})})}}]),e}();CodeCookies.BASE_COOKIES_KEY="code_cookies",CodeCookies.BASE_RUNTIME="; max-age=7200",CodeCookies.errorMsg={status:"error",msg:"no msg"},CodeCookies.successMsg={status:"success",msg:"success msg"},exports.default=CodeCookies;