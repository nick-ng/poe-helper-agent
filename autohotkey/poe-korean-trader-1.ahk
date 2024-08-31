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
  Gui, Add, Button, h30 w40 gHideout, HO
  Gui, Add, Button, h30 w40 gInvite, INV
  Gui, Add, Button, h30 w40 gThankYou, TY
  ; +E0x20 = click through?
  Gui, +Lastfound +AlwaysOnTop -Caption +ToolWindow
  Gui,Color,FFFFFF
  WinSet,Transcolor, FFFFFF
  Gui, Margin, 1, 1
  ; Gui, Show, x1867 y930, Korean Trader
  return
}

initGui()

SetTimer, CheckPoE, 500

CheckPoE()
{
  if (WinActive("ahk_class POEWindowClass")) {
    Gui, Show, x1867 y930 NoActivate, Korean Trader
  } else {
    Sleep, 300
    Gui, Hide
  }
}

Hideout() {
  Clipboard := "/hideout "
  if WinExist("ahk_class POEWindowClass") {
    if WinActive("ahk_class POEWindowClass") {
    }
    WinActivate
    Sleep, 150
    Send ^{Enter}
    Sleep, 20
    Send {Home}
    Sleep, 20
    Send {Delete}
    Sleep, 20
    Send ^{v}
    Sleep, 20
    Send {Enter}
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
    Sleep, 50
    Send ^{v}
    Sleep, 50
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
    Sleep, 20
    Send {Home}
    Sleep, 20
    Send {Delete}
    Sleep, 20
    Send ^{v}
    Sleep, 20
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
