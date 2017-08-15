// JavaScript Document
$(function(){	
	//Heights
	$(window).load(function() {
        onHeightChange();
		Scroll();
    });
	$(window).resize(function() {
        onHeightChange();
		Scroll();
    });
	setTimeout(onHeightChange, 10);
	
	function onHeightChange() {
		var oWin = $(window).width();	
		//index
		var oLiH = $('.worksDisplay ul li a img:first-child').height();
			$('.works ul li').height(oLiH);	
			$('.works ul li a').height(oLiH);
			$('.works ul li .shadowWrap').height(oLiH);
			$('.works ul li .opacity').height(oLiH);
			$('.works ul li .shadow').height(oLiH);
		//Works-Given
		var oGivenIntro = $('.given_intro img').height();
		var oGivenlogobig = $('.given_logobig img').height();
		var oGivenresearch= $('.given_research img').height();
		var oGiveniphone= $('.given_iphone img').height();
		//Works-Matchbox
		var oMboxH1 = $('.matchboxH1 img').height();
		var oMboxH2 = $('.matchboxH2 img').height();		
		//Works-Photobook
		var oPhotoH1 = $('.PhotobookH1 img').height();
		var oPhotoLi = $('.photobookPic li:first-child img').height();
		//Works-Red
		var oH1H = $('.worksRed .bgBlack img').height();
		var oH2H = $('.worksRed .bgWhite img').height();
		//Works-OFC
		var oTcfH1 = $('.tfcH1 img').height();
		var oTcfH2 = $('.tfcH2 img').height();
		var oTcfH3 = $('.tfcH3 img').height();
		var oTcfIntroH = $('.tfcIntroH .ColumnTwo:first-child').height();
		//Works-Topoli
		var otopilLH = $('.topoliMotors .topoliL img').height();		
		var oTopoliH1 = $('.topoliH1 img').height();
					
		if(oWin > 480){			
			//Works-Given
			$('.given_intro .table').height(oGivenIntro);
			$('.given_logobig .table').height(oGivenlogobig);
			$('.given_research .table').height(oGivenresearch);
			$('.given_iphone .table').height(oGiveniphone);
			//Works-Matchbox
			$('.matchboxH1 .table').height(oMboxH1);
			$('.matchboxH2 .table').height(oMboxH2);
			//Works-Photobook
			$('.PhotobookH1 .table').height(oPhotoH1);
			$('.photobookPic li').height(oPhotoLi);
			//Works-Red
			$('.worksRed .bgBlack .table').height(oH1H);
			$('.worksRed .bgWhite .table').height(oH2H);
			//Works-OFC
			$('.tfcH1 .table').height(oTcfH1);
			$('.tfcH2 .table').height(oTcfH2);
			$('.tfcH3 .table').height(oTcfH3);
			$('.tfcIntroH .ColumnTwo:last-child').height(oTcfIntroH);
			//Works-Topoli
			$('.topoliH1 .table').height(oTopoliH1);
			$('.topoliMotors .topoliR').height(otopilLH);
			$('.ipad .topoliR').height(otopilLH);
		}
		else{
			/*Topoli ipad */
			var oIpadH = $('.ipad .topoliL').height();
			$('.ipad .topoliR').height(oIpadH);			
		}		
		setTimeout(onHeightChange, 10);
	};	
	//Other Projects 
	function Scroll(){
		 var page=1;		  		 
		 var v_show=$('.othersScoll ul');
		 
		 var oWin = $(window).width();
		 if(oWin > 480){		
			var oLiW = ($('.othersScoll').width()/2);	 
			var i=2;	
		 }
		 else{
			 var oLiW = $('.othersScoll').width();
			 var i=1;	
		 }	 
		 v_show.find('li').width(oLiW);
		 
		 var oLiH = v_show.find('li').height();
		 
		 $('.othersScoll').height(oLiH);
		 v_show.height(oLiH);
		 v_show.find('a').height(oLiH);
		 $('.othersScoll ul li .shadowWrap').height(oLiH);
		 $('.othersScoll ul li .opacity').height(oLiH);
		 $('.othersScoll ul li .shadow').height(oLiH);
		 
		 
		 var len=v_show.find('li').length;
		 var page_count = Math.ceil(len / i); 
			
		 
		 /* Prev */
		 $('.arrowNext').click(function(){
			 if(!v_show.is(":animated")){
				 if(page == page_count){	
				 		return false;				 
				  }else{					 
					 if(oWin > 480){v_show.animate({left : '-=' +( oLiW*2 )},"slow");}
					 else{v_show.animate({left : '-=' +oLiW},"slow");}
					 page++;
				  }
			 }	
		 })
		 /* Next */
		 $('.arrowPrev').click(function(){	
			 if(!v_show.is(":animated")){
				 if(page == 1){
					 return false;
				  }else{				 	 					 
					 if(oWin > 480){v_show.animate({left : '+=' +( oLiW*2 )},"slow");}
					 else{v_show.animate({left : '+=' +oLiW},"slow");}
					 page--;
				  }
			 }	
		 })
		 /*  end  */
	};
	
	//Hover & Clicked
	function adoutHover(){
		var oSevLiH = $('.service ul li').height();
		var oSevLiHoH = $('.service ul li .identity').height();
		var oWin = $(window).width();
		 if(oWin > 480){
			if(oSevLiHoH > oSevLiH){
				$('.service').height(oSevLiHoH+109);
				}else{
					$('.service ul li .serviceHover').css('min-height',oSevLiH+135);
				}
			$('.service ul li .serviceHover').height(oSevLiHoH+109);
		 }
	}
	$('.service ul li .readMore').each(function() {
        $(this).click(function(){				
			var oS = $(this).parent('li').find('.serviceHover');
			$(this).parent('li').siblings().find('.serviceHover').css('opacity','0').css('z-index','-1');;
			oS.css('opacity','1');
			oS.css('z-index','99');
			oS.animate({left:0},'5000');
			$('.service ul li').css('height','auto');
			$(this).parent('li').height(oS.height()+109);	
			adoutHover();		
		});
    });
			
	$('.service ul li .close').click(function(){ 
		var ow = $(this).parent('.serviceHover').width();
		var oS = $(this).parent('.serviceHover');
		oS.css('opacity','0');
		oS.animate({left:-ow},'5000');
		$('.serviceHover').css('z-index','-1');
		var oWin = $(window).width();
		 if(oWin > 480){
			$('.service').height($('.service ul li').height()+135);
		 }
		 else{
		 	$('.service ul li').css('height','auto');
		 }
	});
	//Menu & Contact
	$('.menuWork').click(function() {
		var oLiH = $('.worksFold ul li a img:first-child').height();
		$('.worksFold').slideDown('slow');
		$('.menuWork').addClass('current');
	});
	$('.works .comClose').click(function() {
        $('.worksFold').slideUp('slow');
		$('.menuWork').removeClass('current');
    });
	$('.menuContact').click(function() {
		$('.contact').slideDown('slow');
		$('.menuContact').addClass('current');
	});
	$('.contact .comClose').click(function() {
        $('.contact').slideUp('slow');
		$('.menuContact').removeClass('current');
    });
})