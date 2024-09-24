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

const TangentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.48808 3.52193C9.36737 3.26193 9.29999 2.97215 9.29999 2.66663C9.29999 1.54366 10.2103 0.633301 11.3333 0.633301C12.4563 0.633301 13.3667 1.54366 13.3667 2.66663C13.3667 3.78961 12.4563 4.69997 11.3333 4.69997C11.0278 4.69997 10.738 4.63259 10.478 4.51187L9.22382 5.76609C10.0168 5.81576 10.8637 5.99065 11.6397 6.19886C12.5241 6.43613 13.3499 6.72592 13.9521 6.95509C14.254 7.06998 14.5017 7.17036 14.6747 7.24239C14.7612 7.27842 14.8292 7.30741 14.8761 7.32762L14.9303 7.35116L14.9449 7.3576L14.9503 7.35997L14.6667 7.99995C14.951 7.36028 14.9503 7.35997 14.9503 7.35997C15.3036 7.51699 15.4634 7.93097 15.3063 8.28425C15.1494 8.63748 14.7358 8.79659 14.3825 8.63968L14.3797 8.63844L14.3686 8.63354L14.3217 8.6132C14.2799 8.59516 14.2173 8.56848 14.1366 8.53485C13.9749 8.46756 13.7408 8.37262 13.4542 8.26356C12.8793 8.04481 12.1009 7.77211 11.277 7.55104C10.4465 7.32823 9.60257 7.16697 8.88733 7.15294C8.14045 7.1383 7.70254 7.28737 7.49499 7.49492C7.28743 7.70248 7.13836 8.14039 7.153 8.88727C7.16703 9.60251 7.32829 10.4464 7.5511 11.2769C7.77217 12.1009 8.04487 12.8793 8.26362 13.4541C8.37269 13.7407 8.46762 13.9749 8.53491 14.1365C8.56854 14.2173 8.59522 14.2798 8.61326 14.3217L8.6336 14.3685L8.63851 14.3797L8.63957 14.3821C8.79648 14.7353 8.63754 15.1493 8.28431 15.3063C7.93103 15.4633 7.51736 15.3042 7.36034 14.9509L7.35766 14.9449L7.35122 14.9302L7.32768 14.876C7.30747 14.8291 7.27849 14.7611 7.24245 14.6746C7.17042 14.5016 7.07004 14.254 6.95515 13.952C6.72598 13.3498 6.43619 12.524 6.19892 11.6397C5.99071 10.8636 5.81582 10.0167 5.76615 9.22376L4.5119 10.478C4.63263 10.738 4.70003 11.0278 4.70003 11.3334C4.70003 12.4564 3.78967 13.3667 2.6667 13.3667C1.54372 13.3667 0.633362 12.4564 0.633362 11.3334C0.633362 10.2104 1.54372 9.30005 2.6667 9.30005C2.97218 9.30005 3.26193 9.36742 3.5219 9.48811L9.48808 3.52193ZM10.7 2.66663C10.7 2.31685 10.9835 2.0333 11.3333 2.0333C11.6831 2.0333 11.9667 2.31685 11.9667 2.66663C11.9667 3.01641 11.6831 3.29997 11.3333 3.29997C11.1771 3.29997 11.0341 3.2434 10.9236 3.14963C10.9124 3.13664 10.9006 3.12397 10.8883 3.11164C10.876 3.09931 10.8633 3.08754 10.8503 3.07632C10.7566 2.96588 10.7 2.82286 10.7 2.66663ZM3.1117 10.8883C3.09952 10.8761 3.08788 10.8636 3.07678 10.8507C2.96629 10.7568 2.82311 10.7 2.6667 10.7C2.31691 10.7 2.03336 10.9836 2.03336 11.3334C2.03336 11.6832 2.31691 11.9667 2.6667 11.9667C3.01648 11.9667 3.30003 11.6832 3.30003 11.3334C3.30003 11.1769 3.2433 11.0337 3.1493 10.9232C3.13645 10.9121 3.12391 10.9005 3.1117 10.8883Z"
      fill="currentColor"
    />
  </svg>
);
export default TangentIcon;
