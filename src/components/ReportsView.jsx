import React from 'react';
import { Download, BarChart3 } from 'lucide-react';

const ReportsView = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Rapports et statistiques</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Période</h3>
          <select className="w-full p-2 border border-slate-300 rounded-lg">
            <option>Aujourd'hui</option>
            <option>Cette semaine</option>
            <option>Ce mois</option>
            <option>Cette année</option>
          </select>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Type de rapport</h3>
          <select className="w-full p-2 border border-slate-300 rounded-lg">
            <option>Ventes</option>
            <option>Stocks</option>
            <option>Employés</option>
            <option>Produits</option>
          </select>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Action</h3>
          <button className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
            <Download size={20} />
            Générer rapport
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Résumé des ventes</h3>
        <div className="h-64 flex items-center justify-center text-slate-400">
          <div className="text-center">
            <BarChart3 size={64} className="opacity-50 mx-auto mb-4" />
            <p className="text-sm">Les graphiques seront affichés ici</p>
            <p className="text-xs mt-2">Intégration avec bibliothèque de charts recommandée</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsView;
