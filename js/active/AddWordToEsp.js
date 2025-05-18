const shortcuts = []
class AddWordToEsp {

	constructor(trigger) {
		this.name = "Add word to esp"
		this.trigger = trigger
	}

    match(text) {
      return startsWith(this.trigger, text)
    }

    onActivation(text) {
        TextField.disableAutoFocus()
        TextField.enableTabbing()
		TextField.hide()

        const word = addId("word", input("word"))

          word.addEventListener('keydown', e => {
            if (word.value.length === 0 && e.key === 'Backspace') {
                id("always-focused-input").value = ""
                Active.choose("")
            }
          })
          
        id('subcontent').appendChild(fragment([
          h1("Add shortcut"),
          word,
		  addId("abbr", input("word to add")),
          grey(p("press 'Enter' to add")),
        ]))  

          requestAnimationFrame(() => {
            word.focus()
          })
    }

    onTextChange(text) {

    }

    onEnter() {
		if (id("abbr").value == "") {
			runCommand(String.raw`python C:\Users\mulig\Documents\git\meta-repo\repos\esp\add_new_word.py "${id('word').value}" "${shortcuts}"`,)
		}
		else {
			console.log("adding one more word")
			shortcuts.push(id('abbr').value)
			id('abbr').value = ""
			return 'wait'
		}
    }
  }
