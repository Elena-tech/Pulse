# Pulse Lite Dashboard

A **React + TypeScript** application demonstrating multiple dashboards with real-time data from different APIs, including:

- **Crypto Dashboard** (CoinGecko API)  
- **Stock Dashboard** (Alpha Vantage Weekly Data)  

The project also showcases protected routes, a theme toggle (light/dark), data visualization with Recharts, and more.

---

## Features

1. **Multiple Dashboards**  
   - **Crypto Dashboard**: Fetches live cryptocurrency data from CoinGecko, displays it on a Recharts chart, and includes a filter for minimum price.  
   - **Stock Dashboard**: Fetches weekly stock closing prices from Alpha Vantage, displaying a line chart for MSFT (or any stock symbol you configure).

2. **Theme Toggle**  
   - A global **ThemeContext** provides a `light` and `dark` theme.  
   - The entire application switches themes via a toggle button in the header.

3. **Protected Routes**  
   - **AuthContext** manages a simple authentication state (`isAuthenticated`).  
   - The **ProtectedRoute** component redirects users to `/login` if they attempt to access certain routes (e.g., Settings) while not authenticated.

4. **Data Visualization**  
   - Uses **Recharts** to display line charts with interactive tooltips and legends.  
   - A **FilterPanel** allows users to filter chart data by a numeric threshold (e.g., minimum price).

5. **Responsive UI & Routing**  
   - **React Router v6** for navigation between dashboards, settings, and login.  
   - A `Header` component with navigation links, a logout button, and the theme toggle.

---

## Getting Started

### Prerequisites

- **Node.js** (version 14+ recommended)
- **npm** or **yarn**

### Installation

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/pulse-lite-dashboard.git
   cd pulse-lite-dashboard
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. **Start the Development Server**  
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
pulse-lite-dashboard/
├── public/
│   └── index.html
└── src/
    ├── components/
    │   ├── ChartComponent.tsx
    │   ├── Dashboard.tsx          // Crypto Dashboard
    │   ├── DogDashboard.tsx       // Example dog dashboard (if used)
    │   ├── FilterPanel.tsx
    │   ├── Header.tsx
    │   ├── Login.tsx
    │   ├── ProtectedRoute.tsx
    │   ├── Settings.tsx
    │   ├── StockDashboard.tsx     // Weekly Stock Dashboard
    │   └── DetailModal.tsx
    ├── context/
    │   ├── AuthContext.tsx
    │   └── ThemeContext.tsx
    ├── services/
    │   └── api.ts                 // Functions for CoinGecko, Alpha Vantage, etc.
    ├── styles/
    │   ├── Dashboard.css
    │   ├── Header.css
    │   ├── StockDashboard.css
    │   ├── index.css              // Global & theme-related styles
    │   └── ...
    ├── App.tsx
    ├── index.tsx
    └── ...
```

**Key Files:**

- **App.tsx**: Defines routes (Crypto, Stocks, Settings, Login). Wraps content with a theme container.  
- **AuthContext.tsx**: Manages simple authentication state and provides login/logout methods.  
- **ThemeContext.tsx**: Manages `light`/`dark` theme.  
- **api.ts**: Contains API calls for CoinGecko (crypto data) and Alpha Vantage (stock data).  
- **Header.tsx**: Main navigation, including links to each dashboard and the theme toggle.

---

## Usage

- **Crypto Dashboard** (`/`):  
  - Displays live coin data (e.g., Bitcoin, Ethereum) from CoinGecko.  
  - Filters out coins below a user-specified price.  
  - Clicking a data point shows a detail modal.

- **Stock Dashboard** (`/stocks`):  
  - Fetches weekly closing prices for MSFT (or another symbol) from Alpha Vantage.  
  - Displays them on a Recharts line chart.  
  - You can modify `fetchWeeklyStockData` to use your own API key or a different function (e.g., daily, intraday).

- **Settings** (`/settings`):  
  - Protected route. Only accessible if logged in.  
  - Showcases theme toggling or other user preferences.

- **Login** (`/login`):  
  - A simple login form that sets `isAuthenticated` in **AuthContext**.

- **Toggle Theme**:  
  - Button in the header switches between `light` and `dark` modes globally.

---

## Notes & Future Improvements

- **Alpha Vantage API Key**:  
  The `demo` API key is limited and may show stale or minimal data. For more reliable results, sign up for a free key at [Alpha Vantage](https://www.alphavantage.co/) and replace `demo` in `api.ts`.

- **Log Scale for Crypto**:  
  Because Bitcoin’s price is much higher than other coins, consider using a log scale on the Y-axis to avoid flattening smaller coins.

- **Responsive Design**:  
  Recharts charts have fixed widths in the current setup. For better responsiveness, use container-based widths or a responsive chart component.

- **Advanced Auth**:  
  Currently, authentication is just a simple boolean. In a real-world scenario, you might integrate a JWT-based auth or OAuth flow.

---

## Contributing

Feel free to open pull requests or issues to suggest enhancements, fix bugs, or add new features. Any contribution is appreciated!

---

**Thank you for checking out Pulse Lite Dashboard!** If you have any questions or suggestions, please open an issue or reach out. Enjoy exploring crypto and stock data in one place!
