import CategoryWithTasks from "@/_libs/components/pages/root/CategoryWithTasks";
import Navbar from "@/_libs/components/pages/root/Navbar";
import PageTop from "@/_libs/components/pages/root/PageTop";

export default function Home() {
    return (
        <div className="bg-slate-800/20 h-screen w-full">
            <Navbar />
            <PageTop />
            <div className="max-w-9xl mx-auto px-4">
                <div className="overflow-x-auto">
                    <div className="flex space-x-4 py-4">
                        {Array.from({ length: 4 }, (_, index) => (
                            <div
                                key={index}
                                className="w-[22rem] flex-shrink-0"
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
