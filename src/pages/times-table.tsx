import { Button } from '@heroui/react';
import { useState } from 'react';

const TimesTable = () => {
  const [first, setFirst] = useState(2);
  const [second, setSecond] = useState(1);
  const [mode, setMode] = useState<'question' | 'answer'>('question');

  const handleClick = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (mode === 'question') {
      setMode('answer');
    } else {
      const nextFirst = second === 9 ? (first === 12 ? 2 : first + 1) : first;
      const nextSecond = second === 9 ? 1 : second + 1;
      setFirst(nextFirst);
      setSecond(nextSecond);
      setMode('question');
    }
  };

  const handleClickFirst = (first: number) => () => {
    setFirst(first);
    setSecond(1);
    setMode('question');
  };

  return (
    <div className="flex h-full w-screen flex-col bg-[#1a1a1a]">
      <div
        onClick={handleClick}
        onTouchEnd={handleClick}
        className="flex flex-1 items-center justify-center text-[96px] font-bold text-white sm:text-[128px] md:text-[192px] lg:text-[256px]"
      >
        {mode === 'question' ? `${first} X ${second}` : `${first * second}`}
      </div>
      <div className="align-center flex h-fit flex-row flex-wrap justify-center gap-1 py-[10px]">
        {[...new Array(11)].map((_, index) => (
          <Button key={index} onPress={handleClickFirst(index + 2)} className="h-[50px]">
            {index + 2}단
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TimesTable;
