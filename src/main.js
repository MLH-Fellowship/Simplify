/* global chrome */
var requestOptions = {
  method: "GET",
  redirect: "follow",
  mode: "no-cors",
};
chrome.tabs.getSelected(null, (tab) => {
  console.log(tab.url);
  document.getElementById("url").innerHTML = tab.url;

  fetch("https://summary-api-zzranger.herokuapp.com/query?article=" + tab.url)
    .then((response) => response.json())
    .then(
      (result) =>
        (document.getElementById("summary").innerHTML = result.summary)
    )
    .catch((error) => console.trace(error));
});
