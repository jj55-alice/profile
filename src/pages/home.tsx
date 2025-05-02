import { useState } from 'react';

const App = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setOutput(prev => [...prev, `$ ${command}`]);
      setCommand('');
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#1a1a1a]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSIjMjIyIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0iIzIyMiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      <div className="relative z-10 flex h-[600px] w-[800px] flex-col rounded-lg bg-gray-900 font-mono text-gray-100 shadow-2xl">
        <div className="flex items-center rounded-t-lg bg-gray-800 p-2">
          <div className="mr-2 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>
          <div className="text-sm text-gray-400">Terminal</div>
        </div>
        <div className="flex-grow overflow-y-auto p-4">
          <div className="space-y-2">
            {output.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          <div className="mt-2 flex items-center">
            <span className="mr-2 text-cyan-400">$</span>
            <input
              type="text"
              value={command}
              onChange={e => setCommand(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-grow border-none bg-transparent text-gray-100 outline-none"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
