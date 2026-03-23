//  var 1 - using of useNavigateHook;
import { useNavigate , Navigate } from "react-router-dom";
import { useState } from "react";

// export const Login = () => {
//     const navigate = useNavigate();

//     const handleSubmit = async (values) => {
//         const response = await apiService.login(values);
//         if (response.ok) {
//             navigate('/userProfile')
//         }
// }

//     return (
//         <>
//             <h2>Login page content</h2>
//             <LoginForm onSubmit={ handleSumbit} />
//         </>
//     )
// }

// var 2 usingComponentNavigate;

export const Login = () => {
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const handleSubmit = async (values) => {
    const response = await apiService.login(values);
    setIsLoginSuccess(response.ok);
    };
    
    if (isLoginSuccess) {
        return <Navigate to="/userprofile" />
    }

  return (
    <>
      <h2>Login page content</h2>
      <LoginForm onSubmit={handleSumbit} />
    </>
  );
};
