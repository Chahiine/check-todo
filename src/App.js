// import React from "react";
// import ListTask from "./components/ListTask";
// import { motion } from "framer-motion";
// function App() {
//   return (
//     <div className="App">
//       <motion.h1
//         initial={{ y: -200 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", duration: 0.5 }}
//         whileHover={{ scale: 1.1 }}
//       >
//         Todo List
//       </motion.h1>
//       <motion.div
//         initial={{ y: 1000 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", duration: 1 }}
//       >
//         <div>
//           <ListTask />
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="App">
      <div>
        <ListTask />
      </div>
    </div>
  );
}

export default App;