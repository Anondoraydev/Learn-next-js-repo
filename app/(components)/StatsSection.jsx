const StatsSection = () => {
    return (
        <div className="bg-blue-600 text-white py-12 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 text-center">
                <div className="border-r border-white last:border-none">
                    <h2 className="text-4xl font-bold">8200</h2>
                    <p className="mt-2 text-lg">Success Stories</p>
                </div>
                <div className="border-r border-white last:border-none">
                    <h2 className="text-4xl font-bold">12200</h2>
                    <p className="mt-2 text-lg">Expert Mentors</p>
                </div>
                <div className="border-r border-white last:border-none">
                    <h2 className="text-4xl font-bold">50000</h2>
                    <p className="mt-2 text-lg">Hours Course</p>
                </div>
                <div>
                    <h2 className="text-4xl font-bold">70000</h2>
                    <p className="mt-2 text-lg">Active Students</p>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
