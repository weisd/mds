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

const RocketIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.9363 2.06229C12.8431 2.15649 11.7788 2.47806 10.8127 3.00942C9.63371 3.65784 8.64026 4.5971 7.9268 5.73786L7.92287 5.74414C7.49768 6.40824 7.12961 7.1069 6.82254 7.83262L8.16908 9.17916C8.90357 8.87284 9.61125 8.50522 10.2846 8.08006C13.0687 6.20966 13.793 3.76962 13.9363 2.06229ZM7.29998 10.29L5.71003 8.70001H2.66665C2.45912 8.70001 2.26228 8.60792 2.12929 8.44861C1.99629 8.2893 1.94084 8.07918 1.9779 7.87499L2.66665 8.00001C1.9779 7.87499 1.97787 7.87514 1.9779 7.87499L1.97817 7.87352L1.97858 7.87131L1.97981 7.86469L1.98399 7.84294C1.98754 7.82476 1.99264 7.79934 1.99935 7.76751C2.01276 7.70392 2.03268 7.6144 2.05963 7.50576C2.11326 7.28953 2.19603 6.99231 2.31277 6.67048C2.52926 6.07364 2.92449 5.21062 3.61077 4.75153L3.61169 4.75091C4.01468 4.48225 4.48597 4.37216 4.91166 4.3326C5.34338 4.29247 5.78142 4.32015 6.16112 4.36909C6.50237 4.41307 6.81173 4.47626 7.04913 4.53244C7.85758 3.3973 8.9127 2.45662 10.138 1.78272C11.5262 1.0192 13.0867 0.623531 14.671 0.633357C15.0559 0.635745 15.3666 0.948439 15.3666 1.33334C15.3666 3.20991 14.8408 6.4788 11.4693 8.95822C11.525 9.19464 11.5874 9.50113 11.6309 9.83887C11.6798 10.2186 11.7075 10.6566 11.6674 11.0883C11.6278 11.514 11.5177 11.9853 11.2491 12.3883L11.2485 12.3892C10.7894 13.0755 9.92636 13.4707 9.32951 13.6872C9.00768 13.804 8.71046 13.8867 8.49423 13.9404C8.38559 13.9673 8.29607 13.9872 8.23248 14.0006C8.20065 14.0073 8.17523 14.0124 8.15706 14.016L8.13531 14.0202L8.12868 14.0214L8.1253 14.022C8.12515 14.0221 8.125 14.0221 7.99998 13.3333L8.1253 14.022C7.9211 14.0591 7.71069 14.0037 7.55138 13.8707C7.39207 13.7377 7.29998 13.5409 7.29998 13.3333V10.29ZM8.69998 12.4241C8.74985 12.4074 8.80068 12.3898 8.85212 12.3711C9.42668 12.1627 9.89684 11.8914 10.0846 11.6112C10.1757 11.4741 10.2455 11.2589 10.2734 10.9588C10.3008 10.6642 10.2835 10.3364 10.2424 10.0178C10.2306 9.92665 10.2171 9.83777 10.2027 9.75239C9.7151 10.0197 9.2135 10.2608 8.69998 10.4746V12.4241ZM7.32444 5.36112C7.12026 6.00013 7.12039 6.00017 7.12051 6.00021L7.11835 5.99954L7.10413 5.99517C7.09068 5.99108 7.06948 5.98474 7.04135 5.97667C6.98502 5.96051 6.90131 5.93751 6.79677 5.91174C6.64999 5.87554 6.46517 5.83462 6.25952 5.79936C6.41194 5.52563 6.57277 5.25649 6.74182 4.99231M5.52774 7.30001C5.74434 6.7868 5.98864 6.28585 6.25952 5.79936C6.17051 5.7841 6.07759 5.7699 5.98217 5.7576C5.66354 5.71654 5.33575 5.69921 5.04122 5.72659C4.74101 5.75449 4.52578 5.82428 4.38875 5.91546C4.10852 6.10323 3.83726 6.57335 3.62886 7.14787C3.6102 7.19931 3.59255 7.25014 3.57588 7.30001H5.52774ZM2.54915 10.4645C2.95496 10.1226 3.47272 9.94263 4.0031 9.95903C4.5336 9.97544 5.03935 10.1872 5.42329 10.5536L5.43186 10.5618C6.23742 11.3572 6.22635 12.6326 5.53528 13.4511C5.23591 13.8071 4.82482 14.0673 4.432 14.2592C4.03086 14.4551 3.5985 14.6038 3.21082 14.7147C2.82091 14.8262 2.46138 14.9037 2.19993 14.9533C2.06872 14.9783 1.961 14.9964 1.88502 15.0084C1.847 15.0145 1.81685 15.019 1.79559 15.0221L1.77047 15.0257L1.76314 15.0267L1.75967 15.0271C1.75953 15.0272 1.75941 15.0272 1.66665 14.3333C0.97282 14.2406 0.972838 14.2405 0.972856 14.2403L0.97301 14.2392L0.973325 14.2369L0.974338 14.2295L0.977922 14.2044C0.981013 14.1831 0.98553 14.153 0.991556 14.115C1.0036 14.039 1.02173 13.9313 1.04664 13.8001C1.09629 13.5386 1.17377 13.1791 1.28531 12.7892C1.3962 12.4015 1.54486 11.9691 1.7408 11.568C1.93271 11.1751 2.19299 10.7639 2.54915 10.4645ZM1.66665 14.3333L0.972856 14.2403C0.943953 14.4565 1.01744 14.6741 1.17167 14.8283C1.3259 14.9825 1.54348 15.056 1.75967 15.0271L1.66665 14.3333ZM2.5595 13.4405C2.64588 13.4185 2.73505 13.3946 2.82581 13.3687C3.16646 13.2712 3.51493 13.1491 3.81755 13.0012C4.12818 12.8495 4.34342 12.6933 4.46399 12.5498L4.46537 12.5481C4.71888 12.2482 4.69594 11.8074 4.45226 11.5622C4.31849 11.4366 4.14339 11.364 3.95983 11.3584C3.77423 11.3526 3.59306 11.4156 3.45107 11.5353L3.45022 11.536C3.30668 11.6566 3.15048 11.8718 2.99875 12.1824C2.85094 12.4851 2.72876 12.8335 2.63132 13.1742C2.60536 13.2649 2.58145 13.3541 2.5595 13.4405ZM7.87421 12.6447C7.87409 12.6448 7.8741 12.6448 7.87421 12.6447V12.6447Z"
      fill="currentColor"
    />
  </svg>
);
export default RocketIcon;
