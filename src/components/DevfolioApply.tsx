"use client";

import { useEffect, useRef, useState } from "react";

// Extend Window interface to include Devfolio
declare global {
    interface Window {
        Devfolio?: unknown;
    }
}

export function DevfolioApply() {
    const buttonRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [showFallback, setShowFallback] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let fallbackTimeoutId: NodeJS.Timeout;

        const initializeDevfolio = () => {
            // Check if Devfolio SDK is already loaded
            if (window.Devfolio) {
                setIsLoading(false);
                return;
            }

            // Load Devfolio SDK script
            const script = document.createElement('script');
            script.src = 'https://apply.devfolio.co/v2/sdk.js';
            script.async = true;
            script.defer = true;

            // Handle script load success
            script.onload = () => {
                // Wait for the SDK to initialize
                timeoutId = setTimeout(() => {
                    if (buttonRef.current) {
                        try {
                            // Check if the button was properly initialized
                            const button = buttonRef.current;
                            if (button.children.length > 0) {
                                setIsLoading(false);
                                console.log('Devfolio button initialized successfully');
                            } else {
                                // Show fallback after 3 seconds if button doesn't initialize
                                fallbackTimeoutId = setTimeout(() => {
                                    if (button.children.length === 0) {
                                        setShowFallback(true);
                                        setHasError(true);
                                        setIsLoading(false);
                                        console.error('Devfolio button failed to initialize, showing fallback');
                                    }
                                }, 3000);
                            }
                        } catch (error) {
                            console.error('Error checking Devfolio button:', error);
                            setShowFallback(true);
                            setHasError(true);
                            setIsLoading(false);
                        }
                    }
                }, 1000);
            };

            // Handle script load error
            script.onerror = () => {
                console.error('Failed to load Devfolio SDK');
                setShowFallback(true);
                setHasError(true);
                setIsLoading(false);
            };

            document.body.appendChild(script);
        };

        // Initialize with a small delay to ensure DOM is ready
        const initTimeout = setTimeout(initializeDevfolio, 200);

        return () => {
            clearTimeout(initTimeout);
            clearTimeout(timeoutId);
            clearTimeout(fallbackTimeoutId);
            // Cleanup script on component unmount
            const scripts = document.querySelectorAll('script[src*="devfolio.co"]');
            scripts.forEach(script => {
                if (document.body.contains(script)) {
                    document.body.removeChild(script);
                }
            });
        };
    }, []);

    // Show fallback button if Devfolio fails or after timeout
    if (showFallback || hasError) {
        return (
            <div className="flex justify-center items-center py-8">
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl px-8 py-6 text-center max-w-md">
                    <div className="mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Apply for TIC Pinnacle Hacks 2025</h3>
                        <p className="text-white/70 text-sm">
                            Join us for an incredible hackathon experience!
                        </p>
                    </div>
                    <div className="space-y-3">
                        <a
                            href="https://devfolio.co/tic-pinnacle-hacks-2025"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 transform hover:scale-105 w-full"
                        >
                            Apply on Devfolio
                        </a>
                        <button
                            onClick={() => {
                                setShowFallback(false);
                                setHasError(false);
                                setIsLoading(true);
                                window.location.reload();
                            }}
                            className="inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors w-full"
                        >
                            Try Again
                        </button>
                    </div>
                    <p className="text-white/50 text-xs mt-4">
                        If the button above doesn&apos;t work, the hackathon might not be live on Devfolio yet.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center py-8 w-full">
            {isLoading && (
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white/30 mx-auto mb-2"></div>
                    <p className="text-white/60 text-sm">Loading application form...</p>
                </div>
            )}
            <div
                ref={buttonRef}
                className="apply-button mx-auto"
                data-hackathon-slug="tic-pinnacle-hacks-2025"
                data-button-theme="dark"
                style={{
                    height: "44px",
                    width: "312px",
                    minHeight: "44px",
                    minWidth: "312px",
                    opacity: isLoading ? 0 : 1,
                    transition: "opacity 0.3s ease-in-out"
                }}
            ></div>
        </div>
    );
}

export default DevfolioApply;
