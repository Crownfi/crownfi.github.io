"use strict";(self.webpackChunk_crownfi_csswap_mvp_frontend=self.webpackChunk_crownfi_csswap_mvp_frontend||[]).push([[800],{91800:(e,s,n)=>{n.r(s),n.d(s,{MsgClientImpl:()=>d});var t=n(60141),i=n(63967),c=n(94893);class d{constructor(e){(0,t.Z)(this,"rpc",void 0),this.rpc=e,this.send=this.send.bind(this),this.multiSend=this.multiSend.bind(this)}send(e){const s=c.rQ.encode(e).finish();return this.rpc.request("cosmos.bank.v1beta1.Msg","Send",s).then((e=>c.RJ.decode(new i.Reader(e))))}multiSend(e){const s=c.mj.encode(e).finish();return this.rpc.request("cosmos.bank.v1beta1.Msg","MultiSend",s).then((e=>c.mf.decode(new i.Reader(e))))}}}}]);