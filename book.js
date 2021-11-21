
const loadBookData = () => {


    const inputText = document.getElementById('text-input');
    const searchText = inputText.value;
    if (searchText === '') {
        console.log('please write some text')
        const searchTextCheck = document.getElementById('searchTextCheck');
        const h4 = document.createElement('h4');
        h4.innerText = "please enter book name";
        searchTextCheck.appendChild(h4);
    }
    else {
        console.log(searchText);
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data))

    }

}
// loadBookData();
const displaySearchResult = data => {
    console.log(data.docs);
    const books = data.docs;
    // console.log(books);
    if (books.length == 0) {
        const bookFound = document.getElementById('totalBookNumber');
        bookFound.textContent = '';
        const h2 = document.createElement('h2');
        h2.innerHTML = ` No Result Found`;
        bookFound.appendChild(h2);
    }
    else {
        const bookFound = document.getElementById('totalBookNumber');
        bookFound.textContent = '';

        const h2 = document.createElement('h2');
        h2.innerHTML = ` Total books found: ${data.numFound}`;
        bookFound.appendChild(h2);
    }

    const searchResult = document.getElementById('search-results');
    searchResult.textContent = '';


    console.log(data.numFound);
    books.forEach(book => {
        // console.log(book.title);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                    
            <div class="col">
              <div class="card" >
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${book.title}</h5>
                  <h4 class="card-text"> Author:${book.author_name} </h4>
                  <p class="card-text"> First publish year:${book.first_publish_year} </p>
                  <p class="card-text"> Publisher:${book.publisher} </p>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            `
        searchResult.appendChild(div);
    })


}