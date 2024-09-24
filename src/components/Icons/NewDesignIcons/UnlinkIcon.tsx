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

const UnlinkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.33336 0.633301C5.71996 0.633301 6.03336 0.946701 6.03336 1.3333V3.3333C6.03336 3.7199 5.71996 4.0333 5.33336 4.0333C4.94676 4.0333 4.63336 3.7199 4.63336 3.3333V1.3333C4.63336 0.946701 4.94676 0.633301 5.33336 0.633301ZM8.49411 1.80943C9.24662 1.08374 10.2513 0.678227 11.2967 0.678227C12.3421 0.678227 13.3468 1.08374 14.0993 1.80943L14.1003 1.81039C14.8685 2.55417 15.3102 3.57241 15.3283 4.64154C15.3457 5.66449 14.9739 6.65404 14.2914 7.41158C14.2652 7.45127 14.2348 7.48866 14.2002 7.52305L13.0536 8.66305C12.7794 8.93562 12.3362 8.93433 12.0636 8.66016C11.791 8.386 11.7923 7.94279 12.0665 7.67022L13.1253 6.61759C13.1447 6.59066 13.1662 6.56489 13.1897 6.54054C13.6746 6.03801 13.9404 5.36357 13.9285 4.6653C13.9167 3.96727 13.6284 3.30246 13.127 2.81673C12.6355 2.34296 11.9794 2.07823 11.2967 2.07823C10.6155 2.07823 9.96071 2.34183 9.46955 2.8137L8.32689 3.94972C8.05273 4.22229 7.60951 4.22099 7.33695 3.94683C7.06438 3.67267 7.06567 3.22945 7.33983 2.95688L8.49411 1.80943ZM0.633362 5.3333C0.633362 4.9467 0.946762 4.6333 1.33336 4.6333H3.33336C3.71996 4.6333 4.03336 4.9467 4.03336 5.3333C4.03336 5.7199 3.71996 6.0333 3.33336 6.0333H1.33336C0.946762 6.0333 0.633362 5.7199 0.633362 5.3333ZM3.94167 7.33833C4.21504 7.61169 4.21504 8.05491 3.94167 8.32827L2.80631 9.46363C2.32393 9.96571 2.05973 10.6383 2.07154 11.3346C2.08339 12.0327 2.37168 12.6975 2.87314 13.1833C3.36465 13.657 4.0207 13.9217 4.70336 13.9217C5.38427 13.9217 6.03871 13.6584 6.5298 13.1869L7.66505 12.0517C7.93842 11.7783 8.38164 11.7783 8.655 12.0517C8.92837 12.325 8.92837 12.7682 8.655 13.0416L7.50602 14.1906C6.75352 14.9163 5.74878 15.3217 4.70336 15.3217C3.65794 15.3217 2.65328 14.9162 1.90078 14.1905L1.89979 14.1895C1.13156 13.4458 0.689892 12.4275 0.671745 11.3584C0.653599 10.2893 1.06046 9.25662 1.803 8.4872L1.81164 8.47825L2.95172 7.33833C3.22509 7.06496 3.6683 7.06496 3.94167 7.33833ZM11.9667 10.6666C11.9667 10.28 12.2801 9.96663 12.6667 9.96663H14.6667C15.0533 9.96663 15.3667 10.28 15.3667 10.6666C15.3667 11.0532 15.0533 11.3666 14.6667 11.3666H12.6667C12.2801 11.3666 11.9667 11.0532 11.9667 10.6666ZM10.6667 11.9666C11.0533 11.9666 11.3667 12.28 11.3667 12.6666V14.6666C11.3667 15.0532 11.0533 15.3666 10.6667 15.3666C10.2801 15.3666 9.96669 15.0532 9.96669 14.6666V12.6666C9.96669 12.28 10.2801 11.9666 10.6667 11.9666Z"
      fill="currentColor"
    />
  </svg>
);
export default UnlinkIcon;
