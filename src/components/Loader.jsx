import React from 'react'
const Loader = () => {
    return (
        <div class="flex items-center justify-center space-x-2 animate-pulse pt-5">
            <div class="w-8 h-8 bg-blue-700 rounded-full"></div>
            <div class="w-8 h-8 bg-blue-800 rounded-full"></div>
            <div class="w-8 h-8 bg-blue-900 rounded-full"></div>
        </div>
    );
};

export default Loader;
