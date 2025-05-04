import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const Clock: React.FC = () => {
  const [mode, setMode] = useState<'question' | 'answer' | 'none'>('none');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const { hourDegrees, minuteDegrees, secondDegrees } = useMemo(() => {
    return {
      hourDegrees: (hours % 12) * 30 + minutes * 0.5,
      minuteDegrees: minutes * 6,
      secondDegrees: seconds * 6,
    };
  }, [hours, minutes, seconds]);

  const changeTime = () => {
    setMode('question');

    const newHours = Math.floor(Math.random() * 12) + 1;
    const newMinutes = Math.floor(Math.random() * 60);
    const newSeconds = Math.floor(Math.random() * 60);

    setHours(newHours);
    setMinutes(newMinutes);
    setSeconds(newSeconds);
  };

  const handleStart = () => {
    changeTime();
  };

  const handleClick = () => {
    if (mode === 'none') {
      return;
    }

    if (mode === 'question') {
      setMode('answer');
      const utterance = new SpeechSynthesisUtterance(`${hours}시 ${minutes}분 ${seconds}초`);
      speechSynthesis.speak(utterance);
    }

    if (mode === 'answer') {
      changeTime();
    }
  };

  return (
    <div onClick={handleClick} className="flex flex-col items-center gap-10 py-10 h-full">
      <div className="relative mx-auto h-[600px] w-[600px] rounded-full border-[28px] border-[#333] bg-[#ececec] shadow-[0_2vw_4vw_-1vw_rgba(0,0,0,0.8)]">
        <div className="absolute inset-0 z-[10] m-auto h-[28px] w-[28px] rounded-full bg-[#ccc] shadow-[0_2px_4px_-1px_black]"></div>
        <div>
          <motion.div
            className="absolute left-1/2 top-[158px] z-[5] -ml-[4px] h-[130px] w-[8px] rounded-t-full bg-[#b32626]"
            style={{ transformOrigin: '50% 144px' }}
            animate={{ rotate: hourDegrees }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          ></motion.div>
          <motion.div
            className="absolute left-1/2 top-[92px] z-[6] -ml-[4px] h-[200px] w-[8px] rounded-t-full bg-[#2674b3]"
            style={{ transformOrigin: '50% 210px' }}
            animate={{ rotate: minuteDegrees }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          ></motion.div>
          <motion.div
            className="absolute left-1/2 top-[52px] z-[7] -ml-[2px] h-[240px] w-[4px] rounded-t-full bg-[#777]"
            style={{ transformOrigin: '50% 250px' }}
            animate={{ rotate: secondDegrees }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          ></motion.div>
        </div>
        <div>
          <span className="absolute left-1/2 top-[20px] z-[4] inline-block -translate-x-1/2 text-[44px] font-bold text-[#333]">
            12
          </span>
          <span className="absolute right-[165px] top-[55px] z-[4] inline-block text-[44px] font-bold text-[#333]">
            1
          </span>
          <span className="absolute right-[75px] top-[145px] z-[4] inline-block text-[44px] font-bold text-[#333]">
            2
          </span>
          <span className="absolute right-[40px] top-1/2 z-[4] inline-block -translate-y-1/2 text-[44px] font-bold text-[#333]">
            3
          </span>
          <span className="absolute bottom-[145px] right-[75px] z-[4] inline-block text-[44px] font-bold text-[#333]">
            4
          </span>
          <span className="absolute bottom-[55px] right-[165px] z-[4] inline-block text-[44px] font-bold text-[#333]">
            5
          </span>
          <span className="absolute bottom-[20px] left-1/2 z-[4] inline-block -translate-x-1/2 text-[44px] font-bold text-[#333]">
            6
          </span>
          <span className="absolute bottom-[55px] left-[165px] z-[4] inline-block text-[44px] font-bold text-[#333]">
            7
          </span>
          <span className="absolute bottom-[145px] left-[75px] z-[4] inline-block text-[44px] font-bold text-[#333]">
            8
          </span>
          <span className="absolute left-[40px] top-1/2 z-[4] inline-block -translate-y-1/2 text-[44px] font-bold text-[#333]">
            9
          </span>
          <span className="absolute left-[75px] top-[145px] z-[4] inline-block text-[44px] font-bold text-[#333]">
            10
          </span>
          <span className="absolute left-[165px] top-[55px] z-[4] inline-block text-[44px] font-bold text-[#333]">
            11
          </span>
        </div>
        <div
          className="absolute left-1/2 z-[2] -ml-[2px] h-[30px] w-[4px] bg-[#666]"
          style={{ transformOrigin: '50% 300px' }}
        >
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className={`absolute left-1/2 -ml-[2px] h-[30px] w-[4px] bg-[#666] ${
                i % 5 === 0 ? 'h-[50px] w-[8px]' : ''
              }`}
              style={{ transform: `rotate(${i * 6}deg)`, transformOrigin: '50% 300px' }}
            ></div>
          ))}
        </div>
      </div>
      {mode === 'none' && (
        <Button size="lg" color="primary" onPress={handleStart}>
          START
        </Button>
      )}
      {mode === 'answer' && (
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-row items-center">
            <p className="text-[120px] font-bold text-[#b32626]">{hours}</p>
            <p className="text-[120px] text-[#999]">시</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-[120px] font-bold text-[#2674b3]">{minutes}</p>
            <p className="text-[120px] text-[#999]">분</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-[120px] font-bold text-[#ddd]">{seconds}</p>
            <p className="text-[120px] text-[#999]">초</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clock;
