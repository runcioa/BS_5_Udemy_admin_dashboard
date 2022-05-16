var btn = document.querySelector('.btn-slide');

btn.addEventListener('click', function(){
    document.querySelector('.side-nav').classList.toggle('slide');
    document.querySelector('.open').classList.toggle('d-none');
    document.querySelector('.close').classList.toggle('d-none');
})

