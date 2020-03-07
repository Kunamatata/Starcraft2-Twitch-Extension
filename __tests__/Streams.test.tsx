import React from "react";
import { shallow } from "enzyme";
import { generateTwitchStreamURL, Stream } from "../src/components/Stream";

const mockStream = {
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
};

describe("Stream", () => {
  describe("GenerateTwitchStreamURL", () => {
    it("should generate the twitch url for that channel", () => {
      expect(generateTwitchStreamURL("kunamatataeu")).toBe(
        "https://www.twitch.tv/kunamatataeu"
      );
    });
  });
  describe("When a valid data input of a stream is given", () => {
    it("should contain a stream", () => {
      const component = shallow(<Stream stream={mockStream} />);
      expect(component.find(".stream").length).toBe(1);
    });
    it("should contain a username", () => {
      const component = shallow(<Stream stream={mockStream} />);
      expect(component.find(".username").length).toBe(1);
    });
    it("should render a profile image", () => {
      const component = shallow(<Stream stream={mockStream} />);
      expect(component.find(".profile-image").length).toBe(1);
      expect(component.find("img").length).toBe(1);
    });
    it("should render a title", () => {
      const component = shallow(<Stream stream={mockStream} />);
      expect(component.find(".title").length).toBe(1);
    });
    it("should render the viewer count", () => {
      const component = shallow(<Stream stream={mockStream} />);
      expect(component.find(".viewer-count").length).toBe(1);
      expect(component.find(".viewer-count").html()).toContain(
        mockStream.viewer_count
      );
    });
  });
});
