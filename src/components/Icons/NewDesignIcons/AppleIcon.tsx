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

const AppleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.0406 1.02028C6.21349 0.674498 6.63396 0.534341 6.97974 0.707233C7.78473 1.10972 8.39861 2.03808 8.61523 3.46999C8.74989 3.3919 8.89355 3.31258 9.04497 3.23575C9.66139 2.92299 10.438 2.63474 11.3268 2.63334C12.3729 2.61552 13.3838 3.01099 14.1402 3.73405C14.8981 4.45862 15.3389 5.45341 15.3665 6.50159L15.3667 6.52C15.3667 8.05147 14.8336 10.1865 14.0562 11.933C13.6658 12.8101 13.1954 13.6317 12.6657 14.2463C12.1561 14.8378 11.4784 15.3667 10.6667 15.3667C10.1262 15.3667 9.60718 15.1552 9.22096 14.9978C9.19108 14.9857 9.16199 14.9738 9.13376 14.9624C8.68639 14.7818 8.34635 14.66 8.00003 14.66C7.65371 14.66 7.31367 14.7818 6.8663 14.9624C6.83806 14.9738 6.80897 14.9857 6.77909 14.9978C6.39287 15.1552 5.87381 15.3667 5.33336 15.3667C4.5217 15.3667 3.844 14.8378 3.33434 14.2463C2.80469 13.6317 2.33428 12.8101 1.94385 11.933C1.1665 10.1865 0.633362 8.05147 0.633362 6.52L0.633568 6.50301C0.659047 5.45374 1.09934 4.45735 1.858 3.73207C2.61491 3.00846 3.62716 2.61358 4.67393 2.63334C5.56242 2.6349 6.33883 2.92308 6.95509 3.23575C7.02931 3.27341 7.10168 3.31167 7.17203 3.35009C6.97226 2.45105 6.58526 2.07524 6.35365 1.95943C6.00786 1.78654 5.8677 1.36607 6.0406 1.02028ZM4.6522 4.03318C3.97322 4.01912 3.31633 4.27474 2.82543 4.74403C2.33652 5.21143 2.05195 5.85284 2.03337 6.52874C2.03548 7.81066 2.50186 9.74381 3.22287 11.3637C3.58245 12.1715 3.98704 12.8591 4.39489 13.3324C4.82272 13.8289 5.14503 13.9667 5.33336 13.9667C5.58443 13.9667 5.86033 13.8588 6.34209 13.6643C6.76972 13.4916 7.34635 13.26 8.00003 13.26C8.65371 13.26 9.23034 13.4916 9.65796 13.6643C10.1397 13.8588 10.4156 13.9667 10.6667 13.9667C10.855 13.9667 11.1773 13.8289 11.6052 13.3324C12.013 12.8591 12.4176 12.1715 12.7772 11.3637C13.4981 9.74412 13.9644 7.81139 13.9667 6.52947C13.9466 5.8539 13.6614 5.21322 13.1727 4.74601C12.6819 4.27674 12.0254 4.02053 11.3464 4.03321L11.3334 4.03345V4.03333C10.7449 4.03333 10.1905 4.22444 9.67842 4.48425C9.42348 4.6136 9.18689 4.75582 8.96484 4.89452C8.91345 4.92662 8.86087 4.95982 8.80804 4.99319C8.64642 5.09524 8.48234 5.19885 8.34205 5.27742C8.12956 5.39641 7.8705 5.39641 7.65801 5.27742C7.51771 5.19885 7.35364 5.09524 7.19202 4.99319C7.13918 4.95982 7.08661 4.92662 7.03522 4.89452C6.81317 4.75582 6.57658 4.6136 6.32163 4.48425C5.80957 4.22444 5.25518 4.03333 4.66669 4.03333L4.6522 4.03318Z"
      fill="currentColor"
    />
  </svg>
);
export default AppleIcon;
