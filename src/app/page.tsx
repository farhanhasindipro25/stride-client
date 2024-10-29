import CategoryWithTasks from "@/_libs/components/pages/root/CategoryWithTasks";
import FiltersSection from "@/_libs/components/pages/root/FiltersSection";
import Navbar from "@/_libs/components/pages/root/Navbar";

export default function Home() {
    return (
        <div className="bg-slate-800/20 h-screen">
            <Navbar />
            {/* <FiltersSection /> */}
            <div className="grid grid-cols-5 max-w-9xl py-6 mx-auto px-4">
                <CategoryWithTasks />
            </div>
        </div>
    );
}
