export default defineBackground({
  persistent: false,

  main() {
    browser.runtime.onInstalled.addListener(() => {
      browser.tabs.create({ url: "/dashboard.html" });
    });

    function addAcrylicEffect() {
      browser.storage.local.get("tasks").then((data) => {
        if (browser.runtime.lastError) {
          console.error(browser.runtime.lastError);
          return;
        }

        const tasks = data.tasks || [];
        
      });
    }
  },
});
