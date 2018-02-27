window.Model=function(options){
let resourceName = options.resourceName
    return {
        init:function(){
            var APP_ID = 'CIs7YkEkWIQgcC4X5UgIhA3D-gzGzoHsz';
            var APP_KEY = 'HIpGByJRlJiUOOWJhFflUUvr';
            AV.init({appId: APP_ID,appKey: APP_KEY});
        },
        fetch:function(){
            let query = new AV.Query(resourceName)
            return query.find() 
        },
        save:function(object){
            let Table = AV.Object.extend(resourceName);
            let record = new Table();
            return record.save(         // Promise 对象
                 object
            )
        }
    }
}