import { useState, useEffect } from 'react';

export function useHideOnScroll(threshold = 10) {
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        let lastY = window.scrollY

        const onScroll = () => {
            const currentY = window.scrollY
            if (Math.abs(currentY - lastY) < threshold) return // ignore tiny movements
            setHidden(currentY > lastY && currentY > 80)       // down = hide, up = show
            lastY = currentY
        }

        window.addEventListener('scroll', onScroll, { passive: true})
        return () => window.removeEventListener('scroll', onScroll)
    }, [threshold])

    return hidden
}
