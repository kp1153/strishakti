// components/providers/GSAPProvider.js
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GSAPProvider({ children }) {
  useEffect(() => {
    // GSAP global config
    gsap.config({
      nullTargetWarn: false,
      trialWarn: false,
    });

    // ScrollTrigger defaults
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
      markers: false, // Development के लिए true करो
    });

    // Lenis के साथ sync (if Lenis exists)
    const updateScrollTrigger = () => {
      ScrollTrigger.refresh();
    };

    // Lenis scroll event से sync
    let lenisScroll = null;
    if (window.lenis) {
      lenisScroll = window.lenis;
      lenisScroll.on("scroll", ScrollTrigger.update);
    }

    // Resize पर refresh
    window.addEventListener("resize", updateScrollTrigger);

    // Common animations setup
    setupCommonAnimations();

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateScrollTrigger);
      if (lenisScroll) {
        lenisScroll.off("scroll", ScrollTrigger.update);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}

// Common animations function
function setupCommonAnimations() {
  // Fade In Animation (class: .fade-in)
  gsap.utils.toArray(".fade-in").forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "top 65%",
          scrub: false,
        },
      }
    );
  });

  // Slide In from Left (class: .slide-in-left)
  gsap.utils.toArray(".slide-in-left").forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        },
      }
    );
  });

  // Slide In from Right (class: .slide-in-right)
  gsap.utils.toArray(".slide-in-right").forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        },
      }
    );
  });

  // Scale In Animation (class: .scale-in)
  gsap.utils.toArray(".scale-in").forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        },
      }
    );
  });

  // Stagger Children Animation (class: .stagger-container)
  gsap.utils.toArray(".stagger-container").forEach((container) => {
    const children = container.querySelectorAll(".stagger-item");
    gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      }
    );
  });

  // Parallax Effect (class: .parallax)
  gsap.utils.toArray(".parallax").forEach((element) => {
    const speed = element.dataset.speed || 0.5;
    gsap.to(element, {
      y: () => -ScrollTrigger.maxScroll(window) * parseFloat(speed),
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: 1,
      },
    });
  });

  // Counter Animation (class: .counter)
  gsap.utils.toArray(".counter").forEach((element) => {
    const target = parseFloat(element.dataset.target) || 100;
    gsap.fromTo(
      element,
      { textContent: 0 },
      {
        textContent: target,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true,
        },
        onUpdate: function () {
          element.textContent = Math.ceil(this.targets()[0].textContent);
        },
      }
    );
  });
}

// Export utility function for custom animations
export const animateElement = (element, config) => {
  return gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      ...config.scrollTrigger,
    },
    ...config,
  });
};
