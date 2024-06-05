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

const HeadphonesIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00005 2.69999C6.5944 2.69999 5.24633 3.25838 4.25238 4.25232C3.25844 5.24626 2.70005 6.59434 2.70005 7.99999V8.63332H4.00005C4.53932 8.63332 5.05651 8.84755 5.43783 9.22887C5.81916 9.6102 6.03338 10.1274 6.03338 10.6667V12.6667C6.03338 13.2059 5.81916 13.7231 5.43783 14.1044C5.05651 14.4858 4.53932 14.7 4.00005 14.7H3.33338C2.79411 14.7 2.27692 14.4858 1.8956 14.1044C1.51427 13.7231 1.30005 13.2059 1.30005 12.6667V7.99999C1.30005 6.22304 2.00594 4.51887 3.26243 3.26237C4.51893 2.00588 6.2231 1.29999 8.00005 1.29999C9.777 1.29999 11.4812 2.00588 12.7377 3.26237C13.9942 4.51887 14.7 6.22304 14.7 7.99999V12.6667C14.7 13.2059 14.4858 13.7231 14.1045 14.1044C13.7232 14.4858 13.206 14.7 12.6667 14.7H12C11.4608 14.7 10.9436 14.4858 10.5623 14.1044C10.1809 13.7231 9.96671 13.2059 9.96672 12.6667V10.6667C9.96671 10.1274 10.1809 9.6102 10.5623 9.22887C10.9436 8.84755 11.4608 8.63332 12 8.63332H13.3V7.99999C13.3 6.59434 12.7417 5.24626 11.7477 4.25232C10.7538 3.25838 9.4057 2.69999 8.00005 2.69999ZM13.3 10.0333H12C11.8321 10.0333 11.671 10.1 11.5522 10.2188C11.4334 10.3376 11.3667 10.4987 11.3667 10.6667V12.6667C11.3667 12.8346 11.4334 12.9957 11.5522 13.1145C11.671 13.2333 11.8321 13.3 12 13.3H12.6667C12.8347 13.3 12.9958 13.2333 13.1145 13.1145C13.2333 12.9957 13.3 12.8346 13.3 12.6667V10.0333ZM2.70005 10.0333V12.6667C2.70005 12.8346 2.76677 12.9957 2.88555 13.1145C3.00432 13.2333 3.16541 13.3 3.33338 13.3H4.00005C4.16802 13.3 4.32911 13.2333 4.44788 13.1145C4.56666 12.9957 4.63338 12.8346 4.63338 12.6667V10.6667C4.63338 10.4987 4.56666 10.3376 4.44788 10.2188C4.32911 10.1 4.16802 10.0333 4.00005 10.0333H2.70005Z"
      fill="currentColor"
    />
  </svg>
);
export default HeadphonesIcon;
