import { getStreams } from "../src/utils/server";

describe("Server", () => {
  describe("Get Streams", () => {
    it("should return an array containing information about streams", async () => {
      const streams = await getStreams();
      expect(Array.isArray(streams)).toBe(true);
      expect(streams.length).toBeGreaterThan(0);
    });
  });
});
