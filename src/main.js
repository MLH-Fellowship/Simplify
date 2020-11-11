/* global chrome */

chrome.tabs.getSelected(null, (tab) => {
  console.log(tab.url)
  document.getElementById("url").innerHTML = tab.url;
});