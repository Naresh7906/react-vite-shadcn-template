import "./App.css";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <h1>Vite + React</h1>
        <div className="card">
          <p>
            Edit <code>src/App.tsx</code> and save to begin
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
