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

const BellMinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.03333C6.1866 2.03333 4.7 3.51993 4.7 5.33333C4.7 7.7698 4.17694 9.38742 3.61452 10.4185C3.57372 10.4933 3.53279 10.5649 3.49193 10.6333H12.5102C12.1617 10.0475 11.8117 9.23687 11.5817 8.14421C11.502 7.7659 11.7441 7.39466 12.1225 7.31501C12.5008 7.23537 12.872 7.47748 12.9516 7.85579C13.199 9.03066 13.5943 9.77482 13.9042 10.2115C14.0599 10.4309 14.1963 10.5759 14.2858 10.6608C14.3307 10.7033 14.3639 10.7309 14.3821 10.7453C14.3898 10.7515 14.3949 10.7552 14.3969 10.7567C14.6475 10.9292 14.7583 11.2443 14.67 11.5362C14.5806 11.8314 14.3085 12.0333 14 12.0333H2C1.69153 12.0333 1.41942 11.8314 1.33003 11.5362C1.24164 11.2443 1.35251 10.9291 1.60315 10.7567C1.60558 10.755 1.60803 10.7534 1.61049 10.7517C1.6106 10.7516 1.61071 10.7516 1.61082 10.7515C1.61082 10.7515 1.61081 10.7515 1.61081 10.7515L1.61049 10.7517L1.60996 10.7521L1.60839 10.7531L1.60578 10.7549L1.60266 10.7571C1.60211 10.7574 1.60196 10.7576 1.6022 10.7574C1.60235 10.7573 1.60267 10.757 1.60315 10.7567C1.6035 10.7564 1.60393 10.7561 1.60446 10.7557C1.60911 10.7523 1.62054 10.7436 1.6378 10.7292C1.67232 10.7004 1.73028 10.6488 1.80433 10.5707C1.95205 10.4147 2.16571 10.151 2.38547 9.74813C2.82305 8.94591 3.3 7.56353 3.3 5.33333C3.3 2.74673 5.4134 0.633331 8 0.633331C9.41213 0.633331 10.6612 1.26119 11.516 2.19366C11.7772 2.47864 11.758 2.92144 11.473 3.18267C11.188 3.44391 10.7452 3.42465 10.484 3.13967C9.87209 2.47214 8.98786 2.03333 8 2.03333ZM9.3 5.33333C9.3 4.94673 9.6134 4.63333 10 4.63333H14C14.3866 4.63333 14.7 4.94673 14.7 5.33333C14.7 5.71993 14.3866 6.03333 14 6.03333H10C9.6134 6.03333 9.3 5.71993 9.3 5.33333ZM6.52941 13.3866C6.86819 13.2003 7.29381 13.324 7.48007 13.6627C7.53126 13.7559 7.60651 13.8335 7.69797 13.8876C7.78944 13.9417 7.89374 13.9702 8 13.9702C8.10625 13.9702 8.21056 13.9417 8.30202 13.8876C8.39348 13.8335 8.46874 13.7559 8.51993 13.6627C8.70619 13.324 9.13181 13.2003 9.47058 13.3866C9.80935 13.5729 9.93299 13.9985 9.74673 14.3372C9.57475 14.6501 9.32192 14.9109 9.01465 15.0927C8.70739 15.2744 8.35697 15.3702 8 15.3702C7.64302 15.3702 7.2926 15.2744 6.98534 15.0927C6.67808 14.9109 6.42525 14.6501 6.25326 14.3372C6.067 13.9985 6.19064 13.5729 6.52941 13.3866Z"
      fill="currentColor"
    />
  </svg>
);
export default BellMinusIcon;
