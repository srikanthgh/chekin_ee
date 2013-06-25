/*!
 * 
 * TableSorter 2.0 - Client-side table sorting with ease!
 * Version 2.0.3
 * @requires jQuery v1.2.3
 * 
 * Copyright (c) 2007 Christian Bach
 * Examples and docs at: http://tablesorter.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 */

(function(b){b.extend({tablesorter:new function(){function a(c,a){o(c+","+((new Date).getTime()-a.getTime())+"ms")}function o(c){typeof console!="undefined"&&typeof console.debug!="undefined"?console.log(c):alert(c)}function d(c,a){if(c.config.debug)var e="";var h=c.tBodies[0].rows;if(c.tBodies[0].rows[0])for(var g=[],h=h[0].cells,A=h.length,k=0;k<A;k++){var l=!1;b.metadata&&b(a[k]).metadata()&&b(a[k]).metadata().sorter?l=q(b(a[k]).metadata().sorter):c.config.headers[k]&&c.config.headers[k].sorter&&
(l=q(c.config.headers[k].sorter));if(!l)a:{for(var l=c,j=h[k],n=m.length,s=1;s<n;s++)if(m[s].is(b.trim(w(l.config,j)),l,j)){l=m[s];break a}l=m[0]}c.config.debug&&(e+="column:"+k+" parser:"+l.id+"\n");g.push(l)}c.config.debug&&o(e);return g}function q(c){for(var a=m.length,b=0;b<a;b++)if(m[b].id.toLowerCase()==c.toLowerCase())return m[b];return!1}function r(c){if(c.config.debug)var f=new Date;for(var e=c.tBodies[0]&&c.tBodies[0].rows.length||0,h=c.tBodies[0].rows[0]&&c.tBodies[0].rows[0].cells.length||
0,g=c.config.parsers,d={row:[],normalized:[]},k=0;k<e;++k){var l=c.tBodies[0].rows[k],j=[];d.row.push(b(l));for(var n=0;n<h;++n)j.push(g[n].format(w(c.config,l.cells[n]),c,l.cells[n]));j.push(k);d.normalized.push(j)}c.config.debug&&a("Building cache for "+e+" rows:",f);return d}function w(c,a){if(!a)return"";var e="";return e=c.textExtraction=="simple"?a.childNodes[0]&&a.childNodes[0].hasChildNodes()?a.childNodes[0].innerHTML:a.innerHTML:typeof c.textExtraction=="function"?c.textExtraction(a):b(a).text()}
function u(c,f){if(c.config.debug)var e=new Date;for(var h=f.row,g=f.normalized,d=g.length,k=g[0].length-1,l=b(c.tBodies[0]),j=[],n=0;n<d;n++)if(j.push(h[g[n][k]]),!c.config.appender)for(var s=h[g[n][k]],o=s.length,m=0;m<o;m++)l[0].appendChild(s[m]);c.config.appender&&c.config.appender(c,j);j=null;c.config.debug&&a("Rebuilt table:",e);v(c);setTimeout(function(){b(c).trigger("sortEnd")},0)}function B(c){if(c.config.debug)var f=new Date;for(var e=0;e<c.tHead.rows.length;e++);$tableHeaders=b("thead th",
c);$tableHeaders.each(function(a){this.count=0;this.column=a;var f=c.config.sortInitialOrder;this.order=i=typeof f!="Number"?f.toLowerCase()=="desc"?1:0:f==1?f:0;f=b.metadata&&b(this).metadata().sorter===!1?!0:!1;f||(f=c.config.headers[a]&&c.config.headers[a].sorter===!1?!0:!1);if(f)this.sortDisabled=!0;this.sortDisabled||b(this).addClass(c.config.cssHeader);c.config.headerList[a]=this});c.config.debug&&(a("Built headers:",f),o($tableHeaders));return $tableHeaders}function v(c){for(var a=c.config.widgets,
b=a.length,h=0;h<b;h++)x(a[h]).format(c)}function x(c){for(var a=t.length,b=0;b<a;b++)if(t[b].id.toLowerCase()==c.toLowerCase())return t[b]}function C(c,a){for(var b=a.length,h=0;h<b;h++)if(a[h][0]==c)return!0;return!1}function y(c,a,e,h){a.removeClass(h[0]).removeClass(h[1]);var g=[];a.each(function(){this.sortDisabled||(g[this.column]=b(this))});c=e.length;for(a=0;a<c;a++)g[e[a][0]].addClass(h[e[a][1]])}function D(a){if(a.config.widthFixed){var f=b("<colgroup>");b("tr:first td",a.tBodies[0]).each(function(){f.append(b("<col>").css("width",
b(this).width()))});b(a).prepend(f)}}function z(a,b,e){e.normalized.sort(function(b){for(var f=[],d=[],k=b.length,l,j,n,o=0;o<k;o++)n=b[o][0],j=b[o][1],f[o]=n,d[o]=a.config.parsers[n].type=="text"?j==0?E:F:j==0?G:H;l=e.normalized[0].length-1;return function(a,c){for(var b,e=0;e<k;e++)if(b=f[e],b=d[e](a[b],c[b]))return b;return a[l]-c[l]}}(b));return e}function E(a,b){return a<b?-1:a>b?1:0}function F(a,b){return b<a?-1:b>a?1:0}function G(a,b){return a-b}function H(a,b){return b-a}var m=[],t=[];this.defaults=
{cssHeader:"header",cssAsc:"headerSortUp",cssDesc:"headerSortDown",sortInitialOrder:"asc",sortMultiSortKey:"shiftKey",sortForce:null,sortAppend:null,textExtraction:"simple",parsers:{},widgets:[],widgetZebra:{css:["even","odd"]},headers:{},widthFixed:!1,cancelSelection:!0,sortList:[],headerList:[],dateFormat:"us",decimal:".",debug:!1};this.benchmark=a;this.construct=function(a){return this.each(function(){if(this.tHead&&this.tBodies){var f,e,h,g;this.config={};g=b.extend(this.config,b.tablesorter.defaults,
a);f=b(this);e=B(this);this.config.parsers=d(this,e);h=r(this);var o=[g.cssDesc,g.cssAsc];D(this);e.click(function(a){f.trigger("sortStart");var c=f[0].tBodies[0]&&f[0].tBodies[0].rows.length||0;if(!this.sortDisabled&&c>0){b(this);c=this.column;this.order=this.count++%2;if(a[g.sortMultiSortKey])if(C(c,g.sortList))for(a=0;a<g.sortList.length;a++){var j=g.sortList[a],d=g.headerList[j[0]];if(j[0]==c)d.count=j[1],d.count++,j[1]=d.count%2}else g.sortList.push([c,this.order]);else{g.sortList=[];if(g.sortForce!=
null){j=g.sortForce;for(a=0;a<j.length;a++)j[a][0]!=c&&g.sortList.push(j[a])}g.sortList.push([c,this.order])}setTimeout(function(){y(f[0],e,g.sortList,o);u(f[0],z(f[0],g.sortList,h))},1);return!1}}).mousedown(function(){if(g.cancelSelection)return this.onselectstart=function(){return!1},!1});f.bind("update",function(){this.config.parsers=d(this,e);h=r(this)}).bind("sorton",function(a,c){b(this).trigger("sortStart");g.sortList=c;for(var f=g.sortList,d=this.config,m=f.length,p=0;p<m;p++){var q=f[p],
r=d.headerList[q[0]];r.count=q[1];r.count++}y(this,e,f,o);u(this,z(this,f,h))}).bind("appendCache",function(){u(this,h)}).bind("applyWidgetId",function(a,c){x(c).format(this)}).bind("applyWidgets",function(){v(this)});if(b.metadata&&b(this).metadata()&&b(this).metadata().sortlist)g.sortList=b(this).metadata().sortlist;g.sortList.length>0&&f.trigger("sorton",[g.sortList]);v(this)}})};this.addParser=function(a){for(var b=m.length,e=!0,h=0;h<b;h++)m[h].id.toLowerCase()==a.id.toLowerCase()&&(e=!1);e&&
m.push(a)};this.addWidget=function(a){t.push(a)};this.formatFloat=function(a){a=parseFloat(a);return isNaN(a)?0:a};this.formatInt=function(a){a=parseInt(a);return isNaN(a)?0:a};this.isDigit=function(a,f){var e="\\"+f.decimal;return RegExp("/(^[+]?0("+e+"0+)?$)|(^([-+]?[1-9][0-9]*)$)|(^([-+]?((0?|[1-9][0-9]*)"+e+"(0*[1-9][0-9]*)))$)|(^[-+]?[1-9]+[0-9]*"+e+"0+$)/").test(b.trim(a))};this.clearTableBody=function(a){b.browser.msie?function(){for(;this.firstChild;)this.removeChild(this.firstChild)}.apply(a.tBodies[0]):
a.tBodies[0].innerHTML=""}}});b.fn.extend({tablesorter:b.tablesorter.construct});var d=b.tablesorter;d.addParser({id:"text",is:function(){return!0},format:function(a){return b.trim(a.toLowerCase())},type:"text"});d.addParser({id:"digit",is:function(a,d){return b.tablesorter.isDigit(a,d.config)},format:function(a){return b.tablesorter.formatFloat(a)},type:"numeric"});d.addParser({id:"currency",is:function(a){return/^[\u00a3$\u20ac?.]/.test(a)},format:function(a){return b.tablesorter.formatFloat(a.replace(RegExp(/[^0-9.]/g),
""))},type:"numeric"});d.addParser({id:"ipAddress",is:function(a){return/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(a)},format:function(a){for(var a=a.split("."),d="",p=a.length,q=0;q<p;q++){var r=a[q];d+=r.length==2?"0"+r:r}return b.tablesorter.formatFloat(d)},type:"numeric"});d.addParser({id:"url",is:function(a){return/^(https?|ftp|file):\/\/$/.test(a)},format:function(a){return jQuery.trim(a.replace(RegExp(/(https?|ftp|file):\/\//),""))},type:"text"});d.addParser({id:"isoDate",is:function(a){return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},
format:function(a){return b.tablesorter.formatFloat(a!=""?(new Date(a.replace(RegExp(/-/g),"/"))).getTime():"0")},type:"numeric"});d.addParser({id:"percent",is:function(a){return/\%$/.test(b.trim(a))},format:function(a){return b.tablesorter.formatFloat(a.replace(RegExp(/%/g),""))},type:"numeric"});d.addParser({id:"usLongDate",is:function(a){return a.match(RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/))},format:function(a){return b.tablesorter.formatFloat((new Date(a)).getTime())},
type:"numeric"});d.addParser({id:"shortDate",is:function(a){return/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(a)},format:function(a,d){var p=d.config,a=a.replace(/\-/g,"/");if(p.dateFormat=="us")a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$1/$2");else if(p.dateFormat=="uk")a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$2/$1");else if(p.dateFormat=="dd/mm/yy"||p.dateFormat=="dd-mm-yy")a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3");return b.tablesorter.formatFloat((new Date(a)).getTime())},
type:"numeric"});d.addParser({id:"time",is:function(a){return/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(a)},format:function(a){return b.tablesorter.formatFloat((new Date("2000/01/01 "+a)).getTime())},type:"numeric"});d.addParser({id:"metadata",is:function(){return!1},format:function(a,d,p){a=d.config;a=!a.parserMetadataName?"sortValue":a.parserMetadataName;return b(p).metadata()[a]},type:"numeric"});d.addWidget({id:"zebra",format:function(a){if(a.config.debug)var d=new Date;
b("tr:visible",a.tBodies[0]).filter(":even").removeClass(a.config.widgetZebra.css[1]).addClass(a.config.widgetZebra.css[0]).end().filter(":odd").removeClass(a.config.widgetZebra.css[0]).addClass(a.config.widgetZebra.css[1]);a.config.debug&&b.tablesorter.benchmark("Applying Zebra widget",d)}})})(jQuery);