"use client";

import { useEffect } from "react";

export function DevfolioApply() {
    useEffect(() => {
        // Load Devfolio SDK script
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on component unmount
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="flex justify-center items-center py-8">
            <div
                className="apply-button"
                data-hackathon-slug="tic-pinnacle-hacks-2025"
                data-button-theme="light"
                style={{ height: "44px", width: "312px" }}
            ></div>
        </div>
    );
}

export default DevfolioApply;
