class SendMail {

	constructor(email, trigger) {
		this.email = email
		this.name = "Send Email til " + email
		this.trigger = trigger
	}

    match(text) {
      return startsWith(this.trigger, text)
    }

    onActivation(text) {
        TextField.disableAutoFocus()
        TextField.enableTabbing()
		TextField.hide()

        const subject = addId("subject", input("Subject"))

          subject.addEventListener('keydown', e => {
            if (subject.value.length === 0 && e.key === 'Backspace') {
                id("always-focused-input").value = ""
                Active.choose("")
            }
          })
          
          const openBodyEditor = e => {
            if (e.key === 'Tab') {
              id('subcontent').appendChild(addId("emailBody", textarea("body")))
              subject.removeEventListener('keydown', openBodyEditor)
            }
          }

          subject.addEventListener('keydown', openBodyEditor)

        id('subcontent').appendChild(fragment([
          h1("Write your message"),
          p("subject and body"),
          subject,
          grey(p("press 'Tab' to add body, or press 'Enter' to send")),
        ]))  

          requestAnimationFrame(() => {
            subject.focus()
          })
    }

    onTextChange(text) {

    }

    onEnter() {
		sendMail(this.email, id('subject').value, (id('emailBody') || id('subject')).value)
    }

  }
