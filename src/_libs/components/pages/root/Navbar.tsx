import cn from "@/_libs/utils/cn";
import { montserrat } from "@/_libs/utils/font";
import React from "react";

export default function Navbar() {
    return (
        <div className="w-full bg-slate-800/10 backdrop-blur-xl py-4">
            <div className="max-w-9xl space-y-2 mx-auto flex justify-between px-4">
                <h2
                    className={cn(
                        "font-semibold text-sm text-gray-400 text-center",
                        montserrat.className
                    )}
                >
                    STRIDE
                </h2>
                <p
                    className={cn(
                        "font-medium text-xs text-gray-400 text-center",
                        montserrat.className
                    )}
                >
                    A Personal Task Manager Application
                </p>
            </div>
        </div>
    );
}
