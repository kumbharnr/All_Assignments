const calc= {
    fact:function(n){
        return n*n;
    },
    max2:function(a,b){
        if(a>b)
            return a;
        else
            return b;
    },
    
    isEven : function(n){
        if(n%2==0)
            return true;
        else
            return false;
    },
    max:function(arr){
        return Math.max(...arr);
    },
    search:function(arr,key){
        var flag = false;
        arr.forEach(function(element){
            if(element==key){
                flag =true;
                return;
            }
        });
        return flag;
    }

}

module.exports=calc;