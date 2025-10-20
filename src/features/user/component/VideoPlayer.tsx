import { useEffect } from "react";

const VideoPlayer = () => {



  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <a
            href="#"
            className="text-sm font-semibold tracking-widest text-gray-700 uppercase border-b-2 border-gray-400 pb-1 hover:border-gray-800 transition-colors"
          >
            See how we do it
          </a>
        </div>

        {/* Video Container with Aspect Ratio */}
        <div
          className="flex justify-center"
        >
          {/* The 56.25% padding-top creates a 16:9 aspect ratio container */}
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/reel/C_s01iJsTiK/?utm_source=ig_web_copy_link"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              margin: "0 auto",
              maxWidth: "540px",
              width: "100%",
            }}
          ></blockquote>
         
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
