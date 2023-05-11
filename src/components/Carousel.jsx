// import React from 'react'

// const Carousel = () => {
//   return (
//     <div className='w-full'>
//         <h1>Carousel</h1>
//       <>
//         {/* Hello world */}
//         <div
//           id="default-carousel"
//           className="relative w-full"
//           data-carousel="slide"
//         >
//           {/* Carousel wrapper */}
//           <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//             {/* Item 1 */}
//             <div
//               className="hidden duration-700 ease-in-out"
//               data-carousel-item
//             >
//               <img
//                 src="https://w7.pngwing.com/pngs/141/850/png-transparent-nike-logo-movement-brands-nike.png"
//                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                 alt="..."
//               />
//             </div>
//             {/* Item 2 */}
//             <div
//               className="hidden duration-700 ease-in-out"
//               data-carousel-item
//             >
//               <img
//                 src="https://w7.pngwing.com/pngs/141/850/png-transparent-nike-logo-movement-brands-nike.png"
//                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                 alt="..."
//               />
//             </div>
//             {/* Item 3 */}
//             <div
//               className="hidden duration-700 ease-in-out"
//               data-carousel-item
//             >
//               <img
//                 src="https://w7.pngwing.com/pngs/141/850/png-transparent-nike-logo-movement-brands-nike.png"
//                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                 alt="..."
//               />
//             </div>
//             {/* Item 4 */}
//             <div
//               className="hidden duration-700 ease-in-out"
//               data-carousel-item
//             >
//               <img
//                 src="https://w7.pngwing.com/pngs/141/850/png-transparent-nike-logo-movement-brands-nike.png"
//                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                 alt="..."
//               />
//             </div>
//             {/* Item 5 */}
//             <div
//               className="hidden duration-700 ease-in-out"
//               data-carousel-item
//             >
//               <img
//                 src="https://w7.pngwing.com/pngs/141/850/png-transparent-nike-logo-movement-brands-nike.png"
//                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                 alt="..."
//               />
//             </div>
//           </div>
//           {/* Slider indicators */}
//           <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//             <button
//               type="button"
//               className="w-3 h-3 rounded-full"
//               aria-current="true"
//               aria-label="Slide 1"
//               data-carousel-slide-to={0}
//             />
//             <button
//               type="button"
//               className="w-3 h-3 rounded-full"
//               aria-current="false"
//               aria-label="Slide 2"
//               data-carousel-slide-to={1}
//             />
//             <button
//               type="button"
//               className="w-3 h-3 rounded-full"
//               aria-current="false"
//               aria-label="Slide 3"
//               data-carousel-slide-to={2}
//             />
//             <button
//               type="button"
//               className="w-3 h-3 rounded-full"
//               aria-current="false"
//               aria-label="Slide 4"
//               data-carousel-slide-to={3}
//             />
//             <button
//               type="button"
//               className="w-3 h-3 rounded-full"
//               aria-current="false"
//               aria-label="Slide 5"
//               data-carousel-slide-to={4}
//             />
//           </div>
//           {/* Slider controls */}
//           <button
//             type="button"
//             className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//             data-carousel-prev=""
//           >
//             <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//               <svg
//                 aria-hidden="true"
//                 className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//               <span className="sr-only">Previous</span>
//             </span>
//           </button>
//           <button
//             type="button"
//             className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//             data-carousel-next=""
//           >
//             <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//               <svg
//                 aria-hidden="true"
//                 className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//               <span className="sr-only">Next</span>
//             </span>
//           </button>
//         </div>
//       </>
//     </div>
//   );
// }

// export default Carousel




// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "react-feather";

// export default function Carousel({
// //   children: slides,
//   autoSlide = true,
//   autoSlideInterval = 3000,
// }) {

//     const [curr, setCurr] = useState(0);
    


//     const slides = [
//       {
//         url: "https://w7.pngwing.com/pngs/141/850/png-transparent-nike-logo-movement-brands-nike.png",
//       },
//       {
//         url: "https://w7.pngwing.com/pngs/403/367/png-transparent-adidas-logo-adidas-logo-cdr-angle-text.png",
//       },
//       {
//         url: "https://w7.pngwing.com/pngs/141/850/png-transparent-nike-logo-movement-brands-nike.png",
//       },
//     ];

  

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//   const next = () =>
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(next, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, []);
//   return (
//     <div className="overflow-hidden relative">
//       <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {slides.map((s)=> ( <img className="w-50 mx-auto" src={s.url} key={s} alt="slide"/>))}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           className="p-1 rounded-full shadow bg-black/80 text-gray-800 hover:bg-black"
//         >
//           <ChevronLeft size={40} />
//         </button>
//         <button
//           onClick={next}
//           className="p-1 rounded-full shadow bg-black/80 text-gray-800 hover:bg-black"
//         >
//           <ChevronRight size={40} />
//         </button>
//       </div>

//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-2">
//           {slides.map((_, i) => (
//             <div
//               className={`
//               transition-all w-3 h-3 bg-black rounded-full
//               ${curr === i ? "p-2" : "bg-opacity-50"}
//             `}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const Carousel = () => {
  return (
    <div>Carousel</div>
  )
}

export default Carousel

