class RunCommand {

  constructor(wordTrigger, command) {
    this.wordTrigger = wordTrigger
    this.command = command
  }

  match(text) {
    return startsWith(this.wordTrigger, text)
  }

    onActivation(text) {
      id('subcontent').appendChild(div([
        grey(p(this.command)),
      ]))
    }

    onEnter(text) {
      runCommand(this.command)
    }

    onTextChange(text) {
      
    }
  }
