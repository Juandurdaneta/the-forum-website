"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string, type?: ToastType) => void;
  removeToast: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const addToast = React.useCallback((message: string, type: ToastType = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

function ToastIcon({ type }: { type: ToastType }) {
  switch (type) {
    case "success":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "error":
      return <AlertCircle className="h-5 w-5 text-red-500" />;
    default:
      return <Info className="h-5 w-5 text-brand-bronze" />;
  }
}

export function Toaster() {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  React.useEffect(() => {
    const handleToast = (event: CustomEvent<{ message: string; type: ToastType }>) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast = { id, ...event.detail };
      setToasts((prev) => [...prev, newToast]);
      
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 5000);
    };

    window.addEventListener("toast" as never, handleToast as never);
    return () => window.removeEventListener("toast" as never, handleToast as never);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={cn(
              "flex items-center gap-3 rounded-lg bg-white p-4 shadow-lg border",
              toast.type === "success" && "border-green-200",
              toast.type === "error" && "border-red-200",
              toast.type === "info" && "border-brand-peach"
            )}
          >
            <ToastIcon type={toast.type} />
            <p className="text-sm text-brand-black">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-2 text-brand-slate hover:text-brand-black transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Helper function to trigger toast from anywhere
export function toast(message: string, type: ToastType = "info") {
  window.dispatchEvent(
    new CustomEvent("toast", { detail: { message, type } })
  );
}
