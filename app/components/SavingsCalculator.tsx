'use client';

import { useState } from 'react';
import { Calculator, DollarSign, Calendar } from 'lucide-react';

export function SavingsCalculator() {
  const [weeklyHours, setWeeklyHours] = useState<string>('12');
  const [hourlyRate, setHourlyRate] = useState<string>('25');
  
  // Convert to numbers for calculation
  const weeklyHoursNum = parseFloat(weeklyHours) || 0;
  const hourlyRateNum = parseFloat(hourlyRate) || 0;
  
  // Calculate annual waste: (Weekly Hours * 52) * Rate
  const annualWaste = weeklyHoursNum * 52 * hourlyRateNum;
  const formattedWaste = annualWaste.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-8 h-8 text-cyan-400" />
        <h3 className="text-3xl font-bold text-white">The Savings Calculator</h3>
      </div>
      
      <p className="text-gray-400 mb-8 text-lg">
        Calculate how much your business is losing to manual processes
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Weekly Hours Input */}
        <div>
          <label htmlFor="weekly-hours" className="block text-white font-semibold mb-3">
            Weekly Manual Hours
          </label>
          <div className="relative">
            <input
              id="weekly-hours"
              type="number"
              min="0"
              step="0.5"
              value={weeklyHours}
              onChange={(e) => {
                const value = e.target.value;
                // Allow empty string, otherwise parse and remove leading zeros
                if (value === '') {
                  setWeeklyHours('');
                } else {
                  const num = parseFloat(value);
                  setWeeklyHours(isNaN(num) ? '' : num.toString());
                }
              }}
              className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white text-xl font-semibold focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              placeholder="12"
            />
          </div>
        </div>

        {/* Hourly Rate Input */}
        <div>
          <label htmlFor="hourly-rate" className="block text-white font-semibold mb-3">
            Hourly Employee Rate ($)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="hourly-rate"
              type="number"
              min="0"
              step="1"
              value={hourlyRate}
              onChange={(e) => {
                const value = e.target.value;
                // Allow empty string, otherwise parse and remove leading zeros
                if (value === '') {
                  setHourlyRate('');
                } else {
                  const num = parseFloat(value);
                  setHourlyRate(isNaN(num) ? '' : num.toString());
                }
              }}
              className="w-full pl-12 pr-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white text-xl font-semibold focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              placeholder="25"
            />
          </div>
        </div>
      </div>

      {/* Result Display */}
      <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border-2 border-red-500/60 rounded-xl p-6 md:p-8 mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <p className="text-gray-300 text-sm md:text-base mb-2 uppercase tracking-wider">
              Potential Annual Recovery
            </p>
            <p className="text-4xl md:text-5xl font-bold text-red-300">
              {formattedWaste}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Based on {weeklyHoursNum || 0} hours/week × 52 weeks × ${hourlyRateNum || 0}/hour
            </p>
          </div>
          
          <a
            href="https://calendly.com/victoriafranciss/automation-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transform hover:scale-105 whitespace-nowrap"
          >
            <Calendar className="w-5 h-5" />
            Book My Free Audit
          </a>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-500 text-sm">
          💡 <span className="text-gray-400">This is money you could be saving with automation</span>
        </p>
      </div>
    </div>
  );
}
