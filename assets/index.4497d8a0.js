import{j as a,r as u,u as g,R as m,a as l,b as p,c as h,H as v}from"./vendor.a542a450.js";const b=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};b();function y(){window.fbAsyncInit=function(){FB.init({appId:"1092249954903916",cookie:!0,xfbml:!0,version:"v12.0"}),FB.AppEvents.logPageView(),FB.getLoginStatus(function(i){console.log(i)})},function(i,t,r){var c,e=i.getElementsByTagName(t)[0];i.getElementById(r)||(c=i.createElement(t),c.id=r,c.src="https://connect.facebook.net/en_US/sdk.js",e.parentNode.insertBefore(c,e))}(document,"script","facebook-jssdk")}function F(i){FB.login(t=>{i(t)})}var f={loginFB:F,initFbSDK:y};const B=f.initFbSDK,j=f.loginFB,n=a.exports.jsx,d=a.exports.jsxs;function x(){u.exports.useEffect(()=>{B(),console.log("initFbSDK")},[]);function i(t){const r=g();t.status==="connected"?(console.log("connected",t),r("confirm")):(console.log("fail",t),r("cancael"))}return d("div",{children:[n("div",{children:"Home"}),n("div",{children:n("button",{onClick:()=>j(i),children:"login"})})]})}function S(){return u.exports.useEffect(()=>{console.log("post message")},[]),n("div",{children:"Confirm"})}function E(){return n("div",{children:"Cancel"})}function k(){return n("div",{className:"App",children:d(m,{children:[n(l,{path:"/",element:n(x,{})}),n(l,{path:"/confirm",element:n(S,{})}),n(l,{path:"/cancel",element:n(E,{})})]})})}p.render(n(h.StrictMode,{children:n(v,{children:n(k,{})})}),document.getElementById("root"));
