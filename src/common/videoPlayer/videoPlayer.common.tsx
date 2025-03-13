import "./styles.scss";

import { FullScreen, VideoPlay } from "@/assets";
import React, { useRef, useState } from "react";

import { IconButton } from "@mui/material";

interface VideoPlayerProps {
  video?: string;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ className, video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(false);
  const [showBlur, setShowBlur] = useState(true);

  const playVideo = () => {
    if (!videoRef.current) return;
    videoRef.current?.play();
    setShowControls(!showControls);
    setShowBlur(false);
  };
  const handleFullscreen = () => {
    if (!videoRef.current) return;
    setShowBlur(false);
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className={`video-player-container ${className}`}>
      <video
        ref={videoRef}
        src={video}
        className={`-video-player ${showBlur && "-video-blur"}`}
        controls={showControls}
      />
      <IconButton className="-video-player-full-screen-btn" onClick={handleFullscreen}>
        <FullScreen className="--video-player-full-screen-btn-icon" />
      </IconButton>
      {!showControls && (
        <IconButton className="-video-player-play-btn" onClick={playVideo}>
          <VideoPlay className="--video-player-play-btn-icon" />
        </IconButton>
      )}
    </div>
  );
};
