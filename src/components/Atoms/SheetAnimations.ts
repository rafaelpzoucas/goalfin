export const slideSheetRightToLeft = {
    hidden: {
        x: '100vw'
    },

    visible: {
        x: 0,
    },
    exit: {
        x: '100vw',
    }
}

export const slideSheetLeftToRight = {
    hidden: {
        x: '-100vw'
    },

    visible: {
        x: 0,
    },
    exit: {
        x: '-100vw',
    }
}

export const slideSheetBottomToTop = {
    hidden: {
        y: '100vh'
    },

    visible: {
        y: 0,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    },
    exit: {
        y: '100vh',
    }
}

export const slideSheetTopToBottom = {
    hidden: {
        y: '-100vh'
    },

    visible: {
        y: 0,
    },
    exit: {
        y: '-100vw',
    }
}