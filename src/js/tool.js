export function fetchInitOption(json){
    let sendData;
    if(!json.hasOwnProperty('token')){
        let token ='';
        let id = json.token=sessionStorage.getItem('token');
        (id)&&(token=id);
        json.token=id;
    }
    if(json instanceof Object) {
        let res=new Array();
        for(let item in json){
            res.push(item+'='+json[item])
        }
        sendData =res.join('&') ;
    }else{
        sendData = json ;
    }
    return {
        method:'post',
      //  mode:'no-cors',
        mode:'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:sendData
    };
} ;
export const reqUrl = '/myBlog';
//export const reqUrl = 'http://192.168.0.102:8089/myBlog';
//export const reqUrl = 'http://localhost:8089/myBlog';
