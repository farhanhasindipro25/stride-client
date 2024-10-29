import CategoryWithTasks from "@/_libs/components/pages/root/CategoryWithTasks";
import FiltersSection from "@/_libs/components/pages/root/FiltersSection";
import Navbar from "@/_libs/components/pages/root/Navbar";

export default function Home() {
    return (
        <div className="bg-slate-800/20 h-screen w-full">
            <Navbar />
            {/* <FiltersSection /> */}
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
