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

const Dice6Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.69999C2.9836 2.69999 2.70005 2.98354 2.70005 3.33332V12.6667C2.70005 13.0164 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0164 13.3 12.6667V3.33332C13.3 2.98354 13.0165 2.69999 12.6667 2.69999H3.33338ZM1.30005 3.33332C1.30005 2.21034 2.2104 1.29999 3.33338 1.29999H12.6667C13.7897 1.29999 14.7 2.21034 14.7 3.33332V12.6667C14.7 13.7896 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7896 1.30005 12.6667V3.33332ZM4.63338 5.33332C4.63338 4.94672 4.94678 4.63332 5.33338 4.63332H5.34005C5.72665 4.63332 6.04005 4.94672 6.04005 5.33332C6.04005 5.71992 5.72665 6.03332 5.34005 6.03332H5.33338C4.94678 6.03332 4.63338 5.71992 4.63338 5.33332ZM9.96672 5.33332C9.96672 4.94672 10.2801 4.63332 10.6667 4.63332H10.6734C11.06 4.63332 11.3734 4.94672 11.3734 5.33332C11.3734 5.71992 11.06 6.03332 10.6734 6.03332H10.6667C10.2801 6.03332 9.96672 5.71992 9.96672 5.33332ZM4.63338 7.99999C4.63338 7.61339 4.94678 7.29999 5.33338 7.29999H5.34005C5.72665 7.29999 6.04005 7.61339 6.04005 7.99999C6.04005 8.38659 5.72665 8.69999 5.34005 8.69999H5.33338C4.94678 8.69999 4.63338 8.38659 4.63338 7.99999ZM9.96672 7.99999C9.96672 7.61339 10.2801 7.29999 10.6667 7.29999H10.6734C11.06 7.29999 11.3734 7.61339 11.3734 7.99999C11.3734 8.38659 11.06 8.69999 10.6734 8.69999H10.6667C10.2801 8.69999 9.96672 8.38659 9.96672 7.99999ZM4.63338 10.6667C4.63338 10.2801 4.94678 9.96665 5.33338 9.96665H5.34005C5.72665 9.96665 6.04005 10.2801 6.04005 10.6667C6.04005 11.0533 5.72665 11.3667 5.34005 11.3667H5.33338C4.94678 11.3667 4.63338 11.0533 4.63338 10.6667ZM9.96672 10.6667C9.96672 10.2801 10.2801 9.96665 10.6667 9.96665H10.6734C11.06 9.96665 11.3734 10.2801 11.3734 10.6667C11.3734 11.0533 11.06 11.3667 10.6734 11.3667H10.6667C10.2801 11.3667 9.96672 11.0533 9.96672 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default Dice6Icon;
