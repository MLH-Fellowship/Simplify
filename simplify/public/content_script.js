/* global chrome */

alert(window.location.toString());

chrome.runtime.onMessage.addListener(function (request, sender, callback) {
  main();
});

function main() {
  const extensionOrigin = "chrome-extension://" + chrome.runtime.id;
  if (!location.ancestorOrigins.contains(extensionOrigin)) {
    fetch(chrome.runtime.getURL("index.html")) //react stuff here
      .then((response) => response.text());
  }
}

window.addEventListener("tabdata", function (event) {
  console.log("hiii");
  onDidReceiveMessage(event);
});

async function onDidReceiveMessage(event) {
  alert("end me");
  chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (
      tabs
    ) {
      var CurrTab = tabs[0];
      chrome.tabs.sendMessage(CurrTab.id, "URL_RESULT");
    });
  });
}
