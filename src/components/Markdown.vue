<script>
import {fetchInitOption,reqUrl} from '../js/tool.js';
import {editor,toOrigin} from '../js/component/editor.js';
import router from '../router'
export default {
    render:function(createElement){
                return editor(createElement,this);
            },
        data: function() {
            return {
                arcticle:{  
                    index:0,
                    title:'', 
                    itemName:'',
                    itemId:3,
                    tags:'',
                    content:''
            },
            token:''
            }  
        },
    methods:{
        fetchDataById:function(indexId,that){
            fetch(reqUrl+'/BlogServlet', fetchInitOption({flag:"getEditContent",queryId:indexId}))            
            .then(function(response){
                if(response.ok){
                    return response.json();
                } else {
                    console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                }  
            }).then(function(data){
            that.arcticle =data;
            that.arcticle.content =toOrigin(that.arcticle.content);
            that = null;
            })  
        },
        uploadImg:function(data,callback){
                fetch(reqUrl+'/imgUploadServlet',{
                            method:'post',
                            mode:'no-cors', 
                            body:data                       
                })
                .then(function(response){
                    if(response.ok){
                        return response.text();  
                    }else{
                        console.error('网络错误，请稍后再试')
                        return ;
                    }  
                }).then(function(data){
                    callback(reqUrl+data);//函数回调
                })
        },
        editContent:function(data){               
            if(this.token===null){
                alert("请先登录");
                return ;
            }
            if(this.token.length<10){
                alert("请确保你已正确登录");
                return ;                   
            }
            data.token = this.token;
                fetch(reqUrl+'/BlogServlet',fetchInitOption(data))
                .then(function(response){
                    if(response.ok){
                        return response.text();
                    }else{
                        console.error('网络错误，请稍后再试');
                    }
                }).then(function(data){
                    if(/^[1-9]\d*$/.test(data)){  
                        router.replace({path: '/coninfo',query:{arcindex:data}});
                    }else{
                        alert('你的token已超期，需重新登录');
                    }

                })
        }
    },
    beforeRouteEnter(to, from, next){
        let token =sessionStorage.getItem('token');
        if(token===null){
            alert('你的token已失效')
            return;
        }
        next(function(k){
            k.token = token;
            let query = k.$route.query
            if(query.hasOwnProperty('arcindex')){
                k.fetchDataById(query.arcindex,k);
            }
        });
    }   
}
</script>
<style scoped>
/*此处定义markdown编辑器的样式*/
.markdown {padding:.5rem 2rem;margin-bottom: 3rem;}
#titleInput{display: inline-block;box-sizing:border-box; width:100%;border:1px solid #ccc;border-radius: 4px;margin:1rem 0 1rem;padding:.5rem .8rem;font-size:1.1rem;font-weight:500;}
.multiSelect {display: flex;justify-content: space-between;padding:.5rem 0 1rem;}
.multiSelect>*{display: inline-block;height:24px;padding:.2rem .5rem;border:1px solid #ddd;border-radius: 4px;}
#classInput {width:20%;}
#itemInput {width:20%;height:auto;font-size: .9rem;}
#tagInput {width:55%;}
.editorBox {border: 2px solid rgb(238, 238, 238);border-top-left-radius: 4px;border-top-right-radius: 4px;}
.editorBox li {display: inline-block;margin:.2rem .5rem;padding:1px;height:auto;}
.tagImg {cursor:pointer;display:block;width:20px;height: 20px;background-repeat: no-repeat;background-size: 380px 60px;
background-image: url(../assets/editor@2x.png);background-position:0 0;text-indent: 110%;white-space: nowrap;overflow: hidden; }
.editorBox a:hover {background-position-y:-40px; color:red; border-color: #f6f6f6;background-color: #f6f6f6;}
.contentBox {display: flex;font-weight:500;min-height:400px;max-height:500px;}
.contentBox textarea {display:block;width: 50%;font-size: 1rem;}
/*.contentBox div+div {}*/
.contentBox>div{width: 50%;border:1px solid #ccc;border-left: 0;overflow-x:hidden;overflow-y: auto;padding:0 .5rem;font-size: 1rem;outline: none;}
.contentBox a {color:blue;text-decoration: none;cursor: pointer;}

.contentBox code {display:inline-block;margin:1rem 1rem;background: #f2f2f2;font-size: .9rem;width:95%;max-height:16rem;overflow:auto; }

.fixFooter{ position: fixed;bottom:0;left: 0;right: 0;background:#f2f2f2 ;opacity: 1; display: flex;justify-content:flex-end;  border-top: 2px solid #ccc;padding:.5rem 1rem}
.fixFooter button{display: inline-block;line-height: 20px;padding:.3rem .5rem;margin:.3rem 1rem;border:1px solid #ddd;border-radius: 4px;color:#111;background:#ccc}
.fixFooter button:last-child{color:#fff;background:green;border-color: green;}
/*.editDiv{
}*/
/*此处定义markdown编辑器插入链接对话框的样式*/

.newWindow{display:none;position:fixed;margin:0 auto; }
.newWindow .smallDialog{transform: translate3d(0,0,0)}
.smallDialog{width: 600px;position: relative;margin:30px auto;background: #fff;;border:1px solid #999;box-shadow:0 5px 15px rgba(0,0,0,0.5);border-radius: 6px; }
.dialogHeader{display: flex;justify-content: space-between;background:#f3f3f3;border-top-left-radius: 6px;border-top-right-radius: 6px;border-bottom: 1px solid #e5e5e5;padding:1rem;min-height: 1rem; }
.dialogTitle {font-size: 1.5rem;}
#linkTitle{display: block;}
#imgTitle{display: none}
#dialogCancel {font-weight: bold;font-size: 1.2rem;color:#ccc;cursor: pointer; }
.dialogContent {min-height: 2rem;padding: 1rem;padding: 1rem;}
.dialogContent>input{display: inline-block;border:1px solid #ccc;border-radius: 4px;width: 98%;min-height: 2rem;}
.dialogContent button {display: none;}

.imgUpload{display:none;}
.imgUpload a{padding: 4px 10px;height:20px;line-height: 20px;color: #888;background: #fafafa;border: 1px solid #ddd;
    border-radius: 4px;overflow: hidden;display:block;text-decoration: none;font-size:.9rem}
.imgUpload #realFile{ position: absolute;left: 0;top: 0;display: inline-block;width:100%;opacity: 0;filter: alpha(opacity=0);cursor: pointer}
.imgUpload #fakeFile {background-color: #ddd;padding: 4px 10px;height: 20px;display:block;width:80%; border: 1px solid #ddd;border-radius: 4px;}
.imgUpload:hover {color: #444;background: #eee; border-color: #ccc;text-decoration: none}

.dialogFooter{display: flex;justify-content:flex-end;padding: .5rem; }
.dialogFooter button {display: inline-block;margin-right: 1rem;border:1px solid #008151;border-radius: 4px;padding:4px 8px;background: #009a61;color: white;}
.dialogFooter button:first-child {border:1px solid #ccc;background: #fff;color:#111} 

/*当插入链接对话框转变为插入图片时，为newWindow头添加imgAdd类，以触发Dom样式改变*/
.imgAdd #linkTitle{display: none;}
.imgAdd #imgTitle{display: block}

.imgAdd .dialogContent>input{display: none;}
.imgAdd .imgUpload {display:flex;width:100%;position:relative;min-height:28px;justify-content: space-between}

/*for larger screens set the nav to the left and give the main content extra margin to compensate for it*/
@media (max-width: 700px) {
   
    .multiSelect{ flex-wrap:wrap;}
    #classInput {width:45%;}
    #itemInput {width:45%;}
    #tagInput {width:100%;margin-top:.5rem;}
    .markdown {padding:.5rem 1rem;margin-bottom: 2rem;}
    .contentBox {display: flex;font-weight:500;min-height:300px;max-height:350px;}    
    .contentBox textarea {width: 100%;}
    .contentBox>div{display:none; }
    .smallDialog{width: 300px;}
}
</style>
