import React, { useState, useEffect } from "react";
const AboutPage = () => {
  const [tool, setTool] = useState(false);
  setTimeout(() => {
    setTool(true);
  }, 22500);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  document.title = "Midle Store - About Us";
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center relative">
      <video
        src={require("../assets/video/glVideo.mp4")}
        autoPlay
        muted
        id="video_tag"
        className={tool ? "hidden" : "w-full h-full max-sm:hidden"}
      ></video>
      <div className="bg-transparent shadow-md rounded px-8 py-6 absolute backdrop-blur-sm w-96">
        <h2 className="text-2xl font-bold mb-4 text-white">About Us</h2>
        <p className="text-white text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          purus eget ipsum elementum pellentesque. Mauris sit amet tellus eget
          nisi consectetur mattis. Sed vel scelerisque justo, a bibendum nisl.
          In auctor id risus in iaculis. Duis facilisis euismod ante vel
          scelerisque. Nullam facilisis tristique velit, at finibus enim
          pulvinar ac. Quisque sit amet purus id tellus dignissim egestas. Nulla
          facilisi.
        </p>
      </div>
    </div>
  );
};
export default AboutPage;
