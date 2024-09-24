// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import * as React from "react";
import { SVGProps } from "react";

const RadiusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.63103 0.643193C9.45469 0.551592 11.2474 1.14054 12.6614 2.29581C14.0754 3.45107 15.01 5.09033 15.2839 6.89563C15.5319 8.53005 15.2223 10.1951 14.4136 11.6256C14.5955 11.9301 14.7 12.2862 14.7 12.6666C14.7 13.7896 13.7896 14.7 12.6666 14.7C12.2862 14.7 11.9301 14.5955 11.6256 14.4136C10.1951 15.2223 8.53005 15.5319 6.89563 15.2839C5.09033 15.01 3.45107 14.0754 2.29581 12.6614C1.14054 11.2474 0.551592 9.45469 0.643193 7.63103C0.734795 5.80737 1.50042 4.08271 2.79156 2.79156C4.08271 1.50042 5.80737 0.734795 7.63103 0.643193ZM12.2248 13.1204C12.2077 13.0992 12.1897 13.0793 12.1707 13.0606C12.0847 12.9525 12.0333 12.8155 12.0333 12.6666C12.0333 12.5103 12.0899 12.3673 12.1838 12.2568C12.1967 12.2456 12.2093 12.2339 12.2216 12.2216C12.2339 12.2093 12.2456 12.1967 12.2568 12.1838C12.3673 12.0899 12.5103 12.0333 12.6666 12.0333C12.8155 12.0333 12.9525 12.0847 13.0606 12.1707C13.0793 12.1897 13.0992 12.2077 13.1204 12.2248C13.2315 12.3389 13.3 12.4948 13.3 12.6666C13.3 13.0164 13.0164 13.3 12.6666 13.3C12.4948 13.3 12.3389 13.2315 12.2248 13.1204ZM13.3038 10.7351C13.8772 9.62314 14.089 8.35336 13.8997 7.10562C13.6779 5.64341 12.9209 4.31569 11.7756 3.37997C10.6303 2.44426 9.17834 1.96724 7.70126 2.04143C6.22418 2.11562 4.82729 2.73574 3.78151 3.78151C2.73574 4.82729 2.11562 6.22418 2.04143 7.70126C1.96724 9.17834 2.44426 10.6303 3.37997 11.7756C4.31569 12.9209 5.64341 13.6779 7.10562 13.8997C8.35336 14.089 9.62314 13.8772 10.7351 13.3038C10.669 13.1033 10.6333 12.8892 10.6333 12.6666C10.6333 12.3611 10.7007 12.0713 10.8214 11.8113L8.85525 9.8452C8.59526 9.96591 8.30548 10.0333 7.99996 10.0333C6.87698 10.0333 5.96663 9.12294 5.96663 7.99996C5.96663 6.87698 6.87698 5.96663 7.99996 5.96663C9.12294 5.96663 10.0333 6.87698 10.0333 7.99996C10.0333 8.30548 9.96591 8.59526 9.8452 8.85525L11.8113 10.8214C12.0713 10.7007 12.3611 10.6333 12.6666 10.6333C12.8892 10.6333 13.1033 10.669 13.3038 10.7351ZM8.48283 8.40979C8.57667 8.29933 8.63329 8.15626 8.63329 7.99996C8.63329 7.65018 8.34974 7.36663 7.99996 7.36663C7.65018 7.36663 7.36663 7.65018 7.36663 7.99996C7.36663 8.34974 7.65018 8.63329 7.99996 8.63329C8.15626 8.63329 8.29933 8.57667 8.40979 8.48283C8.42097 8.46989 8.4327 8.45727 8.44498 8.44498C8.45727 8.4327 8.46989 8.42097 8.48283 8.40979Z"
      fill="currentColor"
    />
  </svg>
);
export default RadiusIcon;
