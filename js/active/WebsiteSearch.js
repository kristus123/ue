class WebsiteSearch {

  constructor(wordTrigger, website) {
    this.wordTrigger = wordTrigger
    this.website = website
  }

  match(text) {
    return startsWith(this.wordTrigger, text)
  }

    onActivation(text) {
      id('subcontent').appendChild(div([
        grey(p("Website search")),
        grey(p(this.website)),
      ]))
    }

    onEnter(text) {
      text = encodeURIComponent(text.slice(this.wordTrigger.length))
      openChrome(this.website(text))
    }

    onTextChange(text) {
      
    }
  }
