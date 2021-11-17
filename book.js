console.log('I got that');

// searchText();
const loadBookData = () => {

    const inputText = document.getElementById('text-input');
    const searchText = inputText.value;
    console.log(searchText);

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const displayNumberFound = data.numFound;
            const Searchdata = data.docs;
            console.log(Searchdata);
        })

}
loadBookData();