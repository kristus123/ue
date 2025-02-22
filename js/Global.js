class Global {
    static {
        document.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                this.enter()
            }
            else if (e.key === 'Tab') {
                this.tab()
            }
            else if (e.key === 'Shift') {
            }
            else {
                this.keyPress()
            }
        })
    }

    static enter = () => {}
    static tab = () => {}
    static keyPress = () => {}
}