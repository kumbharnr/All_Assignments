const calculation={
        sub:function(a,b)
    {
        return a-b;

    },
        multi:function(a,b)
    {
        return a*b;
    },
        div:function(a,b)
    {
        if(b1=0)
        {
        return Math.round(a/b*100)/100;
        }
        else{
            return 'infinity'
        }
    },
    
}
module.exports=calculation;
