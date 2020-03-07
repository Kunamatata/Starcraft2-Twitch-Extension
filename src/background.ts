import { getStreams } from "./utils/server";
import { setBadgeTextAndBackgroundColor } from "./utils/browser-action";
import { sumOfAllViewers } from "./containers/StreamList";

const initBackground = async () => {
  const streams = await getStreams();
  const maximumAmountOfViewers = sumOfAllViewers(streams);
  setBadgeTextAndBackgroundColor(maximumAmountOfViewers);
  setTimeout(initBackground, 120000);
};

initBackground();
