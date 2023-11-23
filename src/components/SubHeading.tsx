import React from "react";
interface Props {
  name: string;
}

const SubHeading = ({ name }: Props) => {
  return (
    <div className=" flex flex-col items-center">
      <h1 className=" text-3xl text-purple-950   pt-4">{name}</h1>
      <img src="/underline.png" alt="" className="" />
    </div>
  );
};

export default SubHeading;
