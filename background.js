
chrome.browserAction.onClicked.addListener(function()
{
  chrome.tabs.create({ url: 'whitescreen.html'}, function (tab) {
  });

  chrome.windows.getCurrent(function(window) {
    chrome.windows.update(window.id, {state: "fullscreen"});
  });
  
});





