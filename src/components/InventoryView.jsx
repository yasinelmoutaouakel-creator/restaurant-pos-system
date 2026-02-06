import React from 'react';
import { Plus, AlertTriangle, CheckCircle } from 'lucide-react';

const InventoryView = ({ inventory, setInventory }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-800">Gestion des stocks</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={20} />
          Nouvel article
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Article</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Catégorie</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Stock actuel</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Stock min</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Prix unitaire</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Fournisseur</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {inventory.map(item => {
              const isLowStock = item.stock < item.minStock;
              return (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{item.category}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`font-bold ${isLowStock ? 'text-orange-600' : 'text-slate-900'}`}>
                      {item.stock} {item.unit}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{item.minStock} {item.unit}</td>
                  <td className="px-6 py-4 text-sm text-slate-900">{item.price.toFixed(2)}€</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{item.supplier}</td>
                  <td className="px-6 py-4 text-sm">
                    {isLowStock ? (
                      <span className="flex items-center gap-1 text-orange-600 font-medium">
                        <AlertTriangle size={16} />
                        Stock bas
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-green-600 font-medium">
                        <CheckCircle size={16} />
                        OK
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryView;
