window.Controller=function(options){
    let init = options.init
    let object={
        view:null,
        model:null,
        init:function(view,model){
            this.view=view
            this.model=model
            if(this.model){
                this.model.init()
            }
            if(init){
                init.call(this,view,model)
            }
            
            if(this.bindEvents){
                this.bindEvents() 
            }   
        }
    }
    for (let key in options){
        if (key !== 'init'){
            object[key]=options[key]
        }
    }
    return object
}