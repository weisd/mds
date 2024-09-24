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

const MonitorUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 2.69999C2.31685 2.69999 2.0333 2.98354 2.0333 3.33332V9.99999C2.0333 10.3498 2.31685 10.6333 2.66663 10.6333H13.3333C13.6831 10.6333 13.9666 10.3498 13.9666 9.99999V3.33332C13.9666 2.98354 13.6831 2.69999 13.3333 2.69999H2.66663ZM8.69997 12.0333H13.3333C14.4563 12.0333 15.3666 11.123 15.3666 9.99999V3.33332C15.3666 2.21034 14.4563 1.29999 13.3333 1.29999H2.66663C1.54366 1.29999 0.633301 2.21034 0.633301 3.33332V9.99999C0.633301 11.123 1.54366 12.0333 2.66663 12.0333H7.29997V13.3H5.3333C4.9467 13.3 4.6333 13.6134 4.6333 14C4.6333 14.3866 4.9467 14.7 5.3333 14.7H10.6666C11.0532 14.7 11.3666 14.3866 11.3666 14C11.3666 13.6134 11.0532 13.3 10.6666 13.3H8.69997V12.0333ZM7.99997 3.96665C8.18562 3.96665 8.36367 4.0404 8.49494 4.17168L10.4949 6.17168C10.7683 6.44505 10.7683 6.88826 10.4949 7.16163C10.2216 7.435 9.77836 7.435 9.50499 7.16163L8.69997 6.3566V8.66665C8.69997 9.05325 8.38657 9.36665 7.99997 9.36665C7.61337 9.36665 7.29997 9.05325 7.29997 8.66665V6.3566L6.49494 7.16163C6.22157 7.435 5.77836 7.435 5.50499 7.16163C5.23163 6.88826 5.23163 6.44505 5.50499 6.17168L7.50499 4.17168C7.63627 4.0404 7.81432 3.96665 7.99997 3.96665Z"
      fill="currentColor"
    />
  </svg>
);
export default MonitorUpIcon;
