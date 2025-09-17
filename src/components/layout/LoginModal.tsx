"use client";


import React, { useState } from "react";


type Props = {
    open: boolean;
    onClose: () => void;
};


export default function LoginModal({ open, onClose }: Props) {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    if (!open) return null;


    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!identifier || !password) {
            alert("Lütfen tüm alanları doldurun.");
            return;
        }
        setLoading(true);
        // Simulate login request (replace with real API)
        setTimeout(() => {
            setLoading(false);
            alert("Giriş başarılı (simülasyon)");
            onClose();
        }, 800);
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />


            <div className="relative bg-white rounded-md shadow-lg w-full max-w-md p-6 z-10">
                <h3 className="text-lg font-semibold mb-4">Giriş Yap</h3>


                <form onSubmit={submit} className="space-y-3">
                    <input
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        placeholder="Telefon numarası veya e-posta"
                        className="w-full border rounded px-3 py-2"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Parola"
                        className="w-full border rounded px-3 py-2"
                    />


                    <div className="flex items-center justify-between gap-2">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            disabled={loading}
                        >
                            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
                        </button>


                        <button type="button" className="text-sm text-gray-500" onClick={() => alert("Şifre sıfırlama akışı (simülasyon).")}>Şifremi unuttum</button>
                    </div>
                </form>
                <button
                    aria-label="kapat"
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}