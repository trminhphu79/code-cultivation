import{a as d,f as l}from"./chunk-KJSTXW46.js";import{Gb as u,N as r,T as n,Ua as c,oc as m,pb as a,qb as s,rb as p}from"./chunk-DY72FOF2.js";import"./chunk-4CLCTAJ7.js";var f=(()=>{class t{httpClient=n(d);signIn(o,e){return this.httpClient.post(o,e)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=r({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var D=(()=>{class t{oauthService=n(f);activatedRoute=n(l);ngOnInit(){this.activatedRoute.queryParams.subscribe(o=>{this.oauthService.signIn("http://localhost:3000/api/auth/oauth",{code:o.code,credentialType:"GITHUB"}).subscribe(i=>{console.log("github auth response: ",i)})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=c({type:t,selectors:[["pk-oauth-redirect"]],decls:3,vars:0,consts:[["id","google-signin-button"]],template:function(e,i){e&1&&(a(0,"p"),u(1,"oauth-redirect works!"),s(),p(2,"div",0))},dependencies:[m],encapsulation:2,changeDetection:0})}return t})();export{D as OauthRedirectComponent};
