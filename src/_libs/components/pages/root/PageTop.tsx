"use client";
import React, { useState } from "react";
import Button from "../../global/Button";
import {
    DocumentPlusIcon,
    PlusIcon,
    SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import AddTaskModal from "./AddTaskModal";
import ManageCategoriesModal from "./ManageCategoriesModal";
import ManageTagsModal from "./ManageTagsModal";

export default function PageTop() {
    const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
    const [openManageCategoriesModal, setOpenManageCategoriesModal] =
        useState(false);
    const [openManageTagsModal, setOpenManageTagsModal] = useState(false);
    return (
        <div className="max-w-9xl mx-auto pt-4 px-4">
            <div className="flex items-center justify-end gap-4">
                <Button
                    variant="primary"
                    size="small"
                    className="gap-2 font-medium text-xs"
                    onClick={() => setOpenManageTagsModal(true)}
                >
                    <DocumentPlusIcon className="w-5 h-5" />
                    Manage Tags
                </Button>
                <Button
                    variant="primary"
                    size="small"
                    className="gap-2 font-medium text-xs"
                    onClick={() => setOpenManageCategoriesModal(true)}
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
                <ManageCategoriesModal
                    open={openManageCategoriesModal}
                    setOpen={setOpenManageCategoriesModal}
                />
                <ManageTagsModal
                    open={openManageTagsModal}
                    setOpen={setOpenManageTagsModal}
                />
            </div>
        </div>
    );
}
