const modalWindow=document.querySelector('.modal');
const modalInner=modalWindow.firstElementChild;
const buttonShowModalSpidermanTrailer=document.querySelectorAll('.spiderman_trailer-js');
const buttonShowModalBatmanTrailer=document.querySelectorAll('.batman_trailer-js');
const buttonSpidermanMovie=document.querySelectorAll('.spiderman_movie-js');
const headerPersonal=document.querySelector('.header__personal');
const headerNavLink=document.querySelectorAll('.header__nav a');
const headerTime=document.querySelector('.header__time');
const headerDay=document.querySelector('.header__day');
let titleTrendingAllMovies;
let titlePopularAllMovies;
const divTrending=document.querySelector('.trending-js');
const divPopular=document.querySelector('.popular-js');
const nonSelectedGenres=document.querySelectorAll('.gray');
const asideAdd=document.querySelector('.aside__add');
const favouriteGenres=document.querySelector('.favourite-js');

const alertMessage='You are guest. But this site doesn\'t have authorization.';

const colors=
{
    'Action' : 'purple',
    'Western' : 'orange',
    'Adventures' : 'purple',
    'Drama' : 'orange',
    'Comedy' : 'green',
    'Fantasy' : 'purple',
    'Family' : 'green',
    'Musical' : 'orange'
};

window.onload=()=>
{
    time();

    bindTitleTrendingAllMovies();
    bindTitlePopularAllMovies();

	this.interval=setInterval(()=>time(),1000);
};

const bindTitleTrendingAllMovies=()=>
{
    titleTrendingAllMovies=document.querySelector('.trending__all_movies-js');
    titleTrendingAllMovies.addEventListener('click',function()
    {
        if(this.firstElementChild.textContent==='All movies')
        {
            divTrending.firstElementChild.removeChild(this);
            divTrending.innerHTML+=trending_all_movies;
            addTitleTrendingAllMovies('Hide');
        }
        
        else
        {
            const popularShown=document.querySelector('.trending.shown');
            divTrending.firstElementChild.removeChild(this);
            divTrending.removeChild(popularShown);
            addTitleTrendingAllMovies('All movies');
        }
    });
};

const bindTitlePopularAllMovies=()=>
{
    titlePopularAllMovies=document.querySelector('.popular__all_movies-js');
    titlePopularAllMovies.addEventListener('click',function()
    {   
        if(this.firstElementChild.textContent==='All movies')
        {
            divPopular.firstElementChild.removeChild(this);
            divPopular.innerHTML+=popular__all_movies;
            addTitlePopularAllMovies('Hide');
        }
        
        else
        {
            const popularShown=document.querySelector('.popular.shown');
            divPopular.firstElementChild.removeChild(this);
            addTitlePopularAllMovies('All movies');
            divPopular.removeChild(popularShown);
        }
    });
};

const addTitleTrendingAllMovies=text=>
{
    titleTrendingAllMovies=document.querySelector('.trending__all_movies-js');
    if(!titleTrendingAllMovies)
    {
        divTrending.firstElementChild.innerHTML+=
        `
        <div class="title__right trending__all_movies-js">
            <span>${text}</span>
            <img src="img/arrow.svg" alt="arrow">
        </div>
        `;
        bindTitleTrendingAllMovies();
    }
};

const addTitlePopularAllMovies=text=>
{
    titlePopularAllMovies=document.querySelector('.popular__all_movies-js');
    if(!titlePopularAllMovies)
    {
        divPopular.firstElementChild.innerHTML+=
        `
        <div class="title__right popular__all_movies-js">
            <span>${text}</span>
            <img src="img/arrow.svg" alt="arrow">
        </div>
        `;
        bindTitlePopularAllMovies();
    }
};

const time=()=>
{
    let time=`${new Date().getHours()}:${new Date().getMinutes()}`;
    let months={
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    }
    let date=`${new Date().getDate()} ${months[new Date().getMonth()]}`;
    headerTime.innerText=time;
    headerDay.innerText=date;
};

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

const trending_all_movies=`
<div class="trending shown">
    <div class="trending__item">
        <div class="trending__footer">
            <div class="trending__footer-left">
                <div class="button-play__wrap small">
                    <div class="button-play spiderman_movie-js">
                        <img src="img/triangle.png" alt="triangle">
                    </div>
                </div>
                <div class="trending__title">
                    <h3 class="trending__header">Spider-Man: No Way Home</h3>
                    <div class="trending__date">Feb 2021</div>
                </div>
            </div>
            <div class="trending__time">02:30:00</div>
        </div>
    </div>
    <div class="trending__item">
        <div class="trending__footer">
            <div class="trending__footer-left">
                <div class="button-play__wrap small">
                    <div class="button-play spiderman_movie-js">
                        <img src="img/triangle.png" alt="triangle">
                    </div>
                </div>
                <div class="trending__title">
                    <h3 class="trending__header">Spider-Man: No Way Home</h3>
                    <div class="trending__date">Feb 2021</div>
                </div>
            </div>
            <div class="trending__time">02:30:00</div>
        </div>
    </div>
</div>`;
const popular__all_movies=`
<div class="popular shown">
    <div class="popular__item">
        <div class="popular__footer">
            <div class="popular__footer-left">
                <div class="button-play__wrap small-plus">
                    <div class="button-play spiderman_movie-js">
                        <img src="img/triangle.png" alt="triangle">
                    </div>
                </div>
                <div class="popular__title">
                    <h3 class="popular__header">Spider-Man: No Way Home</h3>
                    <div class="popular__date">Feb 2021</div>
                </div>
            </div>
            <div class="popular__rating">
                <div class="popular__img">
                    <img src="img/star.svg" alt="star">
                </div>
                <span>4,7</span>
            </div>
        </div>
    </div>
    <div class="popular__item">
        <div class="popular__footer">
            <div class="popular__footer-left">
                <div class="button-play__wrap small-plus">
                    <div class="button-play spiderman_movie-js">
                        <img src="img/triangle.png" alt="triangle">
                    </div>
                </div>
                <div class="popular__title">
                    <h3 class="popular__header">Spider-Man: No Way Home</h3>
                    <div class="popular__date">Feb 2021</div>
                </div>
            </div>
            <div class="popular__rating">
                <div class="popular__img">
                    <img src="img/star.svg" alt="star">
                </div>
                <span>4,7</span>
            </div>
        </div>
    </div>
    <div class="popular__item">
        <div class="popular__footer">
            <div class="popular__footer-left">
                <div class="button-play__wrap small-plus">
                    <div class="button-play spiderman_movie-js">
                        <img src="img/triangle.png" alt="triangle">
                    </div>
                </div>
                <div class="popular__title">
                    <h3 class="popular__header">Spider-Man: No Way Home</h3>
                    <div class="popular__date">Feb 2021</div>
                </div>
            </div>
            <div class="popular__rating">
                <div class="popular__img">
                    <img src="img/star.svg" alt="star">
                </div>
                <span>4,7</span>
            </div>
        </div>
    </div>
</div>`;

buttonShowModalSpidermanTrailer.forEach(item=>
{
    item.addEventListener('click',()=>
    {
        modalWindow.classList.add('active');
        modalInner.innerHTML=`${spiderman_trailer}`;
    });
});

buttonShowModalBatmanTrailer.forEach(item=>
{
    item.addEventListener('click',()=>
    {
        modalWindow.classList.add('active');
        modalInner.innerHTML=`${batman_trailer}`;
    });
});

buttonSpidermanMovie.forEach(item=>
{
    item.addEventListener('click',()=>
    {
        modalVideoWindow.classList.add('active');
        modalVideoInner.innerHTML=`${spiderman_movie}`;
    });
});

modalWindow.addEventListener('click',()=>
{
    modalWindow.classList.remove('active');
    modalInner.innerHTML=``;
});

headerPersonal.addEventListener('click',()=>alert(alertMessage));

headerNavLink.forEach(item=>
{
    item.addEventListener('click',()=>
    {
        let curentNavLink=document.querySelector('.current');
        curentNavLink.classList.remove('current');
        item.classList.add('current');
    });
});

const selectClassName=item=>colors[item.textContent];

nonSelectedGenres.forEach(item=>
{
    item.addEventListener('click',()=>
    {
        let className=selectClassName(item);
        item.classList.remove('gray');
        item.classList.add(`${className}`);
    });
});

asideAdd.addEventListener('click',()=>
{
    nonSelectedGenres.forEach(item=>
    {
        if(!item.classList.contains('gray'))
        {
            favouriteGenres.append(item);
        }
    });
});