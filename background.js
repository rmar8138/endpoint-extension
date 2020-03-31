chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ route: "management" });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.sync.get("route", function(data) {
    const { route } = data;
    const url = new URL(tab.url);
    const domain = `https://${url.hostname}/${route}`;

    chrome.tabs.create({
      url: domain,
      active: true
    });
  });
});
