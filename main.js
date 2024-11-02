let times = function(id,seconds,finish){
    if(seconds>0){
        let s=parseInt(seconds%60),
            m=parseInt(seconds/60%60),
             h=parseInt(seconds/3600%24),
             d=parseInt(seconds/86400),
            res='';

        if(d>0){
            res=d+' : ';
        }
        if(seconds>3600){
            res+=(h<10?'0'+h:h)+':';
        }
        if(seconds>60){
            res+=(m<10?'0'+m:m)+':';
        }
        res+=(s<10?'0'+s:s);
        document.getElementById('timer').innerText=res;
        setTimeout('times("'+id+'",'+(seconds-1)+','+finish+')',1000);
    }
    else {
        document.getElementById('timer').innerText = '0';
        if (finish) {
            finish();
        }
    }

}

times('timer',130);
times('timer',10, function(){alert('відлік часу завершено!')});
