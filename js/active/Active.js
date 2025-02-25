class Active {
    static name = ""

    static choices = []

    static reset = () => {}
    static onActivation = () => {}
    static onEnter = () => {}
    static onTextChange = text => {}

    static choose(text) {
        for (const choice of this.choices) {
            if (choice.match(text) && choice.name == this.name) {
                break // we only want to trigger logic below once
            }
            else if (choice.match(text) && choice.name != this.name) {
                console.log("new match. changing Active to " + choice.name)
                Active.reset()
                choice.onActivation(text)

                this.name = choice.name
                this.onTextChange = choice.onTextChange
                
                Global.enter = () => {
                    choice.onEnter(TextField.text)
                    Active.reset()
                    TextField.clear()
                    this.choose("")
                }
                
                break
            }
        }
    }
}