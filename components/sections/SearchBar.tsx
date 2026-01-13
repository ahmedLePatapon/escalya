"use client";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function SearchBar() {
    return (

        <div className="mx-auto max-w-4xl rounded-xl bg-white p-2 shadow-xl dark:bg-slate-900 md:p-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
                {/* Destination */}
                <div className="flex items-center gap-3 flex-1 rounded-lg px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                    <Icon name="location_on" className="text-slate-400" />
                    <div className="flex flex-col text-left">
                        <span className="text-xs font-semibold uppercase text-slate-400">Destination</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Où allez-vous ?</span>
                    </div>
                </div>

                <div className="h-px w-full bg-slate-100 dark:bg-slate-800 md:h-10 md:w-px" />

                {/* Dates */}
                <div className="flex items-center gap-3 flex-1 rounded-lg px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                    <Icon name="calendar_month" className="text-slate-400" />
                    <div className="flex flex-col text-left">
                        <span className="text-xs font-semibold uppercase text-slate-400">Dates</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Arrivée - Départ</span>
                    </div>
                </div>

                <div className="h-px w-full bg-slate-100 dark:bg-slate-800 md:h-10 md:w-px" />

                {/* Travelers */}
                <div className="flex items-center gap-3 flex-1 rounded-lg px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                    <Icon name="group" className="text-slate-400" />
                    <div className="flex flex-col text-left">
                        <span className="text-xs font-semibold uppercase text-slate-400">Voyageurs</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">2 adultes</span>
                    </div>
                </div>

                <Button size="lg" className="w-full md:w-auto mt-2 md:mt-0">
                    <Icon name="search" className="mr-2" />
                    Rechercher
                </Button>
            </div>
        </div>
    );
}
