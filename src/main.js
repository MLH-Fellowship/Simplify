/* global chrome */

var requestOptions = {
  method: "GET",
  redirect: "follow",
  mode: "no-cors",
};

chrome.tabs.getSelected(null, (tab) => {
  // gets the current tab that the user is on
  document.getElementById("url").innerHTML = tab.url;
  // displays it to the user

  // API call
  fetch("https://summary-api-zzranger.herokuapp.com/query?article=" + tab.url)
    .then((response) => response.json())
    .then(
      (result) =>
        (document.getElementById("summary").innerHTML = result.summary)
    )
    .catch((error) => console.trace(error));
});
