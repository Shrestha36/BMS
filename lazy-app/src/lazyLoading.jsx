import React, { useState, useEffect, useRef } from "react";

const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

function LazyComponent({ children }) {
  let ref = useRef();

  useEffect(() => {
    let observer = new window.IntersectionObserver(function (entries, self) {
      console.log("entries", entries);
      console.log("self", self);
      entries.forEach((entry) => {
        console.log("entries11", entries);
        if (entry.isIntersecting) {
          loadImages(entry.target);
          self.unobserve(entry.target);
        }
      });
    }, config);

    observer.observe(ref.current);

    return () => {
      if (ref && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const loadImages = (image) => {
    image.src = image.dataset.src;
  };

  const childElement = React.Children.only(children);

  return React.cloneElement(childElement, { ref: (el) => (ref = el) });
}

export default LazyComponent;