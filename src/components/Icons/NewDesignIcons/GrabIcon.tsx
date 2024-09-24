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

const GrabIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.56221 3.89554C6.94354 3.51421 7.46072 3.29999 8 3.29999C8.53927 3.29999 9.05646 3.51421 9.43778 3.89554C9.53531 3.99306 9.6219 4.09948 9.69678 4.21287C9.99188 4.05273 10.3248 3.96665 10.6667 3.96665C11.2059 3.96665 11.7231 4.18088 12.1044 4.5622C12.3481 4.80584 12.5235 5.10493 12.6184 5.42981C12.8449 5.34476 13.0868 5.29999 13.3333 5.29999C13.8726 5.29999 14.3898 5.51421 14.7711 5.89554C15.1524 6.27686 15.3667 6.79405 15.3667 7.33332V9.33332C15.3667 10.9335 14.731 12.4681 13.5995 13.5995C12.4681 14.731 10.9335 15.3667 9.33333 15.3667H6.66666C5.06652 15.3667 3.53192 14.731 2.40045 13.5995C1.26898 12.4681 0.633331 10.9335 0.633331 9.33332C0.633331 8.79405 0.847557 8.27686 1.22888 7.89554C1.6102 7.51421 2.12739 7.29999 2.66666 7.29999C2.88383 7.29999 3.09742 7.33473 3.3 7.40114V5.99999C3.3 5.46071 3.51422 4.94353 3.89555 4.5622C4.27687 4.18088 4.79406 3.96665 5.33333 3.96665C5.67516 3.96665 6.00811 4.05273 6.30321 4.21287C6.37809 4.09948 6.46469 3.99306 6.56221 3.89554ZM7.36666 6.66665C7.36666 7.05325 7.05326 7.36665 6.66666 7.36665C6.28006 7.36665 5.96666 7.05325 5.96666 6.66665V5.99999C5.96666 5.83202 5.89994 5.67093 5.78116 5.55215C5.66239 5.43338 5.5013 5.36665 5.33333 5.36665C5.16536 5.36665 5.00427 5.43338 4.8855 5.55215C4.76672 5.67093 4.7 5.83202 4.7 5.99999V9.33332C4.7 9.71992 4.3866 10.0333 4 10.0333C3.6134 10.0333 3.3 9.71992 3.3 9.33332C3.3 9.16535 3.23327 9.00426 3.1145 8.88549C2.99573 8.76671 2.83463 8.69999 2.66666 8.69999C2.49869 8.69999 2.3376 8.76671 2.21883 8.88549C2.10006 9.00426 2.03333 9.16535 2.03333 9.33332C2.03333 10.5622 2.52148 11.7407 3.3904 12.6096C4.25932 13.4785 5.43783 13.9667 6.66666 13.9667H9.33333C10.5622 13.9667 11.7407 13.4785 12.6096 12.6096C13.4785 11.7407 13.9667 10.5622 13.9667 9.33332V7.33332C13.9667 7.16535 13.8999 7.00426 13.7812 6.88549C13.6624 6.76671 13.5013 6.69999 13.3333 6.69999C13.1654 6.69999 13.0043 6.76671 12.8855 6.88549C12.7667 7.00426 12.7 7.16535 12.7 7.33332V7.66665C12.7 8.05325 12.3866 8.36665 12 8.36665C11.6134 8.36665 11.3 8.05325 11.3 7.66665V5.99999C11.3 5.83202 11.2333 5.67093 11.1145 5.55215C10.9957 5.43338 10.8346 5.36665 10.6667 5.36665C10.4987 5.36665 10.3376 5.43338 10.2188 5.55215C10.1001 5.67093 10.0333 5.83202 10.0333 5.99999V6.93332C10.0333 7.31992 9.71993 7.63332 9.33333 7.63332C8.94673 7.63332 8.63333 7.31992 8.63333 6.93332V5.33332C8.63333 5.16535 8.5666 5.00426 8.44783 4.88549C8.32906 4.76671 8.16797 4.69999 8 4.69999C7.83203 4.69999 7.67094 4.76671 7.55216 4.88549C7.43339 5.00426 7.36666 5.16535 7.36666 5.33332V6.66665Z"
      fill="currentColor"
    />
  </svg>
);
export default GrabIcon;
