const results = [
    {
		name: "localhost:5000",
        onEnter: () => openChrome('http://localhost:5000/')
    },
    {
		name: "start esp",
        onEnter: () => runCommand(String.raw`start cmd /k "cd /d C:\Users\mulig\Documents\git\meta-repo\repos\esp & start_esp.bat"`)
    },
    {
		name: "start game engine",
        onEnter: () => {
			openChrome('http://localhost:5000/')
        	runCommand(String.raw`start wsl bash -ic "cd ~/meta-repo/repos/game-engine && npm start"`)
        	runCommand(String.raw`start wsl bash -ic "cd ~/meta-repo/repos/game-engine && v"`)
        }
    },
    {
		name: "Open meta repo in windows",
        onEnter: () => {
			runCommand(String.raw`start cmd /k "cd /d C:\Users\mulig\Documents\git\meta-repo"`)
        }
    },
]

class GlobalSearch {
    static name = "Global search" 

    static match(text) {
        return text.length > 0
    }

    static onActivation() {
      id('subcontent').appendChild(div([
          h1("skriv noe gutt!"),
      ]))
    }

    static onTextChange(text) {
        removeContentIn(id('subcontent'))

        console.log(FuzzySearch.search(results, text, 0.5))

        const searchResults = FuzzySearch.search(results, text, 0.0)
            .map(r => li(r.name, r.onEnter))

        id('subcontent').appendChild(ul(searchResults))

        if (searchResults.length > 0) {
            searchResults[0].focus()
        }
    }

    static onEnter(text) {
        // this gets overridden by li()
    }
  }
