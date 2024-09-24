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

const CalendarOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838387 0.838358C1.11175 0.564991 1.55497 0.564991 1.82834 0.838358L3.28372 2.29374C3.29149 2.30116 3.2991 2.30877 3.30655 2.31657L7.16145 6.17147C7.16131 6.17133 7.1616 6.17162 7.16145 6.17147L14.3634 13.3735C14.3713 13.3809 14.3789 13.3886 14.3864 13.3964L15.1617 14.1717C15.435 14.4451 15.435 14.8883 15.1617 15.1616C14.8883 15.435 14.4451 15.435 14.1717 15.1616L13.9325 14.9224C13.8805 14.9639 13.8263 15.003 13.7701 15.0395C13.4419 15.2522 13.0593 15.3658 12.6682 15.3667L12.6667 15.3667H3.33336C2.79409 15.3667 2.2769 15.1524 1.89558 14.7711C1.51425 14.3898 1.30003 13.8726 1.30003 13.3333V3.9884C1.30649 3.59849 1.42503 3.21867 1.64134 2.89421C1.67623 2.84187 1.71344 2.79133 1.75279 2.74271L0.838387 1.82831C0.56502 1.55494 0.56502 1.11173 0.838387 0.838358ZM2.76089 3.75081C2.72303 3.83067 2.70217 3.91788 2.70003 4.00687V5.96667H4.97675L2.76089 3.75081ZM6.37675 7.36667H2.70003V13.3333C2.70003 13.5013 2.76675 13.6624 2.88553 13.7812C3.0043 13.8999 3.16539 13.9667 3.33336 13.9667H12.666C12.7545 13.9664 12.8416 13.9475 12.9218 13.9118L6.37675 7.36667ZM9.96669 1.96667V1.33333C9.96669 0.946734 10.2801 0.633333 10.6667 0.633333C11.0533 0.633333 11.3667 0.946734 11.3667 1.33333V1.96667H12.6667C13.206 1.96667 13.7232 2.18089 14.1045 2.56222C14.4858 2.94354 14.7 3.46073 14.7 4V10.3333C14.7 10.7199 14.3866 11.0333 14 11.0333C13.6134 11.0333 13.3 10.7199 13.3 10.3333V7.36667H10.3334C9.94676 7.36667 9.63336 7.05327 9.63336 6.66667C9.63336 6.28007 9.94676 5.96667 10.3334 5.96667H13.3V4C13.3 3.83203 13.2333 3.67094 13.1145 3.55217C12.9958 3.43339 12.8347 3.36667 12.6667 3.36667H11.3667V4C11.3667 4.3866 11.0533 4.7 10.6667 4.7C10.2801 4.7 9.96669 4.3866 9.96669 4V3.36667H6.33336C5.94676 3.36667 5.63336 3.05327 5.63336 2.66667C5.63336 2.28007 5.94676 1.96667 6.33336 1.96667H9.96669Z"
      fill="currentColor"
    />
  </svg>
);
export default CalendarOffIcon;
