#NoEnv ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir% ; Ensures a consistent starting directory.

#SingleInstance force

; ! = Alt, + = Shift, ^ = Ctrl
; https://autohotkey.com/docs/Hotkeys.htm

; Hideout GUI button
SysGet, VirtualScreenWidth, 78
SysGet, VirtualScreenHeight, 79

xoffset := VirtualScreenWidth / 2
yoffset := VirtualScreenHeight / 2

initGui() {
  Gui, Add, Button, y6 h30 w80 gReply, Reply
  Gui, Add, Button, x90 y6 h30 w80 gInvite, Invite
  Gui, Add, Button, x170 y6 h30 w80 gThankYou, Thanks
  Gui, Add, Button, x250 y6 h30 w80 gHideout, Hideout
  Gui, Add, Button, x330 y6 h30 w80 gLeaveParty, Leave
  Gui, +E0x20 +Lastfound +AlwaysOnTop -Caption +ToolWindow
  Gui, Show, y0
  return
}

initGui()

Hideout() {
  Clipboard := "/hideout"
  if WinExist("ahk_class POEWindowClass") {
    if WinActive("ahk_class POEWindowClass") {
    }
    WinActivate
    Sleep, 150
    Send {Enter}
    Sleep, 200
    Send ^{v}
    Sleep, 200
    Send {Enter}
  }
  return
}

LeaveParty() {
  Clipboard := "/leave"
  if WinExist("ahk_class POEWindowClass") {
    if WinActive("ahk_class POEWindowClass") {
    }
    WinActivate
    Sleep, 150
    Send {Enter}
    Sleep, 200
    Send ^{v}
    Sleep, 200
    Send {Enter}
  }
  return
}

Reply() {
  if WinExist("ahk_class POEWindowClass") {
    if WinActive("ahk_class POEWindowClass") {
    }
    WinActivate
    Sleep, 150
    Send ^{Enter}
  }
  return
}

ThankYou()
{
  Clipboard := "ty"
  if WinExist("ahk_class POEWindowClass") {
    if WinActive("ahk_class POEWindowClass") {
    }
    WinActivate
    Sleep, 150
    Send ^{Enter}
    Sleep, 150
    Send ^{v}
    Sleep, 150
    Send {Enter}
  }
  return
}

Invite()
{
  Clipboard := "/invite "
  if WinExist("ahk_class POEWindowClass") {
    if WinActive("ahk_class POEWindowClass") {
    }
    WinActivate
    Sleep, 150
    Send ^{Enter}
    Sleep, 150
    Send {Home}
    Sleep, 100
    Send {Delete}
    Sleep, 100
    Send ^{v}
    Sleep, 100
    Send {Enter}
  }
  return
}

PasteString(str)
{
  Clipboard := str
  Sleep, 150
  Send ^{v}
  return
}

#IfWinActive ahk_class POEWindowClass

WheelDown::
    Send ^{Click}
  return

WheelUp::
  Send +{Click}
return
