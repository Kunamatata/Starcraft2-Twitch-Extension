export const setBadgeTextAndBackgroundColor = (amount: number) => {
  if (window.browser) {
    const text = amount.toString();
    let color;

    if (amount <= 1000) {
      color = "rgb(33,33,33)";
    } else if (amount <= 5000) {
      color = "rgb(22, 241, 132)";
    } else {
      color = "rgb(220, 50,50)";
    }

    browser.browserAction.setBadgeText({
      text,
    });
    browser.browserAction.setBadgeBackgroundColor({
      color,
    });
  }
};
