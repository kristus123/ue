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
        
        const results = [
            li("bing.no", () => {
                openChrome('bing.no')
            }),
            li("swag.no", () => {
                openChrome('swag.no')
            }),
        ]
        id('subcontent').appendChild(ul(results))

        if (results) {
            results[0].focus()
        }
    }

    static onEnter(text) {

    }
  }