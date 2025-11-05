import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import axiosClient from '../api/axiosClient';
import { data } from 'react-router-dom';

export const usersContext = createContext()

const UsersContextProvider = ({children}) => {
    //for Auth
    const [currentUser,setCurrentUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //for admin dashboard
    const [users,setUsers] = useState([])

    useEffect(()=>{
        axiosClient.get('/users').then(data=>setUsers(data.data))

        const token =localStorage.getItem('token');
        const role_id = localStorage.getItem("role_id");
        const user = localStorage.getItem("user");
        if (token && role_id && user) {
            setCurrentUser( JSON.parse(user));
            setIsLoggedIn(true);
        }
    },[])


    const login = (d)=>{    
        return axiosClient.post("/auth/signin",d).then((data)=>{
            const token = data.data.accessToken;
            // console.log(token);
            
            const role_id= data.data.user.role_id;
            const user= data.data.user;
            
            localStorage.setItem("token", token);
            localStorage.setItem("role_id", role_id);
            localStorage.setItem("user", JSON.stringify(user));
            setCurrentUser(user);
            setIsLoggedIn(true);
            // console.log(token);
            
            console.log("data",data.data)
            // setUser({email:"",password:""}),
            // setErr(""), 
            // alert("signin successfully")
            // if (role_id === "admin") {
            // navigate('/admin');   
            // } else {
            // }
            return  role_id ;
        })
        .catch((err) => {console.log(err.response.data.error);
            throw err.response?.data?.error || "login failed";
        });    
    }



    const register=(d)=>{
        return axiosClient.post("/auth/register",d).then((data)=>{
            console.log(data.data.user),
            setUsers([...users,data.data.user])
            alert("Registered successfully")
            return data;
        })
            .catch((err) => {console.log(err.response.data.error);
            throw err.response?.data?.error || "Registration failed";
        });    
    }




    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role_id");
        localStorage.removeItem("user");
        setCurrentUser(null);
        setIsLoggedIn(false);
  };





    


    const addUser =(newUser)=>{
        setUsers([...users,newUser])
    }

    const updateUser = (id, newRole) => {
    return axiosClient.patch(`/users/${id}/role`, { role_id: newRole })
      .then(() => {
        setUsers(prev =>
          prev.map(u => u._id === id ? { ...u, role_id: newRole } : u)
        );
      })
      .catch((err) => {
        console.error(err.response?.data?.error || "Update role failed");
        throw err.response?.data?.error || "Update role failed";
      });
  };
  
    const deleteUser =(id)=>{
        axiosClient.delete(`/users/${id}`).then((data)=>{
            console.log(data),
            setUsers(prev=>prev.filter(u=>u._id!==id))
            return data;
        })
            .catch((err) => {console.log(err.response.data.error);
            throw err.response?.data?.error || "delete failed";
        });    
        
    }
    
    return (
        <usersContext.Provider value={{users,currentUser,isLoggedIn,login,register,logout,addUser,updateUser,deleteUser}}>
            {children}
        </usersContext.Provider>
    );
}

export default UsersContextProvider;
