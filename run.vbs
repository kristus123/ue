Set objShell = CreateObject("WScript.Shell")
objShell.Run "powershell -Command ""Start-Process 'cmd.exe' -ArgumentList '/c npm start && exit' -NoNewWindow; exit""", 0, False
