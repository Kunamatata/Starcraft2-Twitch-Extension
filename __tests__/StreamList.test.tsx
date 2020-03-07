import { mount } from "enzyme";
import React from "react";
import { StreamList, sumOfAllViewers } from "../src/containers/StreamList";
import axios from "axios";

const mockStreams = [
  {
    id: "750252737",
    user_id: "30220059",
    user_name: "ESL_SC2",
    game_id: "490422",
    type: "live",
    title: "RERUN: SC2 - Rogue vs. Maru - IEM Katowice 2020 - Semifinals",
    viewer_count: 655,
    started_at: "2020-03-01T14:02:04Z",
    language: "en",
    thumbnail_url:
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-{width}x{height}.jpg",
    tag_ids: ["6ea6bca4-4712-4ab9-a906-e3336a9d8039"],
    profile_image_url:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/cac110f7-0711-421f-9341-c77b53ab63b5-profile_image-300x300.jpeg",
    description:
      "For standings, schedule, and results, visit http://www.intelextrememasters.com/",
  },
  {
    id: "750252737",
    user_id: "30220059",
    user_name: "ESL_SC2",
    game_id: "490422",
    type: "live",
    title: "RERUN: SC2 - Rogue vs. Maru - IEM Katowice 2020 - Semifinals",
    viewer_count: 655,
    started_at: "2020-03-01T14:02:04Z",
    language: "en",
    thumbnail_url:
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-{width}x{height}.jpg",
    tag_ids: ["6ea6bca4-4712-4ab9-a906-e3336a9d8039"],
    profile_image_url:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/cac110f7-0711-421f-9341-c77b53ab63b5-profile_image-300x300.jpeg",
    description:
      "For standings, schedule, and results, visit http://www.intelextrememasters.com/",
  },
];

describe("StreamList", () => {
  describe("sumOfAllViewers", () => {
    it("should calculate the sum of all viewers from all streams", () => {
      expect(
        sumOfAllViewers([
          { viewer_count: 1 },
          { viewer_count: 2 },
          { viewer_count: 3 },
        ])
      ).toBe(6);
    });
  });
  describe("When given valid input data", () => {
    it("should render a list of streams", async () => {
      jest.useFakeTimers();
      jest.runAllTimers();

      jest.spyOn(axios, "get").mockResolvedValue({ data: mockStreams });
      const component = mount(<StreamList />);
      setTimeout(() => {
        expect(component.find(".stream").length).toBe(2);
      }, 200);
    });
  });
});
