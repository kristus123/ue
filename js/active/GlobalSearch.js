const results = [
    {
		name: "localhost:5000",
        onEnter: () => openChrome('http://localhost:5000/')
    },
    {
		name: "open meta-repo in cmd",
        onEnter: () => runCommand(`start cmd /k "cd /d C:\\Users\\mulig\\Documents\\git\\meta-repo"`)
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
