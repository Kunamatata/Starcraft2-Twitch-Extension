import React, { useEffect, useState } from "react";

import { Stream } from "../components/Stream";
import { getStreams } from "../utils/server";

export const sumOfAllViewers = (streams: Array<any>): number => {
  return streams.reduce((acc, stream) => {
    return acc + stream.viewer_count;
  }, 0);
};

export const StreamList = () => {
  const [streams, setStreams] = useState([]);

  const fetchStreams = async () => {
    const streams = await getStreams();
    setStreams(streams);
  };

  useEffect(() => {
    fetchStreams();
  }, []);

  return (
    <div>
      {streams.map(stream => {
        return <Stream key={stream.id} stream={stream} />;
      })}
    </div>
  );
};
