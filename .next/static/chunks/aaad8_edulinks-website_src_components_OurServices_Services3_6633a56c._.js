(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page0/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Slide4Page0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Slide4Page0() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const placeholderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [buttonTop, setButtonTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const FADE_HEIGHT = 40;
    const FADE_COLOR = "#ffffff";
    const SCROLL_THRESHOLD = 6;
    const [showBottomFade, setShowBottomFade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slide4Page0.useEffect": ()=>{
            const section = sectionRef.current;
            const placeholder = placeholderRef.current;
            if (!section || !placeholder) return;
            const updatePosition = {
                "Slide4Page0.useEffect.updatePosition": ()=>{
                    const rect = placeholder.getBoundingClientRect();
                    setButtonTop(rect.top + window.scrollY);
                }
            }["Slide4Page0.useEffect.updatePosition"];
            updatePosition();
            window.addEventListener("resize", updatePosition);
            const fadeDistance = 100;
            let rafId = null;
            const onScrollForButtons = {
                "Slide4Page0.useEffect.onScrollForButtons": ()=>{
                    if (rafId) cancelAnimationFrame(rafId);
                    rafId = requestAnimationFrame({
                        "Slide4Page0.useEffect.onScrollForButtons": ()=>{
                            const rect = section.getBoundingClientRect();
                            if (rect.top > 0) {
                                setOpacity(1);
                            } else {
                                const scrolledPast = Math.min(-rect.top, fadeDistance);
                                const newOpacity = Math.max(0, 1 - scrolledPast / fadeDistance);
                                setOpacity(newOpacity);
                            }
                        }
                    }["Slide4Page0.useEffect.onScrollForButtons"]);
                }
            }["Slide4Page0.useEffect.onScrollForButtons"];
            onScrollForButtons();
            window.addEventListener("scroll", onScrollForButtons, {
                passive: true
            });
            return ({
                "Slide4Page0.useEffect": ()=>{
                    window.removeEventListener("resize", updatePosition);
                    window.removeEventListener("scroll", onScrollForButtons);
                    if (rafId) cancelAnimationFrame(rafId);
                }
            })["Slide4Page0.useEffect"];
        }
    }["Slide4Page0.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slide4Page0.useEffect": ()=>{
            let lastY = window.scrollY || 0;
            let raf = 0;
            const onScrollDir = {
                "Slide4Page0.useEffect.onScrollDir": ()=>{
                    if (raf) cancelAnimationFrame(raf);
                    raf = requestAnimationFrame({
                        "Slide4Page0.useEffect.onScrollDir": ()=>{
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
                        }
                    }["Slide4Page0.useEffect.onScrollDir"]);
                }
            }["Slide4Page0.useEffect.onScrollDir"];
            window.addEventListener("scroll", onScrollDir, {
                passive: true
            });
            return ({
                "Slide4Page0.useEffect": ()=>{
                    window.removeEventListener("scroll", onScrollDir);
                    if (raf) cancelAnimationFrame(raf);
                }
            })["Slide4Page0.useEffect"];
        }
    }["Slide4Page0.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "below-header",
        ref: sectionRef,
        className: "relative flex flex-col md:flex-row bg-[#DFFFFF] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-30 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute bottom-0 left-0 w-full pointer-events-none transition-opacity duration-300 ease-in-out",
                style: {
                    height: "".concat(FADE_HEIGHT, "px"),
                    background: "linear-gradient(to top, ".concat(FADE_COLOR, ", rgba(255,255,255,0))"),
                    opacity: showBottomFade ? 1 : 0,
                    zIndex: 10
                }
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page0/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center relative z-20 max-w-6xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-3xl md:text-4xl font-bold text-[#545454] leading-snug",
                        style: {
                            fontFamily: "Space Grotesk"
                        },
                        children: "AI Guidance & Counselor Support"
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page0/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#6F6F6F] pt-6 sm:pt-8 text-base sm:text-lg leading-relaxed text-center",
                        style: {
                            fontFamily: "DM Sans"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-base sm:text-lg",
                                children: "Get instant, data-driven support for your entire study-abroad journey. The Edulinks AI Counselor helps you with"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page0/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-base sm:text-lg",
                                children: "everything — from university shortlisting and visa queries to scholarship advice — all available 24/7 with"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page0/page.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-base sm:text-lg",
                                children: "accurate, personalized guidance that feels human but works faster."
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page0/page.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page0/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "floating-buttons",
                        ref: placeholderRef,
                        className: "pt-12 opacity-0 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-6 py-3 rounded-full bg-[#37D7D9] text-white font-medium shadow-md",
                                children: "Book Online Counselling"
                            }, void 0, false, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page0/page.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page0/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page0/page.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page0/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: "".concat(buttonTop + 70, "px"),
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity,
                    transition: "opacity 0.01s linear",
                    pointerEvents: opacity === 0 ? "none" : "auto",
                    zIndex: 50
                },
                className: "flex gap-4 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-6 py-2.5 translate-y-8 rounded-full text-white bg-[#37D7D9] font-medium hover:bg-[#00B7C1] hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out",
                    children: "Start Exploring"
                }, void 0, false, {
                    fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page0/page.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page0/page.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page0/page.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(Slide4Page0, "bExtdC3P34z0PkMjVVG/2cFuCaI=");
_c = Slide4Page0;
var _c;
__turbopack_context__.k.register(_c, "Slide4Page0");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Slide4Page1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/edulinks-websitenew/edulinks-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const steps = [
    {
        image: "/images/slide4page1Img1.png",
        title: "Smart University & Course Recommendations",
        description: "Our AI Counselor analyzes your academic profile, goals, and budget to recommend the universities and programs that best fit your aspirations.",
        side: "right",
        titlePosition: "absolute top-37 left-1/2 ml-12 w-[40%]",
        descriptionPosition: "absolute top-49 left-1/2 ml-12 w-[40%]"
    },
    {
        image: "/images/slide4page1Img2.png",
        title: "Instant Visa & Scholarship Guidance",
        description: "Get real-time answers to your questions about visa processes, eligibility, and available scholarships for your target countries.",
        side: "left",
        titlePosition: "absolute top-37 right-1/2 mr-12 w-[40%] text-right",
        descriptionPosition: "absolute top-49 right-1/2 mr-12 w-[40%] text-right"
    },
    {
        image: "/images/slide4page1Img3.png",
        title: "Personalized Application Support",
        description: "Receive step-by-step assistance with documentation, SOP writing, and application timelines — customized to your study plans.",
        side: "right",
        titlePosition: "absolute top-37 left-1/2 ml-12 w-[40%]",
        descriptionPosition: "absolute top-49 left-1/2 ml-12 w-[40%]"
    },
    {
        image: "/images/slide4page1Img4.png",
        title: "24/7 Chat Support",
        description: "No waiting for appointments. Chat anytime with our AI Counselor to get instant advice and resolve your study-abroad questions on demand.",
        side: "left",
        titlePosition: "absolute top-37 right-1/2 mr-12 w-[40%] text-right",
        descriptionPosition: "absolute top-49 right-1/2 mr-12 w-[40%] text-right"
    }
];
// 👇 control floating here
const FLOAT_START_OFFSET = 150; // px from section top where floating begins
const FLOAT_END_OFFSET = 50; // px from section bottom where floating ends
function Slide4Page1() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [lineHeight, setLineHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [floatState, setFloatState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("top");
    // update lineHeight based on current section content/size
    const updateLineHeight = ()=>{
        if (!sectionRef.current) return;
        // use scrollHeight so absolutely positioned inner content is accounted for
        const newHeight = Math.max(sectionRef.current.scrollHeight, sectionRef.current.clientHeight, 300);
        setLineHeight(newHeight);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slide4Page1.useEffect": ()=>{
            var _sectionRef_current;
            updateLineHeight();
            // update on resize
            const onResize = {
                "Slide4Page1.useEffect.onResize": ()=>{
                    updateLineHeight();
                }
            }["Slide4Page1.useEffect.onResize"];
            window.addEventListener("resize", onResize);
            var _sectionRef_current_querySelectorAll;
            // update when fonts/images load (images inside the section)
            const imgs = (_sectionRef_current_querySelectorAll = (_sectionRef_current = sectionRef.current) === null || _sectionRef_current === void 0 ? void 0 : _sectionRef_current.querySelectorAll("img")) !== null && _sectionRef_current_querySelectorAll !== void 0 ? _sectionRef_current_querySelectorAll : [];
            const handleImgLoad = {
                "Slide4Page1.useEffect.handleImgLoad": ()=>updateLineHeight()
            }["Slide4Page1.useEffect.handleImgLoad"];
            imgs.forEach({
                "Slide4Page1.useEffect": (img)=>{
                    if (img.complete) return;
                    img.addEventListener("load", handleImgLoad);
                    img.addEventListener("error", handleImgLoad);
                }
            }["Slide4Page1.useEffect"]);
            // ResizeObserver to react to changes in section size/content
            let ro = null;
            if (sectionRef.current && typeof ResizeObserver !== "undefined") {
                ro = new ResizeObserver({
                    "Slide4Page1.useEffect": ()=>{
                        updateLineHeight();
                    }
                }["Slide4Page1.useEffect"]);
                ro.observe(sectionRef.current);
            }
            return ({
                "Slide4Page1.useEffect": ()=>{
                    window.removeEventListener("resize", onResize);
                    imgs.forEach({
                        "Slide4Page1.useEffect": (img)=>{
                            img.removeEventListener("load", handleImgLoad);
                            img.removeEventListener("error", handleImgLoad);
                        }
                    }["Slide4Page1.useEffect"]);
                    if (ro && sectionRef.current) ro.unobserve(sectionRef.current);
                }
            })["Slide4Page1.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Slide4Page1.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slide4Page1.useEffect": ()=>{
            // floatState is determined by the section position relative to scroll
            const handleScroll = {
                "Slide4Page1.useEffect.handleScroll": ()=>{
                    if (!sectionRef.current) return;
                    const rect = sectionRef.current.getBoundingClientRect();
                    // compute top/bottom relative to document
                    const sectionTop = rect.top + window.scrollY;
                    const sectionBottom = sectionTop + rect.height;
                    const scrollY = window.scrollY;
                    if (scrollY < sectionTop + FLOAT_START_OFFSET) {
                        setFloatState("top"); // before float
                    } else if (scrollY > sectionBottom - FLOAT_END_OFFSET) {
                        setFloatState("bottom"); // after float
                    } else {
                        setFloatState("float"); // floating
                    }
                }
            }["Slide4Page1.useEffect.handleScroll"];
            // initial and bind
            handleScroll();
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            window.addEventListener("resize", handleScroll);
            return ({
                "Slide4Page1.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", handleScroll);
                }
            })["Slide4Page1.useEffect"];
        }
    }["Slide4Page1.useEffect"], []);
    // small helper for teal bottom position: clamp to >= 0
    const tealBottomTop = Math.max(0, lineHeight - 300);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "how-it-works",
        ref: sectionRef,
        className: "relative py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl md:text-4xl font-bold text-center text-[#545454] mb-16",
                style: {
                    fontFamily: "DM Sans"
                },
                children: "How it Works?"
            }, void 0, false, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-6xl mx-auto px-4 md:px-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-0 -translate-x-1/2 border-r-3 border-gray-400",
                        // use a numeric px height so it's stable across breakpoints
                        style: {
                            height: "".concat(lineHeight, "px"),
                            transition: "height 220ms ease"
                        }
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    floatState === "top" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 -translate-x-1/2",
                        style: {
                            top: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TealLine, {}, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this),
                    floatState === "float" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed left-1/2 top-0 -translate-x-1/2 z-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TealLine, {}, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    floatState === "bottom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 -translate-x-1/2",
                        style: {
                            top: tealBottomTop
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TealLine, {}, void 0, false, {
                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col relative",
                        style: {
                            gap: "5.5rem"
                        },
                        children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full min-h-[160px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute z-20 top-15 ".concat(step.side === "left" ? "left-[43%] -translate-x-1/2" : "right-[43%] translate-x-1/2"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: step.image,
                                            alt: step.title,
                                            className: "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain",
                                            // ensure height recalculation after image load
                                            onLoad: ()=>{
                                                // small microtask to allow layout to settle
                                                setTimeout(()=>{
                                                    if (sectionRef.current) {
                                                        setLineHeight(Math.max(sectionRef.current.scrollHeight, sectionRef.current.clientHeight, 300));
                                                    }
                                                }, 30);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-700 ".concat(step.titlePosition),
                                        style: {
                                            fontFamily: "Space Grotesk"
                                        },
                                        children: step.title
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm md:text-base text-[#6F6F6F] leading-relaxed ".concat(step.descriptionPosition),
                                        style: {
                                            fontFamily: "DM Sans"
                                        },
                                        children: step.description
                                    }, void 0, false, {
                                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s(Slide4Page1, "kx9ax6KlxZ97wUb9cdj5mloFYks=");
_c = Slide4Page1;
// ✅ reusable teal line component
function TealLine() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[6px] h-[300px] bg-[#37D7D9] rounded-full relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$edulinks$2d$websitenew$2f$edulinks$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-1/2 -translate-x-1/2 w-[20px] h-36 bg-gradient-to-b from-white to-transparent"
        }, void 0, false, {
            fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
            lineNumber: 234,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/edulinks-websitenew/edulinks-website/src/components/OurServices/Services3/Slide4Page1/page.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
_c1 = TealLine;
var _c, _c1;
__turbopack_context__.k.register(_c, "Slide4Page1");
__turbopack_context__.k.register(_c1, "TealLine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=aaad8_edulinks-website_src_components_OurServices_Services3_6633a56c._.js.map