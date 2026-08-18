import { ReactNode } from "react";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1>Title</h1>
      <div>{children}</div>
    </>
  );
};

export default ProfileLayout;
