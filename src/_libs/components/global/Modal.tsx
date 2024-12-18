"use client";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ModalProps } from "@/_libs/interfaces/components/ModalProps";
import cn from "@/_libs/utils/cn";

const Modal = (props: ModalProps) => {
    const { open, setOpen, children, modalStyles } = props;
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-95"
                    leave="ease-in-out duration-200"
                    leaveFrom="opacity-95"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-95 transition-opacity ease-in-out duration-0" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center text-center sm:items-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in-out duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className={cn(
                                    modalStyles,
                                    "bg-slate-800/20 bg-opacity-100 shadow-xl"
                                )}
                            >
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Modal;
