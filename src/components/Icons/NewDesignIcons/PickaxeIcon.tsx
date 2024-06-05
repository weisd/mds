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

const PickaxeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.4382 1.3019C4.66869 0.930098 5.96435 0.825185 7.23862 0.994174C8.32743 1.13857 9.3792 1.48009 10.3429 2.00046L10.3766 1.96672C10.6321 1.71631 10.9756 1.57608 11.3333 1.57608C11.6911 1.57608 12.0345 1.71634 12.29 1.96675L12.295 1.97165L14.0333 3.70996C14.2837 3.96543 14.4239 4.30892 14.4239 4.66665C14.4239 5.02438 14.2836 5.36785 14.0332 5.62331L14.0283 5.62831L13.9995 5.65708C14.5198 6.62081 14.8614 7.67257 15.0058 8.76138C15.1747 10.0356 15.0698 11.3313 14.6981 12.5618C14.6795 12.6232 14.6526 12.6818 14.6181 12.7359C14.4861 12.9427 14.3009 13.1102 14.0819 13.2207C13.8629 13.3313 13.6181 13.3808 13.3734 13.3642C13.1286 13.3476 12.8928 13.2654 12.6907 13.1262C12.4887 12.987 12.3278 12.796 12.2251 12.5732C12.215 12.5514 12.206 12.529 12.1982 12.5062C11.7749 11.2663 11.1796 10.0932 10.4305 9.02097C10.2929 9.06665 10.1477 9.09055 10 9.09055C9.96747 9.09055 9.93505 9.08939 9.90281 9.0871L4.90765 14.0816C4.90764 14.0816 4.90766 14.0816 4.90765 14.0816C4.51116 14.4781 3.97339 14.7009 3.41268 14.7009C2.85195 14.7009 2.31419 14.4781 1.9177 14.0816C1.52121 13.6851 1.29846 13.1474 1.29846 12.5866C1.29846 12.0259 1.52121 11.4882 1.9177 11.0917L6.91285 6.09653C6.91058 6.0645 6.90944 6.0323 6.90944 5.99998C6.90944 5.85263 6.93323 5.70771 6.97872 5.57035C5.90654 4.82125 4.73354 4.22585 3.49376 3.80241C3.4712 3.79471 3.44905 3.78585 3.42739 3.77589C3.2043 3.67323 3.01298 3.51235 2.87357 3.31017C2.73417 3.10799 2.65181 2.87199 2.63517 2.62697C2.61853 2.38196 2.66821 2.13698 2.779 1.91781C2.88979 1.69864 3.05759 1.51337 3.26476 1.38149C3.31867 1.34716 3.37703 1.32039 3.4382 1.3019ZM8.40644 5.91684C8.41992 5.90438 8.43301 5.89131 8.44564 5.87763L10.9414 3.38183C10.9485 3.37504 10.9555 3.36807 10.9623 3.36095L11.3333 2.98993L13.0101 4.66665L12.639 5.03771C12.6319 5.04451 12.625 5.05145 12.6182 5.0585L10.123 7.55367C10.1094 7.56631 10.0963 7.5794 10.0838 7.5929L10 7.6767L8.32329 5.99998L8.40644 5.91684ZM7.66634 7.32293L2.90765 12.0816C2.77371 12.2156 2.69846 12.3972 2.69846 12.5866C2.69846 12.7761 2.77371 12.9577 2.90765 13.0917C3.04159 13.2256 3.22325 13.3009 3.41268 13.3009C3.6021 13.3009 3.78376 13.2256 3.9177 13.0917L8.67669 8.33328L7.66634 7.32293ZM11.5201 8.13655C12.3273 9.27606 12.9758 10.5208 13.4471 11.8366C13.6878 10.8936 13.7461 9.91221 13.6179 8.94543C13.5144 8.16532 13.2912 7.40772 12.9577 6.69888L11.5201 8.13655ZM9.30113 3.04224L7.8628 4.48058C6.72316 3.6732 5.47825 3.02459 4.16229 2.55314C5.10562 2.31223 6.08739 2.25376 7.05457 2.38202C7.83469 2.48548 8.5923 2.70869 9.30113 3.04224Z"
      fill="currentColor"
    />
  </svg>
);
export default PickaxeIcon;
