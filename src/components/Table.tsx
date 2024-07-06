import React from 'react';

interface Program {
  name: string;
  referrerBonus: number;
  refereeBonus: number;
}

const programs: Program[] = [
  {
    name: 'Professional Certificate Program in Product Management',
    referrerBonus: 7000,
    refereeBonus: 9000,
  },
  {
    name: 'PG Certificate Program in Strategic Product Management',
    referrerBonus: 9000,
    refereeBonus: 11000,
  },
  {
    name: 'Executive Program in Data Driven Product Management',
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: 'Executive Program in Product Management and Digital Transformation',
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: 'Executive Program in Product Management',
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: 'Advanced Certification in Product Management',
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: 'Executive Program in Product Management and Project Management',
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
];

const ProgramTable: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border">
          <thead className="bg-blue-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Programs</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referrer Bonus</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referee Bonus</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {programs.map((program, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{program.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">₹ {program.referrerBonus.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">₹ {program.refereeBonus.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgramTable;
