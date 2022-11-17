const modalVideoWindow=document.querySelector('.modal-video');
const modalVideoInner=modalVideoWindow.firstElementChild;
const modalSearchWindow=document.querySelector('.modal-search');
const modalSearchInner=modalSearchWindow.firstElementChild;
const buttonShowModalSpidermanTrailer=document.querySelectorAll('.spiderman_trailer-js');
const buttonShowModalBatmanTrailer=document.querySelectorAll('.batman_trailer-js');
let buttonShowModalSpidermanMovie;
const headerPersonal=document.querySelector('.header__personal');
let headerNavLink=document.querySelectorAll('.header__nav a');
const headerTime=document.querySelector('.header__time');
const headerDay=document.querySelector('.header__day');
let titleTrendingAllMovies;
let titlePopularAllMovies;
const divTrending=document.querySelector('.trending-js');
const divPopular=document.querySelector('.popular-js');
const nonSelectedGenres=document.querySelectorAll('.gray');
const asideAdd=document.querySelector('.aside__add');
const favouriteGenres=document.querySelector('.favourite-js');
let searchBar=document.querySelector('.header__find').firstElementChild;
let autoComBox=document.querySelector('.header__find').lastElementChild;
const searchIcon=document.querySelector('.header__find img');
const burger=document.querySelector('.header__burger-icon');
const burgerMenu=document.querySelector('.header__burger-nav');
let headerBurgerNavLink=document.querySelectorAll('.header__burger-nav a');
let searchBar_s=document.querySelector('.header__find-s').firstElementChild;
let searchIcon_s=document.querySelector('.header__find-s').lastElementChild;
let input_close=document.querySelector('.input_close');

let widthScreen=window.screen.width;
let spiderman_trailer;
let batman_trailer;
let spiderman_movie;

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

const suggestions=[
    {
        name: 'Batman 2022',
        type: 'Trailer',
        icon: 'img/aside_item.png'
    },
    {
        name: 'Spider-Man: No Way Home',
        type: 'Trailer',
        icon: 'img/back_trailer.jpg'
    },
    {
        name: 'Spider-Man: No Way Home',
        type: 'Trending',
        icon: 'img/back_trending.png'
    },
    {
        name: 'Spider-Man: No Way Home',
        type: 'Popular',
        icon: 'img/back_popular.png'
    }
];

let selectedLink='';

window.onload=()=>
{
    time();

    spiderman_trailer=setSpidermanTrailer(widthScreen);
    batman_trailer=setBatmanTrailer(widthScreen);
    spiderman_movie=setSpidermanMovie(widthScreen);

    bindTitleTrendingAllMovies();
    bindTitlePopularAllMovies();
    bindButtonShowModalSpidermanMovie();

	this.interval=setInterval(()=>time(),1000);

    bindNavLinks();
};

window.onresize=()=>
{
    widthScreen=window.screen.width;
    spiderman_trailer=setSpidermanTrailer(widthScreen);
    spiderman_movie=setSpidermanMovie(widthScreen);
    batman_trailer=setBatmanTrailer(widthScreen);

    bindButtonShowModalSpidermanMovie();
    bindNavLinks();
};

const setSpidermanTrailer=width=>(width<420) ? `<iframe width="260" height="260" 
    src="https://www.youtube.com/embed/V0hagz_8L3M" 
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>` : (width>=420 && width<760) ? `<iframe width="300" height="300" 
    src="https://www.youtube.com/embed/V0hagz_8L3M" 
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`: `<iframe width="600" height="450" 
    src="https://www.youtube.com/embed/V0hagz_8L3M" 
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`;

const setBatmanTrailer=width=>(width<420) ? `<iframe width="260" height="260" 
    src="https://www.youtube.com/embed/g8Y_GL5h7Fs" 
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>` : (width>=420 && width<760) ? `<iframe width="300" height="300" 
    src="https://www.youtube.com/embed/g8Y_GL5h7Fs" 
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`: `<iframe width="600" height="450" 
    src="https://www.youtube.com/embed/g8Y_GL5h7Fs" 
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`;

const setSpidermanMovie=width=>(width<420) ? `<video width="260" height="260"  preload="auto" poster="img/poster.png" controls> 
    <source src="video/spiderman_trailer.mp4" type="video/mp4">
    <source src="video/spiderman_trailer.webm" type="video/webm">
    <source src="video/spiderman_trailer.ogv" type="video/ogg">
    <object data="video/spiderman_trailer.swf" type="application/x-shockwave-flash">
        <param name="movie" value="video/spiderman_trailer.swf">
    </object>
    </video>` : (width>=420 && width<760) ? `<video width="300" height="300" preload="auto" poster="img/poster.png" controls>
    <source src="video/spiderman_trailer.mp4" type="video/mp4">
    <source src="video/spiderman_trailer.webm" type="video/webm">
    <source src="video/spiderman_trailer.ogv" type="video/ogg">
    <object data="video/spiderman_trailer.swf" type="application/x-shockwave-flash">
        <param name="movie" value="video/spiderman_trailer.swf">
    </object>
    </video>`: `<video width="600" height="450" preload="auto" poster="img/poster.png" controls>
    <source src="video/spiderman_trailer.mp4" type="video/mp4">
    <source src="video/spiderman_trailer.webm" type="video/webm">
    <source src="video/spiderman_trailer.ogv" type="video/ogg">
    <object data="video/spiderman_trailer.swf" type="application/x-shockwave-flash">
        <param name="movie" value="video/spiderman_trailer.swf">
    </object>
    </video>`;

const outputSpiderManMovieInModalWindow=()=>
{
    modalVideoWindow.classList.add('active');
    modalVideoInner.innerHTML=`${spiderman_movie}`;
}

const bindNavLinks=()=>
{
    if(widthScreen>769)
    {
        bindHeaderNavLinks();
    }

    else
    {
        bindHeaderBurgerNavLinks();
    }
}

const bindHeaderBurgerNavLinks=()=>
{
    headerBurgerNavLink=document.querySelectorAll('.header__burger-nav a');
    
    headerBurgerNavLink.forEach(item=>
    {
        if(item.textContent===selectedLink)
        {
            item.classList.add('current');
        }

        item.addEventListener('click',()=>
        {
            let curentNavLink=document.querySelectorAll('.current');
            curentNavLink.forEach(current=>current.classList.remove('current'));
            item.classList.add('current');
            selectedLink=item.textContent;
        });
    });
}

const bindHeaderNavLinks=()=>
{
    headerNavLink=document.querySelectorAll('.header__nav a');

    headerNavLink.forEach(item=>
    {
        if(item.textContent===selectedLink)
        {
            item.classList.add('current');
        }

        item.addEventListener('click',()=>
        {
            let curentNavLink=document.querySelectorAll('.current');
            curentNavLink.forEach(current=>current.classList.remove('current'));
            item.classList.add('current');
            selectedLink=item.textContent;
        });
    });
}

const bindButtonShowModalSpidermanMovie=()=>
{
    buttonShowModalSpidermanMovie=document.querySelectorAll('.spiderman_movie-js');
    buttonShowModalSpidermanMovie.forEach(item=>
    {
        item.addEventListener('click',()=>
        {
            outputSpiderManMovieInModalWindow();
        });
    });
}

const bindTitleTrendingAllMovies=()=>
{
    widthScreen=window.screen.width;
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
            const trendingShown=divTrending.querySelector('.shown');
            divTrending.firstElementChild.removeChild(this);
            divTrending.removeChild(trendingShown);
            addTitleTrendingAllMovies('All movies');
        }

        bindButtonShowModalSpidermanMovie();
    });
};

const bindTitlePopularAllMovies=()=>
{
    widthScreen=window.screen.width;
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
            const popularShown=divPopular.querySelector('.shown');
            divPopular.firstElementChild.removeChild(this);
            addTitlePopularAllMovies('All movies');
            divPopular.removeChild(popularShown);
        }

        bindButtonShowModalSpidermanMovie();
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

const addZeroInTime=time=>(time>=10) ?  time : `0${time}`;

const time=()=>
{
    let time=`${addZeroInTime(new Date().getHours())}:${addZeroInTime(new Date().getMinutes())}`;
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

const outputSpidermanTrailerInModalWindow=()=>
{
    modalVideoWindow.classList.add('active');
    modalVideoInner.innerHTML=`${spiderman_trailer}`;
}

buttonShowModalSpidermanTrailer.forEach(item=>
{
    item.addEventListener('click',()=>
    {
        outputSpidermanTrailerInModalWindow();
    });
});

const outputBatmanTrailerInModalWindow=()=>
{
    modalVideoWindow.classList.add('active');
    modalVideoInner.innerHTML=`${batman_trailer}`;
}

buttonShowModalBatmanTrailer.forEach(item=>
{
    item.addEventListener('click',()=>
    {
        outputBatmanTrailerInModalWindow();
    });
});

const closeVideoModal=()=>
{
    modalVideoWindow.classList.remove('active');
    modalVideoInner.innerHTML=``;

    if(modalSearchWindow.classList.contains('hide'))
    {
        modalSearchWindow.classList.remove('hide');
    }
};

modalVideoWindow.addEventListener('click',e=>
{
    const video=modalVideoInner.querySelector('video');
    
    if(e.target!==video) /* click modal (excluding video) */
    {
        closeVideoModal();
    }
});

headerPersonal.addEventListener('click',()=>alert(alertMessage));

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

searchBar.addEventListener('keyup',e=>
{
    let userData=e.target.value;
    let resultArray=[];

    if(userData)
    {
        resultArray=searchFilm(userData);
        
        autoComBox.classList.add('active');
        showSuggestions(resultArray);
        
        let arrList=autoComBox.querySelectorAll('li');
        for(item of arrList)
        {
            bindItemAutoComBox(item,resultArray);
        }
    }

    else
    {
        clearAutoComBox();
    }
});

searchBar_s.addEventListener('keydown',e=>
{
    let userData=e.target.value;
    let resultArray=[];

    if(e.keyCode===13)
    {
        if(userData)
        {
            resultArray=searchFilm(userData);
            showResult(resultArray);
            e.target.classList.remove('shown');
            input_close.classList.remove('shown');
        }

        else
        {
            alert('Empty input. You should input film.');
        }
    }
});

searchIcon_s.addEventListener('click',e=>
{
    searchBar_s.classList.add('shown');
    input_close.classList.add('shown');
});

input_close.addEventListener('click',()=>
{
    searchBar_s.value='';
    searchBar_s.classList.remove('shown');
    input_close.classList.remove('shown');
});

const outputVideo=(suggestion,openedModalWindow=null)=>
{
    let {name,type}=suggestion;

    if(name=='Batman 2022' && type=='Trailer')
    {
        if(openedModalWindow!==null) /* if modalSearchWindow is opened */
        {
            modalSearchWindow.classList.add('hide');
            outputBatmanTrailerInModalWindow();
        }

        else
        {
            outputBatmanTrailerInModalWindow();
        }
    }

    else if(name=='Spider-Man: No Way Home')
    {
        if(type=='Trailer')
        {
            if(openedModalWindow!==null)
            {
                modalSearchWindow.classList.add('hide');
                outputSpidermanTrailerInModalWindow();
            }

            else
            {
                outputSpidermanTrailerInModalWindow();
            }
        }

        else
        {
            if(openedModalWindow!==null)
            {
                modalSearchWindow.classList.add('hide');
                outputSpiderManMovieInModalWindow();
            }

            else
            {
                outputSpiderManMovieInModalWindow();
            }
        }
    }
}

const filterArray=(item,array)=>
{
    return array.filter(data=>
    {
        let {name,type}=data;
            
        return item.textContent.includes(name) && item.textContent.includes(type);
    });
};

const bindItemAutoComBox=(item,resultArray)=>
{
    item.addEventListener('click',()=>
    {
        let array=filterArray(item,resultArray);

        outputVideo(array[0]);
        clearAutoComBox();
    });
};

const showSuggestions=list=>
{
    let listData='';
    
    if(!list.length)
    {
        let warning='<p>not found</p>';
        listData=`${warning}`;
    }
    
    else
    {
        list.forEach(item=>
        {
            let {name,type,icon}=item;

            listData+=`
            <li>
                <div>
                    <img src="${icon}" alt="icon">
                    ${name}
                    (${type})
                </div>
            </li>`;
        });
    }

    autoComBox.innerHTML=listData;
};

const searchFilm=userData=>
{
    userData=userData.toLocaleLowerCase();
    return suggestions.filter(data=>
    {
        let {name}=data;
        return name.toLocaleLowerCase().startsWith(userData);
    });
};

searchIcon.addEventListener('click',()=>
{
    let userData=searchBar.value;

    if(userData)
    {
        let resultArray=searchFilm(userData);
        showResult(resultArray);
        clearAutoComBox();
    }

    else
    {
        alert('Empty input. You should input film.');
    }
});

const clearAutoComBox=()=>
{
    autoComBox.classList.remove('active');
    autoComBox.innerHTML=``;
}

const showResult=list=>
{
    let listData='';
    modalSearchWindow.classList.add('active');

    if(!list.length)
    {
        let warning='<p>not found</p>';
        listData=`${warning}`;
    }

    else
    {
        list.forEach(item=>
        {
            let {name,type,icon}=item;
        
            listData+=`
                <li>
                    <img src="${icon}" alt="icon">
                    ${name}
                    (${type})
                </li>`;
        });
    }
    

    let searchModalDiv=`
    <div class="modal__content">
        <div class="modal__header">
            <h1>Search result</h1>
            <img src="img/cross.svg" alt="close">
        </div>
        <div class="modal__body">
            <div class="modal__info">${listData}</div>
        </div>
    </div>`;
    
    modalSearchInner.innerHTML+=searchModalDiv;
    bindItemsModal(list);
    bindCloseSearchModal();
};

const bindItemsModal=list=>
{
    const modal=modalSearchInner.querySelector('.modal__content');
    const items=modal.querySelectorAll('li');

    items.forEach(item=>
    {
        item.addEventListener('click',()=>
        {
            let array=filterArray(item,list);

            outputVideo(array[0],modalSearchWindow);
        });
    });
};

const closeSearchModal=()=>
{
    modalSearchWindow.classList.remove('active');
    modalSearchInner.innerHTML=``;
};

const bindCloseSearchModal=()=>
{
    const closeButton=modalSearchInner.querySelector('.modal__header img');

    closeButton.addEventListener('click',()=>
    {
        closeSearchModal();
    });
};

burger.addEventListener('click',()=>
{
    burgerMenu.classList.toggle('shown');
});