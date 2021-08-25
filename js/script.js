const btn=document.querySelector('#btnClick'),
        cloud=document.querySelector('#div-cloud'),
        book=document.querySelector('#book-saltan');

btn.onclick=()=>{
    cloud.classList.toggle('hide');
    book.classList.toggle('show');
}