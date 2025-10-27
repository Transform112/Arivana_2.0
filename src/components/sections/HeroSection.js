/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import { Badge, Button } from "#/base";
import { Brands } from "#/Brands";

export function HeroSection({
  badge,
  title,
  description,
  buttons,
  image,
  clientsLabel,
  clients,
  ...rest
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section {...rest}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-center items-center min-h-screen">
          {/* Text and Buttons */}
          <div className="flex flex-col justify-center items-center gap-4 text-center max-w-3xl mx-auto mt-32 pb-12">
            <Badge {...badge} />
            <h1 className="sm:text-6xl text-4xl font-display font-semibold title-gradient">
              {title}
            </h1>
            <p className="sm:text-xl text-sm">{description}</p>

            {buttons?.length > 0 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button} />
                ))}
              </div>
            )}
          </div>

          {/* Video Section */}
          <div>
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              className="rounded-lg"
            >
              <source src="newHero.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Clients Section */}
          <div className="text-sm mt-5">{clientsLabel}</div>
          <Brands clients={clients} />
        </div>
      </div>
    </section>
  );
}
