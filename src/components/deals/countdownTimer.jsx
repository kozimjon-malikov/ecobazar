"use client"

import { useEffect, useState } from "react"
export function CountdownTimer({ endTime }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime()
            const distance = endTime.getTime() - now

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [endTime])

    return (
        <div className="flex gap-4 text-sm">
            <div className="text-center font-medium">
                <div className="rounded bg-white px-2 py-1 font-semibold">{timeLeft.days}</div>
                <div className="text-xs text-gray-500">DAYS</div>
            </div>
            <div className="text-center">
                <div className="rounded bg-white px-2 py-1 font-semibold">{timeLeft.hours}</div>
                <div className="text-xs text-gray-500">HOURS</div>
            </div>
            <div className="text-center">
                <div className="rounded bg-white px-2 py-1 font-semibold">{timeLeft.minutes}</div>
                <div className="text-xs text-gray-500">MINS</div>
            </div>
            <div className="text-center">
                <div className="rounded bg-white px-2 py-1 font-semibold">{timeLeft.seconds}</div>
                <div className="text-xs text-gray-500">SECS</div>
            </div>
        </div>
    )
}

