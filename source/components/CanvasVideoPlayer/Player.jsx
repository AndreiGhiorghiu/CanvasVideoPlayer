import React, { useEffect } from "react";
import useVideoPlayer from "./useVideoPlayer";
import secondsMs from "$s/utils/secondsMs";
import $ from "./style.module.css";

export default ({ scenes, audio }) => {
  const [seconds, onChange, isPlaying, togglePlaying] = useVideoPlayer(
    scenes,
    audio
  );

  const totalSeconds = scenes.reduce((total, item) => total + item.loop, 0);

  useEffect(() => {
    if (isPlaying) {
      togglePlaying();
    }
  }, [scenes]);

  return (
    <div>
      <div className={$.videoPlayer}>
        <div className={$.stage}></div>
        <div className={$.actions}>
          <div className={$.buttons}>
            <div
              id={$.play}
              className="cvs-action cvs-play"
              onClick={togglePlaying}
            >
              <img
                className={$.playPause}
                src={`video-player/${(!isPlaying && "play") || "pause"}.svg`}
              />
            </div>
          </div>
          <div className={$.timeBar}>
            <div className={$.seconds}>
              <span>{secondsMs(seconds)}</span>
              <span>{secondsMs(totalSeconds)}</span>
            </div>
            <input
              className={$.secondsRange}
              type="range"
              value={seconds}
              onChange={(e) => {
                onChange(parseFloat(e.target.value));
              }}
              min={0}
              step={0.01}
              max={totalSeconds}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
