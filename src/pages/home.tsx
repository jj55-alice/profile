import { useState } from 'react'

const App = () => {
  const [command, setCommand] = useState('')
  const [output, setOutput] = useState<string[]>([])

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setOutput(prev => [...prev, `$ ${command}`])
      setCommand('')
    }
  }

  return (
    <div className="w-screen h-screen bg-[#1a1a1a] flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSIjMjIyIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0iIzIyMiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      <div className="w-[800px] h-[600px] bg-gray-900 text-gray-100 font-mono flex flex-col shadow-2xl rounded-lg relative z-10">
        <div className="bg-gray-800 p-2 flex items-center rounded-t-lg">
          <div className="flex gap-2 mr-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <div className="text-gray-400 text-sm">Terminal</div>
        </div>
        <div className="p-4 flex-grow overflow-y-auto">
          <div className="space-y-2">
            {output.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          <div className="flex items-center mt-2">
            <span className="text-cyan-400 mr-2">$</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none flex-grow text-gray-100"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
