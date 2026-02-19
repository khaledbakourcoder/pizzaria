"use client";
import useStoreStatus from '@/hooks/useStoreStatus';
import { useState, useEffect } from 'react';

export default function OpeningStatus() {
    const statusInfo = useStoreStatus();
    const [mounted, setMounted] = useState(false);

    // Hydration-Fix: Erst rendern, wenn der Client bereit ist
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="animate-pulse bg-muted w-24 h-4 rounded-full" />;
    }

    return (
        <div className="flex items-center gap-2 bg-black/10 px-2 py-0.5 rounded-full font-black text-[9px] uppercase tracking-widest">
            <span className={`w-1.5 h-1.5 rounded-full ${statusInfo.color} animate-pulse`}></span>
            {statusInfo.status}
        </div>
    );
}