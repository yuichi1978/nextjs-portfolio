import { useEffect, useRef } from "react";

export default function SvgCurve() {
  const path = useRef<SVGPathElement | null>(null);

  let progress = 0;
  let reqId: number | null = null; // Specify the type for reqId
  let x = 0.5;

  // setPath 関数は一番上に移動します
  const setPath = (value: number) => {
    const width = window.innerWidth * 0.7;

    path.current?.setAttributeNS(
      null,
      "d",
      `M 0 50 Q ${width * x} ${50 + value} ${width} 50`
    );
  };

  const animateIn = () => {
    // If the animationOut is running, cancel it and reset time
    if (reqId !== null) {
      cancelAnimationFrame(reqId); // reqIdがnullでないことを確認してから呼び出す
    }

    setPath(progress);

    reqId = requestAnimationFrame(animateIn);
  };

  const manageMouseMove = (e: React.MouseEvent) => {
    // Specify the type for the event
    const { movementY } = e;

    const box = (e.target as HTMLElement).getBoundingClientRect(); // Specify the type for e.target

    x = (e.clientX - box.left) / box.width;

    progress += movementY;
  };

  const resetAnimation = () => {
    if (reqId !== null) {
      cancelAnimationFrame(reqId); // reqIdがnullでないことを確認してから呼び出す
    }

    animateOut();
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const animateOut = () => {
    progress = lerp(progress, 0, 0.04);

    if (Math.abs(progress) > 0.5) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      progress = 0;
    }
  };

  useEffect(() => {
    setPath(progress);

    const handleResize = () => {
      setPath(progress);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [progress]); // setPath は依存リストに追加しなくても良い（関数は常に安定）

  return (
    <div className="line">
      <span
        onMouseEnter={() => {
          animateIn();
        }}
        onMouseLeave={() => {
          resetAnimation();
        }}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className="box"
      ></span>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
}
