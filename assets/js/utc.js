!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs_plugin_utc=i()}(this,function(){"use strict";var h="minute",c=/[+-]\d\d(?::?\d\d)?/g,l=/([+-]|\d\d)/g;return function(t,i,n){var e=i.prototype;n.utc=function(t){return new i({date:t,utc:!0,args:arguments})},e.utc=function(t){var i=n(this.toDate(),{locale:this.$L,utc:!0});return t?i.add(this.utcOffset(),h):i},e.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var s=e.parse;e.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),s.call(this,t)};var f=e.init;e.init=function(){var t;this.$u?(t=this.$d,this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()):f.call(this)};var u=e.utcOffset;e.utcOffset=function(e,t){var i=this.$utils().u;if(i(e))return this.$u?0:i(this.$offset)?u.call(this):this.$offset;if("string"==typeof e&&null===(e=function(){var t=(void 0===e?"":e).match(c);if(!t)return null;var i=(""+t[0]).match(l)||["-",0,0],t=i[0],i=60*+i[1]+ +i[2];return 0==i?0:"+"===t?i:-i}()))return this;var s=Math.abs(e)<=16?60*e:e,i=this;return t?(i.$offset=s,i.$u=0===e):0!==e?(t=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset(),(i=this.local().add(s+t,h)).$offset=s,i.$x.$localOffset=t):i=this.utc(),i};var o=e.format;e.format=function(t){t=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return o.call(this,t)},e.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},e.isUTC=function(){return!!this.$u},e.toISOString=function(){return this.toDate().toISOString()},e.toString=function(){return this.toDate().toUTCString()};var r=e.toDate;e.toDate=function(t){return"s"===t&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():r.call(this)};var a=e.diff;e.diff=function(t,i,e){if(t&&this.$u===t.$u)return a.call(this,t,i,e);var s=this.local(),t=n(t).local();return a.call(s,t,i,e)}}});