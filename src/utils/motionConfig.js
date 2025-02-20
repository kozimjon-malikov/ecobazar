export const containerMotion = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.15,
            ease: "linear",
            duration: 0.6,
        },
    },
};

export const itemMotion = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.2, ease: "linear" },
    },
};
