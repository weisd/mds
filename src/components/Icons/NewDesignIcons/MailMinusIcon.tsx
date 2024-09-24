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

const MailMinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.22894 2.56222C1.61026 2.1809 2.12745 1.96667 2.66672 1.96667H13.3334C13.8727 1.96667 14.3898 2.1809 14.7712 2.56222C15.1525 2.94355 15.3667 3.46073 15.3667 4.00001V4.65489C15.3668 4.66231 15.3668 4.66973 15.3667 4.67714V10C15.3667 10.3866 15.0533 10.7 14.6667 10.7C14.2801 10.7 13.9667 10.3866 13.9667 10V5.94087L9.05838 9.05988C8.74116 9.25862 8.37439 9.36402 8.00006 9.36402C7.62572 9.36402 7.25896 9.25861 6.94174 9.05987L6.93795 9.05749L2.03339 5.94087V12C2.03339 12.3467 2.31999 12.6333 2.66672 12.6333H8.00006C8.38665 12.6333 8.70006 12.9467 8.70006 13.3333C8.70006 13.7199 8.38665 14.0333 8.00006 14.0333H2.66672C1.54679 14.0333 0.63339 13.1199 0.63339 12V4.67717C0.633271 4.66974 0.633271 4.6623 0.63339 4.65486V4.00001C0.63339 3.46073 0.847615 2.94355 1.22894 2.56222ZM2.03339 4.28212L7.68656 7.87443C7.78063 7.93298 7.88923 7.96402 8.00006 7.96402C8.11088 7.96402 8.21948 7.93298 8.31355 7.87443C8.31406 7.87412 8.31457 7.8738 8.31507 7.87348L13.9667 4.28212V4.00001C13.9667 3.83204 13.9 3.67095 13.7812 3.55217C13.6624 3.4334 13.5014 3.36667 13.3334 3.36667H2.66672C2.49875 3.36667 2.33766 3.4334 2.21889 3.55217C2.10012 3.67095 2.03339 3.83204 2.03339 4.00001V4.28212ZM9.96672 12.6667C9.96672 12.2801 10.2801 11.9667 10.6667 11.9667H14.6667C15.0533 11.9667 15.3667 12.2801 15.3667 12.6667C15.3667 13.0533 15.0533 13.3667 14.6667 13.3667H10.6667C10.2801 13.3667 9.96672 13.0533 9.96672 12.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default MailMinusIcon;
