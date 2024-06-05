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

const FileMusicIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.00001 2.03333C3.83204 2.03333 3.67095 2.10006 3.55217 2.21883C3.4334 2.3376 3.36667 2.49869 3.36667 2.66666V8.26666C3.36667 8.65326 3.05327 8.96666 2.66667 8.96666C2.28008 8.96666 1.96667 8.65326 1.96667 8.26666V2.66666C1.96667 2.12739 2.1809 1.6102 2.56222 1.22888C2.94355 0.847557 3.46073 0.633331 4.00001 0.633331H9.66667C9.85233 0.633331 10.0304 0.707081 10.1616 0.838357L13.8283 4.50502C13.9596 4.6363 14.0333 4.81435 14.0333 5V13.3333C14.0333 13.8726 13.8191 14.3898 13.4378 14.7711C13.0565 15.1524 12.5393 15.3667 12 15.3667H7.00001C6.61341 15.3667 6.30001 15.0533 6.30001 14.6667C6.30001 14.2801 6.61341 13.9667 7.00001 13.9667H12C12.168 13.9667 12.3291 13.8999 12.4478 13.7812C12.5666 13.6624 12.6333 13.5013 12.6333 13.3333V5.28995L9.37673 2.03333H4.00001ZM11.1202 5.4668C11.2766 5.5998 11.3667 5.79473 11.3667 6V10.6667C11.3667 11.7896 10.4563 12.7 9.33334 12.7C8.21036 12.7 7.30001 11.7896 7.30001 10.6667C7.30001 9.54368 8.21036 8.63333 9.33334 8.63333C9.55447 8.63333 9.76736 8.66863 9.96667 8.7339V6.82293L6.03334 7.4621V12C6.03334 13.123 5.12299 14.0333 4.00001 14.0333C2.87703 14.0333 1.96667 13.123 1.96667 12C1.96667 10.877 2.87703 9.96666 4.00001 9.96666C4.22114 9.96666 4.43403 10.002 4.63334 10.0672V6.86666C4.63334 6.5234 4.88225 6.23079 5.22106 6.17573L10.5544 5.30906C10.757 5.27614 10.9639 5.3338 11.1202 5.4668ZM4.63334 12C4.63334 11.6502 4.34979 11.3667 4.00001 11.3667C3.65023 11.3667 3.36667 11.6502 3.36667 12C3.36667 12.3498 3.65023 12.6333 4.00001 12.6333C4.34979 12.6333 4.63334 12.3498 4.63334 12ZM9.96667 10.6667C9.96667 10.3169 9.68312 10.0333 9.33334 10.0333C8.98356 10.0333 8.70001 10.3169 8.70001 10.6667C8.70001 11.0164 8.98356 11.3 9.33334 11.3C9.68312 11.3 9.96667 11.0164 9.96667 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default FileMusicIcon;
