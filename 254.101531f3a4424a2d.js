"use strict";(self.webpackChunkAmtrack_web=self.webpackChunkAmtrack_web||[]).push([[254],{4254:(_,c,a)=>{a.r(c),a.d(c,{AuthModule:()=>w});var p=a(6019),l=a(2074),e=a(7537),d=a(1659),f=a.n(d),t=a(3668),g=a(6077);let u=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-spin"]],decls:5,vars:0,consts:[[1,"lds-ellipsis"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"div"),t._UZ(2,"div"),t._UZ(3,"div"),t._UZ(4,"div"),t.qZA())},styles:[".lds-ellipsis[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:#fff;animation-timing-function:cubic-bezier(0,1,1,0)}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){left:8px;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){left:8px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){left:32px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){left:56px;animation:lds-ellipsis3 .6s infinite}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}"]}),n})();function m(n,i){if(1&n&&(t.TgZ(0,"button",15),t._uU(1," Ingresar "),t.qZA()),2&n){const o=t.oxw();t.Q6J("disabled",o.clickeable)}}function b(n,i){1&n&&t._UZ(0,"app-spin")}let h=(()=>{class n{constructor(o,r,s){this.fb=o,this.router=r,this.authService=s,this.miFormulario=this.fb.group({email:["",e.kI.required],password:["",e.kI.required]}),this.clickeable=!1,localStorage.clear()}login(){this.clickeable=!0,localStorage.setItem("moduloActual","Login");const{email:o,password:r}=this.miFormulario.value;this.authService.loginAdmin(o,r).subscribe(s=>{1==s?this.router.navigateByUrl("/administrator"):(f().fire({icon:"error",text:"Verificar datos ingresados",color:"#ffffff",background:"#1e2122",confirmButtonColor:"#ff2b2b",confirmButtonText:"Continuar",iconColor:"#ff2b2b"}),this.clickeable=!1)})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(e.qu),t.Y36(l.F0),t.Y36(g.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login-new"]],decls:18,vars:3,consts:[[1,"ftco-section"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-6","text-center","mb-5"],[1,"col-md-6","col-lg-5"],[1,"login-wrap","p-4","p-md-5"],[1,"icon","d-flex","align-items-center","justify-content-center"],["src","assets/image/lo-admin.png","alt","Amtrack"],[1,"login-form",2,"background","transparent",3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","email","name","user","type","text","placeholder","Usuario","required","","autocomplete","off",1,"form-control","rounded-left",2,"background","transparent","color","#fff"],[1,"form-group","d-flex"],["formControlName","password","name","password","type","password","placeholder","Contrase\xf1a","required","","autocomplete","off",1,"form-control","rounded-left",2,"background","transparent","color","#fff"],["class","btn","style","margin-left: 50%; transform: translateX(-50%)",3,"disabled",4,"ngIf"],[4,"ngIf"],[1,"btn",2,"margin-left","50%","transform","translateX(-50%)",3,"disabled"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"div",3),t.qZA(),t.TgZ(4,"div",2),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t._UZ(8,"img",7),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"form",8),t.NdJ("ngSubmit",function(){return r.login()}),t.TgZ(11,"div",9),t._UZ(12,"input",10),t.qZA(),t.TgZ(13,"div",11),t._UZ(14,"input",12),t.qZA(),t.TgZ(15,"div",9),t.YNc(16,m,2,1,"button",13),t.YNc(17,b,1,0,"app-spin",14),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(10),t.Q6J("formGroup",r.miFormulario),t.xp6(6),t.Q6J("ngIf",!r.clickeable),t.xp6(1),t.Q6J("ngIf",r.clickeable))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,e.Q7,p.O5,u],styles:['@font-face{font-family:"Lato";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/lato/v22/S6u9w4BMUTPHh7USSwaPGR_p.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"Lato";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/lato/v22/S6u9w4BMUTPHh7USSwiPGQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:"Lato";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/lato/v22/S6uyw4BMUTPHjxAwXjeu.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"Lato";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/lato/v22/S6uyw4BMUTPHjx4wXg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:"Lato";font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/lato/v22/S6u9w4BMUTPHh6UVSwaPGR_p.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"Lato";font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/lato/v22/S6u9w4BMUTPHh6UVSwiPGQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.login[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 75px);left:calc(50% - 50px);height:150px;width:350px;padding:10px;z-index:2}.login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{width:250px;height:30px;background:transparent;border:1px solid rgba(255,255,255,.6);border-radius:2px;color:#fff;font-family:"Exo",sans-serif;font-size:16px;font-weight:400;padding:4px}.login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{width:250px;height:30px;background:transparent;border:1px solid rgba(255,255,255,.6);border-radius:2px;color:#fff;font-family:"Exo",sans-serif;font-size:16px;font-weight:400;padding:4px;margin-top:10px}.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]{width:260px;height:35px;background:#fff;border:1px solid #fff;cursor:pointer;border-radius:2px;color:#a18d6c;font-family:"Exo",sans-serif;font-size:16px;font-weight:400;padding:6px;margin-top:10px}.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:hover{opacity:.8}.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:active{opacity:.6}.login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{outline:none;border:1px solid rgba(255,255,255,.9)}.login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus{outline:none;border:1px solid rgba(255,255,255,.9)}.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:focus{outline:none}']}),n})();function x(n,i){if(1&n&&(t.TgZ(0,"button",15),t._uU(1," Ingresar "),t.qZA()),2&n){const o=t.oxw();t.Q6J("disabled",o.clickeable)}}function U(n,i){1&n&&t._UZ(0,"app-spin")}const C=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-main"]],decls:5,vars:0,template:function(o,r){1&o&&(t.TgZ(0,"body"),t.TgZ(1,"div"),t.TgZ(2,"div"),t.TgZ(3,"div"),t._UZ(4,"router-outlet"),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[l.lC],encapsulation:2}),n})(),children:[{path:"login",component:(()=>{class n{constructor(o,r,s){this.fb=o,this.router=r,this.authService=s,this.miFormulario=this.fb.group({email:["",e.kI.required],password:["",e.kI.required]}),this.clickeable=!1,localStorage.clear()}login(){this.clickeable=!0,localStorage.setItem("moduloActual","Login");const{email:o,password:r}=this.miFormulario.value;this.authService.login(o,r).subscribe(s=>{1==s?this.router.navigateByUrl("/tracker"):(f().fire({icon:"error",text:"Verificar datos ingresados",color:"#ffffff",background:"#1e2122",confirmButtonColor:"#ff2b2b",confirmButtonText:"Continuar",iconColor:"#ff2b2b"}),this.clickeable=!1)})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(e.qu),t.Y36(l.F0),t.Y36(g.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:18,vars:3,consts:[[1,"ftco-section"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-6","text-center","mb-5"],[1,"col-md-6","col-lg-5"],[1,"login-wrap","p-4","p-md-5"],[1,"icon","d-flex","align-items-center","justify-content-center"],["src","assets/image/lo-amtrack.png","alt","Amtrack"],[1,"login-form",2,"background","transparent",3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","email","name","user","type","text","placeholder","Usuario","required","","autocomplete","off",1,"form-control","rounded-left",2,"background","transparent","color","#fff"],[1,"form-group","d-flex"],["formControlName","password","name","password","type","password","placeholder","Contrase\xf1a","required","","autocomplete","off",1,"form-control","rounded-left",2,"background","transparent","color","#fff"],["class","btn btn-primary",3,"disabled",4,"ngIf"],[4,"ngIf"],[1,"btn","btn-primary",3,"disabled"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"div",3),t.qZA(),t.TgZ(4,"div",2),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t._UZ(8,"img",7),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"form",8),t.NdJ("ngSubmit",function(){return r.login()}),t.TgZ(11,"div",9),t._UZ(12,"input",10),t.qZA(),t.TgZ(13,"div",11),t._UZ(14,"input",12),t.qZA(),t.TgZ(15,"div",9),t.YNc(16,x,2,1,"button",13),t.YNc(17,U,1,0,"app-spin",14),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(10),t.Q6J("formGroup",r.miFormulario),t.xp6(6),t.Q6J("ngIf",!r.clickeable),t.xp6(1),t.Q6J("ngIf",r.clickeable))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,e.Q7,p.O5,u],styles:['body[_ngcontent-%COMP%]{margin:0;padding:0;background:#fff;color:#fff;font-family:Arial;font-size:12px}.body[_ngcontent-%COMP%]{top:-20px;left:-20px;right:-40px;bottom:-40px;width:auto;height:100%;margin:0%;background-size:cover;z-index:0}.grad[_ngcontent-%COMP%]{top:-20px;left:-20px;right:-40px;bottom:-40px;width:auto;height:auto;background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,rgba(0,0,0,0)),color-stop(100%,rgba(0,0,0,.65)));z-index:1;opacity:.7}.header[_ngcontent-%COMP%]{position:absolute;top:30%;left:20%}.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{float:left;color:#fff;font-family:"Exo",sans-serif;font-size:35px;font-weight:200}.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#5379fa!important}.login[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 75px);left:calc(50% - 50px);height:150px;width:350px;padding:10px;z-index:2}.login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{width:250px;height:30px;background:transparent;border:1px solid rgba(255,255,255,.6);border-radius:2px;color:#fff;font-family:"Exo",sans-serif;font-size:16px;font-weight:400;padding:4px}.login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{width:250px;height:30px;background:transparent;border:1px solid rgba(255,255,255,.6);border-radius:2px;color:#fff;font-family:"Exo",sans-serif;font-size:16px;font-weight:400;padding:4px;margin-top:10px}.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]{width:260px;height:35px;background:#fff;border:1px solid #fff;cursor:pointer;border-radius:2px;color:#a18d6c;font-family:"Exo",sans-serif;font-size:16px;font-weight:400;padding:6px;margin-top:10px}.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:hover{opacity:.8}.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:active{opacity:.6}.login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{outline:none;border:1px solid rgba(255,255,255,.9)}.login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus{outline:none;border:1px solid rgba(255,255,255,.9)}.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:focus{outline:none}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff9}[_ngcontent-%COMP%]::-moz-input-placeholder{color:#fff9}.button-new[_ngcontent-%COMP%]{-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);box-sizing:border-box;font:inherit;margin:0 0 10px;overflow:visible;-webkit-appearance:button;font-family:inherit;display:inline-block;text-align:center;touch-action:manipulation;cursor:pointer;background-image:none;-webkit-user-select:none;user-select:none;color:#fff;background-color:#e43d30;border:3px solid transparent;font-size:16px;padding:8px 20px;text-transform:inherit;vertical-align:top;white-space:normal;word-break:initial;text-decoration:none;letter-spacing:inherit;border-radius:30px;line-height:1.42857143;font-weight:600!important}']}),n})()},{path:"register",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-register"]],decls:29,vars:0,consts:[["autocomplete","off",1,"login100-form"],[1,"login100-form-title","p-b-49"],[1,"wrap-input100","m-b-23"],[1,"label-input100"],["type","text","name","nombre","placeholder","Ingrese su nombre",1,"input100"],[1,"focus-input100"],["type","email","name","email","placeholder","Ingrese su email",1,"input100"],[1,"wrap-input100"],["type","password","name","password","placeholder","Ingrese su contrase\xf1a",1,"input100"],[1,"text-right","p-t-8","p-b-31"],[1,"container-login100-form-btn"],[1,"wrap-login100-form-btn"],[1,"login100-form-bgbtn"],[1,"login100-form-btn"],[1,"flex-col-c","p-t-60"],[1,"txt1","p-b-17"],["routerLink","/auth/login",1,"txt2"]],template:function(o,r){1&o&&(t.TgZ(0,"form",0),t.TgZ(1,"span",1),t._uU(2," Nuevo usuario "),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"span",3),t._uU(5,"Nombre"),t.qZA(),t._UZ(6,"input",4),t._UZ(7,"span",5),t.qZA(),t.TgZ(8,"div",2),t.TgZ(9,"span",3),t._uU(10,"Email"),t.qZA(),t._UZ(11,"input",6),t._UZ(12,"span",5),t.qZA(),t.TgZ(13,"div",7),t.TgZ(14,"span",3),t._uU(15,"Password"),t.qZA(),t._UZ(16,"input",8),t._UZ(17,"span",5),t.qZA(),t._UZ(18,"div",9),t.TgZ(19,"div",10),t.TgZ(20,"div",11),t._UZ(21,"div",12),t.TgZ(22,"button",13),t._uU(23," Register "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"div",14),t.TgZ(25,"span",15),t._uU(26," \xbfYa tienes cuenta? "),t.qZA(),t.TgZ(27,"a",16),t._uU(28," Ingresa aqui "),t.qZA(),t.qZA(),t.qZA())},directives:[e._Y,e.JL,l.yS],encapsulation:2}),n})()},{path:"admin",component:h},{path:"**",redirectTo:"login"}]}];let Z=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(C)],l.Bz]}),n})(),w=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,Z,e.UX,l.Bz]]}),n})()}}]);