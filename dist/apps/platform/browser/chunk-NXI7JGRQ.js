import{f as h,g as s}from"./chunk-WRETKZLA.js";import{c,e as u}from"./chunk-KKPH6MQK.js";import{a as g,h as a}from"./chunk-3WJWDJZJ.js";import{N as l,T as t}from"./chunk-24GKCPYZ.js";var d=(()=>{class n{httpClient=t(g);appConfig=t(s);baseUrl=this.appConfig.apiUrl;signIn(e){return this.httpClient.post(`${this.baseUrl()}auth/signIn`,e)}signUp(e){return this.httpClient.post(`${this.baseUrl()}auth/signUp`,e)}oauthSignIn(e){return this.httpClient.post(`${this.baseUrl()}auth/oauth`,e)}static \u0275fac=function(r){return new(r||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var G=c({providedIn:"root"},u((n,m=t(a),e=t(h),r=t(s),p=t(d))=>({signUp(o){p.signUp(o).subscribe(i=>{console.log("sign up response: ",i)})},signIn(o){p.signIn(o).subscribe(i=>{console.log("sign in response: ",i)})},oauthSignIn(o){p.oauthSignIn(o).subscribe(i=>{console.log("Oauth signin response: ",i),m.navigateByUrl("/")})},googleSignIn(){this._createFakeGoogleWrapper()},githubSignIn(){window.open(r.githubClientUrl())},_handleCredentialResponse(o){console.log("response: ",o),this.oauthSignIn({token:o,credentialType:"GOOGLE"})},_createFakeGoogleWrapper(){let o=document.createElement("div");return o.style.display="none",o.classList.add("google-signin-button"),document.body.appendChild(o),console.log("appConfig: ",r.googleClientId()),google.accounts.id.initialize({client_id:r.googleClientId(),callback:f=>this._handleCredentialResponse(f)}),google.accounts.id.renderButton(o,{type:"icon",width:"30"}),google.accounts.id.prompt(),o.querySelector("div[role=button]")?.click()}})));export{G as a};