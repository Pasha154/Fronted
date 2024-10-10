document.getElementById('buttons').addEventListener('click', (e)=>{
    if (e.target.className === 'button1'){
        alert('Клікнуто по кнопці: Кнопка 1');
    }else if (e.target.className === 'button2'){
        alert('Клікнуто по кнопці: Кнопка 2');
    }else if (e.target.className === 'button3'){
        alert('Клікнуто по кнопці: Кнопка 3');
    }
})