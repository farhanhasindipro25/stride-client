import React from "react";
import {
    CheckCircleIcon,
    ClockIcon,
    FlagIcon,
    TagIcon,
} from "@heroicons/react/20/solid";

export default function CategoryWithTasks() {
    return (
        <div className="w-full space-y-4">
            <div className="border border-slate-800/25 bg-slate-800/10 rounded-md py-2">
                <h2 className="text-center font-semibold text-gray-400 text-sm">
                    BACKLOG
                </h2>
            </div>

            <div className="border space-y-4 divide-y divide-slate-800/50 cursor-pointer border-slate-800/25 bg-slate-700/10 rounded-md p-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4 text-gray-300" />
                        <p className="font-medium text-xs text-gray-300">
                            31st October, 2024
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-blue-300" />
                        <p className="font-medium text-xs text-gray-300">
                            Completed
                        </p>
                    </div>
                </div>
                <div className="space-y-1 pt-4">
                    <h2 className="font-semibold text-sm text-gray-300">
                        Hello There. Welcome to Stride!
                    </h2>
                    <p className="font-medium text-xs text-gray-500">
                        Get started right away by editing this task.
                    </p>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                        <FlagIcon className="w-4 h-4 text-red-300" />
                        <p className="font-medium text-xs text-gray-300">
                            High
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <TagIcon className="w-4 h-4 text-blue-300" />
                        <p className="font-medium text-xs text-gray-300">
                            Frontend
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// title: 'Hello There. Welcome to Stride!',
// description: 'Get started right away by editing this task.',
