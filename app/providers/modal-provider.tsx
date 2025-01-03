"use client";

import UseDialog from "@/components/modals/use-modals-dialog";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false);

  console.log(isMounted);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <UseDialog />
    </>
  );
};
