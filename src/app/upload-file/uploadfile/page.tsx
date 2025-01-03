import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UploadFileLayout from "../upload-file-layout/page";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const uploadFileElement = () => {
  return (
    <DefaultLayout>
      <UploadFileLayout />
    </DefaultLayout>
  );
};

export default uploadFileElement;
