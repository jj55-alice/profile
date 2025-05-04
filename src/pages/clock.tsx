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
      <div className="relative mx-auto h-[400px] w-[400px] rounded-full border-[20px] border-[#333] bg-[#ececec] shadow-[0_2vw_4vw_-1vw_rgba(0,0,0,0.8)]">
        <div className="absolute inset-0 z-[10] m-auto h-[20px] w-[20px] rounded-full bg-[#ccc] shadow-[0_2px_4px_-1px_black]"></div>
        <div>
          <motion.div
            className="absolute left-1/2 top-[105px] z-[5] -ml-[3px] h-[87px] w-[6px] rounded-t-full bg-[#b32626]"
            style={{ transformOrigin: '50% 96px' }}
            animate={{ rotate: hourDegrees }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          ></motion.div>
          <motion.div
            className="absolute left-1/2 top-[61px] z-[6] -ml-[3px] h-[133px] w-[6px] rounded-t-full bg-[#2674b3]"
            style={{ transformOrigin: '50% 140px' }}
            animate={{ rotate: minuteDegrees }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          ></motion.div>
          <motion.div
            className="absolute left-1/2 top-[35px] z-[7] -ml-[1.5px] h-[160px] w-[3px] rounded-t-full bg-[#777]"
            style={{ transformOrigin: '50% 167px' }}
            animate={{ rotate: secondDegrees }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          ></motion.div>
        </div>
        <div>
          <span className="absolute left-1/2 top-[13px] z-[4] inline-block -translate-x-1/2 text-[30px] font-bold text-[#333]">
            12
          </span>
          <span className="absolute right-[110px] top-[37px] z-[4] inline-block text-[30px] font-bold text-[#333]">
            1
          </span>
          <span className="absolute right-[50px] top-[97px] z-[4] inline-block text-[30px] font-bold text-[#333]">
            2
          </span>
          <span className="absolute right-[27px] top-1/2 z-[4] inline-block -translate-y-1/2 text-[30px] font-bold text-[#333]">
            3
          </span>
          <span className="absolute bottom-[97px] right-[50px] z-[4] inline-block text-[30px] font-bold text-[#333]">
            4
          </span>
          <span className="absolute bottom-[37px] right-[110px] z-[4] inline-block text-[30px] font-bold text-[#333]">
            5
          </span>
          <span className="absolute bottom-[13px] left-1/2 z-[4] inline-block -translate-x-1/2 text-[30px] font-bold text-[#333]">
            6
          </span>
          <span className="absolute bottom-[37px] left-[110px] z-[4] inline-block text-[30px] font-bold text-[#333]">
            7
          </span>
          <span className="absolute bottom-[97px] left-[50px] z-[4] inline-block text-[30px] font-bold text-[#333]">
            8
          </span>
          <span className="absolute left-[27px] top-1/2 z-[4] inline-block -translate-y-1/2 text-[30px] font-bold text-[#333]">
            9
          </span>
          <span className="absolute left-[50px] top-[97px] z-[4] inline-block text-[30px] font-bold text-[#333]">
            10
          </span>
          <span className="absolute left-[110px] top-[37px] z-[4] inline-block text-[30px] font-bold text-[#333]">
            11
          </span>
        </div>
        <div
          className="absolute left-1/2 z-[2] -ml-[1.5px] h-[20px] w-[3px] bg-[#666]"
          style={{ transformOrigin: '50% 200px' }}
        >
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className={`absolute left-1/2 -ml-[1.5px] h-[20px] w-[3px] bg-[#666] ${
                i % 5 === 0 ? 'h-[33px] w-[6px]' : ''
              }`}
              style={{ transform: `rotate(${i * 6}deg)`, transformOrigin: '50% 200px' }}
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
            <p className="text-[100px] font-bold text-[#b32626]">{hours}</p>
            <p className="text-[100px] text-[#999]">시</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-[100px] font-bold text-[#2674b3]">{minutes}</p>
            <p className="text-[100px] text-[#999]">분</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-[100px] font-bold text-[#ddd]">{seconds}</p>
            <p className="text-[100px] text-[#999]">초</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clock;
