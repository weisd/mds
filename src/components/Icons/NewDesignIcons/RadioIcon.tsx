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

const RadioIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.76167 2.77168C4.03504 3.04504 4.03504 3.48826 3.76167 3.76163C1.43504 6.08826 1.43504 9.91171 3.76167 12.2383C4.03504 12.5117 4.03504 12.9549 3.76167 13.2283C3.48831 13.5017 3.04509 13.5017 2.77172 13.2283C-0.101643 10.3549 -0.101643 5.64504 2.77172 2.77168C3.04509 2.49831 3.48831 2.49831 3.76167 2.77168ZM12.2384 2.77168C12.5118 2.49831 12.955 2.49831 13.2283 2.77168C16.1017 5.64504 16.1017 10.2883 13.2283 13.1616C12.955 13.435 12.5118 13.435 12.2384 13.1616C11.965 12.8883 11.965 12.445 12.2384 12.1717C14.565 9.84504 14.565 6.08826 12.2384 3.76163C11.965 3.48826 11.965 3.04504 12.2384 2.77168ZM5.68437 4.62793C5.96349 4.89542 5.97291 5.33853 5.70542 5.61765C4.4259 6.9528 4.44071 9.05071 5.69501 10.305C5.96837 10.5784 5.96837 11.0216 5.69501 11.295C5.42164 11.5683 4.97842 11.5683 4.70506 11.295C2.89269 9.48259 2.9075 6.51383 4.69464 4.64898C4.96213 4.36986 5.40525 4.36044 5.68437 4.62793ZM10.3051 4.70501C10.5784 4.43164 11.0216 4.43164 11.295 4.70501C13.1074 6.51738 13.0926 9.48614 11.3054 11.351C11.0379 11.6301 10.5948 11.6395 10.3157 11.372C10.0366 11.1046 10.0272 10.6614 10.2946 10.3823C11.5742 9.04716 11.5594 6.94926 10.3051 5.69496C10.0317 5.42159 10.0317 4.97838 10.3051 4.70501ZM8.00003 7.36665C7.65025 7.36665 7.3667 7.6502 7.3667 7.99998C7.3667 8.34976 7.65025 8.63332 8.00003 8.63332C8.34981 8.63332 8.63337 8.34976 8.63337 7.99998C8.63337 7.6502 8.34981 7.36665 8.00003 7.36665ZM5.9667 7.99998C5.9667 6.877 6.87705 5.96665 8.00003 5.96665C9.12301 5.96665 10.0334 6.877 10.0334 7.99998C10.0334 9.12296 9.12301 10.0333 8.00003 10.0333C6.87705 10.0333 5.9667 9.12296 5.9667 7.99998Z"
      fill="currentColor"
    />
  </svg>
);
export default RadioIcon;
