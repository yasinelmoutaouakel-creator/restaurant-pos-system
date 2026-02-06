import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  TrendingUp, 
  DollarSign,
  AlertTriangle,
  Plus,
  Minus,
  Trash2,
  LogOut,
  Menu as MenuIcon,
  X,
  Calendar,
  Download,
  BarChart3,
  CheckCircle
} from 'lucide-react';

// Composants
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import POSView from './components/POSView';
import TransactionsView from './components/TransactionsView';
import InventoryView from './components/InventoryView';
import EmployeesView from './components/EmployeesView';
import ReportsView from './components/ReportsView';

// Données initiales
import { initialTransactions, initialInventory, initialEmployees, menuItems } from './data/initialData';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [currentUser, setCurrentUser] = useState({ name: 'Marie Dubois', role: 'Gérante' });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // États pour la gestion des données
  const [transactions, setTransactions] = useState(initialTransactions);
  const [inventory, setInventory] = useState(initialInventory);
  const [employees, setEmployees] = useState(initialEmployees);
  const [currentOrder, setCurrentOrder] = useState([]);

  // Calculs pour le dashboard
  const todaySales = transactions.reduce((sum, t) => sum + t.total, 0);
  const todayTransactions = transactions.length;
  const averageTicket = todaySales / todayTransactions;
  const lowStockItems = inventory.filter(item => item.stock < item.minStock);

  // Fonction pour ajouter un article à la commande
  const addToOrder = (item) => {
    const existingItem = currentOrder.find(i => i.id === item.id);
    if (existingItem) {
      setCurrentOrder(currentOrder.map(i => 
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCurrentOrder([...currentOrder, { ...item, quantity: 1 }]);
    }
  };

  // Fonction pour retirer un article de la commande
  const removeFromOrder = (itemId) => {
    setCurrentOrder(currentOrder.filter(i => i.id !== itemId));
  };

  // Fonction pour modifier la quantité
  const updateQuantity = (itemId, change) => {
    setCurrentOrder(currentOrder.map(i => {
      if (i.id === itemId) {
        const newQuantity = i.quantity + change;
        return newQuantity > 0 ? { ...i, quantity: newQuantity } : i;
      }
      return i;
    }).filter(i => i.quantity > 0));
  };

  // Fonction pour valider la commande
  const completeOrder = (paymentMethod) => {
    if (currentOrder.length === 0) return;
    
    const total = currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const newTransaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().slice(0, 16).replace('T', ' '),
      employee: currentUser.name,
      items: currentOrder.reduce((sum, item) => sum + item.quantity, 0),
      total: total,
      payment: paymentMethod
    };
    
    setTransactions([newTransaction, ...transactions]);
    setCurrentOrder([]);
    alert(`Commande validée: ${total.toFixed(2)}€`);
  };

  // Props à passer aux composants
  const dashboardProps = {
    todaySales,
    todayTransactions,
    averageTicket,
    lowStockItems,
    transactions,
    employees
  };

  const posProps = {
    menuItems,
    currentOrder,
    addToOrder,
    removeFromOrder,
    updateQuantity,
    completeOrder
  };

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar 
        currentView={currentView}
        setCurrentView={setCurrentView}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentUser={currentUser}
      />
      
      <div className="flex-1 overflow-auto">
        {currentView === 'dashboard' && <DashboardView {...dashboardProps} />}
        {currentView === 'pos' && <POSView {...posProps} />}
        {currentView === 'transactions' && <TransactionsView transactions={transactions} />}
        {currentView === 'inventory' && <InventoryView inventory={inventory} setInventory={setInventory} />}
        {currentView === 'employees' && <EmployeesView employees={employees} />}
        {currentView === 'reports' && <ReportsView />}
      </div>
    </div>
  );
}

export default App;
