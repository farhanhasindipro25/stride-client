import { LARGE_SIZED_MODAL_STYLES } from "@/_libs/styles/ModalStyles";
import Modal from "../../global/Modal";
import cn from "@/_libs/utils/cn";
import { montserrat } from "@/_libs/utils/font";
import { XMarkIcon } from "@heroicons/react/20/solid";
import TextInputField from "../../global/TextInputField";

export default function AddTaskModal({ open, setOpen }: any) {
    return (
        <Modal
            open={open}
            setOpen={setOpen}
            modalStyles={LARGE_SIZED_MODAL_STYLES}
        >
            <div className="space-y-4 divide-y divide-slate-800/55">
                <div className="flex items-center justify-between">
                    <h2
                        className={cn(
                            "font-semibold text-sm",
                            montserrat.className
                        )}
                    >
                        Add New Task
                    </h2>
                    <XMarkIcon className="w-5 h-5 font-bold" />
                </div>
                <div className="pt-4">
                    <TextInputField
                        name="title"
                        id="title"
                        label="Title"
                        placeholder="Name your task"
                    />
                </div>
            </div>
        </Modal>
    );
}
