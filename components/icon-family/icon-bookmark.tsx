import { IconProps } from "../../types";


export const IconBookmark = (props: IconProps) => {
  const { size, color } = props;

  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > 
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.57143 0H15.4286C16.8429 0 18 1.18667 18 2.66667V24L9 20L0 24V2.66667C0 1.19391 1.15127 0 2.57143 0ZM9 17.0933L15.4286 20V2.66667H2.57143V20L9 17.0933Z"        
        fill={color || "gray"}
      /> 
    </svg>
  );
};