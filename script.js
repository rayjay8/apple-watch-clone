const heroText = document.getElementById("hero-text");
const heroContainer = document.querySelector(".hero-container");
const heroSection = document.querySelector(".hero");
const subHeader = document.querySelector(".sub-header");
const front = document.querySelector(".front");
const hero = document.getElementById("hero");
const height = document.getElementById("height");
const fadeText = document.getElementById("fade-text");
const block = document.getElementById("block");
const ctn1 = document.querySelector(".container-1");
const vid1 = document.getElementById("vid1");
const vid2 = document.getElementById("vid2");
const doubleTap = document.getElementById("doubleTap");
const section2 = document.querySelector(".section-2");
const section4 = document.querySelector(".section-4");
const examples = document.querySelector(".examples");
const example = document.querySelectorAll(".example");
const watch = document.getElementById("watch");
const screens = document.querySelector(".screens");
const section5 = document.querySelector(".section-5");
const brightness = document.querySelector(".brightness");
const brightnessText = document.querySelector(".brightness-text");
const dim = document.getElementById("dim");
const bright = document.getElementById("bright");
const section6 = document.querySelector(".section-6");
const homepod = document.getElementById("homepod");
const redVideo = document.getElementById("red-video");
const section7 = document.querySelector(".section-7");
const blueWatch = document.getElementById("blueWatch");
const scrollPlay = document.getElementById("scroll-play");
const sticky = document.querySelector(".sticky");
const scrollDesc = document.querySelector(".scroll-desc");
const particles = document.getElementById("particles");
const section8 = document.querySelector(".section-8");
const greyWatch = document.querySelector(".greyWatch");
const greyVid = document.getElementById("greyWatch");
const section9 = document.querySelector(".section-9");
const watches = document.getElementById("watches");
const section10 = document.querySelector(".section-10");
const lottieContainer = document.querySelector(".lottie-container");
const zoom1 = document.getElementById("zoom1");
const zoom2 = document.getElementById("zoom2");

let vidPlayed = false;

function updateBackgroundPosition() {
  const scrollY = window.scrollY;
  const heroTextHeight = heroText.offsetHeight;
  const containerHeight = heroContainer.offsetHeight;

  if (scrollY >= 34) {
    heroText.style.opacity = 1;
    heroText.style.transform = `translate(-50%, -70%)`;
    heroText.style.transition =
      "transform 0.5s ease-in-out, opacity .7s ease-in-out";
    hero.style.opacity = 0.5;
    hero.style.transition = "opacity .7s ease-in-out";
    subHeader.style.backgroundColor = "#121212";
    subHeader.style.transition = "background-color .1s ease-in-out";

    const speedMultiplier = 0.1;

    const progress =
      (scrollY / (containerHeight - heroTextHeight)) * speedMultiplier;

    const backgroundPositionY = progress * 500;

    heroText.style.backgroundPosition = `50% ${backgroundPositionY}%`;
    if (backgroundPositionY < 50) {
      front.style.position = "sticky";
      front.style.top = "0";
    } else {
      let setOpacity = (backgroundPositionY - 50) * 0.1;
      heroText.style.opacity = 1 - setOpacity;
      let maxScale = 0.8;
      hero.style.scale = 1 - setOpacity;
      if (hero.style.scale < maxScale) {
        hero.style.scale = maxScale;
      }
      hero.style.transition = "scale .5s ease-out";
      fadeText.style.opacity = setOpacity / 2;
      let stopColorPosition = (backgroundPositionY - 50) * 5;
      block.style.background = `radial-gradient(circle at 50%, #00000000 0%, #000000 ${stopColorPosition}%)`;
      if (stopColorPosition > 150) {
        ctn1.style.opacity = 1;
        ctn1.style.transition = "opacity .5s ease-out";
      }
    }
  } else {
    subHeader.style.backgroundColor = "transparent";
    front.style.position = "relative";
  }
}

window.addEventListener("scroll", () => {
  updateBackgroundPosition();
});

updateBackgroundPosition();

window.addEventListener("scroll", () => {
  if (!vidPlayed) {
    const videoCtn = document.querySelector(".video-ctn");
    const videoCtnTop = videoCtn.getBoundingClientRect().top;

    if (videoCtnTop <= window.innerHeight) {
      vid1.play();
      vidPlayed = true;
    }
  }

  const section2Bottom = section2.getBoundingClientRect().bottom;

  if (section2Bottom <= window.innerHeight) {
    setTimeout(() => {
      doubleTap.style.opacity = 1;
    }, 700);
    doubleTap.style.transition = "opacity 1s ease-out";
    vid2.play();
  }

  const watchTop = watch.getBoundingClientRect().top;

  const ex1 = document.getElementById("ex1");
  const ex2 = document.getElementById("ex2");
  const ex3 = document.getElementById("ex3");
  const ex4 = document.getElementById("ex4");
  const ex5 = document.getElementById("ex5");
  const face = document.getElementById("face");
  const face2 = document.getElementById("face2");
  const face3 = document.getElementById("face3");
  const face4 = document.getElementById("face4");
  const face5 = document.getElementById("face5");

  if (watchTop <= window.innerHeight) {
    const tracker = section4.getBoundingClientRect().top;
    const scale = 1 + tracker * 0.0005;
    const opacity = 1 + tracker * 0.005;
    screens.style.opacity = 0;
    ex1.style.transform = `matrix(1, 0, 0, 1, 0, ${tracker * 0.01})`;
    if (ex1.style.opacity < 1) {
      screens.style.opacity = 1;
      screens.style.position = "sticky";
      screens.style.bottom = "4px";
      screens.style.transform = "translateY(0)";
      ex1.style.transform = `scale(${scale}) matrix(1, 0, 0, 1, 0, ${
        tracker * 0.01
      })`;
      face.style.opacity = opacity;
    }
    ex1.style.opacity = opacity;
    ex2.style.transform = `matrix(1, 0, 0, 1, 0, ${tracker * 0.02})`;

    if (ex2.style.opacity < 1) {
      ex2.style.transform = `scale(${scale + 0.1}) matrix(1, 0, 0, 1, 0, ${
        tracker * 0.02
      })`;
      face2.style.opacity = opacity + 1;
    }
    if (ex2.style.opacity < 0) {
      watch.src = "./images/alt5.jpg";
    } else {
      watch.src = "./images/alt1.jpg";
    }
    ex2.style.opacity = opacity + 1;
    ex3.style.transform = `matrix(1, 0, 0, 1, 0, ${tracker * 0.03})`;
    if (ex3.style.opacity < 1) {
      ex3.style.transform = `scale(${scale + 0.2}) matrix(1, 0, 0, 1, 0, ${
        tracker * 0.03
      })`;
      face3.style.opacity = opacity + 2;
    }
    ex3.style.opacity = opacity + 2;
    ex4.style.transform = `matrix(1, 0, 0, 1, 0, ${tracker * 0.04})`;
    if (ex4.style.opacity < 1) {
      ex4.style.transform = `scale(${scale + 0.3}) matrix(1, 0, 0, 1, 0, ${
        tracker * 0.04
      })`;
      face4.style.opacity = opacity + 3;
      face5.style.opacity = 0;
    }
    ex4.style.opacity = opacity + 3;
    ex5.style.transform = `matrix(1, 0, 0, 1, 0, ${tracker * 0.05})`;
    if (ex5.style.opacity < 1) {
      ex5.style.transform = `scale(${scale + 0.4}) matrix(1, 0, 0, 1, 0, ${
        tracker * 0.05
      })`;
      screens.style.display = "none";
    } else if (ex5.style.opacity > 1) {
      screens.style.display = "grid";
    }
    ex5.style.opacity = opacity + 4;
  }
});

window.addEventListener("scroll", () => {
  const section5Top = brightnessText.getBoundingClientRect().top;
  const tracker = brightnessText.getBoundingClientRect().top;
  const section5TopHalf = section5Top + section5.offsetHeight / 2;
  if (section5TopHalf + 200 <= window.innerHeight) {
    dim.style.opacity = 0;
    dim.style.transition = "opacity 1s ease";
    brightness.style.transform = `matrix(1, 0, 0, 1, 0, ${tracker * 0.15})`;
  } else {
    dim.style.opacity = 1;
    dim.style.transition = "opacity 1s ease";
  }
});

window.addEventListener("scroll", () => {
  const section6Top = section6.getBoundingClientRect().top;
  const tracker = section6Top + section6.offsetHeight / 2;
  if (tracker <= window.innerHeight) {
    homepod.style.scale = 1;
    homepod.style.transition = "scale 2s ease";
    setTimeout(() => {
      redVideo.play();
    }, 1500);
  } else {
    homepod.style.scale = 1.2;
    homepod.style.transition = "scale 1s ease";
  }
});

let isScrolling = false;

function playVideoOnScroll() {
  const section7Top = section7.getBoundingClientRect().top + 500;
  const section7Bottom = section7Top + section7.clientHeight;
  const windowHeight = window.innerHeight;

  const scrollProgress =
    (windowHeight - section7Top) / (section7.clientHeight + windowHeight);

  const videoDuration = scrollPlay.duration;
  const videoTime = videoDuration * scrollProgress * 2.5;

  scrollPlay.currentTime = videoTime;
  if (scrollProgress > 0 && scrollProgress < 1) {
    if (!scrollPlay.paused) {
      scrollPlay.pause();
    }
    if (!isScrolling) {
      scrollPlay.play();
      isScrolling = true;
    }
  } else {
    scrollPlay.pause();
    isScrolling = false;
  }

  if (videoTime >= 4) {
    scrollDesc.style.opacity = 1;
    scrollDesc.style.transform = "translateY(0)";
    scrollDesc.style.transition = "transform .75s ease, opacity 1s ease";
  } else {
    scrollDesc.style.opacity = 0;
    scrollDesc.style.transform = "translateY(20px)";
    scrollDesc.style.transition = "transform .75s ease, opacity 1s ease";
  }

  if (isScrolling) {
    requestAnimationFrame(playVideoOnScroll);
  }

  const blueCtnBottom = blueWatch.getBoundingClientRect().bottom;
  if (blueCtnBottom <= window.innerHeight) {
    sticky.style.position = "sticky";
    sticky.style.top = "0";
  }
}

window.addEventListener("scroll", playVideoOnScroll);

window.addEventListener("scroll", () => {
  const section8Top = section8.getBoundingClientRect().top;
  const greyWatchTop = greyWatch.getBoundingClientRect().top;
  const tracker = section8Top + section8.offsetHeight / 2;

  if (greyWatchTop <= window.innerHeight) {
    setTimeout(() => {
      greyVid.play();
    }, 2000);
  }
  if (section8Top <= window.innerHeight) {
    greyWatch.style.transform = `matrix(1, 0, 0, 1, 0, ${
      tracker * 0.12 - 150
    })`;
  }
});

window.addEventListener("scroll", () => {
  const watchesTop = watches.getBoundingClientRect().top;
  if (watchesTop <= window.innerHeight) {
    watches.style.transform = `translateX(-780px)`;
    watches.style.transition = "transform 3.2s ease-in-out";
  }
});

const lottieElements = document.querySelectorAll("[data-lottie-file]");

lottieElements.forEach((element) => {
  const lottieFile = element.getAttribute("data-lottie-file");

  const animation = lottie.loadAnimation({
    container: element,
    renderer: "canvas",
    loop: true,
    autoplay: true,
    path: lottieFile,
  });

  window.addEventListener("scroll", () => {
    const sec = section10.getBoundingClientRect();
    const section10Top = section10.getBoundingClientRect().top;
    const lottieContainerBottom = lottieContainer.getBoundingClientRect();
    if (section10Top <= window.innerHeight) {
      const scrollProgress = 1 - sec.top / window.innerHeight;
      const frame = (scrollProgress * 601) / 4.5;
      console.log(frame);
      animation.goToAndStop(frame, true);
      zoom1.style.opacity = 0;
      zoom2.style.opacity = 0;
      zoom1.style.transform = `matrix(0.7, 0, 0, 0.7, 0, 0)`;
      zoom2.style.transform = `matrix(0.7, 0, 0, 0.7, 0, 0)`;
      if (frame <= 300 && frame >= 224) {
        // calculate difference between 300 and 224 such that 224 is 0 and 300 is 1
        const opacity = (frame - 224) / (300 - 224);
        zoom1.style.opacity = opacity;
        // change matrix scale from 0.7 to 0.9
        const scale = 0.7 + opacity * 0.2;
        zoom1.style.transform = `matrix(${scale}, 0, 0, ${scale}, 0, 0)`;
      } else if (frame > 300) {
        const opacity = 1 - (frame - 300) / 76;
        zoom1.style.opacity = opacity;
        const scale = 0.9 - opacity * 0.2;
        zoom1.style.transform = `matrix(0.9, 0, 0, 0.9, 0, 0)`;
      }
      if (frame <= 520 && frame >= 400) {
        const opacity = (frame - 400) / (520 - 400);
        zoom2.style.opacity = opacity;
        const scale = 0.7 + opacity * 0.2;
        zoom2.style.transform = `matrix(${scale}, 0, 0, ${scale}, 0, 0)`;
      } else if (frame > 520) {
        const opacity = 1 - (frame - 520) / 76;
        zoom2.style.opacity = opacity;
        zoom2.style.transform = `matrix(0.9, 0, 0, 0.9, 0, 0)`;
      }
    }
  });
});
