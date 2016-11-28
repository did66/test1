// 判断IE8浏览器
var DEFAULT_VERSION = "10.0";
var ua = navigator.userAgent.toLowerCase();
  var isIE = ua.indexOf("msie")>-1;
  var safariVersion;
  if(isIE){
      safariVersion =  ua.match(/msie ([\d.]+)/)[1];
      if(safariVersion <= DEFAULT_VERSION ){
          alert("当前浏览器版本过低，请使用IE10以上浏览器");
      }
}
//判断横竖屏
 var phone = document.getElementById('phone-box'),
     textP = document.getElementById('text-phone');
function hengshuping(){ 
    if(window.orientation==180||window.orientation==0){ 
        self.location.reload();    
        textP.style.display='none'; 
        phone.style.display='block';
    } 
    if(window.orientation==90||window.orientation==-90){ 
        textP.style.display='block';
        phone.style.display='none';
        //横屏状态     
    } 
 } 
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false); 
var size = function() {
  return {
    height: Math.max(window.innerHeight || 0, document.documentElement.clientHeight)
  }
};
/* banner */
$(function(){
   var winH = $(window).height();
   var winW = $(window).width();
   if(winW>1200){
     $('.slideshow').css({height: winH+'px'});
     $('.banner-a').css({height: winH-90+'px'});
     $('.hshi-box-top').css({top: winH+'px'});
   }
   /* 弹层封包 */
  function layerBtn(id,layer){
    $(id).on('click',function(){
      $('.mask').css('display','block');
      $('#phone-box').addClass('blurbox');   
      setTimeout(function(){
        $(layer).addClass('hshi-normal');
        $(layer).removeClass('hshi-scale');
      },200);
    });
  };
  function closeBtn(closeid,closelayer){
    $(closeid).on('click',function(){ 
      setTimeout(function(){
        $('.mask').css('display','none');
        $('#phone-box').removeClass('blurbox');
      },200);
      $(closelayer).addClass('hshi-scale');
      $(closelayer).removeClass('hshi-normal');  
    });
  };
  function exChange(exchangeEx,layerEx,layerExTo){
    $(exchangeEx).on('click',function(){
      $(layerEx).addClass('hshi-scale').removeClass('hshi-normal'); 
      $(layerExTo).removeClass('hshi-scale').addClass('hshi-normal'); 
    });
  };
  function layerTs(tsid,cbox,tsbox){
    $(tsid).on('click',function(){
      $(cbox).addClass('blurbox'); 
      $(tsbox).css('display', 'block');; 
      setTimeout(function(){
        $(cbox).removeClass('blurbox'); 
        $(tsbox).css('display', 'none');; 
      },2300);
    });
  };  
  // 使用邮箱、手机号码找回
  function parssback(backid,backbox,backnone){
    $(backid).on("click",function(){
      $(backbox).css('display', 'none');
      $(backnone).css('display', 'block');
    });
  };
  closeBtn('.close,.hshi-I-close','.layerbox,.searchbox,.hshi-scale'); // 关闭弹层
  layerBtn('.hshi-btn-search','.searchbox'); // 打开搜索层
  layerBtn('.hshi-userbox','.login-box'); // 打开登录层
  layerBtn('.down-btn','.down-layer'); // 打开下载层
  exChange('.login-wjmm','.login-box','.hshi-email'); // 打开搜索层
  exChange('.return-btn-fh','.hshi-email','.login-box'); // 打开忘记密码层
  layerTs('.login-icon-ts','.hshi-layer-mh','.hshi-sendnotes'); // 忘记密码提示成功层
  parssback(".phone-back",".hshi-emailbox",".hshi-phonebox"); // 切换手机找回事件
  parssback(".email-back",".hshi-phonebox",".hshi-emailbox"); // 切换邮箱找回事件
  parssback(".email-next",".hshi-phonebox",".hshi-passwordbox"); // 进入下一步事件
  // 收藏
  $('.details-shoucang').on("click",function(){
      $(this).addClass('details-shoucang-yes');
      $(this).children('em').text('已收藏');
  });
  $('.huifu-btn').on('click',function(){
      $(this).siblings('.huifu-textarea').slideToggle("slow");
  });





});
function setShowLength(obj, maxlength, id) { 
  var rem = maxlength - obj.value.length; 
  var wid = id; 
  if (rem < 0){ 
    rem = 0; 
  };
  document.getElementById(wid).innerHTML =rem; 
};

/* 游戏下载 */
var swiper = new Swiper('.swiper-banner', {
  pagination: '.my-pagination',
  paginationClickable: true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: 2500,
  autoplayDisableOnInteraction: false,
  paginationBulletRender: function (index, className) {
    switch (index) {
      case 0: name='<svg class="icon hshi-I-win" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-icon"></use></svg>WINDOW';break;
      case 1: name='<svg class="icon hshi-I-playstation" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-playstation"></use></svg>Playstation';break;
      case 2: name='<svg class="icon hshi-I-win" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-iconset0290"></use></svg>ANDROID';break;
      case 3: name='<svg class="icon hshi-I-win" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pingguo"></use></svg>iOS';break;
      default: name='';
    }
    return '<span class="' + className + '">' +'<b>'+ name +'</b>'+ '</span>';
  } 
});

/* 最新资讯 */
var swiper = new Swiper('.swiper-zxzx-01', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: 3000,
  autoplayDisableOnInteraction: false,
  loop: true
});
var swiper = new Swiper('.swiper-zxzx-02', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: 3000,
  autoplayDisableOnInteraction: false,
  loop: true
});











