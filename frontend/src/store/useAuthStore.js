import {create} from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';

export const useAuthStore=create((set)=>({ // returns object
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile:false,
    isCheckAuth: true,

    checkAuth: async()=>{
        try {
            const res=await axiosInstance.get("auth/check");
            set({authUser:res.data});
        } catch (error) {
            console.log("Error in checkAuth: ", error);
            set({authUser:null});
        } finally {
            set({isCheckAuth: false});
        }
    },

    signup: async(data)=>{
        set({isSigningUp: true});
        try {
            const res=await axiosInstance.post("/auth/signup", data);
            set({authUser: res.data});
            toast.success("Account created");
        } catch (error) {
            toast.error(error.response.message);
        } finally{
            set({isSigningUp: false});
        }
    }
}));