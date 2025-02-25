        
const results = [
    {
        name: "bing.no",
        onEnter: () => openChrome('bing.no')
    },
    {
        name: "bang.no",
        onEnter: () => openChrome('bing.no')
    },
    {
        name: "bang.no",
        onEnter: () => openChrome('bing.no')
    },
    {
        name: "swag.no",
        onEnter: () => openChrome('swag.no')
    },
]

class GlobalSearch {
    static name = "Global search" 

    static match(text) {
        return text.length > 0
    }

    static onActivation() {
      id('subcontent').appendChild(div([
          h1("skriv noe gutt!"),
      ]))
    }

    static onTextChange(text) {
        removeContentIn(id('subcontent'))

        console.log(FuzzySearch.search(results, text, 0.5))

        const searchResults = FuzzySearch.search(results, text, 0.0)
            .map(r => li(r.name, r.onEnter))

        id('subcontent').appendChild(ul(searchResults))

        if (searchResults.length > 0) {
            searchResults[0].focus()
        }
    }

    static onEnter(text) {
        // this gets overridden by li()
    }
  }