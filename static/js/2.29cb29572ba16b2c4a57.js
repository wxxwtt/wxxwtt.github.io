webpackJsonp([2],{"0pyO":function(t,e,i){"use strict";var n=i("bOdI"),s=i.n(n),r=(i("k3b4"),i("+2ln")),o={name:"tree",props:{treeList:Array},data:function(){return{show:!1}},components:s()({},r.a.name,r.a),methods:{toggle:function(){this.show=!this.show}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.treeList,function(e){return i("div",{key:e.id,staticClass:"tree-item",on:{click:function(e){return e.stopPropagation(),t.toggle(e)}}},[i("div",{staticClass:"brand",class:{"child-item":2==e.level}},[i("p",[t._v(t._s(e.name))]),t._v(" "),i("p",{staticClass:"number"},[i("span",{class:{amount:3==e.level}},[t._v(t._s(e.number))]),t._v(" "),1==e.level?i("span",{staticClass:"status",class:{unfold:t.show}},[i("van-icon",{attrs:{name:"arrow-down"}})],1):t._e(),t._v(" "),e.children&&1!=e.level&&!t.show?i("span",{staticClass:"status iconfont icon-jia"}):t._e(),t._v(" "),e.children&&1!=e.level&&t.show?i("span",{staticClass:"status iconfont icon-jian"}):t._e()])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[i("tree",{attrs:{treeList:e.children}})],1)])}),0)},staticRenderFns:[]};var l=i("VU/8")(o,a,!1,function(t){i("LXX4")},"data-v-035649ae",null);e.a=l.exports},"6gXq":function(t,e){},"86U2":function(t,e,i){"use strict";var n,s=i("o69Z"),r=i("3X7g"),o=i("JOBW");var a=i("n8HW"),l=i("vQ9b"),c=i("RP/J"),h=i("1SJR"),d=i("5Fm4"),u=i("V+2B"),f=i("Pen3"),v=Object(s.b)("tab"),p=v[0],m=v[1],b=p({props:{dot:Boolean,type:String,info:[Number,String],color:String,title:String,isActive:Boolean,ellipsis:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String,swipeThreshold:Number},computed:{style:function(){var t={},e=this.color,i=this.isActive,n="card"===this.type;e&&n&&(t.borderColor=e,this.disabled||(i?t.backgroundColor=e:t.color=e));var s=i?this.activeColor:this.inactiveColor;return s&&(t.color=s),this.scrollable&&this.ellipsis&&(t.flexBasis=88/this.swipeThreshold+"%"),t}},methods:{onClick:function(){this.$emit("click")}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:[m({active:this.isActive,disabled:this.disabled,complete:!this.ellipsis}),{"van-ellipsis":this.ellipsis}],style:this.style,on:{click:this.onClick}},[t("span",{class:m("text")},[this.slots()||this.title,t(f.a,{attrs:{dot:this.dot,info:this.info}})])])}}),x=i("RfZZ"),g=i("vwLT"),y=Object(s.b)("tabs"),w=y[0],S=y[1],C=w({mixins:[g.a],props:{count:Number,duration:Number,animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,e=this.deltaX,i=this.currentIndex;"horizontal"===t&&this.offsetX>=50&&(e>0&&0!==i?this.$emit("change",i-1):e<0&&i!==this.count-1&&this.$emit("change",i+1))},genChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:S("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){return(0,arguments[0])("div",{class:S("content",{animated:this.animated}),on:Object(x.a)({},this.listeners)},[this.genChildren()])}}),O=Object(s.b)("sticky"),I=O[0],j=O[1],k=I({mixins:[Object(d.a)(function(t){this.scroller||(this.scroller=Object(o.c)(this.$el)),t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()})],props:{zIndex:Number,container:null,offsetTop:{type:Number,default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{style:function(){if(this.fixed){var t={};return Object(s.d)(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTop&&this.fixed&&(t.top=this.offsetTop+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},methods:{onScroll:function(){var t=this;this.height=this.$el.offsetHeight;var e=this.container,i=this.offsetTop,n=Object(o.d)(window),s=Object(o.a)(this.$el),r=function(){t.$emit("scroll",{scrollTop:n,isFixed:t.fixed})};if(e){var a=s+e.offsetHeight;if(n+i+this.height>a){var l=this.height+n-a;return l<this.height?(this.fixed=!0,this.transform=-(l+i)):this.fixed=!1,void r()}}n+i>s?(this.fixed=!0,this.transform=0):this.fixed=!1,r()}},render:function(){var t=arguments[0],e=this.fixed;return t("div",{style:{height:e?this.height+"px":null}},[t("div",{class:j({fixed:e}),style:this.style},[this.slots()])])}}),_=Object(s.b)("tabs"),T=_[0],$=_[1];e.a=T({mixins:[Object(h.b)("vanTabs"),Object(d.a)(function(t){t(window,"resize",this.resize,!0),this.scrollspy&&t(window,"scroll",this.onScroll,!0)})],model:{prop:"active"},props:{color:String,sticky:Boolean,animated:Boolean,swipeable:Boolean,scrollspy:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},border:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},duration:{type:Number,default:.3},offsetTop:{type:Number,default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:Number,default:4}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName},scrollOffset:function(){return this.sticky?this.offsetTop+this.tabHeight:0}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.currentName||this.active),this.setLine(),this.$nextTick(function(){t.scrollIntoView(!0)})},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&!this.scrollspy&&Object(o.g)(Math.ceil(Object(o.a)(this.$el)-this.offsetTop))},scrollspy:function(t){t?Object(c.b)(window,"scroll",this.onScroll,!0):Object(c.a)(window,"scroll",this.onScroll)}},mounted:function(){this.onShow()},activated:function(){this.onShow(),this.setLine()},methods:{resize:function(){this.setLine()},onShow:function(){var t=this;this.$nextTick(function(){t.inited=!0,t.tabHeight=Object(o.e)(t.$refs.wrap),t.scrollIntoView(!0)})},setLine:function(){var t=this,e=this.inited;this.$nextTick(function(){var i=t.$refs.titles;if(i&&i[t.currentIndex]&&"line"===t.type&&!Object(l.a)(t.$el)){var n=i[t.currentIndex].$el,r=t.lineWidth,o=t.lineHeight,a=Object(s.d)(r)?r:n.offsetWidth/2,c=n.offsetLeft+n.offsetWidth/2,h={width:Object(s.a)(a),backgroundColor:t.color,transform:"translateX("+c+"px) translateX(-50%)"};if(e&&(h.transitionDuration=t.duration+"s"),Object(s.d)(o)){var d=Object(s.a)(o);h.height=d,h.borderRadius=d}t.lineStyle=h}})},setCurrentIndexByName:function(t){var e=this.children.filter(function(e){return e.computedName===t}),i=(this.children[0]||{}).index||0;this.setCurrentIndex(e.length?e[0].index:i)},setCurrentIndex:function(t){if(t=this.findAvailableTab(t),Object(s.d)(t)&&t!==this.currentIndex){var e=null!==this.currentIndex;this.currentIndex=t,this.$emit("input",this.currentName),e&&this.$emit("change",this.currentName,this.children[t].title)}},findAvailableTab:function(t){for(var e=t<this.currentIndex?-1:1;t>=0&&t<this.children.length;){if(!this.children[t].disabled)return t;t+=e}},onClick:function(t){var e=this.children[t],i=e.title,n=e.disabled,s=e.computedName;n?this.$emit("disabled",s,i):(this.setCurrentIndex(t),this.scrollToCurrentContent(),this.$emit("click",s,i))},scrollIntoView:function(t){var e=this.$refs.titles;if(this.scrollable&&e&&e[this.currentIndex]){var i=this.$refs.nav,s=e[this.currentIndex].$el;!function(t,e,i){Object(r.a)(n);var s=0,o=t.scrollLeft,a=0===i?1:Math.round(1e3*i/16);!function i(){t.scrollLeft+=(e-o)/a,++s<a&&(n=Object(r.c)(i))}()}(i,s.offsetLeft-(i.offsetWidth-s.offsetWidth)/2,t?0:this.duration)}},onSticktScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)},scrollToCurrentContent:function(){var t=this;if(this.scrollspy){this.clickedScroll=!0;var e=this.children[this.currentIndex],i=e&&e.$el;if(i)!function(t,e,i){var n=Object(o.b)(),s=n<t,a=0===e?1:Math.round(1e3*e/16),l=(t-n)/a;!function e(){n+=l,(s&&n>t||!s&&n<t)&&(n=t),Object(o.g)(n),s&&n<t||!s&&n>t?Object(r.c)(e):i&&i()}()}(Math.ceil(Object(o.a)(i))-this.scrollOffset,this.duration,function(){t.clickedScroll=!1})}},onScroll:function(){if(this.scrollspy&&!this.clickedScroll){var t=this.getCurrentIndexOnScroll();this.setCurrentIndex(t)}},getCurrentIndexOnScroll:function(){for(var t=this.children,e=0;e<t.length;e++){if(Object(o.f)(t[e].$el)>this.scrollOffset)return 0===e?0:e-1}return t.length-1}},render:function(){var t,e=this,i=arguments[0],n=this.type,s=this.ellipsis,r=this.animated,o=this.scrollable,l=this.children.map(function(t,r){return i(b,{ref:"titles",refInFor:!0,attrs:{type:n,dot:t.dot,info:t.info,title:t.title,color:e.color,isActive:r===e.currentIndex,ellipsis:s,disabled:t.disabled,scrollable:o,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,swipeThreshold:e.swipeThreshold},style:t.titleStyle,scopedSlots:{default:function(){return t.slots("title")}},on:{click:function(){e.onClick(r),Object(a.b)(t.$router,t)}}})}),c=i("div",{ref:"wrap",class:[$("wrap",{scrollable:o}),(t={},t[u.e]="line"===n&&this.border,t)]},[i("div",{ref:"nav",attrs:{role:"tablist"},class:$("nav",[n]),style:this.navStyle},[this.slots("nav-left"),l,"line"===n&&i("div",{class:$("line"),style:this.lineStyle}),this.slots("nav-right")])]);return i("div",{class:$([n])},[this.sticky?i(k,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onSticktScroll}},[c]):c,i(C,{attrs:{count:this.children.length,animated:r,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}})},LXX4:function(t,e){},OIh9:function(t,e,i){"use strict";var n=i("RfZZ"),s=i("o69Z"),r=i("1SJR"),o=i("n8HW"),a=Object(s.b)("tab"),l=a[0],c=a[1];e.a=l({mixins:[Object(r.a)("vanTabs")],props:Object(n.a)({},o.c,{dot:Boolean,info:[Number,String],name:[Number,String],title:String,titleStyle:null,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){return Object(s.d)(this.name)?this.name:this.index},isActive:function(){return this.computedName===this.parent.currentName}},watch:{"parent.currentIndex":function(){this.inited=this.inited||this.isActive},title:function(){this.parent.setLine()},inited:function(t){var e=this;this.parent.lazyRender&&t&&this.$nextTick(function(){e.parent.$emit("rendered",e.computedName,e.title)})}},render:function(t){var e=this.slots,i=this.parent,n=this.isActive,s=this.inited||i.scrollspy||!i.lazyRender,r=i.scrollspy||n,o=s?e():t();return i.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!n},class:c("pane-wrapper",{inactive:!n})},[t("div",{class:c("pane")},[o])]):t("div",{directives:[{name:"show",value:r}],attrs:{role:"tabpanel"},class:c("pane")},[o])}})},S6Ip:function(t,e){},bFBW:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=i("bOdI"),r=i.n(s),o=(i("n90r"),i("dJne")),a=(i("iQ6B"),i("H6W6")),l=(i("4yKu"),i("wolx")),c=(i("jAcA"),i("86U2")),h=(i("yIEv"),i("OIh9")),d=(i("OWWB"),i("1fWZ")),u=(i("9++/"),i("QhyB")),f={name:"",data:function(){return{loading:!1,finished:!1,list:[{id:1,store_name:"哈哈哈"},{id:2,name:"哈哈哈"}]}},components:(n={},r()(n,u.a.name,u.a),r()(n,d.a.name,d.a),n),methods:{onLoad:function(){var t=this;setTimeout(function(){for(var e=0;e<10;e++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)},500)},goDetail:function(){this.$router.push({name:"storeDetail",params:{id:1}})}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"store"},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(e){return i("van-cell",{key:e.id,attrs:{"is-link":"",center:""},on:{click:t.goDetail}},[i("template",{slot:"title"},[i("div",{staticClass:"storename"},[t._v("门店名称")]),t._v(" "),i("div",{staticClass:"coding"},[t._v("编码：01235487987")]),t._v(" "),i("div",{staticClass:"total-box"},[i("div",{staticClass:"item"},[t._v("总SKU：2659")]),t._v(" "),i("div",{staticClass:"item"},[t._v("总库存：5698748")])])])],2)}),1)],1)},staticRenderFns:[]};var p,m=i("VU/8")(f,v,!1,function(t){i("j/F9")},"data-v-34f3973a",null).exports,b=i("0pyO"),x={name:"inventoryCheck",data:function(){return{search:"",activeTab:0,value1:0,option1:[{text:"全部商品",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2}],treeList:[{name:"九阳",id:1,number:10,amount:"5000",level:1,children:[{name:"破壁机",id:11,number:10,amount:"5000",level:2,children:[{name:" JYL-Y20",id:12,number:10,amount:"5000",level:3},{name:" JYL-Y20",id:13,number:10,amount:"100",level:3}]}]}]}},components:(p={},r()(p,h.a.name,h.a),r()(p,c.a.name,c.a),r()(p,l.a.name,l.a),r()(p,a.a.name,a.a),r()(p,o.a.name,o.a),r()(p,"StoreList",m),r()(p,"TreeMeun",b.a),p),methods:{}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-tabs",{attrs:{color:"#FF6600","title-active-color":"#FF6600"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[i("van-tab",{attrs:{title:"门店库存"}},[i("van-search",{attrs:{placeholder:"输入门店名称、门店编码进行查询"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),i("store-list")],1),t._v(" "),i("van-tab",{attrs:{title:"大库库存"}},[i("van-search",{attrs:{placeholder:"输入门店名称、门店编码进行查询"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),i("van-dropdown-menu",[i("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),i("div",{staticClass:"prod-title"},[i("p",[t._v("品牌/产品线/型号")]),t._v(" "),i("p",[t._v("库存数量")])]),t._v(" "),i("tree-meun",{attrs:{treeList:t.treeList}}),t._v(" "),i("div",{staticClass:"prod-sum"},[i("p",[t._v("总计")]),t._v(" "),i("p",[t._v("2")])])],1)],1)],1)},staticRenderFns:[]};var y=i("VU/8")(x,g,!1,function(t){i("dcG7")},"data-v-5ead6539",null);e.default=y.exports},bFPQ:function(t,e){},dcG7:function(t,e){},"j/F9":function(t,e){},jAcA:function(t,e,i){"use strict";var n=i("nsZj"),s=(i.n(n),i("T2s0")),r=(i.n(s),i("S6Ip")),o=(i.n(r),i("bFPQ"));i.n(o)},yIEv:function(t,e,i){"use strict";var n=i("nsZj"),s=(i.n(n),i("6gXq"));i.n(s)}});