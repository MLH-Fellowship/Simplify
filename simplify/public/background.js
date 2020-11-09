/* global chrome */

var id;
chrome.runtime.onMessage.addListener(function (message, sender, response) {
  console.log(message.type);
  if (message.type == "extension_started") {
    console.log(sender);
    id = sender.tab.tabId;
  } else if (message.type == "init_popup_feed") {
    chrome.tabs.sendMessage(id, { type: "grab_stories" }, function (response) {
      console.log(response);
      chrome.runtime.sendMessage({
        type: "stories_feed_data",
        data: response.data,
      });
    });
  }
});