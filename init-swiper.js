!function(){
  var view = View('#mySlides')
  var controller=Controller(
    {
      init:function(){
        this.swiperOptions={loop: true,pagination: {el:'.swiper-pagination',},navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',},}
        this.swiper=null;
        this.initSwiper();
      },
      initSwiper:function(){
          this.Swiper = new Swiper (
          this.view.querySelector('.swiper-container'),
          this.swiperOptions 
        )  
      }
    }
  )

  controller.init(view)
}.call()
