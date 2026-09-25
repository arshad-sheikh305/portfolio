import { useEffect, useRef, useState } from 'react';

export default function CountUp({
  end,
  suffix = '',
  start,
}: {
  end: number;
  suffix?: string;
  start?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(start ?? false);

  useEffect(() => {
    if (start !== undefined) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [start]);

  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = end / (2000 / 20);
    const id = setInterval(() => {
      n += step;
      if (n >= end) {
        setCount(end);
        clearInterval(id);
      } else {
        setCount(Math.floor(n));
      }
    }, 20);
    return () => clearInterval(id);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
