import { LARGE_SIZED_MODAL_STYLES } from "@/_libs/styles/ModalStyles";
import Modal from "../../global/Modal";

export default function AddTaskModal({ open, setOpen }: any) {
    return (
        <Modal
            open={open}
            setOpen={setOpen}
            modalStyles={LARGE_SIZED_MODAL_STYLES}
        >
            das
        </Modal>
    );
}
