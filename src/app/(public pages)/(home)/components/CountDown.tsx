import { useEffect, useState } from "react";

type CountdownProps = {
    targetDate?: string; // e.g. "2025-12-31T23:59:59"
};

export default function Countdown({ }: CountdownProps) {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 6);

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex items-center justify-center gap-2 flex-wrap mt-5 lg:mt-10">
            <div className="bg-white p-2 cd_rounded flex flex-col items-center min-w-10">
                <span className="cd_fs-lg font-bold leading-[100%]">{timeLeft.days}</span>
                <span className="cd_fs-xs">Days</span>
            </div>
            <div className="bg-white p-2 cd_rounded flex flex-col items-center min-w-10">
                <span className="cd_fs-lg font-bold leading-[100%]">{timeLeft.hours}</span>
                <span className="cd_fs-xs">Hour</span>
            </div>
            <div className="bg-white p-2 cd_rounded flex flex-col items-center min-w-10">
                <span className="cd_fs-lg font-bold leading-[100%]">{timeLeft.minutes}</span>
                <span className="cd_fs-xs">Min</span>
            </div>

            <div className="bg-white p-2 cd_rounded flex flex-col items-center min-w-10">
                <span className="cd_fs-lg font-bold leading-[100%]">{timeLeft.seconds}</span>
                <span className="cd_fs-xs">Sec</span>
            </div>
        </div>
    );
}