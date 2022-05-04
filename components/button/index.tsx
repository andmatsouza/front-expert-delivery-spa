import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;  
}

export function Button({ ...props }: Props) {
  return (
    <>
      <button className={`${props.className} rounded-xl font-bold`}>{props.children}</button>
    </>

  )
}