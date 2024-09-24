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

const TraceIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.30005 2.99997C7.30005 1.69289 8.35964 0.633301 9.66672 0.633301C10.9738 0.633301 12.0334 1.69289 12.0334 2.99997C12.0334 3.70236 11.7274 4.33329 11.2415 4.76672L12.0524 5.98307C12.1445 5.97216 12.2383 5.96655 12.3334 5.96655C13.6405 5.96655 14.7001 7.02615 14.7001 8.33322C14.7001 9.64029 13.6405 10.6999 12.3334 10.6999C11.0263 10.6999 9.96674 9.64029 9.96674 8.33322C9.96674 7.63082 10.2727 6.99988 10.7587 6.56645L9.94779 5.35012C9.90946 5.35465 9.87085 5.35827 9.83199 5.36095L7.80668 11.1477C8.35111 11.5813 8.70007 12.2499 8.70007 13C8.70007 14.307 7.64048 15.3666 6.3334 15.3666C5.02633 15.3666 3.96674 14.307 3.96674 13C3.96674 12.3994 4.19044 11.8511 4.55908 11.4338L3.62526 10.033C2.33731 10.0109 1.30005 8.95994 1.30005 7.66672C1.30005 6.35964 2.35964 5.30005 3.66672 5.30005C4.97379 5.30005 6.03338 6.35964 6.03338 7.66672C6.03338 8.46911 5.63407 9.17824 5.02331 9.60623L5.75542 10.7044C5.9404 10.658 6.13402 10.6333 6.3334 10.6333C6.38988 10.6333 6.4459 10.6353 6.50138 10.6392L8.46194 5.03746C7.76638 4.62529 7.30005 3.86709 7.30005 2.99997ZM9.66672 2.0333C9.13284 2.0333 8.70005 2.46609 8.70005 2.99997C8.70005 3.53384 9.13284 3.96663 9.66672 3.96663C10.2006 3.96663 10.6334 3.53384 10.6334 2.99997C10.6334 2.46609 10.2006 2.0333 9.66672 2.0333ZM3.66672 6.70005C3.13284 6.70005 2.70005 7.13284 2.70005 7.66672C2.70005 8.20059 3.13284 8.63338 3.66672 8.63338C4.20059 8.63338 4.63338 8.20059 4.63338 7.66672C4.63338 7.13284 4.20059 6.70005 3.66672 6.70005ZM6.3334 12.0333C5.79953 12.0333 5.36674 12.4661 5.36674 13C5.36674 13.5338 5.79953 13.9666 6.3334 13.9666C6.86728 13.9666 7.30007 13.5338 7.30007 13C7.30007 12.4661 6.86728 12.0333 6.3334 12.0333ZM11.3667 8.33322C11.3667 7.79934 11.7995 7.36655 12.3334 7.36655C12.8673 7.36655 13.3001 7.79934 13.3001 8.33322C13.3001 8.86709 12.8673 9.29989 12.3334 9.29989C11.7995 9.29989 11.3667 8.86709 11.3667 8.33322Z"
      fill="currentColor"
    />
  </svg>
);
export default TraceIcon;
