// arr = movies; place = ul;
export function reload(arr, place) {
    place.innerHTML = ''

    for (let item of arr) {
        let idx = arr.indexOf(item)

        let li = document.createElement('li')
        let del = document.createElement('div')

        li.classList.add('promo__interactive-item')
        del.classList.add('delete')

        li.innerHTML = `${idx + 1}. ${item.Title}`

        li.append(del)
        place.append(li)

        del.onclick = () => {
            arr.splice(idx, 1)
            reload(arr, place)
        }

        li.onclick = () => {
            const promoBG = document.querySelector('.promo__bg')
            const title = document.querySelector('.promo__title')
            const genre = document.querySelector('.promo__genre')
            const plot = document.querySelector('.promo__descr')
            const ratings = document.querySelector('.promo__ratings')

            promoBG.style.background = `url(${item.Poster}) center center/cover no-repeat`
            title.innerHTML = item.Title
            genre.innerHTML = item.Genre
            plot.innerHTML = item.Plot

            ratings.innerHTML = "";


            item.Ratings.forEach(rating => {
                ratings.innerHTML += `<p>${rating.Source}. ${rating.Value}</p>`
                ratings.style.color = 'orange'
            });
        }
        // let promo__menu_list = document.querySelector(".promo__menu-list")
        // let second_ul = document.createElement("ul")
        // let second_li = document.createElement("li")
        // let a = document.createElement("a")

        // a.classList.add("promo__menu-item")

        // second_li.textContent = arr.genres
        // console.log(item.genres);
        //     <ul>
        //     <li><a class="promo__menu-item promo__menu-item_active" href="#">Фильмы</a></li>
        //     <li><a class="promo__menu-item" href="#">Сериалы</a></li>
        //     <li><a class="promo__menu-item" href="#">Мультфильмы</a></li>
        //     <li><a class="promo__menu-item" href="#">Клипы</a></li>
        //     <li><a class="promo__menu-item" href="#">Трейлеры</a></li>
        // </ul>

        // promo__menu_list.onclick = () =>{

        // }
    }
}

export function genresReload(arr, place, genre) {
    let ActiveItem = null;
    for (let item of arr) {
        let second_li = document.createElement("li");
        let a = document.createElement("a");

        a.classList.add("promo__menu-item");

        a.textContent = item;

        place.append(second_li);
        second_li.append(a);

        second_li.onclick = () => {
          
            if (ActiveItem) {
                ActiveItem.classList.remove("promo__menu-item_active");
            }
            a.classList.add("promo__menu-item_active");

            ActiveItem = a;

      

            let push_genres = []

            if (genre === item.Genre) {
                    push_genres.push(item)
                    console.log("ok");
                }else{
                    console.log("x");
                }
            
        };
    }
}


