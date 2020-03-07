import React from "react";
import "./style.css";

export const generateTwitchStreamURL = (channelName: string): string => {
  return `https://www.twitch.tv/${channelName}`;
};

export const Stream = props => {
  const { stream } = props;
  return (
    <div className="stream">
      <img className="profile-image" src={stream.profile_image_url} />
      <div className="username">
        <a href={generateTwitchStreamURL(stream.user_name)}>
          {stream.user_name}
        </a>
      </div>
      <div className="title">{stream.title}</div>
      <div className="viewer-count">{stream.viewer_count}</div>
    </div>
  );
};
