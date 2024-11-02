import { LARGE_SIZED_MODAL_STYLES } from "@/_libs/styles/ModalStyles";
import Modal from "../../global/Modal";
import cn from "@/_libs/utils/cn";
import { montserrat } from "@/_libs/utils/font";
import {
    CalendarIcon,
    FlagIcon,
    Square2StackIcon,
    TagIcon,
    XMarkIcon,
} from "@heroicons/react/20/solid";
import TextInputField from "../../global/TextInputField";
import AutoSizeTextAreaField from "../../global/AutoSizeTextAreaInputField";
import SelectField from "../../global/SelectField";
import { PriorityLevelOptions } from "@/_libs/statics/PriorityLevelOptions";
import { CategoryOptions } from "@/_libs/statics/CategoryOptions";
import { TagOptions } from "@/_libs/statics/TagOptions";
import PastDisabledDateInputField from "../../global/PastDisabledDateInputField";
import Button from "../../global/Button";

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
                    <XMarkIcon
                        className="w-5 h-5 font-bold cursor-pointer"
                        onClick={() => setOpen(false)}
                    />
                </div>
                <div className="pt-4 space-y-4">
                    <TextInputField
                        name="title"
                        id="title"
                        label="Title"
                        placeholder="Name your task"
                    />
                    <div className="flex divide-x divide-slate-700/45 items-center gap-4 w-full">
                        <div className="flex items-center gap-4 w-1/2">
                            <div className="flex items-center gap-2 w-32">
                                <Square2StackIcon className="w-4 h-4" />
                                <h2
                                    className={cn(
                                        "font-normal text-xs",
                                        montserrat.className
                                    )}
                                >
                                    Category
                                </h2>
                            </div>
                            <div className="w-full">
                                <SelectField
                                    name="category"
                                    id="category"
                                    instanceId="category"
                                    placeholder="Select category"
                                    options={CategoryOptions}
                                />
                            </div>
                        </div>
                        <div className="flex pl-4 items-center gap-4 w-1/2">
                            <div className="flex items-center gap-2 w-32">
                                <FlagIcon className="w-4 h-4" />
                                <h2
                                    className={cn(
                                        "font-normal text-xs",
                                        montserrat.className
                                    )}
                                >
                                    Priority
                                </h2>
                            </div>
                            <div className="w-full">
                                <SelectField
                                    name="priority"
                                    id="priority"
                                    instanceId="priority"
                                    placeholder="Select priority"
                                    options={PriorityLevelOptions}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex divide-x divide-slate-700/45 items-center gap-4 w-full">
                        <div className="flex items-center gap-4 w-1/2">
                            <div className="flex items-center gap-2 w-32">
                                <CalendarIcon className="w-4 h-4" />
                                <h2
                                    className={cn(
                                        "font-normal text-xs",
                                        montserrat.className
                                    )}
                                >
                                    Due Date
                                </h2>
                            </div>
                            <div className="w-full">
                                <PastDisabledDateInputField
                                    id="dueDate"
                                    name="dueDate"
                                />
                            </div>
                        </div>
                        <div className="flex pl-4 items-center gap-4 w-1/2">
                            <div className="flex items-center gap-2 w-32">
                                <TagIcon className="w-4 h-4" />
                                <h2
                                    className={cn(
                                        "font-normal text-xs",
                                        montserrat.className
                                    )}
                                >
                                    Tags
                                </h2>
                            </div>
                            <div className="w-full">
                                <SelectField
                                    name="tag"
                                    id="tag"
                                    instanceId="tag"
                                    placeholder="Select tag"
                                    options={TagOptions}
                                />
                            </div>
                        </div>
                    </div>
                    <AutoSizeTextAreaField
                        name="description"
                        id="description"
                        label="Description"
                        placeholder="Describe your task . . ."
                        minRows={20}
                    />
                    <div className="flex items-center justify-end gap-4">
                        <Button
                            variant="secondary"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button variant="primary">Create Task</Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
