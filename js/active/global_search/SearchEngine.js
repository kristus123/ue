class SearchEngine {
    static listOfResults(text) {
      return [
        li("bing.no", () => {
          openChrome('bing.no')
          loadContent("index.html")
          hideWindow()
        }),
      ]
    }
}