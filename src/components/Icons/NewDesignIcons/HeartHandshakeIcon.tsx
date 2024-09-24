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

const HeartHandshakeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.9123 2.57895C2.73121 1.76005 3.84189 1.29999 5 1.29999C5.6568 1.29999 6.2569 1.39395 6.84452 1.64988C7.24887 1.82599 7.62646 2.06973 8 2.38265C8.37354 2.06973 8.75113 1.82599 9.15548 1.64988C9.74311 1.39395 10.3432 1.29999 11 1.29999C12.1581 1.29999 13.2688 1.76005 14.0877 2.57895C14.9066 3.39786 15.3667 4.50854 15.3667 5.66665C15.3667 6.67414 15.0032 7.53419 14.5117 8.26566C14.4953 8.29378 14.4767 8.32104 14.456 8.34722C14.0595 8.91881 13.5882 9.41023 13.1591 9.83083L12.4956 10.4943C12.4954 10.4945 12.4958 10.4941 12.4956 10.4943C12.4954 10.4945 12.4945 10.4954 12.4943 10.4956L10.4954 12.4945C10.4953 12.4947 10.4956 12.4944 10.4954 12.4945C10.4953 12.4947 10.4947 12.4953 10.4945 12.4954L8.49498 14.495C8.3637 14.6262 8.18565 14.7 8 14.7C7.81435 14.7 7.6363 14.6262 7.50503 14.495L2.84253 9.83247C1.83941 8.86227 0.633335 7.51455 0.633335 5.66665C0.633335 4.50854 1.09339 3.39786 1.9123 2.57895ZM10 11.01L9.16164 10.1717C8.88828 9.89831 8.44506 9.89831 8.17169 10.1717C7.89833 10.445 7.89833 10.8883 8.17169 11.1616L9.01005 12L8 13.01L3.82831 8.83835L3.81985 8.83003C2.82382 7.8672 2.03334 6.88279 2.03334 5.66665C2.03334 4.87985 2.34589 4.12526 2.90225 3.5689C3.45861 3.01255 4.21319 2.69999 5 2.69999C5.51654 2.69999 5.91644 2.77269 6.28548 2.93343C6.50918 3.03086 6.7373 3.1675 6.98312 3.36026L5.5335 4.80988C5.53315 4.81023 5.5328 4.81058 5.53245 4.81093C5.33195 5.01025 5.17279 5.24721 5.06412 5.50822C4.95526 5.76968 4.89922 6.0501 4.89922 6.33332C4.89922 6.61654 4.95526 6.89696 5.06412 7.15842C5.17281 7.41948 5.33201 7.65649 5.53257 7.85584C6.34585 8.66821 7.64132 8.69228 8.49395 7.92785L9.87706 6.65838C9.8775 6.65798 9.87794 6.65758 9.87838 6.65718C10.0953 6.46094 10.3774 6.35225 10.67 6.35225C10.9632 6.35225 11.2458 6.46138 11.4629 6.65838L11.4654 6.66064L12.9576 8.00156C12.7221 8.28272 12.4574 8.55836 12.1768 8.83334L12 9.01004L11.1616 8.17168C10.8883 7.89831 10.4451 7.89831 10.1717 8.17168C9.89833 8.44505 9.89833 8.88826 10.1717 9.16163L11.0101 9.99999L10 11.01ZM13.7239 6.80791C13.8784 6.4472 13.9667 6.06946 13.9667 5.66665C13.9667 4.87985 13.6541 4.12526 13.0978 3.5689C12.5414 3.01255 11.7868 2.69999 11 2.69999C10.4835 2.69999 10.0836 2.77269 9.71452 2.93343C9.34095 3.09613 8.95508 3.36819 8.49498 3.8283L6.51984 5.80343C6.44993 5.87284 6.39444 5.95538 6.35658 6.04633C6.31871 6.13727 6.29922 6.23481 6.29922 6.33332C6.29922 6.43183 6.31871 6.52937 6.35658 6.62031C6.39444 6.71126 6.44993 6.79381 6.51984 6.86321L6.52164 6.86501C6.80096 7.14433 7.24981 7.16066 7.55681 6.88775L8.93627 5.62158C9.41096 5.19085 10.029 4.95225 10.67 4.95225C11.3104 4.95225 11.9278 5.19039 12.4023 5.62033C12.4028 5.62075 12.4033 5.62117 12.4037 5.62159L13.7239 6.80791Z"
      fill="currentColor"
    />
  </svg>
);
export default HeartHandshakeIcon;
