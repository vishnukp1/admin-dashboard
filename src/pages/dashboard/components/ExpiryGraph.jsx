import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ArrowUpRight } from 'lucide-react';
import { chartData } from '../../../data/sampleData';


const ExpiryGraph = () => {
  return (
    <div className="
      relative flex flex-col overflow-hidden bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm
      
      w-[22.06rem] h-[14.06rem] rounded-[10px] p-4 
      
      md:w-full md:h-[25rem] md:rounded-3xl md:p-6
      
      min-[2560px]:h-[33.44rem] min-[2560px]:rounded-[40px] min-[2560px]:p-8
    ">

      <div className="flex justify-between items-center mb-4 min-[2560px]:mb-6 z-10">
        <h2 className="
          font-semibold leading-none text-[#02024B]
          
          text-[1.375rem]
          
          md:text-2xl
          
          min-[2560px]:text-4xl
        ">
          Documents Expiring
        </h2>

        <button className="
          flex items-center justify-center rounded-full border border-gray-200 bg-white/50 hover:bg-white transition-colors
          
          w-8 h-8
          
          md:w-10 md:h-10
          
          min-[2560px]:w-12 min-[2560px]:h-12
        ">
          <ArrowUpRight className="
            text-gray-500
            w-4 h-4
            
            md:w-5 md:h-5
            
            min-[2560px]:w-5 min-[2560px]:h-5
          " />
        </button>
      </div>

      <div className="absolute left-4 right-4 border-t-2 border-dashed border-blue-300/50 z-0
        top-[5rem]
        
        md:top-32
        
        min-[2560px]:top-40 min-[2560px]:left-10 min-[2560px]:right-10
      "></div>

      <div className="flex-1 w-full min-h-0 z-10
        pt-4
        
        md:pt-8
        
        min-[2560px]:pt-10
      ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 500 }}
              dy={10}
              interval={0}
            />
            <Tooltip
              cursor={{ fill: '#f1f5f9', radius: 8 }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
            />
            <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={20} className="min-[2560px]:radius-[14px]">
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.name === 'Jun' ? '#bef264' : '#e2e8f0'}
                  className="transition-all duration-300 hover:opacity-80"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpiryGraph;