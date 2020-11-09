/* global chrome */

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
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      window.postMessage(
        {
          type: "URL_RESULT",
          url: url,
        },
        "*"
      );
    });
}
