import { useState } from "react";
let images = [
  "http://placekitten.com/300/300",
  "http://placekitten.com/200/300",
  "http://placekitten.com/100/300",
  "http://placekitten.com/500/300",
  "http://placekitten.com/600/300",
  "http://placekitten.com/700/300"
];
function NextImage() {
  const [index, setIndex] = useState(0);
  let hasNext = index < images.length - 1;
  let hasPrev = index > 0;

  function handleNext() {
    setIndex(index + 1);
  }
  function handlePrev() {
    setIndex(index - 1);
  }
  return (
    <>
      <div>
        <img src={images[index]} alt="" />
      </div>

      <div>
        <button onClick={handlePrev} disabled={!hasPrev}>
          Previous
        </button>
        <button onClick={handleNext} disabled={!hasNext}>
          Next
        </button>
      </div>
    </>
  );
}
export default NextImage;
