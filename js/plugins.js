// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"PKD_AlterEquipMenu","status":false,"description":"(v.1.0)[BASIC] Alternative Equipment Menu","parameters":{"slotsPositions:structA":"[\"{\\\"x:int\\\":\\\"20\\\",\\\"y:int\\\":\\\"200\\\"}\",\"{\\\"x:int\\\":\\\"20\\\",\\\"y:int\\\":\\\"200\\\"}\",\"{\\\"x:int\\\":\\\"20\\\",\\\"y:int\\\":\\\"52\\\"}\",\"{\\\"x:int\\\":\\\"20\\\",\\\"y:int\\\":\\\"120\\\"}\",\"{\\\"x:int\\\":\\\"20\\\",\\\"y:int\\\":\\\"52\\\"}\",\"{\\\"x:int\\\":\\\"20\\\",\\\"y:int\\\":\\\"350\\\"}\",\"{\\\"x:int\\\":\\\"20\\\",\\\"y:int\\\":\\\"210\\\"}\",\"{\\\"x:int\\\":\\\"20\\\",\\\"y:int\\\":\\\"140\\\"}\",\"{\\\"x:int\\\":\\\"20\\\",\\\"y:int\\\":\\\"80\\\"}\",\"{\\\"x:int\\\":\\\"20\\\",\\\"y:int\\\":\\\"300\\\"}\"]","slotSize:i":"48","disabledSlotIconIndex:i":"21","windowSkins:struct":"{\"slotWindow:str\":\"Window\",\"statusWindow:str\":\"Window\",\"itemsWindow:str\":\"Window\",\"commandsWindow:str\":\"Window\"}","isUseCustomPos:bool":"true","slotsWindowPos:struct":"{\"position:struct\":\"{\\\"x:int\\\":\\\"0\\\",\\\"y:int\\\":\\\"52\\\"}\",\"size:struct\":\"{\\\"w:int\\\":\\\"1546\\\",\\\"h:int\\\":\\\"2048\\\"}\"}","statusWindowPos:struct":"{\"position:struct\":\"{\\\"x:int\\\":\\\"310\\\",\\\"y:int\\\":\\\"120\\\"}\",\"size:struct\":\"{\\\"w:int\\\":\\\"249\\\",\\\"h:int\\\":\\\"400\\\"}\"}","itemsWindowPos:struct":"{\"position:struct\":\"{\\\"x:int\\\":\\\"559\\\",\\\"y:int\\\":\\\"120\\\"}\",\"size:struct\":\"{\\\"w:int\\\":\\\"249\\\",\\\"h:int\\\":\\\"400\\\"}\"}","helpWindowPos:struct":"{\"position:struct\":\"{\\\"x:int\\\":\\\"0\\\",\\\"y:int\\\":\\\"520\\\"}\",\"size:struct\":\"{\\\"w:int\\\":\\\"808\\\",\\\"h:int\\\":\\\"96\\\"}\"}","commandsWindowPos:struct":"{\"position:struct\":\"{\\\"x:int\\\":\\\"310\\\",\\\"y:int\\\":\\\"52\\\"}\",\"size:struct\":\"{\\\"w:int\\\":\\\"498\\\",\\\"h:int\\\":\\\"68\\\"}\"}","spacer|endHolder":""}},
{"name":"ButtonPicture","status":false,"description":"Makes a picture clickable.","parameters":{}},
{"name":"AltMenuScreen","status":false,"description":"Alternative menu screen layout.","parameters":{}},
{"name":"SRD_AltMenuScreen_BustSelect","status":false,"description":"Alternative Menu Screen Bust Select. Uses busts to select Actors in the menu. It also displays Side View Battlers.","parameters":{"Show Gold Window":"true","Show SV Window":"true","== Bust Position ==":"","Bust X Pos":"0","Bust Y Pos":"0","== Bust Window ==":"","Bust Window Rows":"1","Bust Window Cols":"1","Bust Window X":"20","Bust Window Y":"(Graphics.height / 2) - (this._statusWindow.height / 2)","Bust Window Width":"(Graphics.width / 2) - 40","Bust Window Height":"Graphics.height - 120","== Command Window ==":"","Command Window X":"Graphics.width - this._commandWindow.width - 20","Command Window Y":"(this._statusWindow.y + this._statusWindow.height) - this._commandWindow.height","Max Columns":"1","Visible Rows":"5","== HP Window ==":"","Draw MP Bar":"false","Draw TP Bar":"false","HP Window X":"this._commandWindow.x","HP Window Y":"((this._commandWindow.y - (this._goldWindow.y + this._goldWindow.height)) / 2) - (this._hpWindow.height / 2) + (this._goldWindow.y + this._goldWindow.height)","HP Window Width":"256","== Battler Window ==":"","Battler X Pos":"6","Battler Y Pos":"6","B. Window X":"Graphics.width - 128","B. Window Y":"this._hpWindow.y","B. Window Width":"this.fittingHeight(2)","B. Window Height":"this.fittingHeight(2)","== Gold Window ==":"","Gold Window X":"this._commandWindow.x","Gold Window Y":"this._statusWindow.y"}}
];