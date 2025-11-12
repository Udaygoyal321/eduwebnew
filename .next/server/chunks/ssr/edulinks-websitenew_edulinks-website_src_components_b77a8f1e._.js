module.exports = [
"[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page0/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Page0() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const placeholderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [buttonTop, setButtonTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const FADE_HEIGHT = 40;
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
        className: "relative w-full flex flex-col md:flex-row bg-[#DFFFFF] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-35 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                width: 600,
                height: 400,
                src: "/images/kangarooImg.png",
                alt: "kangaroo",
                className: "w-[400px] absolute -bottom-[60px] right-0"
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page0/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
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
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page0/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center relative z-20 max-w-6xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-3xl md:text-4xl -mt-10 font-bold text-[#545454] leading-snug",
                        style: {
                            fontFamily: "Space Grotesk"
                        },
                        children: "Study in Australia"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page0/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#6F6F6F] pt-6 sm:pt-8 text-base sm:text-lg leading-relaxed text-center",
                        style: {
                            fontFamily: "DM Sans"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-base sm:text-lg",
                                children: "Unlock your future with globally recognized degrees, vibrant student life, and career pathways in one of the"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page0/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-base sm:text-lg",
                                children: "world’s most welcoming countries."
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page0/page.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page0/page.tsx",
                        lineNumber: 120,
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
                                children: "Enquire Now"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page0/page.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page0/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page0/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page0/page.tsx",
                lineNumber: 112,
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
                    className: "px-9 py-2.5 translate-y-4 rounded-full text-white bg-[#37D7D9] text-lg font-semibold hover:bg-[#00B7C1] hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out",
                    children: "Enquire Now"
                }, void 0, false, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page0/page.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page0/page.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page0/page.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
"[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/WhyAustralia.tsx
__turbopack_context__.s([
    "default",
    ()=>Page1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
function Page1() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 mt-5 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/page1lineImg.png",
                    alt: "Deep Background",
                    fill: true,
                    className: "object-contain md:translate-x-150 translate-x-130 opacity-100",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-10 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/page1blurImg.png",
                    alt: "Background Australia",
                    fill: true,
                    className: "object-contain opacity-100 md:translate-y-82 translate-y-10",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center md:justify-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/page1Img.png",
                            alt: "Study in Australia",
                            width: 450,
                            height: 350,
                            className: "object-contain relative z-20 w-[280px] sm:w-[350px] md:w-[450px] h-auto",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "relative z-20 text-2xl sm:text-3xl md:text-4xl font-bold text-[#545454] mb-6 md:mb-10",
                                style: {
                                    fontFamily: "Space Grotesk"
                                },
                                children: "Why Study In Australia?"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-4 sm:space-y-5 text-lg sm:text-xl md:text-[22px] text-[#333] font-bold",
                                children: [
                                    "Top-Ranked Universities",
                                    "Global Recognition",
                                    "Post-Study Work Options",
                                    "Multicultural Environment",
                                    "Innovative Learning"
                                ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-5 sm:gap-8 md:gap-11",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ml-4 sm:ml-6 md:ml-8 rounded-full bg-[#37D7D9] mt-1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative z-20",
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page1/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page15
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
function Page15() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full relative z-20 flex flex-col items-center py-16 px-6 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/page3lineImg.png",
                    alt: "Deep Background",
                    fill: true,
                    className: "object-contain md:translate-x-152 translate-x-126 -translate-y-0 opacity-100",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                    lineNumber: 11,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl md:text-4xl font-semibold text-[#545454] mb-15 text-center",
                children: "Cost of Studying in Australia"
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white shadow-md rounded-xl px-50 py-6 mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-4 top-1/2 transform -translate-y-8 text-[#37D7D9] text-2xl",
                        children: "★"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-2xl font-semibold text-[#000000]",
                        children: "Scholarships"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-[#000000] translate-y-4 text-lg",
                        children: "Offered by Australian Government & Universities"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-5xl overflow-hidden rounded-3xl mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[#37D7D9]/40 scale-x-0 origin-left group-hover:scale-x-30 transition-transform duration-1200 ease-in-out rounded-br-2xl rounded-tr-2xl"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative border-4 border-[#37D7D9] rounded-3xl px-6 py-7 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-2xl text-[#000000]",
                                children: "Tuition Fees"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#000000] text-lg text-right",
                                children: "AUD $20,000 – $45,000/year (depending on course)"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-5xl overflow-hidden rounded-3xl mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[#37D7D9]/40 scale-x-0 origin-left group-hover:scale-x-70 transition-transform duration-1200 ease-in-out rounded-br-2xl rounded-tr-2xl"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative border-4 border-[#37D7D9] rounded-3xl px-6 py-7 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-2xl text-[#000000]",
                                children: "Living Costs"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#000000] text-lg text-right",
                                children: "AUD $1,500 – $2,200/month"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-5xl overflow-hidden rounded-3xl mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[#37D7D9]/40 scale-x-0 origin-left group-hover:scale-x-40 transition-transform duration-1200 ease-in-out rounded-br-2xl rounded-tr-2xl"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative border-4 border-[#37D7D9] rounded-3xl px-6 py-7 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-2xl text-[#000000]",
                                children: "Visa Fees"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#000000] text-lg text-right",
                                children: "$620"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#000000] font-semibold text-3xl",
                        children: "Total"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg md:text-3xl font-bold text-[#000000] bg-white shadow-md shadow-[#CFF5F6] rounded-2xl px-25 py-6",
                        children: "AUD $39,000 – 72,700"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page15/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page2/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
function Page2() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full bg-white py-12 sm:py-16 md:py-20 flex flex-col items-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/page2lineImg.png",
                    alt: "Deep Background",
                    fill: true,
                    className: "object-contain md:translate-x-151 translate-x-121 opacity-100",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page2/page.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page2/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "relative z-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454] mb-10 sm:mb-12 md:mb-16 text-center",
                children: "Popular Courses In Australia"
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page2/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 w-full max-w-6xl h-[400px] sm:h-[420px] md:h-[300px] text-base sm:text-lg md:text-xl lg:text-[24px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 sm:top-6 md:top-0 left-4 sm:left-8 md:left-10 bg-[#DFFFFF] rounded-2xl sm:rounded-3xl shadow-lg px-3 sm:px-5 md:px-6 py-2 sm:py-3 font-bold text-center",
                        children: "Business & Management"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page2/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-12 sm:top-14 md:top-15 left-1/2 transform -translate-x-1/2 bg-[#DFFFFF] rounded-2xl sm:rounded-3xl shadow-lg px-3 sm:px-5 md:px-6 py-2 sm:py-3 font-bold text-center",
                        children: "Information Technology & AI"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page2/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-6 sm:top-8 md:top-5 right-8 sm:right-16 md:right-32 bg-[#DFFFFF] rounded-2xl sm:rounded-3xl shadow-lg px-3 sm:px-5 md:px-6 py-2 sm:py-3 font-bold text-center",
                        children: "Engineering"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page2/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 sm:bottom-3 md:bottom-2 left-8 sm:left-12 md:left-20 bg-[#DFFFFF] rounded-2xl sm:rounded-3xl shadow-lg px-2 sm:px-3 md:px-4 py-2 font-bold max-w-[85%] sm:max-w-md text-center",
                        children: "Health Sciences (Nursing, Medicine, Public Health)"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page2/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 sm:top-28 md:top-35 left-[50%] sm:left-[53%] md:left-[55%] bg-[#DFFFFF] rounded-2xl sm:rounded-3xl shadow-lg px-3 sm:px-5 md:px-6 py-2 sm:py-3 font-bold text-center",
                        children: "Education"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page2/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 sm:bottom-3 md:bottom-0 right-8 sm:right-16 md:right-28 bg-[#DFFFFF] rounded-2xl sm:rounded-3xl shadow-lg px-3 sm:px-5 md:px-6 py-2 sm:py-3 font-bold text-center",
                        children: "Hospitality & Tourism"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page2/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page2/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page2/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
function Page4() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full py-20 sm:py-24 md:py-30 mt-6 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 h-[500px] sm:h-[650px] md:h-[750px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/page4line2Img.png",
                    alt: "Deep Background",
                    fill: true,
                    className: "object-contain translate-x-466 md:translate-x-490 lg:translate-x-[612px] -translate-y-6 opacity-100",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "relative z-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#545454] mb-10 sm:mb-16 md:mb-20",
                children: "Work & Stay Opportunities"
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        width: 1600,
                        height: 1400,
                        src: "/images/page4lineImg.png",
                        alt: "Deep Background",
                        className: "object-contain absolute w-[850px] left-[100px] top-[140px]"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-20 max-w-6xl mx-auto h-[420px] sm:h-[480px] md:h-[500px] scale-90 sm:scale-95 md:scale-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/page4Img1.png",
                                    alt: "Work 20 Hours/Week During Studies",
                                    width: 320,
                                    height: 120,
                                    className: "object-contain max-w-full h-auto"
                                }, void 0, false, {
                                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                                lineNumber: 36,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[120px] sm:top-[140px] md:top-[150px] left-[60px] sm:left-[75px] md:left-[90px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/page4dotImg.png",
                                    alt: "Dot",
                                    width: 44,
                                    height: 44,
                                    className: "object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                                lineNumber: 47,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[60px] sm:top-[70px] md:top-[80px] left-[45%] md:left-[500px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/page4Img2.png",
                                    alt: "Post-Study Work Visa",
                                    width: 400,
                                    height: 130,
                                    className: "object-contain max-w-full h-auto"
                                }, void 0, false, {
                                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                                lineNumber: 58,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[160px] sm:top-[180px] md:top-[200px] left-[47%] md:left-[520px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/page4dotImg.png",
                                    alt: "Dot",
                                    width: 44,
                                    height: 44,
                                    className: "object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                                lineNumber: 69,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[220px] sm:top-[250px] md:top-[270px] left-[55%] md:left-[700px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/page4Img3.png",
                                    alt: "Pathway To Permanent Residency",
                                    width: 400,
                                    height: 130,
                                    className: "object-contain max-w-full h-auto"
                                }, void 0, false, {
                                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                                lineNumber: 80,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[310px] sm:top-[350px] md:top-[380px] left-[72%] md:left-[920px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/page4dotImg.png",
                                    alt: "Dot",
                                    width: 44,
                                    height: 44,
                                    className: "object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                                lineNumber: 91,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                        lineNumber: 34,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page4/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
function Page5() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full py-20 md:py-30 -mt-20 md:-mt-36 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/page5line2Img.png",
                    alt: "Deep Background",
                    fill: true,
                    className: "object-contain translate-x-22 md:translate-x-152.5 -translate-y-0 md:-translate-y-0 opacity-100",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "relative z-20 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#545454] mb-10 md:mb-30 px-4",
                children: "Admission Requirements"
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        width: 1600,
                        height: 1400,
                        src: "/images/page5lineImg.png",
                        alt: "Deep Background",
                        className: "object-contain absolute w-[187px] left-[330px] top-[28px]"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-20 max-w-4xl mx-auto h-[400px] md:h-[500px] px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-5 flex items-center gap-2 md:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/page4dotImg.png",
                                        alt: "Dot",
                                        width: 36,
                                        height: 36,
                                        className: "md:w-[44px] md:h-[44px]"
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl text-[#000000] max-w-[220px] md:max-w-xs",
                                        style: {
                                            fontFamily: "DM Sans"
                                        },
                                        children: "Academic Transcripts (Minimum GPA Varies)"
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                lineNumber: 47,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[120px] md:top-[180px] left-6 md:left-14 flex items-center gap-2 md:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl text-[#000000] max-w-[200px] md:max-w-xs text-right",
                                        style: {
                                            fontFamily: "DM Sans"
                                        },
                                        children: [
                                            "IELTS / PTE / TOEFL English",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 40
                                            }, this),
                                            " Test"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/page4dotImg.png",
                                        alt: "Dot",
                                        width: 36,
                                        height: 36,
                                        className: "md:w-[44px] md:h-[44px]"
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                lineNumber: 56,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[240px] md:top-[350px] right-6 md:right-[85px] flex items-center gap-2 md:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/page4dotImg.png",
                                        alt: "Dot",
                                        width: 36,
                                        height: 36,
                                        className: "md:w-[44px] md:h-[44px]"
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl text-[#000000] max-w-[220px] md:max-w-xs",
                                        style: {
                                            fontFamily: "DM Sans"
                                        },
                                        children: "Statement Of Purpose (SOP)"
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                lineNumber: 64,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-[40px] md:-bottom-[60px] left-0 md:-left-[20px] flex items-center gap-2 md:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl text-[#000000] max-w-[220px] md:max-w-xs text-right",
                                        style: {
                                            fontFamily: "DM Sans"
                                        },
                                        children: "Resume + Recommendation Letters (For Postgrad)"
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/page4dotImg.png",
                                        alt: "Dot",
                                        width: 36,
                                        height: 36,
                                        className: "md:w-[44px] md:h-[44px]"
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                lineNumber: 72,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-40 md:-bottom-52 right-[100px] md:right-[205px] flex items-center gap-2 md:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/page4dotImg.png",
                                        alt: "Dot",
                                        width: 36,
                                        height: 36,
                                        className: "md:w-[44px] md:h-[44px]"
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl text-[#000000]",
                                        style: {
                                            fontFamily: "DM Sans"
                                        },
                                        children: "Valid Passport"
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                                lineNumber: 80,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                        lineNumber: 45,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page5/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page6/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/SupportSection.tsx
__turbopack_context__.s([
    "default",
    ()=>Page6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
const supportItems = [
    "Free Counseling & Career Guidance",
    "University Shortlisting & Applications",
    "Visa Assistance",
    "Scholarship Guidance",
    "Pre-Departure Support"
];
function Page6() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full flex flex-col items-center mt-20 md:mt-40 py-12 md:py-16 px-4 sm:px-6 md:px-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 w-auto h-[300px] sm:h-[400px] md:h-[500px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/page6lineImg.png",
                    alt: "Deep2 Background",
                    fill: true,
                    className: "object-contain translate-x-20 sm:translate-x-60 md:translate-x-152.5 translate-y-0 sm:-translate-y-10 md:-translate-y-40 opacity-100",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page6/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page6/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "relative z-20 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#545454] text-center mb-12 md:mb-20 px-4",
                children: "How Edulinks Supports You"
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page6/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full max-w-6xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 sm:space-y-8 md:space-y-10 px-2 sm:px-6 md:px-0",
                        children: supportItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4 sm:gap-6 md:gap-11",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#37D7D9] mt-2"
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page6/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base sm:text-lg md:text-[22px] font-bold text-[#333] relative z-20",
                                        style: {
                                            fontFamily: "DM Sans"
                                        },
                                        children: item
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page6/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page6/page.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page6/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/page6Img.png",
                            alt: "Support Illustration",
                            width: 350,
                            height: 350,
                            className: "relative z-20 object-contain sm:w-[300px] sm:h-[220px] md:w-[350px] md:h-[350px]",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page6/page.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page6/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page6/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page6/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const faqs = [
    {
        question: "Is IELTS mandatory to study in Australia?",
        answer: "No, IELTS is not always mandatory to study in Australia — but proof of English language proficiency is usually required. Most universities accept IELTS, PTE Academic, TOEFL iBT, or Cambridge English tests."
    },
    {
        question: "What are the cheapest universities in Australia?",
        answer: "EduLinks is designed for students, parents, and professionals seeking guidance in education, career, and skill development."
    },
    {
        question: "Can I work full-time on a student visa?",
        answer: "EduLinks combines personalized AI guidance, expert mentorship, and community support, making it unique compared to traditional edtech platforms."
    },
    {
        question: "How much money do I need to show for my visa?",
        answer: "Yes, the career test is backed by scientific methods and AI insights, ensuring reliable recommendations for students."
    }
];
function Page7() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 w-auto h-[500px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/page6lineImg.png",
                    alt: "Deep2 Background",
                    fill: true,
                    className: "object-contain translate-x-151.5 translate-y-1170 opacity-100",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "relative z-20 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4",
                        style: {
                            fontFamily: "Space Grotesk"
                        },
                        children: [
                            "Frequently asked ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                                lineNumber: 54,
                                columnNumber: 28
                            }, this),
                            " questions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "relative z-20 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed",
                        style: {
                            fontFamily: "DM Sans"
                        },
                        children: [
                            "From visas to scholarships, everything you need to",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            "know about studying in Australia."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 space-y-5",
                children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-cyan-100 rounded-xl py-6 sm:py-8 cursor-pointer transition shadow-sm -translate-x-10",
                        onClick: ()=>toggleFAQ(index),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium px-4 text-lg sm:text-xl md:text-2xl text-gray-900 flex-1 break-words",
                                        style: {
                                            fontFamily: "Space Grotesk"
                                        },
                                        children: faq.question
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    openIndex === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChevronCircleUp"], {
                                        className: "text-[#37D7D9] w-6 sm:w-7 md:w-8 h-auto mr-4 transition-transform duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChevronCircleDown"], {
                                        className: "text-[#37D7D9] w-6 sm:w-7 md:w-8 h-auto mr-4 transition-transform duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `transition-all duration-500 overflow-hidden ${openIndex === index ? "max-h-96 mt-2" : "max-h-0"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 px-4 text-sm sm:text-base",
                                    style: {
                                        fontFamily: "DM Sans"
                                    },
                                    children: faq.answer
                                }, void 0, false, {
                                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPage/Page7/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Mfooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function Mfooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white max-w-6xl mx-auto px-6 py-10 mt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mx-auto scale-121",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/MfooterImg.png",
                        alt: "Overlay",
                        width: 1000,
                        height: 1000,
                        className: "w-[900px] h-auto object-contain -translate-y-20"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white relative z-20 max-w-6xl mx-auto px-12 -mt-30 grid grid-cols-2 gap-10",
                style: {
                    fontFamily: "DM Sans"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg mb-1",
                                children: "Quick Links"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/home",
                                            className: "hover:text-cyan-600",
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/about",
                                            className: "hover:text-cyan-600",
                                            children: "About Us"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/study-destinations",
                                            className: "hover:text-cyan-600",
                                            children: "Study Destinations"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/services",
                                            className: "hover:text-cyan-600",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/contact",
                                            className: "hover:text-cyan-600",
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg mb-1",
                                children: "Study Destinations"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/destinations/germany",
                                            className: "hover:text-cyan-600",
                                            children: "Germany"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/destinations/canada",
                                            className: "hover:text-cyan-600",
                                            children: "Canada"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/destinations/australia",
                                            className: "hover:text-cyan-600",
                                            children: "Australia"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/destinations/usa",
                                            className: "hover:text-cyan-600",
                                            children: "United States"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/destinations/uk",
                                            className: "hover:text-cyan-600",
                                            children: "United Kingdom"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/destinations/nz",
                                            className: "hover:text-cyan-600",
                                            children: "New Zealand"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white -mt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg mb-1",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/services/student-visa",
                                            className: "hover:text-cyan-600",
                                            children: "Student Visa"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/services/career-guidance",
                                            className: "hover:text-cyan-600",
                                            children: "Personalised Career Guidance"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/services/ai-jackpot",
                                            className: "hover:text-cyan-600",
                                            children: "Edulinks AI Jackpot"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/services/scholarship",
                                            className: "hover:text-cyan-600",
                                            children: "Scholarship Assessment"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/services/loan",
                                            className: "hover:text-cyan-600",
                                            children: "Loan Guidance"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/services/post-landing",
                                            className: "hover:text-cyan-600",
                                            children: "Post Landing Services"
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " bg-white flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-semibold -translate-y-5 -translate-x-7",
                                children: "Follow us on"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col text-lg -translate-x-7 gap-y-7 text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFacebookF"], {}, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 27
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaInstagram"], {}, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 27
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaXTwitter"], {}, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 27
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTiktok"], {}, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 27
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaYoutube"], {}, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 27
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white relative z-20 max-w-6xl mx-auto px-6 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t-2 border-gray-200"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-between mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/eduLogo.png",
                                alt: "EduLinks",
                                className: "w-40 mb-4"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white flex flex-row gap-x-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiPhone"], {
                                                size: 20,
                                                className: "text-black"
                                            }, void 0, false, {
                                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "+64 27 326 3612"
                                            }, void 0, false, {
                                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdOutlineEmail"], {
                                                size: 20,
                                                className: "text-black"
                                            }, void 0, false, {
                                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "admin@edulinks.io"
                                            }, void 0, false, {
                                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                lineNumber: 117,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-t-2 mt-2 border-gray-200"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white flex flex-col justify-between items-center text-gray-500 text-sm mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-8 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        children: "Terms & Conditions"
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold",
                                children: "© 2025 EduLinks. All Rights Reserved."
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/edulinks-websitenew/edulinks-website/src/components/CountryPageMobile/Page0M/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page0M
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$src$2f$components$2f$HomePageMobile$2f$Mfooter$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/src/components/HomePageMobile/Mfooter/page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Page0M() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "below-header",
                className: "fixed flex flex-col bg-[#DFFFFF] items-center justify-center px-8 py-55 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center -mt-30 relative z-20 max-w-6xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-[#545454] leading-snug",
                            style: {
                                fontFamily: "Space Grotesk"
                            },
                            children: "Study in Australia"
                        }, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPageMobile/Page0M/page.tsx",
                            lineNumber: 15,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#6F6F6F] pt-8 px-5 text-md leading-relaxed text-center",
                            style: {
                                fontFamily: "DM Sans"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-base sm:text-lg",
                                children: "Unlock your future with globally recognized degrees, vibrant student life, and career pathways in one of the world’s most welcoming countries."
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPageMobile/Page0M/page.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPageMobile/Page0M/page.tsx",
                            lineNumber: 22,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            width: 600,
                            height: 400,
                            src: "/images/kangarooImg.png",
                            alt: "kangaroo",
                            className: "w-[200px] absolute -bottom-[150px] -right-[60px]"
                        }, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPageMobile/Page0M/page.tsx",
                            lineNumber: 30,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-2 rounded-full font-bold bg-[#37D7D9] text-white text-md shadow-lg shadow-gray-300",
                                    children: "Start Exploring"
                                }, void 0, false, {
                                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPageMobile/Page0M/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPageMobile/Page0M/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPageMobile/Page0M/page.tsx",
                            lineNumber: 39,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPageMobile/Page0M/page.tsx",
                    lineNumber: 14,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPageMobile/Page0M/page.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 640,
                    position: "relative",
                    zIndex: 50,
                    borderTopLeftRadius: "50px",
                    borderTopRightRadius: "50px",
                    boxShadow: "0 -4px 21px rgba(0, 0, 0, 0.1)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$src$2f$components$2f$HomePageMobile$2f$Mfooter$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPageMobile/Page0M/page.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/CountryPageMobile/Page0M/page.tsx",
                lineNumber: 49,
                columnNumber: 6
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=edulinks-websitenew_edulinks-website_src_components_b77a8f1e._.js.map