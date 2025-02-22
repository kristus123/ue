class SendEmail {

    static name = "Send Email til pelle@gmail.com"

    static match(text) {
      return startsWith("e", text)
    }

    static onActivation(text) {
        TextField.disableAutoFocus()
        TextField.enableTabbing()

        const subject = addId("subject", input("Subject"))

      id('subcontent').appendChild(div([
        h1("Write your message"),
        p("subject"),
        subject,
        p("body"),
        textarea("body"),
        grey(p("press 'Enter' to send")),
      ]))

      subject.focus()
      subject.addEventListener('keydown', e => {
        
        if (subject.value.length === 0 && e.key === 'Backspace') {
            id("always-focused-input").value = ""
            Active.choose("")
        }
      })

      Global.enter = () => {
        removeContentIn(id("subcontent"))
        Global.enter = () => {}
        TextField.clear()
      }
    }

    static onTextChange(text) {

    }

  }