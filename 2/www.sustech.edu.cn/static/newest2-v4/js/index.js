var starCount = true;
var starCount2 = true;
var starCount3 = true;
var starCount4 = true;
var viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
var viewPortWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth 

$(function () {
	
	//科学探索
		var w=document.body.clientWidth;
		
		var rw=$("#research_lunbo").outerWidth(true);
		var iw=$("#research_lunbo .items").outerWidth(true);
		
		var bw=0;
		if (w>800) {
			bw=(w-rw)/2+(rw-iw);
			
		}
		else {
			bw=rw;
		}
		if (bw>1600) {
			bw=1600;
		}
		
		$("#research_lunbo .big").width(bw);
		var rh=Number(bw)*0.5625;
		$("#research_lunbo .big").height(rh);
		$("#research_lunbo .gallery-top").css("left",iw+"px");
		
});

NmeberSCroll();
function NmeberSCroll() {
	
	
	// date
	if( $(".numbers ul li")[0] && viewPortHeight > $(".numbers ul li")[0].getBoundingClientRect().top ){
		if(!$(".numbers ul li").hasClass("fadeInRight animated")){
			$(".numbers ul li").addClass("fadeInRight animated") ;
			// $(".ml_content .row").addClass("svg-show ")
		}
	 }
	 
	 if( $(".numbers-1 ul li")[0] && viewPortHeight > $(".numbers-1 ul li")[0].getBoundingClientRect().top ){
	 	if(!$(".numbers-1 ul li").hasClass("fadeInUp animated")){
	 		$(".numbers-1 ul li").addClass("fadeInUp animated") ;
			$(".nkd_jianjie.js-2").addClass("fadeInUp animated") ;
	 		
	 	}
	  }
	 
	  
	  if( $(".numbers-3 ul li")[0] && viewPortHeight > $(".numbers-3 ul li")[0].getBoundingClientRect().top ){
	  	if(!$(".numbers-3 ul li").hasClass("fadeIn animated")){
	  		$(".numbers-3 ul li").addClass("fadeIn animated") ;
	  		// $(".ml_content .row").addClass("svg-show ")
	  	}
	   }
	   
	   if( $(".numbers-4 ul li")[0] && viewPortHeight > $(".numbers-4 ul li")[0].getBoundingClientRect().top ){
			if(!$(".numbers-4 ul li").hasClass("fadeIn animated")){
				$(".numbers-4 ul li").addClass("fadeIn animated") ;
				$(".js-3").addClass("fadeInUp animated ");
				$(".outlinks ul li").addClass("fadeInUp animated ");					
			}
	   }
	
	// svg
	if( $("#xy_visiting")[0] && viewPortHeight > $("#xy_visiting")[0].getBoundingClientRect().top ){
		if(!$("#xy_visiting ol a").hasClass("fadeInUp animated")){
			$("#xy_visiting ol a").addClass("fadeInUp animated") ;
			// $(".ml_content .row").addClass("svg-show ")
		}
	 }
	 
	 // link
	 if( $(".xb_menu")[0] && viewPortHeight > $(".xb_menu")[0].getBoundingClientRect().top ){
	 	if(!$(".xb_menu").hasClass("fadeIn animated")){
	 		$(".xb_menu").addClass("fadeIn animated") ;
	 		// $(".ml_content .row").addClass("svg-show ")
	 	}
	  }
	 
	
	if($(".numbers ul li").length){
	       
	       if($(".numbers ul")[0] &&viewPortHeight>$(".numbers ul")[0].getBoundingClientRect().top){
	           
	           if( starCount2){
	               starCount2 = false
	               let numArr=[]
	               $('.numbers ul li big.sz').each(function(index,el){
	                   numArr.push($(el).html())
	                   
			  					$(this).prop('Counter',0).animate({
			  						Counter:$(this).text()
			  					},{
			  						duration:2000,
			  						easing:'swing',
			  						step:function(now){
	                           
	                           $(this).text(Math.ceil(now));
			  							// console.log(now);
	                           if(Math.ceil(now)>numArr[index]){
	                               
	                               $(this).text(numArr[index]);
	                           }
	                           
			  						}
			  					});
	                   
			  				});
	
	           }
	           
	           
	       }
			  
	}
	
	
			  
	if($(".numbers-1 ul li").length){
	       
	       if($(".numbers-1 ul")[0] &&viewPortHeight>$(".numbers-1 ul")[0].getBoundingClientRect().top){
	           
	           if(starCount ){
	               starCount =false
	               let numArr=[]
	               $('.numbers-1 ul li big').each(function(index,el){
	                   numArr.push($(el).html())
	                   
			  					$(this).prop('Counter',0).animate({
			  						Counter:$(this).text()
			  					},{
			  						duration:2000,
			  						easing:'swing',
			  						step:function(now){
	                           
	                           $(this).text(Math.ceil(now));
			  							// console.log(now);
	                           if(Math.ceil(now)>numArr[index]){
	                               
	                               $(this).text(numArr[index]);
	                           }
	                           
			  						}
			  					});
	                   
			  				});		
	           }  
	       }			  
	}
	
	
	
	
			  
	if($(".numbers-3 ul li").length){
	       
	       if($(".numbers-3 ul")[0] &&viewPortHeight>$(".numbers-3 ul")[0].getBoundingClientRect().top){
	           
	           if( starCount4){
	               starCount4 = false
	               let numArr2=[]
	               $('.numbers-3 ul li big').each(function(index,el){
	                   numArr2.push($(el).html())
	                   
			  					$(this).prop('Counter',0).animate({
			  						Counter:$(this).text()
			  					},{
			  						duration:2000,
			  						easing:'swing',
			  						step:function(now){
	                           
	                           $(this).text(Math.ceil(now));
			  							// console.log(now);
	                           if(Math.ceil(now)>numArr2[index]){
	                               
	                               $(this).text(numArr2[index]);
	                           }
	                           
			  						}
			  					});
	                   
			  				});
	
	           }
	           
	           
	       }
			  
	}
	
	
	if($(".numbers-4 ul li").length){
	       
	       if($(".numbers-4 ul")[0] &&viewPortHeight>$(".numbers-4 ul")[0].getBoundingClientRect().top){
	           
	           if( starCount3){
	               starCount3 = false
	               let numArr=[]
	               $('.numbers-4 ul li big').each(function(index,el){
	                   numArr.push($(el).html())
	                   
			  					$(this).prop('Counter',0).animate({
			  						Counter:$(this).text()
			  					},{
			  						duration:2000,
			  						easing:'swing',
			  						step:function(now){
	                           
	                           $(this).text(Math.ceil(now));
			  							// console.log(now);
	                           if(Math.ceil(now)>numArr[index]){
	                               
	                               $(this).text(numArr[index]);
	                           }
	                           
			  						}
			  					});
	                   
			  				});
	
	           }
	           
	           
	       }
			  
	}
}



$(document).ready(function(){
	
	
	$(window).resize(function(){
		const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight 
		const viewPortWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth 
	
		setTimeout(function(){
			banner.update();
			swiperC.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
			swiperAR.update();
			swiperBR.update();
			swiperD.update();
			swiperU.update();
			swiperE.update();
			swiperA.update();
			swiperB.update();
			swiper.update(); 
			// console.log("我被执行了")
		 }, 100);
	})
	
	$(".body_b").scroll(function(){		
		
		var _scTop = $(this).scrollTop();
		// console.log(_scTop)
		if(_scTop > 100) {
			$(".backtop").fadeIn();
		}else{
			$(".backtop").fadeOut();
		}
		
		NmeberSCroll();		 
		 
	})
	
	$(".dot").click(function(){
		$(".new_navpanle").fadeIn();
		$(this).addClass('transOut');
	})
	
	
	$(".new_navpanle .close").click(function(){
		$(".new_navpanle").fadeOut();
		$(".dot").removeClass('transOut');
	})
	
	
	
	$(".backtop").click(function(){
		$("body,html").animate({ scrollTop: 0 }, 1000);
	})
	
	
	// svg-show
	$("#xy_visiting ol a").hover(function(){
		$(this).addClass("svg-show").siblings().removeClass("svg-show");
	})
	
	
	// banner 
	var banner = new Swiper('#banner .swiper-container', {
	      spaceBetween:0,
	      slidesPerView: 1,
	      pagination: {
	        el: '#banner .swiper-pagination',
	        clickable: true,
	      },
		  autoplay: {
		    delay: 15000,
		    disableOnInteraction: false,
		  },
		  loop:true,
		  on:{
			  
			 //  slideChange: function(){			  				 
				// var this_videoPath = $("#banner .swiper-slide").eq(this.activeIndex).find("img.ban_poster").attr("src");
				// if(  this_videoPath && this_videoPath.length > 0 && this_videoPath !== undefined) {					
				// 	$("#banner .swiper-slide").eq(this.activeIndex).find("img.ban_poster").show();
				// 	$("#banner .swiper-slide").eq(this.activeIndex).find("video.video_slide ").hide();
				// }else{
				// 	$("#banner .swiper-slide").eq(this.activeIndex).find("img.ban_poster ").hide();
				// 	$("#banner .swiper-slide").eq(this.activeIndex).find("video.video_slide ").show();
				// }        
			 //  	console.log(  this.activeIndex ,this_videoPath);
			 //  },
			  
		  //     slideChange: function(){
				 
				// var this_videoPath = $("#banner .swiper-slide").eq(this.activeIndex).attr("data-path");
				// if(  this_videoPath && this_videoPath.length > 0 ) {
				// 	$("#banner .swiper-slide").eq(this.activeIndex).find("video").attr("src",this_videoPath);
				// 	$("#banner .swiper-slide").eq(this.activeIndex).find("img.ban_poster ").hide();
				// 	$("#banner .swiper-slide").eq(this.activeIndex).find("video.video_slide ").show();
				// }	        
				// // console.log(  this.activeIndex ,this_videoPath);
		  //     },
			  
			 //  sliderMove: function(){
			  				 
				// var this_videoPath = $("#banner .swiper-slide").eq(this.activeIndex).attr("data-path");
				// if(  this_videoPath && this_videoPath.length > 0 ) {
				// 	$("#banner .swiper-slide").eq(this.activeIndex).find("video").attr("src",this_videoPath);
				// 	$("#banner .swiper-slide").eq(this.activeIndex).find("img.ban_poster ").hide();
				// 	$("#banner .swiper-slide").eq(this.activeIndex).find("video.video_slide ").show();
				// }	        
			 //  				// console.log(  this.activeIndex ,this_videoPath);
			 //  },
			  				
				
		  },
	});
	
	// var this_videoPath2 = $("#banner .swiper-slide-active").attr("data-path");
	// if(  this_videoPath2 & this_videoPath2.length > 0   ) {
	// 	$("#banner .swiper-slide-active").find("video").attr("src",this_videoPath2);
	// 	$("#banner .swiper-slide-active img.ban_poster ").hide();
	// 	$("#banner .swiper-slide-active video.video_slide ").show();
	// }  
	// console.log( this_videoPath);
	
	 
	var _width = $(window).width();
	console.log(_width)
	
	

	
	if( _width <= 800 ) {
		
		// phone news_ban
		var swiperK = new Swiper('#news_ban .swiper-container', {
		      spaceBetween:0,
		      slidesPerView: 1,
			  // centeredSlides: true,
		      pagination: {
		        el: '#news_ban .swiper-pagination',
		        clickable: true,
		      },
			  // navigation: {
			  //   nextEl: '#news_ban .swiper-button-next',
			  //   prevEl: '#news_ban .swiper-button-prev',
			  // },
			  autoplay: {
			    delay: 5000,
			    disableOnInteraction: false,
			  },
			  resize: function(){
			     setTimeout(function(){
					swiperC.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
					
				  }, 300)
			  }, 
		     
		});
		
		// 专题-highlight
		var swiperAR = new Swiper('#zhuanti .swiper-container', {
		      spaceBetween:1,
		      centeredSlides: true,
		      slidesPerView: 1.5,
			  loop:true,
		      pagination: {
		        el: '#zhuanti .swiper-pagination',
		        clickable: true,
		      },
			  autoplay: {
			     delay: 5000,
			     disableOnInteraction: false,
			  },
			  navigation: {
			    nextEl: '#zhuanti .swiper-button-next',
			    prevEl: '#zhuanti .swiper-button-prev',
			  },
			  resize: function(){
			     setTimeout(function(){
					 swiperAR.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
				 }, 300)
			  }, 
		
		});
		
		
		// phone news_ban
		var swiperK = new Swiper('#news_ban .swiper-container', {
		      spaceBetween:0,
		      slidesPerView: 1,
			  // centeredSlides: true,
		      pagination: {
		        el: '#news_ban .swiper-pagination',
		        clickable: true,
		      },
			  // navigation: {
			  //   nextEl: '#news_ban .swiper-button-next',
			  //   prevEl: '#news_ban .swiper-button-prev',
			  // },
			  autoplay: {
			    delay: 5000,
			    disableOnInteraction: false,
			  },
			  resize: function(){
			     setTimeout(function(){
					swiperC.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
					
				  }, 300)
			  }, 
		     
		});
		
		// 南科讲座移动端
		var swiperC = new Swiper('#home_events .event_phone', {
		      spaceBetween:0,
		      slidesPerView: 1.15,
			  centeredSlides: true,
		      pagination: {
		        el: '#home_events .swiper-pagination',
		        clickable: true,
		      },
			  navigation: {
			    nextEl: '#home_events .swiper-button-next',
			    prevEl: '#home_events .swiper-button-prev',
			  },
			  // autoplay: {
			  //   delay: 5000,
			  //   disableOnInteraction: false,
			  // },
			  resize: function(){
			     setTimeout(function(){
					swiperC.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
				  }, 300)
			  }, 
		     
		});
		
		// 媒体聚焦-focus
		var swiperAR = new Swiper('#focus .swiper-container', {
		      spaceBetween:25,
		      // centeredSlides: true,
		      slidesPerView: 1.5,
		      pagination: {
		        el: '#focus .swiper-pagination',
		        clickable: true,
		      },
			  // autoplay: {
			  //   delay: 5000,
			  //   disableOnInteraction: false,
			  // },
			  navigation: {
			    nextEl: '#focus .swiper-button-next',
			    prevEl: '#focus .swiper-button-prev',
			  },
			  resize: function(){
			     setTimeout(function(){
					 swiperAR.update(); //窗口变化时，更新Swiper的一些属性，如宽高等					 
				 }, 300)
			  }, 
		
		});
		
		// people		
		var swiperG = new Swiper('#personage .swiper-container',{  
			 loop: true, 
			 autoplay: true,  
			 centeredSlides:true,   
			 pagination: {  
				 el: ' #personage .swiper-pagination',  
				 clickable :true,  
			 },  
		 }); 
		
		
		
		// phone_Academics
		// $("#Academics .swiper-slide:nth-child(1)").addClass("swiper-slide-thumb-active").show();
		// $("#Academics_phone_bt ul li:nth-child(1)").addClass("img-active").show();
		
		// $("#Academics_phone_bt ul li").hover(function(){
		// 	var _index = $(this).index();
		// 	$(this).addClass("img-active").siblings().removeClass("img-active");
		// 	$("#Academics .swiper-slide").eq(_index).addClass("swiper-slide-thumb-active").show().siblings().removeClass("swiper-slide-thumb-active").hide();
			
		// 	// galleryTop.slideTo(_index, 1000, false);
		// });
		
		
		// phone_hezuo
		// $("#hezuo .swiper-slide:nth-child(1)").addClass("swiper-slide-thumb-active").show();
		// $("#hezuo_phone_bt ul li:nth-child(1)").addClass("img-active").show();
		
		// $("#hezuo_phone_bt ul li").hover(function(){
		// 	var _index = $(this).index();
		// 	$(this).addClass("img-active").siblings().removeClass("img-active");
		// 	$("#hezuo .swiper-slide").eq(_index).addClass("swiper-slide-thumb-active").show().siblings().removeClass("swiper-slide-thumb-active").hide();
			
		// 	// galleryTop.slideTo(_index, 1000, false);
		// });
		
		
	}else{
		var focusNum=4;
		if (viewPortWidth>=2440) {
			focusNum=5;
		}
		if (viewPortWidth>3000) {
			focusNum=6;
		}
		// 媒体聚焦-focus
		var swiperAR = new Swiper('#focus .swiper-container', {
		      spaceBetween:97,
		      // centeredSlides: true,
		      slidesPerView: focusNum,
		      pagination: {
		        el: '#focus .swiper-pagination',
		        clickable: true,
		      },
			   autoplay: {
			      delay: 5000,
			      disableOnInteraction: false,
			   },
			  navigation: {
			    nextEl: '#focus .swiper-button-next',
			    prevEl: '#focus .swiper-button-prev',
			  },
			  resize: function(){
			     setTimeout(function(){
					 swiperAR.update(); //窗口变化时，更新Swiper的一些属性，如宽高等					 
				 }, 300)
			  }, 
		
		});
		
		
		// 专题-highlight
		var swiperAR = new Swiper('#zhuanti .swiper-container', {
		      spaceBetween:1,
		      // centeredSlides: true,
		      slidesPerView: 5,
		      pagination: {
		        el: '#zhuanti .swiper-pagination',
		        clickable: true,
		      },
			  autoplay: {
			    delay: 5000,
			    disableOnInteraction: false,
			  },
			  navigation: {
			    nextEl: '#zhuanti .swiper-button-next',
			    prevEl: '#zhuanti .swiper-button-prev',
			  },
			  resize: function(){
			     setTimeout(function(){
					 swiperAR.update(); //窗口变化时，更新Swiper的一些属性，如宽高等					 
				 }, 300)
			  }, 
		
		});
		
		
		var eventNum=3;
		if (_width>=1800) {
			eventNum=3.5;
		}
		if (_width>=2560){
			eventNum=4;
		}
		if (_width>=3000){
			eventNum=4.5;
		}
		
		// 通知轮播
		var swiperC = new Swiper('#home_events .swiper-container', {
		      spaceBetween:-15,
		      slidesPerView: eventNum,
			  slidesPerGroup:2,
			  //initialSlide:3,
			  //centeredSlides: true,
			  // slidesPerColumn: 1,
			  //loop:true,
		      pagination: {
		        el: '#home_events .swiper-pagination',
		        clickable: true,
		      },
			  navigation: {
			    nextEl: '#home_events  .swiper-button-next',
			    prevEl: '#home_events  .swiper-button-prev',
			  },
			  resize: function(){
			     setTimeout(function(){
					swiperC.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
				  }, 300)
			  }, 
		     
		});
		
		
		
		// anoucement
		var swiperBR = new Swiper('#home_anoucement .swiper-container', {
		      spaceBetween:15,
		      direction: 'vertical',
		      slidesPerView: 1.5,
			  loop:true,
		      pagination: {
		        el: '#zhuanti .swiper-pagination',
		        clickable: true,
		      },
			  navigation: {
			    nextEl: '#home_anoucement  .swiper-button-next',
			    prevEl: '#home_anoucement .swiper-button-prev',
			  },
			  autoplay: {
			    delay: 3000,
			    disableOnInteraction: false,
			  },
			  resize: function(){
			     setTimeout(function(){
					 swiperBR.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
				 }, 300)
			  }, 
		     
		});
		
		// data
		var swiperU = new Swiper('#data .swiper-container', {
		      spaceBetween:80,
			  slidesPerView: 2,
		      centeredSlides: true,
		      // autoplay: {
		      //   delay: 4500,
		      //   disableOnInteraction: false,
		      // },
		      // pagination: {
		      //   el: '#data .swiper-pagination',
		      //   clickable: true,
		      // },
			  loop:true,
			  resize: function(){
				setTimeout(function(){
					swiper.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
				  }, 300)
			  },
		      navigation: {
		        nextEl: '#data .swiper-button-next',
		        prevEl: '#data .swiper-button-prev',
		      },
		});
		
		
		// people
		var w=$(window).width();
		
		//南科人物
		var swiperG = new Swiper('#personage .swiper-container',{  
		 loop: true,  
		 loopedSlides: 3,  
		 slidesPerView: 'auto',  
		 autoplay: true,  
		 centeredSlides:true,  
		 //initialSlide :2,  
		 watchSlidesProgress: true,  
		 pagination: {  
			 el: ' #personage .swiper-pagination',  
			 clickable :true,  
		 },  
		 
		 
		 
		 on: {  
			 progress: function(progress) {  
				 if (w>768) {  
					for (i = 0; i < this.slides.length; i++) {
						var slide = this.slides.eq(i);
						var slideProgress = this.slides[i].progress;
						modify = 1;
						if (Math.abs(slideProgress) > 1) {
							modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
						}
						translate = slideProgress * modify * (w/5) + 'px';
						scale = 1 - Math.abs(slideProgress) / 4;
						zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
						slide.transform('translateX(' + translate + ') scale(' + scale + ')');
						slide.css('zIndex', zIndex);
						slide.css('opacity', 1);
						if (Math.abs(slideProgress) > 3) {
							slide.css('opacity', 0);
						}
					}
				 }  
			 },  
			 setTransition: function(transition) {  
				 if (w>768) {  
					 for (var i = 0; i < this.slides.length; i++) {  
						 var slide = this.slides.eq(i)  
						 slide.transition(transition);  
					 }  
				 }  
			 }  
		 }  
		 }); 
		
		
		
		
	}

	
	
	// event
	var swiperD = new Swiper('#Academics .swiper-container', {
	      spaceBetween:0,
	      slidesPerView: 1,
		  // autoplay: {
		  //   delay: 3000,
		  //   disableOnInteraction: false,
		  // },
	      pagination: {
	        el: '#Academics .swiper-pagination',
	        clickable: true,
	      },
			 resize: function(){
				setTimeout(function(){
					swiperD.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
				  }, 300)
			 }, 
	});
	
	
	// hezuo
	var swiperE = new Swiper('#hezuo .swiper-container', {
	       spaceBetween:0,
	       slidesPerView: 1,
		   effect: 'fade',
		   autoplay: {
		     delay: 5000,
		     disableOnInteraction: false,
		   },		   
		   // loop: true,
	      pagination: {
	        el: '#hezuo .swiper-pagination',
	        clickable: true,
	      },
	     
		 resize: function(){
			setTimeout(function(){
				swiperE.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
			  }, 300)
		 },
		
		on:{
		    slideChange: function(){
			   $(".hz_small ul li").eq( this.activeIndex ).addClass("choose").siblings().removeClass("choose");
		       // alert('改变了，activeIndex为'+this.activeIndex);
		     },
		},
		 
	});
	
	$(".hz_small ul li").mouseenter(function(){
		var _index = $(this).index();		
		$(this).addClass("choose").siblings().removeClass("choose");		
		swiperE.slideTo( _index, 1000, false);
	});
	
	
	
	
	
	// 社交媒体
	var swiperA = new Swiper('#xy_social .xy_social_img', {
	      spaceBetween:0,
	      centeredSlides: true,
	      // autoplay: {
	      //   delay: 3000,
	      //   disableOnInteraction: false,
	      // },
	      pagination: {
	        el: '#xy_social .swiper-pagination',
	        clickable: true,
	      },
		  resize: function(){
		     setTimeout(function(){
				swiperA.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
			  }, 300)
		  }, 
		  
	      // navigation: {
	      //   nextEl: '#xy_social  .swiper-button-next',
	      //   prevEl: '#xy_social  .swiper-button-prev',
	      // },
	});
	
	var swiperB = new Swiper('#xy_social .xy_social_txt', {
	      spaceBetween:0,
	      centeredSlides: true,
		   effect: 'fade',
	      // autoplay: {
	      //   delay: 3000,
	      //   disableOnInteraction: false,
	      // },
	      pagination: {
	        el: '#xy_social .swiper-pagination',
	        clickable: true,
	      },
		  
		  resize: function(){
		     setTimeout(function(){
				swiperB.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
			  }, 300)
		  }, 
	      // navigation: {
	      //   nextEl: '#xy_social  .swiper-button-next',
	      //   prevEl: '#xy_social  .swiper-button-prev',
	      // },
	});
	
	swiperA.controller.control = swiperB;//Swiper1控制Swiper2，需要在Swiper2初始化后
	swiperB.controller.control = swiperA;//Swiper2控制Swiper1，需要在Swiper1初始化后
	
	
	
	
	// CampusLife_box xy_video
	var swiper = new Swiper('#xy_video .swiper-container', {
	      spaceBetween:0,
	      centeredSlides: true,
	      autoplay: {
	        delay: 4500,
	        disableOnInteraction: false,
	      },
	      // pagination: {
	      //   el: '#xy_video .swiper-pagination',
	      //   clickable: true,
	      // },
		  resize: function(){
			setTimeout(function(){
				swiper.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
			  }, 300)
		  },
	      // navigation: {
	      //   nextEl: '#xy_video .swiper-button-next',
	      //   prevEl: '#xy_video .swiper-button-prev',
	      // },
	});
	
	// 南科视界
	var swiper = new Swiper('.overview .swiper-container', {
	      spaceBetween:0,
	      centeredSlides: true,
	      autoplay: {
	        delay: 5000,
	        disableOnInteraction: false,
	      },
	      pagination: {
	         el: '.overview .swiper-pagination',
	         clickable: true,
	      },
		  resize: function(){
			setTimeout(function(){
				swiper.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
			  }, 300)
		  },
	});
	
	
	$(".cards ul li:nth-child(3)").addClass("fk").find("h1").show();
	$(".cards ul li").click(function(){
		var _index = $(this).index();
		$(this).addClass("fk").find("h1").fadeIn(500).parents("li").siblings().removeClass("fk").find("h1").hide();
	});
	
	
	
	
	 // research_lunbo
	 // var galleryThumbs = new Swiper('#research_lunbo .gallery-thumbs', {
	 //      spaceBetween: 0,
	 //      slidesPerView: 4,
	 //      freeMode: true,
	 //      watchSlidesVisibility: true,
	 //      watchSlidesProgress: true,
		//   direction: 'vertical',
		//   // pagination: {
		//   //   el: '#research_lunbo .swiper-pagination',
		//   //   clickable: true,
		//   // },
	 //    });
		
	 //    var galleryTop = new Swiper('#research_lunbo .gallery-top', {
	 //      spaceBetween: 0,
		//   effect: 'fade',
	 //      navigation: {
	 //        nextEl: '#research_lunbo .swiper-button-next',
	 //        prevEl: '#research_lunbo .swiper-button-prev',
	 //      },
	 //      thumbs: {
	 //        swiper: galleryThumbs
	 //      },
		//   resize: function(){
		// 	setTimeout(function(){
		// 		galleryThumbs.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
		// 	  }, 300)
		//   },
	 //    });
	
	
	$("#research_lunbo .gallery-thumbs .swiper-slide:nth-child(1)").addClass("swiper-slide-thumb-active");
	$("#research_lunbo .gallery-top .swiper-slide:nth-child(1)").addClass("swiper-slide-thumb-active").show();
	
	$("#research_lunbo .gallery-thumbs .swiper-slide").hover(function(){
		var _index = $(this).index();
		$(this).addClass("swiper-slide-thumb-active").siblings().removeClass("swiper-slide-thumb-active");
		$("#research_lunbo .gallery-top .swiper-slide").eq(_index).addClass("swiper-slide-thumb-active").show().siblings().removeClass("swiper-slide-thumb-active").hide();
		
		// galleryTop.slideTo(_index, 1000, false);
	});
	
	
	
	

	
	
})

