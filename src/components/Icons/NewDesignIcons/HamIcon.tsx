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

const HamIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.0712 0.595542C11.3913 0.481487 11.7323 0.437734 12.0709 0.46726C12.4095 0.496786 12.7378 0.598898 13.0334 0.76665C13.329 0.934401 13.585 1.16386 13.784 1.4394C13.8946 1.59248 13.9861 1.75779 14.0569 1.93165C14.2358 2.00035 14.4062 2.0907 14.5641 2.20109C14.8459 2.39801 15.0815 2.65395 15.2543 2.9511C15.4272 3.24826 15.5333 3.5795 15.5652 3.9218C15.5971 4.26409 15.5541 4.60924 15.4392 4.93323C15.3242 5.25722 15.14 5.55229 14.8995 5.79791C14.659 6.04353 14.3678 6.23382 14.0463 6.35554C13.7248 6.47727 13.3806 6.52751 13.0377 6.50276C12.8787 6.49129 12.7216 6.4638 12.569 6.42099L11.844 7.146C11.8543 7.18284 11.8641 7.2199 11.8736 7.25716C12.0702 8.03093 12.0831 8.87373 11.9293 9.73286C11.7755 10.5921 11.4567 11.4598 10.9989 12.2889C10.5408 13.1184 9.94888 13.8997 9.25766 14.591C8.47591 15.3727 7.30121 15.5177 6.13338 15.2258C4.95743 14.9319 3.76063 14.1996 2.78049 13.2195C1.80036 12.2394 1.06811 11.0426 0.774194 9.86662C0.482314 8.6988 0.627297 7.52409 1.40904 6.74235C2.10026 6.05113 2.88161 5.45923 3.71112 5.00114C4.54024 4.54327 5.40786 4.22447 6.26714 4.07069C7.12627 3.91694 7.96907 3.92979 8.74285 4.1264C8.78025 4.1359 8.81744 4.14582 8.85441 4.15616L9.57793 3.43229C9.53741 3.27969 9.51215 3.12299 9.50279 2.96447C9.48276 2.62518 9.53604 2.28555 9.65902 1.96869C9.782 1.65183 9.97178 1.36517 10.2155 1.12823C10.4591 0.891278 10.751 0.709597 11.0712 0.595542ZM8.77078 5.60132C8.78266 5.60636 8.79465 5.61104 8.80674 5.61539C9.1794 5.76378 9.49975 5.97439 9.76268 6.23733C10.0244 6.49902 10.2343 6.81761 10.3825 7.18802C10.3881 7.20401 10.3943 7.21983 10.4011 7.23546C10.4458 7.35262 10.4844 7.47483 10.5167 7.60192C10.6573 8.15522 10.6751 8.79395 10.5512 9.48624C10.4388 10.1142 10.213 10.7678 9.87909 11.4142C9.57674 10.2551 8.85176 9.07934 7.88621 8.1138C6.92066 7.14825 5.74486 6.42326 4.58585 6.12091C5.23223 5.787 5.88583 5.56117 6.51377 5.44879C7.20605 5.3249 7.84479 5.3427 8.39808 5.48328C8.52744 5.51615 8.65172 5.5556 8.77078 5.60132ZM8.26771 13.601C8.57753 13.2912 8.7568 12.6964 8.53429 11.8061C8.31381 10.924 7.73515 9.94264 6.89626 9.10375C6.05737 8.26485 5.07601 7.6862 4.19386 7.46572C3.30357 7.2432 2.70882 7.42247 2.39899 7.7323C2.08917 8.04212 1.9099 8.63688 2.13241 9.52716C2.3529 10.4093 2.93155 11.3907 3.77044 12.2296C4.60934 13.0685 5.5907 13.6471 6.47285 13.8676C7.36313 14.0901 7.95789 13.9108 8.26771 13.601ZM11.2132 5.79682C11.0763 5.60103 10.9226 5.41735 10.7526 5.24738C10.5827 5.07746 10.3991 4.92385 10.2034 4.78691L10.8884 4.10151C11.1059 3.88397 11.1558 3.54999 11.0116 3.27835C10.9465 3.15574 10.9085 3.02054 10.9004 2.88196C10.8922 2.74337 10.9139 2.60465 10.9642 2.47523C11.0144 2.3458 11.0919 2.22872 11.1914 2.13194C11.291 2.03516 11.4102 1.96095 11.541 1.91436C11.6717 1.86778 11.811 1.84991 11.9493 1.86197C12.0876 1.87403 12.2217 1.91574 12.3424 1.98425C12.4632 2.05277 12.5678 2.14649 12.649 2.25904C12.7303 2.37159 12.7864 2.50032 12.8135 2.63648C12.8697 2.9193 13.0936 3.13869 13.3775 3.18918C13.5158 3.21377 13.6471 3.26819 13.7622 3.34866C13.8774 3.42912 13.9736 3.5337 14.0442 3.65512C14.1149 3.77654 14.1582 3.9119 14.1713 4.05177C14.1843 4.19164 14.1667 4.33267 14.1198 4.46505C14.0728 4.59744 13.9975 4.71801 13.8992 4.81838C13.801 4.91874 13.682 4.9965 13.5506 5.04624C13.4192 5.09598 13.2786 5.1165 13.1385 5.10639C12.9984 5.09628 12.8622 5.05578 12.7393 4.9877C12.4662 4.83636 12.1258 4.88422 11.905 5.10501L11.2132 5.79682ZM4.50504 9.83835C4.77841 9.56498 5.22163 9.56498 5.49499 9.83835L6.16166 10.505C6.43503 10.7784 6.43503 11.2216 6.16166 11.495C5.88829 11.7683 5.44508 11.7683 5.17171 11.495L4.50504 10.8283C4.23168 10.5549 4.23168 10.1117 4.50504 9.83835Z"
      fill="currentColor"
    />
  </svg>
);
export default HamIcon;
