
// 执行对 申请位置宽度的计算 和重置
$('.apply-background,.apply-background-silde').css('width',document.body.offsetWidth - (document.body.offsetWidth - 1200)/2);


$('.index-problem-footer-model-pointer').hover(function () {

	$('.index-problem-footer-model-pointer').removeClass('index-problem-footer-select');
	$(this).addClass('index-problem-footer-select');
	$('.index-problem-footer-model-pointer img').attr('src','./images/up.png');
	$('.index-problem-footer-model-pointer').next().hide();
	$(this).next().show();

	$(this).children('div').children('img').attr('src','./images/down.png');

});
$('.index-problem-footer-model-pointer').eq(0).click();


//设置 申请的头部
$('.apply').map(function (key,item) {
	var target = $(item).children('.apply-left').children('div.apply-main').eq(0)[0];
	$(item).children('.apply-header-background').css({
		'top':target.offsetTop + 'px',
		'height':target.offsetHeight +'px'
	});

	apply_select(target);
});

// 设置点击 class
$('.nav-main-body').click(function(){

	// 删除 所有class
	$('.nav-main-body').removeClass('on');

	//添加 class
	$(this).addClass('on');

});


// 设置经过事件
$('.apply-main').hover(function () {

	var target = this;
	var header = $(this).parent().parent().children('.apply-header-background');
	$(header).stop();
	var top =$(header)[0].offsetTop>=target.offsetTop?(target.offsetTop-10):(target.offsetTop+10);
	$(header).animate({
			'top': top+ 'px',
			'height':target.offsetHeight +'px'
		},200,function () {
			$(header).animate({
				'top':target.offsetTop + 'px',
				'height':target.offsetHeight +'px'
			},100,function () {

			});
		});

	apply_select(target);

});

//设置 选中
function apply_select(dom){

	$(dom).addClass('apply-select').siblings().removeClass('apply-select');
	$(dom).children('div').children('img').attr('src','images/starafter.png');
	$(dom).siblings().children('div').children('img').attr('src','images/starbefore.png');

}



// 设置 置顶操作
function Adsorbent(data) {
	data = typeof data === 'string' ? {el:data} : data;
	data = Adsorbent.Adsorbent(data);
	data.el = document.getElementById(data.el);

	this.data = data;
	this.resize();
	Adsorbent.data.push(this);
}
Adsorbent.prototype.resize = function(){
	this.data.top = this.data.el.parentNode.offsetTop;
	this.data.now = getScroll();
	var that = this;

	setTimeout(function () {
		that.data.height = that.data.el.clientHeight;
	},1000);

	this.init();
};

Adsorbent.prototype.init = function () {

	var class_name = '';

	if ( this.data.top > this.data.now && this.data.state){


		class_name = this.data.el.getAttribute('class') || this.data.select_class;

		class_name = class_name.replace(this.data.select_class,this.data.default_class);

		this.data.state = false;

		return this.data.el.setAttribute('class',class_name);


	}else if(this.data.top <= this.data.now && !this.data.state){

		class_name = this.data.el.getAttribute('class') || this.data.default_class;

		class_name = class_name.replace(this.data.default_class,this.data.select_class);

		this.data.state = true;

		return this.data.el.setAttribute('class',class_name);

	}


	return null;


};

Adsorbent.Adsorbent = function (data) {

	var key;
	for ( key in Adsorbent.parameter ){

		if ( Adsorbent.parameter.hasOwnProperty(key) ) {
			data[key] = data[key] || Adsorbent.parameter[key];
		}

	}

	return data;

};

Adsorbent.data = [];

Adsorbent.parameter = {
	el: '',
	top: 0,
	now: 0,
	select_class: 'adsorbent',
	default_class: 'nav-container',
	state: false,
	height:0,
};

function getScroll() {
	return document.body.scrollTop || document.scrollTop || window.scrollY;
}

function addEvent(target,even,callback,useCapture,type){

	useCapture = useCapture || false;
	target = target || window;
	if (window.addEventListener) {
		target.addEventListener(even,callback,useCapture,type);
	}else{
		target.attachEvents('on'+even,callback,useCapture,type);
	}

}

Adsorbent.conf = {

	time : 10, // 触发频率
	_time : ''
};

addEvent(window,'scroll',function(){

	clearTimeout(Adsorbent.conf._time);

	Adsorbent.conf._time = setTimeout(function(){

		var count = Adsorbent.data.length;
		var top = getScroll();
		for (var i = 0;i<count;i++) {
			Adsorbent.data[i].data.now = top;
			Adsorbent.data[i].init();

		}

	},Adsorbent.conf.time);

},false,{
	passive : true
});

Adsorbent.n_size = function () {

	for (var i=0,count=Adsorbent.data.length;i<count;i++) {

		Adsorbent.data[i].resize();
	}
}

var adsor = new Adsorbent({
	el : 'nav-tab-adsorbent',
	select_class : 'adsorbent',
	default_class: 'container',
});
addEvent(window,'resize',Adsorbent.n_size);




// 加载外部 js
window._pt_lt = new Date().getTime();
window._pt_sp_2 = [];
_pt_sp_2.push('setAccount,1554e7cc');
var _protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
(function() {
	var atag = document.createElement('script'); atag.type = 'text/javascript'; atag.async = true;
	atag.src = _protocol + 'js.ptengine.cn/1554e7cc.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(atag, s);
})();

