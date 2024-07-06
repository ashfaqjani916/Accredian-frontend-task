

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

const ProgramTable = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 rounded-xl">
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-xl border-r border-gray-300">Programs</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300">Referrer Bonus</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-xl">Referee Bonus</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {programs.map((program, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">{program.name}</td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">₹ {program.referrerBonus.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">₹ {program.refereeBonus.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-blue-200">
            <tr>
              <td className="px-6 py-3 rounded-bl-xl border-r border-gray-300"></td>
              <td className="px-6 py-3 border-r border-gray-300"></td>
              <td className="px-6 py-3 rounded-br-xl"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

  );
};

export default ProgramTable;
