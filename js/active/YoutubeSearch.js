class YoutubeSearch {

    static name = "Youtube search"

    static match(text) {
      return startsWith("y", text)
    }

    static onActivation(text) {
      id('subcontent').appendChild(div([
        h1("sooka paa youtube mann!"),
      ]))

      Global.enter = () => {
        openChrome("https://www.youtube.com/results?search_query=" + encodeURIComponent(text))
        removeContentIn(id("subcontent"))
        Global.enter = () => {}
        TextField.clear()
      }
    }

    static onTextChange(text) {

    }

  }