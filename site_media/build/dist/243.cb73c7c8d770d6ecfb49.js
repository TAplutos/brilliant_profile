(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[243],{2536:function(t,e){var r=function(){this.Diff_Timeout=1;this.Diff_EditCost=4;this.Match_Threshold=.5;this.Match_Distance=1e3;this.Patch_DeleteThreshold=.5;this.Patch_Margin=4;this.Match_MaxBits=32};var i=-1;var n=1;var a=0;r.Diff=function(t,e){return[t,e]};r.prototype.diff_main=function(t,e,i,n){if(typeof n=="undefined"){if(this.Diff_Timeout<=0){n=Number.MAX_VALUE}else{n=(new Date).getTime()+this.Diff_Timeout*1e3}}var f=n;if(t==null||e==null){throw new Error("Null input. (diff_main)")}if(t==e){if(t){return[new r.Diff(a,t)]}return[]}if(typeof i=="undefined"){i=true}var s=i;var h=this.diff_commonPrefix(t,e);var l=t.substring(0,h);t=t.substring(h);e=e.substring(h);h=this.diff_commonSuffix(t,e);var g=t.substring(t.length-h);t=t.substring(0,t.length-h);e=e.substring(0,e.length-h);var o=this.diff_compute_(t,e,s,f);if(l){o.unshift(new r.Diff(a,l))}if(g){o.push(new r.Diff(a,g))}this.diff_cleanupMerge(o);return o};r.prototype.diff_compute_=function(t,e,f,s){var h;if(!t){return[new r.Diff(n,e)]}if(!e){return[new r.Diff(i,t)]}var l=t.length>e.length?t:e;var g=t.length>e.length?e:t;var o=l.indexOf(g);if(o!=-1){h=[new r.Diff(n,l.substring(0,o)),new r.Diff(a,g),new r.Diff(n,l.substring(o+g.length))];if(t.length>e.length){h[0][0]=h[2][0]=i}return h}if(g.length==1){return[new r.Diff(i,t),new r.Diff(n,e)]}var v=this.diff_halfMatch_(t,e);if(v){var u=v[0];var c=v[1];var p=v[2];var d=v[3];var _=v[4];var b=this.diff_main(u,p,f,s);var w=this.diff_main(c,d,f,s);return b.concat([new r.Diff(a,_)],w)}if(f&&t.length>100&&e.length>100){return this.diff_lineMode_(t,e,s)}return this.diff_bisect_(t,e,s)};r.prototype.diff_lineMode_=function(t,e,f){var s=this.diff_linesToChars_(t,e);t=s.chars1;e=s.chars2;var h=s.lineArray;var l=this.diff_main(t,e,false,f);this.diff_charsToLines_(l,h);this.diff_cleanupSemantic(l);l.push(new r.Diff(a,""));var g=0;var o=0;var v=0;var u="";var c="";while(g<l.length){switch(l[g][0]){case n:v++;c+=l[g][1];break;case i:o++;u+=l[g][1];break;case a:if(o>=1&&v>=1){l.splice(g-o-v,o+v);g=g-o-v;var p=this.diff_main(u,c,false,f);for(var d=p.length-1;d>=0;d--){l.splice(g,0,p[d])}g=g+p.length}v=0;o=0;u="";c="";break}g++}l.pop();return l};r.prototype.diff_bisect_=function(t,e,a){var f=t.length;var s=e.length;var h=Math.ceil((f+s)/2);var l=h;var g=2*h;var o=new Array(g);var v=new Array(g);for(var u=0;u<g;u++){o[u]=-1;v[u]=-1}o[l+1]=0;v[l+1]=0;var c=f-s;var p=c%2!=0;var d=0;var _=0;var b=0;var w=0;for(var m=0;m<h;m++){if((new Date).getTime()>a){break}for(var x=-m+d;x<=m-_;x+=2){var M=l+x;var y;if(x==-m||x!=m&&o[M-1]<o[M+1]){y=o[M+1]}else{y=o[M-1]+1}var D=y-x;while(y<f&&D<s&&t.charAt(y)==e.charAt(D)){y++;D++}o[M]=y;if(y>f){_+=2}else if(D>s){d+=2}else if(p){var k=l+c-x;if(k>=0&&k<g&&v[k]!=-1){var A=f-v[k];if(y>=A){return this.diff_bisectSplit_(t,e,y,D,a)}}}}for(var E=-m+b;E<=m-w;E+=2){var k=l+E;var A;if(E==-m||E!=m&&v[k-1]<v[k+1]){A=v[k+1]}else{A=v[k-1]+1}var I=A-E;while(A<f&&I<s&&t.charAt(f-A-1)==e.charAt(s-I-1)){A++;I++}v[k]=A;if(A>f){w+=2}else if(I>s){b+=2}else if(!p){var M=l+c-E;if(M>=0&&M<g&&o[M]!=-1){var y=o[M];var D=l+y-M;A=f-A;if(y>=A){return this.diff_bisectSplit_(t,e,y,D,a)}}}}}return[new r.Diff(i,t),new r.Diff(n,e)]};r.prototype.diff_bisectSplit_=function(t,e,r,i,n){var a=t.substring(0,r);var f=e.substring(0,i);var s=t.substring(r);var h=e.substring(i);var l=this.diff_main(a,f,false,n);var g=this.diff_main(s,h,false,n);return l.concat(g)};r.prototype.diff_linesToChars_=function(t,e){var r=[];var i={};r[0]="";function n(t){var e="";var n=0;var f=-1;var s=r.length;while(f<t.length-1){f=t.indexOf("\n",n);if(f==-1){f=t.length-1}var h=t.substring(n,f+1);if(i.hasOwnProperty?i.hasOwnProperty(h):i[h]!==undefined){e+=String.fromCharCode(i[h])}else{if(s==a){h=t.substring(n);f=t.length}e+=String.fromCharCode(s);i[h]=s;r[s++]=h}n=f+1}return e}var a=4e4;var f=n(t);a=65535;var s=n(e);return{chars1:f,chars2:s,lineArray:r}};r.prototype.diff_charsToLines_=function(t,e){for(var r=0;r<t.length;r++){var i=t[r][1];var n=[];for(var a=0;a<i.length;a++){n[a]=e[i.charCodeAt(a)]}t[r][1]=n.join("")}};r.prototype.diff_commonPrefix=function(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0)){return 0}var r=0;var i=Math.min(t.length,e.length);var n=i;var a=0;while(r<n){if(t.substring(a,n)==e.substring(a,n)){r=n;a=r}else{i=n}n=Math.floor((i-r)/2+r)}return n};r.prototype.diff_commonSuffix=function(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1)){return 0}var r=0;var i=Math.min(t.length,e.length);var n=i;var a=0;while(r<n){if(t.substring(t.length-n,t.length-a)==e.substring(e.length-n,e.length-a)){r=n;a=r}else{i=n}n=Math.floor((i-r)/2+r)}return n};r.prototype.diff_commonOverlap_=function(t,e){var r=t.length;var i=e.length;if(r==0||i==0){return 0}if(r>i){t=t.substring(r-i)}else if(r<i){e=e.substring(0,r)}var n=Math.min(r,i);if(t==e){return n}var a=0;var f=1;while(true){var s=t.substring(n-f);var h=e.indexOf(s);if(h==-1){return a}f+=h;if(h==0||t.substring(n-f)==e.substring(0,f)){a=f;f++}}};r.prototype.diff_halfMatch_=function(t,e){if(this.Diff_Timeout<=0){return null}var r=t.length>e.length?t:e;var i=t.length>e.length?e:t;if(r.length<4||i.length*2<r.length){return null}var n=this;function a(t,e,r){var i=t.substring(r,r+Math.floor(t.length/4));var a=-1;var f="";var s,h,l,g;while((a=e.indexOf(i,a+1))!=-1){var o=n.diff_commonPrefix(t.substring(r),e.substring(a));var v=n.diff_commonSuffix(t.substring(0,r),e.substring(0,a));if(f.length<v+o){f=e.substring(a-v,a)+e.substring(a,a+o);s=t.substring(0,r-v);h=t.substring(r+o);l=e.substring(0,a-v);g=e.substring(a+o)}}if(f.length*2>=t.length){return[s,h,l,g,f]}else{return null}}var f=a(r,i,Math.ceil(r.length/4));var s=a(r,i,Math.ceil(r.length/2));var h;if(!f&&!s){return null}else if(!s){h=f}else if(!f){h=s}else{h=f[4].length>s[4].length?f:s}var l,g,o,v;if(t.length>e.length){l=h[0];g=h[1];o=h[2];v=h[3]}else{o=h[0];v=h[1];l=h[2];g=h[3]}var u=h[4];return[l,g,o,v,u]};r.prototype.diff_cleanupSemantic=function(t){var e=false;var f=[];var s=0;var h=null;var l=0;var g=0;var o=0;var v=0;var u=0;while(l<t.length){if(t[l][0]==a){f[s++]=l;g=v;o=u;v=0;u=0;h=t[l][1]}else{if(t[l][0]==n){v+=t[l][1].length}else{u+=t[l][1].length}if(h&&h.length<=Math.max(g,o)&&h.length<=Math.max(v,u)){t.splice(f[s-1],0,new r.Diff(i,h));t[f[s-1]+1][0]=n;s--;s--;l=s>0?f[s-1]:-1;g=0;o=0;v=0;u=0;h=null;e=true}}l++}if(e){this.diff_cleanupMerge(t)}this.diff_cleanupSemanticLossless(t);l=1;while(l<t.length){if(t[l-1][0]==i&&t[l][0]==n){var c=t[l-1][1];var p=t[l][1];var d=this.diff_commonOverlap_(c,p);var _=this.diff_commonOverlap_(p,c);if(d>=_){if(d>=c.length/2||d>=p.length/2){t.splice(l,0,new r.Diff(a,p.substring(0,d)));t[l-1][1]=c.substring(0,c.length-d);t[l+1][1]=p.substring(d);l++}}else{if(_>=c.length/2||_>=p.length/2){t.splice(l,0,new r.Diff(a,c.substring(0,_)));t[l-1][0]=n;t[l-1][1]=p.substring(0,p.length-_);t[l+1][0]=i;t[l+1][1]=c.substring(_);l++}}l++}l++}};r.prototype.diff_cleanupSemanticLossless=function(t){function e(t,e){if(!t||!e){return 6}var i=t.charAt(t.length-1);var n=e.charAt(0);var a=i.match(r.nonAlphaNumericRegex_);var f=n.match(r.nonAlphaNumericRegex_);var s=a&&i.match(r.whitespaceRegex_);var h=f&&n.match(r.whitespaceRegex_);var l=s&&i.match(r.linebreakRegex_);var g=h&&n.match(r.linebreakRegex_);var o=l&&t.match(r.blanklineEndRegex_);var v=g&&e.match(r.blanklineStartRegex_);if(o||v){return 5}else if(l||g){return 4}else if(a&&!s&&h){return 3}else if(s||h){return 2}else if(a||f){return 1}return 0}var i=1;while(i<t.length-1){if(t[i-1][0]==a&&t[i+1][0]==a){var n=t[i-1][1];var f=t[i][1];var s=t[i+1][1];var h=this.diff_commonSuffix(n,f);if(h){var l=f.substring(f.length-h);n=n.substring(0,n.length-h);f=l+f.substring(0,f.length-h);s=l+s}var g=n;var o=f;var v=s;var u=e(n,f)+e(f,s);while(f.charAt(0)===s.charAt(0)){n+=f.charAt(0);f=f.substring(1)+s.charAt(0);s=s.substring(1);var c=e(n,f)+e(f,s);if(c>=u){u=c;g=n;o=f;v=s}}if(t[i-1][1]!=g){if(g){t[i-1][1]=g}else{t.splice(i-1,1);i--}t[i][1]=o;if(v){t[i+1][1]=v}else{t.splice(i+1,1);i--}}}i++}};r.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/;r.whitespaceRegex_=/\s/;r.linebreakRegex_=/[\r\n]/;r.blanklineEndRegex_=/\n\r?\n$/;r.blanklineStartRegex_=/^\r?\n\r?\n/;r.prototype.diff_cleanupEfficiency=function(t){var e=false;var f=[];var s=0;var h=null;var l=0;var g=false;var o=false;var v=false;var u=false;while(l<t.length){if(t[l][0]==a){if(t[l][1].length<this.Diff_EditCost&&(v||u)){f[s++]=l;g=v;o=u;h=t[l][1]}else{s=0;h=null}v=u=false}else{if(t[l][0]==i){u=true}else{v=true}if(h&&(g&&o&&v&&u||h.length<this.Diff_EditCost/2&&g+o+v+u==3)){t.splice(f[s-1],0,new r.Diff(i,h));t[f[s-1]+1][0]=n;s--;h=null;if(g&&o){v=u=true;s=0}else{s--;l=s>0?f[s-1]:-1;v=u=false}e=true}}l++}if(e){this.diff_cleanupMerge(t)}};r.prototype.diff_cleanupMerge=function(t){t.push(new r.Diff(a,""));var e=0;var f=0;var s=0;var h="";var l="";var g;while(e<t.length){switch(t[e][0]){case n:s++;l+=t[e][1];e++;break;case i:f++;h+=t[e][1];e++;break;case a:if(f+s>1){if(f!==0&&s!==0){g=this.diff_commonPrefix(l,h);if(g!==0){if(e-f-s>0&&t[e-f-s-1][0]==a){t[e-f-s-1][1]+=l.substring(0,g)}else{t.splice(0,0,new r.Diff(a,l.substring(0,g)));e++}l=l.substring(g);h=h.substring(g)}g=this.diff_commonSuffix(l,h);if(g!==0){t[e][1]=l.substring(l.length-g)+t[e][1];l=l.substring(0,l.length-g);h=h.substring(0,h.length-g)}}e-=f+s;t.splice(e,f+s);if(h.length){t.splice(e,0,new r.Diff(i,h));e++}if(l.length){t.splice(e,0,new r.Diff(n,l));e++}e++}else if(e!==0&&t[e-1][0]==a){t[e-1][1]+=t[e][1];t.splice(e,1)}else{e++}s=0;f=0;h="";l="";break}}if(t[t.length-1][1]===""){t.pop()}var o=false;e=1;while(e<t.length-1){if(t[e-1][0]==a&&t[e+1][0]==a){if(t[e][1].substring(t[e][1].length-t[e-1][1].length)==t[e-1][1]){t[e][1]=t[e-1][1]+t[e][1].substring(0,t[e][1].length-t[e-1][1].length);t[e+1][1]=t[e-1][1]+t[e+1][1];t.splice(e-1,1);o=true}else if(t[e][1].substring(0,t[e+1][1].length)==t[e+1][1]){t[e-1][1]+=t[e+1][1];t[e][1]=t[e][1].substring(t[e+1][1].length)+t[e+1][1];t.splice(e+1,1);o=true}}e++}if(o){this.diff_cleanupMerge(t)}};r.prototype.diff_xIndex=function(t,e){var r=0;var a=0;var f=0;var s=0;var h;for(h=0;h<t.length;h++){if(t[h][0]!==n){r+=t[h][1].length}if(t[h][0]!==i){a+=t[h][1].length}if(r>e){break}f=r;s=a}if(t.length!=h&&t[h][0]===i){return s}return s+(e-f)};r.prototype.diff_prettyHtml=function(t){var e=[];var r=/&/g;var f=/</g;var s=/>/g;var h=/\n/g;for(var l=0;l<t.length;l++){var g=t[l][0];var o=t[l][1];var v=o.replace(r,"&amp;").replace(f,"&lt;").replace(s,"&gt;").replace(h,"&para;<br>");switch(g){case n:e[l]='<ins style="background:#e6ffe6;">'+v+"</ins>";break;case i:e[l]='<del style="background:#ffe6e6;">'+v+"</del>";break;case a:e[l]="<span>"+v+"</span>";break}}return e.join("")};r.prototype.diff_text1=function(t){var e=[];for(var r=0;r<t.length;r++){if(t[r][0]!==n){e[r]=t[r][1]}}return e.join("")};r.prototype.diff_text2=function(t){var e=[];for(var r=0;r<t.length;r++){if(t[r][0]!==i){e[r]=t[r][1]}}return e.join("")};r.prototype.diff_levenshtein=function(t){var e=0;var r=0;var f=0;for(var s=0;s<t.length;s++){var h=t[s][0];var l=t[s][1];switch(h){case n:r+=l.length;break;case i:f+=l.length;break;case a:e+=Math.max(r,f);r=0;f=0;break}}e+=Math.max(r,f);return e};r.prototype.diff_toDelta=function(t){var e=[];for(var r=0;r<t.length;r++){switch(t[r][0]){case n:e[r]="+"+encodeURI(t[r][1]);break;case i:e[r]="-"+t[r][1].length;break;case a:e[r]="="+t[r][1].length;break}}return e.join("\t").replace(/%20/g," ")};r.prototype.diff_fromDelta=function(t,e){var f=[];var s=0;var h=0;var l=e.split(/\t/g);for(var g=0;g<l.length;g++){var o=l[g].substring(1);switch(l[g].charAt(0)){case"+":try{f[s++]=new r.Diff(n,decodeURI(o))}catch(t){throw new Error("Illegal escape in diff_fromDelta: "+o)}break;case"-":case"=":var v=parseInt(o,10);if(isNaN(v)||v<0){throw new Error("Invalid number in diff_fromDelta: "+o)}var u=t.substring(h,h+=v);if(l[g].charAt(0)=="="){f[s++]=new r.Diff(a,u)}else{f[s++]=new r.Diff(i,u)}break;default:if(l[g]){throw new Error("Invalid diff operation in diff_fromDelta: "+l[g])}}}if(h!=t.length){throw new Error("Delta length ("+h+") does not equal source text length ("+t.length+").")}return f};r.prototype.match_main=function(t,e,r){if(t==null||e==null||r==null){throw new Error("Null input. (match_main)")}r=Math.max(0,Math.min(r,t.length));if(t==e){return 0}else if(!t.length){return-1}else if(t.substring(r,r+e.length)==e){return r}else{return this.match_bitap_(t,e,r)}};r.prototype.match_bitap_=function(t,e,r){if(e.length>this.Match_MaxBits){throw new Error("Pattern too long for this browser.")}var i=this.match_alphabet_(e);var n=this;function a(t,i){var a=t/e.length;var f=Math.abs(r-i);if(!n.Match_Distance){return f?1:a}return a+f/n.Match_Distance}var f=this.Match_Threshold;var s=t.indexOf(e,r);if(s!=-1){f=Math.min(a(0,s),f);s=t.lastIndexOf(e,r+e.length);if(s!=-1){f=Math.min(a(0,s),f)}}var h=1<<e.length-1;s=-1;var l,g;var o=e.length+t.length;var v;for(var u=0;u<e.length;u++){l=0;g=o;while(l<g){if(a(u,r+g)<=f){l=g}else{o=g}g=Math.floor((o-l)/2+l)}o=g;var c=Math.max(1,r-g+1);var p=Math.min(r+g,t.length)+e.length;var d=Array(p+2);d[p+1]=(1<<u)-1;for(var _=p;_>=c;_--){var b=i[t.charAt(_-1)];if(u===0){d[_]=(d[_+1]<<1|1)&b}else{d[_]=(d[_+1]<<1|1)&b|((v[_+1]|v[_])<<1|1)|v[_+1]}if(d[_]&h){var w=a(u,_-1);if(w<=f){f=w;s=_-1;if(s>r){c=Math.max(1,2*r-s)}else{break}}}}if(a(u+1,r)>f){break}v=d}return s};r.prototype.match_alphabet_=function(t){var e={};for(var r=0;r<t.length;r++){e[t.charAt(r)]=0}for(var r=0;r<t.length;r++){e[t.charAt(r)]|=1<<t.length-r-1}return e};r.prototype.patch_addContext_=function(t,e){if(e.length==0){return}if(t.start2===null){throw Error("patch not initialized")}var i=e.substring(t.start2,t.start2+t.length1);var n=0;while(e.indexOf(i)!=e.lastIndexOf(i)&&i.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin){n+=this.Patch_Margin;i=e.substring(t.start2-n,t.start2+t.length1+n)}n+=this.Patch_Margin;var f=e.substring(t.start2-n,t.start2);if(f){t.diffs.unshift(new r.Diff(a,f))}var s=e.substring(t.start2+t.length1,t.start2+t.length1+n);if(s){t.diffs.push(new r.Diff(a,s))}t.start1-=f.length;t.start2-=f.length;t.length1+=f.length+s.length;t.length2+=f.length+s.length};r.prototype.patch_make=function(t,e,f){var s,h;if(typeof t=="string"&&typeof e=="string"&&typeof f=="undefined"){s=t;h=this.diff_main(s,e,true);if(h.length>2){this.diff_cleanupSemantic(h);this.diff_cleanupEfficiency(h)}}else if(t&&typeof t=="object"&&typeof e=="undefined"&&typeof f=="undefined"){h=t;s=this.diff_text1(h)}else if(typeof t=="string"&&e&&typeof e=="object"&&typeof f=="undefined"){s=t;h=e}else if(typeof t=="string"&&typeof e=="string"&&f&&typeof f=="object"){s=t;h=f}else{throw new Error("Unknown call format to patch_make.")}if(h.length===0){return[]}var l=[];var g=new r.patch_obj;var o=0;var v=0;var u=0;var c=s;var p=s;for(var d=0;d<h.length;d++){var _=h[d][0];var b=h[d][1];if(!o&&_!==a){g.start1=v;g.start2=u}switch(_){case n:g.diffs[o++]=h[d];g.length2+=b.length;p=p.substring(0,u)+b+p.substring(u);break;case i:g.length1+=b.length;g.diffs[o++]=h[d];p=p.substring(0,u)+p.substring(u+b.length);break;case a:if(b.length<=2*this.Patch_Margin&&o&&h.length!=d+1){g.diffs[o++]=h[d];g.length1+=b.length;g.length2+=b.length}else if(b.length>=2*this.Patch_Margin){if(o){this.patch_addContext_(g,c);l.push(g);g=new r.patch_obj;o=0;c=p;v=u}}break}if(_!==n){v+=b.length}if(_!==i){u+=b.length}}if(o){this.patch_addContext_(g,c);l.push(g)}return l};r.prototype.patch_deepCopy=function(t){var e=[];for(var i=0;i<t.length;i++){var n=t[i];var a=new r.patch_obj;a.diffs=[];for(var f=0;f<n.diffs.length;f++){a.diffs[f]=new r.Diff(n.diffs[f][0],n.diffs[f][1])}a.start1=n.start1;a.start2=n.start2;a.length1=n.length1;a.length2=n.length2;e[i]=a}return e};r.prototype.patch_apply=function(t,e){if(t.length==0){return[e,[]]}t=this.patch_deepCopy(t);var r=this.patch_addPadding(t);e=r+e+r;this.patch_splitMax(t);var f=0;var s=[];for(var h=0;h<t.length;h++){var l=t[h].start2+f;var g=this.diff_text1(t[h].diffs);var o;var v=-1;if(g.length>this.Match_MaxBits){o=this.match_main(e,g.substring(0,this.Match_MaxBits),l);if(o!=-1){v=this.match_main(e,g.substring(g.length-this.Match_MaxBits),l+g.length-this.Match_MaxBits);if(v==-1||o>=v){o=-1}}}else{o=this.match_main(e,g,l)}if(o==-1){s[h]=false;f-=t[h].length2-t[h].length1}else{s[h]=true;f=o-l;var u;if(v==-1){u=e.substring(o,o+g.length)}else{u=e.substring(o,v+this.Match_MaxBits)}if(g==u){e=e.substring(0,o)+this.diff_text2(t[h].diffs)+e.substring(o+g.length)}else{var c=this.diff_main(g,u,false);if(g.length>this.Match_MaxBits&&this.diff_levenshtein(c)/g.length>this.Patch_DeleteThreshold){s[h]=false}else{this.diff_cleanupSemanticLossless(c);var p=0;var d;for(var _=0;_<t[h].diffs.length;_++){var b=t[h].diffs[_];if(b[0]!==a){d=this.diff_xIndex(c,p)}if(b[0]===n){e=e.substring(0,o+d)+b[1]+e.substring(o+d)}else if(b[0]===i){e=e.substring(0,o+d)+e.substring(o+this.diff_xIndex(c,p+b[1].length))}if(b[0]!==i){p+=b[1].length}}}}}}e=e.substring(r.length,e.length-r.length);return[e,s]};r.prototype.patch_addPadding=function(t){var e=this.Patch_Margin;var i="";for(var n=1;n<=e;n++){i+=String.fromCharCode(n)}for(var n=0;n<t.length;n++){t[n].start1+=e;t[n].start2+=e}var f=t[0];var s=f.diffs;if(s.length==0||s[0][0]!=a){s.unshift(new r.Diff(a,i));f.start1-=e;f.start2-=e;f.length1+=e;f.length2+=e}else if(e>s[0][1].length){var h=e-s[0][1].length;s[0][1]=i.substring(s[0][1].length)+s[0][1];f.start1-=h;f.start2-=h;f.length1+=h;f.length2+=h}f=t[t.length-1];s=f.diffs;if(s.length==0||s[s.length-1][0]!=a){s.push(new r.Diff(a,i));f.length1+=e;f.length2+=e}else if(e>s[s.length-1][1].length){var h=e-s[s.length-1][1].length;s[s.length-1][1]+=i.substring(0,h);f.length1+=h;f.length2+=h}return i};r.prototype.patch_splitMax=function(t){var e=this.Match_MaxBits;for(var f=0;f<t.length;f++){if(t[f].length1<=e){continue}var s=t[f];t.splice(f--,1);var h=s.start1;var l=s.start2;var g="";while(s.diffs.length!==0){var o=new r.patch_obj;var v=true;o.start1=h-g.length;o.start2=l-g.length;if(g!==""){o.length1=o.length2=g.length;o.diffs.push(new r.Diff(a,g))}while(s.diffs.length!==0&&o.length1<e-this.Patch_Margin){var u=s.diffs[0][0];var c=s.diffs[0][1];if(u===n){o.length2+=c.length;l+=c.length;o.diffs.push(s.diffs.shift());v=false}else if(u===i&&o.diffs.length==1&&o.diffs[0][0]==a&&c.length>2*e){o.length1+=c.length;h+=c.length;v=false;o.diffs.push(new r.Diff(u,c));s.diffs.shift()}else{c=c.substring(0,e-o.length1-this.Patch_Margin);o.length1+=c.length;h+=c.length;if(u===a){o.length2+=c.length;l+=c.length}else{v=false}o.diffs.push(new r.Diff(u,c));if(c==s.diffs[0][1]){s.diffs.shift()}else{s.diffs[0][1]=s.diffs[0][1].substring(c.length)}}}g=this.diff_text2(o.diffs);g=g.substring(g.length-this.Patch_Margin);var p=this.diff_text1(s.diffs).substring(0,this.Patch_Margin);if(p!==""){o.length1+=p.length;o.length2+=p.length;if(o.diffs.length!==0&&o.diffs[o.diffs.length-1][0]===a){o.diffs[o.diffs.length-1][1]+=p}else{o.diffs.push(new r.Diff(a,p))}}if(!v){t.splice(++f,0,o)}}}};r.prototype.patch_toText=function(t){var e=[];for(var r=0;r<t.length;r++){e[r]=t[r]}return e.join("")};r.prototype.patch_fromText=function(t){var e=[];if(!t){return e}var f=t.split("\n");var s=0;var h=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;while(s<f.length){var l=f[s].match(h);if(!l){throw new Error("Invalid patch string: "+f[s])}var g=new r.patch_obj;e.push(g);g.start1=parseInt(l[1],10);if(l[2]===""){g.start1--;g.length1=1}else if(l[2]=="0"){g.length1=0}else{g.start1--;g.length1=parseInt(l[2],10)}g.start2=parseInt(l[3],10);if(l[4]===""){g.start2--;g.length2=1}else if(l[4]=="0"){g.length2=0}else{g.start2--;g.length2=parseInt(l[4],10)}s++;while(s<f.length){var o=f[s].charAt(0);try{var v=decodeURI(f[s].substring(1))}catch(t){throw new Error("Illegal escape in patch_fromText: "+v)}if(o=="-"){g.diffs.push(new r.Diff(i,v))}else if(o=="+"){g.diffs.push(new r.Diff(n,v))}else if(o==" "){g.diffs.push(new r.Diff(a,v))}else if(o=="@"){break}else if(o===""){}else{throw new Error('Invalid patch mode "'+o+'" in: '+v)}s++}}return e};r.patch_obj=function(){this.diffs=[];this.start1=null;this.start2=null;this.length1=0;this.length2=0};r.patch_obj.prototype.toString=function(){var t,e;if(this.length1===0){t=this.start1+",0"}else if(this.length1==1){t=this.start1+1}else{t=this.start1+1+","+this.length1}if(this.length2===0){e=this.start2+",0"}else if(this.length2==1){e=this.start2+1}else{e=this.start2+1+","+this.length2}var r=["@@ -"+t+" +"+e+" @@\n"];var f;for(var s=0;s<this.diffs.length;s++){switch(this.diffs[s][0]){case n:f="+";break;case i:f="-";break;case a:f=" ";break}r[s+1]=f+encodeURI(this.diffs[s][1])+"\n"}return r.join("").replace(/%20/g," ")};t.exports=r;t.exports["diff_match_patch"]=r;t.exports["DIFF_DELETE"]=i;t.exports["DIFF_INSERT"]=n;t.exports["DIFF_EQUAL"]=a}}]);
//# sourceMappingURL=243.cb73c7c8d770d6ecfb49.js.map