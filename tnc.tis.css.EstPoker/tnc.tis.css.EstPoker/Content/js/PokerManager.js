if (EstPoker == null || typeof (EstPoker) != "object") { var EstPoker = new Object(); }

EstPoker.Mgr = {};

EstPoker.Mgr.Init() = function () {
    document.myform.url.value = "ws://localhost:8182/"
    document.myform.inputtext.value = "Hello World!"
    document.myform.disconnectButton.disabled = true;
}

EstPoker.Mgr.DoConnect() = function () {
    websocket = new WebSocket(document.myform.url.value);
    websocket.onopen = function (evt) { EstPoker.Mgr.OnOpen(evt) };
    websocket.onclose = function (evt) { EstPoker.Mgr.OnClose(evt) };
    websocket.onmessage = function (evt) { EstPoker.Mgr.OnMessage(evt) };
    websocket.onerror = function (evt) { EstPoker.Mgr.OnError(evt) };
}

EstPoker.Mgr.OnOpen() = function (evt) {
    writeToScreen("connected\n");
    document.myform.connectButton.disabled = true;
    document.myform.disconnectButton.disabled = false;
}

EstPoker.Mgr.OnClose() = function (evt) {
    writeToScreen("disconnected\n");
    document.myform.connectButton.disabled = false;
    document.myform.disconnectButton.disabled = true;
}

EstPoker.Mgr.OnMessage() = function (evt) {
    writeToScreen("response: " + evt.data + '\n');
}

EstPoker.Mgr.OnError() = function (evt) {
    writeToScreen('error: ' + evt.data + '\n');

    websocket.close();

    document.myform.connectButton.disabled = false;
    document.myform.disconnectButton.disabled = true;
}

EstPoker.Mgr.DoSend() = function (message) {
    writeToScreen("sent: " + message + '\n');
    websocket.send(message);
}

EstPoker.Mgr.WriteToScreen() = function (message) {
    document.myform.outputtext.value += message
    document.myform.outputtext.scrollTop = document.myform.outputtext.scrollHeight;
}

EstPoker.Mgr.SendText = function () {
    doSend(document.myform.inputtext.value);
}

EstPoker.Mgr.ClearText = function () {
    document.myform.outputtext.value = "";
}

EstPoker.Mgr.DoDisconnect = function () {
    websocket.close();
}
