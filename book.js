const availableBooks = text => {
    const bookFound = document.getElementById('totalBookNumber');
    bookFound.textContent = '';
    const h2 = document.createElement('h2');
    h2.innerHTML = text;
    bookFound.appendChild(h2);
}
const loadBookData = () => {
    const searchResult = document.getElementById('search-results');
    searchResult.textContent = '';

    const inputText = document.getElementById('text-input');
    const searchText = inputText.value;
    if (searchText == '') {
        availableBooks(`please enter book name`);
    }
    else {
        console.log(searchText);
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data))
    }
    inputText.value = '';
}
// loadBookData();
const displaySearchResult = data => {
    const books = data.docs;
    // console.log(books);
    if (books.length == 0) {
        availableBooks(`No result found`);

    }
    else {

        availableBooks(`Total books found: ${data.numFound}`)
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
                      <h4 class="card-title">${book.title}</h4>
                      <h5 class="card-text"> Author:${book.author_name} </h5>
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
}