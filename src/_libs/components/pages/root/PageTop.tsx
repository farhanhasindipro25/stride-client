"use client";
import React, { useState } from "react";
import Button from "../../global/Button";
import {
    DocumentPlusIcon,
    PlusIcon,
    SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import AddTaskModal from "./AddTaskModal";

export default function PageTop() {
    const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
    return (
        <div className="max-w-9xl mx-auto pt-4 px-4">
            <div className="flex items-center justify-end gap-4">
                <Button
                    variant="primary"
                    size="small"
                    className="gap-2 font-medium text-xs"
                >
                    <DocumentPlusIcon className="w-5 h-5" />
                    Manage Tags
                </Button>
                <Button
                    variant="primary"
                    size="small"
                    className="gap-2 font-medium text-xs"
                >
                    <SquaresPlusIcon className="w-5 h-5" />
                    Manage Categories
                </Button>
                <Button
                    variant="primary"
                    size="small"
                    className="gap-2 font-medium text-xs"
                    onClick={() => setOpenAddTaskModal(true)}
                >
                    <PlusIcon className="w-5 h-5" />
                    Add Task
                </Button>
                <AddTaskModal
                    open={openAddTaskModal}
                    setOpen={setOpenAddTaskModal}
                />
            </div>
        </div>
    );
}
