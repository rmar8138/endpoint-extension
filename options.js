const optionsForm = document.getElementById("optionsForm");

chrome.storage.sync.get("route", function(data) {
  const { route } = data;
  optionsForm.elements.route.value = route;
});

optionsForm.addEventListener("submit", function(event) {
  event.preventDefault();
  chrome.storage.sync.set({ route: event.target.elements.route.value });
});
