import React from 'react';
import { Plus } from 'lucide-react';

const EmployeesView = ({ employees }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-800">Gestion des employés</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={20} />
          Nouvel employé
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {employees.map(emp => (
          <div key={emp.id} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {emp.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-800">{emp.name}</div>
                <div className="text-sm text-slate-500">{emp.role}</div>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Shift:</span>
                <span className="font-medium">{emp.shift}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Statut:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  emp.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-slate-100 text-slate-800'
                }`}>
                  {emp.status === 'active' ? 'En service' : 'Hors service'}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="text-sm text-slate-600 mb-1">Ventes aujourd'hui</div>
              <div className="text-2xl font-bold text-green-600">{emp.sales.toFixed(2)}€</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesView;
