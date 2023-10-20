// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// const LoginComp = () => {
//   const changeUser = useSelector((state) => state.auth.users);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       changeUser.userInfo.emailt === email &&
//       changeUser.userInfo.Password === password
//     ) {
//       alert(true);
//     } else {
//       alert("Bazz chka exo");
//     }
//     setEmail("");
//     setPassword("");
//   };
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="max-w-md p-8 bg-slate-500 shadow-md rounded-md">
//         <h2 className="text-2xl font-bold mb-6">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-1 font-medium">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               className="w-full border-gray-300 rounded-md px-3 py-2"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block mb-1 font-medium">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border-gray-300 rounded-md px-3 py-2"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default LoginComp;
import React from "react";

export default function A() {
  return (
    <div className="w-full h-screen text-5xl flex items-center justify-center">
      <h1>This page will be available soon!!!</h1>
    </div>
  );
}
