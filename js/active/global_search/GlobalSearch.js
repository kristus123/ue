class GlobalSearch {
    static name = "default" 

    static match(text) {
        return true
    }

    static onActivation() {
      Global.enter = () => {}

      id('subcontent').appendChild(div([
          h1("skriv noe gutt!"),
      ]))
    }

    static onTextChange(text) {
        removeContentIn(id('subcontent'))
        
        const results = SearchEngine.listOfResults(text)
        id('subcontent').appendChild(div([
            ul(results),
        ]))

        if (results) {
            results[0].focus()
        }
    } 
  }