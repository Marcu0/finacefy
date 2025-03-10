"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2984],{2984:(F,h,d)=>{d.r(h),d.d(h,{CadastroProdutoPageModule:()=>j});var _=d(177),f=d(4341),i=d(4742),P=d(7291),l=d(467),m=d(3026),c=d(9969),o=d(4020);function C(a,s){if(1&a){const n=o.RV6();o.j41(0,"div")(1,"h2",2),o.EFF(2,"Passo 1: Tipo e Sabor"),o.k0s(),o.j41(3,"ion-item")(4,"ion-label",3),o.EFF(5,"Tipo do Produto"),o.k0s(),o.j41(6,"ion-input",4),o.mxI("ngModelChange",function(r){o.eBV(n);const e=o.XpG();return o.DH7(e.produto.tipo,r)||(e.produto.tipo=r),o.Njj(r)}),o.bIt("input",function(r){o.eBV(n);const e=o.XpG();return o.Njj(e.sugerirTipo(r))}),o.k0s()(),o.j41(7,"ion-item")(8,"ion-label",3),o.EFF(9,"Sabor do Produto"),o.k0s(),o.j41(10,"ion-input",5),o.mxI("ngModelChange",function(r){o.eBV(n);const e=o.XpG();return o.DH7(e.produto.sabor,r)||(e.produto.sabor=r),o.Njj(r)}),o.k0s()(),o.j41(11,"ion-button",6),o.bIt("click",function(){o.eBV(n);const r=o.XpG();return o.Njj(r.nextStep())}),o.EFF(12,"Pr\xf3ximo"),o.k0s()()}if(2&a){const n=o.XpG();o.R7$(6),o.R50("ngModel",n.produto.tipo),o.R7$(4),o.R50("ngModel",n.produto.sabor)}}function b(a,s){if(1&a){const n=o.RV6();o.j41(0,"div")(1,"h2",2),o.EFF(2,"Passo 2: Pre\xe7o e Quantidade"),o.k0s(),o.j41(3,"ion-item")(4,"ion-label",3),o.EFF(5,"Pre\xe7o do Produto"),o.k0s(),o.j41(6,"ion-input",7),o.mxI("ngModelChange",function(r){o.eBV(n);const e=o.XpG();return o.DH7(e.precoFormatado,r)||(e.precoFormatado=r),o.Njj(r)}),o.bIt("ionInput",function(r){o.eBV(n);const e=o.XpG();return o.Njj(e.atualizarPreco(r))}),o.k0s()(),o.j41(7,"ion-item")(8,"ion-label",3),o.EFF(9,"Quantidade do Produto"),o.k0s(),o.j41(10,"ion-input",8),o.mxI("ngModelChange",function(r){o.eBV(n);const e=o.XpG();return o.DH7(e.produto.quantidade,r)||(e.produto.quantidade=r),o.Njj(r)}),o.bIt("ionInput",function(r){o.eBV(n);const e=o.XpG();return o.Njj(e.validarQuantidade(r))}),o.k0s()(),o.j41(11,"ion-button",6),o.bIt("click",function(){o.eBV(n);const r=o.XpG();return o.Njj(r.previousStep())}),o.EFF(12,"Anterior"),o.k0s(),o.j41(13,"ion-button",6),o.bIt("click",function(){o.eBV(n);const r=o.XpG();return o.Njj(r.nextStep())}),o.EFF(14,"Pr\xf3ximo"),o.k0s()()}if(2&a){const n=o.XpG();o.R7$(6),o.R50("ngModel",n.precoFormatado),o.R7$(4),o.R50("ngModel",n.produto.quantidade)}}function v(a,s){if(1&a){const n=o.RV6();o.j41(0,"div")(1,"h2",2),o.EFF(2,"Passo 3: Confirma\xe7\xe3o"),o.k0s(),o.j41(3,"ion-card")(4,"ion-card-header")(5,"ion-card-title"),o.EFF(6),o.k0s(),o.j41(7,"ion-card-subtitle"),o.EFF(8),o.k0s()(),o.j41(9,"ion-card-content")(10,"p"),o.EFF(11),o.nI1(12,"currency"),o.k0s(),o.j41(13,"p"),o.EFF(14),o.k0s()()(),o.j41(15,"ion-button",6),o.bIt("click",function(){o.eBV(n);const r=o.XpG();return o.Njj(r.previousStep())}),o.EFF(16,"Anterior"),o.k0s(),o.j41(17,"ion-button",6),o.bIt("click",function(){o.eBV(n);const r=o.XpG();return o.Njj(r.onSubmit())}),o.EFF(18,"Cadastrar"),o.k0s()()}if(2&a){const n=o.XpG();o.R7$(6),o.JRh(n.produto.tipo),o.R7$(2),o.JRh(n.produto.sabor),o.R7$(3),o.SpI("Pre\xe7o: ",o.i5U(12,4,n.produto.preco,"BRL"),""),o.R7$(3),o.SpI("Quantidade: ",n.produto.quantidade,"")}}const x=[{path:"",component:(()=>{var a;class s{constructor(t,r,e){this.toastCtrl=t,this.alertCtrl=r,this.firestore=e,this.produto={tipo:"",sabor:"",preco:0,quantidade:null},this.precoFormatado="",this.produtoCadastrado=!1,this.isLoading=!1,this.currentStep=1,this.formSubmitted=!1}nextStep(){this.formSubmitted=!0,1!==this.currentStep||this.produto.tipo&&this.produto.sabor?2!==this.currentStep||this.precoFormatado&&this.produto.quantidade&&!(this.produto.quantidade<=0)?this.currentStep<3&&(this.currentStep++,this.formSubmitted=!1):this.showToast("Preencha todos os campos obrigat\xf3rios com valores v\xe1lidos."):this.showToast("Preencha todos os campos obrigat\xf3rios.")}previousStep(){this.currentStep>1&&this.currentStep--}goToStep(t){t>=1&&t<=3&&(this.currentStep=t)}atualizarPreco(t){const r=t.target.value;this.precoFormatado=r,this.produto.preco=this.converterParaNumero(r)}filtrarNumeros(t){const r=t.target;let e=r.value;e=e.replace(/[^0-9.,]/g,""),r.value=e,this.precoFormatado=e,this.produto.preco=this.converterParaNumero(e)}converterParaNumero(t){const r=t.replace("R$ ","").replace(/\./g,"").replace(",",".");return parseFloat(r)}validarQuantidade(t){const r=t.target.value;this.produto.quantidade=null===r||""===r||isNaN(r)?null:r<0?0:Math.floor(r)}buscarProdutosCadastrados(){var t=this;return(0,l.A)(function*(){const r=(0,m.rJ)(t.firestore,"produtos"),e=(0,m.P)(r),p=yield(0,m.GG)(e),u=[];return p.forEach(g=>{u.push(g.data())}),u})()}sugerirTipo(t){const r=t.target.value.toLowerCase();this.buscarProdutosCadastrados().then(e=>{const u=e.map(g=>g.tipo.toLowerCase()).find(g=>g.startsWith(r));u&&(this.produto.tipo=u)})}verificarTipoESabor(){var t=this;return(0,l.A)(function*(){(yield t.buscarProdutosCadastrados()).find(p=>p.tipo.toLowerCase()===t.produto.tipo.toLowerCase())&&((yield t.mostrarConfirmacao("Tipo j\xe1 cadastrado",`Deseja adicionar um novo sabor ao tipo "${t.produto.tipo}"?`))?t.produto.sabor="":t.produto.tipo="")})()}mostrarConfirmacao(t,r){var e=this;return(0,l.A)(function*(){return new Promise(function(){var p=(0,l.A)(function*(u){yield(yield e.alertCtrl.create({header:t,message:r,buttons:[{text:"Cancelar",role:"cancel",handler:()=>u(!1)},{text:"Adicionar",handler:()=>u(!0)}]})).present()});return function(u){return p.apply(this,arguments)}}())})()}onSubmit(){var t=this;return(0,l.A)(function*(){t.isLoading=!0;try{if(yield t.verificarTipoESabor(),""===t.produto.tipo.trim()||""===t.produto.sabor.trim())return void t.showToast("Preencha todos os campos obrigat\xf3rios.");if(t.produto.preco<=0)return void t.showToast("O pre\xe7o deve ser maior que zero.");if(null===t.produto.quantidade||t.produto.quantidade<=0)return void t.showToast("A quantidade deve ser maior que zero.");yield(0,m.gS)((0,m.rJ)(t.firestore,"produtos"),{tipo:t.produto.tipo,sabor:t.produto.sabor,preco:t.produto.preco,quantidade:t.produto.quantidade}),t.produtoCadastrado=!0,setTimeout(()=>{t.produtoCadastrado=!1},3e3),t.produto={tipo:"",sabor:"",preco:0,quantidade:null},t.precoFormatado="",t.currentStep=1}catch(r){console.error("Erro ao cadastrar produto:",r),t.showToast("Erro ao cadastrar produto. Tente novamente.")}finally{t.isLoading=!1}})()}showToast(t){var r=this;return(0,l.A)(function*(){(yield r.toastCtrl.create({message:t,duration:2e3,position:"bottom"})).present()})()}}return(a=s).\u0275fac=function(t){return new(t||a)(o.rXU(i.K_),o.rXU(i.hG),o.rXU(m._7))},a.\u0275cmp=o.VBU({type:a,selectors:[["app-cadastro-produto"]],standalone:!1,decls:10,vars:3,consts:[["color","primary"],[4,"ngIf"],[1,"ion-text-center"],["position","stacked"],["name","tipo","required","","placeholder","Digite o tipo do produto",3,"ngModelChange","input","ngModel"],["name","sabor","required","","placeholder","Digite o sabor do produto",3,"ngModelChange","ngModel"],["expand","full",3,"click"],["name","preco","required","","placeholder","Digite o pre\xe7o do produto",3,"ngModelChange","ionInput","ngModel"],["name","quantidade","type","number","required","","placeholder","Digite a quantidade do produto",3,"ngModelChange","ionInput","ngModel"]],template:function(t,r){1&t&&(o.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),o.EFF(3,"Cadastro de Produto"),o.k0s()()(),o.j41(4,"ion-content")(5,"ion-card")(6,"ion-card-content"),o.DNE(7,C,13,2,"div",1)(8,b,15,2,"div",1)(9,v,19,7,"div",1),o.k0s()()()),2&t&&(o.R7$(7),o.Y8G("ngIf",1===r.currentStep),o.R7$(),o.Y8G("ngIf",2===r.currentStep),o.R7$(),o.Y8G("ngIf",3===r.currentStep))},dependencies:[_.bT,f.BC,f.YS,f.vS,i.Jm,i.b_,i.I9,i.ME,i.HW,i.tN,i.W9,i.eU,i.$w,i.uz,i.he,i.BC,i.ai,i.su,i.Gw,_.oe],styles:['@charset "UTF-8";.steps-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.step[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:0 10px;cursor:pointer;opacity:.6;transition:opacity .3s ease}.step.active[_ngcontent-%COMP%]{opacity:1}.step-number[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%;background:var(--ion-color-primary);color:#fff;display:flex;align-items:center;justify-content:center;font-size:1rem;font-weight:700}.step-label[_ngcontent-%COMP%]{margin-top:5px;font-size:.9rem;color:var(--ion-color-dark);text-align:center}.title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:var(--ion-color-primary)}.subtitle[_ngcontent-%COMP%]{font-size:1.2rem;color:var(--ion-color-medium)}.step-title[_ngcontent-%COMP%]{font-size:1.3rem;margin-bottom:20px;color:var(--ion-color-dark)}.form-item[_ngcontent-%COMP%]{margin-bottom:20px;border-radius:8px;background:#fff;box-shadow:0 2px 4px #0000001a}.form-icon[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--ion-color-primary);margin-right:10px}.form-label[_ngcontent-%COMP%]{font-size:1.2rem;color:var(--ion-color-dark);margin-bottom:5px}.form-input[_ngcontent-%COMP%]{font-size:1.2rem;color:var(--ion-color-dark)}.form-helper[_ngcontent-%COMP%]{font-size:1rem;color:var(--ion-color-medium)}.form-error[_ngcontent-%COMP%]{font-size:1rem;color:var(--ion-color-danger);margin-top:5px}.invalid-input[_ngcontent-%COMP%]{border:1px solid var(--ion-color-danger);border-radius:8px}.animated-button[_ngcontent-%COMP%]{transition:transform .2s ease}.animated-button[_ngcontent-%COMP%]:active{transform:scale(.95)}.loading-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:#fffc;display:flex;justify-content:center;align-items:center;flex-direction:column;z-index:1000}.loading-spinner[_ngcontent-%COMP%]{border:4px solid var(--ion-color-primary);border-top:4px solid transparent;border-radius:50%;width:40px;height:40px;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.success-animation[_ngcontent-%COMP%]{text-align:center;animation:_ngcontent-%COMP%_fadeInUp .5s ease}.success-icon[_ngcontent-%COMP%]{font-size:3rem;color:var(--ion-color-success);animation:_ngcontent-%COMP%_bounce .5s ease}ion-button[_ngcontent-%COMP%]{border-radius:25px;font-size:1.1rem;font-weight:700;margin-top:10px;transition:transform .2s ease;color:#fff}ion-button[_ngcontent-%COMP%]:hover{transform:scale(1.05)}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_bounce{0%,to{transform:scale(1)}50%{transform:scale(1.2)}}'],data:{animation:[(0,c.hZ)("slideAnimation",[(0,c.kY)(":enter",[(0,c.iF)({transform:"translateX(100%)",opacity:0}),(0,c.i0)("300ms ease-out",(0,c.iF)({transform:"translateX(0)",opacity:1}))]),(0,c.kY)(":leave",[(0,c.i0)("300ms ease-in",(0,c.iF)({transform:"translateX(-100%)",opacity:0}))])])]}}),s})()}];let M=(()=>{var a;class s{}return(a=s).\u0275fac=function(t){return new(t||a)},a.\u0275mod=o.$C({type:a}),a.\u0275inj=o.G2t({imports:[P.iI.forChild(x),P.iI]}),s})(),j=(()=>{var a;class s{}return(a=s).\u0275fac=function(t){return new(t||a)},a.\u0275mod=o.$C({type:a}),a.\u0275inj=o.G2t({imports:[_.MD,f.YN,i.bv,M,f.X1]}),s})()}}]);