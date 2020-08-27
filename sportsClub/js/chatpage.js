function noticeToggle(){
    let ck = document.getElementById('notbtn');
    console.log(ck.value);
    if(ck.value == 'down') {
        let noticetext = document.getElementsByClassName('noticetext');
        noticetext.style.display='block';
        ck.value ='up';
    }
    else if(ck.value == 'up') {
        let noticetext = document.getElementsByClassName('noticetext');
        noticetext.style.display='none';
        ck.value ='down';
    }

}

function addressToggle(){
    let ck = document.getElementById('ck');
    console.log(ck.value);
    if(ck.value == 'down'){
        let address = document.getElementById('address');
        address.style.display='block';
        ck.style.backgroundImage='url(img/up.png)';
        ck.value ='up';
    }else if(ck.value == 'up'){
        let address = document.getElementById('address');
        address.style.display='none';
        ck.style.backgroundImage='url(img/down.png)';
        ck.value ='down';
    }

}
