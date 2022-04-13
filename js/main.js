const modalWindow=document.querySelector('.modal');
const modalInner=document.querySelector('.modal__inner');
const buttonShowModalSpidermanTrailer=document.querySelectorAll('.spiderman_trailer-js');
const buttonShowModalBatmanTrailer=document.querySelectorAll('.batman_trailer-js');
const buttonSpidermanMovie=document.querySelectorAll('.spiderman_movie-js');

const spiderman_trailer=`<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/V0hagz_8L3M" 
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`;
const batman_trailer=`<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/g8Y_GL5h7Fs"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`;
const spiderman_movie=`<video width="560" height="315" preload="auto" poster="https://andrei1994rus.github.io/movea/img/poster.png" controls>
        <source src="https://andrei1994rus.github.io/movea/video/spiderman_trailer.mp4" type="video/mp4">
        <source src="https://andrei1994rus.github.io/movea/video/spiderman_trailer.webm" type="video/webm">
        <source src="https://andrei1994rus.github.io/movea/video/spiderman_trailer.ogv" type="video/ogg">
        <object data="https://andrei1994rus.github.io/movea/video/spiderman_trailer.swf" type="application/x-shockwave-flash">
            <param name="movie" value="https://andrei1994rus.github.io/movea/video/spiderman_trailer.swf">
        </object>
    </video>`;

buttonShowModalSpidermanTrailer.forEach((item)=>
{
    item.addEventListener('click',()=>
    {
        modalWindow.classList.add('active');
        modalInner.innerHTML=`${spiderman_trailer}`;
    });
});

buttonShowModalBatmanTrailer.forEach((item,i)=>
{
    item.addEventListener('click',()=>
    {
        modalWindow.classList.add('active');
        modalInner.innerHTML=`${batman_trailer}`;
    });
});

buttonSpidermanMovie.forEach((item)=>
{
    item.addEventListener('click',()=>
    {
        modalWindow.classList.add('active');
        modalInner.innerHTML=`${spiderman_movie}`;
    });
});

modalWindow.addEventListener('click',()=>
{
    modalWindow.classList.remove('active');
    modalInner.innerHTML=``;
});