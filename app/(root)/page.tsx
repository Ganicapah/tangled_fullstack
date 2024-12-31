"use client";
import ModalDialog from "@/components/ui/modal";
import UseDialog from "@/components/ui/modals/use-modals-dialog";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  // const handleSubmit = () => {
  //   return false;
  // };
  return (
    <div>
      <UseDialog />
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
