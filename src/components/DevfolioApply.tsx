import { useEffect } from 'react';

export default function ApplyButton({ slug, theme = 'light' }: { slug: string, theme?: string }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="flex justify-center items-center w-full">
            <div
                className="apply-button w-96 h-16 sm:w-[420px] sm:h-20 md:w-[500px] md:h-[80px]"
                data-hackathon-slug={slug}
                data-button-theme={theme}
            ></div>
        </div>
    );
}
