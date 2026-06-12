import React from 'react';

const Loader = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">

            <div className="flex flex-col items-center gap-4">

                {/* Spinner */}
                <div className="w-14 h-14 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

                {/* Text */}
                <h2 className="text-gray-600 text-lg font-medium">
                    Loading...
                </h2>

            </div>

        </div>
    );
};

export default Loader;