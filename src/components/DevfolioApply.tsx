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
                className="apply-button w-80 h-14 sm:w-96 sm:h-16 md:w-[450px] md:h-[70px]"
                data-hackathon-slug={slug}
                data-button-theme={theme}
            ></div>
        </div>
    );
}
