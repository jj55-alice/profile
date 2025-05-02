import { Button } from "@heroui/react";
import { useState } from "react";

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
        const nextFirst = second === 9 ? first === 12 ? 2 : first + 1 : first;
        const nextSecond = second === 9 ? 1 : second + 1;
        setFirst(nextFirst);
        setSecond(nextSecond);
        setMode('question');
    }
  }

  const handleClickFirst = (first: number) => () => {
    setFirst(first);
    setSecond(1);
    setMode('question');
  }

  return (
    <div className="flex flex-col w-screen h-screen bg-[#1a1a1a]">
      <div onClick={handleClick} onTouchEnd={handleClick} className="flex flex-1 items-center justify-center text-white text-[96px] sm:text-[128px] md:text-[192px] lg:text-[256px] font-bold" >
        {mode === 'question' ? `${first} X ${second}` : `${first * second}`}
      </div>
      <div className="flex flex-row flex-wrap h-fit py-[10px] gap-1 justify-center align-center">
        {[...new Array(11)].map((_, index) => (
          <Button 
            key={index} 
            onPress={handleClickFirst(index + 2)} 
            className="h-[50px]"
          >
            {index + 2}단
          </Button>
        ))}
      </div>
    </div>
  )
}

export default TimesTable;