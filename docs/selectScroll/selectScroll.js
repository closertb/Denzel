(function ($) {   
	   function createParent(options,selector,rows){
	        var i =0,str="";
            for(i=0;i<(rows-1)/2;i++){
                str+="<li>&nbsp;</li>";
            }
	        $(selector).text("");
	        for(i=0;i<options.length;i++){
	            str+='<li>'+options[i].name+'</li>';
	        }
            for(i=0;i<(rows-1)/2;i++){
                str+="<li>&nbsp;</li>";
            }
	        $(selector).append(str);
	    }
	    function createChild(options,selector,rows){
	        var i =0,str="";
            for(i=0;i<(rows-1)/2;i++){
                str+="<li>&nbsp;</li>";
            }
	        $(selector).text("");
	        for(i=0;i<options.length;i++){
	            str+='<li>'+options[i]+'</li>';
	        }
            for(i=0;i<(rows-1)/2;i++){
                str+="<li>&nbsp;</li>";
            }
	        $(selector).append(str);       
	    }
	    function createTime(numBegin,numEnd,defaultNum,selector,unit,rows){
	        var i =0,str="";
            for(i=0;i<(rows-1)/2;i++){
                str+="<li>&nbsp;</li>";
            }
	        $(selector).text("");
	        for(i=numBegin;i<=numEnd;i++){

                if(i===Number(defaultNum)){
                    index =i-numBegin;
                }
                if(i<10){
                   str+='<li>0'+i+unit+'</li>'; 
                }else{
	              str+='<li>'+i+unit+'</li>';
                }
	        }
            for(i=0;i<(rows-1)/2;i++){
                str+="<li>&nbsp;</li>";
            }
	        $(selector).append(str);
            return index;       
	    }                    
        function indexSearch(value,data){
            var i=0;
            for(i=0;i<data.length;i++){
                if(data[i].name===value){
                    return i;
                }
        }
      } 
      function childSearch(value,data){
            var i=0;
            for(i=0;i<data.length;i++){
                if(data[i]===value){
                    return i; // class="page"
                }
        } }                 
    var common={
        CreateUI:function (title,selector){
            var str = ''+
                '<div id="ui-shadow"></div>'+
                '<div id="ui-Page">'+
                    '<section>'+
                        '<div id="ui-title"><h1>'+title+'</h1></div>'+
                        '<div id="ui-mark"><a id="markgrand"></a><a id="markparent"></a><a id="markchild"></a></div>'+
                        '<div id="ui-scroll">'+
                            '<div id="grandwrapper">'+
                                '<ul></ul>'+
                            '</div>'+
                            '<div id="parentwrapper">'+
                                '<ul></ul>'+
                            '</div>'+
                            '<div id="childwrapper">'+
                                '<ul></ul>'+
                            '</div>'+
                        '</div>'+
                    '</section>'+
                    '<footer id="ui-Footer">'+
                        '<div id="setcancle">'+
                            '<label id="ui-confirm">确定</label>'+
                            '<label id="ui-cancle">取消</label>'+
                        '</div>'+
                    '</footer>'+
                '</div>';
            $(selector).html(str);
        },
        styleSuit:function(rows){
            $("#ui-Page").css("height",120+rows*40);
            $("#ui-scroll").css("height",rows*40);   
             $("#ui-mark").css("top",45+rows*20);                    
        },
        initCommon:function(option){
            var data = option.source;
            var axis = {
                grand:0,
                parent:0,
                child:0
            };
            if(option.initGrand!==""){
                axis.grand = indexSearch(option.initGrand,data);
                if(option.initParent!==""){
                    axis.parent = indexSearch(option.initParent,data[axis.grand].parent);
                    if(option.initChild!==""){
                        axis.child= childSearch(option.initChild,data[axis.grand].parent[axis.parent].child);
                    }                    
                }                
            }

            createParent(data,"#grandwrapper ul",option.rows);
            createParent(data[axis.grand].parent,"#parentwrapper ul",option.rows);
            createChild(data[axis.grand].parent[axis.parent].child,"#childwrapper ul",option.rows); 
            return axis;     
        },
        searchIndex:function(value,data){
            var i=0;
            for(i=0;i<data.length;i++){
                if(data[i].name===value){
                    return i;
                }
            }
        },       
        create_Scroll:function(bar,initBar,rows) { 
            initBar.grand+=1;            
            bar.grand = new iScroll("grandwrapper",{snap:"li",vScrollbar:false,
                  onScrollEnd:function () {
                      bar.indexgrand= (this.y/40)*(-1)+(rows-1)/2;//+1+initBar.grand
                  }});
           bar.grand.scrollToElement(document.querySelector("#grandwrapper li:nth-child("+initBar.grand+")"),null,null,true) ;                  
           bar.parent = new iScroll("parentwrapper",{snap:"li",vScrollbar:false,
                  onScrollEnd:function (){
                      bar.indexparent= (this.y/40)*(-1)+(rows-1)/2;//+initBar.parent
                  }});             
           initBar.parent += 1;
           bar.parent.scrollToElement(document.querySelector("#parentwrapper li:nth-child("+initBar.parent+")"),null,null,true) ;                  
           bar.child= new iScroll("childwrapper",{snap:"li",vScrollbar:false,
                  onScrollEnd:function () {
                      bar.indexchild = (this.y/40)*(-1)+(rows-1)/2;//+initBar.child
                  }});
          initBar.child+=1;       
          bar.child.scrollToElement(document.querySelector("#childwrapper li:nth-child("+initBar.child+")"),null,null,true) ;                  
        },       
        refreshScroll:function(bar){
            bar.grand.refresh();
            bar.parent.refresh();
            bar.child.refresh();            
        }                
    };
    var timeFun={
          checkdays:function(year,month){
            var new_year = year;    //取当前的年份        
            var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）        
            if(month>12)            //如果当前大于12月，则年份转到下一年        
            {        
                new_month -=12;        //月份减        
                new_year++;            //年份增        
            }        
            var new_date = new Date(new_year,new_month,1);                //取当年当月中的第一天        
            return (new Date(new_date.getTime()-1000*60*60*24)).getDate();//获取当月最后一天日期    
        },
        initDateUi:function(option){ 
            var axis = {
                grand:0,
                parent:0,
                child:0
            };         
            axis.grand=createTime(option.beginyear,option.endyear,option.initGrand,"#grandwrapper ul","",option.rows);
            axis.parent=createTime(1,12,option.initParent,"#parentwrapper ul","",option.rows);
            axis.child=createTime(1,option.maxDay,option.initChild,"#childwrapper ul","",option.rows);  
            return axis;                         
        },
         initTimeUi:function(option){ 
            var axis = {
                grand:0,
                parent:0,
                child:0
            };         
            axis.grand=createTime(0,23,option.initGrand,"#grandwrapper ul","时",option.rows);
            axis.parent=createTime(0,59,option.initParent,"#parentwrapper ul","分",option.rows);
            axis.child=createTime(0,59,option.initChild,"#childwrapper ul","秒",option.rows);  
            return axis;                         
        }         

    };   
    $.fn.selectScroll = function (options) {   

        var docType = $(this).is('input');
        var timer;  //定时器
        var datetime = false;
        var oldGrand="",oldParent="";       
        var Scroll_Bar ={
            grand:null,
            parent:null,
            child:null,
            indexgrand:1,
            indexparent:1,  
            indexchild:1,                     
        }
        $.fn.selectScroll.defaultOptions = {
            theme:"",   
            title:"请选择",               
            mode:null,  
            initGrand:"" ,   
            initParent:"" ,  
            initChild:"" ,                                      
            attatchObject:"", 
            rows:3,          
            show:false,
            source:[],
            maxDay:31,
            beginyear:2000,                 //日期--年--份开始
            endyear:2020                  //日期--年--份结束
        };
         
     $(this).click(function(){
        var temp={};
         var nowdate = new Date();       
         var that = $(this);            
        var opts = $.extend( true, {}, $.fn.selectScroll.defaultOptions, options );   
        if((opts.rows<=0)||(opts.rows%2===0)){
            opts.rows=3;
        }                   
        if(that.val()!==""){  //initial the default choose
            var arr=[];
            if(opts.theme==="time"){
                arr = that.val().split(":");
            }else{
                arr = that.val().split("-");
            }
                opts.initGrand = arr[0];
                opts.initParent = arr[1];
                opts.initChild = arr[2];              
        } 
     
        if(opts.theme==="date"){
            common.CreateUI(opts.title,opts.attatchObject);  
            common.styleSuit(opts.rows);             
            if(that.val()===""){
                opts.initGrand=parseInt(nowdate.getYear())+1900;
                opts.initParent=parseInt(nowdate.getMonth()+"")+1;
                opts.initChild=parseInt(nowdate.getDate()+"");
            } 
            oldGrand = opts.initGrand;
            oldParent= opts.initParent; 
            opts.maxDay = timeFun.checkdays(oldGrand,oldParent);            
            temp=timeFun.initDateUi(opts);
            $("#ui-shadow").show();
            $("#ui-Page").show();  
            common.create_Scroll(Scroll_Bar,temp,opts.rows);
  
            timer=window.setInterval(function(){
                var maxDay=0;
                var newG = $("#grandwrapper ul li:eq("+Scroll_Bar.indexgrand+")").html();
                var newP = $("#parentwrapper ul li:eq("+Scroll_Bar.indexparent+")").html(); 
                if(newG!==oldGrand||newP !==oldParent){
                        maxDay = timeFun.checkdays(newG,newP);
                        createTime(1,maxDay,2,"#childwrapper ul","",opts.rows);
                        Scroll_Bar.child.refresh();
                        oldGrand=newG;
                        oldParent =newP;                   
                }
            },300);          
        }else if(opts.theme==="time"){        
            common.CreateUI(opts.title,opts.attatchObject);  
            common.styleSuit(opts.rows);                 
            if(that.val()===""){
                opts.initGrand=parseInt(nowdate.getHours());
                opts.initParent=parseInt(nowdate.getMinutes());
                opts.initChild=parseInt(nowdate.getSeconds());
            } 
            oldGrand = opts.initGrand;
            oldParent= opts.initParent;
            temp=timeFun.initTimeUi(opts); 
            $("#ui-shadow").show();
            $("#ui-Page").show();  
            common.create_Scroll(Scroll_Bar,temp,opts.rows);                                                      
        }else{ /* others */
         if(opts.source==""){
            alert("当为非日期时间联动选择时，必须为其配置数据源");
            return false;
         }
          common.CreateUI(opts.title,opts.attatchObject);   
          common.styleSuit(opts.rows);                       
          oldGrand=opts.initGrand;
          oldParent=opts.initParent;
          temp = common.initCommon(opts);                      
          $("#ui-shadow").show();
          $("#ui-Page").show();  
          common.create_Scroll(Scroll_Bar,temp,opts.rows);    
          timer=window.setInterval(function(){
             var gindex=0,pindex=0;
             var newG = $("#grandwrapper ul li:eq("+Scroll_Bar.indexgrand+")").html();
             var newP = $("#parentwrapper ul li:eq("+Scroll_Bar.indexparent+")").html(); 
             if((oldGrand!==newG) ||(oldParent!==newP)){
                gindex = common.searchIndex(newG,opts.source);
                if(oldGrand!==newG){  //grand change, it will change the parent and child;
                    createParent(opts.source[gindex].parent,"#parentwrapper ul",opts.rows);
                    createChild(opts.source[gindex].parent[0].child,"#childwrapper ul",opts.rows); 
                    Scroll_Bar.parent.refresh();
                    Scroll_Bar.child.refresh();                                         
                    Scroll_Bar.parent.scrollToElement(document.querySelector("#parentwrapper li:nth-child(1)"),null,null,true) ; 
           
                    Scroll_Bar.child.scrollToElement(document.querySelector("#childwrapper li:nth-child(1)"),null,null,true) ;                                            
                    oldGrand =newG;
                    oldParent = opts.source[gindex].parent[0];                  
                }else{  //parent change, only change the child;
                    pindex = common.searchIndex(newP,opts.source[gindex].parent);
                    createChild(opts.source[gindex].parent[pindex].child,"#childwrapper ul",opts.rows); 
                     Scroll_Bar.child.refresh();        
                     Scroll_Bar.child.scrollToElement(document.querySelector("#childwrapper li:nth-child(1)"),null,null,true) ;  
                                                        
                    oldParent =newP;
                }
             }             
        },300);
    }  
         $("#ui-confirm").click(function(){
             var key ="-";
             that.val($("#grandwrapper ul li:eq("+Scroll_Bar.indexgrand+")").html()+key
            +$("#parentwrapper ul li:eq("+Scroll_Bar.indexparent+")").html()+key+$("#childwrapper ul li:eq("+Scroll_Bar.indexchild+")").html());            
            if(opts.theme==="time"){
                key =":";
                that.val($("#grandwrapper ul li:eq("+Scroll_Bar.indexgrand+")").html().substr(0,2)+key
                +$("#parentwrapper ul li:eq("+Scroll_Bar.indexparent+")").html().substr(0,2)+key+$("#childwrapper ul li:eq("+Scroll_Bar.indexchild+")").html().substr(0,2));               
             }
            Scroll_Bar.grand.destroy();
            Scroll_Bar.parent.destroy();
            Scroll_Bar.child.destroy();
            $("#ui-shadow").hide();
            $("#ui-Page").hide();  
            $(opts.attatchObject).html("");
            window.clearInterval(timer); 
       });
         $("#ui-cancle").click(function(){
           Scroll_Bar.grand.destroy();
           Scroll_Bar.parent.destroy();
           Scroll_Bar.child.destroy();            
            $("#ui-shadow").hide();
            $("#ui-Page").hide();
            $(opts.attatchObject).html("");            
           window.clearInterval(timer);  
       });      
});                              
    }
})(jQuery);  
