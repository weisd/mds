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

const BoomBoxIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.99997 2.7C3.832 2.7 3.67091 2.76673 3.55213 2.8855C3.43336 3.00427 3.36663 3.16537 3.36663 3.33334V5.3H4.63408C4.65148 4.92888 4.95788 4.63334 5.3333 4.63334C5.70873 4.63334 6.01512 4.92888 6.03252 5.3H7.30075C7.31814 4.92888 7.62454 4.63334 7.99997 4.63334C8.37539 4.63334 8.68179 4.92888 8.69919 5.3H9.96741C9.98481 4.92888 10.2912 4.63334 10.6666 4.63334C11.0421 4.63334 11.3485 4.92888 11.3659 5.3H12.6333V3.33334C12.6333 3.16537 12.5666 3.00428 12.4478 2.8855C12.329 2.76673 12.1679 2.7 12 2.7H3.99997ZM14.0333 5.4237V3.33334C14.0333 2.79406 13.8191 2.27688 13.4377 1.89555C13.0564 1.51423 12.5392 1.3 12 1.3H3.99997C3.46069 1.3 2.94351 1.51423 2.56218 1.89555C2.18086 2.27688 1.96663 2.79406 1.96663 3.33334V5.4237C1.18852 5.70902 0.633301 6.45634 0.633301 7.33334V12.6667C0.633301 13.7896 1.54366 14.7 2.66663 14.7H13.3333C14.4563 14.7 15.3666 13.7896 15.3666 12.6667V7.33334C15.3666 6.45634 14.8114 5.70902 14.0333 5.4237ZM2.66663 6.7C2.31685 6.7 2.0333 6.98356 2.0333 7.33334V12.6667C2.0333 13.0164 2.31685 13.3 2.66663 13.3H13.3333C13.6831 13.3 13.9666 13.0165 13.9666 12.6667V7.33334C13.9666 6.98356 13.6831 6.7 13.3333 6.7H2.66663ZM5.3333 9.36667C4.98352 9.36667 4.69997 9.65022 4.69997 10C4.69997 10.3498 4.98352 10.6333 5.3333 10.6333C5.68308 10.6333 5.96663 10.3498 5.96663 10C5.96663 9.65022 5.68308 9.36667 5.3333 9.36667ZM3.29997 10C3.29997 8.87702 4.21032 7.96667 5.3333 7.96667C6.45628 7.96667 7.36663 8.87702 7.36663 10C7.36663 11.123 6.45628 12.0333 5.3333 12.0333C4.21032 12.0333 3.29997 11.123 3.29997 10ZM10.6666 9.36667C10.3169 9.36667 10.0333 9.65022 10.0333 10C10.0333 10.3498 10.3169 10.6333 10.6666 10.6333C11.0164 10.6333 11.3 10.3498 11.3 10C11.3 9.65022 11.0164 9.36667 10.6666 9.36667ZM8.6333 10C8.6333 8.87702 9.54365 7.96667 10.6666 7.96667C11.7896 7.96667 12.7 8.87702 12.7 10C12.7 11.123 11.7896 12.0333 10.6666 12.0333C9.54365 12.0333 8.6333 11.123 8.6333 10Z"
      fill="currentColor"
    />
  </svg>
);
export default BoomBoxIcon;
