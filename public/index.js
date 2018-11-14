console.log('So glad to see you here! Let\'s rock!');

// fetch('/rest/enter')
//     .then((data) => data.json())
//     .then((msg) => console.log(msg.message))


document.addEventListener('DOMContentLoaded', () => {
    /* Burger */
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('is-active');
        document.body.classList.toggle('is-menu-active');
    })
    document.body.addEventListener('click', (e) => {
        if (document.body.classList.contains('is-menu-active') && !e.target.classList.contains('nav-list__item-link')){
            e.stopPropagation();
            hamburger.classList.toggle('is-active');
            document.body.classList.toggle('is-menu-active');
        }
    })

    /* Button read-more */
    // Temporary variant
    try {
        const cardInfoDescription = document.querySelector('.card-info__description');
        cardInfoDescription.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('card-info__description--is-active')
        })

        const cardInfoComment = document.querySelector('.card-info__comment');
        cardInfoComment.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('card-info__comment--is-active')
        })
    } catch {
        console.log('not this page');
    }
    try{
        const ratingTable = document.querySelector('.rating-table');
        ratingTable.addEventListener('click', (e) => {
            if( e.target.classList.contains('comment-toggling')){
                e.target.classList.toggle('comment-toggling--is-active');
            } else if(e.target.classList.contains('comment-toggling__text')){
                e.target.parentElement.classList.toggle('comment-toggling--is-active');
            }
        })
    } catch {
        console.log('not this page');
    }

    function autocomplete (el, dataFull) {
        let currentFocus;
        let field = el.querySelector('.rating-filters__search-line-input');

        field.addEventListener('input', (e) => {
            // debugger;
            let listContainer = el.querySelector('.rating-filters__dropdown-list'),
                currentValue = e.target.value;
            closeList(listContainer);

            if(!currentValue) { return false };

            currentFocus = -1;

            let data = dataFull.filter( (str) => {
                return str.toLowerCase().indexOf(currentValue.toLowerCase()) === 0;
            })


            for(let i = 0; (i < data.length && i < 10); i++){
                let suggestionItem = document.createElement('LI');
                suggestionItem.classList.add('rating-filters__dropdown-list-item');
                suggestionItem.innerHTML = `<strong>${data[i].substr(0, currentValue.length)}</strong>`;
                suggestionItem.innerHTML += data[i].substr(currentValue.length)
                suggestionItem.dataset.text = data[i];
                suggestionItem.addEventListener('click', (e) => {
                    console.log(e.currentTarget)
                    field.value = e.currentTarget.textContent;
                    closeList(listContainer);
                })
                listContainer.appendChild(suggestionItem);
            }
        })
        field.addEventListener('keydown', (e) => {
            // e.preventDefault();
            // console.log(e.keyCode);
            let listContainer = el.querySelector('.rating-filters__dropdown-list');
            console.dir(e.keyCode);
            switch(e.keyCode){
                case 40:
                    currentFocus++;
                    setActiveSuggestionItem(listContainer.children);
                    break;
                case 38:
                    currentFocus--;
                    setActiveSuggestionItem(listContainer.children);
                    break;
                case 13:
                    e.preventDefault();
                    if(currentFocus > -1){
                        listContainer.children[currentFocus].click();
                    } else {
                        document.querySelector('.rating-filters__search').classList.remove('rating-filters__search--is-active');
                    }
                    break;
                default:
                    return;
            }
        });
        field.addEventListener('blur', (e) => {
            setTimeout(() => {document.querySelector('.rating-filters__search').classList.remove('rating-filters__search--is-active')}, 300);
        })
        function setActiveSuggestionItem(el){
            if(!el) return false;

            removeActiveSuggestionItem(el);

            if(currentFocus >= el.length) currentFocus = 0;
            if(currentFocus < 0) currentFocus = (el.length -1);
            el[currentFocus].classList.add('rating-filters__dropdown-list-item--active');
        }
        function removeActiveSuggestionItem(el){
            for(let i = 0; i < el.length; i++){
                el[i].classList.remove('rating-filters__dropdown-list-item--active')
            } // el.querySelector(''rating-filters__dropdown-list-item--active).classList.remove('rating-filters__dropdown-list-item--active');
        }
        function closeList(el) {
            el.innerHTML = '';
        }
    }
    try {
        const variations = ['Project manager', 'Tech lead', 'Service engineer', 'Secret customer', 'Senior front-end developer', 'Front-end developer', 'Middle front-end developer'];
        autocomplete(document.querySelector('.rating-filters__search'), variations)
    } catch {
        console.log('not this page');
    }

    document.querySelectorAll('.comment-toggling').forEach( (block) => {
        const el = block.querySelector('.comment-toggling__text');
        if (!(el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth)){
            block.classList.add('comment-toggling--no-action')
        }
    })
});