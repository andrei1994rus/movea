const modalVideoWindow=document.querySelector('.modal-video');
const modalVideoInner=modalVideoWindow.firstElementChild;
const modalSearchWindow=document.querySelector('.modal-search');
const modalSearchInner=modalSearchWindow.firstElementChild;
const buttonShowModalSpidermanTrailer=document.querySelectorAll('.spiderman_trailer-js');
const buttonShowModalBatmanTrailer=document.querySelectorAll('.batman_trailer-js');
let buttonShowModalSpidermanMovie;
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
const searchBar=document.querySelector('.header__find').firstElementChild;
const autoComBox=document.querySelector('.header__find').lastElementChild;
const searchIcon=document.querySelector('.header__find img');

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

window.onload=()=>
{
    time();

    bindTitleTrendingAllMovies();
    bindTitlePopularAllMovies();
    bindButtonShowModalSpidermanMovie();

	this.interval=setInterval(()=>time(),1000);
};

const outputSpiderManMovieInModalWindow=()=>
{
    modalVideoWindow.classList.add('active');    
    modalVideoInner.innerHTML=`${spiderman_movie}`;
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
const spiderman_movie=`<video width="560" height="315" preload="auto" poster="img/poster.png" controls>
        <source src="video/spiderman_trailer.mp4" type="video/mp4">
        <source src="video/spiderman_trailer.webm" type="video/webm">
        <source src="video/spiderman_trailer.ogv" type="video/ogg">
        <object data="video/spiderman_trailer.swf" type="application/x-shockwave-flash">
            <param name="movie" value="video/spiderman_trailer.swf">
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
                outputSpidermanTrailerInModalWindow();;
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