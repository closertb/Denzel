/**
 * Title:
 * @author Mr Denzel
 * @create Date 2017-09-25 22:45
 * @version 1.0
 * Description:
 */
;(function () {
    const option ={};
    var ctx={},
        balls =[],
        angleX = 0-Math.PI/10000,
        angleY = 0-Math.PI/10000;
    const m = Math;
    const PI = m.PI;
    function RotateBall(dom){
        const canvas = document.createElement('canvas');
        /*根据挂载点的长宽，初始化画布的样式*/
        var x=dom.offsetWidth,y=dom.offsetHeight;
        if(x===0||y===0){
            console.error('append Dom has no height or width');
            return ;
        }
        canvas.width = x-20;
        canvas.height =y-20;
        option.radius = ((x>y)?y:x)-10;
        option.longitudeNum = 360 / 12;
        option.latitudeNum = 360 / 15;
        option.centerX = x/2-10;
        option.centerY = y/2-10;
        ctx =canvas.getContext("2d");
        dom.appendChild(canvas);
    }
    RotateBall.prototype.init = function (longitudeAngle,latitudeAngle) {
        this.animation = new Animation();
        rotateX();
    }
    RotateBall.prototype.start = function () {
        this.animation.start();
    }
    RotateBall.prototype.stop = function () {
        this.animation.stop();
    }
    Animation.prototype = {
        isrunning: false,
        init: function () {
            var num = LayerIntervalUp / 2;         					//layer 的数目    //假定每一层 间隔30  画上半球
            for (var i = 0; i <=num/2; i++) {
                var l = new layer(i, 1);
                l.draw();
                var l = new layer(i, -1);
                l.draw();
            }

        },
        start:function(){
            this.isrunning = true;
            animate();
        },
        stop:function(){
            this.isrunning = false;
        }
    }
    function animate(){
        ctx.clearRect(0,0,option.width , option.height);
        //  rotateX();
        rotateY();
        //  rotateZ();
        for(var i=0;i<balls.length;i++){
            balls[i].paint();
        }
        function makeLines(layer,up) {
            function linesPoint(start,end){
                var length = start.length;
                var _vpx = vpx,_vpy = vpy;
                var point;
                var randam = Math.ceil(Math.random()*10)-5;
                ctx.beginPath();
                ctx.strokeStyle ="rgba(255,255,255,0.5)";
                point = start[0];
                ctx.moveTo(point.x + _vpx, point.y + _vpy);
                ctx.lineTo(end[0].x + _vpx, end[0].y + _vpy);
                ctx.lineTo(end[length-1].x + _vpx, end[length-1].y + _vpy);
                for(var i=1;i<length;i++){
                    point = start[i];
                    ctx.moveTo(point.x + _vpx, point.y + _vpy);
                    ctx.lineTo(end[i].x + _vpx, end[i].y + _vpy);
                    ctx.lineTo(end[(i-1)%length].x + _vpx, end[(i-1)%length].y + _vpy);
                    ctx.lineTo(point.x + _vpx, point.y + _vpy);
                }
                ctx.stroke();
            }
            var flag = (up>0)?0:2;
            for(var i=0+layer*flag;i<layer+layer*flag;i++){
                var startPoint = balls.filter(function (t) {
                    return (t.num ===i);
                });
                var endPoint = balls.filter(function (t) {
                    return (t.num ===(i+1));
                });
                linesPoint(startPoint,endPoint);
            }
        }
        makeLines(6,1);
        makeLines(6,-1);

        if(animation.isrunning) {
            if("requestAnimationFrame" in window){
                requestAnimationFrame(animate);
            }
            else if("webkitRequestAnimationFrame" in window){
                webkitRequestAnimationFrame(animate);
            }
            else if("msRequestAnimationFrame" in window){
                msRequestAnimationFrame(animate);
            }
            else if("mozRequestAnimationFrame" in window){
                mozRequestAnimationFrame(animate);
            }
        }
    }
    var layer = function (num, up) {
        var length  = LayerIntervalUp / 4 ;  //取中值
        this.radius = Radius * Math.sin(num * Math.PI/ length/2);
        this.up = up;
        this.num = num+6 -up*6;
        this.x = 0;
        this.y = 0;
    }

    layer.prototype = {
        setBalls: function (radius) {
            var offsetAngle = 2*Math.PI/LayerBallNum*this.num;
            for(var i=0; i<LayerBallNum/2; i++){
                var angle = offsetAngle+2 * Math.PI / LayerBallNum *2*i;
                var b = new ball(this.num,radius * Math.cos(angle), radius * Math.sin(angle), this.up * Math.sqrt(Math.pow(Radius, 2) - Math.pow(radius, 2)), 4);
                b.paint();
                balls.push(b);
            }

        },
        draw: function () {
            ctx.beginPath();
            ctx.arc(vpx, vpy, this.radius , 0, 2*Math.PI, true);
            ctx.strokeStyle = "#FFF";
            ctx.stroke();
            this.setBalls(this.radius);
        }
    }
    var ball = function(num,x , y , z , r){
        this.num = num;
        this.x = x;
        this.y = y;
        this.z = z;
        this.r = r;
        this.width = 2*r;
    }

    ball.prototype = {
        paint:function(){
            var fl = 1500 //焦距
            ctx.save();
            ctx.beginPath();
            var scale = fl / (fl - this.z);   // scale 越大，点越大；换句话说，离我们肉眼越近，放大的越多
            var alpha = (this.z+Radius)/(4*Radius); // 离中心点越大，z越小，alpha越小，透明度越高
            var blurScale = (Radius-Math.abs(this.y))/Radius;
            ctx.arc(vpx + this.x, vpy + this.y, this.r*scale , 0 , 2*Math.PI , true);
            ctx.fillStyle = "rgba(255,255,255,"+(alpha+0.5)+")"; //alpha越大，透明度越低。
            ctx.shadowColor = "rgba(233,30,99,"+(alpha*2)+")";
            ctx.shadowBlur = 10*scale*blurScale;
            ctx.fill();
            ctx.restore();
        }
    }
    function rotateX(){
        var angle = Math.PI/2.2;
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        for(var i=0;i<balls.length;i++){
            var y1 = balls[i].y * cos - balls[i].z * sin;
            var z1 = balls[i].z * cos + balls[i].y * sin;
            balls[i].y = y1;
            balls[i].z = z1;
        }
    }

    function rotateY(){
        var cos = Math.cos(angleY);
        var sin = Math.sin(angleY);
        for(var i=0;i<balls.length;i++){
            var x1 = balls[i].x * cos - balls[i].z * sin;
            var z1 = balls[i].z * cos + balls[i].x * sin;
            balls[i].x = x1;
            balls[i].z = z1;
        }
    }

    function rotateZ(){
        var angle = Math.PI/2;
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        for(var i=0;i<balls.length;i++){
            var x1 = balls[i].x * cos - balls[i].y * sin;
            var y1 = balls[i].y * cos + balls[i].x * sin;
            balls[i].x = x1;
            balls[i].y = y1;
        }
    }
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = RotateBall;
    } else if (typeof define === 'function' && define.amd) {
        define(function() { return RotateBall; });
    } else {
        this.RotateBall = RotateBall;
    }


}).call(function() {
    return this || (typeof window !== 'undefined' ? window : global);
}());