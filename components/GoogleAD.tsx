"use client";

import { useEffect, useRef, useState } from "react";

export default function GoogleAD({ slot }: { slot: string }) {
  const elRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!elRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShow(true);
        observer.disconnect(); // 只触发一次
        (window?.dd || []).push({});
      }
    });

    observer.observe(elRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elRef} className="dd_box mx-auto my-5 h-[280px] w-[1000px]">
      {show ? (
        <>
          <ins
            className="dd"
            data-ad-slot={slot}
            style={{ display: "block" }}
          ></ins>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
