class RunCommands {

  constructor(wordTrigger, commands) {
    this.wordTrigger = wordTrigger
    this.commands = commands
  }

  match(text) {
    return startsWith(this.wordTrigger, text)
  }

    onActivation(text) {
      id('subcontent').appendChild(div([
        grey(p(this.commands)),
      ]))
    }

    onEnter(text) {
		for (const c of this.commands) {
			console.log("running command " + c)
		  runCommand(c)
		}
    }

    onTextChange(text) {
      
    }
  }
