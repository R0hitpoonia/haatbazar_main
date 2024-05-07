"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { CardWrapper } from "../../../components/card-wrapper";
import { RegisterInner } from "./register-handler";
import { useLazyGetUserQuery } from "@/redux/api/userApi";

const Register = () => {
  const [getUser, { data, isSuccess }] = useLazyGetUserQuery();
  useEffect(() => {
    getUser(null);
  }, []);
  if (isSuccess) {
  }
  if (data) {
    redirect("/profile");
  } else {
    return (
      <div className="flex h-screen justify-center items-center">
        <CardWrapper
          headerlabel="Register"
          discription="Please fill out the form to create an account."
          backbuttonlabel="Back to Login"
          backbuttonhref="/login"
          showsocial={false}
        >
          <RegisterInner />
        </CardWrapper>
      </div>
    );
  }
};

export default Register;