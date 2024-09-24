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

const ContactRoundIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.33332 0.633331C5.71992 0.633331 6.03332 0.946732 6.03332 1.33333V1.96666H9.96665V1.33333C9.96665 0.946732 10.2801 0.633331 10.6667 0.633331C11.0533 0.633331 11.3667 0.946732 11.3667 1.33333V1.96666H12.6667C13.7896 1.96666 14.7 2.87702 14.7 4V13.3333C14.7 14.4563 13.7896 15.3667 12.6667 15.3667H3.33332C2.21034 15.3667 1.29999 14.4563 1.29999 13.3333V4C1.29999 2.87702 2.21034 1.96666 3.33332 1.96666H4.63332V1.33333C4.63332 0.946732 4.94672 0.633331 5.33332 0.633331ZM3.33332 3.36666C2.98354 3.36666 2.69999 3.65022 2.69999 4V13.3333C2.69999 13.6831 2.98354 13.9667 3.33332 13.9667H12.6667C13.0164 13.9667 13.3 13.6831 13.3 13.3333V4C13.3 3.65022 13.0164 3.36666 12.6667 3.36666H3.33332ZM7.99999 6.03333C7.28202 6.03333 6.69999 6.61536 6.69999 7.33333C6.69999 8.0513 7.28202 8.63333 7.99999 8.63333C8.71796 8.63333 9.29999 8.0513 9.29999 7.33333C9.29999 6.61536 8.71796 6.03333 7.99999 6.03333ZM9.91833 9.23332C10.4016 8.74546 10.7 8.07425 10.7 7.33333C10.7 5.84216 9.49116 4.63333 7.99999 4.63333C6.50882 4.63333 5.29999 5.84216 5.29999 7.33333C5.29999 8.07425 5.59842 8.74546 6.08165 9.23332C5.91745 9.34717 5.76263 9.47616 5.61939 9.6194C4.98802 10.2508 4.63332 11.1071 4.63332 12C4.63332 12.3866 4.94672 12.7 5.33332 12.7C5.71992 12.7 6.03332 12.3866 6.03332 12C6.03332 11.4784 6.24052 10.9782 6.60934 10.6094C6.97817 10.2405 7.47839 10.0333 7.99999 10.0333C8.52158 10.0333 9.02181 10.2405 9.39063 10.6094C9.75945 10.9782 9.96665 11.4784 9.96665 12C9.96665 12.3866 10.2801 12.7 10.6667 12.7C11.0533 12.7 11.3667 12.3866 11.3667 12C11.3667 11.1071 11.012 10.2508 10.3806 9.6194C10.2373 9.47616 10.0825 9.34717 9.91833 9.23332Z"
      fill="currentColor"
    />
  </svg>
);
export default ContactRoundIcon;
