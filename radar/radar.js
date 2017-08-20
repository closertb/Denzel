;(function(){
    const radar ={};
    const m = Math;
    const PI = m.PI;
    let offset = {};
    let option ={
        radius:100,
        clockWise:false,
        split:{
            number:'4',
            style:{
                lineColor:'',
                lineWidth:1,
                areaColor:['white','gray']
            }
        },
        axis:{
            style:{
                outRange:5,
                color:'red',
                width:1
            }
        },
        label:{
            value:[{label:'标签1',max:100},{label:'标签2',max:100},{label:'标签3',max:100}],
            style:{
                gap:16,
                font:16,
                textAlign:'center',
                textBaseline:'middle',
                color:'black'
            },
        },
        item:{
            show:false,
            borderColor:'black',
            borderWith:1,
            type:'solid',
            fillColor:'white'
        },
        hover:{
            show:false,
            backgroundColor:'',
            opacity:0.5,
            font:'',
            color:'black',
            formatter:function(){
                console.log('hover');
            }
        },
        data:{
            value:[60,80,90],
            style:{
                borderColor:'black',
                fillColor:'white',
                borderWidth:'2'
            }

        }

    };
    radar.init =function(dom) {
        if(dom===null||dom===undefined){
            console.error('append Dom can not be null');
            return null;
        }
        return new Render(dom);
    };
    function Render(dom){
        const id = Math.round(Math.random()*10000);
        const canvas = document.createElement('canvas');
        /*初始化挂载节点Dom样式,relative的作用是供触发hoverover时，
          形成相对坐标原点，flow的作用为触发挂载点的BFC*/
        dom.style.position = 'relative';
        dom.style.overflow = 'hidden';
        /*根据挂载点的长宽，初始化画布的样式*/
        canvas.id = id;
        let x=dom.offsetWidth,y=dom.offsetHeight;
        if(x===0||y===0){
            console.error('append Dom has no height or width');
            return ;
        }
        canvas.width = x;
        canvas.height =y;
        offset = {
            x:x,
            y:y
        };
        this.canvas =canvas;
        this.dom = dom;
        this.id = id;
        dom.appendChild(canvas);
    }
    Render.prototype.setOption=function(opt){
        let opts={};
        opts=merge(opts,option,opt);
     //   console.log(opts);
        init(this,opts);
    };

    function init(target,option) {
        const raduis = Number(option.radius);
        const canvas = target.canvas;
        const dom = target.dom;
        const ctx = canvas.getContext('2d');
        let l = option.label.value.length;
        let data = option.data.value;
        let label= option.label.value.map(function (item) {
            return item.label;
        });
        let labelMax= option.label.value.map(function (item) {
            return Number(item.max?item.max:raduis);
        });
        let arcData =[],pointData=[],labelData=[];
        const single = 2*PI /l ;

        for(let i = 0;i<l;i++){
            arcData.push([raduis*m.sin(i*single),raduis*m.cos(i*single)]);
            labelData.push([(raduis+16)*m.sin(i*single),(raduis+16)*m.cos(i*single)]);
        }
        for(let i = 0;i<l;i++){
            let ratio = data[i]/labelMax[i];
            pointData.push([arcData[i][0]*ratio,arcData[i][1]*ratio]);
            label[i] = {
                label:label[i],
                position:labelData[i]
            }
        }

        ctx.translate(offset.x/2,offset.y/2);
        drawArc(ctx,raduis,option.split.number,option.split.style);
        drawAxis(ctx,arcData,option.axis.style);
        drawRegion(ctx,pointData,option.data.style);
        drawPoint(ctx,pointData,option.item);
        drawText(ctx,label,option.label.style);
        addListener(dom,canvas,pointData);
        addAutoShow(dom,pointData);
    }
    function drawAxis(ctx,data,style){
        ctx.beginPath();
        ctx.strokeStyle = style.lineColor;
        for(let i= 0;i<data.length;i++){
            ctx.moveTo(0,0);
            ctx.lineTo(data[i][0],data[i][1])
        }
        ctx.stroke();
    }

    function drawArc(ctx,radius,splitNum,style){
        ctx.beginPath();
        ctx.strokeStyle = style.lineColor;
        ctx.fillStyle =style.areaColor[0];
        const splitStep =radius/splitNum;
        for(let i=1;i<=splitNum;i++){
            ctx.moveTo(i*splitStep,0);
            ctx.arc(0,0,i*splitStep,0,2*PI,false);
        }
        ctx.fill();
        ctx.stroke();
    }
    function drawRegion(ctx,data,style) {
        const max = data.length;
        ctx.strokeStyle = style.borderColor;
        ctx.fillStyle=style.fillColor; //rgba(10,50,200,0.5)
        ctx.lineWidth = style.borderWidth;
        ctx.beginPath();
        ctx.moveTo(...data[0]);

        for(let i=0;i<max;i++){
            ctx.lineTo(...data[i]);
        }
        ctx.lineTo(...data[0]);
        ctx.fill();
        ctx.stroke();
    }
    function drawPoint(ctx,data,style) {
        const max = data.length;
        const r= 3;
        ctx.strokeStyle = style.borderColor;
        ctx.fillStyle=style.fillColor; //rgba(10,50,200,0.5)
        ctx.lineWidth = style.borderWidth;
        ctx.beginPath();
        for(let i=0;i<max;i++){
            ctx.moveTo(data[i][0]+r,data[i][1]);
            ctx.arc(...data[i],r,0,2*PI);
            ctx.fill();
        }
        ctx.stroke();
    }
    function drawText(ctx,data,style) {
        const max = data.length;
      //  ctx.strokeStyle = 'red';//style.color
        ctx.font = 'bold 14px Arial'
        ctx.fillStyle ='red';  //style.backgroundColor
        console.log(ctx);
        for(let i=0;i<max;i++){
            let x= data[i].position[0];
            if((x>=-1)&&(x<=1)){
                ctx.textAlign ='center';
            }else if(x>1){
                ctx.textAlign ='left';
            }else{
                ctx.textAlign ='right';
            }
            ctx.fillText(data[i].label,...data[i].position);
        }
    }
    function hoverLabel(dom,point,style){
        let label =document.createElement('label');
        label.style.position='absolute';
        label.style.top=point.y+'px';
        label.style.left=point.x+'px';
        label.style.border='1px solid yellowgreen';
        label.style.background = 'gray';
        label.style.opacity = '0.5'
        label.style.zIndex = 999;

        label.innerHTML ='show:0999';
        dom.appendChild(label);
    }
    function removeLabel(dom) {
            (dom.querySelectorAll('label').length)&&(dom.removeChild(dom.querySelector('label')));
    }
    function addListener(dom,canvas,pointData){
        //获取鼠标在canvas画布上的位置(**不是浏览器窗口的鼠标位置)
        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left * (canvas.width / rect.width),
                y: evt.clientY - rect.top * (canvas.height / rect.height)
            }
        }
        dom.addEventListener('click',function (evt) {
            const mouse = getMousePos(canvas, evt);
            let point={};
            let index =-1;
            const r =5;
            point.x=mouse.x-offset.x/2;
            point.y=mouse.y-offset.y/2;
            for(let i=0;i<pointData.length;i++) {
                let item = pointData[i];
                if (point.x > (item[0] - r) && point.x < (item[0] + r) && point.y > (item[1] - r) && point.y < (item[1] + r)) {
                    index = i;
                    break;
                }
            }
            if(index!==-1){
                hoverLabel(dom,mouse);
            }else{
                removeLabel(dom);
            }
        })
    }
    function autoLabel(dom,point){
        removeLabel(dom);
        let label =document.createElement('label');
        label.innerHTML ='show:0999';

        label.style.position='absolute';
        label.style.top=point[1]+offset.y/2 +'px';
        label.style.left=point[0]+offset.x/2+'px' ;
        label.style.border='1px solid yellowgreen';
        label.style.background = 'gray';
        label.style.opacity = '0.5'
        label.style.zIndex = 999;

        dom.appendChild(label);
    }
    function addAutoShow(dom,pointData){
        let step =-1;
        setInterval(function(){
            step = (step+1)%6;
            autoLabel(dom,pointData[step]);
        },1000)
    }
    function ObjectisObject(value) {
        return value !== null && Object.prototype.toString.call(value) === '[object Object]';
    }
    function clone(source) {
        if (Array.isArray(source)) {
            return source.map(clone);
        }
        if (ObjectisObject(source)) {
            var target = {};
            var keys = Object.keys(source);
            var klen = keys.length;
            var k = 0;
            for (; k < klen; ++k) {
                target[keys[k]] = clone(source[keys[k]]);
            }
            return target;
        }

        return source;
    }
    /*
    *target 合并后的新对象
    *source 原始对象
    *options 用户设定对象
    * */
    function _merger(key, target, source, options) {
        var tval = options[key];
        var sval = source[key];

        if (ObjectisObject(tval)&&ObjectisObject(sval)) {
            let res = {};
            target[key]=merge(res,sval,tval);
        }else {
            target[key] = tval?clone(tval):clone(sval);
        }
    }
    /*
    *target 合并后的新对象
    *source 原始对象
    *options 用户设定对象
    * */
    function merge(target, source, options) {
        var sources = Array.isArray(source) ? source : [source];
        var ilen = sources.length;
        var i, keys, klen, k;


        options = options || {};

        for (i = 0; i < ilen; ++i) {
            source = sources[i];
            if (!ObjectisObject(source)) {
                continue;
            }
            keys = Object.keys(source);
            for (k = 0, klen = keys.length; k < klen; ++k) {
                _merger(keys[k], target, source, options);
            }
        }
        return target;
    }
    if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = radar;
    } else if (typeof define === 'function' && define.amd) {
    define(function() { return radar; });
    } else {
    this.radar = radar;
    }

}).call(function() {
    return this || (typeof window !== 'undefined' ? window : global);
}());