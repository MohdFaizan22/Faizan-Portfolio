import { useEffect, useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useInView, type Variants, AnimatePresence, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";
import { useRouter } from "@tanstack/react-router";

/* ─── Cinematic easing curves ─── */
const EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const;
const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;
const EASE_PREMIUM = [0.25, 0.46, 0.45, 0.94] as const;

/* ─── Smooth scroll (Lenis) ─── */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Expose lenis on window for nav smooth scroll
    (window as any).__lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);
  return <>{children}</>;
}

/* ─── Basic reveal (slide up + fade) ─── */
const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [...EASE_CINEMATIC] },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "header" | "footer";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
      variants={revealVariants}
    >
      {children}
    </MotionTag>
  );
}

/* ─── Section reveal (scale + blur + fade — cinematic entrance) ─── */
const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(8px)",
    y: 40,
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.9,
      ease: [...EASE_CINEMATIC],
      staggerChildren: 0.1,
    },
  },
};

const sectionChildVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [...EASE_SMOOTH] },
  },
};

export function SectionReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.08 }}
      transition={{ delay }}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
}

export { sectionChildVariants };

/* ─── Stagger reveal (children animate in cascade) ─── */
const staggerContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [...EASE_SMOOTH] },
  },
};

export function StaggerReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={staggerContainerVariants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  );
}

/* ─── Glow reveal (heading with soft glow aura) ─── */
export function GlowReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.0, ease: [...EASE_CINEMATIC] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Image reveal ─── */
export function ImageReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.06, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, ease: [...EASE_CINEMATIC] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Page transition wrapper ─── */
export function PageTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const path = router.state.location.pathname;
  const reduce = useReducedMotion();
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current = false;
  }, []);
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      key={path}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Parallax wrapper — subtle depth on scroll ─── */
export function ParallaxDepth({
  children,
  className,
  offset = 30,
}: {
  children: ReactNode;
  className?: string;
  offset?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [...EASE_PREMIUM] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Scroll Away Wrapper (Parallax, blur, scale on scroll out) ─── */
export function ScrollAwayWrapper({
  children,
  className,
  id,
  as = "section",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "footer" | "div";
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0.5, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
  const blur = useTransform(scrollYProgress, [0.5, 1], ["blur(0px)", "blur(8px)"]);

  const Component = as as any;

  if (reduce) return <Component id={id} className={className}>{children}</Component>;

  return (
    <Component id={id} ref={ref} className="relative overflow-hidden bg-black">
      <motion.div style={{ y, opacity, scale, filter: blur }} className={`w-full ${className || ""}`}>
        {children}
      </motion.div>
    </Component>
  );
}
