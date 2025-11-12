module.exports = [
"[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU121/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TU121
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function TU121() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const placeholderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [buttonTop, setButtonTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const FADE_HEIGHT = 80;
    const FADE_COLOR = "#ffffff";
    const SCROLL_THRESHOLD = 6;
    const [showBottomFade, setShowBottomFade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "below-header",
        ref: sectionRef,
        className: "relative flex flex-col md:flex-row bg-[#DFFFFF] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-30 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute bottom-0 left-0 w-full pointer-events-none transition-opacity duration-300 ease-in-out",
                style: {
                    height: `${FADE_HEIGHT}px`,
                    background: `linear-gradient(to top, ${FADE_COLOR}, rgba(255,255,255,0))`,
                    opacity: showBottomFade ? 1 : 0,
                    zIndex: 10
                }
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU121/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center relative z-20 max-w-6xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-3xl md:text-4xl font-bold text-[#545454] leading-snug",
                        style: {
                            fontFamily: "Space Grotesk"
                        },
                        children: "Curtin University"
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU121/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#6F6F6F] text-md leading-relaxed text-center",
                        style: {
                            fontFamily: "DM Sans"
                        },
                        children: "Perth, Western Australia"
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU121/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#6F6F6F] pt-6 leading-relaxed  px-15 text-center",
                        style: {
                            fontFamily: "DM Sans"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-lg",
                            children: "Established in 1966, Curtin University is one of Australia’s largest and most globally recognised universities, known for innovation, research excellence, and strong industry connections. With a focus on practical learning and future-ready education, Curtin ranks among the top 1% of universities worldwide, making it a leading choice for international students."
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU121/page.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU121/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "floating-buttons",
                        ref: placeholderRef,
                        className: "pt-12 opacity-0 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-6 py-3 rounded-full bg-[#37D7D9] text-white font-medium shadow-md",
                                children: "Apply Now"
                            }, void 0, false, {
                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU121/page.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU121/page.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU121/page.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU121/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-10 py-2.5 rounded-full text-white bg-[#37D7D9] font-medium hover:bg-[#00B7C1] hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out",
                    children: "Apply Now"
                }, void 0, false, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU121/page.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU121/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU121/page.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}),
"[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Overview.tsx
__turbopack_context__.s([
    "default",
    ()=>TU122
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
function TU122() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-full py-12 px-40 mt-30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 items-center gap-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center md:text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl lg:text-4xl font-bold text-[#545454] mb-12",
                            children: "Overview"
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#000000] mb-16 md:text-2xl whitespace-nowrap",
                            style: {
                                fontFamily: "DM Sans"
                            },
                            children: [
                                "Curtin University, located in Perth, is renowned for its forward-",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 78
                                }, this),
                                "thinking approach to education and research. Hosting over 58,000",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 147
                                }, this),
                                " students — including 15,000+ international students — Curtin",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 213
                                }, this),
                                " offers globally recognised programs in business, engineering, IT,",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 284
                                }, this),
                                " health, and design. Its modern campuses and strong partnerships ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 354
                                }, this),
                                "with industry leaders provide students with real-world learning",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 422
                                }, this),
                                " opportunities and exceptional career outcomes."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-[#37D7D9] text-xl text-white font-bold px-12 py-3 rounded-full shadow-lg shadow-gray-400 transition-all",
                            children: "See More"
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-2 w-full flex justify-end md:justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/tu122Img.png",
                        alt: "Macquarie University",
                        width: 400,
                        height: 300,
                        className: "object-contain w-auto h-auto max-w-full",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityAus/TopUni12Aus/TU122/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Eduweb_src_components_TopUnis_TopUniversityAus_TopUni12Aus_2f29be87._.js.map