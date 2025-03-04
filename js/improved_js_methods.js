function removeContentIn(element) {
    element.innerHTML = ""
}

function startsWith(character, str) {
    if (typeof str !== 'string') {
        return false
    }
    else if (str.length === 0) {
        return false
    }
    else {
        return str.toLowerCase().substring(0, character.length) == character;
    }
}

function id(x) {
    return document.getElementById(x)
}

function loadContentIn(element, page="index.html") {
    element.innerHTML = element.innerHTML;

    fetch(page)
        .then(response => response.text())
        .then(data => {
            element.innerHTML = data
            eval(element.querySelector('script').innerText)
        })
        .catch(err => {
            console.error('Error loading content:', err);
        });
}
