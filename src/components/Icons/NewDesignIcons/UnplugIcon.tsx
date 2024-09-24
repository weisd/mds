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

const UnplugIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.1617 0.838326C15.435 1.11169 15.435 1.55491 15.1617 1.82828L13.6566 3.3333L14.0275 3.70413C14.0273 3.70396 14.0277 3.70431 14.0275 3.70413C14.2416 3.9177 14.4121 4.17195 14.5281 4.45128C14.6442 4.73085 14.704 5.03059 14.704 5.3333C14.704 5.63601 14.6442 5.93575 14.5281 6.21532C14.4121 6.49469 14.2421 6.74843 14.0279 6.96202C14.0278 6.96217 14.0281 6.96187 14.0279 6.96202L12.495 8.49494C12.3637 8.62622 12.1857 8.69997 12 8.69997C11.8144 8.69997 11.6363 8.62622 11.5051 8.49494L7.50505 4.49494C7.37378 4.36367 7.30003 4.18562 7.30003 3.99997C7.30003 3.81432 7.37378 3.63627 7.50505 3.50499L9.03753 1.97252C9.03734 1.97271 9.03772 1.97233 9.03753 1.97252C9.25109 1.75837 9.50536 1.58786 9.78468 1.47188C10.0642 1.3558 10.364 1.29604 10.6667 1.29604C10.9694 1.29604 11.2691 1.3558 11.5487 1.47188C11.8281 1.58787 12.0818 1.75783 12.2954 1.97201C12.2952 1.97184 12.2955 1.97218 12.2954 1.97201L12.6667 2.34335L14.1717 0.838326C14.4451 0.564959 14.8883 0.564959 15.1617 0.838326ZM12.1715 3.82803L11.3042 2.96075C11.2206 2.87685 11.1212 2.81027 11.0118 2.76485C10.9024 2.71942 10.7851 2.69604 10.6667 2.69604C10.5482 2.69604 10.431 2.71942 10.3216 2.76485C10.2122 2.81027 10.1128 2.87684 10.0292 2.96075L8.98998 3.99997L12 7.01002L13.0384 5.97166L13.0392 5.9708C13.1231 5.88719 13.1897 5.78783 13.2351 5.67844C13.2806 5.56904 13.304 5.45175 13.304 5.3333C13.304 5.21485 13.2806 5.09756 13.2351 4.98816C13.1897 4.87877 13.1232 4.77941 13.0392 4.6958L12.1715 3.82803ZM7.16167 6.83833C7.43504 7.11169 7.43504 7.55491 7.16167 7.82828L5.98998 8.99997L7.00003 10.01L8.17172 8.83833C8.44509 8.56496 8.8883 8.56496 9.16167 8.83833C9.43504 9.11169 9.43504 9.55491 9.16167 9.82827L7.98998 11L8.495 11.505C8.62628 11.6363 8.70003 11.8143 8.70003 12C8.70003 12.1856 8.62628 12.3637 8.495 12.4949L6.96253 14.0274C6.96238 14.0276 6.96268 14.0273 6.96253 14.0274C6.74894 14.2416 6.49475 14.412 6.21538 14.5281C5.93581 14.6441 5.63607 14.7039 5.33336 14.7039C5.03065 14.7039 4.73091 14.6441 4.45135 14.5281C4.17201 14.4121 3.91829 14.2421 3.70473 14.0279C3.70455 14.0278 3.7049 14.0281 3.70473 14.0279L3.33336 13.6566L1.82834 15.1616C1.55497 15.435 1.11175 15.435 0.838387 15.1616C0.56502 14.8882 0.56502 14.445 0.838387 14.1717L2.34341 12.6666L1.97258 12.2958C1.97241 12.2956 1.97275 12.296 1.97258 12.2958C1.7584 12.0822 1.58794 11.828 1.47194 11.5486C1.35586 11.2691 1.2961 10.9693 1.2961 10.6666C1.2961 10.3639 1.35586 10.0642 1.47194 9.78462C1.58792 9.5053 1.75786 9.2516 1.97201 9.03804C1.97182 9.03823 1.9722 9.03785 1.97201 9.03804L3.50505 7.50499C3.63633 7.37372 3.81438 7.29997 4.00003 7.29997C4.18568 7.29997 4.36373 7.37372 4.495 7.50499L5.00003 8.01002L6.17172 6.83833C6.44509 6.56496 6.8883 6.56496 7.16167 6.83833ZM4.00003 8.98992L2.96081 10.0291C2.87691 10.1127 2.81033 10.2121 2.76491 10.3215C2.71948 10.4309 2.6961 10.5482 2.6961 10.6666C2.6961 10.7851 2.71948 10.9024 2.76491 11.0118C2.81033 11.1212 2.87691 11.2205 2.96081 11.3041L2.96167 11.305L3.82809 12.1714L4.69586 13.0392C4.77948 13.1231 4.87883 13.1897 4.98822 13.2351C5.09762 13.2805 5.21491 13.3039 5.33336 13.3039C5.45181 13.3039 5.5691 13.2805 5.6785 13.2351C5.78789 13.1897 5.88725 13.1231 5.97086 13.0392L5.97172 13.0383L7.01008 12L6.50523 11.4951L4.00003 8.98992Z"
      fill="currentColor"
    />
  </svg>
);
export default UnplugIcon;
