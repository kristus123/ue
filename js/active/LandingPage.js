class LandingPage {
    static name = "Landing page" 

    static match(text) {
        return true
    }

    static onActivation() {
      Global.enter = () => {}

      id('subcontent').appendChild(div([
        grey(p("Start typing")),
      ]))
    }

    static onTextChange(text) {
    } 
  }