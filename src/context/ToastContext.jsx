import { createContext, useContext, useState, useCallback } from "react";
import Toast from "../components/ui/Toast";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const add = useCallback((msg, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, msg, type }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      3000
    );
  }, []);

  return (
    <ToastContext.Provider value={{ add }}>
      {children}
      <div style={toastContainerStyle}>
        {toasts.map((t) => (
          <Toast key={t.id} msg={t.msg} type={t.type} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

const toastContainerStyle = {
  position: "fixed", bottom: 24, right: 24,
  display: "flex", flexDirection: "column", gap: 10, zIndex: 9999,
};

export const useToast = () => useContext(ToastContext);