import React from "react";

interface Props {
    params: {
        id: string;
    };
}

export default function SejourPage({ params }: Props) {
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-2xl font-bold">Séjour {params.id}</h1>
            <p className="mt-4 text-slate-500">Page de détail du séjour (placeholder).</p>
        </main>
    );
}
