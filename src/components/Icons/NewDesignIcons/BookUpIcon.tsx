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

const BookUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.33334 2.03333C4.07697 2.03333 3.83109 2.13518 3.6498 2.31646C3.46852 2.49775 3.36667 2.74362 3.36667 3V10.8398C3.66792 10.705 3.99694 10.6333 4.33334 10.6333H12.6333V2.03333H4.33334ZM14.0333 1.33333C14.0333 0.946732 13.7199 0.633331 13.3333 0.633331H4.33334C3.70566 0.633331 3.10369 0.882676 2.65986 1.32651C2.21602 1.77035 1.96667 2.37232 1.96667 3V13C1.96667 13.6277 2.21602 14.2296 2.65986 14.6735C3.10369 15.1173 3.70566 15.3667 4.33334 15.3667H13.3333C13.7199 15.3667 14.0333 15.0533 14.0333 14.6667V1.33333ZM12.6333 12.0333H4.33334C4.07697 12.0333 3.83109 12.1352 3.6498 12.3165C3.46852 12.4977 3.36667 12.7436 3.36667 13C3.36667 13.2564 3.46852 13.5022 3.6498 13.6835C3.83109 13.8648 4.07697 13.9667 4.33334 13.9667H12.6333V12.0333ZM7.50503 4.17169C7.7784 3.89832 8.22162 3.89832 8.49498 4.17169L10.495 6.17169C10.7683 6.44506 10.7683 6.88827 10.495 7.16164C10.2216 7.43501 9.7784 7.43501 9.50503 7.16164L8.70001 6.35661V8.66666C8.70001 9.05326 8.38661 9.36666 8.00001 9.36666C7.61341 9.36666 7.30001 9.05326 7.30001 8.66666V6.35661L6.49498 7.16164C6.22162 7.43501 5.7784 7.43501 5.50503 7.16164C5.23167 6.88827 5.23167 6.44506 5.50503 6.17169L7.50503 4.17169Z"
      fill="currentColor"
    />
  </svg>
);
export default BookUpIcon;
