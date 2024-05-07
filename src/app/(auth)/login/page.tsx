"use client";
import { useLazyGetUserQuery } from "@/redux/api/userApi";
import { redirect } from "next/navigation";
import { CardWrapper } from "../../../components/card-wrapper";
import { LoginInner } from "./login-card-handler";
import Link from "next/link";
import { useEffect } from "react";

function LoginPage() {
  const [getUser, { data, isSuccess }] = useLazyGetUserQuery();
  useEffect(() => {
    getUser(null);
  }, []);
  if (isSuccess) {
  }
  if (data) {
    redirect("/");
  } else {
    return (
      <div className="flex h-screen justify-center items-center">
        <CardWrapper
          headerlabel="Welcome Back"
          backbuttonhref="/register"
          backbuttonlabel="Don't have an account?"
          discription="Welcome Back.."
          showsocial={false}
        >
          <LoginInner />
        </CardWrapper>
      </div>
    );
  }
}
export default LoginPage;
