import { useEffect } from 'react';

export default function ApplyButton({ slug, theme = 'light', width = 312, height = 44 }: { slug: string, theme?: string, width?: number, height?: number }) {
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
        <div
            className="apply-button"
            data-hackathon-slug={slug}
            data-button-theme={theme}
            style={{ width: `${width}px`, height: `${height}px` }}
        ></div>
    );
}
