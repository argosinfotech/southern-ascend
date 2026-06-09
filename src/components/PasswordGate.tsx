import { useEffect, useState, type ReactNode } from "react";

const PASSWORD = "GS@20261";
const STORAGE_KEY = "site_unlocked_v1";

export const PasswordGate = ({ children }: { children: ReactNode }) => {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") setUnlocked(true);
    } catch {}
    setReady(true);
  }, []);

  if (!ready) return null;

  if (unlocked) return <>{children}</>;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <form onSubmit={submit} className="w-full max-w-sm space-y-6 border border-border rounded-lg p-8 bg-card">
        <div className="space-y-2">
          <h1 className="font-heading text-2xl font-semibold text-foreground">Protected site</h1>
          <p className="text-sm text-muted-foreground">Enter the access password to continue.</p>
        </div>
        <div className="space-y-2">
          <input
            type="password"
            autoFocus
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Password"
          />
          {error && <p className="text-sm text-destructive">Incorrect password.</p>}
        </div>
        <button
          type="submit"
          className="w-full h-10 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
        >
          Unlock
        </button>
      </form>
    </main>
  );
};

export default PasswordGate;