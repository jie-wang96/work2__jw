window.onload =function(){

	// 遮罩

    var oCovers =document.getElementById('covers');

    // 登录标签
    var oLogin =document.getElementById('login');

    // 登录界面

    var oLogi_system=document.getElementById('logi_system');
    var oCancel =document.getElementById('cancel');

    // 轮播

    var oSlider=document.getElementById('slider');
    var oUl=oSlider.getElementsByTagName('ul')[0];
    var oImg =oSlider.getElementsByTagName('img')[0];
    var aLi =oSlider.getElementsByTagName('li');
    var oPrev=document.getElementById('prev');
    var oNext=document.getElementById('next');
    var arrUrl=['photo/box3-1-1.jpg','photo/box3-1-2.jpg','photo/box3-1-3.jpg','photo/box3-1-4.jpg'];

    // 搜索框

    var oText =document.getElementById('text');
    var oSearch=document.getElementById('search');

    // 搜索历史记录
    var oSearch_hot=document.getElementById('search_hot');
    var aInput=oSearch_hot.getElementsByTagName('input');
    var arrNew=[];

    var timer =null;
    var num=0;

//-----------登录界面----------

    /*点击“登录”按钮*/
    oLogin.onclick =function(){
		oLogi_system.style.display ='block';
		oCovers.style.display ='block';
	};
	/*点击红色×关闭登录页面*/
	oCancel.onclick =function(){
		oLogi_system.style.display ='none';
		oCovers.style.display ='none';
	};
	/*点击灰色背景关闭登录页面*/
	oCovers.onclick =function(){
		oLogi_system.style.display ='none';
		oCovers.style.display ='none';
	};

//--------------轮播---------------

    // 定义一个函数---依次放图片
    function fn1(){
    	num++;
    	if( num ==arrUrl.length){
    		num=0;
    	};
    	oImg.src=arrUrl[num];
     	for (var d = 0; d < aLi.length; d++) {
     	aLi[d].className ='';
        };
        aLi[num].className='on';
    };

    // 通过原点更换图片	

    for(var i=0;i<arrUrl.length;i++){
     	oUl.innerHTML+='<li></li>';
     };
    aLi[num].className='on';
    oImg.src=arrUrl[num];
    for (var i = 0; i < aLi.length; i++) {
    	aLi[i].index=i;
    	aLi[i].onclick=function(){
    	    oImg.src=arrUrl[this.index];
    	    for (var i = 0; i < aLi.length; i++) {
    	    aLi[i].className ='';
          };
            this.className='on';	
        };	
    };

    // 通过右键切换图片

    oNext.onclick = fn1;

    // 通过左键切换图片

    oPrev.onclick =function(){
    	num--;
    	if( num == -1){
    		num=arrUrl.length-1;
    	}
    	oImg.src=arrUrl[num];
    	 for (var g = 0; g < aLi.length; g++) {
    	 aLi[g].className ='';
        };
        aLi[num].className='on';
    };

    // 自动转换图片---定时器

    timer =setInterval(fn1,2000);

    // 当鼠标放上去，清除定时器

    oSlider.onmouseover =function(){
    	clearInterval(timer);
    };

    // 当鼠标移开，继续有定时器

    oImg.onmouseout=function(){
    	timer =setInterval(fn1,2000);
    };
	
// ------------搜素框-------------
   
    // 添加input标签
	
	for (var a = 0; a < 10; a++) {
	    oSearch_hot.innerHTML+='<input value="" readonly="true" >';   
	};
		oSearch.onclick=function(){ 
			//不可输入纯数字、纯英文以及空格、特殊字符
			var te=/^(?!^\d+大学$)(?!^[a-zA-Z]+大学$)[\u4E00-\u9FA5A-Za-z0-9]+大学$/g;
			if (te.test(oText.value)) {
				if (oText.value.length>7) {
					//当输入内容超过7个字符，则只显示前三个字符，后面加上“。。。大学”
					arrNew.unshift(oText.value.substring(0,3)+'...大学');
				} else {arrNew.unshift(oText.value)};
			     
			      //将其放在input框内
				
				for (var b = 0; b < arrNew.length; b++) {
					
					//倘若输入的内容相同，去掉先输入的

  					for (var c = b+1; c < 11; c++) {
  						if (arrNew[b]==arrNew[c]) {
  							arrNew.splice(c,1);
  						};
  					};
  						
  					// 倘若输入的内容超过10个，则删除最开始那一个
  					
  					if (arrNew.length<11) {
  						aInput[b].value=arrNew[b];
  						oText.value='';
  					}else{
  						arrNew.splice(10,1);
  						aInput[b].value=arrNew[b];
  						oText.value='';
  					};
  				};
  			}else {alert('您的输入有错请重新输入')};
		};	
	}