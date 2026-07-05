// import { motion } from "framer-motion";

// const CoupleSection = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#FCF8F1] py-28">

//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF3720,transparent_65%)]" />

//       {/* Decorative Circles */}
//       <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
//       <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6">

//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: .8 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >

//           <p className="uppercase tracking-[0.45em] text-[#C8A13A]">
//             Meet The Couple
//           </p>

//           <h2 className="mt-6 font-serif text-5xl text-[#2D2A32]">
//             Two Hearts, One Journey
//           </h2>

//           <div className="mx-auto mt-6 h-[2px] w-36 bg-[#D4AF37]" />

//           <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-600">
//             Every love story is beautiful, but ours is our favourite.
//             We are grateful to have you with us as we begin the
//             greatest chapter of our lives together.
//           </p>

//         </motion.div>

//         {/* Couple */}

//         <div className="mt-24 grid gap-14 lg:grid-cols-2">

//           {/* Bride */}

//           <motion.div
//             initial={{ opacity:0,x:-80 }}
//             whileInView={{ opacity:1,x:0 }}
//             transition={{ duration:.9 }}
//             viewport={{ once:true }}
//             className="group"
//           >

//             <div className="overflow-hidden rounded-[40px] border border-[#E8D6A7] bg-white shadow-2xl">

//               <img
//                 src="/images/bride.jpg"
//                 alt="Bride"
//                 className="h-[520px] w-full object-cover duration-700 group-hover:scale-105"
//               />

//               <div className="p-10 text-center">

//                 <p className="uppercase tracking-[0.35em] text-[#C8A13A]">
//                   Bride
//                 </p>

//                 <h3 className="mt-4 font-serif text-4xl text-[#2D2A32]">
//                   Emma Wilson
//                 </h3>

//                 <p className="mt-5 text-gray-600 leading-8">
//                   Kind-hearted, graceful and endlessly optimistic,
//                   Emma fills every room with warmth and laughter.
//                 </p>

//               </div>

//             </div>

//           </motion.div>

//           {/* Groom */}

//           <motion.div
//             initial={{ opacity:0,x:80 }}
//             whileInView={{ opacity:1,x:0 }}
//             transition={{ duration:.9 }}
//             viewport={{ once:true }}
//             className="group"
//           >

//             <div className="overflow-hidden rounded-[40px] border border-[#E8D6A7] bg-white shadow-2xl">

//               <img
//                 src="/images/groom.jpg"
//                 alt="Groom"
//                 className="h-[520px] w-full object-cover duration-700 group-hover:scale-105"
//               />

//               <div className="p-10 text-center">

//                 <p className="uppercase tracking-[0.35em] text-[#C8A13A]">
//                   Groom
//                 </p>

//                 <h3 className="mt-4 font-serif text-4xl text-[#2D2A32]">
//                   Daniel Brooks
//                 </h3>

//                 <p className="mt-5 text-gray-600 leading-8">
//                   Gentle, thoughtful and adventurous,
//                   Daniel believes every great story begins with love.
//                 </p>

//               </div>

//             </div>

//           </motion.div>

//         </div>

//         {/* Quote */}

//         <motion.div
//           initial={{ opacity:0,y:40 }}
//           whileInView={{ opacity:1,y:0 }}
//           transition={{ duration:.8 }}
//           viewport={{ once:true }}
//           className="mx-auto mt-24 max-w-4xl rounded-[35px] border border-[#E8D6A7] bg-white p-14 text-center shadow-xl"
//         >

//           <div className="text-5xl text-[#D4AF37]">❦</div>

//           <p className="mt-8 font-serif text-3xl leading-relaxed text-[#2D2A32]">
//             "The greatest thing you'll ever learn is
//             just to love and be loved in return."
//           </p>

//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default CoupleSection;