import Button from "@/_libs/components/global/Button";
import CategoryWithTasks from "@/_libs/components/pages/root/CategoryWithTasks";
import Navbar from "@/_libs/components/pages/root/Navbar";
import {
    DocumentPlusIcon,
    PlusIcon,
    SquaresPlusIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
    return (
        <div className="bg-slate-800/20 h-screen w-full">
            <Navbar />
            {/* <FiltersSection /> */}
            <div className="max-w-9xl mx-auto py-4 px-4">
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
                    >
                        <PlusIcon className="w-5 h-5" />
                        Add Task
                    </Button>
                </div>
            </div>
            <div className="max-w-9xl mx-auto px-4">
                <div className="overflow-x-auto">
                    <div className="flex space-x-4 py-4">
                        {Array.from({ length: 1 }, (_, index) => (
                            <div
                                key={index}
                                className="min-w-[20rem] flex-shrink-0"
                            >
                                <CategoryWithTasks />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
