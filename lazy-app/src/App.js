
import { useEffect, useState, useRef } from "react";
import "./App.css";

const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.2,
};

function App() {
  const [loaded, setIsLoaded] = useState(false);
  const imgRefs = useRef([]);

  useEffect(() => {
    const handleImageLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener("load", handleImageLoad);

    return () => {
      window.removeEventListener("load", handleImageLoad);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            loadImages(img);
            observer.unobserve(img);
          }
        });
      },
      config
    );

    imgRefs.current.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      imgRefs.current.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);

  const loadImages = (image) => {
    image.src = image.dataset.src;
  };

  const imageUrls = [
    
      "https://images.unsplash.com/photo-1648294358557-80d5aeb2e396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1672985352725-a64688cb61b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1682687220161-e3e7388e4fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1682936189834-9e03bf5a61af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1685278021753-43e6103de8f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1685329173725-73914aada9ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1685384355807-e859d0994457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1685432180855-d1915370b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1685566971859-7b27b4d9c4cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1685631478719-1abcf74b67c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1685689238460-fdd76e602962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1685776133440-437ffc5c4154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1686080187868-adcba0d63014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1686383094935-7e8c0d7105a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1686485237033-58ea9242ac53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1687072574617-d5cfd24412a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1687162703228-63155c83dd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1687193913065-a1c4aa6a0b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1687270282463-4e3bd2b90160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
      "https://images.unsplash.com/photo-1687509830842-4b706e209664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQ5Mjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc5NDU2ODR8&ixlib=rb-4.0.3&q=80&w=400",
    ];
  

  return (
    <div className="App">
      <h2>Lazy Load Images</h2>
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={loaded ? imageUrl : ""}
          data-src={imageUrl}
          alt=""
          width={500}
          height={250}
          className={loaded ? "loaded" : "loading"}
          ref={(el) => (imgRefs.current[index] = el)}
        />
      ))}
    </div>
  );
}

export default App;
