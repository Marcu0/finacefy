"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8149],{8149:(G,p,a)=>{a.r(p),a.d(p,{SaidaProdutoPageModule:()=>C});var d=a(177),f=a(4341),r=a(4742),c=a(7291),g=a(467),l=a(3273),P=a(2214),h=a(5312),o=a(4020);function v(t,e){if(1&t){const i=o.RV6();o.j41(0,"div",7),o.nrm(1,"ion-icon",8),o.j41(2,"p",9),o.EFF(3," Nenhum produto dispon\xedvel para sa\xedda. "),o.k0s(),o.j41(4,"ion-button",10),o.bIt("click",function(){o.eBV(i);const s=o.XpG();return o.Njj(s.irParaCadastro())}),o.nrm(5,"ion-icon",11),o.EFF(6," Cadastrar Novo Produto "),o.k0s()()}}function S(t,e){if(1&t){const i=o.RV6();o.j41(0,"ion-item",13),o.bIt("click",function(){const s=o.eBV(i).$implicit,u=o.XpG(2);return o.Njj(u.redirecionarParaSabores(s))}),o.j41(1,"ion-label"),o.EFF(2),o.k0s()()}if(2&t){const i=e.$implicit;o.R7$(2),o.JRh(i)}}function x(t,e){if(1&t&&(o.j41(0,"ion-list"),o.DNE(1,S,3,1,"ion-item",12),o.k0s()),2&t){const i=o.XpG();o.R7$(),o.Y8G("ngForOf",i.tipos)}}const F=[{path:"",component:(()=>{var t;class e{constructor(n){this.router=n,this.tipos=[],this.firestore=(0,l.aU)((0,P.Wp)(h.c.firebaseConfig))}ngOnInit(){var n=this;return(0,g.A)(function*(){yield n.carregarTipos()})()}carregarTipos(){var n=this;return(0,g.A)(function*(){const s=(0,l.rJ)(n.firestore,"produtos"),u=yield(0,l.GG)(s),m=new Set;u.forEach(R=>{const T=R.data();m.add(T.tipo)}),n.tipos=Array.from(m)})()}redirecionarParaSabores(n){this.router.navigate(["/sabores",n])}irParaCadastro(){this.router.navigate(["/cadastro-produto"])}}return(t=e).\u0275fac=function(n){return new(n||t)(o.rXU(c.Ix))},t.\u0275cmp=o.VBU({type:t,selectors:[["app-saida-produto"]],standalone:!1,decls:9,vars:2,consts:[["color","primary"],["slot","start"],["color","light"],[1,"ion-text-center"],[1,"ion-padding"],["class","ion-text-center","style","margin-top: 50px;",4,"ngIf"],[4,"ngIf"],[1,"ion-text-center",2,"margin-top","50px"],["name","alert-circle-outline",2,"font-size","3rem","color","var(--ion-color-warning)"],[2,"font-size","1.2rem","color","var(--ion-color-medium)","margin-top","10px"],["expand","full","color","primary",2,"margin-top","20px","font-size","1.2rem",3,"click"],["name","add-circle-outline","slot","start"],[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(n,s){1&n&&(o.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),o.nrm(3,"ion-menu-button",2),o.k0s(),o.j41(4,"ion-title",3),o.EFF(5,"Sa\xedda de Produtos"),o.k0s()()(),o.j41(6,"ion-content",4),o.DNE(7,v,7,0,"div",5)(8,x,2,1,"ion-list",6),o.k0s()),2&n&&(o.R7$(7),o.Y8G("ngIf",0===s.tipos.length),o.R7$(),o.Y8G("ngIf",s.tipos.length>0))},dependencies:[d.Sq,d.bT,r.Jm,r.QW,r.W9,r.eU,r.iq,r.uz,r.he,r.nf,r.MC,r.BC,r.ai],styles:['@charset "UTF-8";.ion-text-center[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}ion-icon[name=alert-circle-outline][_ngcontent-%COMP%]{color:var(--ion-color-warning)}ion-button[_ngcontent-%COMP%]{--padding-start: 20px;--padding-end: 20px;--padding-top: 15px;--padding-bottom: 15px;font-size:1.2rem}']}),e})()},{path:"sabores:tipo",component:a(7017).D},{path:"",redirectTo:"home",pathMatch:"full"}];let M=(()=>{var t;class e{}return(t=e).\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.$C({type:t}),t.\u0275inj=o.G2t({imports:[c.iI.forChild(F),c.iI]}),e})(),C=(()=>{var t;class e{}return(t=e).\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.$C({type:t}),t.\u0275inj=o.G2t({imports:[d.MD,f.YN,r.bv,M]}),e})()}}]);