import { createContext, useContext, useEffect, useState } from 'react';
import './Toast.css';

interface Toast {
    id: number;
    message: string;
    type: 'success' | 'info' | 'warning';
}

interface ToastContextType {
    showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within ToastProvider');
    return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'info') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    };

    const icons = {
        success: '✅',
        info: '💡',
        warning: '⚠️'
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="toast-container">
                {toasts.map(toast => (
                    <div key={toast.id} className={`toast toast--${toast.type}`}>
                        <span>{icons[toast.type]}</span>
                        <span>{toast.message}</span>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export const WelcomeToast = () => {
    const { showToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            showToast("Welcome to my portfolio! 👋", "info");
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return null;
};
