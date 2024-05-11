"use client";
import { toast } from "@/components/ui/use-toast";
import { useLogoutUserMutation } from "@/redux/api/authApi";
import { authSlice, setAuthState, setAuthUser } from "@/redux/slice/authSlice";
import { useAppDispatch } from "@/redux/store";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Logout = () => {
  const [logout, { isSuccess }] = useLogoutUserMutation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    logout();
    localStorage.removeItem("token");
    if (isSuccess) {
      toast({
        title: "Logout Successful.",
        variant: "default",
        duration: 2000,
      });
    }
    dispatch(setAuthState(false));
    dispatch(
      setAuthUser({
        email: "",
        name: "",
        address: [],
        password: "",
        profilePhoto: "",
        role: "user",
      }),
    );
    redirect("/");
  }, []);
};

export default Logout;
