(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/page.tsx
__turbopack_context__.s([
    "default",
    ()=>Ai3Q2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Ai3Q2() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(25);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const options = [
        "High School (12th Grade)",
        "Undergraduate Student",
        "Bachelor’s Degree",
        "Master’s Degree",
        "PhD / Doctorate",
        "Professional Experience"
    ];
    const handleSelect = (idx)=>{
        setSelected((prev)=>prev === idx ? null : idx);
        setProgress(selected === idx ? 25 : 50);
    };
    const handleNext = (e)=>{
        e.preventDefault();
        router.push("/contactus/aiassistant/aitest3/ai3q1/ai3q2/ai3q3"); // 👈 Change this path to your next question page
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen w-full antialiased overflow-hidden",
        style: {
            backgroundColor: "#DFFFFF",
            backgroundAttachment: "fixed"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "hidden md:flex flex-col ml-30",
                style: {
                    width: "50vw",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-0 mt-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-[260px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/ai3q1Img.png",
                                alt: "career illustration",
                                width: 1020,
                                height: 220,
                                style: {
                                    objectFit: "contain"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 max-w-[550px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold mb-6 text-[#545454]",
                                children: "Career Assessment For Country_Name"
                            }, void 0, false, {
                                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base leading-tight font-medium text-[#545454]",
                                children: [
                                    "Help Us Understand Your Background To Create A Personalized ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 73
                                    }, this),
                                    "Career Test."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 max-w-[420px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-3 rounded-full bg-white/60 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full rounded-full",
                                            style: {
                                                width: "".concat(progress, "%"),
                                                backgroundColor: "#37D7D9"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-xs mt-2 font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "“You’re Doing Great — Let’s Complete Your Career Match!”",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Or Simply"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "-mt-4",
                                                children: [
                                                    progress,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-6 pb-12 mr-8",
                style: {
                    marginLeft: "54vw",
                    minHeight: "100vh",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[650px] mx-aut0 text-[#545454]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-4xl shadow-lg px-8 pt-10 pb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold mb-3",
                                        children: "Education Background"
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-medium mb-12",
                                        children: [
                                            "What Is Your Highest Level Of Education Or Current Field Of",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            " Study?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "space-y-4",
                                "aria-label": "Education background",
                                children: [
                                    options.map((opt, idx)=>{
                                        const isChecked = selected === idx;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            onClick: ()=>handleSelect(idx),
                                            className: "flex items-center justify-between w-full border border-[#37D7D9] rounded-xl px-5 py-3 cursor-pointer transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg font-semibold text-[#545454]",
                                                    children: opt
                                                }, void 0, false, {
                                                    fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 flex items-center justify-center h-9 w-9",
                                                    children: isChecked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCheckmarkCircle"], {
                                                        className: "text-[#37D7D9]",
                                                        style: {
                                                            width: "100%",
                                                            height: "100%"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-9 w-9 rounded-full border border-[#37D7D9]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, opt, true, {
                                            fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end mt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleNext,
                                            className: "flex items-center gap-3 bg-[#37D7D9] text-white text-xl font-black rounded-full px-6 py-2 shadow-md hover: cursor-pointer",
                                            children: [
                                                "Next ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowRightLong"], {}, void 0, false, {
                                                    fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 24
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest3/Ques3/Ai3Q2/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Ai3Q2, "Uc9dmQwo64KzRdBB0gSI/EW/3XU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Ai3Q2;
var _c;
__turbopack_context__.k.register(_c, "Ai3Q2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Ai3Q2M
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Ai3Q2M() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(25);
    const options = [
        "High School (12th Grade)",
        "Undergraduate Student",
        "Bachelor’s Degree",
        "Master’s Degree",
        "PhD / Doctorate",
        "Professional Experience"
    ];
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    function handleSelect(idx) {
        setSelected((prev)=>{
            const newSelected = prev === idx ? null : idx;
            setProgress(newSelected === null ? 25 : 50);
            return newSelected;
        });
    }
    function handleBack() {
        router.back();
    }
    function handleNext() {
        if (selected !== null) {
            router.push("/contactus/aiassistant/aitest3/ai3q1/ai3q2/ai3q3"); // replace with your actual route
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#DFFFFF] text-[#545454] flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-10 bg-[#DFFFFF]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-5 pb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center relative mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleBack,
                                    className: "absolute left-0 flex items-center justify-center w-8 h-8 text-[#545454]",
                                    "aria-label": "Go back",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowLeft"], {
                                        className: "text-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-center  text-[#545454] leading-tight",
                                    children: [
                                        "Career Assessment",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        "For Country_Name"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-center leading-6 font-medium max-w-[90%] mx-auto  text-[#545454]",
                            children: [
                                "Help Us Understand Your Background To Create A",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 59
                                }, this),
                                " Personalized Career Test."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 w-full max-w-[95%] mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-2 rounded-full bg-white/60 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full rounded-full",
                                        style: {
                                            width: "".concat(progress, "%"),
                                            backgroundColor: "#37D7D9"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-xs mt-2 font-medium px-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px]",
                                            children: [
                                                "“You’re Doing Great — Let’s Complete Your Career Match!”",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 73
                                                }, this),
                                                " Or Simply"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[12px] -mt-1",
                                            children: [
                                                progress,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex-1 w-full bg-white rounded-t-3xl shadow-lg px-5 pt-6 pb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-2",
                        children: "Education Background"
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base font-medium mb-6",
                        children: "What Is Your Highest Level Of Education Or Current Field Of Study?"
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "space-y-3",
                        "aria-label": "Education background",
                        children: [
                            options.map((opt, idx)=>{
                                const isChecked = selected === idx;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    onClick: ()=>handleSelect(idx),
                                    className: "flex items-center justify-between w-full border ".concat(isChecked ? "border-[#37D7D9]" : "border-[#CFEDED]", " rounded-xl px-4 py-3 cursor-pointer transition-all"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-base font-semibold text-[#545454]",
                                            children: opt
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 flex items-center justify-center h-9 w-9",
                                            children: isChecked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCheckmarkCircle"], {
                                                className: "text-[#37D7D9]",
                                                style: {
                                                    width: "100%",
                                                    height: "100%"
                                                },
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-9 w-9 rounded-full border border-[#37D7D9]"
                                            }, void 0, false, {
                                                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, opt, true, {
                                    fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleNext,
                                    className: "flex items-center justify-center gap-3 bg-[#37D7D9] text-white text-base font-semibold rounded-full px-6 py-3 shadow-md transition-opacity ".concat(selected === null ? "opacity-60 pointer-events-none" : ""),
                                    children: [
                                        "Next ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowRightLong"], {}, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 23
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest3Mobile/Ques3M/Ai3Q2M/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(Ai3Q2M, "Uc9dmQwo64KzRdBB0gSI/EW/3XU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Ai3Q2M;
var _c;
__turbopack_context__.k.register(_c, "Ai3Q2M");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Eduweb_src_components_85586994._.js.map