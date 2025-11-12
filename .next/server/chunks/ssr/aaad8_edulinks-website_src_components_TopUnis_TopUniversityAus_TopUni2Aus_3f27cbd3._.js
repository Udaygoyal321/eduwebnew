module.exports = [
"[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU21/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TU21
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function TU21() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const placeholderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [buttonTop, setButtonTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const FADE_HEIGHT = 80;
    const FADE_COLOR = "#ffffff";
    const SCROLL_THRESHOLD = 6;
    const [showBottomFade, setShowBottomFade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = sectionRef.current;
        const placeholder = placeholderRef.current;
        if (!section || !placeholder) return;
        const updatePosition = ()=>{
            const rect = placeholder.getBoundingClientRect();
            setButtonTop(rect.top + window.scrollY);
        };
        updatePosition();
        window.addEventListener("resize", updatePosition);
        const fadeDistance = 100;
        let rafId = null;
        const onScrollForButtons = ()=>{
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(()=>{
                const rect = section.getBoundingClientRect();
                if (rect.top > 0) {
                    setOpacity(1);
                } else {
                    const scrolledPast = Math.min(-rect.top, fadeDistance);
                    const newOpacity = Math.max(0, 1 - scrolledPast / fadeDistance);
                    setOpacity(newOpacity);
                }
            });
        };
        onScrollForButtons();
        window.addEventListener("scroll", onScrollForButtons, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", onScrollForButtons);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let lastY = window.scrollY || 0;
        let raf = 0;
        const onScrollDir = ()=>{
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(()=>{
                const y = window.scrollY || 0;
                const delta = y - lastY;
                if (Math.abs(delta) > SCROLL_THRESHOLD) {
                    if (delta > 0) {
                        setShowBottomFade(true);
                    } else {
                        setShowBottomFade(false);
                    }
                    lastY = y;
                }
            });
        };
        window.addEventListener("scroll", onScrollDir, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", onScrollDir);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "below-header",
        ref: sectionRef,
        className: "relative flex flex-col md:flex-row bg-[#DFFFFF] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-30 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute bottom-0 left-0 w-full pointer-events-none transition-opacity duration-300 ease-in-out",
                style: {
                    height: `${FADE_HEIGHT}px`,
                    background: `linear-gradient(to top, ${FADE_COLOR}, rgba(255,255,255,0))`,
                    opacity: showBottomFade ? 1 : 0,
                    zIndex: 10
                }
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU21/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center relative z-20 max-w-6xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-3xl md:text-4xl font-bold text-[#545454] leading-snug",
                        style: {
                            fontFamily: "Space Grotesk"
                        },
                        children: "University of Melbourne"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU21/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#6F6F6F] text-md leading-relaxed text-center",
                        style: {
                            fontFamily: "DM Sans"
                        },
                        children: "Sydney of the south meets world-class academia — based in Melbourne, Victoria, Australia"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU21/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#6F6F6F] pt-6 leading-relaxed  px-15 text-center",
                        style: {
                            fontFamily: "DM Sans"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-lg",
                            children: "Established in 1853, the University of Melbourne is Australia’s #1 ranked university, with 53,000+ students and a strong global reputation in research and industry."
                        }, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU21/page.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU21/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "floating-buttons",
                        ref: placeholderRef,
                        className: "pt-12 opacity-0 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-6 py-3 rounded-full bg-[#37D7D9] text-white font-medium shadow-md",
                                children: "View Universities"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU21/page.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU21/page.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU21/page.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU21/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: `${buttonTop + 70}px`,
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity,
                    transition: "opacity 0.01s linear",
                    pointerEvents: opacity === 0 ? "none" : "auto",
                    zIndex: 50
                },
                className: "flex gap-4 pt-5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-8 py-2.5 -translate-y-6 rounded-full text-white bg-[#37D7D9] font-medium hover:bg-[#00B7C1] hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out",
                    children: "Apply Now"
                }, void 0, false, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU21/page.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU21/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU21/page.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}),
"[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU22/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Overview.tsx
__turbopack_context__.s([
    "default",
    ()=>TU22
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
function TU22() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-full py-12 px-40 mt-30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 items-center gap-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center md:text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl lg:text-4xl font-bold text-[#545454] mb-12",
                            children: "Overview"
                        }, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU22/page.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#000000] mb-16 md:text-2xl whitespace-nowrap",
                            style: {
                                fontFamily: "DM Sans"
                            },
                            children: [
                                "The University of Melbourne, located in Melbourne, Victoria, is ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU22/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 77
                                }, this),
                                "Australia’s leading research university and consistently ranked at ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU22/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 149
                                }, this),
                                "the very top nationally and globally. With a student body of over",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU22/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 219
                                }, this),
                                " 53,000 including many international learners, it’s recognised for ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU22/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 291
                                }, this),
                                "its cutting-edge research, strong industry and global partnerships,",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU22/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 363
                                }, this),
                                " and its role in innovation and leadership."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU22/page.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-[#37D7D9] text-xl text-white font-bold px-12 py-3 rounded-full shadow-lg shadow-gray-400 transition-all",
                            children: "See More"
                        }, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU22/page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU22/page.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-2 w-full flex justify-end md:justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/tu22Img.png",
                        alt: "Macquarie University",
                        width: 400,
                        height: 300,
                        className: "object-contain w-auto h-auto max-w-full",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU22/page.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU22/page.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU22/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU22/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU23/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TU23
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
const points = [
    {
        text: "Melbourne’s urban campus in one of the world’s most liveable cities",
        style: "absolute left-[-10%] top-[25%] w-[25%] text-right"
    },
    {
        text: "Ranked #1 in Australia, and among the top 20 globally (QS World University Rankings #19)",
        style: "absolute left-[15%] top-[-11%] w-[25%] text-center"
    },
    {
        text: "Over 100 research institutes and strong research output at national lead level",
        style: "absolute left-[54%] top-[20%] w-[25%] text-left"
    },
    {
        text: "Extensive industry and global partnerships ensuring high employability and real-world experience",
        style: "absolute left-[45%] top-[70%] w-[22%] text-center"
    },
    {
        text: "A large international student community across 150+ countries (student body of 53,000+)",
        style: "absolute right-[-10%] top-[57%] w-[25%] text-left"
    }
];
function TU23() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full flex flex-col items-center py-10 mt-30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center",
                children: "Why University of Melbourne?"
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU23/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-[1000px] h-auto aspect-[1000/400]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/tu2Img.png",
                        alt: "Timeline line",
                        fill: true,
                        className: "object-contain",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU23/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    points.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-[#000000] text-xs sm:text-sm md:text-base ${point.style}`,
                            children: point.text
                        }, index, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU23/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU23/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/TopUnis/TopUniversityAus/TopUni2Aus/TU23/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=aaad8_edulinks-website_src_components_TopUnis_TopUniversityAus_TopUni2Aus_3f27cbd3._.js.map