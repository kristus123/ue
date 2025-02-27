class TextField {
    static alwaysFocused(elementToAppendTo, placeholder, onChange) {

        const x = document.createElement('input')
        x.id = "always-focused-input"
        x.type = "text"
        x.tabIndex = -1
        x.placeholder = placeholder

        Global.keyPress = () => {
            x.focus()
        }
        
        x.addEventListener('input', () => {
            onChange(x.value)
        })

        elementToAppendTo.appendChild(x)
        
        onChange("")
        
        return x           
    }

    static get text() {
        return id("always-focused-input").value
    }

    static clear() {
        id("always-focused-input").value = ""
    }

    static hide() {
		document.getElementById('always-focused-input').style.display = 'none';
    }

    static show() {
		document.getElementById('always-focused-input').style.display = 'block';
    }


    static disableAutoFocus() {
        Global.keyPress = () => {}
    }

    static enableAutoFocus() {
        Global.keyPress = () => {
            id("always-focused-input").focus()
        }
    }

    static enableTabbing() {
        id("always-focused-input").tabIndex = 0
    }

    static disableTabbing() {
        id("always-focused-input").tabIndex = -1
    }
}
