# 🍽️ RestauPOS - Système de Gestion pour Restaurant et Café

Système complet de gestion pour cafés et restaurants incluant point de vente (POS), gestion des stocks, suivi des transactions et gestion des employés.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.0-38bdf8)

## ✨ Fonctionnalités

### 📊 Tableau de bord
- Vue d'ensemble des ventes du jour
- Statistiques en temps réel
- Alertes de stock bas
- Performances des employés
- Dernières transactions

### 🛒 Point de vente (POS)
- Interface tactile intuitive
- Ajout rapide d'articles
- Gestion du panier en temps réel
- Paiement espèces/carte
- Calcul automatique du total

### 💰 Gestion des transactions
- Historique complet des ventes
- Filtrage par date, employé, mode de paiement
- Export des données
- Suivi détaillé

### 📦 Gestion des stocks
- Inventaire en temps réel
- Alertes de stock minimum
- Gestion des fournisseurs
- Prix unitaires
- Indicateurs visuels de statut

### 👥 Gestion des employés
- Profils des employés
- Suivi des performances
- Ventes par employé
- Statut (en service / hors service)

### 📈 Rapports
- Génération de rapports personnalisés
- Statistiques par période
- Analyse des ventes
- Export des données

## 🚀 Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Télécharger et extraire le projet**
   ```bash
   # Extraire le fichier ZIP
   unzip restaurant-pos-system.zip
   cd restaurant-pos-system
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   L'application sera accessible à: http://localhost:3000
   ```

## 📁 Structure du projet

```
restaurant-pos-system/
├── public/                  # Fichiers statiques
├── src/
│   ├── components/         # Composants React
│   │   ├── Sidebar.jsx
│   │   ├── DashboardView.jsx
│   │   ├── POSView.jsx
│   │   ├── TransactionsView.jsx
│   │   ├── InventoryView.jsx
│   │   ├── EmployeesView.jsx
│   │   └── ReportsView.jsx
│   ├── data/              # Données initiales
│   │   └── initialData.js
│   ├── App.jsx            # Composant principal
│   ├── main.jsx           # Point d'entrée
│   └── index.css          # Styles globaux
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🛠️ Technologies utilisées

- **React 18.2** - Framework JavaScript
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **Lucide React** - Icônes modernes
- **JavaScript ES6+** - Langage de programmation

## 💻 Scripts disponibles

```bash
# Démarrer en mode développement
npm run dev

# Compiler pour la production
npm run build

# Prévisualiser la build de production
npm run preview

# Linter le code
npm run lint
```

## 🎨 Personnalisation

### Modifier les couleurs
Éditez `tailwind.config.js` pour personnaliser les couleurs:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Vos couleurs personnalisées
      },
    },
  },
}
```

### Ajouter des données
Modifiez `src/data/initialData.js` pour ajouter:
- Articles au menu
- Employés
- Produits en stock
- Transactions initiales

### Personnaliser les composants
Chaque vue est dans un composant séparé dans `src/components/` pour faciliter les modifications.

## 📱 Responsive Design

L'application est entièrement responsive et fonctionne sur:
- 💻 Desktop
- 📱 Tablettes
- 📱 Smartphones

## 🔒 Sécurité

Pour une utilisation en production, ajoutez:
- Authentification des utilisateurs
- Chiffrement des données sensibles
- Validation côté serveur
- Protection CSRF
- Limitation de débit (rate limiting)

## 🚀 Déploiement

### Build de production
```bash
npm run build
```

Les fichiers compilés seront dans le dossier `dist/` et peuvent être déployés sur:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Serveur web classique (Apache, Nginx)

## 📝 Fonctionnalités futures

- [ ] Authentification multi-utilisateurs
- [ ] Intégration paiement en ligne
- [ ] Application mobile native
- [ ] Gestion des réservations
- [ ] Programme de fidélité
- [ ] Analytics avancés
- [ ] API REST complète
- [ ] Mode hors ligne
- [ ] Impression des tickets
- [ ] Intégration comptable

## 🤝 Support

Pour toute question ou problème:
1. Consultez la documentation
2. Vérifiez les issues existantes
3. Créez une nouvelle issue si nécessaire

## 📄 Licence

MIT License - Libre d'utilisation pour projets personnels et commerciaux

## 👨‍💻 Développement

Développé avec ❤️ en utilisant les technologies les plus récentes pour garantir:
- ⚡ Performance optimale
- 🎨 Interface moderne et intuitive
- 📱 Compatibilité multi-plateforme
- 🔧 Code maintenable et extensible

---

**Bon développement ! 🚀**
