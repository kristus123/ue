function div(children=[]) {
    const d = document.createElement('div')

    for (const c of children) {
        d.appendChild(c)        
    }

    return d
}

function h1(text) {
    const h1 = document.createElement('h1')
    h1.textContent = text

    return h1
}

function addId(id, e) {
    e.id = id

    return e
}

function p(text) {
    const e = document.createElement('p')
    e.textContent = text

    return e
}


function ul(children) {
    const ul = document.createElement('ul')

    for (const c of children) {
        ul.appendChild(c)        
    }

    return ul
}

function li(name, onEnter) {
    const li = document.createElement('li');
    li.textContent = name;
    li.setAttribute('tabindex', 0); // Make list items focusable

    li.addEventListener("focus", () => {
        GlobalSearch.onEnter = onEnter // hack, as li is only used by globalsearch
    })

    li.addEventListener("blur", () => {
        GlobalSearch.onEnter = () => {} // hack, as li is only used by globalsearch
    })
    
    return li
}

function input(placeholder) {
    const e = document.createElement('input');
    e.setAttribute('tabindex', 0); // Make items focusable
    e.type = "text"
    e.tabIndex = 0
    e.placeholder = placeholder

    return e
}

function textarea(placeholder) {
    const e = document.createElement('textarea');
    e.setAttribute('tabindex', 0); // Make items focusable
    e.type = "text"
    e.tabIndex = 0
    e.placeholder = placeholder

    return e
}

function fragment(children=[]) {
    const e = document.createDocumentFragment()

    for (const c of children) {
        e.appendChild(c)        
    }

    return e
}