import React from "react";
import Modal from "../../global/Modal";
import { MEDIUM_SIZED_MODAL_STYLES } from "@/_libs/styles/ModalStyles";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { montserrat } from "@/_libs/utils/font";
import cn from "@/_libs/utils/cn";

export default function ManageCategoriesModal({ open, setOpen }: any) {
    return (
        <Modal
            open={open}
            setOpen={setOpen}
            modalStyles={MEDIUM_SIZED_MODAL_STYLES}
        >
            <div className="space-y-4 divide-y divide-slate-800/55">
                <div className="flex items-center justify-between">
                    <h2
                        className={cn(
                            "font-semibold text-sm",
                            montserrat.className
                        )}
                    >
                        Manage Categories
                    </h2>
                    <XMarkIcon
                        className="w-5 h-5 font-bold cursor-pointer"
                        onClick={() => setOpen(false)}
                    />
                </div>
            </div>
        </Modal>
    );
}
