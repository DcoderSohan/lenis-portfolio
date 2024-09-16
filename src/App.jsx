import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import { useGSAP } from "@gsap/react";
import Nav from "./Components/Nav";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    // Update ScrollTrigger on scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Add GSAP ticker to update Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup function on component unmount
    return () => {
      gsap.ticker.remove(() => {
        lenis.destroy();
      });
    };
  }, []);

  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline();

      let xTransform = gsap.utils.random(-100, 100);
      tl.set(
        image,
        {
          transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
        },
        "start"
      )
        .to(
          image,
          {
            scale: 0,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: elem,
              scrub: true,
              start: "top top",
              end: "bottom top",
            },
          },
          "start"
        )
        .to(
          elem,
          {
            xPercent: xTransform,
            ease: "Power4.easeinOut",
            scrollTrigger: {
              trigger: elem,
              scrub: true,
              start: "top bottom",
              end: "bottom top",
            },
          },
          "start"
        );
    });
  });

  return (
    <>
      <Nav />
      <div className="w-full bg-zinc-900 pt-10">
        <div className="grid grid-elem cols-8 grid-rows-20 gap-2 overflow-hidden h-screen lg:h-auto">
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 1, "--c": 3 }}
          >
            <img
              src="./img/1.jpg"
              alt="Image 1"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 1, "--c": 7 }}
          >
            <img
              src="./img/2.jpg"
              alt="Image 2"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 2, "--c": 2 }}
          >
            <img
              src="./img/3.jpg"
              alt="Image 3"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 2, "--c": 6 }}
          >
            <img
              src="./img/4.jpg"
              alt="Image 4"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 3, "--c": 4 }}
          >
            <img
              src="./img/5.jpg"
              alt="Image 5"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 3, "--c": 8 }}
          >
            <img
              src="./img/6.jpg"
              alt="Image 6"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 4, "--c": 1 }}
          >
            <img
              src="./img/7.jpg"
              alt="Image 7"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 4, "--c": 4 }}
          >
            <img
              src="./img/8.jpg"
              alt="Image 8"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 5, "--c": 2 }}
          >
            <img
              src="./img/9.jpg"
              alt="Image 9"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 5, "--c": 6 }}
          >
            <img
              src="./img/10.jpg"
              alt="Image 10"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 6, "--c": 3 }}
          >
            <img
              src="./img/11.jpg"
              alt="Image 11"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 6, "--c": 7 }}
          >
            <img
              src="./img/12.jpg"
              alt="Image 12"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 7, "--c": 5 }}
          >
            <img
              src="./img/13.jpg"
              alt="Image 13"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 7, "--c": 8 }}
          >
            <img
              src="./img/14.jpg"
              alt="Image 14"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 8, "--c": 1 }}
          >
            <img
              src="./img/15.jpg"
              alt="Image 15"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 8, "--c": 4 }}
          >
            <img
              src="./img/16.jpg"
              alt="Image 16"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 9, "--c": 2 }}
          >
            <img
              src="./img/17.jpg"
              alt="Image 17"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 9, "--c": 6 }}
          >
            <img
              src="./img/18.jpg"
              alt="Image 18"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 10, "--c": 3 }}
          >
            <img
              src="./img/19.jpg"
              alt="Image 19"
              className="w-[350px] lg:w-auto"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 10, "--c": 7 }}
          >
            <img
              src="./img/20.jpg"
              alt="Image 20"
              className="w-[350px] lg:w-auto"
            />
          </div>
        </div>
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl lg:text-8xl mb-4 uppercase font-['Changa']">
            Sohan Sarang
          </h1>
          <h2 className="text-xl lg:text-4xl font-['Silkscreen']">
            ウェブ開発者
          </h2>
        </div>
        <div className="w-full h-screen mx-auto py-96 relative z-10 text-center font-['Changa'] mt-10 flex items-center justify-center bg-blue-300">
          <p className="text-xl lg:text-5xl leading-[3.2rem] w-3/4 mx-auto text-black">
            Passionate web developer with a strong foundation in front-end
            (HTML, CSS, JavaScript, React.js) and back-end (Node.js)
            technologies. Seeking to apply my skills to create user-friendly
            websites and applications while contributing to a dynamic team.
            Eager to learn, adapt, and grow in a fast-paced environment.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
