export const initialTransactions = [
  { id: 1, date: '2026-02-06 09:15', employee: 'Jean Martin', items: 3, total: 24.50, payment: 'Carte' },
  { id: 2, date: '2026-02-06 09:22', employee: 'Sophie Petit', items: 2, total: 15.80, payment: 'Espèces' },
  { id: 3, date: '2026-02-06 09:35', employee: 'Jean Martin', items: 5, total: 42.30, payment: 'Carte' },
  { id: 4, date: '2026-02-06 10:12', employee: 'Marie Dubois', items: 1, total: 4.50, payment: 'Espèces' },
  { id: 5, date: '2026-02-06 10:28', employee: 'Sophie Petit', items: 4, total: 38.90, payment: 'Carte' },
];

export const initialInventory = [
  { id: 1, name: 'Café en grains', category: 'Boissons', stock: 45, unit: 'kg', minStock: 20, price: 18.50, supplier: 'Café Premium' },
  { id: 2, name: 'Lait entier', category: 'Produits laitiers', stock: 28, unit: 'L', minStock: 30, price: 1.20, supplier: 'Laiterie Bio' },
  { id: 3, name: 'Croissants', category: 'Pâtisserie', stock: 120, unit: 'pcs', minStock: 50, price: 0.85, supplier: 'Boulangerie Artisanale' },
  { id: 4, name: 'Sucre', category: 'Ingrédients', stock: 75, unit: 'kg', minStock: 25, price: 2.30, supplier: 'Distributeur Alimentaire' },
  { id: 5, name: 'Thé assortiment', category: 'Boissons', stock: 180, unit: 'sachets', minStock: 100, price: 0.15, supplier: 'Thés du Monde' },
  { id: 6, name: 'Sirops variés', category: 'Boissons', stock: 32, unit: 'L', minStock: 15, price: 8.90, supplier: 'Monin' },
  { id: 7, name: 'Pain sandwich', category: 'Boulangerie', stock: 15, unit: 'pcs', minStock: 20, price: 3.20, supplier: 'Boulangerie Artisanale' },
  { id: 8, name: 'Fromage', category: 'Produits laitiers', stock: 8, unit: 'kg', minStock: 10, price: 12.50, supplier: 'Fromagerie locale' },
];

export const initialEmployees = [
  { id: 1, name: 'Jean Martin', role: 'Serveur', shift: 'Matin', status: 'active', sales: 186.40 },
  { id: 2, name: 'Sophie Petit', role: 'Serveuse', shift: 'Matin', status: 'active', sales: 254.70 },
  { id: 3, name: 'Marie Dubois', role: 'Gérante', shift: 'Journée', status: 'active', sales: 98.30 },
  { id: 4, name: 'Pierre Durand', role: 'Barista', shift: 'Soir', status: 'offline', sales: 0 },
];

export const menuItems = [
  { id: 1, name: 'Espresso', category: 'Café', price: 2.50 },
  { id: 2, name: 'Cappuccino', category: 'Café', price: 3.80 },
  { id: 3, name: 'Latte', category: 'Café', price: 4.20 },
  { id: 4, name: 'Croissant', category: 'Pâtisserie', price: 2.50 },
  { id: 5, name: 'Pain au chocolat', category: 'Pâtisserie', price: 2.80 },
  { id: 6, name: 'Sandwich jambon', category: 'Restauration', price: 6.50 },
  { id: 7, name: 'Salade César', category: 'Restauration', price: 9.90 },
  { id: 8, name: 'Thé vert', category: 'Thé', price: 3.20 },
  { id: 9, name: 'Jus d\'orange', category: 'Boissons fraîches', price: 3.50 },
  { id: 10, name: 'Cookie maison', category: 'Pâtisserie', price: 2.20 },
];
