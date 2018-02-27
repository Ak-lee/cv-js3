!function(){
  var view = View('#topNavBar')

  var controller =Controller({
    bindEvents:function(){
      window.addEventListener('scroll',() => {
        var view = this.view
        if (window.scrollY>0) {
          this.active()
        }else {
          this.deactive()
        }
      })
    },
    active:function(){
      this.view.classList.add('sticky')
    },
    deactive:function(){
      this.view.classList.remove('sticky')
    }
  })

  controller.init(view)
}.call()

