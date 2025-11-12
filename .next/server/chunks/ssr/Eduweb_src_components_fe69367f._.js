module.exports = [
"[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AiTest5Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function AiTest5Page() {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "bot-init-1",
            text: "Hi Manan👋 I'm your personal assistant ready to guide you to all things related to student visas, scholarships, top courses, and universities for six amazing countries. Let's start exploring your future! Where do you want to begin?",
            from: "bot"
        }
    ]);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Append user -> simulate bot reply after delay
    function sendMessage(text) {
        if (!text.trim()) return;
        const userMsg = {
            id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            text,
            from: "user"
        };
        setMessages((prev)=>[
                ...prev,
                userMsg
            ]);
        // Simulated bot reply
        setTimeout(()=>{
            const botMsg = {
                id: `bot-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                text: "Great! I can help with programs, fees, and visas. What level are you aiming for?",
                from: "bot"
            };
            setMessages((prev)=>[
                    ...prev,
                    botMsg
                ]);
        }, 600);
    }
    function sendFromInput() {
        const value = inputRef.current?.value ?? "";
        if (!value.trim()) return;
        sendMessage(value);
        if (inputRef.current) inputRef.current.value = "";
    }
    // Auto-scroll to bottom on message update
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollTo({
                top: container.scrollHeight,
                behavior: "smooth"
            });
        }
    }, [
        messages
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#DFFFFF] text-[#545454] flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "px-8 py-6 flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/aitest5Img.svg",
                            alt: "robot",
                            width: 48,
                            height: 48
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-[#545454]",
                        children: "Chat With Edulinks AI Assistant"
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                ref: scrollContainerRef,
                className: "flex-1 px-10 overflow-y-auto",
                style: {
                    paddingBottom: 180
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto flex flex-col space-y-10",
                    children: messages.map((m)=>m.from === "bot" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 mt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/aitest5Img.svg",
                                            alt: "robot",
                                            width: 30,
                                            height: 30
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl p-6 shadow-md max-w-[1000px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-lg leading-7 text-[#545454]",
                                        children: m.text
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, m.id, true, {
                            fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                            lineNumber: 85,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#37D7D9] text-white font-bold px-6 py-3 rounded-lg shadow-md max-w-[420px] text-lg break-words",
                                    children: m.text
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[#545454] text-lg",
                                        children: "M"
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, m.id, true, {
                            fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                            lineNumber: 101,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-0 right-0 bottom-8 px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-full flex items-center shadow-lg overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                placeholder: "Type Your Message.........",
                                className: "flex-1 px-8 py-5 text-lg font-semibold placeholder-[#545454] outline-none rounded-full",
                                style: {
                                    color: "#545454"
                                },
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter") sendFromInput();
                                }
                            }, void 0, false, {
                                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: sendFromInput,
                                "aria-label": "send",
                                className: "w-20 h-16 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/aitest5Img2.svg",
                                    alt: "send",
                                    width: 26,
                                    height: 26
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Eduweb/src/components/ContactUs/AiAssistant/AiTest5/AiTest5Page/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
"[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AiTest5pageM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Eduweb/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function AiTest5pageM() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "bot-init-1",
            text: "Hi Manan👋 I'm your personal assistant ready to guide you to all things related to student visas, scholarships, top courses, and universities for six amazing countries. Let's start exploring your future! Where do you want to begin?",
            from: "bot"
        }
    ]);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ✅ Append user message -> simulate bot reply
    function sendMessage(text) {
        if (!text.trim()) return;
        const userMsg = {
            id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            text,
            from: "user"
        };
        setMessages((prev)=>[
                ...prev,
                userMsg
            ]);
        // ✅ Simulated bot reply
        setTimeout(()=>{
            const botMsg = {
                id: `bot-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                text: "Great! I can help with programs, fees, and visas. What level are you aiming for?",
                from: "bot"
            };
            setMessages((prev)=>[
                    ...prev,
                    botMsg
                ]);
        }, 600);
    }
    // ✅ Send from input
    function sendFromInput() {
        const value = inputRef.current?.value ?? "";
        if (!value.trim()) return;
        sendMessage(value);
        if (inputRef.current) inputRef.current.value = "";
    }
    // ✅ Auto-scroll to bottom when messages change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollTo({
                top: container.scrollHeight,
                behavior: "smooth"
            });
        }
    }, [
        messages
    ]);
    function handleBack() {
        router.back();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#DFFFFF] text-[#545454] flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-[#DFFFFF]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "px-4 pb-5 pt-5 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleBack,
                            "aria-label": "Go back",
                            className: "absolute left-4 pt-1.5 flex items-center justify-center text-[#545454]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowLeft"], {
                                className: "text-lg"
                            }, void 0, false, {
                                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg font-bold text-[#545454]",
                                children: "Chat With Edulinks AI Assistant"
                            }, void 0, false, {
                                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                ref: scrollContainerRef,
                className: "flex-1 px-4 overflow-y-auto",
                style: {
                    paddingBottom: 160
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-full mx-auto flex flex-col space-y-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-8",
                        children: messages.map((m)=>m.from === "bot" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 mt-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/aitest5Img.svg",
                                                alt: "robot",
                                                width: 22,
                                                height: 22
                                            }, void 0, false, {
                                                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-xl p-4 shadow-md max-w-[85%]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-sm leading-6 text-[#545454]",
                                            children: m.text
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, m.id, true, {
                                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                lineNumber: 103,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#37D7D9] text-white font-bold px-4 py-2 rounded-lg shadow-md max-w-[65%] text-sm break-words",
                                        children: m.text
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-[#545454] text-sm",
                                            children: "M"
                                        }, void 0, false, {
                                            fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, m.id, true, {
                                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                lineNumber: 119,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-0 right-0 bottom-4 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-full mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-full flex items-center shadow-lg overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                placeholder: "Type Your Message.........",
                                className: "flex-1 px-4 py-3 text-base font-semibold placeholder-[#545454] outline-none rounded-full",
                                style: {
                                    color: "#545454"
                                },
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter") sendFromInput();
                                },
                                "aria-label": "Type your message"
                            }, void 0, false, {
                                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: sendFromInput,
                                "aria-label": "send",
                                className: "w-12 h-12 flex items-center justify-center mr-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Eduweb$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/aitest5Img2.svg",
                                    alt: "send",
                                    width: 20,
                                    height: 20
                                }, void 0, false, {
                                    fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Eduweb/src/components/ContatUsMobile/AiAssistantMobile/AiTest5Mobile/AiTest5PageM/page.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Eduweb_src_components_fe69367f._.js.map