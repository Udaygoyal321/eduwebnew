(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU71/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TU71
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TU71() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const placeholderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [buttonTop, setButtonTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const FADE_HEIGHT = 80;
    const FADE_COLOR = "#ffffff";
    const SCROLL_THRESHOLD = 6;
    const [showBottomFade, setShowBottomFade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TU71.useEffect": ()=>{
            const section = sectionRef.current;
            const placeholder = placeholderRef.current;
            if (!section || !placeholder) return;
            const updatePosition = {
                "TU71.useEffect.updatePosition": ()=>{
                    const rect = placeholder.getBoundingClientRect();
                    setButtonTop(rect.top + window.scrollY);
                }
            }["TU71.useEffect.updatePosition"];
            updatePosition();
            window.addEventListener("resize", updatePosition);
            const fadeDistance = 100;
            let rafId = null;
            const onScrollForButtons = {
                "TU71.useEffect.onScrollForButtons": ()=>{
                    if (rafId) cancelAnimationFrame(rafId);
                    rafId = requestAnimationFrame({
                        "TU71.useEffect.onScrollForButtons": ()=>{
                            const rect = section.getBoundingClientRect();
                            if (rect.top > 0) {
                                setOpacity(1);
                            } else {
                                const scrolledPast = Math.min(-rect.top, fadeDistance);
                                const newOpacity = Math.max(0, 1 - scrolledPast / fadeDistance);
                                setOpacity(newOpacity);
                            }
                        }
                    }["TU71.useEffect.onScrollForButtons"]);
                }
            }["TU71.useEffect.onScrollForButtons"];
            onScrollForButtons();
            window.addEventListener("scroll", onScrollForButtons, {
                passive: true
            });
            return ({
                "TU71.useEffect": ()=>{
                    window.removeEventListener("resize", updatePosition);
                    window.removeEventListener("scroll", onScrollForButtons);
                    if (rafId) cancelAnimationFrame(rafId);
                }
            })["TU71.useEffect"];
        }
    }["TU71.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TU71.useEffect": ()=>{
            let lastY = window.scrollY || 0;
            let raf = 0;
            const onScrollDir = {
                "TU71.useEffect.onScrollDir": ()=>{
                    if (raf) cancelAnimationFrame(raf);
                    raf = requestAnimationFrame({
                        "TU71.useEffect.onScrollDir": ()=>{
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
                    }["TU71.useEffect.onScrollDir"]);
                }
            }["TU71.useEffect.onScrollDir"];
            window.addEventListener("scroll", onScrollDir, {
                passive: true
            });
            return ({
                "TU71.useEffect": ()=>{
                    window.removeEventListener("scroll", onScrollDir);
                    if (raf) cancelAnimationFrame(raf);
                }
            })["TU71.useEffect"];
        }
    }["TU71.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "below-header",
        ref: sectionRef,
        className: "relative flex flex-col md:flex-row bg-[#DFFFFF] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-30 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute bottom-0 left-0 w-full pointer-events-none transition-opacity duration-300 ease-in-out",
                style: {
                    height: "".concat(FADE_HEIGHT, "px"),
                    background: "linear-gradient(to top, ".concat(FADE_COLOR, ", rgba(255,255,255,0))"),
                    opacity: showBottomFade ? 1 : 0,
                    zIndex: 10
                }
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU71/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center relative z-20 max-w-6xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-3xl md:text-4xl font-bold text-[#545454] leading-snug",
                        style: {
                            fontFamily: "Space Grotesk"
                        },
                        children: "King's College London (KCL)"
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU71/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#6F6F6F] text-md leading-relaxed text-center",
                        style: {
                            fontFamily: "DM Sans"
                        },
                        children: "London, England, United Kingdom"
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU71/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#6F6F6F] pt-6 leading-relaxed  px-15 text-center",
                        style: {
                            fontFamily: "DM Sans"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-lg",
                            children: "Founded in 1829, King's College London (KCL) is one of the UK's oldest and most prestigious universities. A member of the Russell Group, KCL is globally recognized for excellence in teaching and research, particularly in health sciences, law, business, and humanities. It is consistently ranked among the top 35 universities in the world."
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU71/page.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU71/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "floating-buttons",
                        ref: placeholderRef,
                        className: "pt-12 opacity-0 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-6 py-3 rounded-full bg-[#37D7D9] text-white font-medium shadow-md",
                                children: "Apply Now"
                            }, void 0, false, {
                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU71/page.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU71/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU71/page.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU71/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                className: "flex gap-4 pt-5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-10 py-2.5 rounded-full text-white bg-[#37D7D9] font-medium hover:bg-[#00B7C1] hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out",
                    children: "Apply Now"
                }, void 0, false, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU71/page.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU71/page.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU71/page.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(TU71, "bExtdC3P34z0PkMjVVG/2cFuCaI=");
_c = TU71;
var _c;
__turbopack_context__.k.register(_c, "TU71");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU72/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Overview.tsx
__turbopack_context__.s([
    "default",
    ()=>TU72
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function TU72() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-full py-12 px-40 mt-30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 items-center gap-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center md:text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl lg:text-4xl font-bold text-[#545454] mb-12",
                            children: "Overview"
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU72/page.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#000000] mb-16 md:text-2xl whitespace-nowrap",
                            style: {
                                fontFamily: "DM Sans"
                            },
                            children: [
                                "King's offers over 300 undergraduate and postgraduate ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU72/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 69
                                }, this),
                                "programs across its nine faculties. Located in the heart of ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU72/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 18
                                }, this),
                                "London, KCL provides an inspiring academic environment ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU72/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 78
                                }, this),
                                "and excellent industry connections with global employers.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU72/page.tsx",
                                    lineNumber: 18,
                                    columnNumber: 36
                                }, this),
                                " The university's research-led approach fosters innovation",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU72/page.tsx",
                                    lineNumber: 18,
                                    columnNumber: 99
                                }, this),
                                " and leadership in every discipline."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU72/page.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-[#37D7D9] text-xl text-white font-bold px-12 py-3 rounded-full shadow-lg shadow-gray-400 transition-all",
                            children: "See More"
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU72/page.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU72/page.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-2 w-full flex justify-end md:justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/tu7nz7Img.png",
                        alt: "Macquarie University",
                        width: 400,
                        height: 300,
                        className: "object-contain w-auto h-auto max-w-full",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU72/page.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU72/page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU72/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU72/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = TU72;
var _c;
__turbopack_context__.k.register(_c, "TU72");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU73/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TU73
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
const points = [
    {
        text: "Ranked #40 in QS World University Rankings 2024.",
        style: "absolute left-[-15%] top-[23%] w-[30%] text-center"
    },
    {
        text: "Top 10 in the world for nursing, dentistry, and law.",
        style: "absolute left-[10%] top-[-6%] w-[30%] text-center"
    },
    {
        text: "Located in central London with five campuses along the River Thames.",
        style: "absolute left-[52%] top-[20%] w-[30%] text-center"
    },
    {
        text: "Over 33,000 students, including 14,000 international students from 150+ countries.",
        style: "absolute left-[37%] top-[75%] w-[30%] text-center"
    },
    {
        text: "Strong partnerships with organizations such as the NHS, UNESCO, and BBC.",
        style: "absolute right-[-10%] top-[60%] w-[30%] text-center"
    }
];
function TU73() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full flex flex-col items-center py-10 mt-30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center",
                children: "Why King's College London?"
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU73/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-[1000px] h-auto aspect-[1000/400]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/tu2Img.png",
                        alt: "Timeline line",
                        fill: true,
                        className: "object-contain",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU73/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    points.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#000000] text-xs sm:text-sm md:text-base ".concat(point.style),
                            children: point.text
                        }, index, false, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU73/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU73/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU73/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = TU73;
var _c;
__turbopack_context__.k.register(_c, "TU73");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TU74
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ITEMS = [
    {
        id: 1,
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Faculty of Health and Life ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                    lineNumber: 8,
                    columnNumber: 48
                }, ("TURBOPACK compile-time value", void 0)),
                "Sciences"
            ]
        }, void 0, true)
    },
    {
        id: 2,
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Faculty of Law"
        }, void 0, false)
    },
    {
        id: 3,
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Faculty of Natural and Mathematical",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                    lineNumber: 10,
                    columnNumber: 56
                }, ("TURBOPACK compile-time value", void 0)),
                " Sciences"
            ]
        }, void 0, true)
    },
    {
        id: 4,
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "King's Business Schoo"
        }, void 0, false)
    },
    {
        id: 5,
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Faculty of Arts and ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                    lineNumber: 12,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0)),
                "Humanitie"
            ]
        }, void 0, true)
    }
];
function TU74() {
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const toggle = (id)=>setSelected((s)=>s.includes(id) ? s.filter((x)=>x !== id) : [
                ...s,
                id
            ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mt-20 mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl md:text-4xl font-bold text-[#545454]",
                    children: "Popular Courses"
                }, void 0, false, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-5 gap-6 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "col-span-1 mt-20 px-18 pt-16 pb-70 w-[430px] sticky top-0 overflow-hidden",
                            style: {
                                backgroundColor: "#DFFFFF"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: ITEMS.map((it)=>{
                                    const isChecked = selected.includes(it.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "relative flex justify-center items-center cursor-pointer shrink-0 -ml-4 -mt-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        className: "peer sr-only",
                                                        checked: isChecked,
                                                        onChange: ()=>toggle(it.id)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-7 h-7 rounded-md border-2 transition-all flex items-center justify-center ".concat(isChecked ? "border-transparent bg-[#37D7D9]" : "bg-white border-white"),
                                                        "aria-hidden": true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4 transform ".concat(isChecked ? "opacity-100 scale-100" : "opacity-0 scale-75"),
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "white",
                                                            strokeWidth: "3",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "20 6 9 17 4 12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                lineNumber: 73,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-lg leading-6 text-black font-medium",
                                                        children: it.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2 mt-6 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                lineNumber: 79,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, it.id, true, {
                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "col-span-4 mt-28 ml-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-5 gap-4 items-center mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-base font-bold text-[#545454]",
                                            children: "Duration"
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-base font-bold text-[#545454]",
                                            children: "Tuition Fee"
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-base font-bold text-[#545454]",
                                            children: "Requirement"
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-base font-bold text-[#545454]",
                                            children: "Intake"
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        ...selected
                                    ].sort((a, b)=>a - b).map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-10",
                                            children: [
                                                id === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-5 gap-4 items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-span-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold",
                                                                        children: "BSc Nursing"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                        lineNumber: 118,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 117,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "3 years (full-time)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 122,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "GBP 32,000/year"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 125,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "High School (Biology/Chemistry) + IELTS 7.0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "Intake: September"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-5 gap-4 items-start mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-span-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold",
                                                                        children: "MSc Global Health"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "1 Years (Full-Time)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "GBP 34,000/year"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "Bachelor's in Health + IELTS 7.0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "Intake: September"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 152,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 mt-6 flex justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                id === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-5 gap-4 items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-span-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold",
                                                                        children: "LLB Bachelor of Laws"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "3 years (full-time)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "GBP 29,000/year"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 175,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "A-levels/IB + IELTS 7.0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "Intake: September"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-5 gap-4 items-start mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-span-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold",
                                                                        children: "LLM Master of Laws"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                        lineNumber: 188,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 187,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "1 year (full-time)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "GBP 31,000/year"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "Bachelor's in Law + IELTS 7.0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 196,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "Intake: September"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 199,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 mt-6 flex justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                id === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-5 gap-4 items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-span-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold",
                                                                        children: "BSc Computer Science"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "3 Years (Full-Time)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "GBP 31,000/year"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "A-levels (Maths) + IELTS 7.0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "Intake: September"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-5 gap-4 items-start mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-span-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold",
                                                                        children: "MSc Data Science"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                        lineNumber: 235,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "1 Years (Full-Time)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "GBP 33,000/year"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "Bachelor's in CS/Maths + IELTS 7.0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "Intake: September"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 248,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 mt-6 flex justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                id === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-5 gap-4 items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-span-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold",
                                                                        children: "BSc International Management"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 263,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "3 years (full-time)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "GBP 30,000/year"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "High School + IELTS 7.0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "Intake: September"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-5 gap-4 items-start mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-span-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold",
                                                                        children: "MSc Finance and Accounting"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                        lineNumber: 284,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "1 years (full-time)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 286,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "GBP 33,000/year"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 289,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "Bachelor's in Business/Economics + IELTS 7.0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "September"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 mt-6 flex justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                id === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-5 gap-4 items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-span-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold",
                                                                        children: "BA English"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                        lineNumber: 311,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "3 years (full-time)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "GBP 28,000/year"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "A-levels/IB + IELTS 7.0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 321,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "Intake: September"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 324,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-5 gap-4 items-start mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-span-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold",
                                                                        children: "MA International Relations"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                        lineNumber: 331,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "1 years (full-time)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "GBP 30,000/year"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 336,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "Bachelor's in Humanities/Social Science + IELTS 7.0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 339,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-[#545454] flex items-center",
                                                                    children: "September"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                    lineNumber: 342,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 mt-6 flex justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, id, true, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            "  "
        ]
    }, void 0, true, {
        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU74/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(TU74, "lGSfRvmoWXlCcuuisg7PtZk/Isc=");
_c = TU74;
var _c;
__turbopack_context__.k.register(_c, "TU74");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/why-engineering/page.tsx
__turbopack_context__.s([
    "default",
    ()=>TU75
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
const REASONS = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/images/mcpage1Img1.svg",
            alt: "icon-university",
            width: 40,
            height: 40,
            className: "w-13 h-13"
        }, void 0, false, {
            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        text: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Strand Campus - Home to humanities, law, and social sciences."
        }, void 0, false)
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/images/mcpage1Img2.svg",
            alt: "icon-graduates",
            width: 40,
            height: 40,
            className: "w-13 h-13"
        }, void 0, false, {
            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        text: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Guy's and St Thomas' Campuses - Focused on medicine and health sciences."
        }, void 0, false)
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/images/mcpage1Img3.svg",
            alt: "icon-industry",
            width: 40,
            height: 40,
            className: "w-13 h-13"
        }, void 0, false, {
            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        text: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Waterloo and Denmark Hill Campuses - Dedicated to nursing, life sciences, and business."
        }, void 0, false)
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/images/mcpage1Img4.svg",
            alt: "icon-briefcase",
            width: 40,
            height: 40,
            className: "w-13 h-13"
        }, void 0, false, {
            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        text: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Modern libraries, innovation hubs, and collaborative spaces."
        }, void 0, false)
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/images/mcpage1Img4.svg",
            alt: "icon-briefcase",
            width: 40,
            height: 40,
            className: "w-13 h-13"
        }, void 0, false, {
            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        text: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Student housing and career development support across all campuses."
        }, void 0, false)
    }
];
function TU75() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto mt-25 max-w-screen-xl text-center -mb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454] mb-16",
                children: "Campus and Facilities"
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-screen-xl space-y-16",
                children: REASONS.map((item, i)=>{
                    const isEven = i % 2 === 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center w-full ".concat(isEven ? "md:justify-start" : "md:justify-end"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center w-full ".concat(isEven ? "md:justify-start text-left ml-30" : "md:justify-end text-left -mr-10"),
                            children: isEven ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 flex justify-center items-center ",
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-2xl text-[#545454]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl md:text-2xl px-6 font-bold leading-tight mr-30",
                                            children: item.text
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true) : // --- Right Side Icon + Text ---
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 flex justify-center items-center ",
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-2xl text-[#545454]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl px-6 md:text-2xl font-bold leading-tight mr-20",
                                            children: item.text
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
                            lineNumber: 110,
                            columnNumber: 15
                        }, this)
                    }, i, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU75/page.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_c = TU75;
var _c;
__turbopack_context__.k.register(_c, "TU75");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TU76
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function TU76() {
    const cards = [
        {
            title: "Global Community",
            body: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: "Students from 150+ countries."
            }, void 0, false)
        },
        {
            title: "Career Opportunities",
            body: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Strong industry ties and internships in ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                        lineNumber: 22,
                        columnNumber: 51
                    }, this),
                    "London."
                ]
            }, void 0, true)
        },
        {
            title: "Cultural Capita",
            body: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Study in one of the world's most dynamic",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                        lineNumber: 30,
                        columnNumber: 49
                    }, this),
                    " cities."
                ]
            }, void 0, true)
        },
        {
            title: "Innovation Hub",
            body: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Research and startup support through King's",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                        lineNumber: 38,
                        columnNumber: 54
                    }, this),
                    " Entrepreneurship Institute."
                ]
            }, void 0, true)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "px-6 py-12 mt-35",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1100px] mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-center text-4xl font-bold mb-18 text-[#545454]",
                    children: "Life at King's"
                }, void 0, false, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/cardtlImg.png",
                                    alt: "Card 1 background",
                                    width: 600,
                                    height: 220,
                                    className: "h-44 object-contain drop-shadow-xl"
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex flex-col justify-center px-8 items-start text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold mb-4 -mt-8",
                                            children: cards[0].title
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg leading-relaxed",
                                            children: cards[0].body
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative -mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/cardtrImg.png",
                                    alt: "Card 2 background",
                                    width: 600,
                                    height: 220,
                                    className: " h-48 object-contain drop-shadow-xl"
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex flex-col justify-center px-8 items-end text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl pt-5 font-bold mb-4 -mt-6",
                                            children: cards[1].title
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg leading-relaxed",
                                            children: cards[1].body
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/cardblImg.png",
                                    alt: "Card 3 background",
                                    width: 600,
                                    height: 220,
                                    className: "h-44 object-contain drop-shadow-xl"
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex flex-col justify-center px-8 items-start text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold mb-4 -mt-5",
                                            children: cards[2].title
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg leading-relaxed pb-5",
                                            children: cards[2].body
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative -mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/cardbrImg.png",
                                    alt: "Card 4 background",
                                    width: 600,
                                    height: 220,
                                    className: "h-48 object-contain drop-shadow-xl"
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex flex-col justify-center px-8 items-end text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold mb-4 -mt-8",
                                            children: cards[3].title
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg leading-relaxed",
                                            children: cards[3].body
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU76/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = TU76;
var _c;
__turbopack_context__.k.register(_c, "TU76");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/admission-requirements/page.tsx
__turbopack_context__.s([
    "default",
    ()=>TU77
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function TU77() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-white py-16 relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-16 relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-center relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center lg:justify-start ml-0 lg:ml-44",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-bold text-[#545454] leading-tight text-center lg:text-left",
                                children: [
                                    "Admission ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                        lineNumber: 16,
                                        columnNumber: 25
                                    }, this),
                                    " Requirements"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/admnreqImg1.png",
                                    alt: "Undergraduate Programs Requirements",
                                    width: 750,
                                    height: 500,
                                    className: "w-full max-w-[750px] h-auto object-contain",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-end items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mr-16 text-center text-xl text-black font-semibold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Undergraduate"
                                                }, void 0, false, {
                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Programs"
                                                }, void 0, false, {
                                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-white text-lg max-w-[380px] leading-relaxed mr-41",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            "Academic: A-levels / IB / equivalent",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                                                lineNumber: 43,
                                                                columnNumber: 59
                                                            }, this),
                                                            " international qualification"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            "Language: IELTS 7.0 (no band less than",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                                                lineNumber: 46,
                                                                columnNumber: 61
                                                            }, this),
                                                            " 6.5) / TOEFL 100"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                                        lineNumber: 45,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex justify-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/admnreqImg2.png",
                            alt: "Postgraduate Programs Requirements",
                            width: 850,
                            height: 500,
                            className: "w-full max-w-[850px] h-auto object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-start items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-black text-lg max-w-[410px] leading-relaxed ml-53",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "Academic: Bachelor's degree (Upper Second ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 62
                                                    }, this),
                                                    "Class or equivalent)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Language: IELTS 7.0 / TOEFL 100"
                                            }, void 0, false, {
                                                fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-21 text-center text-xl text-white font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Postgraduate"
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Programs"
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Eduweb/src/components/TopUnis/TopUniversityUk/TopUni7Uk/TU77/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = TU77;
var _c;
__turbopack_context__.k.register(_c, "TU77");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Eduweb_src_components_TopUnis_TopUniversityUk_TopUni7Uk_a8aeaf6e._.js.map