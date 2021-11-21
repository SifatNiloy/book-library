
const loadBookData = () => {

    const inputText = document.getElementById('text-input');
    const searchText = inputText.value;
    console.log(searchText);

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data))

}
// loadBookData();
const displaySearchResult = (data) => {
    console.log(data)

    const showSearchDetails = document.getElementById('search-results');
    const h2 = document.createElement('h2');

    h2.innerHTML = `
        Total books found: ${data.numFound}
        books: ${data.docs[0].title}
        
        `;
    showSearchDetails.appendChild(h2);
}