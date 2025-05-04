import { useMemo, useState } from 'react';
import { COUNTRIES } from '../constants/countries';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';

type CountryCode = keyof typeof COUNTRIES;

const WorldFlags = () => {
  const keyList = useMemo(() => Object.keys(COUNTRIES) as CountryCode[], []);
  const [mode, setMode] = useState<'question' | 'answer' | 'none'>('none');
  const [key, setKey] = useState<CountryCode>(keyList[0]);

  const changeKey = () => {
    setMode('question');

    const newKey = Math.floor(Math.random() * keyList.length);
    setKey(keyList[newKey]);
  };

  const handleStart = () => {
    changeKey();
  };

  const handleClick = () => {
    if (mode === 'none') {
      return;
    }

    if (mode === 'question') {
      setMode('answer');
      const utterance = new SpeechSynthesisUtterance(`${COUNTRIES[key].name} ${COUNTRIES[key].capital}`);
      speechSynthesis.speak(utterance);
    }

    if (mode === 'answer') {
      changeKey();
    }
  };
  return (
    <div onClick={handleClick} className="flex flex-col items-center h-full gap-6">
      <div className="flex h-[300px] md:h-[500px] w-full flex-row items-center justify-center px-10">
        {mode === 'none' ? (
          <img
            src="/world.png"
            alt="world"
          />
        ) : (
          <motion.img
            key={key}
            src={COUNTRIES[key].flag}
            width="640"
            alt={key}
            className="border border-solid border-4 border-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </div>
      {mode === 'none' && (
        <Button size="lg" color="primary" onPress={handleStart}>
          START
        </Button>
      )}
      {mode === 'answer' && (
        <div className="flex flex-col items-center">
          <p className="text-[50px] md:text-[80px] font-bold text-[#fff]">{COUNTRIES[key].name}</p>
          <p className="text-[30px] md:text-[60px] text-[#fff]">{COUNTRIES[key].capital}</p>
        </div>
      )}
    </div>
  );
};
export default WorldFlags;
