webpackJsonp([2],{"0pyO":function(t,e,i){"use strict";var n=i("bOdI"),s=i.n(n),r=(i("k3b4"),i("+2ln")),a={name:"tree",props:{treeList:Array},data:function(){return{show:!1}},components:s()({},r.a.name,r.a),methods:{toggle:function(){this.show=!this.show}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.treeList,function(e){return i("div",{key:e.id,staticClass:"tree-item",on:{click:function(e){return e.stopPropagation(),t.toggle(e)}}},[i("div",{staticClass:"brand",class:{"child-item":2==e.level}},[i("p",[t._v(t._s(e.name))]),t._v(" "),i("p",{staticClass:"number"},[i("span",{class:{amount:3==e.level}},[t._v(t._s(e.number))]),t._v(" "),1==e.level?i("span",{staticClass:"status",class:{unfold:t.show}},[i("van-icon",{attrs:{name:"arrow-down"}})],1):t._e(),t._v(" "),e.children&&1!=e.level&&!t.show?i("span",{staticClass:"status iconfont icon-jia"}):t._e(),t._v(" "),e.children&&1!=e.level&&t.show?i("span",{staticClass:"status iconfont icon-jian"}):t._e()])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[i("tree",{attrs:{treeList:e.children}})],1)])}),0)},staticRenderFns:[]};var c=i("VU/8")(a,o,!1,function(t){i("LXX4")},"data-v-035649ae",null);e.a=c.exports},"6gXq":function(t,e){},"86U2":function(t,e,i){"use strict";var n,s=i("o69Z"),r=i("3X7g"),a=i("JOBW");var o=i("n8HW"),c=i("vQ9b"),l=i("RP/J"),h=i("1SJR"),d=i("5Fm4"),u=i("V+2B"),f=i("Pen3"),v=Object(s.b)("tab"),p=v[0],b=v[1],m=p({props:{dot:Boolean,type:String,info:[Number,String],color:String,title:String,isActive:Boolean,ellipsis:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String,swipeThreshold:Number},computed:{style:function(){var t={},e=this.color,i=this.isActive,n="card"===this.type;e&&n&&(t.borderColor=e,this.disabled||(i?t.backgroundColor=e:t.color=e));var s=i?this.activeColor:this.inactiveColor;return s&&(t.color=s),this.scrollable&&this.ellipsis&&(t.flexBasis=88/this.swipeThreshold+"%"),t}},methods:{onClick:function(){this.$emit("click")}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:[b({active:this.isActive,disabled:this.disabled,complete:!this.ellipsis}),{"van-ellipsis":this.ellipsis}],style:this.style,on:{click:this.onClick}},[t("span",{class:b("text")},[this.slots()||this.title,t(f.a,{attrs:{dot:this.dot,info:this.info}})])])}}),g=i("RfZZ"),x=i("vwLT"),y=Object(s.b)("tabs"),S=y[0],O=y[1],w=S({mixins:[x.a],props:{count:Number,duration:Number,animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,e=this.deltaX,i=this.currentIndex;"horizontal"===t&&this.offsetX>=50&&(e>0&&0!==i?this.$emit("change",i-1):e<0&&i!==this.count-1&&this.$emit("change",i+1))},genChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:O("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){return(0,arguments[0])("div",{class:O("content",{animated:this.animated}),on:Object(g.a)({},this.listeners)},[this.genChildren()])}}),_=Object(s.b)("sticky"),C=_[0],k=_[1],j=C({mixins:[Object(d.a)(function(t){this.scroller||(this.scroller=Object(a.c)(this.$el)),t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()})],props:{zIndex:Number,container:null,offsetTop:{type:Number,default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{style:function(){if(this.fixed){var t={};return Object(s.d)(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTop&&this.fixed&&(t.top=this.offsetTop+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},methods:{onScroll:function(){var t=this;this.height=this.$el.offsetHeight;var e=this.container,i=this.offsetTop,n=Object(a.d)(window),s=Object(a.a)(this.$el),r=function(){t.$emit("scroll",{scrollTop:n,isFixed:t.fixed})};if(e){var o=s+e.offsetHeight;if(n+i+this.height>o){var c=this.height+n-o;return c<this.height?(this.fixed=!0,this.transform=-(c+i)):this.fixed=!1,void r()}}n+i>s?(this.fixed=!0,this.transform=0):this.fixed=!1,r()}},render:function(){var t=arguments[0],e=this.fixed;return t("div",{style:{height:e?this.height+"px":null}},[t("div",{class:k({fixed:e}),style:this.style},[this.slots()])])}}),I=Object(s.b)("tabs"),$=I[0],T=I[1];e.a=$({mixins:[Object(h.b)("vanTabs"),Object(d.a)(function(t){t(window,"resize",this.resize,!0),this.scrollspy&&t(window,"scroll",this.onScroll,!0)})],model:{prop:"active"},props:{color:String,sticky:Boolean,animated:Boolean,swipeable:Boolean,scrollspy:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},border:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},duration:{type:Number,default:.3},offsetTop:{type:Number,default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:Number,default:4}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName},scrollOffset:function(){return this.sticky?this.offsetTop+this.tabHeight:0}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.currentName||this.active),this.setLine(),this.$nextTick(function(){t.scrollIntoView(!0)})},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&!this.scrollspy&&Object(a.g)(Math.ceil(Object(a.a)(this.$el)-this.offsetTop))},scrollspy:function(t){t?Object(l.b)(window,"scroll",this.onScroll,!0):Object(l.a)(window,"scroll",this.onScroll)}},mounted:function(){this.onShow()},activated:function(){this.onShow(),this.setLine()},methods:{resize:function(){this.setLine()},onShow:function(){var t=this;this.$nextTick(function(){t.inited=!0,t.tabHeight=Object(a.e)(t.$refs.wrap),t.scrollIntoView(!0)})},setLine:function(){var t=this,e=this.inited;this.$nextTick(function(){var i=t.$refs.titles;if(i&&i[t.currentIndex]&&"line"===t.type&&!Object(c.a)(t.$el)){var n=i[t.currentIndex].$el,r=t.lineWidth,a=t.lineHeight,o=Object(s.d)(r)?r:n.offsetWidth/2,l=n.offsetLeft+n.offsetWidth/2,h={width:Object(s.a)(o),backgroundColor:t.color,transform:"translateX("+l+"px) translateX(-50%)"};if(e&&(h.transitionDuration=t.duration+"s"),Object(s.d)(a)){var d=Object(s.a)(a);h.height=d,h.borderRadius=d}t.lineStyle=h}})},setCurrentIndexByName:function(t){var e=this.children.filter(function(e){return e.computedName===t}),i=(this.children[0]||{}).index||0;this.setCurrentIndex(e.length?e[0].index:i)},setCurrentIndex:function(t){if(t=this.findAvailableTab(t),Object(s.d)(t)&&t!==this.currentIndex){var e=null!==this.currentIndex;this.currentIndex=t,this.$emit("input",this.currentName),e&&this.$emit("change",this.currentName,this.children[t].title)}},findAvailableTab:function(t){for(var e=t<this.currentIndex?-1:1;t>=0&&t<this.children.length;){if(!this.children[t].disabled)return t;t+=e}},onClick:function(t){var e=this.children[t],i=e.title,n=e.disabled,s=e.computedName;n?this.$emit("disabled",s,i):(this.setCurrentIndex(t),this.scrollToCurrentContent(),this.$emit("click",s,i))},scrollIntoView:function(t){var e=this.$refs.titles;if(this.scrollable&&e&&e[this.currentIndex]){var i=this.$refs.nav,s=e[this.currentIndex].$el;!function(t,e,i){Object(r.a)(n);var s=0,a=t.scrollLeft,o=0===i?1:Math.round(1e3*i/16);!function i(){t.scrollLeft+=(e-a)/o,++s<o&&(n=Object(r.c)(i))}()}(i,s.offsetLeft-(i.offsetWidth-s.offsetWidth)/2,t?0:this.duration)}},onSticktScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)},scrollToCurrentContent:function(){var t=this;if(this.scrollspy){this.clickedScroll=!0;var e=this.children[this.currentIndex],i=e&&e.$el;if(i)!function(t,e,i){var n=Object(a.b)(),s=n<t,o=0===e?1:Math.round(1e3*e/16),c=(t-n)/o;!function e(){n+=c,(s&&n>t||!s&&n<t)&&(n=t),Object(a.g)(n),s&&n<t||!s&&n>t?Object(r.c)(e):i&&i()}()}(Math.ceil(Object(a.a)(i))-this.scrollOffset,this.duration,function(){t.clickedScroll=!1})}},onScroll:function(){if(this.scrollspy&&!this.clickedScroll){var t=this.getCurrentIndexOnScroll();this.setCurrentIndex(t)}},getCurrentIndexOnScroll:function(){for(var t=this.children,e=0;e<t.length;e++){if(Object(a.f)(t[e].$el)>this.scrollOffset)return 0===e?0:e-1}return t.length-1}},render:function(){var t,e=this,i=arguments[0],n=this.type,s=this.ellipsis,r=this.animated,a=this.scrollable,c=this.children.map(function(t,r){return i(m,{ref:"titles",refInFor:!0,attrs:{type:n,dot:t.dot,info:t.info,title:t.title,color:e.color,isActive:r===e.currentIndex,ellipsis:s,disabled:t.disabled,scrollable:a,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,swipeThreshold:e.swipeThreshold},style:t.titleStyle,scopedSlots:{default:function(){return t.slots("title")}},on:{click:function(){e.onClick(r),Object(o.b)(t.$router,t)}}})}),l=i("div",{ref:"wrap",class:[T("wrap",{scrollable:a}),(t={},t[u.g]="line"===n&&this.border,t)]},[i("div",{ref:"nav",attrs:{role:"tablist"},class:T("nav",[n]),style:this.navStyle},[this.slots("nav-left"),c,"line"===n&&i("div",{class:T("line"),style:this.lineStyle}),this.slots("nav-right")])]);return i("div",{class:T([n])},[this.sticky?i(j,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onSticktScroll}},[l]):l,i(w,{attrs:{count:this.children.length,animated:r,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}})},Gcqb:function(t,e){},LXX4:function(t,e){},OIh9:function(t,e,i){"use strict";var n=i("RfZZ"),s=i("o69Z"),r=i("1SJR"),a=i("n8HW"),o=Object(s.b)("tab"),c=o[0],l=o[1];e.a=c({mixins:[Object(r.a)("vanTabs")],props:Object(n.a)({},a.c,{dot:Boolean,info:[Number,String],name:[Number,String],title:String,titleStyle:null,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){return Object(s.d)(this.name)?this.name:this.index},isActive:function(){return this.computedName===this.parent.currentName}},watch:{"parent.currentIndex":function(){this.inited=this.inited||this.isActive},title:function(){this.parent.setLine()},inited:function(t){var e=this;this.parent.lazyRender&&t&&this.$nextTick(function(){e.parent.$emit("rendered",e.computedName,e.title)})}},render:function(t){var e=this.slots,i=this.parent,n=this.isActive,s=this.inited||i.scrollspy||!i.lazyRender,r=i.scrollspy||n,a=s?e():t();return i.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!n},class:l("pane-wrapper",{inactive:!n})},[t("div",{class:l("pane")},[a])]):t("div",{directives:[{name:"show",value:r}],attrs:{role:"tabpanel"},class:l("pane")},[a])}})},S6Ip:function(t,e){},V3MS:function(t,e){},aWnr:function(t,e,i){"use strict";i.d(e,"b",function(){return l}),i.d(e,"c",function(){return h}),i.d(e,"a",function(){return d});var n=i("woOf"),s=i.n(n),r=i("vLgD"),a=i("mw3O"),o=i.n(a),c=i("Dod7"),l=function(t){return Object(r.a)({method:"post",url:c.a,data:o.a.stringify(s()(Object(c.c)(),t))})},h=function(t){return Object(r.a)({method:"post",url:c.a,data:o.a.stringify(s()(Object(c.c)(),t))})},d=function(t){return Object(r.a)({method:"post",url:c.a,data:o.a.stringify(s()(Object(c.c)(),t))})}},bFBW:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=i("Xxa5"),r=i.n(s),a=i("exGp"),o=i.n(a),c=i("bOdI"),l=i.n(c),h=(i("n90r"),i("dJne")),d=(i("iQ6B"),i("H6W6")),u=(i("jAcA"),i("86U2")),f=(i("yIEv"),i("OIh9")),v=i("Gu7T"),p=i.n(v),b=(i("OWWB"),i("1fWZ")),m=(i("9++/"),i("QhyB")),g=i("aWnr"),x=i("Dod7"),y={name:"",data:function(){return{loading:!1,finished:!1,page:1,pagesize:10,list:[]}},props:{search:{type:String,default:""}},components:(n={},l()(n,m.a.name,m.a),l()(n,b.a.name,b.a),n),watch:{search:function(){this.page=1,this.list=[],this.onLoad()}},methods:{onLoad:function(){var t=this;return o()(r.a.mark(function e(){var i,n,s,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Object(x.b)(),i={flag:"store_stock_list",search:t.search,page:t.page,pagesize:t.pagesize},e.next=5,Object(g.b)(i);case 5:n=e.sent,"SUCC"===(s=n.data).recode&&(t.page++,(a=t.list).push.apply(a,p()(s.data))),t.loading=!1,s.data.length||(t.finished=!0),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),t.loading=!1,t.finished=!0,console.log(e.t0);case 17:case"end":return e.stop()}},e,t,[[0,12]])}))()},goDetail:function(t){this.$router.push({name:"storeDetail",params:{id:t}})}}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"store"},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(e){return i("van-cell",{key:e.id,attrs:{"is-link":"",center:""},on:{click:function(i){return t.goDetail(e.id)}}},[i("template",{slot:"title"},[i("div",{staticClass:"storename"},[t._v(t._s(e.store_name))]),t._v(" "),i("div",{staticClass:"coding"},[t._v("编码："+t._s(e.store_number))]),t._v(" "),i("div",{staticClass:"total-box"},[i("div",{staticClass:"item"},[t._v("总SKU："+t._s(e.sku_number))]),t._v(" "),i("div",{staticClass:"item"},[t._v("总库存："+t._s(e.stock_number))])])])],2)}),1)],1)},staticRenderFns:[]};var O,w=i("VU/8")(y,S,!1,function(t){i("V3MS")},"data-v-befb07de",null).exports,_=i("0pyO"),C=i("QstE"),k={name:"inventoryCheck",data:function(){return{search:"",placeholder:"输入门店名称、门店编码进行查询",search2:"",placeholder2:"输入大库名称",active:0,treeList:[],total:""}},components:(O={},l()(O,f.a.name,f.a),l()(O,u.a.name,u.a),l()(O,d.a.name,d.a),l()(O,h.a.name,h.a),l()(O,"Search",C.a),l()(O,"StoreList",w),l()(O,"TreeMeun",_.a),O),watch:{active:function(){1==this.active&&this._getDKStock()}},methods:{handleSearch:function(t){0==this.active?this.search=t:1==this.active&&(this.search2=t,this._getDKStock())},_getDKStock:function(){var t=this;return o()(r.a.mark(function e(){var i,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Object(x.b)(),e.next=4,Object(g.a)({flag:"daku_stock",search:t.search2});case 4:i=e.sent,n=i.data,i.total,"SUCC"===n.recode&&(t.treeList=n.data,t.total=n.total),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}},e,t,[[0,10]])}))()}}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-tabs",{attrs:{sticky:"",color:"#FF6600","title-active-color":"#FF6600"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{attrs:{title:"门店库存"}},[i("search",{attrs:{placeholder:t.placeholder},on:{handleSearch:t.handleSearch}}),t._v(" "),i("store-list",{attrs:{search:t.search}})],1),t._v(" "),i("van-tab",{attrs:{title:"大库库存"}},[i("search",{attrs:{placeholder:t.placeholder2},on:{handleSearch:t.handleSearch}}),t._v(" "),i("div",{staticClass:"prod-title"},[i("p",[t._v("品牌/产品线/型号")]),t._v(" "),i("p",[t._v("库存数量")])]),t._v(" "),i("tree-meun",{attrs:{treeList:t.treeList}}),t._v(" "),i("div",{staticClass:"prod-sum"},[i("p",[t._v("总计")]),t._v(" "),i("p",[t._v(t._s(t.total))])])],1)],1)],1)},staticRenderFns:[]};var I=i("VU/8")(k,j,!1,function(t){i("Gcqb")},"data-v-b2640f78",null);e.default=I.exports},bFPQ:function(t,e){},jAcA:function(t,e,i){"use strict";var n=i("nsZj"),s=(i.n(n),i("T2s0")),r=(i.n(s),i("S6Ip")),a=(i.n(r),i("bFPQ"));i.n(a)},yIEv:function(t,e,i){"use strict";var n=i("nsZj"),s=(i.n(n),i("6gXq"));i.n(s)}});