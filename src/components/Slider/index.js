import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styles from "./slider.module.scss";

export const SliderItem = ({ children, width }) => {
  return (
    <div className={styles['carousel-item']} style={{ width: width }}>
      {children}
    </div>
  );
};

const Slider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!paused) {
//         updateIndex(activeIndex + 1);
//       }
//     }, 3000);

//     return () => {
//       if (interval) {
//         clearInterval(interval);
//       }
//     };
//   });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      className={styles['carousel']}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={styles['inner']}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className={styles['indicators']}>
        <button
        className={styles['prev']}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <NavigateBeforeIcon fontSize="large"  />
        </button>
        {/* {React.Children.map(children, (child, index) => {
          return (
            <button
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })} */}
        <button
        className={styles['next']}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <NavigateNextIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
