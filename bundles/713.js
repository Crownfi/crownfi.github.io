"use strict";(self.webpackChunk_crownfi_csswap_mvp_frontend=self.webpackChunk_crownfi_csswap_mvp_frontend||[]).push([[713],{39713:(e,n,a)=>{a.r(n),a.d(n,{QueryClientImpl:()=>I,createRpcQueryExtension:()=>Z});var t=a(60141),o=a(63967),i=a(30065),r=a(96421),s=a(28273),d=a(30721);const c={encode:(e,n=o.Writer.create())=>(""!==e.address&&n.uint32(10).string(e.address),""!==e.denom&&n.uint32(18).string(e.denom),n),decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i={address:"",denom:""};for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:i.address=a.string();break;case 2:i.denom=a.string();break;default:a.skipType(7&e)}}return i},fromPartial(e){var n,a;const t={address:"",denom:""};return t.address=null!==(n=e.address)&&void 0!==n?n:"",t.denom=null!==(a=e.denom)&&void 0!==a?a:"",t}},l={encode:(e,n=o.Writer.create())=>(void 0!==e.balance&&s.sN.encode(e.balance,n.uint32(10).fork()).ldelim(),n),decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i={balance:void 0};for(;a.pos<t;){const e=a.uint32();e>>>3==1?i.balance=s.sN.decode(a,a.uint32()):a.skipType(7&e)}return i},fromPartial(e){const n={balance:void 0};return n.balance=void 0!==e.balance&&null!==e.balance?s.sN.fromPartial(e.balance):void 0,n}};function p(){return{address:"",pagination:r.l.fromPartial({})}}const u={encode:(e,n=o.Writer.create())=>(""!==e.address&&n.uint32(10).string(e.address),void 0!==e.pagination&&r.l.encode(e.pagination,n.uint32(18).fork()).ldelim(),n),decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i=p();for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:i.address=a.string();break;case 2:i.pagination=r.l.decode(a,a.uint32());break;default:a.skipType(7&e)}}return i},fromPartial(e){var n;const a=p();return a.address=null!==(n=e.address)&&void 0!==n?n:"",a.pagination=void 0!==e.pagination&&null!==e.pagination?r.l.fromPartial(e.pagination):void 0,a}};function f(){return{balances:[],pagination:r.f.fromPartial({})}}const m={encode(e,n=o.Writer.create()){for(const a of e.balances)s.sN.encode(a,n.uint32(10).fork()).ldelim();return void 0!==e.pagination&&r.f.encode(e.pagination,n.uint32(18).fork()).ldelim(),n},decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i=f();for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:i.balances.push(s.sN.decode(a,a.uint32()));break;case 2:i.pagination=r.f.decode(a,a.uint32());break;default:a.skipType(7&e)}}return i},fromPartial(e){var n;const a=f();return a.balances=(null===(n=e.balances)||void 0===n?void 0:n.map((e=>s.sN.fromPartial(e))))||[],a.pagination=void 0!==e.pagination&&null!==e.pagination?r.f.fromPartial(e.pagination):void 0,a}};function v(){return{address:"",pagination:r.l.fromPartial({})}}const g={encode:(e,n=o.Writer.create())=>(""!==e.address&&n.uint32(10).string(e.address),void 0!==e.pagination&&r.l.encode(e.pagination,n.uint32(18).fork()).ldelim(),n),decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i=v();for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:i.address=a.string();break;case 2:i.pagination=r.l.decode(a,a.uint32());break;default:a.skipType(7&e)}}return i},fromPartial(e){var n;const a=v();return a.address=null!==(n=e.address)&&void 0!==n?n:"",a.pagination=void 0!==e.pagination&&null!==e.pagination?r.l.fromPartial(e.pagination):void 0,a}};function b(){return{balances:[],pagination:r.f.fromPartial({})}}const h={encode(e,n=o.Writer.create()){for(const a of e.balances)s.sN.encode(a,n.uint32(10).fork()).ldelim();return void 0!==e.pagination&&r.f.encode(e.pagination,n.uint32(18).fork()).ldelim(),n},decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i=b();for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:i.balances.push(s.sN.decode(a,a.uint32()));break;case 2:i.pagination=r.f.decode(a,a.uint32());break;default:a.skipType(7&e)}}return i},fromPartial(e){var n;const a=b();return a.balances=(null===(n=e.balances)||void 0===n?void 0:n.map((e=>s.sN.fromPartial(e))))||[],a.pagination=void 0!==e.pagination&&null!==e.pagination?r.f.fromPartial(e.pagination):void 0,a}};function k(){return{pagination:r.l.fromPartial({})}}const P={encode:(e,n=o.Writer.create())=>(void 0!==e.pagination&&r.l.encode(e.pagination,n.uint32(10).fork()).ldelim(),n),decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i=k();for(;a.pos<t;){const e=a.uint32();e>>>3==1?i.pagination=r.l.decode(a,a.uint32()):a.skipType(7&e)}return i},fromPartial(e){const n=k();return n.pagination=void 0!==e.pagination&&null!==e.pagination?r.l.fromPartial(e.pagination):void 0,n}};function w(){return{supply:[],pagination:r.f.fromPartial({})}}const R={encode(e,n=o.Writer.create()){for(const a of e.supply)s.sN.encode(a,n.uint32(10).fork()).ldelim();return void 0!==e.pagination&&r.f.encode(e.pagination,n.uint32(18).fork()).ldelim(),n},decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i=w();for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:i.supply.push(s.sN.decode(a,a.uint32()));break;case 2:i.pagination=r.f.decode(a,a.uint32());break;default:a.skipType(7&e)}}return i},fromPartial(e){var n;const a=w();return a.supply=(null===(n=e.supply)||void 0===n?void 0:n.map((e=>s.sN.fromPartial(e))))||[],a.pagination=void 0!==e.pagination&&null!==e.pagination?r.f.fromPartial(e.pagination):void 0,a}},y={encode:(e,n=o.Writer.create())=>(""!==e.denom&&n.uint32(10).string(e.denom),n),decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i={denom:""};for(;a.pos<t;){const e=a.uint32();e>>>3==1?i.denom=a.string():a.skipType(7&e)}return i},fromPartial(e){var n;const a={denom:""};return a.denom=null!==(n=e.denom)&&void 0!==n?n:"",a}},T={encode:(e,n=o.Writer.create())=>(void 0!==e.amount&&s.sN.encode(e.amount,n.uint32(10).fork()).ldelim(),n),decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i={amount:void 0};for(;a.pos<t;){const e=a.uint32();e>>>3==1?i.amount=s.sN.decode(a,a.uint32()):a.skipType(7&e)}return i},fromPartial(e){const n={amount:void 0};return n.amount=void 0!==e.amount&&null!==e.amount?s.sN.fromPartial(e.amount):void 0,n}},S={encode:(e,n=o.Writer.create())=>n,decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;for(;a.pos<t;){const e=a.uint32();a.skipType(7&e)}return{}},fromPartial:e=>({})};function W(){return{params:d.SP.fromPartial({})}}const N={encode:(e,n=o.Writer.create())=>(void 0!==e.params&&d.SP.encode(e.params,n.uint32(10).fork()).ldelim(),n),decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i=W();for(;a.pos<t;){const e=a.uint32();e>>>3==1?i.params=d.SP.decode(a,a.uint32()):a.skipType(7&e)}return i},fromPartial(e){const n=W();return n.params=void 0!==e.params&&null!==e.params?d.SP.fromPartial(e.params):void 0,n}};function O(){return{pagination:r.l.fromPartial({})}}const B={encode:(e,n=o.Writer.create())=>(void 0!==e.pagination&&r.l.encode(e.pagination,n.uint32(10).fork()).ldelim(),n),decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i=O();for(;a.pos<t;){const e=a.uint32();e>>>3==1?i.pagination=r.l.decode(a,a.uint32()):a.skipType(7&e)}return i},fromPartial(e){const n=O();return n.pagination=void 0!==e.pagination&&null!==e.pagination?r.l.fromPartial(e.pagination):void 0,n}};function M(){return{metadatas:[],pagination:r.f.fromPartial({})}}const Q={encode(e,n=o.Writer.create()){for(const a of e.metadatas)d.SF.encode(a,n.uint32(10).fork()).ldelim();return void 0!==e.pagination&&r.f.encode(e.pagination,n.uint32(18).fork()).ldelim(),n},decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i=M();for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:i.metadatas.push(d.SF.decode(a,a.uint32()));break;case 2:i.pagination=r.f.decode(a,a.uint32());break;default:a.skipType(7&e)}}return i},fromPartial(e){var n;const a=M();return a.metadatas=(null===(n=e.metadatas)||void 0===n?void 0:n.map((e=>d.SF.fromPartial(e))))||[],a.pagination=void 0!==e.pagination&&null!==e.pagination?r.f.fromPartial(e.pagination):void 0,a}},q={encode:(e,n=o.Writer.create())=>(""!==e.denom&&n.uint32(10).string(e.denom),n),decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i={denom:""};for(;a.pos<t;){const e=a.uint32();e>>>3==1?i.denom=a.string():a.skipType(7&e)}return i},fromPartial(e){var n;const a={denom:""};return a.denom=null!==(n=e.denom)&&void 0!==n?n:"",a}};function _(){return{metadata:d.SF.fromPartial({})}}const F={encode:(e,n=o.Writer.create())=>(void 0!==e.metadata&&d.SF.encode(e.metadata,n.uint32(10).fork()).ldelim(),n),decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i=_();for(;a.pos<t;){const e=a.uint32();e>>>3==1?i.metadata=d.SF.decode(a,a.uint32()):a.skipType(7&e)}return i},fromPartial(e){const n=_();return n.metadata=void 0!==e.metadata&&null!==e.metadata?d.SF.fromPartial(e.metadata):void 0,n}};function C(){return{denom:"",pagination:r.l.fromPartial({})}}const D={encode:(e,n=o.Writer.create())=>(""!==e.denom&&n.uint32(10).string(e.denom),void 0!==e.pagination&&r.l.encode(e.pagination,n.uint32(18).fork()).ldelim(),n),decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i=C();for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:i.denom=a.string();break;case 2:i.pagination=r.l.decode(a,a.uint32());break;default:a.skipType(7&e)}}return i},fromPartial(e){var n;const a=C();return a.denom=null!==(n=e.denom)&&void 0!==n?n:"",a.pagination=void 0!==e.pagination&&null!==e.pagination?r.l.fromPartial(e.pagination):void 0,a}},x={encode:(e,n=o.Writer.create())=>(""!==e.address&&n.uint32(10).string(e.address),void 0!==e.balance&&s.sN.encode(e.balance,n.uint32(18).fork()).ldelim(),n),decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i={address:"",balance:void 0};for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:i.address=a.string();break;case 2:i.balance=s.sN.decode(a,a.uint32());break;default:a.skipType(7&e)}}return i},fromPartial(e){var n;const a={address:"",balance:void 0};return a.address=null!==(n=e.address)&&void 0!==n?n:"",a.balance=void 0!==e.balance&&null!==e.balance?s.sN.fromPartial(e.balance):void 0,a}};function A(){return{denomOwners:[],pagination:r.f.fromPartial({})}}const E={encode(e,n=o.Writer.create()){for(const a of e.denomOwners)x.encode(a,n.uint32(10).fork()).ldelim();return void 0!==e.pagination&&r.f.encode(e.pagination,n.uint32(18).fork()).ldelim(),n},decode(e,n){const a=e instanceof o.Reader?e:new o.Reader(e);let t=void 0===n?a.len:a.pos+n;const i=A();for(;a.pos<t;){const e=a.uint32();switch(e>>>3){case 1:i.denomOwners.push(x.decode(a,a.uint32()));break;case 2:i.pagination=r.f.decode(a,a.uint32());break;default:a.skipType(7&e)}}return i},fromPartial(e){var n;const a=A();return a.denomOwners=(null===(n=e.denomOwners)||void 0===n?void 0:n.map((e=>x.fromPartial(e))))||[],a.pagination=void 0!==e.pagination&&null!==e.pagination?r.f.fromPartial(e.pagination):void 0,a}};class I{constructor(e){(0,t.Z)(this,"rpc",void 0),this.rpc=e,this.balance=this.balance.bind(this),this.allBalances=this.allBalances.bind(this),this.spendableBalances=this.spendableBalances.bind(this),this.totalSupply=this.totalSupply.bind(this),this.supplyOf=this.supplyOf.bind(this),this.params=this.params.bind(this),this.denomMetadata=this.denomMetadata.bind(this),this.denomsMetadata=this.denomsMetadata.bind(this),this.denomOwners=this.denomOwners.bind(this)}balance(e){const n=c.encode(e).finish();return this.rpc.request("cosmos.bank.v1beta1.Query","Balance",n).then((e=>l.decode(new o.Reader(e))))}allBalances(e){const n=u.encode(e).finish();return this.rpc.request("cosmos.bank.v1beta1.Query","AllBalances",n).then((e=>m.decode(new o.Reader(e))))}spendableBalances(e){const n=g.encode(e).finish();return this.rpc.request("cosmos.bank.v1beta1.Query","SpendableBalances",n).then((e=>h.decode(new o.Reader(e))))}totalSupply(e={pagination:void 0}){const n=P.encode(e).finish();return this.rpc.request("cosmos.bank.v1beta1.Query","TotalSupply",n).then((e=>R.decode(new o.Reader(e))))}supplyOf(e){const n=y.encode(e).finish();return this.rpc.request("cosmos.bank.v1beta1.Query","SupplyOf",n).then((e=>T.decode(new o.Reader(e))))}params(e={}){const n=S.encode(e).finish();return this.rpc.request("cosmos.bank.v1beta1.Query","Params",n).then((e=>N.decode(new o.Reader(e))))}denomMetadata(e){const n=q.encode(e).finish();return this.rpc.request("cosmos.bank.v1beta1.Query","DenomMetadata",n).then((e=>F.decode(new o.Reader(e))))}denomsMetadata(e={pagination:void 0}){const n=B.encode(e).finish();return this.rpc.request("cosmos.bank.v1beta1.Query","DenomsMetadata",n).then((e=>Q.decode(new o.Reader(e))))}denomOwners(e){const n=D.encode(e).finish();return this.rpc.request("cosmos.bank.v1beta1.Query","DenomOwners",n).then((e=>E.decode(new o.Reader(e))))}}const Z=e=>{const n=(0,i.createProtobufRpcClient)(e),a=new I(n);return{balance:e=>a.balance(e),allBalances:e=>a.allBalances(e),spendableBalances:e=>a.spendableBalances(e),totalSupply:e=>a.totalSupply(e),supplyOf:e=>a.supplyOf(e),params:e=>a.params(e),denomMetadata:e=>a.denomMetadata(e),denomsMetadata:e=>a.denomsMetadata(e),denomOwners:e=>a.denomOwners(e)}}}}]);