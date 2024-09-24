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

const CircleOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838386 0.838357C1.11175 0.56499 1.55497 0.56499 1.82834 0.838357L13.2149 12.2249L15.1617 14.1717C15.435 14.4451 15.435 14.8883 15.1617 15.1616C14.8883 15.435 14.4451 15.435 14.1717 15.1616L12.6965 13.6864C12.1323 14.1524 11.5008 14.5327 10.8224 14.8137C9.92756 15.1843 8.96854 15.3751 8.00003 15.3751C7.03152 15.3751 6.07249 15.1843 5.1777 14.8137C4.28292 14.4431 3.46989 13.8998 2.78505 13.215C2.10021 12.5301 1.55697 11.7171 1.18633 10.8223C0.815701 9.92754 0.624939 8.96851 0.624939 8C0.624939 7.03149 0.815701 6.07246 1.18633 5.17767C1.46736 4.49921 1.84763 3.86775 2.31362 3.30354L0.838386 1.82831C0.565019 1.55494 0.565019 1.11172 0.838386 0.838357ZM3.30912 4.29904C2.96968 4.72928 2.69034 5.20507 2.47977 5.71343C2.17949 6.43836 2.02494 7.21534 2.02494 8C2.02494 8.78466 2.17949 9.56163 2.47977 10.2866C2.78004 11.0115 3.22016 11.6702 3.775 12.225C4.32984 12.7799 4.98853 13.22 5.71346 13.5203C6.43839 13.8205 7.21537 13.9751 8.00003 13.9751C8.78469 13.9751 9.56166 13.8205 10.2866 13.5203C10.795 13.3097 11.2707 13.0303 11.701 12.6909L3.30912 4.29904ZM9.21671 2.16352C8.08159 1.92548 6.9017 2.02342 5.82136 2.44536C5.46125 2.58601 5.05531 2.4081 4.91466 2.048C4.77401 1.68789 4.95192 1.28195 5.31203 1.1413C6.64585 0.620346 8.1026 0.499426 9.50406 0.79333C10.9055 1.08723 12.191 1.78322 13.2031 2.79615C14.2153 3.80908 14.9102 5.09505 15.2031 6.49674C15.4959 7.89843 15.3738 9.35508 14.8519 10.6885C14.7109 11.0485 14.3049 11.2261 13.9449 11.0852C13.5849 10.9442 13.4073 10.5382 13.5482 10.1782C13.971 9.09815 14.0698 7.91833 13.8327 6.78303C13.5955 5.64772 13.0326 4.60615 12.2128 3.78572C11.393 2.96529 10.3518 2.40157 9.21671 2.16352Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleOffIcon;
