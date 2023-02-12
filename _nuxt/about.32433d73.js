import{_ as oa}from"./PageHead.d63f232b.js";import{a as Rr,o as kt,b as Gt,F as Sr,r as br,e as Ie,t as Bn,f as ki,w as Ba,h as ka,i as Ga,j as Vr}from"./entry.ddf7497b.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ir="149",yn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Sn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Va=0,Hr=1,Ha=2,la=1,Wa=2,ni=3,Kt=0,vt=1,Zt=2,$t=0,kn=1,Wr=2,Xr=3,qr=4,Xa=5,On=100,qa=101,ja=102,jr=103,Yr=104,Ya=200,Za=201,$a=202,Ka=203,ca=204,ua=205,Ja=206,Qa=207,eo=208,to=209,no=210,io=0,ro=1,so=2,wr=3,ao=4,oo=5,lo=6,co=7,ha=0,uo=1,ho=2,Wt=0,fo=1,po=2,mo=3,go=4,_o=5,da=300,Vn=301,Hn=302,Er=303,Tr=304,Ri=306,Ar=1e3,Ct=1001,Cr=1002,ct=1003,Zr=1004,Gi=1005,bt=1006,xo=1007,ri=1008,pn=1009,vo=1010,Mo=1011,fa=1012,yo=1013,cn=1014,un=1015,si=1016,So=1017,bo=1018,Gn=1020,wo=1021,Lt=1023,Eo=1024,To=1025,hn=1026,Wn=1027,Ao=1028,Co=1029,Lo=1030,Do=1031,Po=1033,Vi=33776,Hi=33777,Wi=33778,Xi=33779,$r=35840,Kr=35841,Jr=35842,Qr=35843,Ro=36196,es=37492,ts=37496,ns=37808,is=37809,rs=37810,ss=37811,as=37812,os=37813,ls=37814,cs=37815,us=37816,hs=37817,ds=37818,fs=37819,ps=37820,ms=37821,qi=36492,Io=36283,gs=36284,_s=36285,xs=36286,mn=3e3,ze=3001,Fo=3200,No=3201,Uo=0,Oo=1,Dt="srgb",ai="srgb-linear",ji=7680,zo=519,vs=35044,Ms="300 es",Lr=1035;class vn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const it=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yi=Math.PI/180,ys=180/Math.PI;function li(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(it[s&255]+it[s>>8&255]+it[s>>16&255]+it[s>>24&255]+"-"+it[e&255]+it[e>>8&255]+"-"+it[e>>16&15|64]+it[e>>24&255]+"-"+it[t&63|128]+it[t>>8&255]+"-"+it[t>>16&255]+it[t>>24&255]+it[n&255]+it[n>>8&255]+it[n>>16&255]+it[n>>24&255]).toLowerCase()}function ht(s,e,t){return Math.max(e,Math.min(t,s))}function Bo(s,e){return(s%e+e)%e}function Zi(s,e,t){return(1-t)*s+t*e}function Ss(s){return(s&s-1)===0&&s!==0}function Dr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ui(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],m=n[5],x=n[8],p=i[0],d=i[3],M=i[6],T=i[1],y=i[4],S=i[7],w=i[2],L=i[5],N=i[8];return r[0]=o*p+a*T+c*w,r[3]=o*d+a*y+c*L,r[6]=o*M+a*S+c*N,r[1]=l*p+u*T+f*w,r[4]=l*d+u*y+f*L,r[7]=l*M+u*S+f*N,r[2]=h*p+m*T+x*w,r[5]=h*d+m*y+x*L,r[8]=h*M+m*S+x*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*r,m=l*r-o*c,x=t*f+n*h+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=f*p,e[1]=(i*l-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=h*p,e[4]=(u*t-i*c)*p,e[5]=(i*r-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($i.makeScale(e,t)),this}rotate(e){return this.premultiply($i.makeRotation(-e)),this}translate(e,t){return this.premultiply($i.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $i=new xt;function pa(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function oi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Di(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ki={[Dt]:{[ai]:dn},[ai]:{[Dt]:Di}},ot={legacyMode:!0,get workingColorSpace(){return ai},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Ki[e]&&Ki[e][t]!==void 0){const n=Ki[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},ma={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qe={r:0,g:0,b:0},Et={h:0,s:0,l:0},hi={h:0,s:0,l:0};function Ji(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function di(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=Bo(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ji(o,r,e+1/3),this.g=Ji(o,r,e),this.b=Ji(o,r,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ot.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ot.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ot.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ot.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Dt){const n=ma[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ot.fromWorkingColorSpace(di(this,qe),e),ht(qe.r*255,0,255)<<16^ht(qe.g*255,0,255)<<8^ht(qe.b*255,0,255)<<0}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(di(this,qe),t);const n=qe.r,i=qe.g,r=qe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(di(this,qe),t),e.r=qe.r,e.g=qe.g,e.b=qe.b,e}getStyle(e=Dt){return ot.fromWorkingColorSpace(di(this,qe),e),e!==Dt?`color(${e} ${qe.r} ${qe.g} ${qe.b})`:`rgb(${qe.r*255|0},${qe.g*255|0},${qe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Et),Et.h+=e,Et.s+=t,Et.l+=n,this.setHSL(Et.h,Et.s,Et.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Et),e.getHSL(hi);const n=Zi(Et.h,hi.h,t),i=Zi(Et.s,hi.s,t),r=Zi(Et.l,hi.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ke.NAMES=ma;let bn;class ga{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bn===void 0&&(bn=oi("canvas")),bn.width=e.width,bn.height=e.height;const n=bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=dn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dn(t[n]/255)*255):t[n]=dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class _a{constructor(e=null){this.isSource=!0,this.uuid=li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Qi(i[o].image)):r.push(Qi(i[o]))}else r=Qi(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qi(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ga.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ko=0;class dt extends vn{constructor(e=dt.DEFAULT_IMAGE,t=dt.DEFAULT_MAPPING,n=Ct,i=Ct,r=bt,o=ri,a=Lt,c=pn,l=dt.DEFAULT_ANISOTROPY,u=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ko++}),this.uuid=li(),this.name="",this.source=new _a(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==da)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case Ct:e.x=e.x<0?0:1;break;case Cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case Ct:e.y=e.y<0?0:1;break;case Cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}dt.DEFAULT_IMAGE=null;dt.DEFAULT_MAPPING=da;dt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],x=c[9],p=c[2],d=c[6],M=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(x+d)<.1&&Math.abs(l+m+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,S=(m+1)/2,w=(M+1)/2,L=(u+h)/4,N=(f+p)/4,_=(x+d)/4;return y>S&&y>w?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=L/n,r=N/n):S>w?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=L/i,r=_/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=N/r,i=_/r),this.set(n,i,r,t),this}let T=Math.sqrt((d-x)*(d-x)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(d-x)/T,this.y=(f-p)/T,this.z=(h-u)/T,this.w=Math.acos((l+m+M-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gn extends vn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _a(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xa extends dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go extends dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3];const h=r[o+0],m=r[o+1],x=r[o+2],p=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(f!==p||c!==h||l!==m||u!==x){let d=1-a;const M=c*h+l*m+u*x+f*p,T=M>=0?1:-1,y=1-M*M;if(y>Number.EPSILON){const w=Math.sqrt(y),L=Math.atan2(w,M*T);d=Math.sin(d*L)/w,a=Math.sin(a*L)/w}const S=a*T;if(c=c*d+h*S,l=l*d+m*S,u=u*d+x*S,f=f*d+p*S,d===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=w,l*=w,u*=w,f*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=r[o],h=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+u*f+c*m-l*h,e[t+1]=c*x+u*h+l*f-a*m,e[t+2]=l*x+u*m+a*h-c*f,e[t+3]=u*x-a*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(r/2),h=c(n/2),m=c(i/2),x=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f+h*m*x;break;case"YZX":this._x=h*u*f+l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f-h*m*x;break;case"XZY":this._x=h*u*f-l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-r*i,f=c*i+r*n-o*t,h=-r*t-o*n-a*i;return this.x=l*c+h*-r+u*-a-f*-o,this.y=u*c+h*-o+f*-r-l*-a,this.z=f*c+h*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return er.copy(this).projectOnVector(e),this.sub(er)}reflect(e){return this.sub(er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const er=new U,bs=new _n;class ci{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],f=e[c+1],h=e[c+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),f=e.getY(c),h=e.getZ(c);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)nn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(nn)}else n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox),tr.applyMatrix4(e.matrixWorld),this.union(tr);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zn),fi.subVectors(this.max,Zn),wn.subVectors(e.a,Zn),En.subVectors(e.b,Zn),Tn.subVectors(e.c,Zn),Xt.subVectors(En,wn),qt.subVectors(Tn,En),rn.subVectors(wn,Tn);let t=[0,-Xt.z,Xt.y,0,-qt.z,qt.y,0,-rn.z,rn.y,Xt.z,0,-Xt.x,qt.z,0,-qt.x,rn.z,0,-rn.x,-Xt.y,Xt.x,0,-qt.y,qt.x,0,-rn.y,rn.x,0];return!nr(t,wn,En,Tn,fi)||(t=[1,0,0,0,1,0,0,0,1],!nr(t,wn,En,Tn,fi))?!1:(pi.crossVectors(Xt,qt),t=[pi.x,pi.y,pi.z],nr(t,wn,En,Tn,fi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return nn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nt=[new U,new U,new U,new U,new U,new U,new U,new U],nn=new U,tr=new ci,wn=new U,En=new U,Tn=new U,Xt=new U,qt=new U,rn=new U,Zn=new U,fi=new U,pi=new U,sn=new U;function nr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){sn.fromArray(s,r);const a=i.x*Math.abs(sn.x)+i.y*Math.abs(sn.y)+i.z*Math.abs(sn.z),c=e.dot(sn),l=t.dot(sn),u=n.dot(sn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Vo=new ci,$n=new U,ir=new U;class Fr{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vo.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$n.subVectors(e,this.center);const t=$n.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($n,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ir.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($n.copy(e.center).add(ir)),this.expandByPoint($n.copy(e.center).sub(ir))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ut=new U,rr=new U,mi=new U,jt=new U,sr=new U,gi=new U,ar=new U;class Ho{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ut)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ut.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ut.copy(this.direction).multiplyScalar(t).add(this.origin),Ut.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rr.copy(e).add(t).multiplyScalar(.5),mi.copy(t).sub(e).normalize(),jt.copy(this.origin).sub(rr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(mi),a=jt.dot(this.direction),c=-jt.dot(mi),l=jt.lengthSq(),u=Math.abs(1-o*o);let f,h,m,x;if(u>0)if(f=o*c-a,h=o*a-c,x=r*u,f>=0)if(h>=-x)if(h<=x){const p=1/u;f*=p,h*=p,m=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h<=-x?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+h*(h+2*c)+l):h<=x?(f=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(mi).multiplyScalar(h).add(rr),m}intersectSphere(e,t){Ut.subVectors(e.center,this.origin);const n=Ut.dot(this.direction),i=Ut.dot(Ut)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ut)!==null}intersectTriangle(e,t,n,i,r){sr.subVectors(t,e),gi.subVectors(n,e),ar.crossVectors(sr,gi);let o=this.direction.dot(ar),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jt.subVectors(this.origin,e);const c=a*this.direction.dot(gi.crossVectors(jt,gi));if(c<0)return null;const l=a*this.direction.dot(sr.cross(jt));if(l<0||c+l>o)return null;const u=-a*jt.dot(ar);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,c,l,u,f,h,m,x,p,d){const M=this.elements;return M[0]=e,M[4]=t,M[8]=n,M[12]=i,M[1]=r,M[5]=o,M[9]=a,M[13]=c,M[2]=l,M[6]=u,M[10]=f,M[14]=h,M[3]=m,M[7]=x,M[11]=p,M[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/An.setFromMatrixColumn(e,0).length(),r=1/An.setFromMatrixColumn(e,1).length(),o=1/An.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,m=o*f,x=a*u,p=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+x*l,t[5]=h-p*l,t[9]=-a*c,t[2]=p-h*l,t[6]=x+m*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,m=c*f,x=l*u,p=l*f;t[0]=h+p*a,t[4]=x*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=p+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,m=c*f,x=l*u,p=l*f;t[0]=h-p*a,t[4]=-o*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=p-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,m=o*f,x=a*u,p=a*f;t[0]=c*u,t[4]=x*l-m,t[8]=h*l+p,t[1]=c*f,t[5]=p*l+h,t[9]=m*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,m=o*l,x=a*c,p=a*l;t[0]=c*u,t[4]=p-h*f,t[8]=x*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*f+x,t[10]=h-p*f}else if(e.order==="XZY"){const h=o*c,m=o*l,x=a*c,p=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+p,t[5]=o*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wo,e,Xo)}lookAt(e,t,n){const i=this.elements;return gt.subVectors(e,t),gt.lengthSq()===0&&(gt.z=1),gt.normalize(),Yt.crossVectors(n,gt),Yt.lengthSq()===0&&(Math.abs(n.z)===1?gt.x+=1e-4:gt.z+=1e-4,gt.normalize(),Yt.crossVectors(n,gt)),Yt.normalize(),_i.crossVectors(gt,Yt),i[0]=Yt.x,i[4]=_i.x,i[8]=gt.x,i[1]=Yt.y,i[5]=_i.y,i[9]=gt.y,i[2]=Yt.z,i[6]=_i.z,i[10]=gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],m=n[13],x=n[2],p=n[6],d=n[10],M=n[14],T=n[3],y=n[7],S=n[11],w=n[15],L=i[0],N=i[4],_=i[8],A=i[12],R=i[1],q=i[5],j=i[9],O=i[13],I=i[2],W=i[6],$=i[10],Q=i[14],X=i[3],ee=i[7],Y=i[11],ge=i[15];return r[0]=o*L+a*R+c*I+l*X,r[4]=o*N+a*q+c*W+l*ee,r[8]=o*_+a*j+c*$+l*Y,r[12]=o*A+a*O+c*Q+l*ge,r[1]=u*L+f*R+h*I+m*X,r[5]=u*N+f*q+h*W+m*ee,r[9]=u*_+f*j+h*$+m*Y,r[13]=u*A+f*O+h*Q+m*ge,r[2]=x*L+p*R+d*I+M*X,r[6]=x*N+p*q+d*W+M*ee,r[10]=x*_+p*j+d*$+M*Y,r[14]=x*A+p*O+d*Q+M*ge,r[3]=T*L+y*R+S*I+w*X,r[7]=T*N+y*q+S*W+w*ee,r[11]=T*_+y*j+S*$+w*Y,r[15]=T*A+y*O+S*Q+w*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],p=e[7],d=e[11],M=e[15];return x*(+r*c*f-i*l*f-r*a*h+n*l*h+i*a*m-n*c*m)+p*(+t*c*m-t*l*h+r*o*h-i*o*m+i*l*u-r*c*u)+d*(+t*l*f-t*a*m-r*o*f+n*o*m+r*a*u-n*l*u)+M*(-i*a*u-t*c*f+t*a*h+i*o*f-n*o*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],p=e[13],d=e[14],M=e[15],T=f*d*l-p*h*l+p*c*m-a*d*m-f*c*M+a*h*M,y=x*h*l-u*d*l-x*c*m+o*d*m+u*c*M-o*h*M,S=u*p*l-x*f*l+x*a*m-o*p*m-u*a*M+o*f*M,w=x*f*c-u*p*c-x*a*h+o*p*h+u*a*d-o*f*d,L=t*T+n*y+i*S+r*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/L;return e[0]=T*N,e[1]=(p*h*r-f*d*r-p*i*m+n*d*m+f*i*M-n*h*M)*N,e[2]=(a*d*r-p*c*r+p*i*l-n*d*l-a*i*M+n*c*M)*N,e[3]=(f*c*r-a*h*r-f*i*l+n*h*l+a*i*m-n*c*m)*N,e[4]=y*N,e[5]=(u*d*r-x*h*r+x*i*m-t*d*m-u*i*M+t*h*M)*N,e[6]=(x*c*r-o*d*r-x*i*l+t*d*l+o*i*M-t*c*M)*N,e[7]=(o*h*r-u*c*r+u*i*l-t*h*l-o*i*m+t*c*m)*N,e[8]=S*N,e[9]=(x*f*r-u*p*r-x*n*m+t*p*m+u*n*M-t*f*M)*N,e[10]=(o*p*r-x*a*r+x*n*l-t*p*l-o*n*M+t*a*M)*N,e[11]=(u*a*r-o*f*r-u*n*l+t*f*l+o*n*m-t*a*m)*N,e[12]=w*N,e[13]=(u*p*i-x*f*i+x*n*h-t*p*h-u*n*d+t*f*d)*N,e[14]=(x*a*i-o*p*i-x*n*c+t*p*c+o*n*d-t*a*d)*N,e[15]=(o*f*i-u*a*i+u*n*c-t*f*c-o*n*h+t*a*h)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,f=a+a,h=r*l,m=r*u,x=r*f,p=o*u,d=o*f,M=a*f,T=c*l,y=c*u,S=c*f,w=n.x,L=n.y,N=n.z;return i[0]=(1-(p+M))*w,i[1]=(m+S)*w,i[2]=(x-y)*w,i[3]=0,i[4]=(m-S)*L,i[5]=(1-(h+M))*L,i[6]=(d+T)*L,i[7]=0,i[8]=(x+y)*N,i[9]=(d-T)*N,i[10]=(1-(h+p))*N,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=An.set(i[0],i[1],i[2]).length();const o=An.set(i[4],i[5],i[6]).length(),a=An.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Tt.copy(this);const l=1/r,u=1/o,f=1/a;return Tt.elements[0]*=l,Tt.elements[1]*=l,Tt.elements[2]*=l,Tt.elements[4]*=u,Tt.elements[5]*=u,Tt.elements[6]*=u,Tt.elements[8]*=f,Tt.elements[9]*=f,Tt.elements[10]*=f,t.setFromRotationMatrix(Tt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-r),f=(t+e)*c,h=(n+i)*l,m=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const An=new U,Tt=new je,Wo=new U(0,0,0),Xo=new U(1,1,1),Yt=new U,_i=new U,gt=new U,ws=new je,Es=new _n;class Ii{constructor(e=0,t=0,n=0,i=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ws.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ws,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Es.setFromEuler(this),this.setFromQuaternion(Es,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class va{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qo=0;const Ts=new U,Cn=new _n,Ot=new je,xi=new U,Kn=new U,jo=new U,Yo=new _n,As=new U(1,0,0),Cs=new U(0,1,0),Ls=new U(0,0,1),Zo={type:"added"},Ds={type:"removed"};class rt extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qo++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const e=new U,t=new Ii,n=new _n,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new xt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cn.setFromAxisAngle(e,t),this.quaternion.multiply(Cn),this}rotateOnWorldAxis(e,t){return Cn.setFromAxisAngle(e,t),this.quaternion.premultiply(Cn),this}rotateX(e){return this.rotateOnAxis(As,e)}rotateY(e){return this.rotateOnAxis(Cs,e)}rotateZ(e){return this.rotateOnAxis(Ls,e)}translateOnAxis(e,t){return Ts.copy(e).applyQuaternion(this.quaternion),this.position.add(Ts.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(As,e)}translateY(e){return this.translateOnAxis(Cs,e)}translateZ(e){return this.translateOnAxis(Ls,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ot.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xi.copy(e):xi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ot.lookAt(Kn,xi,this.up):Ot.lookAt(xi,Kn,this.up),this.quaternion.setFromRotationMatrix(Ot),i&&(Ot.extractRotation(i.matrixWorld),Cn.setFromRotationMatrix(Ot),this.quaternion.premultiply(Cn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zo)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ds)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ds)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ot.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ot.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ot),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,e,jo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,Yo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}rt.DEFAULT_UP=new U(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const At=new U,zt=new U,or=new U,Bt=new U,Ln=new U,Dn=new U,Ps=new U,lr=new U,cr=new U,ur=new U;class Vt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),At.subVectors(e,t),i.cross(At);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){At.subVectors(i,t),zt.subVectors(n,t),or.subVectors(e,t);const o=At.dot(At),a=At.dot(zt),c=At.dot(or),l=zt.dot(zt),u=zt.dot(or),f=o*l-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,m=(l*c-a*u)*h,x=(o*u-a*c)*h;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bt),Bt.x>=0&&Bt.y>=0&&Bt.x+Bt.y<=1}static getUV(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Bt),c.set(0,0),c.addScaledVector(r,Bt.x),c.addScaledVector(o,Bt.y),c.addScaledVector(a,Bt.z),c}static isFrontFacing(e,t,n,i){return At.subVectors(n,t),zt.subVectors(e,t),At.cross(zt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return At.subVectors(this.c,this.b),zt.subVectors(this.a,this.b),At.cross(zt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Vt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ln.subVectors(i,n),Dn.subVectors(r,n),lr.subVectors(e,n);const c=Ln.dot(lr),l=Dn.dot(lr);if(c<=0&&l<=0)return t.copy(n);cr.subVectors(e,i);const u=Ln.dot(cr),f=Dn.dot(cr);if(u>=0&&f<=u)return t.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ln,o);ur.subVectors(e,r);const m=Ln.dot(ur),x=Dn.dot(ur);if(x>=0&&m<=x)return t.copy(r);const p=m*l-c*x;if(p<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(Dn,a);const d=u*x-m*f;if(d<=0&&f-u>=0&&m-x>=0)return Ps.subVectors(r,i),a=(f-u)/(f-u+(m-x)),t.copy(i).addScaledVector(Ps,a);const M=1/(d+p+h);return o=p*M,a=h*M,t.copy(n).addScaledVector(Ln,o).addScaledVector(Dn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let $o=0;class Fi extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$o++}),this.uuid=li(),this.name="",this.type="Material",this.blending=kn,this.side=Kt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ca,this.blendDst=ua,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(n.blending=this.blending),this.side!==Kt&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nr extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xe=new U,vi=new Ee;class Rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vi.fromBufferAttribute(this,t),vi.applyMatrix3(e),this.setXY(t,vi.x,vi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix3(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ma extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ya extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fn extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ko=0;const St=new je,hr=new rt,Pn=new U,_t=new ci,Jn=new ci,Qe=new U;class Mn extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ko++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pa(e)?ya:Ma)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return St.makeRotationFromQuaternion(e),this.applyMatrix4(St),this}rotateX(e){return St.makeRotationX(e),this.applyMatrix4(St),this}rotateY(e){return St.makeRotationY(e),this.applyMatrix4(St),this}rotateZ(e){return St.makeRotationZ(e),this.applyMatrix4(St),this}translate(e,t,n){return St.makeTranslation(e,t,n),this.applyMatrix4(St),this}scale(e,t,n){return St.makeScale(e,t,n),this.applyMatrix4(St),this}lookAt(e){return hr.lookAt(e),hr.updateMatrix(),this.applyMatrix4(hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pn).negate(),this.translate(Pn.x,Pn.y,Pn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];_t.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,_t.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,_t.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(_t.min),this.boundingBox.expandByPoint(_t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(_t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Jn.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(_t.min,Jn.min),_t.expandByPoint(Qe),Qe.addVectors(_t.max,Jn.max),_t.expandByPoint(Qe)):(_t.expandByPoint(Jn.min),_t.expandByPoint(Jn.max))}_t.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Qe.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Qe));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Qe.fromBufferAttribute(a,l),c&&(Pn.fromBufferAttribute(e,l),Qe.add(Pn)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let R=0;R<a;R++)l[R]=new U,u[R]=new U;const f=new U,h=new U,m=new U,x=new Ee,p=new Ee,d=new Ee,M=new U,T=new U;function y(R,q,j){f.fromArray(i,R*3),h.fromArray(i,q*3),m.fromArray(i,j*3),x.fromArray(o,R*2),p.fromArray(o,q*2),d.fromArray(o,j*2),h.sub(f),m.sub(f),p.sub(x),d.sub(x);const O=1/(p.x*d.y-d.x*p.y);isFinite(O)&&(M.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(O),T.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(O),l[R].add(M),l[q].add(M),l[j].add(M),u[R].add(T),u[q].add(T),u[j].add(T))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let R=0,q=S.length;R<q;++R){const j=S[R],O=j.start,I=j.count;for(let W=O,$=O+I;W<$;W+=3)y(n[W+0],n[W+1],n[W+2])}const w=new U,L=new U,N=new U,_=new U;function A(R){N.fromArray(r,R*3),_.copy(N);const q=l[R];w.copy(q),w.sub(N.multiplyScalar(N.dot(q))).normalize(),L.crossVectors(_,q);const O=L.dot(u[R])<0?-1:1;c[R*4]=w.x,c[R*4+1]=w.y,c[R*4+2]=w.z,c[R*4+3]=O}for(let R=0,q=S.length;R<q;++R){const j=S[R],O=j.start,I=j.count;for(let W=O,$=O+I;W<$;W+=3)A(n[W+0]),A(n[W+1]),A(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,f=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qe.fromBufferAttribute(e,t),Qe.normalize(),e.setXYZ(t,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let m=0,x=0;for(let p=0,d=c.length;p<d;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let M=0;M<u;M++)h[x++]=l[m++]}return new Rt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=e(h,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rs=new je,Rn=new Ho,dr=new Fr,Qn=new U,ei=new U,ti=new U,fr=new U,Mi=new U,yi=new Ee,Si=new Ee,bi=new Ee,pr=new U,wi=new U;class Ht extends rt{constructor(e=new Mn,t=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Mi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(fr.fromBufferAttribute(f,e),o?Mi.addScaledVector(fr,u):Mi.addScaledVector(fr.sub(t),u))}t.add(Mi)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),e.ray.intersectsSphere(dr)===!1)||(Rs.copy(r).invert(),Rn.copy(e.ray).applyMatrix4(Rs),n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,x=f.length;m<x;m++){const p=f[m],d=i[p.materialIndex],M=Math.max(p.start,h.start),T=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let y=M,S=T;y<S;y+=3){const w=a.getX(y),L=a.getX(y+1),N=a.getX(y+2);o=Ei(this,d,e,Rn,l,u,w,L,N),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let p=m,d=x;p<d;p+=3){const M=a.getX(p),T=a.getX(p+1),y=a.getX(p+2);o=Ei(this,i,e,Rn,l,u,M,T,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,x=f.length;m<x;m++){const p=f[m],d=i[p.materialIndex],M=Math.max(p.start,h.start),T=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let y=M,S=T;y<S;y+=3){const w=y,L=y+1,N=y+2;o=Ei(this,d,e,Rn,l,u,w,L,N),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let p=m,d=x;p<d;p+=3){const M=p,T=p+1,y=p+2;o=Ei(this,i,e,Rn,l,u,M,T,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Jo(s,e,t,n,i,r,o,a){let c;if(e.side===vt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Kt,a),c===null)return null;wi.copy(a),wi.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(wi);return l<t.near||l>t.far?null:{distance:l,point:wi.clone(),object:s}}function Ei(s,e,t,n,i,r,o,a,c){s.getVertexPosition(o,Qn),s.getVertexPosition(a,ei),s.getVertexPosition(c,ti);const l=Jo(s,e,t,n,Qn,ei,ti,pr);if(l){i&&(yi.fromBufferAttribute(i,o),Si.fromBufferAttribute(i,a),bi.fromBufferAttribute(i,c),l.uv=Vt.getUV(pr,Qn,ei,ti,yi,Si,bi,new Ee)),r&&(yi.fromBufferAttribute(r,o),Si.fromBufferAttribute(r,a),bi.fromBufferAttribute(r,c),l.uv2=Vt.getUV(pr,Qn,ei,ti,yi,Si,bi,new Ee));const u={a:o,b:a,c,normal:new U,materialIndex:0};Vt.getNormal(Qn,ei,ti,u.normal),l.face=u}return l}class qn extends Mn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new fn(l,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(f,2));function x(p,d,M,T,y,S,w,L,N,_,A){const R=S/N,q=w/_,j=S/2,O=w/2,I=L/2,W=N+1,$=_+1;let Q=0,X=0;const ee=new U;for(let Y=0;Y<$;Y++){const ge=Y*q-O;for(let z=0;z<W;z++){const Z=z*R-j;ee[p]=Z*T,ee[d]=ge*y,ee[M]=I,l.push(ee.x,ee.y,ee.z),ee[p]=0,ee[d]=0,ee[M]=L>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(z/N),f.push(1-Y/_),Q+=1}}for(let Y=0;Y<_;Y++)for(let ge=0;ge<N;ge++){const z=h+ge+W*Y,Z=h+ge+W*(Y+1),ne=h+(ge+1)+W*(Y+1),re=h+(ge+1)+W*Y;c.push(z,Z,re),c.push(Z,ne,re),X+=6}a.addGroup(m,X,A),m+=X,h+=Q}}static fromJSON(e){return new qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xn(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function lt(s){const e={};for(let t=0;t<s.length;t++){const n=Xn(s[t]);for(const i in n)e[i]=n[i]}return e}function Qo(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sa(s){return s.getRenderTarget()===null&&s.outputEncoding===ze?Dt:ai}const el={clone:Xn,merge:lt};var tl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tl,this.fragmentShader=nl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xn(e.uniforms),this.uniformsGroups=Qo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ba extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wt extends ba{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const In=-90,Fn=1;class il extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new wt(In,Fn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new wt(In,Fn,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new wt(In,Fn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new wt(In,Fn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new wt(In,Fn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new wt(In,Fn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Wt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class wa extends dt{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Vn,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rl extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qn(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Xn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vt,blending:$t});r.uniforms.tEquirect.value=t;const o=new Ht(i,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=bt),new il(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const mr=new U,sl=new U,al=new xt;class an{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=mr.subVectors(n,t).cross(sl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(mr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||al.getNormalMatrix(e),i=this.coplanarPoint(mr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Fr,Ti=new U;class Ur{constructor(e=new an,t=new an,n=new an,i=new an,r=new an,o=new an){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7],h=n[8],m=n[9],x=n[10],p=n[11],d=n[12],M=n[13],T=n[14],y=n[15];return t[0].setComponents(a-i,f-c,p-h,y-d).normalize(),t[1].setComponents(a+i,f+c,p+h,y+d).normalize(),t[2].setComponents(a+r,f+l,p+m,y+M).normalize(),t[3].setComponents(a-r,f-l,p-m,y-M).normalize(),t[4].setComponents(a-o,f-u,p-x,y-T).normalize(),t[5].setComponents(a+o,f+u,p+x,y+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ti.x=i.normal.x>0?e.max.x:e.min.x,Ti.y=i.normal.y>0?e.max.y:e.min.y,Ti.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ti)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ea(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ol(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const f=l.array,h=l.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,f,h),l.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,f){const h=u.array,m=u.updateRange;s.bindBuffer(f,l),m.count===-1?s.bufferSubData(f,0,h):(t?s.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):s.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,u)):f.version<l.version&&(r(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class Or extends Mn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=e/a,h=t/c,m=[],x=[],p=[],d=[];for(let M=0;M<u;M++){const T=M*h-o;for(let y=0;y<l;y++){const S=y*f-r;x.push(S,-T,0),p.push(0,0,1),d.push(y/a),d.push(1-M/c)}}for(let M=0;M<c;M++)for(let T=0;T<a;T++){const y=T+l*M,S=T+l*(M+1),w=T+1+l*(M+1),L=T+1+l*M;m.push(y,S,L),m.push(S,w,L)}this.setIndex(m),this.setAttribute("position",new fn(x,3)),this.setAttribute("normal",new fn(p,3)),this.setAttribute("uv",new fn(d,2))}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}var ll=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,cl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ul=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pl="vec3 transformed = vec3( position );",ml=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,_l=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ml=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,El=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Al=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Cl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ll=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Rl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Il=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ul=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ol=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ql=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$l=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kl=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Jl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ql=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ec=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ic=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ac=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,oc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_c=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Sc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ec=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ac=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Cc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Lc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Dc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ic=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bc=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,kc=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Xc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$c=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Jc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Qc=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,eu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,tu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,nu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,iu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ru=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,su=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const au=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ou=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,du=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_u=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Eu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Au=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ru=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,zu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:ll,alphamap_pars_fragment:cl,alphatest_fragment:ul,alphatest_pars_fragment:hl,aomap_fragment:dl,aomap_pars_fragment:fl,begin_vertex:pl,beginnormal_vertex:ml,bsdfs:gl,iridescence_fragment:_l,bumpmap_pars_fragment:xl,clipping_planes_fragment:vl,clipping_planes_pars_fragment:Ml,clipping_planes_pars_vertex:yl,clipping_planes_vertex:Sl,color_fragment:bl,color_pars_fragment:wl,color_pars_vertex:El,color_vertex:Tl,common:Al,cube_uv_reflection_fragment:Cl,defaultnormal_vertex:Ll,displacementmap_pars_vertex:Dl,displacementmap_vertex:Pl,emissivemap_fragment:Rl,emissivemap_pars_fragment:Il,encodings_fragment:Fl,encodings_pars_fragment:Nl,envmap_fragment:Ul,envmap_common_pars_fragment:Ol,envmap_pars_fragment:zl,envmap_pars_vertex:Bl,envmap_physical_pars_fragment:Kl,envmap_vertex:kl,fog_vertex:Gl,fog_pars_vertex:Vl,fog_fragment:Hl,fog_pars_fragment:Wl,gradientmap_pars_fragment:Xl,lightmap_fragment:ql,lightmap_pars_fragment:jl,lights_lambert_fragment:Yl,lights_lambert_pars_fragment:Zl,lights_pars_begin:$l,lights_toon_fragment:Jl,lights_toon_pars_fragment:Ql,lights_phong_fragment:ec,lights_phong_pars_fragment:tc,lights_physical_fragment:nc,lights_physical_pars_fragment:ic,lights_fragment_begin:rc,lights_fragment_maps:sc,lights_fragment_end:ac,logdepthbuf_fragment:oc,logdepthbuf_pars_fragment:lc,logdepthbuf_pars_vertex:cc,logdepthbuf_vertex:uc,map_fragment:hc,map_pars_fragment:dc,map_particle_fragment:fc,map_particle_pars_fragment:pc,metalnessmap_fragment:mc,metalnessmap_pars_fragment:gc,morphcolor_vertex:_c,morphnormal_vertex:xc,morphtarget_pars_vertex:vc,morphtarget_vertex:Mc,normal_fragment_begin:yc,normal_fragment_maps:Sc,normal_pars_fragment:bc,normal_pars_vertex:wc,normal_vertex:Ec,normalmap_pars_fragment:Tc,clearcoat_normal_fragment_begin:Ac,clearcoat_normal_fragment_maps:Cc,clearcoat_pars_fragment:Lc,iridescence_pars_fragment:Dc,output_fragment:Pc,packing:Rc,premultiplied_alpha_fragment:Ic,project_vertex:Fc,dithering_fragment:Nc,dithering_pars_fragment:Uc,roughnessmap_fragment:Oc,roughnessmap_pars_fragment:zc,shadowmap_pars_fragment:Bc,shadowmap_pars_vertex:kc,shadowmap_vertex:Gc,shadowmask_pars_fragment:Vc,skinbase_vertex:Hc,skinning_pars_vertex:Wc,skinning_vertex:Xc,skinnormal_vertex:qc,specularmap_fragment:jc,specularmap_pars_fragment:Yc,tonemapping_fragment:Zc,tonemapping_pars_fragment:$c,transmission_fragment:Kc,transmission_pars_fragment:Jc,uv_pars_fragment:Qc,uv_pars_vertex:eu,uv_vertex:tu,uv2_pars_fragment:nu,uv2_pars_vertex:iu,uv2_vertex:ru,worldpos_vertex:su,background_vert:au,background_frag:ou,backgroundCube_vert:lu,backgroundCube_frag:cu,cube_vert:uu,cube_frag:hu,depth_vert:du,depth_frag:fu,distanceRGBA_vert:pu,distanceRGBA_frag:mu,equirect_vert:gu,equirect_frag:_u,linedashed_vert:xu,linedashed_frag:vu,meshbasic_vert:Mu,meshbasic_frag:yu,meshlambert_vert:Su,meshlambert_frag:bu,meshmatcap_vert:wu,meshmatcap_frag:Eu,meshnormal_vert:Tu,meshnormal_frag:Au,meshphong_vert:Cu,meshphong_frag:Lu,meshphysical_vert:Du,meshphysical_frag:Pu,meshtoon_vert:Ru,meshtoon_frag:Iu,points_vert:Fu,points_frag:Nu,shadow_vert:Uu,shadow_frag:Ou,sprite_vert:zu,sprite_frag:Bu},ie={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xt},uv2Transform:{value:new xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}}},Pt={basic:{uniforms:lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ke(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:lt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:lt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ke(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:lt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:lt([ie.points,ie.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:lt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:lt([ie.common,ie.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:lt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:lt([ie.sprite,ie.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:lt([ie.common,ie.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:lt([ie.lights,ie.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Pt.physical={uniforms:lt([Pt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Ai={r:0,b:0,g:0};function ku(s,e,t,n,i,r,o){const a=new ke(0);let c=r===!0?0:1,l,u,f=null,h=0,m=null;function x(d,M){let T=!1,y=M.isScene===!0?M.background:null;y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y));const S=s.xr,w=S.getSession&&S.getSession();w&&w.environmentBlendMode==="additive"&&(y=null),y===null?p(a,c):y&&y.isColor&&(p(y,1),T=!0),(s.autoClear||T)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ri)?(u===void 0&&(u=new Ht(new qn(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Xn(Pt.backgroundCube.uniforms),vertexShader:Pt.backgroundCube.vertexShader,fragmentShader:Pt.backgroundCube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,N,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=y.encoding!==ze,(f!==y||h!==y.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,m=s.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ht(new Or(2,2),new xn({name:"BackgroundMaterial",uniforms:Xn(Pt.background.uniforms),vertexShader:Pt.background.vertexShader,fragmentShader:Pt.background.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=y.encoding!==ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,f=y,h=y.version,m=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,M){d.getRGB(Ai,Sa(s)),n.buffers.color.setClear(Ai.r,Ai.g,Ai.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(d,M=1){a.set(d),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(a,c)},render:x}}function Gu(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=d(null);let l=c,u=!1;function f(I,W,$,Q,X){let ee=!1;if(o){const Y=p(Q,$,W);l!==Y&&(l=Y,m(l.object)),ee=M(I,Q,$,X),ee&&T(I,Q,$,X)}else{const Y=W.wireframe===!0;(l.geometry!==Q.id||l.program!==$.id||l.wireframe!==Y)&&(l.geometry=Q.id,l.program=$.id,l.wireframe=Y,ee=!0)}X!==null&&t.update(X,34963),(ee||u)&&(u=!1,_(I,W,$,Q),X!==null&&s.bindBuffer(34963,t.get(X).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function x(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function p(I,W,$){const Q=$.wireframe===!0;let X=a[I.id];X===void 0&&(X={},a[I.id]=X);let ee=X[W.id];ee===void 0&&(ee={},X[W.id]=ee);let Y=ee[Q];return Y===void 0&&(Y=d(h()),ee[Q]=Y),Y}function d(I){const W=[],$=[],Q=[];for(let X=0;X<i;X++)W[X]=0,$[X]=0,Q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:Q,object:I,attributes:{},index:null}}function M(I,W,$,Q){const X=l.attributes,ee=W.attributes;let Y=0;const ge=$.getAttributes();for(const z in ge)if(ge[z].location>=0){const ne=X[z];let re=ee[z];if(re===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(re=I.instanceColor)),ne===void 0||ne.attribute!==re||re&&ne.data!==re.data)return!0;Y++}return l.attributesNum!==Y||l.index!==Q}function T(I,W,$,Q){const X={},ee=W.attributes;let Y=0;const ge=$.getAttributes();for(const z in ge)if(ge[z].location>=0){let ne=ee[z];ne===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const re={};re.attribute=ne,ne&&ne.data&&(re.data=ne.data),X[z]=re,Y++}l.attributes=X,l.attributesNum=Y,l.index=Q}function y(){const I=l.newAttributes;for(let W=0,$=I.length;W<$;W++)I[W]=0}function S(I){w(I,0)}function w(I,W){const $=l.newAttributes,Q=l.enabledAttributes,X=l.attributeDivisors;$[I]=1,Q[I]===0&&(s.enableVertexAttribArray(I),Q[I]=1),X[I]!==W&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),X[I]=W)}function L(){const I=l.newAttributes,W=l.enabledAttributes;for(let $=0,Q=W.length;$<Q;$++)W[$]!==I[$]&&(s.disableVertexAttribArray($),W[$]=0)}function N(I,W,$,Q,X,ee){n.isWebGL2===!0&&($===5124||$===5125)?s.vertexAttribIPointer(I,W,$,X,ee):s.vertexAttribPointer(I,W,$,Q,X,ee)}function _(I,W,$,Q){if(n.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const X=Q.attributes,ee=$.getAttributes(),Y=W.defaultAttributeValues;for(const ge in ee){const z=ee[ge];if(z.location>=0){let Z=X[ge];if(Z===void 0&&(ge==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),ge==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){const ne=Z.normalized,re=Z.itemSize,B=t.get(Z);if(B===void 0)continue;const Me=B.buffer,pe=B.type,de=B.bytesPerElement;if(Z.isInterleavedBufferAttribute){const le=Z.data,Ue=le.stride,Se=Z.offset;if(le.isInstancedInterleavedBuffer){for(let xe=0;xe<z.locationSize;xe++)w(z.location+xe,le.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<z.locationSize;xe++)S(z.location+xe);s.bindBuffer(34962,Me);for(let xe=0;xe<z.locationSize;xe++)N(z.location+xe,re/z.locationSize,pe,ne,Ue*de,(Se+re/z.locationSize*xe)*de)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<z.locationSize;le++)w(z.location+le,Z.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<z.locationSize;le++)S(z.location+le);s.bindBuffer(34962,Me);for(let le=0;le<z.locationSize;le++)N(z.location+le,re/z.locationSize,pe,ne,re*de,re/z.locationSize*le*de)}}else if(Y!==void 0){const ne=Y[ge];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(z.location,ne);break;case 3:s.vertexAttrib3fv(z.location,ne);break;case 4:s.vertexAttrib4fv(z.location,ne);break;default:s.vertexAttrib1fv(z.location,ne)}}}}L()}function A(){j();for(const I in a){const W=a[I];for(const $ in W){const Q=W[$];for(const X in Q)x(Q[X].object),delete Q[X];delete W[$]}delete a[I]}}function R(I){if(a[I.id]===void 0)return;const W=a[I.id];for(const $ in W){const Q=W[$];for(const X in Q)x(Q[X].object),delete Q[X];delete W[$]}delete a[I.id]}function q(I){for(const W in a){const $=a[W];if($[I.id]===void 0)continue;const Q=$[I.id];for(const X in Q)x(Q[X].object),delete Q[X];delete $[I.id]}}function j(){O(),u=!0,l!==c&&(l=c,m(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:j,resetDefaultState:O,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:q,initAttributes:y,enableAttribute:S,disableUnusedAttributes:L}}function Vu(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,f){if(f===0)return;let h,m;if(i)h=s,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,l,u,f),t.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=c}function Hu(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=s.getParameter(34930),h=s.getParameter(35660),m=s.getParameter(3379),x=s.getParameter(34076),p=s.getParameter(34921),d=s.getParameter(36347),M=s.getParameter(36348),T=s.getParameter(36349),y=h>0,S=o||e.has("OES_texture_float"),w=y&&S,L=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:M,maxFragmentUniforms:T,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:L}}function Wu(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new an,a=new xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||i;return i=h,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,M=s.get(f);if(!i||x===null||x.length===0||r&&!d)r?u(null):l();else{const T=r?0:n,y=T*4;let S=M.clippingState||null;c.value=S,S=u(x,h,y,m);for(let w=0;w!==y;++w)S[w]=t[w];M.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,x){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=c.value,x!==!0||d===null){const M=m+p*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(d===null||d.length<M)&&(d=new Float32Array(M));for(let y=0,S=m;y!==p;++y,S+=4)o.copy(f[y]).applyMatrix4(T,a),o.normal.toArray(d,S),d[S+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Xu(s){let e=new WeakMap;function t(o,a){return a===Er?o.mapping=Vn:a===Tr&&(o.mapping=Hn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Er||a===Tr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new rl(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ta extends ba{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zn=4,Is=[.125,.215,.35,.446,.526,.582],ln=20,gr=new Ta,Fs=new ke;let _r=null;const on=(1+Math.sqrt(5))/2,Un=1/on,Ns=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,on,Un),new U(0,on,-Un),new U(Un,0,on),new U(-Un,0,on),new U(on,Un,0),new U(-on,Un,0)];class Us{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_r=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_r),e.scissorTest=!1,Ci(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vn||e.mapping===Hn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_r=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:si,format:Lt,encoding:mn,depthBuffer:!1},i=Os(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Os(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qu(r)),this._blurMaterial=ju(r,e,t)}return i}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,gr)}_sceneToCubeUV(e,t,n,i){const a=new wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Fs),u.toneMapping=Wt,u.autoClear=!1;const m=new Nr({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1}),x=new Ht(new qn,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Fs),p=!0);for(let M=0;M<6;M++){const T=M%3;T===0?(a.up.set(0,c[M],0),a.lookAt(l[M],0,0)):T===1?(a.up.set(0,0,c[M]),a.lookAt(0,l[M],0)):(a.up.set(0,c[M],0),a.lookAt(0,0,l[M]));const y=this._cubeSize;Ci(i,T*y,M>2?y:0,y,y),u.setRenderTarget(i),p&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Vn||e.mapping===Hn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zs());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ci(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,gr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ns[(i-1)%Ns.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ht(this._lodPlanes[i],l),h=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ln-1),p=r/x,d=isFinite(r)?1+Math.floor(u*p):ln;d>ln&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ln}`);const M=[];let T=0;for(let N=0;N<ln;++N){const _=N/p,A=Math.exp(-_*_/2);M.push(A),N===0?T+=A:N<d&&(T+=2*A)}for(let N=0;N<M.length;N++)M[N]=M[N]/T;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=M,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=x,h.mipInt.value=y-n;const S=this._sizeLods[i],w=3*S*(i>y-zn?i-y+zn:0),L=4*(this._cubeSize-S);Ci(t,w,L,3*S,2*S),c.setRenderTarget(t),c.render(f,gr)}}function qu(s){const e=[],t=[],n=[];let i=s;const r=s-zn+1+Is.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-zn?c=Is[o-s+zn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,p=3,d=2,M=1,T=new Float32Array(p*x*m),y=new Float32Array(d*x*m),S=new Float32Array(M*x*m);for(let L=0;L<m;L++){const N=L%3*2/3-1,_=L>2?0:-1,A=[N,_,0,N+2/3,_,0,N+2/3,_+1,0,N,_,0,N+2/3,_+1,0,N,_+1,0];T.set(A,p*x*L),y.set(h,d*x*L);const R=[L,L,L,L,L,L];S.set(R,M*x*L)}const w=new Mn;w.setAttribute("position",new Rt(T,p)),w.setAttribute("uv",new Rt(y,d)),w.setAttribute("faceIndex",new Rt(S,M)),e.push(w),i>zn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Os(s,e,t){const n=new gn(s,e,t);return n.texture.mapping=Ri,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ci(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ju(s,e,t){const n=new Float32Array(ln),i=new U(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:ln,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function zs(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Bs(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function zr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yu(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Er||c===Tr,u=c===Vn||c===Hn;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Us(s)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Us(s));const h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zu(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $u(s,e,t,n){const i={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const x in h)e.update(h[x],34962);const m=f.morphAttributes;for(const x in m){const p=m[x];for(let d=0,M=p.length;d<M;d++)e.update(p[d],34962)}}function l(f){const h=[],m=f.index,x=f.attributes.position;let p=0;if(m!==null){const T=m.array;p=m.version;for(let y=0,S=T.length;y<S;y+=3){const w=T[y+0],L=T[y+1],N=T[y+2];h.push(w,L,L,N,N,w)}}else{const T=x.array;p=x.version;for(let y=0,S=T.length/3-1;y<S;y+=3){const w=y+0,L=y+1,N=y+2;h.push(w,L,L,N,N,w)}}const d=new(pa(h)?ya:Ma)(h,1);d.version=p;const M=r.get(f);M&&e.remove(M),r.set(f,d)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Ku(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,m){s.drawElements(r,m,a,h*c),t.update(m,r,1)}function f(h,m,x){if(x===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,a,h*c,x),t.update(m,r,x)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function Ju(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qu(s,e){return s[0]-e[0]}function eh(s,e){return Math.abs(e[1])-Math.abs(s[1])}function th(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new et,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f,h){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=x!==void 0?x.length:0;let d=r.get(u);if(d===void 0||d.count!==p){let W=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",W)};d!==void 0&&d.texture.dispose();const y=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],N=u.morphAttributes.normal||[],_=u.morphAttributes.color||[];let A=0;y===!0&&(A=1),S===!0&&(A=2),w===!0&&(A=3);let R=u.attributes.position.count*A,q=1;R>e.maxTextureSize&&(q=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const j=new Float32Array(R*q*4*p),O=new xa(j,R,q,p);O.type=un,O.needsUpdate=!0;const I=A*4;for(let $=0;$<p;$++){const Q=L[$],X=N[$],ee=_[$],Y=R*q*4*$;for(let ge=0;ge<Q.count;ge++){const z=ge*I;y===!0&&(o.fromBufferAttribute(Q,ge),j[Y+z+0]=o.x,j[Y+z+1]=o.y,j[Y+z+2]=o.z,j[Y+z+3]=0),S===!0&&(o.fromBufferAttribute(X,ge),j[Y+z+4]=o.x,j[Y+z+5]=o.y,j[Y+z+6]=o.z,j[Y+z+7]=0),w===!0&&(o.fromBufferAttribute(ee,ge),j[Y+z+8]=o.x,j[Y+z+9]=o.y,j[Y+z+10]=o.z,j[Y+z+11]=ee.itemSize===4?o.w:1)}}d={count:p,texture:O,size:new Ee(R,q)},r.set(u,d),u.addEventListener("dispose",W)}let M=0;for(let y=0;y<m.length;y++)M+=m[y];const T=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",m),h.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}else{const x=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==x){p=[];for(let S=0;S<x;S++)p[S]=[S,0];n[u.id]=p}for(let S=0;S<x;S++){const w=p[S];w[0]=S,w[1]=m[S]}p.sort(eh);for(let S=0;S<8;S++)S<x&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Qu);const d=u.morphAttributes.position,M=u.morphAttributes.normal;let T=0;for(let S=0;S<8;S++){const w=a[S],L=w[0],N=w[1];L!==Number.MAX_SAFE_INTEGER&&N?(d&&u.getAttribute("morphTarget"+S)!==d[L]&&u.setAttribute("morphTarget"+S,d[L]),M&&u.getAttribute("morphNormal"+S)!==M[L]&&u.setAttribute("morphNormal"+S,M[L]),i[S]=N,T+=N):(d&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),M&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const y=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function nh(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Aa=new dt,Ca=new xa,La=new Go,Da=new wa,ks=[],Gs=[],Vs=new Float32Array(16),Hs=new Float32Array(9),Ws=new Float32Array(4);function jn(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ks[i];if(r===void 0&&(r=new Float32Array(i),ks[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ye(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ze(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ni(s,e){let t=Gs[e];t===void 0&&(t=new Int32Array(e),Gs[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ih(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function rh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ye(t,e))return;s.uniform2fv(this.addr,e),Ze(t,e)}}function sh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ye(t,e))return;s.uniform3fv(this.addr,e),Ze(t,e)}}function ah(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ye(t,e))return;s.uniform4fv(this.addr,e),Ze(t,e)}}function oh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ye(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ze(t,e)}else{if(Ye(t,n))return;Ws.set(n),s.uniformMatrix2fv(this.addr,!1,Ws),Ze(t,n)}}function lh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ye(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ze(t,e)}else{if(Ye(t,n))return;Hs.set(n),s.uniformMatrix3fv(this.addr,!1,Hs),Ze(t,n)}}function ch(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ye(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ze(t,e)}else{if(Ye(t,n))return;Vs.set(n),s.uniformMatrix4fv(this.addr,!1,Vs),Ze(t,n)}}function uh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function hh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ye(t,e))return;s.uniform2iv(this.addr,e),Ze(t,e)}}function dh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ye(t,e))return;s.uniform3iv(this.addr,e),Ze(t,e)}}function fh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ye(t,e))return;s.uniform4iv(this.addr,e),Ze(t,e)}}function ph(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ye(t,e))return;s.uniform2uiv(this.addr,e),Ze(t,e)}}function gh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ye(t,e))return;s.uniform3uiv(this.addr,e),Ze(t,e)}}function _h(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ye(t,e))return;s.uniform4uiv(this.addr,e),Ze(t,e)}}function xh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Aa,i)}function vh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||La,i)}function Mh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Da,i)}function yh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ca,i)}function Sh(s){switch(s){case 5126:return ih;case 35664:return rh;case 35665:return sh;case 35666:return ah;case 35674:return oh;case 35675:return lh;case 35676:return ch;case 5124:case 35670:return uh;case 35667:case 35671:return hh;case 35668:case 35672:return dh;case 35669:case 35673:return fh;case 5125:return ph;case 36294:return mh;case 36295:return gh;case 36296:return _h;case 35678:case 36198:case 36298:case 36306:case 35682:return xh;case 35679:case 36299:case 36307:return vh;case 35680:case 36300:case 36308:case 36293:return Mh;case 36289:case 36303:case 36311:case 36292:return yh}}function bh(s,e){s.uniform1fv(this.addr,e)}function wh(s,e){const t=jn(e,this.size,2);s.uniform2fv(this.addr,t)}function Eh(s,e){const t=jn(e,this.size,3);s.uniform3fv(this.addr,t)}function Th(s,e){const t=jn(e,this.size,4);s.uniform4fv(this.addr,t)}function Ah(s,e){const t=jn(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ch(s,e){const t=jn(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Lh(s,e){const t=jn(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Dh(s,e){s.uniform1iv(this.addr,e)}function Ph(s,e){s.uniform2iv(this.addr,e)}function Rh(s,e){s.uniform3iv(this.addr,e)}function Ih(s,e){s.uniform4iv(this.addr,e)}function Fh(s,e){s.uniform1uiv(this.addr,e)}function Nh(s,e){s.uniform2uiv(this.addr,e)}function Uh(s,e){s.uniform3uiv(this.addr,e)}function Oh(s,e){s.uniform4uiv(this.addr,e)}function zh(s,e,t){const n=this.cache,i=e.length,r=Ni(t,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Aa,r[o])}function Bh(s,e,t){const n=this.cache,i=e.length,r=Ni(t,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||La,r[o])}function kh(s,e,t){const n=this.cache,i=e.length,r=Ni(t,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Da,r[o])}function Gh(s,e,t){const n=this.cache,i=e.length,r=Ni(t,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ca,r[o])}function Vh(s){switch(s){case 5126:return bh;case 35664:return wh;case 35665:return Eh;case 35666:return Th;case 35674:return Ah;case 35675:return Ch;case 35676:return Lh;case 5124:case 35670:return Dh;case 35667:case 35671:return Ph;case 35668:case 35672:return Rh;case 35669:case 35673:return Ih;case 5125:return Fh;case 36294:return Nh;case 36295:return Uh;case 36296:return Oh;case 35678:case 36198:case 36298:case 36306:case 35682:return zh;case 35679:case 36299:case 36307:return Bh;case 35680:case 36300:case 36308:case 36293:return kh;case 36289:case 36303:case 36311:case 36292:return Gh}}class Hh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Sh(t.type)}}class Wh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Vh(t.type)}}class Xh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const xr=/(\w+)(\])?(\[|\.)?/g;function Xs(s,e){s.seq.push(e),s.map[e.id]=e}function qh(s,e,t){const n=s.name,i=n.length;for(xr.lastIndex=0;;){const r=xr.exec(n),o=xr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Xs(t,l===void 0?new Hh(a,s,e):new Wh(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new Xh(a),Xs(t,f)),t=f}}}class Pi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);qh(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function qs(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let jh=0;function Yh(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Zh(s){switch(s){case mn:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function js(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Yh(s.getShaderSource(e),o)}else return i}function $h(s,e){const t=Zh(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Kh(s,e){let t;switch(e){case fo:t="Linear";break;case po:t="Reinhard";break;case mo:t="OptimizedCineon";break;case go:t="ACESFilmic";break;case _o:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Jh(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ii).join(`
`)}function Qh(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ed(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ii(s){return s!==""}function Ys(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zs(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const td=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pr(s){return s.replace(td,nd)}function nd(s,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Pr(t)}const id=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $s(s){return s.replace(id,rd)}function rd(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ks(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sd(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===la?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wa?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function ad(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vn:case Hn:e="ENVMAP_TYPE_CUBE";break;case Ri:e="ENVMAP_TYPE_CUBE_UV";break}return e}function od(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hn:e="ENVMAP_MODE_REFRACTION";break}return e}function ld(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ha:e="ENVMAP_BLENDING_MULTIPLY";break;case uo:e="ENVMAP_BLENDING_MIX";break;case ho:e="ENVMAP_BLENDING_ADD";break}return e}function cd(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ud(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=sd(t),l=ad(t),u=od(t),f=ld(t),h=cd(t),m=t.isWebGL2?"":Jh(t),x=Qh(r),p=i.createProgram();let d,M,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[x].filter(ii).join(`
`),d.length>0&&(d+=`
`),M=[m,x].filter(ii).join(`
`),M.length>0&&(M+=`
`)):(d=[Ks(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ii).join(`
`),M=[m,Ks(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wt?"#define TONE_MAPPING":"",t.toneMapping!==Wt?be.tonemapping_pars_fragment:"",t.toneMapping!==Wt?Kh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,$h("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ii).join(`
`)),o=Pr(o),o=Ys(o,t),o=Zs(o,t),a=Pr(a),a=Ys(a,t),a=Zs(a,t),o=$s(o),a=$s(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["#define varying in",t.glslVersion===Ms?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ms?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const y=T+d+o,S=T+M+a,w=qs(i,35633,y),L=qs(i,35632,S);if(i.attachShader(p,w),i.attachShader(p,L),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(w).trim(),q=i.getShaderInfoLog(L).trim();let j=!0,O=!0;if(i.getProgramParameter(p,35714)===!1){j=!1;const I=js(i,w,"vertex"),W=js(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+I+`
`+W)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(R===""||q==="")&&(O=!1);O&&(this.diagnostics={runnable:j,programLog:A,vertexShader:{log:R,prefix:d},fragmentShader:{log:q,prefix:M}})}i.deleteShader(w),i.deleteShader(L);let N;this.getUniforms=function(){return N===void 0&&(N=new Pi(i,p)),N};let _;return this.getAttributes=function(){return _===void 0&&(_=ed(i,p)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=jh++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=L,this}let hd=0;class dd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fd(e),t.set(e,n)),n}}class fd{constructor(e){this.id=hd++,this.code=e,this.usedTimes=0}}function pd(s,e,t,n,i,r,o){const a=new va,c=new dd,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_,A,R,q,j){const O=q.fog,I=j.geometry,W=_.isMeshStandardMaterial?q.environment:null,$=(_.isMeshStandardMaterial?t:e).get(_.envMap||W),Q=$&&$.mapping===Ri?$.image.height:null,X=x[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const ee=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Y=ee!==void 0?ee.length:0;let ge=0;I.morphAttributes.position!==void 0&&(ge=1),I.morphAttributes.normal!==void 0&&(ge=2),I.morphAttributes.color!==void 0&&(ge=3);let z,Z,ne,re;if(X){const Ue=Pt[X];z=Ue.vertexShader,Z=Ue.fragmentShader}else z=_.vertexShader,Z=_.fragmentShader,c.update(_),ne=c.getVertexShaderID(_),re=c.getFragmentShaderID(_);const B=s.getRenderTarget(),Me=_.alphaTest>0,pe=_.clearcoat>0,de=_.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:_.type,vertexShader:z,fragmentShader:Z,defines:_.defines,customVertexShaderID:ne,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:h,outputEncoding:B===null?s.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:mn,map:!!_.map,matcap:!!_.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:Q,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Oo,tangentSpaceNormalMap:_.normalMapType===Uo,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===ze,clearcoat:pe,clearcoatMap:pe&&!!_.clearcoatMap,clearcoatRoughnessMap:pe&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!_.clearcoatNormalMap,iridescence:de,iridescenceMap:de&&!!_.iridescenceMap,iridescenceThicknessMap:de&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===kn,alphaMap:!!_.alphaMap,alphaTest:Me,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!I.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!O,useFog:_.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ge,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:_.toneMapped?s.toneMapping:Wt,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Zt,flipSided:_.side===vt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function d(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)A.push(R),A.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(M(A,_),T(A,_),A.push(s.outputEncoding)),A.push(_.customProgramCacheKey),A.join()}function M(_,A){_.push(A.precision),_.push(A.outputEncoding),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.combine),_.push(A.vertexUvs),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function T(_,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),_.push(a.mask)}function y(_){const A=x[_.type];let R;if(A){const q=Pt[A];R=el.clone(q.uniforms)}else R=_.uniforms;return R}function S(_,A){let R;for(let q=0,j=l.length;q<j;q++){const O=l[q];if(O.cacheKey===A){R=O,++R.usedTimes;break}}return R===void 0&&(R=new ud(s,A,_,r),l.push(R)),R}function w(_){if(--_.usedTimes===0){const A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),_.destroy()}}function L(_){c.remove(_)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:S,releaseProgram:w,releaseShaderCache:L,programs:l,dispose:N}}function md(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function gd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Js(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qs(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,m,x,p,d){let M=s[e];return M===void 0?(M={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:p,group:d},s[e]=M):(M.id=f.id,M.object=f,M.geometry=h,M.material=m,M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=p,M.group=d),e++,M}function a(f,h,m,x,p,d){const M=o(f,h,m,x,p,d);m.transmission>0?n.push(M):m.transparent===!0?i.push(M):t.push(M)}function c(f,h,m,x,p,d){const M=o(f,h,m,x,p,d);m.transmission>0?n.unshift(M):m.transparent===!0?i.unshift(M):t.unshift(M)}function l(f,h){t.length>1&&t.sort(f||gd),n.length>1&&n.sort(h||Js),i.length>1&&i.sort(h||Js)}function u(){for(let f=e,h=s.length;f<h;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function _d(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Qs,s.set(n,[o])):i>=r.length?(o=new Qs,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function xd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ke};break;case"SpotLight":t={position:new U,direction:new U,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function vd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Md=0;function yd(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Sd(s,e){const t=new xd,n=vd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,o=new je,a=new je;function c(u,f){let h=0,m=0,x=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let p=0,d=0,M=0,T=0,y=0,S=0,w=0,L=0,N=0,_=0;u.sort(yd);const A=f!==!0?Math.PI:1;for(let q=0,j=u.length;q<j;q++){const O=u[q],I=O.color,W=O.intensity,$=O.distance,Q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=I.r*W*A,m+=I.g*W*A,x+=I.b*W*A;else if(O.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(O.sh.coefficients[X],W);else if(O.isDirectionalLight){const X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*A),O.castShadow){const ee=O.shadow,Y=n.get(O);Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=O.shadow.matrix,S++}i.directional[p]=X,p++}else if(O.isSpotLight){const X=t.get(O);X.position.setFromMatrixPosition(O.matrixWorld),X.color.copy(I).multiplyScalar(W*A),X.distance=$,X.coneCos=Math.cos(O.angle),X.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),X.decay=O.decay,i.spot[M]=X;const ee=O.shadow;if(O.map&&(i.spotLightMap[N]=O.map,N++,ee.updateMatrices(O),O.castShadow&&_++),i.spotLightMatrix[M]=ee.matrix,O.castShadow){const Y=n.get(O);Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,i.spotShadow[M]=Y,i.spotShadowMap[M]=Q,L++}M++}else if(O.isRectAreaLight){const X=t.get(O);X.color.copy(I).multiplyScalar(W),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),i.rectArea[T]=X,T++}else if(O.isPointLight){const X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*A),X.distance=O.distance,X.decay=O.decay,O.castShadow){const ee=O.shadow,Y=n.get(O);Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,Y.shadowCameraNear=ee.camera.near,Y.shadowCameraFar=ee.camera.far,i.pointShadow[d]=Y,i.pointShadowMap[d]=Q,i.pointShadowMatrix[d]=O.shadow.matrix,w++}i.point[d]=X,d++}else if(O.isHemisphereLight){const X=t.get(O);X.skyColor.copy(O.color).multiplyScalar(W*A),X.groundColor.copy(O.groundColor).multiplyScalar(W*A),i.hemi[y]=X,y++}}T>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=x;const R=i.hash;(R.directionalLength!==p||R.pointLength!==d||R.spotLength!==M||R.rectAreaLength!==T||R.hemiLength!==y||R.numDirectionalShadows!==S||R.numPointShadows!==w||R.numSpotShadows!==L||R.numSpotMaps!==N)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=T,i.point.length=d,i.hemi.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=L+N-_,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=_,R.directionalLength=p,R.pointLength=d,R.spotLength=M,R.rectAreaLength=T,R.hemiLength=y,R.numDirectionalShadows=S,R.numPointShadows=w,R.numSpotShadows=L,R.numSpotMaps=N,i.version=Md++)}function l(u,f){let h=0,m=0,x=0,p=0,d=0;const M=f.matrixWorldInverse;for(let T=0,y=u.length;T<y;T++){const S=u[T];if(S.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(M),h++}else if(S.isSpotLight){const w=i.spot[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(M),x++}else if(S.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(M),a.identity(),o.copy(S.matrixWorld),o.premultiply(M),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(M),m++}else if(S.isHemisphereLight){const w=i.hemi[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(M),d++}}}return{setup:c,setupView:l,state:i}}function ea(s,e){const t=new Sd(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function bd(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new ea(s,e),t.set(r,[c])):o>=a.length?(c=new ea(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class wd extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ed extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Td=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ad=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cd(s,e,t){let n=new Ur;const i=new Ee,r=new Ee,o=new et,a=new wd({depthPacking:No}),c=new Ed,l={},u=t.maxTextureSize,f={[Kt]:vt,[vt]:Kt,[Zt]:Zt},h=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Td,fragmentShader:Ad}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Mn;x.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ht(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=la,this.render=function(S,w,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;const N=s.getRenderTarget(),_=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),R=s.state;R.setBlending($t),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let q=0,j=S.length;q<j;q++){const O=S[q],I=O.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const W=I.getFrameExtents();if(i.multiply(W),r.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/W.x),i.x=r.x*W.x,I.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/W.y),i.y=r.y*W.y,I.mapSize.y=r.y)),I.map===null){const Q=this.type!==ni?{minFilter:ct,magFilter:ct}:{};I.map=new gn(i.x,i.y,Q),I.map.texture.name=O.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const $=I.getViewportCount();for(let Q=0;Q<$;Q++){const X=I.getViewport(Q);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),R.viewport(o),I.updateMatrices(O,Q),n=I.getFrustum(),y(w,L,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===ni&&M(I,L),I.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(N,_,A)};function M(S,w){const L=e.update(p);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new gn(i.x,i.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(w,null,L,h,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(w,null,L,m,p,null)}function T(S,w,L,N,_,A){let R=null;const q=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(q!==void 0)R=q;else if(R=L.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=R.uuid,O=w.uuid;let I=l[j];I===void 0&&(I={},l[j]=I);let W=I[O];W===void 0&&(W=R.clone(),I[O]=W),R=W}return R.visible=w.visible,R.wireframe=w.wireframe,A===ni?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,L.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(L.matrixWorld),R.nearDistance=N,R.farDistance=_),R}function y(S,w,L,N,_){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===ni)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const q=e.update(S),j=S.material;if(Array.isArray(j)){const O=q.groups;for(let I=0,W=O.length;I<W;I++){const $=O[I],Q=j[$.materialIndex];if(Q&&Q.visible){const X=T(S,Q,N,L.near,L.far,_);s.renderBufferDirect(L,null,q,X,S,$)}}}else if(j.visible){const O=T(S,j,N,L.near,L.far,_);s.renderBufferDirect(L,null,q,O,S,null)}}const R=S.children;for(let q=0,j=R.length;q<j;q++)y(R[q],w,L,N,_)}}function Ld(s,e,t){const n=t.isWebGL2;function i(){let C=!1;const G=new et;let K=null;const ce=new et(0,0,0,0);return{setMask:function(me){K!==me&&!C&&(s.colorMask(me,me,me,me),K=me)},setLocked:function(me){C=me},setClear:function(me,Ne,Ke,nt,Jt){Jt===!0&&(me*=nt,Ne*=nt,Ke*=nt),G.set(me,Ne,Ke,nt),ce.equals(G)===!1&&(s.clearColor(me,Ne,Ke,nt),ce.copy(G))},reset:function(){C=!1,K=null,ce.set(-1,0,0,0)}}}function r(){let C=!1,G=null,K=null,ce=null;return{setTest:function(me){me?Me(2929):pe(2929)},setMask:function(me){G!==me&&!C&&(s.depthMask(me),G=me)},setFunc:function(me){if(K!==me){switch(me){case io:s.depthFunc(512);break;case ro:s.depthFunc(519);break;case so:s.depthFunc(513);break;case wr:s.depthFunc(515);break;case ao:s.depthFunc(514);break;case oo:s.depthFunc(518);break;case lo:s.depthFunc(516);break;case co:s.depthFunc(517);break;default:s.depthFunc(515)}K=me}},setLocked:function(me){C=me},setClear:function(me){ce!==me&&(s.clearDepth(me),ce=me)},reset:function(){C=!1,G=null,K=null,ce=null}}}function o(){let C=!1,G=null,K=null,ce=null,me=null,Ne=null,Ke=null,nt=null,Jt=null;return{setTest:function(Be){C||(Be?Me(2960):pe(2960))},setMask:function(Be){G!==Be&&!C&&(s.stencilMask(Be),G=Be)},setFunc:function(Be,It,yt){(K!==Be||ce!==It||me!==yt)&&(s.stencilFunc(Be,It,yt),K=Be,ce=It,me=yt)},setOp:function(Be,It,yt){(Ne!==Be||Ke!==It||nt!==yt)&&(s.stencilOp(Be,It,yt),Ne=Be,Ke=It,nt=yt)},setLocked:function(Be){C=Be},setClear:function(Be){Jt!==Be&&(s.clearStencil(Be),Jt=Be)},reset:function(){C=!1,G=null,K=null,ce=null,me=null,Ne=null,Ke=null,nt=null,Jt=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,p=[],d=null,M=!1,T=null,y=null,S=null,w=null,L=null,N=null,_=null,A=!1,R=null,q=null,j=null,O=null,I=null;const W=s.getParameter(35661);let $=!1,Q=0;const X=s.getParameter(7938);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=Q>=2);let ee=null,Y={};const ge=s.getParameter(3088),z=s.getParameter(2978),Z=new et().fromArray(ge),ne=new et().fromArray(z);function re(C,G,K){const ce=new Uint8Array(4),me=s.createTexture();s.bindTexture(C,me),s.texParameteri(C,10241,9728),s.texParameteri(C,10240,9728);for(let Ne=0;Ne<K;Ne++)s.texImage2D(G+Ne,0,6408,1,1,0,6408,5121,ce);return me}const B={};B[3553]=re(3553,3553,1),B[34067]=re(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Me(2929),c.setFunc(wr),Ve(!1),st(Hr),Me(2884),$e($t);function Me(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function pe(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function de(C,G){return m[C]!==G?(s.bindFramebuffer(C,G),m[C]=G,n&&(C===36009&&(m[36160]=G),C===36160&&(m[36009]=G)),!0):!1}function le(C,G){let K=p,ce=!1;if(C)if(K=x.get(G),K===void 0&&(K=[],x.set(G,K)),C.isWebGLMultipleRenderTargets){const me=C.texture;if(K.length!==me.length||K[0]!==36064){for(let Ne=0,Ke=me.length;Ne<Ke;Ne++)K[Ne]=36064+Ne;K.length=me.length,ce=!0}}else K[0]!==36064&&(K[0]=36064,ce=!0);else K[0]!==1029&&(K[0]=1029,ce=!0);ce&&(t.isWebGL2?s.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Ue(C){return d!==C?(s.useProgram(C),d=C,!0):!1}const Se={[On]:32774,[qa]:32778,[ja]:32779};if(n)Se[jr]=32775,Se[Yr]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(Se[jr]=C.MIN_EXT,Se[Yr]=C.MAX_EXT)}const xe={[Ya]:0,[Za]:1,[$a]:768,[ca]:770,[no]:776,[eo]:774,[Ja]:772,[Ka]:769,[ua]:771,[to]:775,[Qa]:773};function $e(C,G,K,ce,me,Ne,Ke,nt){if(C===$t){M===!0&&(pe(3042),M=!1);return}if(M===!1&&(Me(3042),M=!0),C!==Xa){if(C!==T||nt!==A){if((y!==On||L!==On)&&(s.blendEquation(32774),y=On,L=On),nt)switch(C){case kn:s.blendFuncSeparate(1,771,1,771);break;case Wr:s.blendFunc(1,1);break;case Xr:s.blendFuncSeparate(0,769,0,1);break;case qr:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case kn:s.blendFuncSeparate(770,771,1,771);break;case Wr:s.blendFunc(770,1);break;case Xr:s.blendFuncSeparate(0,769,0,1);break;case qr:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}S=null,w=null,N=null,_=null,T=C,A=nt}return}me=me||G,Ne=Ne||K,Ke=Ke||ce,(G!==y||me!==L)&&(s.blendEquationSeparate(Se[G],Se[me]),y=G,L=me),(K!==S||ce!==w||Ne!==N||Ke!==_)&&(s.blendFuncSeparate(xe[K],xe[ce],xe[Ne],xe[Ke]),S=K,w=ce,N=Ne,_=Ke),T=C,A=!1}function tt(C,G){C.side===Zt?pe(2884):Me(2884);let K=C.side===vt;G&&(K=!K),Ve(K),C.blending===kn&&C.transparent===!1?$e($t):$e(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const ce=C.stencilWrite;l.setTest(ce),ce&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Fe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Me(32926):pe(32926)}function Ve(C){R!==C&&(C?s.frontFace(2304):s.frontFace(2305),R=C)}function st(C){C!==Va?(Me(2884),C!==q&&(C===Hr?s.cullFace(1029):C===Ha?s.cullFace(1028):s.cullFace(1032))):pe(2884),q=C}function Ge(C){C!==j&&($&&s.lineWidth(C),j=C)}function Fe(C,G,K){C?(Me(32823),(O!==G||I!==K)&&(s.polygonOffset(G,K),O=G,I=K)):pe(32823)}function Mt(C){C?Me(3089):pe(3089)}function ut(C){C===void 0&&(C=33984+W-1),ee!==C&&(s.activeTexture(C),ee=C)}function b(C,G,K){K===void 0&&(ee===null?K=33984+W-1:K=ee);let ce=Y[K];ce===void 0&&(ce={type:void 0,texture:void 0},Y[K]=ce),(ce.type!==C||ce.texture!==G)&&(ee!==K&&(s.activeTexture(K),ee=K),s.bindTexture(C,G||B[C]),ce.type=C,ce.texture=G)}function g(){const C=Y[ee];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function k(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function E(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function D(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(C){Z.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function he(C){ne.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),ne.copy(C))}function Ae(C,G){let K=f.get(G);K===void 0&&(K=new WeakMap,f.set(G,K));let ce=K.get(C);ce===void 0&&(ce=s.getUniformBlockIndex(G,C.name),K.set(C,ce))}function Ce(C,G){const ce=f.get(G).get(C);u.get(G)!==ce&&(s.uniformBlockBinding(G,ce,C.__bindingPointIndex),u.set(G,ce))}function Oe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ee=null,Y={},m={},x=new WeakMap,p=[],d=null,M=!1,T=null,y=null,S=null,w=null,L=null,N=null,_=null,A=!1,R=null,q=null,j=null,O=null,I=null,Z.set(0,0,s.canvas.width,s.canvas.height),ne.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Me,disable:pe,bindFramebuffer:de,drawBuffers:le,useProgram:Ue,setBlending:$e,setMaterial:tt,setFlipSided:Ve,setCullFace:st,setLineWidth:Ge,setPolygonOffset:Fe,setScissorTest:Mt,activeTexture:ut,bindTexture:b,unbindTexture:g,compressedTexImage2D:k,compressedTexImage3D:J,texImage2D:ue,texImage3D:ae,updateUBOMapping:Ae,uniformBlockBinding:Ce,texStorage2D:D,texStorage3D:oe,texSubImage2D:te,texSubImage3D:se,compressedTexSubImage2D:ve,compressedTexSubImage3D:E,scissor:fe,viewport:he,reset:Oe}}function Dd(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const d=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,g){return M?new OffscreenCanvas(b,g):oi("canvas")}function y(b,g,k,J){let te=1;if((b.width>J||b.height>J)&&(te=J/Math.max(b.width,b.height)),te<1||g===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const se=g?Dr:Math.floor,ve=se(te*b.width),E=se(te*b.height);p===void 0&&(p=T(ve,E));const D=k?T(ve,E):p;return D.width=ve,D.height=E,D.getContext("2d").drawImage(b,0,0,ve,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ve+"x"+E+")."),D}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function S(b){return Ss(b.width)&&Ss(b.height)}function w(b){return a?!1:b.wrapS!==Ct||b.wrapT!==Ct||b.minFilter!==ct&&b.minFilter!==bt}function L(b,g){return b.generateMipmaps&&g&&b.minFilter!==ct&&b.minFilter!==bt}function N(b){s.generateMipmap(b)}function _(b,g,k,J,te=!1){if(a===!1)return g;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se=g;return g===6403&&(k===5126&&(se=33326),k===5131&&(se=33325),k===5121&&(se=33321)),g===33319&&(k===5126&&(se=33328),k===5131&&(se=33327),k===5121&&(se=33323)),g===6408&&(k===5126&&(se=34836),k===5131&&(se=34842),k===5121&&(se=J===ze&&te===!1?35907:32856),k===32819&&(se=32854),k===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function A(b,g,k){return L(b,k)===!0||b.isFramebufferTexture&&b.minFilter!==ct&&b.minFilter!==bt?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function R(b){return b===ct||b===Zr||b===Gi?9728:9729}function q(b){const g=b.target;g.removeEventListener("dispose",q),O(g),g.isVideoTexture&&x.delete(g)}function j(b){const g=b.target;g.removeEventListener("dispose",j),W(g)}function O(b){const g=n.get(b);if(g.__webglInit===void 0)return;const k=b.source,J=d.get(k);if(J){const te=J[g.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(b),Object.keys(J).length===0&&d.delete(k)}n.remove(b)}function I(b){const g=n.get(b);s.deleteTexture(g.__webglTexture);const k=b.source,J=d.get(k);delete J[g.__cacheKey],o.memory.textures--}function W(b){const g=b.texture,k=n.get(b),J=n.get(g);if(J.__webglTexture!==void 0&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)s.deleteFramebuffer(k.__webglFramebuffer[te]),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[te]);else{if(s.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let te=0;te<k.__webglColorRenderbuffer.length;te++)k.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[te]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,se=g.length;te<se;te++){const ve=n.get(g[te]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(g[te])}n.remove(g),n.remove(b)}let $=0;function Q(){$=0}function X(){const b=$;return b>=c&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+c),$+=1,b}function ee(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.encoding),g.join()}function Y(b,g){const k=n.get(b);if(b.isVideoTexture&&Mt(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(k,b,g);return}}t.bindTexture(3553,k.__webglTexture,33984+g)}function ge(b,g){const k=n.get(b);if(b.version>0&&k.__version!==b.version){pe(k,b,g);return}t.bindTexture(35866,k.__webglTexture,33984+g)}function z(b,g){const k=n.get(b);if(b.version>0&&k.__version!==b.version){pe(k,b,g);return}t.bindTexture(32879,k.__webglTexture,33984+g)}function Z(b,g){const k=n.get(b);if(b.version>0&&k.__version!==b.version){de(k,b,g);return}t.bindTexture(34067,k.__webglTexture,33984+g)}const ne={[Ar]:10497,[Ct]:33071,[Cr]:33648},re={[ct]:9728,[Zr]:9984,[Gi]:9986,[bt]:9729,[xo]:9985,[ri]:9987};function B(b,g,k){if(k?(s.texParameteri(b,10242,ne[g.wrapS]),s.texParameteri(b,10243,ne[g.wrapT]),(b===32879||b===35866)&&s.texParameteri(b,32882,ne[g.wrapR]),s.texParameteri(b,10240,re[g.magFilter]),s.texParameteri(b,10241,re[g.minFilter])):(s.texParameteri(b,10242,33071),s.texParameteri(b,10243,33071),(b===32879||b===35866)&&s.texParameteri(b,32882,33071),(g.wrapS!==Ct||g.wrapT!==Ct)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,10240,R(g.magFilter)),s.texParameteri(b,10241,R(g.minFilter)),g.minFilter!==ct&&g.minFilter!==bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===ct||g.minFilter!==Gi&&g.minFilter!==ri||g.type===un&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===si&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(s.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function Me(b,g){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",q));const J=g.source;let te=d.get(J);te===void 0&&(te={},d.set(J,te));const se=ee(g);if(se!==b.__cacheKey){te[se]===void 0&&(te[se]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[se].usedTimes++;const ve=te[b.__cacheKey];ve!==void 0&&(te[b.__cacheKey].usedTimes--,ve.usedTimes===0&&I(g)),b.__cacheKey=se,b.__webglTexture=te[se].texture}return k}function pe(b,g,k){let J=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=35866),g.isData3DTexture&&(J=32879);const te=Me(b,g),se=g.source;t.bindTexture(J,b.__webglTexture,33984+k);const ve=n.get(se);if(se.version!==ve.__version||te===!0){t.activeTexture(33984+k),s.pixelStorei(37440,g.flipY),s.pixelStorei(37441,g.premultiplyAlpha),s.pixelStorei(3317,g.unpackAlignment),s.pixelStorei(37443,0);const E=w(g)&&S(g.image)===!1;let D=y(g.image,E,!1,u);D=ut(g,D);const oe=S(D)||a,ue=r.convert(g.format,g.encoding);let ae=r.convert(g.type),fe=_(g.internalFormat,ue,ae,g.encoding,g.isVideoTexture);B(J,g,oe);let he;const Ae=g.mipmaps,Ce=a&&g.isVideoTexture!==!0,Oe=ve.__version===void 0||te===!0,C=A(g,D,oe);if(g.isDepthTexture)fe=6402,a?g.type===un?fe=36012:g.type===cn?fe=33190:g.type===Gn?fe=35056:fe=33189:g.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===hn&&fe===6402&&g.type!==fa&&g.type!==cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=cn,ae=r.convert(g.type)),g.format===Wn&&fe===6402&&(fe=34041,g.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Gn,ae=r.convert(g.type))),Oe&&(Ce?t.texStorage2D(3553,1,fe,D.width,D.height):t.texImage2D(3553,0,fe,D.width,D.height,0,ue,ae,null));else if(g.isDataTexture)if(Ae.length>0&&oe){Ce&&Oe&&t.texStorage2D(3553,C,fe,Ae[0].width,Ae[0].height);for(let G=0,K=Ae.length;G<K;G++)he=Ae[G],Ce?t.texSubImage2D(3553,G,0,0,he.width,he.height,ue,ae,he.data):t.texImage2D(3553,G,fe,he.width,he.height,0,ue,ae,he.data);g.generateMipmaps=!1}else Ce?(Oe&&t.texStorage2D(3553,C,fe,D.width,D.height),t.texSubImage2D(3553,0,0,0,D.width,D.height,ue,ae,D.data)):t.texImage2D(3553,0,fe,D.width,D.height,0,ue,ae,D.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ce&&Oe&&t.texStorage3D(35866,C,fe,Ae[0].width,Ae[0].height,D.depth);for(let G=0,K=Ae.length;G<K;G++)he=Ae[G],g.format!==Lt?ue!==null?Ce?t.compressedTexSubImage3D(35866,G,0,0,0,he.width,he.height,D.depth,ue,he.data,0,0):t.compressedTexImage3D(35866,G,fe,he.width,he.height,D.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage3D(35866,G,0,0,0,he.width,he.height,D.depth,ue,ae,he.data):t.texImage3D(35866,G,fe,he.width,he.height,D.depth,0,ue,ae,he.data)}else{Ce&&Oe&&t.texStorage2D(3553,C,fe,Ae[0].width,Ae[0].height);for(let G=0,K=Ae.length;G<K;G++)he=Ae[G],g.format!==Lt?ue!==null?Ce?t.compressedTexSubImage2D(3553,G,0,0,he.width,he.height,ue,he.data):t.compressedTexImage2D(3553,G,fe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage2D(3553,G,0,0,he.width,he.height,ue,ae,he.data):t.texImage2D(3553,G,fe,he.width,he.height,0,ue,ae,he.data)}else if(g.isDataArrayTexture)Ce?(Oe&&t.texStorage3D(35866,C,fe,D.width,D.height,D.depth),t.texSubImage3D(35866,0,0,0,0,D.width,D.height,D.depth,ue,ae,D.data)):t.texImage3D(35866,0,fe,D.width,D.height,D.depth,0,ue,ae,D.data);else if(g.isData3DTexture)Ce?(Oe&&t.texStorage3D(32879,C,fe,D.width,D.height,D.depth),t.texSubImage3D(32879,0,0,0,0,D.width,D.height,D.depth,ue,ae,D.data)):t.texImage3D(32879,0,fe,D.width,D.height,D.depth,0,ue,ae,D.data);else if(g.isFramebufferTexture){if(Oe)if(Ce)t.texStorage2D(3553,C,fe,D.width,D.height);else{let G=D.width,K=D.height;for(let ce=0;ce<C;ce++)t.texImage2D(3553,ce,fe,G,K,0,ue,ae,null),G>>=1,K>>=1}}else if(Ae.length>0&&oe){Ce&&Oe&&t.texStorage2D(3553,C,fe,Ae[0].width,Ae[0].height);for(let G=0,K=Ae.length;G<K;G++)he=Ae[G],Ce?t.texSubImage2D(3553,G,0,0,ue,ae,he):t.texImage2D(3553,G,fe,ue,ae,he);g.generateMipmaps=!1}else Ce?(Oe&&t.texStorage2D(3553,C,fe,D.width,D.height),t.texSubImage2D(3553,0,0,0,ue,ae,D)):t.texImage2D(3553,0,fe,ue,ae,D);L(g,oe)&&N(J),ve.__version=se.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function de(b,g,k){if(g.image.length!==6)return;const J=Me(b,g),te=g.source;t.bindTexture(34067,b.__webglTexture,33984+k);const se=n.get(te);if(te.version!==se.__version||J===!0){t.activeTexture(33984+k),s.pixelStorei(37440,g.flipY),s.pixelStorei(37441,g.premultiplyAlpha),s.pixelStorei(3317,g.unpackAlignment),s.pixelStorei(37443,0);const ve=g.isCompressedTexture||g.image[0].isCompressedTexture,E=g.image[0]&&g.image[0].isDataTexture,D=[];for(let G=0;G<6;G++)!ve&&!E?D[G]=y(g.image[G],!1,!0,l):D[G]=E?g.image[G].image:g.image[G],D[G]=ut(g,D[G]);const oe=D[0],ue=S(oe)||a,ae=r.convert(g.format,g.encoding),fe=r.convert(g.type),he=_(g.internalFormat,ae,fe,g.encoding),Ae=a&&g.isVideoTexture!==!0,Ce=se.__version===void 0||J===!0;let Oe=A(g,oe,ue);B(34067,g,ue);let C;if(ve){Ae&&Ce&&t.texStorage2D(34067,Oe,he,oe.width,oe.height);for(let G=0;G<6;G++){C=D[G].mipmaps;for(let K=0;K<C.length;K++){const ce=C[K];g.format!==Lt?ae!==null?Ae?t.compressedTexSubImage2D(34069+G,K,0,0,ce.width,ce.height,ae,ce.data):t.compressedTexImage2D(34069+G,K,he,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+G,K,0,0,ce.width,ce.height,ae,fe,ce.data):t.texImage2D(34069+G,K,he,ce.width,ce.height,0,ae,fe,ce.data)}}}else{C=g.mipmaps,Ae&&Ce&&(C.length>0&&Oe++,t.texStorage2D(34067,Oe,he,D[0].width,D[0].height));for(let G=0;G<6;G++)if(E){Ae?t.texSubImage2D(34069+G,0,0,0,D[G].width,D[G].height,ae,fe,D[G].data):t.texImage2D(34069+G,0,he,D[G].width,D[G].height,0,ae,fe,D[G].data);for(let K=0;K<C.length;K++){const me=C[K].image[G].image;Ae?t.texSubImage2D(34069+G,K+1,0,0,me.width,me.height,ae,fe,me.data):t.texImage2D(34069+G,K+1,he,me.width,me.height,0,ae,fe,me.data)}}else{Ae?t.texSubImage2D(34069+G,0,0,0,ae,fe,D[G]):t.texImage2D(34069+G,0,he,ae,fe,D[G]);for(let K=0;K<C.length;K++){const ce=C[K];Ae?t.texSubImage2D(34069+G,K+1,0,0,ae,fe,ce.image[G]):t.texImage2D(34069+G,K+1,he,ae,fe,ce.image[G])}}}L(g,ue)&&N(34067),se.__version=te.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function le(b,g,k,J,te){const se=r.convert(k.format,k.encoding),ve=r.convert(k.type),E=_(k.internalFormat,se,ve,k.encoding);n.get(g).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,E,g.width,g.height,g.depth,0,se,ve,null):t.texImage2D(te,0,E,g.width,g.height,0,se,ve,null)),t.bindFramebuffer(36160,b),Fe(g)?h.framebufferTexture2DMultisampleEXT(36160,J,te,n.get(k).__webglTexture,0,Ge(g)):(te===3553||te>=34069&&te<=34074)&&s.framebufferTexture2D(36160,J,te,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ue(b,g,k){if(s.bindRenderbuffer(36161,b),g.depthBuffer&&!g.stencilBuffer){let J=33189;if(k||Fe(g)){const te=g.depthTexture;te&&te.isDepthTexture&&(te.type===un?J=36012:te.type===cn&&(J=33190));const se=Ge(g);Fe(g)?h.renderbufferStorageMultisampleEXT(36161,se,J,g.width,g.height):s.renderbufferStorageMultisample(36161,se,J,g.width,g.height)}else s.renderbufferStorage(36161,J,g.width,g.height);s.framebufferRenderbuffer(36160,36096,36161,b)}else if(g.depthBuffer&&g.stencilBuffer){const J=Ge(g);k&&Fe(g)===!1?s.renderbufferStorageMultisample(36161,J,35056,g.width,g.height):Fe(g)?h.renderbufferStorageMultisampleEXT(36161,J,35056,g.width,g.height):s.renderbufferStorage(36161,34041,g.width,g.height),s.framebufferRenderbuffer(36160,33306,36161,b)}else{const J=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let te=0;te<J.length;te++){const se=J[te],ve=r.convert(se.format,se.encoding),E=r.convert(se.type),D=_(se.internalFormat,ve,E,se.encoding),oe=Ge(g);k&&Fe(g)===!1?s.renderbufferStorageMultisample(36161,oe,D,g.width,g.height):Fe(g)?h.renderbufferStorageMultisampleEXT(36161,oe,D,g.width,g.height):s.renderbufferStorage(36161,D,g.width,g.height)}}s.bindRenderbuffer(36161,null)}function Se(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y(g.depthTexture,0);const J=n.get(g.depthTexture).__webglTexture,te=Ge(g);if(g.depthTexture.format===hn)Fe(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,te):s.framebufferTexture2D(36160,36096,3553,J,0);else if(g.depthTexture.format===Wn)Fe(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,te):s.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function xe(b){const g=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Se(g.__webglFramebuffer,b)}else if(k){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]=s.createRenderbuffer(),Ue(g.__webglDepthbuffer[J],b,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=s.createRenderbuffer(),Ue(g.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function $e(b,g,k){const J=n.get(b);g!==void 0&&le(J.__webglFramebuffer,b,b.texture,36064,3553),k!==void 0&&xe(b)}function tt(b){const g=b.texture,k=n.get(b),J=n.get(g);b.addEventListener("dispose",j),b.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=g.version,o.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,se=b.isWebGLMultipleRenderTargets===!0,ve=S(b)||a;if(te){k.__webglFramebuffer=[];for(let E=0;E<6;E++)k.__webglFramebuffer[E]=s.createFramebuffer()}else{if(k.__webglFramebuffer=s.createFramebuffer(),se)if(i.drawBuffers){const E=b.texture;for(let D=0,oe=E.length;D<oe;D++){const ue=n.get(E[D]);ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Fe(b)===!1){const E=se?g:[g];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let D=0;D<E.length;D++){const oe=E[D];k.__webglColorRenderbuffer[D]=s.createRenderbuffer(),s.bindRenderbuffer(36161,k.__webglColorRenderbuffer[D]);const ue=r.convert(oe.format,oe.encoding),ae=r.convert(oe.type),fe=_(oe.internalFormat,ue,ae,oe.encoding,b.isXRRenderTarget===!0),he=Ge(b);s.renderbufferStorageMultisample(36161,he,fe,b.width,b.height),s.framebufferRenderbuffer(36160,36064+D,36161,k.__webglColorRenderbuffer[D])}s.bindRenderbuffer(36161,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,J.__webglTexture),B(34067,g,ve);for(let E=0;E<6;E++)le(k.__webglFramebuffer[E],b,g,36064,34069+E);L(g,ve)&&N(34067),t.unbindTexture()}else if(se){const E=b.texture;for(let D=0,oe=E.length;D<oe;D++){const ue=E[D],ae=n.get(ue);t.bindTexture(3553,ae.__webglTexture),B(3553,ue,ve),le(k.__webglFramebuffer,b,ue,36064+D,3553),L(ue,ve)&&N(3553)}t.unbindTexture()}else{let E=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?E=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(E,J.__webglTexture),B(E,g,ve),le(k.__webglFramebuffer,b,g,36064,E),L(g,ve)&&N(E),t.unbindTexture()}b.depthBuffer&&xe(b)}function Ve(b){const g=S(b)||a,k=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0,te=k.length;J<te;J++){const se=k[J];if(L(se,g)){const ve=b.isWebGLCubeRenderTarget?34067:3553,E=n.get(se).__webglTexture;t.bindTexture(ve,E),N(ve),t.unbindTexture()}}}function st(b){if(a&&b.samples>0&&Fe(b)===!1){const g=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],k=b.width,J=b.height;let te=16384;const se=[],ve=b.stencilBuffer?33306:36096,E=n.get(b),D=b.isWebGLMultipleRenderTargets===!0;if(D)for(let oe=0;oe<g.length;oe++)t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,E.__webglFramebuffer),s.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,E.__webglFramebuffer);for(let oe=0;oe<g.length;oe++){se.push(36064+oe),b.depthBuffer&&se.push(ve);const ue=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(ue===!1&&(b.depthBuffer&&(te|=256),b.stencilBuffer&&(te|=1024)),D&&s.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[oe]),ue===!0&&(s.invalidateFramebuffer(36008,[ve]),s.invalidateFramebuffer(36009,[ve])),D){const ae=n.get(g[oe]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,ae,0)}s.blitFramebuffer(0,0,k,J,0,0,k,J,te,9728),m&&s.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),D)for(let oe=0;oe<g.length;oe++){t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+oe,36161,E.__webglColorRenderbuffer[oe]);const ue=n.get(g[oe]).__webglTexture;t.bindFramebuffer(36160,E.__webglFramebuffer),s.framebufferTexture2D(36009,36064+oe,3553,ue,0)}t.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function Ge(b){return Math.min(f,b.samples)}function Fe(b){const g=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Mt(b){const g=o.render.frame;x.get(b)!==g&&(x.set(b,g),b.update())}function ut(b,g){const k=b.encoding,J=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Lr||k!==mn&&(k===ze?a===!1?e.has("EXT_sRGB")===!0&&J===Lt?(b.format=Lr,b.minFilter=bt,b.generateMipmaps=!1):g=ga.sRGBToLinear(g):(J!==Lt||te!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),g}this.allocateTextureUnit=X,this.resetTextureUnits=Q,this.setTexture2D=Y,this.setTexture2DArray=ge,this.setTexture3D=z,this.setTextureCube=Z,this.rebindTextures=$e,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Fe}function Pd(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===pn)return 5121;if(r===So)return 32819;if(r===bo)return 32820;if(r===vo)return 5120;if(r===Mo)return 5122;if(r===fa)return 5123;if(r===yo)return 5124;if(r===cn)return 5125;if(r===un)return 5126;if(r===si)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===wo)return 6406;if(r===Lt)return 6408;if(r===Eo)return 6409;if(r===To)return 6410;if(r===hn)return 6402;if(r===Wn)return 34041;if(r===Lr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ao)return 6403;if(r===Co)return 36244;if(r===Lo)return 33319;if(r===Do)return 33320;if(r===Po)return 36249;if(r===Vi||r===Hi||r===Wi||r===Xi)if(o===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Vi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Vi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hi)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wi)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xi)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$r||r===Kr||r===Jr||r===Qr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===$r)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ro)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===es||r===ts)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===es)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ts)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ns||r===is||r===rs||r===ss||r===as||r===os||r===ls||r===cs||r===us||r===hs||r===ds||r===fs||r===ps||r===ms)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ns)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===is)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rs)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ss)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===as)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===os)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ls)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cs)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===us)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hs)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ds)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fs)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ps)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ms)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qi)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===qi)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Io||r===gs||r===_s||r===xs)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===qi)return a.COMPRESSED_RED_RGTC1_EXT;if(r===gs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_s)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Rd extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Li extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Id={type:"move"};class vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),M=this._getHandJoint(l,p);d!==null&&(M.matrix.fromArray(d.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.jointRadius=d.radius),M.visible=d!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&h>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Id)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Li;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Fd extends dt{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:hn,u!==hn&&u!==Wn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hn&&(n=cn),n===void 0&&u===Wn&&(n=Gn),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ct,this.minFilter=c!==void 0?c:ct,this.flipY=!1,this.generateMipmaps=!1}}class Nd extends vn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,x=null;const p=t.getContextAttributes();let d=null,M=null;const T=[],y=[],S=new Set,w=new Map,L=new wt;L.layers.enable(1),L.viewport=new et;const N=new wt;N.layers.enable(2),N.viewport=new et;const _=[L,N],A=new Rd;A.layers.enable(1),A.layers.enable(2);let R=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Z=T[z];return Z===void 0&&(Z=new vr,T[z]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(z){let Z=T[z];return Z===void 0&&(Z=new vr,T[z]=Z),Z.getGripSpace()},this.getHand=function(z){let Z=T[z];return Z===void 0&&(Z=new vr,T[z]=Z),Z.getHandSpace()};function j(z){const Z=y.indexOf(z.inputSource);if(Z===-1)return;const ne=T[Z];ne!==void 0&&ne.dispatchEvent({type:z.type,data:z.inputSource})}function O(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",I);for(let z=0;z<T.length;z++){const Z=y[z];Z!==null&&(y[z]=null,T[z].disconnect(Z))}R=null,q=null,e.setRenderTarget(d),m=null,h=null,f=null,i=null,M=null,ge.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",O),i.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:m}),M=new gn(m.framebufferWidth,m.framebufferHeight,{format:Lt,type:pn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Z=null,ne=null,re=null;p.depth&&(re=p.stencil?35056:33190,Z=p.stencil?Wn:hn,ne=p.stencil?Gn:cn);const B={colorFormat:32856,depthFormat:re,scaleFactor:r};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(B),i.updateRenderState({layers:[h]}),M=new gn(h.textureWidth,h.textureHeight,{format:Lt,type:pn,depthTexture:new Fd(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const Me=e.properties.get(M);Me.__ignoreDepthValues=h.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ge.setContext(i),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(z){for(let Z=0;Z<z.removed.length;Z++){const ne=z.removed[Z],re=y.indexOf(ne);re>=0&&(y[re]=null,T[re].disconnect(ne))}for(let Z=0;Z<z.added.length;Z++){const ne=z.added[Z];let re=y.indexOf(ne);if(re===-1){for(let Me=0;Me<T.length;Me++)if(Me>=y.length){y.push(ne),re=Me;break}else if(y[Me]===null){y[Me]=ne,re=Me;break}if(re===-1)break}const B=T[re];B&&B.connect(ne)}}const W=new U,$=new U;function Q(z,Z,ne){W.setFromMatrixPosition(Z.matrixWorld),$.setFromMatrixPosition(ne.matrixWorld);const re=W.distanceTo($),B=Z.projectionMatrix.elements,Me=ne.projectionMatrix.elements,pe=B[14]/(B[10]-1),de=B[14]/(B[10]+1),le=(B[9]+1)/B[5],Ue=(B[9]-1)/B[5],Se=(B[8]-1)/B[0],xe=(Me[8]+1)/Me[0],$e=pe*Se,tt=pe*xe,Ve=re/(-Se+xe),st=Ve*-Se;Z.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(st),z.translateZ(Ve),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Ge=pe+Ve,Fe=de+Ve,Mt=$e-st,ut=tt+(re-st),b=le*de/Fe*Ge,g=Ue*de/Fe*Ge;z.projectionMatrix.makePerspective(Mt,ut,b,g,Ge,Fe)}function X(z,Z){Z===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Z.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;A.near=N.near=L.near=z.near,A.far=N.far=L.far=z.far,(R!==A.near||q!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,q=A.far);const Z=z.parent,ne=A.cameras;X(A,Z);for(let B=0;B<ne.length;B++)X(ne[B],Z);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),z.matrix.copy(A.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const re=z.children;for(let B=0,Me=re.length;B<Me;B++)re[B].updateMatrixWorld(!0);ne.length===2?Q(A,L,N):A.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(z){c=z,h!==null&&(h.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.getPlanes=function(){return S};let ee=null;function Y(z,Z){if(u=Z.getViewerPose(l||o),x=Z,u!==null){const ne=u.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let re=!1;ne.length!==A.cameras.length&&(A.cameras.length=0,re=!0);for(let B=0;B<ne.length;B++){const Me=ne[B];let pe=null;if(m!==null)pe=m.getViewport(Me);else{const le=f.getViewSubImage(h,Me);pe=le.viewport,B===0&&(e.setRenderTargetTextures(M,le.colorTexture,h.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(M))}let de=_[B];de===void 0&&(de=new wt,de.layers.enable(B),de.viewport=new et,_[B]=de),de.matrix.fromArray(Me.transform.matrix),de.projectionMatrix.fromArray(Me.projectionMatrix),de.viewport.set(pe.x,pe.y,pe.width,pe.height),B===0&&A.matrix.copy(de.matrix),re===!0&&A.cameras.push(de)}}for(let ne=0;ne<T.length;ne++){const re=y[ne],B=T[ne];re!==null&&B!==void 0&&B.update(re,Z,l||o)}if(ee&&ee(z,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let ne=null;for(const re of S)Z.detectedPlanes.has(re)||(ne===null&&(ne=[]),ne.push(re));if(ne!==null)for(const re of ne)S.delete(re),w.delete(re),n.dispatchEvent({type:"planeremoved",data:re});for(const re of Z.detectedPlanes)if(!S.has(re))S.add(re),w.set(re,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:re});else{const B=w.get(re);re.lastChangedTime>B&&(w.set(re,re.lastChangedTime),n.dispatchEvent({type:"planechanged",data:re}))}}x=null}const ge=new Ea;ge.setAnimationLoop(Y),this.setAnimationLoop=function(z){ee=z},this.dispose=function(){}}}function Ud(s,e){function t(p,d){d.color.getRGB(p.fogColor.value,Sa(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,M,T,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,y)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),x(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,M,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===vt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===vt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=e.get(d).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const S=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let T;d.map?T=d.map:d.specularMap?T=d.specularMap:d.displacementMap?T=d.displacementMap:d.normalMap?T=d.normalMap:d.bumpMap?T=d.bumpMap:d.roughnessMap?T=d.roughnessMap:d.metalnessMap?T=d.metalnessMap:d.alphaMap?T=d.alphaMap:d.emissiveMap?T=d.emissiveMap:d.clearcoatMap?T=d.clearcoatMap:d.clearcoatNormalMap?T=d.clearcoatNormalMap:d.clearcoatRoughnessMap?T=d.clearcoatRoughnessMap:d.iridescenceMap?T=d.iridescenceMap:d.iridescenceThicknessMap?T=d.iridescenceThicknessMap:d.specularIntensityMap?T=d.specularIntensityMap:d.specularColorMap?T=d.specularColorMap:d.transmissionMap?T=d.transmissionMap:d.thicknessMap?T=d.thicknessMap:d.sheenColorMap?T=d.sheenColorMap:d.sheenRoughnessMap&&(T=d.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix));let y;d.aoMap?y=d.aoMap:d.lightMap&&(y=d.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,M,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=T*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M;d.map?M=d.map:d.alphaMap&&(M=d.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===vt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Od(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function c(T,y){const S=y.program;n.uniformBlockBinding(T,S)}function l(T,y){let S=i[T.id];S===void 0&&(x(T),S=u(T),i[T.id]=S,T.addEventListener("dispose",d));const w=y.program;n.updateUBOMapping(T,w);const L=e.render.frame;r[T.id]!==L&&(h(T),r[T.id]=L)}function u(T){const y=f();T.__bindingPointIndex=y;const S=s.createBuffer(),w=T.__size,L=T.usage;return s.bindBuffer(35345,S),s.bufferData(35345,w,L),s.bindBuffer(35345,null),s.bindBufferBase(35345,y,S),S}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const y=i[T.id],S=T.uniforms,w=T.__cache;s.bindBuffer(35345,y);for(let L=0,N=S.length;L<N;L++){const _=S[L];if(m(_,L,w)===!0){const A=_.__offset,R=Array.isArray(_.value)?_.value:[_.value];let q=0;for(let j=0;j<R.length;j++){const O=R[j],I=p(O);typeof O=="number"?(_.__data[0]=O,s.bufferSubData(35345,A+q,_.__data)):O.isMatrix3?(_.__data[0]=O.elements[0],_.__data[1]=O.elements[1],_.__data[2]=O.elements[2],_.__data[3]=O.elements[0],_.__data[4]=O.elements[3],_.__data[5]=O.elements[4],_.__data[6]=O.elements[5],_.__data[7]=O.elements[0],_.__data[8]=O.elements[6],_.__data[9]=O.elements[7],_.__data[10]=O.elements[8],_.__data[11]=O.elements[0]):(O.toArray(_.__data,q),q+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,A,_.__data)}}s.bindBuffer(35345,null)}function m(T,y,S){const w=T.value;if(S[y]===void 0){if(typeof w=="number")S[y]=w;else{const L=Array.isArray(w)?w:[w],N=[];for(let _=0;_<L.length;_++)N.push(L[_].clone());S[y]=N}return!0}else if(typeof w=="number"){if(S[y]!==w)return S[y]=w,!0}else{const L=Array.isArray(S[y])?S[y]:[S[y]],N=Array.isArray(w)?w:[w];for(let _=0;_<L.length;_++){const A=L[_];if(A.equals(N[_])===!1)return A.copy(N[_]),!0}}return!1}function x(T){const y=T.uniforms;let S=0;const w=16;let L=0;for(let N=0,_=y.length;N<_;N++){const A=y[N],R={boundary:0,storage:0},q=Array.isArray(A.value)?A.value:[A.value];for(let j=0,O=q.length;j<O;j++){const I=q[j],W=p(I);R.boundary+=W.boundary,R.storage+=W.storage}if(A.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=S,N>0){L=S%w;const j=w-L;L!==0&&j-R.boundary<0&&(S+=w-L,A.__offset=S)}S+=R.storage}return L=S%w,L>0&&(S+=w-L),T.__size=S,T.__cache={},this}function p(T){const y={boundary:0,storage:0};return typeof T=="number"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function d(T){const y=T.target;y.removeEventListener("dispose",d);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function M(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:M}}function zd(){const s=oi("canvas");return s.style.display="block",s}function Pa(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:zd(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let f=null,h=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=mn,this.physicallyCorrectLights=!1,this.toneMapping=Wt,this.toneMappingExposure=1;const p=this;let d=!1,M=0,T=0,y=null,S=-1,w=null;const L=new et,N=new et;let _=null,A=e.width,R=e.height,q=1,j=null,O=null;const I=new et(0,0,A,R),W=new et(0,0,A,R);let $=!1;const Q=new Ur;let X=!1,ee=!1,Y=null;const ge=new je,z=new Ee,Z=new U,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return y===null?q:1}let B=t;function Me(v,F){for(let V=0;V<v.length;V++){const P=v[V],H=e.getContext(P,F);if(H!==null)return H}return null}try{const v={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ir}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Ae,!1),B===null){const F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),B=Me(F,v),B===null)throw Me(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let pe,de,le,Ue,Se,xe,$e,tt,Ve,st,Ge,Fe,Mt,ut,b,g,k,J,te,se,ve,E,D,oe;function ue(){pe=new Zu(B),de=new Hu(B,pe,s),pe.init(de),E=new Pd(B,pe,de),le=new Ld(B,pe,de),Ue=new Ju,Se=new md,xe=new Dd(B,pe,le,Se,de,E,Ue),$e=new Xu(p),tt=new Yu(p),Ve=new ol(B,de),D=new Gu(B,pe,Ve,de),st=new $u(B,Ve,Ue,D),Ge=new nh(B,st,Ve,Ue),te=new th(B,de,xe),g=new Wu(Se),Fe=new pd(p,$e,tt,pe,de,D,g),Mt=new Ud(p,Se),ut=new _d,b=new bd(pe,de),J=new ku(p,$e,tt,le,Ge,u,o),k=new Cd(p,Ge,de),oe=new Od(B,Ue,de,le),se=new Vu(B,pe,Ue,de),ve=new Ku(B,pe,Ue,de),Ue.programs=Fe.programs,p.capabilities=de,p.extensions=pe,p.properties=Se,p.renderLists=ut,p.shadowMap=k,p.state=le,p.info=Ue}ue();const ae=new Nd(p,B);this.xr=ae,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const v=pe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=pe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(v){v!==void 0&&(q=v,this.setSize(A,R,!1))},this.getSize=function(v){return v.set(A,R)},this.setSize=function(v,F,V){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=v,R=F,e.width=Math.floor(v*q),e.height=Math.floor(F*q),V!==!1&&(e.style.width=v+"px",e.style.height=F+"px"),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(A*q,R*q).floor()},this.setDrawingBufferSize=function(v,F,V){A=v,R=F,q=V,e.width=Math.floor(v*V),e.height=Math.floor(F*V),this.setViewport(0,0,v,F)},this.getCurrentViewport=function(v){return v.copy(L)},this.getViewport=function(v){return v.copy(I)},this.setViewport=function(v,F,V,P){v.isVector4?I.set(v.x,v.y,v.z,v.w):I.set(v,F,V,P),le.viewport(L.copy(I).multiplyScalar(q).floor())},this.getScissor=function(v){return v.copy(W)},this.setScissor=function(v,F,V,P){v.isVector4?W.set(v.x,v.y,v.z,v.w):W.set(v,F,V,P),le.scissor(N.copy(W).multiplyScalar(q).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(v){le.setScissorTest($=v)},this.setOpaqueSort=function(v){j=v},this.setTransparentSort=function(v){O=v},this.getClearColor=function(v){return v.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(v=!0,F=!0,V=!0){let P=0;v&&(P|=16384),F&&(P|=256),V&&(P|=1024),B.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Ae,!1),ut.dispose(),b.dispose(),Se.dispose(),$e.dispose(),tt.dispose(),Ge.dispose(),D.dispose(),oe.dispose(),Fe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ce),ae.removeEventListener("sessionend",me),Y&&(Y.dispose(),Y=null),Ne.stop()};function fe(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const v=Ue.autoReset,F=k.enabled,V=k.autoUpdate,P=k.needsUpdate,H=k.type;ue(),Ue.autoReset=v,k.enabled=F,k.autoUpdate=V,k.needsUpdate=P,k.type=H}function Ae(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ce(v){const F=v.target;F.removeEventListener("dispose",Ce),Oe(F)}function Oe(v){C(v),Se.remove(v)}function C(v){const F=Se.get(v).programs;F!==void 0&&(F.forEach(function(V){Fe.releaseProgram(V)}),v.isShaderMaterial&&Fe.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,V,P,H,_e){F===null&&(F=ne);const ye=H.isMesh&&H.matrixWorld.determinant()<0,we=Na(v,F,V,P,H);le.setMaterial(P,ye);let Te=V.index,Re=1;P.wireframe===!0&&(Te=st.getWireframeAttribute(V),Re=2);const Le=V.drawRange,De=V.attributes.position;let He=Le.start*Re,ft=(Le.start+Le.count)*Re;_e!==null&&(He=Math.max(He,_e.start*Re),ft=Math.min(ft,(_e.start+_e.count)*Re)),Te!==null?(He=Math.max(He,0),ft=Math.min(ft,Te.count)):De!=null&&(He=Math.max(He,0),ft=Math.min(ft,De.count));const Ft=ft-He;if(Ft<0||Ft===1/0)return;D.setup(H,P,we,V,Te);let Qt,We=se;if(Te!==null&&(Qt=Ve.get(Te),We=ve,We.setIndex(Qt)),H.isMesh)P.wireframe===!0?(le.setLineWidth(P.wireframeLinewidth*re()),We.setMode(1)):We.setMode(4);else if(H.isLine){let Pe=P.linewidth;Pe===void 0&&(Pe=1),le.setLineWidth(Pe*re()),H.isLineSegments?We.setMode(1):H.isLineLoop?We.setMode(2):We.setMode(3)}else H.isPoints?We.setMode(0):H.isSprite&&We.setMode(4);if(H.isInstancedMesh)We.renderInstances(He,Ft,H.count);else if(V.isInstancedBufferGeometry){const Pe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ui=Math.min(V.instanceCount,Pe);We.renderInstances(He,Ft,Ui)}else We.render(He,Ft)},this.compile=function(v,F){function V(P,H,_e){P.transparent===!0&&P.side===Zt&&P.forceSinglePass===!1?(P.side=vt,P.needsUpdate=!0,yt(P,H,_e),P.side=Kt,P.needsUpdate=!0,yt(P,H,_e),P.side=Zt):yt(P,H,_e)}h=b.get(v),h.init(),x.push(h),v.traverseVisible(function(P){P.isLight&&P.layers.test(F.layers)&&(h.pushLight(P),P.castShadow&&h.pushShadow(P))}),h.setupLights(p.physicallyCorrectLights),v.traverse(function(P){const H=P.material;if(H)if(Array.isArray(H))for(let _e=0;_e<H.length;_e++){const ye=H[_e];V(ye,v,P)}else V(H,v,P)}),x.pop(),h=null};let G=null;function K(v){G&&G(v)}function ce(){Ne.stop()}function me(){Ne.start()}const Ne=new Ea;Ne.setAnimationLoop(K),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(v){G=v,ae.setAnimationLoop(v),v===null?Ne.stop():Ne.start()},ae.addEventListener("sessionstart",ce),ae.addEventListener("sessionend",me),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(p,v,F,y),h=b.get(v,x.length),h.init(),x.push(h),ge.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(ge),ee=this.localClippingEnabled,X=g.init(this.clippingPlanes,ee),f=ut.get(v,m.length),f.init(),m.push(f),Ke(v,F,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(j,O),X===!0&&g.beginShadows();const V=h.state.shadowsArray;if(k.render(V,v,F),X===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(f,v),h.setupLights(p.physicallyCorrectLights),F.isArrayCamera){const P=F.cameras;for(let H=0,_e=P.length;H<_e;H++){const ye=P[H];nt(f,v,ye,ye.viewport)}}else nt(f,v,F);y!==null&&(xe.updateMultisampleRenderTarget(y),xe.updateRenderTargetMipmap(y)),v.isScene===!0&&v.onAfterRender(p,v,F),D.resetDefaultState(),S=-1,w=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Ke(v,F,V,P){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Q.intersectsSprite(v)){P&&Z.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ge);const ye=Ge.update(v),we=v.material;we.visible&&f.push(v,ye,we,V,Z.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(v.isSkinnedMesh&&v.skeleton.frame!==Ue.render.frame&&(v.skeleton.update(),v.skeleton.frame=Ue.render.frame),!v.frustumCulled||Q.intersectsObject(v))){P&&Z.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ge);const ye=Ge.update(v),we=v.material;if(Array.isArray(we)){const Te=ye.groups;for(let Re=0,Le=Te.length;Re<Le;Re++){const De=Te[Re],He=we[De.materialIndex];He&&He.visible&&f.push(v,ye,He,V,Z.z,De)}}else we.visible&&f.push(v,ye,we,V,Z.z,null)}}const _e=v.children;for(let ye=0,we=_e.length;ye<we;ye++)Ke(_e[ye],F,V,P)}function nt(v,F,V,P){const H=v.opaque,_e=v.transmissive,ye=v.transparent;h.setupLightsView(V),X===!0&&g.setGlobalState(p.clippingPlanes,V),_e.length>0&&Jt(H,F,V),P&&le.viewport(L.copy(P)),H.length>0&&Be(H,F,V),_e.length>0&&Be(_e,F,V),ye.length>0&&Be(ye,F,V),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Jt(v,F,V){const P=de.isWebGL2;Y===null&&(Y=new gn(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?si:pn,minFilter:ri,samples:P&&r===!0?4:0})),p.getDrawingBufferSize(z),P?Y.setSize(z.x,z.y):Y.setSize(Dr(z.x),Dr(z.y));const H=p.getRenderTarget();p.setRenderTarget(Y),p.clear();const _e=p.toneMapping;p.toneMapping=Wt,Be(v,F,V),p.toneMapping=_e,xe.updateMultisampleRenderTarget(Y),xe.updateRenderTargetMipmap(Y),p.setRenderTarget(H)}function Be(v,F,V){const P=F.isScene===!0?F.overrideMaterial:null;for(let H=0,_e=v.length;H<_e;H++){const ye=v[H],we=ye.object,Te=ye.geometry,Re=P===null?ye.material:P,Le=ye.group;we.layers.test(V.layers)&&It(we,F,V,Te,Re,Le)}}function It(v,F,V,P,H,_e){v.onBeforeRender(p,F,V,P,H,_e),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(p,F,V,P,v,_e),H.transparent===!0&&H.side===Zt&&H.forceSinglePass===!1?(H.side=vt,H.needsUpdate=!0,p.renderBufferDirect(V,F,P,H,v,_e),H.side=Kt,H.needsUpdate=!0,p.renderBufferDirect(V,F,P,H,v,_e),H.side=Zt):p.renderBufferDirect(V,F,P,H,v,_e),v.onAfterRender(p,F,V,P,H,_e)}function yt(v,F,V){F.isScene!==!0&&(F=ne);const P=Se.get(v),H=h.state.lights,_e=h.state.shadowsArray,ye=H.state.version,we=Fe.getParameters(v,H.state,_e,F,V),Te=Fe.getProgramCacheKey(we);let Re=P.programs;P.environment=v.isMeshStandardMaterial?F.environment:null,P.fog=F.fog,P.envMap=(v.isMeshStandardMaterial?tt:$e).get(v.envMap||P.environment),Re===void 0&&(v.addEventListener("dispose",Ce),Re=new Map,P.programs=Re);let Le=Re.get(Te);if(Le!==void 0){if(P.currentProgram===Le&&P.lightsStateVersion===ye)return Br(v,we),Le}else we.uniforms=Fe.getUniforms(v),v.onBuild(V,we,p),v.onBeforeCompile(we,p),Le=Fe.acquireProgram(we,Te),Re.set(Te,Le),P.uniforms=we.uniforms;const De=P.uniforms;(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(De.clippingPlanes=g.uniform),Br(v,we),P.needsLights=Oa(v),P.lightsStateVersion=ye,P.needsLights&&(De.ambientLightColor.value=H.state.ambient,De.lightProbe.value=H.state.probe,De.directionalLights.value=H.state.directional,De.directionalLightShadows.value=H.state.directionalShadow,De.spotLights.value=H.state.spot,De.spotLightShadows.value=H.state.spotShadow,De.rectAreaLights.value=H.state.rectArea,De.ltc_1.value=H.state.rectAreaLTC1,De.ltc_2.value=H.state.rectAreaLTC2,De.pointLights.value=H.state.point,De.pointLightShadows.value=H.state.pointShadow,De.hemisphereLights.value=H.state.hemi,De.directionalShadowMap.value=H.state.directionalShadowMap,De.directionalShadowMatrix.value=H.state.directionalShadowMatrix,De.spotShadowMap.value=H.state.spotShadowMap,De.spotLightMatrix.value=H.state.spotLightMatrix,De.spotLightMap.value=H.state.spotLightMap,De.pointShadowMap.value=H.state.pointShadowMap,De.pointShadowMatrix.value=H.state.pointShadowMatrix);const He=Le.getUniforms(),ft=Pi.seqWithValue(He.seq,De);return P.currentProgram=Le,P.uniformsList=ft,Le}function Br(v,F){const V=Se.get(v);V.outputEncoding=F.outputEncoding,V.instancing=F.instancing,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Na(v,F,V,P,H){F.isScene!==!0&&(F=ne),xe.resetTextureUnits();const _e=F.fog,ye=P.isMeshStandardMaterial?F.environment:null,we=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:mn,Te=(P.isMeshStandardMaterial?tt:$e).get(P.envMap||ye),Re=P.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Le=!!P.normalMap&&!!V.attributes.tangent,De=!!V.morphAttributes.position,He=!!V.morphAttributes.normal,ft=!!V.morphAttributes.color,Ft=P.toneMapped?p.toneMapping:Wt,Qt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,We=Qt!==void 0?Qt.length:0,Pe=Se.get(P),Ui=h.state.lights;if(X===!0&&(ee===!0||v!==w)){const pt=v===w&&P.id===S;g.setState(P,v,pt)}let Je=!1;P.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ui.state.version||Pe.outputEncoding!==we||H.isInstancedMesh&&Pe.instancing===!1||!H.isInstancedMesh&&Pe.instancing===!0||H.isSkinnedMesh&&Pe.skinning===!1||!H.isSkinnedMesh&&Pe.skinning===!0||Pe.envMap!==Te||P.fog===!0&&Pe.fog!==_e||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==g.numPlanes||Pe.numIntersection!==g.numIntersection)||Pe.vertexAlphas!==Re||Pe.vertexTangents!==Le||Pe.morphTargets!==De||Pe.morphNormals!==He||Pe.morphColors!==ft||Pe.toneMapping!==Ft||de.isWebGL2===!0&&Pe.morphTargetsCount!==We)&&(Je=!0):(Je=!0,Pe.__version=P.version);let en=Pe.currentProgram;Je===!0&&(en=yt(P,F,H));let kr=!1,Yn=!1,Oi=!1;const at=en.getUniforms(),tn=Pe.uniforms;if(le.useProgram(en.program)&&(kr=!0,Yn=!0,Oi=!0),P.id!==S&&(S=P.id,Yn=!0),kr||w!==v){if(at.setValue(B,"projectionMatrix",v.projectionMatrix),de.logarithmicDepthBuffer&&at.setValue(B,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),w!==v&&(w=v,Yn=!0,Oi=!0),P.isShaderMaterial||P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshStandardMaterial||P.envMap){const pt=at.map.cameraPosition;pt!==void 0&&pt.setValue(B,Z.setFromMatrixPosition(v.matrixWorld))}(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&at.setValue(B,"isOrthographic",v.isOrthographicCamera===!0),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial||P.isShadowMaterial||H.isSkinnedMesh)&&at.setValue(B,"viewMatrix",v.matrixWorldInverse)}if(H.isSkinnedMesh){at.setOptional(B,H,"bindMatrix"),at.setOptional(B,H,"bindMatrixInverse");const pt=H.skeleton;pt&&(de.floatVertexTextures?(pt.boneTexture===null&&pt.computeBoneTexture(),at.setValue(B,"boneTexture",pt.boneTexture,xe),at.setValue(B,"boneTextureSize",pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zi=V.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0&&de.isWebGL2===!0)&&te.update(H,V,P,en),(Yn||Pe.receiveShadow!==H.receiveShadow)&&(Pe.receiveShadow=H.receiveShadow,at.setValue(B,"receiveShadow",H.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(tn.envMap.value=Te,tn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Yn&&(at.setValue(B,"toneMappingExposure",p.toneMappingExposure),Pe.needsLights&&Ua(tn,Oi),_e&&P.fog===!0&&Mt.refreshFogUniforms(tn,_e),Mt.refreshMaterialUniforms(tn,P,q,R,Y),Pi.upload(B,Pe.uniformsList,tn,xe)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Pi.upload(B,Pe.uniformsList,tn,xe),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&at.setValue(B,"center",H.center),at.setValue(B,"modelViewMatrix",H.modelViewMatrix),at.setValue(B,"normalMatrix",H.normalMatrix),at.setValue(B,"modelMatrix",H.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){const pt=P.uniformsGroups;for(let Bi=0,za=pt.length;Bi<za;Bi++)if(de.isWebGL2){const Gr=pt[Bi];oe.update(Gr,en),oe.bind(Gr,en)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return en}function Ua(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function Oa(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(v,F,V){Se.get(v.texture).__webglTexture=F,Se.get(v.depthTexture).__webglTexture=V;const P=Se.get(v);P.__hasExternalTextures=!0,P.__hasExternalTextures&&(P.__autoAllocateDepthBuffer=V===void 0,P.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,F){const V=Se.get(v);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(v,F=0,V=0){y=v,M=F,T=V;let P=!0,H=null,_e=!1,ye=!1;if(v){const Te=Se.get(v);Te.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),P=!1):Te.__webglFramebuffer===void 0?xe.setupRenderTarget(v):Te.__hasExternalTextures&&xe.rebindTextures(v,Se.get(v.texture).__webglTexture,Se.get(v.depthTexture).__webglTexture);const Re=v.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ye=!0);const Le=Se.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(H=Le[F],_e=!0):de.isWebGL2&&v.samples>0&&xe.useMultisampledRTT(v)===!1?H=Se.get(v).__webglMultisampledFramebuffer:H=Le,L.copy(v.viewport),N.copy(v.scissor),_=v.scissorTest}else L.copy(I).multiplyScalar(q).floor(),N.copy(W).multiplyScalar(q).floor(),_=$;if(le.bindFramebuffer(36160,H)&&de.drawBuffers&&P&&le.drawBuffers(v,H),le.viewport(L),le.scissor(N),le.setScissorTest(_),_e){const Te=Se.get(v.texture);B.framebufferTexture2D(36160,36064,34069+F,Te.__webglTexture,V)}else if(ye){const Te=Se.get(v.texture),Re=F||0;B.framebufferTextureLayer(36160,36064,Te.__webglTexture,V||0,Re)}S=-1},this.readRenderTargetPixels=function(v,F,V,P,H,_e,ye){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Se.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){le.bindFramebuffer(36160,we);try{const Te=v.texture,Re=Te.format,Le=Te.type;if(Re!==Lt&&E.convert(Re)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===si&&(pe.has("EXT_color_buffer_half_float")||de.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Le!==pn&&E.convert(Le)!==B.getParameter(35738)&&!(Le===un&&(de.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-P&&V>=0&&V<=v.height-H&&B.readPixels(F,V,P,H,E.convert(Re),E.convert(Le),_e)}finally{const Te=y!==null?Se.get(y).__webglFramebuffer:null;le.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(v,F,V=0){const P=Math.pow(2,-V),H=Math.floor(F.image.width*P),_e=Math.floor(F.image.height*P);xe.setTexture2D(F,0),B.copyTexSubImage2D(3553,V,0,0,v.x,v.y,H,_e),le.unbindTexture()},this.copyTextureToTexture=function(v,F,V,P=0){const H=F.image.width,_e=F.image.height,ye=E.convert(V.format),we=E.convert(V.type);xe.setTexture2D(V,0),B.pixelStorei(37440,V.flipY),B.pixelStorei(37441,V.premultiplyAlpha),B.pixelStorei(3317,V.unpackAlignment),F.isDataTexture?B.texSubImage2D(3553,P,v.x,v.y,H,_e,ye,we,F.image.data):F.isCompressedTexture?B.compressedTexSubImage2D(3553,P,v.x,v.y,F.mipmaps[0].width,F.mipmaps[0].height,ye,F.mipmaps[0].data):B.texSubImage2D(3553,P,v.x,v.y,ye,we,F.image),P===0&&V.generateMipmaps&&B.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(v,F,V,P,H=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=v.max.x-v.min.x+1,ye=v.max.y-v.min.y+1,we=v.max.z-v.min.z+1,Te=E.convert(P.format),Re=E.convert(P.type);let Le;if(P.isData3DTexture)xe.setTexture3D(P,0),Le=32879;else if(P.isDataArrayTexture)xe.setTexture2DArray(P,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,P.flipY),B.pixelStorei(37441,P.premultiplyAlpha),B.pixelStorei(3317,P.unpackAlignment);const De=B.getParameter(3314),He=B.getParameter(32878),ft=B.getParameter(3316),Ft=B.getParameter(3315),Qt=B.getParameter(32877),We=V.isCompressedTexture?V.mipmaps[0]:V.image;B.pixelStorei(3314,We.width),B.pixelStorei(32878,We.height),B.pixelStorei(3316,v.min.x),B.pixelStorei(3315,v.min.y),B.pixelStorei(32877,v.min.z),V.isDataTexture||V.isData3DTexture?B.texSubImage3D(Le,H,F.x,F.y,F.z,_e,ye,we,Te,Re,We.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Le,H,F.x,F.y,F.z,_e,ye,we,Te,We.data)):B.texSubImage3D(Le,H,F.x,F.y,F.z,_e,ye,we,Te,Re,We),B.pixelStorei(3314,De),B.pixelStorei(32878,He),B.pixelStorei(3316,ft),B.pixelStorei(3315,Ft),B.pixelStorei(32877,Qt),H===0&&P.generateMipmaps&&B.generateMipmap(Le),le.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?xe.setTextureCube(v,0):v.isData3DTexture?xe.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?xe.setTexture2DArray(v,0):xe.setTexture2D(v,0),le.unbindTexture()},this.resetState=function(){M=0,T=0,y=null,le.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Bd extends Pa{}Bd.prototype.isWebGL1Renderer=!0;class kd extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const ta={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Gd{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const m=l[f],x=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const Vd=new Gd;class Ra{constructor(e){this.manager=e!==void 0?e:Vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Hd extends Ra{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ta.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=oi("img");function c(){u(),ta.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(f){u(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Wd extends Ra{constructor(e){super(e)}load(e,t,n,i){const r=new dt,o=new Hd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Xd extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Mr=new je,na=new U,ia=new U;class qd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;na.setFromMatrixPosition(e.matrixWorld),t.position.copy(na),ia.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ia),t.updateMatrixWorld(),Mr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jd extends qd{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yd extends Xd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new jd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ra{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ir}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ir);const sa={type:"change"},yr={type:"start"},aa={type:"end"};class Zd extends vn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yn.ROTATE,MIDDLE:yn.DOLLY,RIGHT:yn.PAN},this.touches={ONE:Sn.ROTATE,TWO:Sn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",ut),this._domElementKeyEvents=E},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(sa),n.update(),r=i.NONE},this.update=function(){const E=new U,D=new _n().setFromUnitVectors(e.up,new U(0,1,0)),oe=D.clone().invert(),ue=new U,ae=new _n,fe=2*Math.PI;return function(){const Ae=n.object.position;E.copy(Ae).sub(n.target),E.applyQuaternion(D),a.setFromVector3(E),n.autoRotate&&r===i.NONE&&A(N()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ce=n.minAzimuthAngle,Oe=n.maxAzimuthAngle;return isFinite(Ce)&&isFinite(Oe)&&(Ce<-Math.PI?Ce+=fe:Ce>Math.PI&&(Ce-=fe),Oe<-Math.PI?Oe+=fe:Oe>Math.PI&&(Oe-=fe),Ce<=Oe?a.theta=Math.max(Ce,Math.min(Oe,a.theta)):a.theta=a.theta>(Ce+Oe)/2?Math.max(Ce,a.theta):Math.min(Oe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),E.setFromSpherical(a),E.applyQuaternion(oe),Ae.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,f||ue.distanceToSquared(n.object.position)>o||8*(1-ae.dot(n.object.quaternion))>o?(n.dispatchEvent(sa),ue.copy(n.object.position),ae.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",k),n.domElement.removeEventListener("pointerdown",$e),n.domElement.removeEventListener("pointercancel",st),n.domElement.removeEventListener("wheel",Mt),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",Ve),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ut)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new ra,c=new ra;let l=1;const u=new U;let f=!1;const h=new Ee,m=new Ee,x=new Ee,p=new Ee,d=new Ee,M=new Ee,T=new Ee,y=new Ee,S=new Ee,w=[],L={};function N(){return 2*Math.PI/60/60*n.autoRotateSpeed}function _(){return Math.pow(.95,n.zoomSpeed)}function A(E){c.theta-=E}function R(E){c.phi-=E}const q=function(){const E=new U;return function(oe,ue){E.setFromMatrixColumn(ue,0),E.multiplyScalar(-oe),u.add(E)}}(),j=function(){const E=new U;return function(oe,ue){n.screenSpacePanning===!0?E.setFromMatrixColumn(ue,1):(E.setFromMatrixColumn(ue,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(oe),u.add(E)}}(),O=function(){const E=new U;return function(oe,ue){const ae=n.domElement;if(n.object.isPerspectiveCamera){const fe=n.object.position;E.copy(fe).sub(n.target);let he=E.length();he*=Math.tan(n.object.fov/2*Math.PI/180),q(2*oe*he/ae.clientHeight,n.object.matrix),j(2*ue*he/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(q(oe*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),j(ue*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(E){n.object.isPerspectiveCamera?l/=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*E)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(E){n.object.isPerspectiveCamera?l*=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/E)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(E){h.set(E.clientX,E.clientY)}function Q(E){T.set(E.clientX,E.clientY)}function X(E){p.set(E.clientX,E.clientY)}function ee(E){m.set(E.clientX,E.clientY),x.subVectors(m,h).multiplyScalar(n.rotateSpeed);const D=n.domElement;A(2*Math.PI*x.x/D.clientHeight),R(2*Math.PI*x.y/D.clientHeight),h.copy(m),n.update()}function Y(E){y.set(E.clientX,E.clientY),S.subVectors(y,T),S.y>0?I(_()):S.y<0&&W(_()),T.copy(y),n.update()}function ge(E){d.set(E.clientX,E.clientY),M.subVectors(d,p).multiplyScalar(n.panSpeed),O(M.x,M.y),p.copy(d),n.update()}function z(E){E.deltaY<0?W(_()):E.deltaY>0&&I(_()),n.update()}function Z(E){let D=!1;switch(E.code){case n.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),D=!0;break;case n.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),D=!0;break;case n.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),D=!0;break;case n.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),D=!0;break}D&&(E.preventDefault(),n.update())}function ne(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const E=.5*(w[0].pageX+w[1].pageX),D=.5*(w[0].pageY+w[1].pageY);h.set(E,D)}}function re(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const E=.5*(w[0].pageX+w[1].pageX),D=.5*(w[0].pageY+w[1].pageY);p.set(E,D)}}function B(){const E=w[0].pageX-w[1].pageX,D=w[0].pageY-w[1].pageY,oe=Math.sqrt(E*E+D*D);T.set(0,oe)}function Me(){n.enableZoom&&B(),n.enablePan&&re()}function pe(){n.enableZoom&&B(),n.enableRotate&&ne()}function de(E){if(w.length==1)m.set(E.pageX,E.pageY);else{const oe=ve(E),ue=.5*(E.pageX+oe.x),ae=.5*(E.pageY+oe.y);m.set(ue,ae)}x.subVectors(m,h).multiplyScalar(n.rotateSpeed);const D=n.domElement;A(2*Math.PI*x.x/D.clientHeight),R(2*Math.PI*x.y/D.clientHeight),h.copy(m)}function le(E){if(w.length===1)d.set(E.pageX,E.pageY);else{const D=ve(E),oe=.5*(E.pageX+D.x),ue=.5*(E.pageY+D.y);d.set(oe,ue)}M.subVectors(d,p).multiplyScalar(n.panSpeed),O(M.x,M.y),p.copy(d)}function Ue(E){const D=ve(E),oe=E.pageX-D.x,ue=E.pageY-D.y,ae=Math.sqrt(oe*oe+ue*ue);y.set(0,ae),S.set(0,Math.pow(y.y/T.y,n.zoomSpeed)),I(S.y),T.copy(y)}function Se(E){n.enableZoom&&Ue(E),n.enablePan&&le(E)}function xe(E){n.enableZoom&&Ue(E),n.enableRotate&&de(E)}function $e(E){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",tt),n.domElement.addEventListener("pointerup",Ve)),J(E),E.pointerType==="touch"?b(E):Ge(E))}function tt(E){n.enabled!==!1&&(E.pointerType==="touch"?g(E):Fe(E))}function Ve(E){te(E),w.length===0&&(n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",Ve)),n.dispatchEvent(aa),r=i.NONE}function st(E){te(E)}function Ge(E){let D;switch(E.button){case 0:D=n.mouseButtons.LEFT;break;case 1:D=n.mouseButtons.MIDDLE;break;case 2:D=n.mouseButtons.RIGHT;break;default:D=-1}switch(D){case yn.DOLLY:if(n.enableZoom===!1)return;Q(E),r=i.DOLLY;break;case yn.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;X(E),r=i.PAN}else{if(n.enableRotate===!1)return;$(E),r=i.ROTATE}break;case yn.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;$(E),r=i.ROTATE}else{if(n.enablePan===!1)return;X(E),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(yr)}function Fe(E){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;ee(E);break;case i.DOLLY:if(n.enableZoom===!1)return;Y(E);break;case i.PAN:if(n.enablePan===!1)return;ge(E);break}}function Mt(E){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(E.preventDefault(),n.dispatchEvent(yr),z(E),n.dispatchEvent(aa))}function ut(E){n.enabled===!1||n.enablePan===!1||Z(E)}function b(E){switch(se(E),w.length){case 1:switch(n.touches.ONE){case Sn.ROTATE:if(n.enableRotate===!1)return;ne(),r=i.TOUCH_ROTATE;break;case Sn.PAN:if(n.enablePan===!1)return;re(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Sn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(),r=i.TOUCH_DOLLY_PAN;break;case Sn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(yr)}function g(E){switch(se(E),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;de(E),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(E),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(E),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(E),n.update();break;default:r=i.NONE}}function k(E){n.enabled!==!1&&E.preventDefault()}function J(E){w.push(E)}function te(E){delete L[E.pointerId];for(let D=0;D<w.length;D++)if(w[D].pointerId==E.pointerId){w.splice(D,1);return}}function se(E){let D=L[E.pointerId];D===void 0&&(D=new Ee,L[E.pointerId]=D),D.set(E.pageX,E.pageY)}function ve(E){const D=E.pointerId===w[0].pointerId?w[1]:w[0];return L[D.pointerId]}n.domElement.addEventListener("contextmenu",k),n.domElement.addEventListener("pointerdown",$e),n.domElement.addEventListener("pointercancel",st),n.domElement.addEventListener("wheel",Mt,{passive:!1}),this.update()}}const $d=""+new URL("icon.4851a308.jpg",import.meta.url).href;const Kd={name:"RotateBox",setup(){return{scene:null,renderer:null,camera:null,light:null,geometry:null,material:null,cube:null,controls:null}},mounted(){{this.init();const s=this.$refs.canvas;this.renderer=new Pa({antialias:!0,canvas:s}),this.controls=new Zd(this.camera,s),this.camera.position.set(0,0,2),this.light.position.set(0,0,10),this.scene.add(this.cube),this.scene.add(this.light),this.animate()}},methods:{init(){const s=new kd,e=null,t=new wt(75,600/200,.1,1e3),n=new Yd(16777215),i=new qn(1,1,1),r=new Wd().load($d),o=new Nr({map:r}),a=new Ht(i,o);this.scene=s,this.renderer=e,this.camera=t,this.light=n,this.geometry=i,this.material=o,this.cube=a},animate(){requestAnimationFrame(this.animate),this.cube.rotation.x+=.02,this.cube.rotation.y+=.02,this.renderer.render(this.scene,this.camera)}}},Jd={ref:"canvas",width:"600",height:"200"};function Qd(s,e,t,n,i,r){return kt(),Gt("canvas",Jd,null,512)}const Ia=Rr(Kd,[["render",Qd]]);const ef={props:{timelineContent:{type:Array,required:!0}}},tf={class:"timeline"},nf=Ie("header",{class:"timeline-header"},[Ie("span",{class:"tag is-medium is-primary"},"Present")],-1),rf=Ie("div",{class:"timeline-marker"},null,-1),sf={class:"timeline-content"},af={class:"heading"},of=Ie("p",null,"-",-1),lf=Ie("div",{class:"timeline-header"},[Ie("span",{class:"tag is-medium is-primary"},"Birth :tada:")],-1);function cf(s,e,t,n,i,r){return kt(),Gt("div",tf,[nf,(kt(!0),Gt(Sr,null,br(t.timelineContent,(o,a)=>(kt(),Gt("div",{key:a,class:"timeline-item"},[rf,Ie("div",sf,[Ie("p",af,Bn(o.title),1),Ie("p",null,Bn(o.content),1),of,Ie("p",null,Bn(o.role),1)])]))),128)),lf])}const Fa=Rr(ef,[["render",cf]]),uf={name:"AboutMe",components:{PageHead:oa,TimeLine:Fa,RotateBox:Ia},setup(){return{likes:[{icon:"laptop",title:"Programming",comment:"I like coding.",body:"Python / TypeScript / Elixir / ..."},{icon:"earth",title:"OSS",comment:"I like those cultures.",body:"Clasp / Nuxt / saojs / ..."},{icon:"television-classic",title:"Animes",comment:"I like girls who strive hard.",body:"Pripara / Aikatsu! / Vividred Operation / ..."}],links:[{title:"GitHub",icon:"github",comment:"Various developments",url:"https://github.com/takanakahiko"},{title:"LinkedIn",icon:"linkedin",comment:"",url:"https://www.linkedin.com/in/takanakahiko/"},{title:"Twitter",icon:"twitter",comment:"Various tweets",url:"https://twitter.com/takanakahiko"},{title:"Blog",icon:"vector-pen",comment:"Various poems",url:"https://takanakahiko.hatenablog.com"},{title:"Pixiv",icon:"pencil-fill",comment:"Various illustrations",url:"https://sketch.pixiv.net/@takanakahiko"},{title:"Facebook",icon:"facebook",comment:"Private relationships",url:"https://facebook.com/takanakahiko"},{title:"Wishlist",icon:"gift-fill",comment:"Please give me a present",url:"https://www.amazon.jp/hz/wishlist/ls/2X1XQIFXKS456"},{title:"Discord",icon:"discord",comment:"",url:"https://discordapp.com/users/375939020867239938"}],timelineContent:[{title:"April 2020 - Present",content:"Akatsuki Inc.",role:"Engineer"},{title:"February 2019 - March 2020",content:"Japan Digital Design",role:"Data and Prototyping Engineer(internship)"},{title:"February 2019 - March 2020",content:"Gaiax",role:"OSS promoter(internship)"},{title:"April 2018 - March 2020",content:"Takushoku University",role:"Information and Design Science Course(Master of Engineering)"},{title:"February 2018 - January 2019",content:"Air Closet",role:"Data scientist(internship)"},{title:"April 2014 - December 2018",content:"Non-disclosure (Embedded system development company)",role:"Fullstack engineer(part-time job)"},{title:"April 2014 - March 2018",content:"Takushoku University",role:"Undergraduate"}]}}},hf={class:"section has-text-centered"},df={class:"container"},ff=ka('<div class="container"><p>Hi! please call me Takanakahiko.</p><p>I&#39;d like to create a creative work that makes someone&#39;s heart move.</p><p>My dream is to credits my name on the endrol of my loving content.</p><p>I guess that sometimes the dreams come true.</p></div><div class="container p-2"><span>Master of Engineering</span> / <span>Engineer at Akatsuki Inc.</span> / <a href="https://www.credential.net/c47472d8-6707-4302-ab04-4dbf65b66d30" target="_blank" rel="noopener noreferrer">Professional Cloud Architect</a> / <a href="https://www.jafp.or.jp/exam/about/" target="_blank" rel="noopener noreferrer">3rd grade Certified Skilled Professional of Financial Planning</a></div>',2),pf={class:"section"},mf={class:"container"},gf=Ie("h3",{class:"title is-3"}," I like... ",-1),_f={class:"columns is-variable"},xf={class:"icon is-large"},vf={class:"title is-4"},Mf={class:"subtitle is-5"},yf={class:"content"},Sf={class:"hero is-primary is-bold"},bf={class:"hero-body"},wf={class:"container"},Ef=Ie("h1",{class:"title"}," History ",-1),Tf={class:"columns"},Af={class:"column"},Cf={class:"section"},Lf={class:"container has-text-centered columns is-mobile is-multiline is-centered"},Df=["title","href"],Pf={class:"icon is-large"};function Rf(s,e,t,n,i,r){const o=oa,a=Ia,c=Fa;return kt(),Gt("div",null,[ki(o,null,{default:Ba(()=>[Ga("About me")]),_:1}),Ie("section",hf,[Ie("div",df,[ki(a)]),ff]),Ie("section",pf,[Ie("div",mf,[gf,Ie("div",_f,[(kt(!0),Gt(Sr,null,br(n.likes,l=>(kt(),Gt("div",{key:l.title,class:"column has-text-centered bd-notification"},[Ie("p",null,[Ie("span",xf,[Ie("i",{class:Vr(["mdi","mdi-"+l.icon,"mdi-48px"])},null,2)])]),Ie("p",vf,Bn(l.title),1),Ie("p",Mf,Bn(l.comment),1),Ie("p",yf,Bn(l.body),1)]))),128))])])]),Ie("section",Sf,[Ie("div",bf,[Ie("div",wf,[Ef,Ie("div",Tf,[Ie("div",Af,[ki(c,{"timeline-content":n.timelineContent},null,8,["timeline-content"])])])])])]),Ie("section",Cf,[Ie("div",Lf,[(kt(!0),Gt(Sr,null,br(n.links,l=>(kt(),Gt("a",{key:l.title,title:l.title,href:l.url,target:"_blank",rel:"noopener noreferrer",class:"column"},[Ie("span",Pf,[Ie("i",{class:Vr(["bi","bi-"+l.icon])},null,2)])],8,Df))),128))])])])}const Nf=Rr(uf,[["render",Rf]]);export{Nf as default};
