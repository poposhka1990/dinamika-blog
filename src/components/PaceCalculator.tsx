import { useState } from 'react';

export function PaceCalculator() {
  const [paceMinutes, setPaceMinutes] = useState('');
  const [paceSeconds, setPaceSeconds] = useState('');
  const [splits, setSplits] = useState<Record<string, string> | null>(null);

  const formatTime = (totalSeconds: number): string => {
    if (totalSeconds < 61) {
      return `${totalSeconds.toFixed(1)} сек`;
    }
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes} мин ${seconds.toFixed(0)} сек`;
  };

  const calculateSplits = () => {
    const totalSeconds = parseInt(paceMinutes) * 60 + parseInt(paceSeconds);
    const pacePerMeter = totalSeconds / 1000;
    
    setSplits({
      '100m': formatTime(pacePerMeter * 100),
      '200m': formatTime(pacePerMeter * 200),
      '400m': formatTime(pacePerMeter * 400),
      '800m': formatTime(pacePerMeter * 800),
      '1000m': formatTime(totalSeconds)
    });
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Счетчик темпа</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Введи темп, с которым планируешь бежать для рассчёта
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <input
            type="number"
            placeholder="Минуты"
            value={paceMinutes}
            onChange={(e) => setPaceMinutes(e.target.value)}
            className="p-2 border rounded dark:bg-gray-700 w-full sm:w-32"
          />
          <input
            type="number"
            placeholder="Секунды"
            value={paceSeconds}
            onChange={(e) => setPaceSeconds(e.target.value)}
            className="p-2 border rounded dark:bg-gray-700 w-full sm:w-32"
          />
        </div>
        <button
          onClick={calculateSplits}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          Рассчитать
        </button>
      </div>
      
      {splits && (
        <div className="space-y-2">
          {Object.entries(splits).map(([distance, time]) => (
            <div key={distance} className="flex justify-between">
              <span>{distance}:</span>
              <span>{time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}