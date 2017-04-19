;(function($){
    var method={
        makeBar:function(input,options){
            var _width=$(input).attr("value");
          if( _width!==""){
             options.barWidth=_width;
           }
            var temphtml="<div class='proCon'><div class='proText'>"+options.barWidth+"</div>"+
      "<div class='proValue' style='width:"+options.barWidth+"'></div></div>" ;
            $(input).addClass("proBar")
            $(input).append(temphtml);
        }
    };
    $.fn.ProcessBar=function(options){
        options= options||{};
        options.version="1.0.9";
        options.barWidth=options.barWidth||"";
        
        this.each(function(){
            return method.makeBar(this,options)
        });
    }
})(jQuery);