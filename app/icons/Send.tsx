import React from "react";
import { IconProps } from "~/icons/icons.types";

export const Send: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24.2386 12.5012L1.12358 0.91058C1.02963 0.863598 0.921859 0.852544 0.819617 0.877417C0.584737 0.935452 0.438282 1.17312 0.496312 1.41079L2.87827 11.1442C2.9142 11.2907 3.02197 11.4096 3.16566 11.4565L7.24705 12.8577L3.16842 14.2588C3.02473 14.3086 2.91696 14.4247 2.8838 14.5711L0.496312 24.3184C0.471442 24.4207 0.482495 24.5284 0.529471 24.6196C0.63724 24.838 0.902516 24.9264 1.12358 24.8186L24.2386 13.2943C24.3242 13.2529 24.3933 13.181 24.4375 13.0981C24.5453 12.877 24.4569 12.6117 24.2386 12.5012ZM3.22092 21.5493L4.61086 15.8673L12.7681 13.0677C12.8317 13.0456 12.8842 12.9959 12.9063 12.9295C12.945 12.8135 12.8842 12.6891 12.7681 12.6477L4.61086 9.85088L3.22645 4.19099L20.58 12.8936L3.22092 21.5493Z"
        fill="currentColor"
      />
    </svg>
  );
};