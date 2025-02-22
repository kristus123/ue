class GoogleSearch {

    static name = "Google search"

    static match(text) {
      return startsWith("g", text)
    }

    static onActivation(text) {
      id('subcontent').appendChild(div([
        h1("sooka paa googla mann!"),
      ]))

      Global.enter = () => {
        openChrome("google.no?q=" + encodeURIComponent(text))
        removeContentIn(id("subcontent"))
        Global.enter = () => {}
        TextField.clear()
      }
    }

    static onTextChange(text) {

    }

  }