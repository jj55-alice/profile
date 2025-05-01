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
        const nextFirst = second === 9 ? first === 9 ? 2 : first + 1 : first;
        const nextSecond = second === 9 ? 1 : second + 1;
        setFirst(nextFirst);
        setSecond(nextSecond);
        setMode('question');
    }

  }
  return (
    <div className="w-screen h-screen bg-[#1a1a1a] flex items-center justify-center">
      <div className="text-white text-[256px] font-bold" onClick={handleClick} onTouchEnd={handleClick}>
        {mode === 'question' ? `${first} X ${second}` : `${first * second}`}
      </div>
    </div>
  )
}

export default TimesTable;