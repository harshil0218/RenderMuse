import React from "react";
import vec1 from "../assets/vec1.svg";
function Aboutus() {
  return (
    <div class="sm:flex lg:w-screen items-center max-w-screen-xl dark:bg-gray-800 dark:text-gray-300">
      <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
      </div>
      <div class="sm:w-1/2 p-5 ">
      <div class="text">
        
        <h2 class="my-10 font-bold text-3xl sm:text-4xl ">
          About <span class="text-indigo-600">RenderMuse</span>
        </h2>
        <p class="">
          Welcome to RenderMuse – where your words transform into stunning
          visuals! Our app uses advanced AI technology to generate high-quality
          images from text, making creativity accessible to everyone.
        </p>
      
        <h2 class=" font-bold text-3xl my-10 sm:text-4xl ">
          What We <span class="text-indigo-600">Do</span>
        </h2>
        <p class="">
          At RenderMuse, we specialize in turning your ideas into visuals using
          cutting-edge generative AI. Simply describe your vision, and our
          platform creates it for you in seconds.
        </p>
     
        <h2 class="my-10 font-bold text-3xl sm:text-4xl ">Features</h2>
        <ul className="list-disc list-outside ">
         <li>Text-to-Image Generation: Describe it, see it.</li>
         <li>Customizable Styles: Tailor outputs to match your needs.</li>
         <li>AI-Powered Excellence: Built with state-of-the-art machine learning models.</li>
       </ul>
      </div>
    </div>
    </div>

//     <div className="flex items-center max-w-screen-xl mx-auto dark:bg-gray-800 dark:text-gray-300">
//   <div className="w-full sm:w-1/2 p-10">
//     <div className="image object-center text-center">
//       <img src="https://i.imgur.com/WbQnbas.png" alt="RenderMuse" />
//     </div>
//   </div>
//   <div className="w-full sm:w-1/2 p-5">
//     <div className="text my-5">
//       <h2 className="my-10 font-bold text-3xl sm:text-4xl">
//         About <span className="text-indigo-600">RenderMuse</span>
//       </h2>
//       <p>
//         Welcome to RenderMuse – where your words transform into stunning visuals! Our app uses advanced AI technology to generate high-quality images from text, making creativity accessible to everyone.
//       </p>

//       <h2 className="font-bold text-3xl my-10 sm:text-4xl">
//         What We <span className="text-indigo-600">Do</span>
//       </h2>
//       <p>
//         At RenderMuse, we specialize in turning your ideas into visuals using cutting-edge generative AI. Simply describe your vision, and our platform creates it for you in seconds.
//       </p>

//       <h2 className="my-10 font-bold text-3xl sm:text-4xl">Features</h2>
//       <ul className="list-disc list-item ">
//         <li>Text-to-Image Generation: Describe it, see it.</li>
//         <li>Customizable Styles: Tailor outputs to match your needs.</li>
//         <li>AI-Powered Excellence: Built with state-of-the-art machine learning models.</li>
//       </ul>
//       <h2 className="font-bold text-3xl my-10 sm:text-4xl">
//         Our <span className="text-indigo-600">Mission</span>
//       </h2>
//       <p>
//       To empower creativity through accessible AI technology, enabling users to explore their imagination and bring ideas to life.
//       </p>
//     </div>
//   </div>
// </div>

  );
}

export default Aboutus;
