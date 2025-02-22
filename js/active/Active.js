class Active {
    static name = ""

    static choices = []

    static reset = () => {}
    static onActivation = () => {}
    static onTextChange = text => {}

    static choose(text) {
        for (const choice of this.choices) {
            if (choice.match(text) && choice.name == this.name) {
                break
            }
            else if (choice.match(text) && choice.name != this.name) {
                console.log("new match. changing Active")
                Active.reset()

                choice.onActivation(text)
                this.onTextChange = choice.onTextChange
                this.name = choice.name
                
                break
            }
        }
    }
}