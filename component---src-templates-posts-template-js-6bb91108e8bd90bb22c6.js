(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/h9T":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("xfY5");function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}},"4+6U":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));n("SRfc"),n("Oyvg"),n("pIFo"),n("KKXr"),n("a1Th"),n("h7Nl"),n("Btvt");var r=n("/h9T"),a=n("JCDJ"),i=36e5,o=6e4,u=2,s={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},c=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,d=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,l=/^([+-])(\d{2})(?::?(\d{2}))?$/;function f(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t||{},f=null==n.additionalDigits?u:Object(r.a)(n.additionalDigits);if(2!==f&&1!==f&&0!==f)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var y,b=function(e){var t,n={},r=e.split(s.dateTimeDelimiter);/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],s.timeZoneDelimiter.test(n.date)&&(n.date=e.split(s.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length)));if(t){var a=s.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}(e);if(b.date){var v=function(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}(b.date,f);y=function(e,t){if(null===t)return null;var n=e.match(c);if(!n)return null;var r=!!n[4],a=h(n[1]),i=h(n[2])-1,o=h(n[3]),u=h(n[4]),s=h(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,s)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,i=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(t,u,s):new Date(NaN);var d=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(g[t]||(w(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(w(e)?366:365)}(t,a)?(d.setUTCFullYear(t,i,Math.max(a,o)),d):new Date(NaN)}(v.restDateString,v.year)}if(isNaN(y)||!y)return new Date(NaN);var p,T=y.getTime(),M=0;if(b.time&&(M=function(e){var t=e.match(d);if(!t)return null;var n=m(t[1]),r=m(t[2]),a=m(t[3]);if(!function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a))return NaN;return n*i+r*o+1e3*a}(b.time),isNaN(M)||null===M))return new Date(NaN);if(b.timezone){if(p=function(e){if("Z"===e)return 0;var t=e.match(l);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;if(!function(e,t){return t>=0&&t<=59}(0,a))return NaN;return n*(r*i+a*o)}(b.timezone),isNaN(p))return new Date(NaN)}else{var C=T+M,D=new Date(C);p=Object(a.a)(D);var N=new Date(C);p>0?N.setDate(D.getDate()+1):N.setDate(D.getDate()-1);var E=Object(a.a)(N)-p;E>0&&(p+=E)}return new Date(T+M+p)}function h(e){return e?parseInt(e):1}function m(e){return e&&parseFloat(e.replace(",","."))||0}var g=[31,null,31,30,31,30,31,31,30,31,30,31];function w(e){return e%400==0||e%4==0&&e%100}},AgXC:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u})),n.d(t,"pageQuery",(function(){return s}));var r=n("q1tI"),a=n.n(r),i=n("I/Ru"),o=n("K58I");function u(e){var t=e.data.allMarkdownRemark.edges;return a.a.createElement(i.a,null,a.a.createElement("main",null,a.a.createElement("h1",null,"Posts"),t.map((function(e){return a.a.createElement(o.a,{data:e,key:e.node.fields.slug})}))))}var s="3834244994"},JCDJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=6e4;function a(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var a=t.getTime()%r;return n*r+a}},K58I:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=n("4+6U"),u=n("sWYD");n("S9Hj");var s=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.data.node,t=e.frontmatter,n=t.title,r=t.date,s=t.category,c=t.description,d=e.fields,l=d.slug,f=d.categorySlug,h=Object(o.a)(r);return a.a.createElement("div",{className:"postitem"},a.a.createElement("div",{className:"postitem-meta"},r&&a.a.createElement("time",{className:"postitem-meta-time",dateTime:Object(u.a)(h,"MMMM d, yyyy")},Object(u.a)(h,"MMMM yyyy")),a.a.createElement("span",{className:"postitem-meta-category",key:f},a.a.createElement(i.Link,{to:f,className:"postitem-meta-category-link"},s))),a.a.createElement("h2",{className:"postitem-title"},a.a.createElement(i.Link,{className:"postitem-title-link",to:l},n)),a.a.createElement("p",{className:"postitem-description"},c),a.a.createElement(i.Link,{className:"postitem-readmore",to:l},"Read"))},r}(a.a.Component);t.a=s},sWYD:function(e,t,n){"use strict";n("pIFo"),n("SRfc"),n("bWfx"),n("a1Th"),n("h7Nl"),n("Btvt");function r(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function i(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var o={date:i({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:i({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:i({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};n("xfY5"),n("rGqo"),n("yt8O");function s(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function c(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(d,(function(e){return e.test(r)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(d,(function(e){return e.test(r)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var d,l={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:o,formatRelative:function(e,t,n,r){return u[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(d={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(d.matchPattern);if(!a)return null;var i=a[0],o=n.match(d.parsePattern);if(!o)return null;var u=d.valueCallback?d.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},f=n("/h9T");function h(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=r(e).getTime(),a=Object(f.a)(t);return new Date(n+a)}(e,-Object(f.a)(t))}function m(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var g={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return m("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):m(n+1,2)},d:function(e,t){return m(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return m(e.getUTCHours()%12||12,t.length)},H:function(e,t){return m(e.getUTCHours(),t.length)},m:function(e,t){return m(e.getUTCMinutes(),t.length)},s:function(e,t){return m(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return m(Math.floor(r*Math.pow(10,n-3)),t.length)}},w=864e5;function y(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=r(e),n=t.getUTCDay(),a=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-a),t.setUTCHours(0,0,0,0),t}function b(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=r(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var i=y(a),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var u=y(o);return t.getTime()>=i.getTime()?n+1:t.getTime()>=u.getTime()?n:n-1}var v=6048e5;function p(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=r(e),n=y(t).getTime()-function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=b(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),y(n)}(t).getTime();return Math.round(n/v)+1}function T(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t||{},a=n.locale,i=a&&a.options&&a.options.weekStartsOn,o=null==i?0:Object(f.a)(i),u=null==n.weekStartsOn?o:Object(f.a)(n.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=r(e),c=s.getUTCDay(),d=(c<u?7:0)+c-u;return s.setUTCDate(s.getUTCDate()-d),s.setUTCHours(0,0,0,0),s}function M(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=r(e,t),a=n.getUTCFullYear(),i=t||{},o=i.locale,u=o&&o.options&&o.options.firstWeekContainsDate,s=null==u?1:Object(f.a)(u),c=null==i.firstWeekContainsDate?s:Object(f.a)(i.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(a+1,0,c),d.setUTCHours(0,0,0,0);var l=T(d,t),h=new Date(0);h.setUTCFullYear(a,0,c),h.setUTCHours(0,0,0,0);var m=T(h,t);return n.getTime()>=l.getTime()?a+1:n.getTime()>=m.getTime()?a:a-1}var C=6048e5;function D(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=r(e),a=T(n,t).getTime()-function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:Object(f.a)(a),o=null==n.firstWeekContainsDate?i:Object(f.a)(n.firstWeekContainsDate),u=M(e,t),s=new Date(0);return s.setUTCFullYear(u,0,o),s.setUTCHours(0,0,0,0),T(s,t)}(n,t).getTime();return Math.round(a/C)+1}var N="midnight",E="noon",x="morning",S="afternoon",U="evening",P="night";function k(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+m(i,2)}function O(e,t){return e%60==0?(e>0?"-":"+")+m(Math.abs(e)/60,2):q(e,t)}function q(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+m(Math.floor(a/60),2)+n+m(a%60,2)}var W={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return g.y(e,t)},Y:function(e,t,n,r){var a=M(e,r),i=a>0?a:1-a;return"YY"===t?m(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):m(i,t.length)},R:function(e,t){return m(b(e),t.length)},u:function(e,t){return m(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return m(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return m(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return g.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return m(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=D(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):m(a,t.length)},I:function(e,t,n){var r=p(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):m(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):g.d(e,t)},D:function(e,t,n){var a=function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=r(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=n-t.getTime();return Math.floor(a/w)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):m(a,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return m(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return m(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return m(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?E:0===a?N:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?U:a>=12?S:a>=4?x:P,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return g.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):g.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):m(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):m(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):g.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):g.s(e,t)},S:function(e,t){return g.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return O(a);case"XXXX":case"XX":return q(a);case"XXXXX":case"XXX":default:return q(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return O(a);case"xxxx":case"xx":return q(a);case"xxxxx":case"xxx":default:return q(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+k(a,":");case"OOOO":default:return"GMT"+q(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+k(a,":");case"zzzz":default:return"GMT"+q(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return m(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return m((r._originalDate||e).getTime(),t.length)}};function Y(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function j(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var I={p:j,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return Y(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",Y(a,t)).replace("{{time}}",j(i,t))}},z=n("JCDJ"),F=(n("V+eJ"),["D","DD"]),L=["YY","YYYY"];function X(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}n.d(t,"a",(function(){return B}));var A=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,H=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,G=/^'([^]*?)'?$/,Q=/''/g,R=/[a-zA-Z]/;function B(e,t,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var a=String(t),i=n||{},o=i.locale||l,u=o.options&&o.options.firstWeekContainsDate,s=null==u?1:Object(f.a)(u),c=null==i.firstWeekContainsDate?s:Object(f.a)(i.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=o.options&&o.options.weekStartsOn,m=null==d?0:Object(f.a)(d),g=null==i.weekStartsOn?m:Object(f.a)(i.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var w=r(e);if(!function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=r(e);return!isNaN(t)}(w))throw new RangeError("Invalid time value");var y=h(w,Object(z.a)(w)),b={firstWeekContainsDate:c,weekStartsOn:g,locale:o,_originalDate:w};return a.match(H).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,I[t])(e,o.formatLong,b):e})).join("").match(A).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return e.match(G)[1].replace(Q,"'");var n,r=W[t];if(r)return i.useAdditionalWeekYearTokens||(n=e,-1===L.indexOf(n))||X(e),!i.useAdditionalDayOfYearTokens&&function(e){return-1!==F.indexOf(e)}(e)&&X(e),r(y,e,o.localize,b);if(t.match(R))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("")}},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),a=n("aagx"),i=n("LZWt"),o=n("Xbzi"),u=n("apmT"),s=n("eeVq"),c=n("kJMx").f,d=n("EemH").f,l=n("hswa").f,f=n("qncB").trim,h=r.Number,m=h,g=h.prototype,w="Number"==i(n("Kuth")(g)),y="trim"in String.prototype,b=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,i=(t=y?t.trim():f(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var o,s=t.slice(2),c=0,d=s.length;c<d;c++)if((o=s.charCodeAt(c))<48||o>a)return NaN;return parseInt(s,r)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(w?s((function(){g.valueOf.call(n)})):"Number"!=i(n))?o(new m(b(t)),n,h):b(t)};for(var v,p=n("nh4g")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;p.length>T;T++)a(m,v=p[T])&&!a(h,v)&&l(h,v,d(m,v));h.prototype=g,g.constructor=h,n("KroJ")(r,"Number",h)}}}]);
//# sourceMappingURL=component---src-templates-posts-template-js-6bb91108e8bd90bb22c6.js.map