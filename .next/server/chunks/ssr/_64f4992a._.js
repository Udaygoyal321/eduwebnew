module.exports=[33095,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(c,{default:function(){return i},getImageProps:function(){return h}});let d=a.r(33354),e=a.r(94915),f=a.r(67161),g=d._(a.r(2305));function h(a){let{props:b}=(0,e.getImgProps)(a,{defaultLoader:g.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let i=f.Image},71987,(a,b,c)=>{b.exports=a.r(33095)},94098,a=>{"use strict";a.s(["default",()=>d]);var b=a.i(87924),c=a.i(71987);let d=()=>(0,b.jsx)("section",{className:"w-full bg-white mt-10 py-20",children:(0,b.jsxs)("div",{className:"max-w-7xl mx-auto px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12",children:[(0,b.jsxs)("div",{className:"flex-1 text-center lg:text-left",children:[(0,b.jsxs)("h2",{className:"text-2xl md:text-3xl font-bold text-gray-900 leading-snug",children:["Your Global Career, Now In Your ",(0,b.jsx)("br",{})," Pocket — Edulinks AI On Mobile!"]}),(0,b.jsxs)("div",{className:"flex justify-center lg:justify-start gap-4 mt-6",children:[(0,b.jsx)(c.default,{src:"/images/googleImg.png",alt:"Google Play",width:150,height:50,className:"h-auto w-[120px] md:w-[150px]"}),(0,b.jsx)(c.default,{src:"/images/appImg.png",alt:"App Store",width:150,height:40,className:"h-auto w-[120px] md:w-[150px]"})]})]}),(0,b.jsx)("div",{className:"flex-1 flex justify-center",children:(0,b.jsx)(c.default,{src:"/images/twophonesImg.png",alt:"Mobile App Preview",width:500,height:500,className:"w-[200px] sm:w-[270px] md:w-[340px] lg:w-[450px] h-auto"})})]})})},94106,a=>{"use strict";a.s(["default",()=>d]);var b=a.i(87924),c=a.i(72131);function d(){let a=(0,c.useRef)(null),d=(0,c.useRef)(null),[e,f]=(0,c.useState)(1),[g,h]=(0,c.useState)(0),[i,j]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let b=a.current,c=d.current;if(!b||!c)return;let e=()=>{h(c.getBoundingClientRect().top+window.scrollY)};e(),window.addEventListener("resize",e);let g=null,i=()=>{g&&cancelAnimationFrame(g),g=requestAnimationFrame(()=>{let a=b.getBoundingClientRect();a.top>0?f(1):f(Math.max(0,1-Math.min(-a.top,100)/100))})};return i(),window.addEventListener("scroll",i,{passive:!0}),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",i),g&&cancelAnimationFrame(g)}},[]),(0,c.useEffect)(()=>{let a=window.scrollY||0,b=0,c=()=>{b&&cancelAnimationFrame(b),b=requestAnimationFrame(()=>{let b=window.scrollY||0,c=b-a;Math.abs(c)>6&&(c>0?j(!0):j(!1),a=b)})};return window.addEventListener("scroll",c,{passive:!0}),()=>{window.removeEventListener("scroll",c),b&&cancelAnimationFrame(b)}},[]),(0,b.jsxs)("section",{id:"below-header",ref:a,className:"relative flex flex-col md:flex-row bg-[#DFFFFF] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-25 overflow-hidden",children:[(0,b.jsx)("div",{"aria-hidden":"true",className:"absolute bottom-0 left-0 w-full pointer-events-none transition-opacity duration-300 ease-in-out",style:{height:"80px",background:"linear-gradient(to top, #ffffff, rgba(255,255,255,0))",opacity:+!!i,zIndex:10}}),(0,b.jsxs)("div",{className:"text-center relative z-20 max-w-6xl",children:[(0,b.jsxs)("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-[#545454] leading-snug",style:{fontFamily:"Space Grotesk"},children:["Discover your Study Abroad ",(0,b.jsx)("br",{className:"hidden sm:block"})," ","Destination"]}),(0,b.jsxs)("p",{className:"text-[#6F6F6F] pt-6 sm:pt-8 text-base sm:text-lg leading-relaxed text-center",style:{fontFamily:"DM Sans"},children:[(0,b.jsx)("span",{className:"block text-base sm:text-lg",children:"From world-class universities and affordable education options to post-study career opportunities and vibrant student"}),(0,b.jsx)("span",{className:"block text-base sm:text-lg",children:"communities, EduLinks helps you choose the country that truly fits your academic goals and future ambitions. With personalized"}),(0,b.jsx)("span",{className:"block text-base sm:text-lg",children:"guidance and AI-powered insights, your study-abroad journey starts with the right destination."})]}),(0,b.jsx)("div",{id:"floating-buttons",ref:d,className:"pt-12 opacity-0 pointer-events-none",children:(0,b.jsx)("div",{className:"flex gap-4 items-center justify-center",children:(0,b.jsx)("button",{className:"px-6 py-3 rounded-full bg-[#37D7D9] text-white font-medium shadow-md",children:"Book Online Counselling"})})})]}),(0,b.jsx)("div",{style:{position:"fixed",top:`${g+70}px`,left:"50%",transform:"translateX(-50%)",opacity:e,transition:"opacity 0.01s linear",pointerEvents:0===e?"none":"auto",zIndex:50},className:"flex gap-4 pt-5 items-center justify-center",children:(0,b.jsx)("button",{className:"px-6 py-2.5 -translate-y-6 rounded-full text-white bg-[#37D7D9] font-medium hover:bg-[#00B7C1] hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out",children:"Start Exploring"})})]})}},142,a=>{"use strict";a.s(["default",()=>f]);var b=a.i(87924),c=a.i(71987),d=a.i(72131);let e=[{left:"153px",top:"217px",country:"CANADA",description:"“Canada offers globally recognized education, affordable study options, and a welcoming multicultural community.”",images:["/images/hovslide1.png","/images/hovslide2.png","/images/hovslide3.png","/images/hovslide4.png"],overlayImages:[{src:"/images/updotImg.png",width:345,height:250}],cardPosition:"-top-[257px] right-[-172px]",overlayPosition:"top-[-262px] left-[-167px]"},{left:"267px",top:"302px",country:"USA",description:"“The USA is home to top-ranked institutions, cutting-edge research, and endless career opportunities.”",images:["/images/hovslide1.png","/images/hovslide2.png","/images/hovslide3.png","/images/hovslide4.png"],overlayImages:[{src:"/images/downdotImg.png",width:345,height:250}],cardPosition:"top-[20px] right-[-172px]",overlayPosition:"top-[-19px] left-[-167px]"},{left:"538px",top:"240px",country:"UK",description:"“The UK provides prestigious universities, diverse courses, and a rich cultural and academic heritage.”",images:["/images/hovslide1.png","/images/hovslide2.png","/images/hovslide3.png","/images/hovslide4.png"],overlayImages:[{src:"/images/downdotImg.png",width:345,height:250}],cardPosition:"right-[-172.5px] top-[22px]",overlayPosition:"top-[-19px] left-[-167px]"},{left:"590px",top:"245px",country:"GERMANY",description:"“Germany offers tuition-free or low-cost education, strong research facilities, and globally respected degrees.”",images:["/images/hovslide1.png","/images/hovslide2.png","/images/hovslide3.png","/images/hovslide4.png"],overlayImages:[{src:"/images/downdotImg.png",width:345,height:250}],cardPosition:"right-[-172.5px] top-[22px]",overlayPosition:"top-[-19px] left-[-167px]"},{left:"94%",top:"531px",country:"NEW ZEALAND",description:"“New Zealand combines high-quality education with a safe, student-friendly environment and great work pathways.”",images:["/images/hovslide1.png","/images/hovslide2.png","/images/hovslide3.png","/images/hovslide4.png"],overlayImages:[{src:"/images/downsidedotImg.png",width:370,height:250}],cardPosition:"right-[-8px] top-[-224px]",overlayPosition:"top-[-235px] left-[-330px]"},{left:"1016px",top:"471px",country:"AUSTRALIA",description:"“Australia is known for its world-class universities, practical learning, and excellent post-study work opportunities.”",images:["/images/hovslide1.png","/images/hovslide2.png","/images/hovslide3.png","/images/hovslide4.png"],overlayImages:[{src:"/images/fullsidedotImg.png",width:370,height:250}],cardPosition:"right-[-5px] top-[-104px]",overlayPosition:"top-[-112px] left-[-330px]"}],f=()=>{let[a,f]=(0,d.useState)(null);return(0,b.jsxs)("section",{className:"flex flex-col items-center text-center py-16 mt-16 bg-white",children:[(0,b.jsx)("h2",{className:"text-2xl md:text-[37px] font-bold text-[#545454] mb-4",children:"Explore Your Dream Destination"}),(0,b.jsxs)("p",{className:"text-[#6F6F6F] text-base sm:text-lg md:text-[23px] font-stretch-extra-expanded max-w-4xl mb-14 leading-relaxed text-center",style:{fontFamily:"DM Sans"},children:["From Canada to Australia, discover the best countries to shape your education",(0,b.jsx)("br",{}),(0,b.jsx)("span",{className:"text-lg md:text-xl block",children:"and future career."})]}),(0,b.jsxs)("div",{className:"relative w-full max-w-[1220px] mt-8",children:[(0,b.jsx)(c.default,{src:"/images/worldMapimg.png",alt:"World Map",width:1220,height:560,className:"w-full h-auto"}),e.map((d,e)=>(0,b.jsxs)("div",{className:"absolute",style:{left:d.left,top:d.top},onMouseEnter:()=>f(e),onMouseLeave:()=>f(null),children:[(0,b.jsx)("span",{className:"radiate w-7 h-7 z-10"}),(0,b.jsx)("div",{className:`absolute ${d.overlayPosition??"-top-28 left-1/2 -translate-x-1/2"} 
                  flex flex-wrap gap-2 p-2 rounded-xl z-50 w-[500px] 
                  transform transition-all duration-300 ease-out 
                  ${a===e?"opacity-100 scale-100":"opacity-0 scale-95 pointer-events-none"}`,children:d.overlayImages?.map((a,e)=>(0,b.jsx)(c.default,{src:a.src,alt:`${d.country} overlay ${e+1}`,width:a.width??500,height:a.height??250,className:"object-cover"},e))}),(0,b.jsxs)("div",{className:`absolute ${d.cardPosition??"-top-[262px] left-1/2 -translate-x-1/2"} 
                  w-72 md:w-80 rounded-2xl p-4 z-50 transform transition-all duration-300 ease-out 
                  ${a===e?"opacity-100 scale-100":"opacity-0 scale-95 pointer-events-none"}`,children:[(0,b.jsx)("h3",{className:"text-lg font-bold text-black",children:d.country}),(0,b.jsx)("p",{className:"text-sm text-[#6F6F6F] mt-2",style:{fontFamily:"DM Sans"},children:d.description}),(0,b.jsx)("div",{className:"relative w-full rounded-xl overflow-hidden mt-4",children:(0,b.jsx)("div",{className:"flex animate-slide",children:[...d.images,...d.images].map((a,e)=>(0,b.jsx)(c.default,{src:a,alt:`${d.country} image ${e+1}`,width:100,height:60,className:"object-cover w-24 h-20 flex-shrink-0"},e))})}),(0,b.jsx)("button",{className:"mt-2 px-4 py-1 text-sm bg-[#37D7D9] text-white rounded-full hover:bg-[#2cc2c4] hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out",children:"Learn More"})]})]},e))]}),(0,b.jsx)("style",{children:`
  /* Radiating Marker */
  .radiate {
    position: absolute;
    background-color: #37d7d9;
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .radiate::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: rgba(55, 215, 217, 0.4);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: radiate 3s infinite ease-out;
  }

  @keyframes radiate {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.6;
    }
    60% {
      transform: translate(-50%, -50%) scale(2.5);
      opacity: 0.3;
    }
    80% {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .radiate::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: 120%;
    border: 2px solid #37d7d9;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
    animation: radarBlink 5.8s infinite ease-out;
  }

  @keyframes radarBlink {
    0%, 45% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1);
    }
    55% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.2);
    }
    75% {
      opacity: 0.4;
      transform: translate(-50%, -50%) scale(1.6);
    }
    80%, 100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(2);
    }
  }

  /* Sliding Images */
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-slide {
    display: flex;
    animation: slide 12s linear infinite;
    width: max-content;
  }
`})]})}},28459,a=>{"use strict";a.s(["default",()=>e]);var b=a.i(87924),c=a.i(71987);let d=[{icon:"/images/globeImg.png",hoverIcon:"/images/globeHovImg.png",title:"Access the Right Universities & Courses",description:"Find programs that perfectly match your career goals and interests."},{icon:"/images/starImg.png",hoverIcon:"/images/starHovImg.png",title:"AI-Guided Insights & Community Support",description:"Make smarter decisions with AI-driven guidance and connect with peers abroad."},{icon:"/images/bookImg.png",hoverIcon:"/images/bookHovImg.png",title:"Simplified Visa & Application Process",description:"Get step-by-step support to make your journey smooth and stress-free."}];function e(){return(0,b.jsxs)("section",{className:"flex flex-col md:flex-row items-center justify-between gap-10 py-16 bg-white px-4 sm:px-6 md:px-0",children:[(0,b.jsx)("div",{className:"w-full md:w-1/2 flex",children:(0,b.jsx)(c.default,{src:"/images/SDImg.png",alt:"Study Abroad Illustration",width:400,height:400,className:"w-[500px] max-w-full h-auto"})}),(0,b.jsxs)("div",{className:"w-full md:w-1/2 space-y-16 self-start mt-6 md:mt-25 pr-0 md:pr-70",children:[(0,b.jsx)("h2",{className:"text-2xl md:text-[40px] font-bold text-[#545454] whitespace-nowrap -translate-x-0 md:-translate-x-20 text-center md:text-left",children:"Why Study Abroad with EduLinks?"}),(0,b.jsx)("div",{className:"space-y-8",children:d.map((a,d)=>(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-start items-center -translate-y-0 md:-translate-y-4 group",children:[(0,b.jsxs)("div",{className:"relative flex-shrink-0 w-auto h-auto flex items-center justify-center rounded-full -translate-x-0 md:-translate-x-12 mb-4 sm:mb-0",children:[(0,b.jsx)(c.default,{src:a.icon,alt:a.title,width:500,height:500,className:"w-15 h-auto"}),(0,b.jsx)(c.default,{src:a.hoverIcon,alt:`${a.title} Hover`,width:500,height:500,className:"w-15 h-auto absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"})]}),(0,b.jsxs)("div",{className:"text-center sm:text-left cursor-pointer",children:[" ",(0,b.jsx)("h3",{className:"font-semibold text-[#545454] text-[22.5px] whitespace-nowrap -translate-x-0 md:-translate-x-6 -translate-y-0 md:-translate-y-1",children:a.title}),(0,b.jsx)("p",{className:"text-[#6F6F6F] text-[21px] -translate-x-0 md:-translate-x-6 -translate-y-1 md:-translate-y-1",style:{fontFamily:"DM Sans"},children:a.description})]})]},d))})]})]})}}];

//# sourceMappingURL=_64f4992a._.js.map