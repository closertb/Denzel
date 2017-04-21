var myPlot=function(){

    function calRatio(x,y){  
        return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));  
    };
    function drawDashLine(context,x1,y1,x2,y2,dashLen){  
        dashLen = dashLen === undefined ? 5 : dashLen;  
        var beveling = calRatio(x2-x1,y2-y1);   
        var num = Math.floor(beveling/dashLen);  
        
        for(var i = 0 ; i < num; i++)  
        {  
            context[i%2 == 0 ? 'moveTo' : 'lineTo'](x1+(x2-x1)/num*i,y1+(y2-y1)/num*i);  
        }  
    }    
    return{
    plot:function(canvas){  
          if(canvas.getContext){  
            var ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.lineWidth=4;
            ctx.lineCap="round";
            ctx.strokeStyle="#fff";
            ctx.moveTo(20, 370);
            ctx.lineTo(242,230);
            ctx.moveTo(262,223);           
            ctx.arc(262,223,4,0*Math.PI,2*Math.PI,false);	
            ctx.arc(262,223,12,0*Math.PI,2*Math.PI,false);		
            ctx.lineTo(510, 208);
            ctx.moveTo(530,205); 
            ctx.arc(530,205,4,0*Math.PI,2*Math.PI,false);	
            ctx.arc(530,205,12,0*Math.PI,2*Math.PI,false);	            
            ctx.lineTo(765, 70);
            ctx.arc(765, 70,4,0*Math.PI,2*Math.PI,false);	          
            drawDashLine(ctx,765,70,880,10,5);       
            ctx.stroke();
            ctx.closePath();
        }
    }
    };
}();