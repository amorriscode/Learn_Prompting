"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4835],{51913:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),s=(n(67294),n(3905)),t=n(39145);const o={sidebar_position:3},r="\ud83d\udfe2 Eliminaci\xf3n de sesgos",l={unversionedId:"reliability/debiasing",id:"reliability/debiasing",title:"\ud83d\udfe2 Eliminaci\xf3n de sesgos",description:"Esta p\xe1gina cubre algunas t\xe9cnicas simples para eliminar sesgos en la consigna.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/reliability/debiasing.md",sourceDirName:"reliability",slug:"/reliability/debiasing",permalink:"/es/docs/reliability/debiasing",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/debiasing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Introducci\xf3n",permalink:"/es/docs/reliability/intro"},next:{title:"\ud83d\udfe1 Prompt Ensembling",permalink:"/es/docs/reliability/ensembling"}},d={},c=[{value:"Eliminaci\xf3n de ejemplares sesgados",id:"eliminaci\xf3n-de-ejemplares-sesgados",level:2},{value:"Distribuci\xf3n",id:"distribuci\xf3n",level:3},{value:"Peor:",id:"peor",level:4},{value:"Mejor:",id:"mejor",level:4},{value:"Orden",id:"orden",level:3},{value:"Best:",id:"best",level:4},{value:"Eliminaci\xf3n de instrucciones sesgadas",id:"eliminaci\xf3n-de-instrucciones-sesgadas",level:2},{value:"Notes",id:"notes",level:2}],p={toc:c},m="wrapper";function u(e){let{components:a,...n}=e;return(0,s.kt)(m,(0,i.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-eliminaci\xf3n-de-sesgos"},"\ud83d\udfe2 Eliminaci\xf3n de sesgos"),(0,s.kt)("p",null,"Esta p\xe1gina cubre algunas t\xe9cnicas simples para eliminar sesgos en la consigna."),(0,s.kt)("h2",{id:"eliminaci\xf3n-de-ejemplares-sesgados"},"Eliminaci\xf3n de ejemplares sesgados"),(0,s.kt)("p",null,"Dependiendo de su distribuci\xf3n y orden dentro de la consigna, los ",(0,s.kt)("a",{parentName:"p",id:"exemplars_0_66_1682082616933","data-tooltip-html":"Examples of the task that the prompt is trying to solve, which are included in the prompt itself.","data-tooltip-place":"top"},"ejemplares"),(0,s.kt)(t.u,{anchorId:"exemplars_0_66_1682082616933",clickable:!0,mdxType:"Tooltip"})," pueden sesgar las salidas del LLM",(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Esto se discute en cierta medida en la p\xe1gina ",(0,s.kt)("a",{parentName:"p",href:"https://learnprompting.org/es/docs/intermediate/whats_in_a_prompt"},"\xbfQu\xe9 hay en una consigna?"),"."),(0,s.kt)("h3",{id:"distribuci\xf3n"},"Distribuci\xf3n"),(0,s.kt)("p",null,"Cuando se discute la distribuci\xf3n de los ejemplares dentro de una consigna, nos referimos a\ncu\xe1ntos ejemplares de diferentes clases est\xe1n presentes. Por ejemplo, si est\xe1 realizando un an\xe1lisis de sentimiento binario (positivo o negativo) en tweets, y proporciona 3 tweets positivos y 1 tweet negativo como ejemplares, entonces tiene una distribuci\xf3n de 3:1. Dado que la distribuci\xf3n est\xe1 sesgada hacia tweets positivos, el modelo estar\xe1 sesgado hacia la predicci\xf3n de tweets positivos."),(0,s.kt)("h4",{id:"peor"},"Peor:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'P: Tweet: "\xa1Qu\xe9 hermoso d\xeda!"\nR: positivo\n\nP: Tweet: "Me encantan los bolsillos en los jeans"\nR: positivo\n\nP: Tweet: "Me encantan los hot pockets"\nR: positivo\n\nP: Tweet: "Odio esta clase"\nR: negativo\n')),(0,s.kt)("h4",{id:"mejor"},"Mejor:"),(0,s.kt)("p",null,"Tener una distribuci\xf3n equitativa de ejemplares es mejor."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'P: Tweet: "\xa1Qu\xe9 hermoso d\xeda!"\nR: positivo\n\nP: Tweet: "Me encantan los bolsillos en los jeans"\nR: positivo\n\nP: Tweet: "No me gusta la pizza"\nR: negativo\n\nP: Tweet: "Odio esta clase"\nR: negativo\n')),(0,s.kt)("h3",{id:"orden"},"Orden"),(0,s.kt)("p",null,"El orden de los ejemplares tambi\xe9n puede causar sesgos. Por ejemplo, una consigna que tenga ejemplares ordenados al azar\nsuele funcionar mejor que la consigna anterior, que contiene tweets positivos primero,\nseguidos de tweets negativos."),(0,s.kt)("h4",{id:"best"},"Best:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'P: Tweet: "Odio esta clase"\nR: negativo\n\nP: Tweet: "\xa1Qu\xe9 hermoso d\xeda!"\nR: positivo\n\nP: Tweet: "No me gusta la pizza"\nR: negativo\n\nP: Tweet: "Me encantan los bolsillos en los jeans"\nR: positivo\n')),(0,s.kt)("h2",{id:"eliminaci\xf3n-de-instrucciones-sesgadas"},"Eliminaci\xf3n de instrucciones sesgadas"),(0,s.kt)("p",null,"Podemos indicar expl\xedcitamente a GPT-3 que sea imparcial, incluyendo una instrucci\xf3n\npara hacerlo en la consigna. En particular, Si et al.",(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," usan la siguiente\ninstrucci\xf3n al experimentar con BBQ",(0,s.kt)("sup",{parentName:"p",id:"fnref-2"},(0,s.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", un benchmark de sesgo."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Debemos tratar a las personas de diferentes estatus socioecon\xf3micos, orientaciones sexuales, religiones, razas, apariencias f\xedsicas, nacionalidades, identidades de g\xe9nero, discapacidades y edades de manera igualitaria. Cuando no tengamos suficiente informaci\xf3n, debemos elegir la opci\xf3n desconocida, en lugar de hacer suposiciones basadas en nuestros estereotipos.\n")),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("p",null,"Ver m\xe1s sobre el des sesgo en la secci\xf3n de calibraci\xf3n."),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"Si, C., Gan, Z., Yang, Z., Wang, S., Wang, J., Boyd-Graber, J., & Wang, L. (2022). Prompting GPT-3 To Be Reliable.\n",(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,s.kt)("li",{parentName:"ol",id:"fn-2"},"Parrish, A., Chen, A., Nangia, N., Padmakumar, V., Phang, J., Thompson, J., Htut, P. M., & Bowman, S. R. (2021). BBQ: A Hand-Built Bias Benchmark for Question Answering.\n",(0,s.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);