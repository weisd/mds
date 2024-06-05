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

const MessageCircleHeartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.05964 2.57973C5.35025 1.63935 6.93429 1.19084 8.52632 1.31504C10.1184 1.43924 11.6137 2.12798 12.7428 3.25713C13.872 4.38629 14.5607 5.88161 14.6849 7.47364C14.8091 9.06567 14.3606 10.6497 13.4202 11.9403C12.4799 13.2309 11.1094 14.1432 9.55593 14.5128C8.10088 14.859 6.57484 14.7077 5.21981 14.0883L1.55805 15.3296C1.30573 15.4151 1.02673 15.35 0.838345 15.1616C0.649957 14.9732 0.584842 14.6942 0.670374 14.4419L1.91165 10.7802C1.29222 9.42513 1.14097 7.89909 1.48714 6.44404C1.85674 4.89053 2.76903 3.52011 4.05964 2.57973ZM8.41744 2.7108C7.15807 2.61256 5.90502 2.96734 4.88409 3.71123C3.86316 4.45511 3.14149 5.53917 2.84913 6.76807C2.55676 7.99696 2.71293 9.28987 3.28949 10.4138C3.37593 10.5823 3.3904 10.7787 3.3296 10.958L2.45148 13.5485L5.04193 12.6704C5.22129 12.6096 5.41764 12.624 5.58615 12.7105C6.71009 13.287 8.003 13.4432 9.2319 13.1508C10.4608 12.8585 11.5449 12.1368 12.2887 11.1159C13.0326 10.0949 13.3874 8.8419 13.2892 7.58253C13.1909 6.32316 12.6461 5.1403 11.7529 4.24708C10.8597 3.35387 9.6768 2.80905 8.41744 2.7108ZM7.94875 5.42864C8.35578 5.12406 8.85272 4.95688 9.36665 4.95688C9.92578 4.95688 10.4648 5.15475 10.8898 5.51215C10.9622 5.54979 11.0292 5.60082 11.087 5.66504C11.4951 6.11849 11.7369 6.70388 11.7249 7.3301C11.7127 7.96223 11.4431 8.58017 10.9283 9.09495L10.9213 9.10193L10.9213 9.10188L8.52128 11.4352C8.24959 11.6993 7.81705 11.6993 7.54537 11.4352L5.17806 9.13366C4.93612 8.94899 4.73285 8.71828 4.58007 8.45462C4.41817 8.1752 4.31655 7.86498 4.28177 7.54392C4.247 7.22287 4.27982 6.89808 4.37814 6.59048C4.47646 6.28288 4.6381 5.99926 4.85265 5.7579C5.06719 5.51653 5.3299 5.32276 5.62385 5.18906C5.91781 5.05535 6.2365 4.98467 6.55942 4.98157C6.88235 4.97846 7.20234 5.04301 7.49881 5.17104C7.6584 5.23996 7.80927 5.32646 7.94875 5.42864ZM8.72367 6.60173L8.55999 6.81998C8.44385 6.97483 8.26878 7.07468 8.07637 7.0958C7.88396 7.11692 7.6914 7.05743 7.54443 6.93146L7.3111 6.73146C7.29049 6.71379 7.27092 6.69494 7.2525 6.675C7.16598 6.58135 7.06081 6.50686 6.94376 6.45631C6.82671 6.40576 6.70037 6.38028 6.57288 6.3815C6.44538 6.38273 6.31956 6.41063 6.2035 6.46342C6.08744 6.51621 5.98373 6.59271 5.89902 6.68801C5.81431 6.7833 5.7505 6.89528 5.71168 7.01672C5.67286 7.13817 5.6599 7.2664 5.67363 7.39315C5.68736 7.51991 5.72748 7.64239 5.7914 7.75271C5.85533 7.86302 5.94164 7.95873 6.04479 8.03368C6.07179 8.0533 6.09735 8.07482 6.12127 8.09808L8.03332 9.95702L9.94155 8.10179C10.2243 7.81767 10.3206 7.53684 10.3251 7.30319C10.329 7.10098 10.2649 6.89348 10.1303 6.70578C10.0999 6.68431 10.0708 6.66012 10.0433 6.63321C9.86262 6.45609 9.61968 6.35688 9.36665 6.35688C9.12903 6.35688 8.9003 6.44438 8.72367 6.60173Z"
      fill="currentColor"
    />
  </svg>
);
export default MessageCircleHeartIcon;
