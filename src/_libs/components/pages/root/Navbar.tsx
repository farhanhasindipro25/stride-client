import cn from "@/_libs/utils/cn";
import { montserrat } from "@/_libs/utils/font";
import React from "react";

export default function Navbar() {
    return (
        <div className="w-full bg-slate-800/10 backdrop-blur-xl py-4">
            <div className="max-w-7xl mx-auto px-4">
                <h2
                    className={cn(
                        "font-semibold text-sm text-gray-400 text-center",
                        montserrat.className
                    )}
                >
                    STRIDE - A Personal Task Manager Application
                </h2>
            </div>
        </div>
    );
}
