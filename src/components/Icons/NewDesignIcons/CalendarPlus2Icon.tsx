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

const CalendarPlus2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.33332 0.633333C5.71992 0.633333 6.03332 0.946734 6.03332 1.33333V1.96667H9.96665V1.33333C9.96665 0.946734 10.2801 0.633333 10.6667 0.633333C11.0533 0.633333 11.3667 0.946734 11.3667 1.33333V1.96667H12.6667C13.7896 1.96667 14.7 2.87702 14.7 4V13.3333C14.7 14.4563 13.7896 15.3667 12.6667 15.3667H3.33332C2.21034 15.3667 1.29999 14.4563 1.29999 13.3333V4C1.29999 2.87702 2.21034 1.96667 3.33332 1.96667H4.63332V1.33333C4.63332 0.946734 4.94672 0.633333 5.33332 0.633333ZM4.63332 3.36667H3.33332C2.98354 3.36667 2.69999 3.65022 2.69999 4V5.96667H13.3V4C13.3 3.65022 13.0164 3.36667 12.6667 3.36667H11.3667V4C11.3667 4.3866 11.0533 4.7 10.6667 4.7C10.2801 4.7 9.96665 4.3866 9.96665 4V3.36667H6.03332V4C6.03332 4.3866 5.71992 4.7 5.33332 4.7C4.94672 4.7 4.63332 4.3866 4.63332 4V3.36667ZM13.3 7.36667H2.69999V13.3333C2.69999 13.6831 2.98354 13.9667 3.33332 13.9667H12.6667C13.0164 13.9667 13.3 13.6831 13.3 13.3333V7.36667ZM7.99999 8.63333C8.38659 8.63333 8.69999 8.94673 8.69999 9.33333V9.96667H9.33332C9.71992 9.96667 10.0333 10.2801 10.0333 10.6667C10.0333 11.0533 9.71992 11.3667 9.33332 11.3667H8.69999V12C8.69999 12.3866 8.38659 12.7 7.99999 12.7C7.61339 12.7 7.29999 12.3866 7.29999 12V11.3667H6.66665C6.28006 11.3667 5.96665 11.0533 5.96665 10.6667C5.96665 10.2801 6.28006 9.96667 6.66665 9.96667H7.29999V9.33333C7.29999 8.94673 7.61339 8.63333 7.99999 8.63333Z"
      fill="currentColor"
    />
  </svg>
);
export default CalendarPlus2Icon;
