import { IconProps } from "../../types";


export const IconVoucher = (props: IconProps) => {
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
        d="M21.6 3H2.4C1.068 3 0 4.05687 0 5.375V19.625C0 20.9367 1.07452 22 2.4 22H21.6C22.9255 22 24 20.9367 24 19.625V5.375C24 4.05687 22.92 3 21.6 3ZM21.6 19.625H2.4V5.375H21.6V19.625ZM13.2 18.4375H10.8V17.25H8.4V14.875H13.2V13.6875H9.6C8.93726 13.6875 8.4 13.1558 8.4 12.5V8.9375C8.4 8.28166 8.93726 7.75 9.6 7.75H10.8V6.5625H13.2V7.75H15.6V10.125H10.8V11.3125H14.4C15.0627 11.3125 15.6 11.8442 15.6 12.5V16.0625C15.6 16.7183 15.0627 17.25 14.4 17.25H13.2V18.4375Z"        
        fill={color || "gray"}
      /> 
    </svg>
  );
};