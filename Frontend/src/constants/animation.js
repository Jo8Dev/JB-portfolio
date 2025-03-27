// Box shadows
export const SHADOWS = {
    NONE: "none",
    OUTSET: "4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff",
    INSET: "inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff",
    INSET_DARKER: "inset 2px 5px 10px rgba(0, 0, 0, 0.3)",
    HOVER: "6px 6px 14px #c5c5c5, -6px -6px 14px #ffffff"
}

// États d'animation
export const CARD_ANIMATIONS = {
    initial: {
        opacity: 0,
        rotateY: -180,
        boxShadow: SHADOWS.NONE
    },
    whileInView: {
        opacity: 1,
        rotateY: 0,
        boxShadow: SHADOWS.OUTSET
    },
    hover: {
        scale: 1.05,
        boxShadow: SHADOWS.HOVER
    }
}

// Transitions
export const TRANSITIONS = {
    fast: { duration: 0.1, ease: "cubic-bezier(1,-0.01,.25,1.95)" },
    default: { duration: 0.3, ease: "cubic-bezier(1,-0.01,.25,1.95)" }
}