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

const HandIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.56225 1.22891C6.94358 0.847587 7.46076 0.633362 8.00004 0.633362C8.53931 0.633362 9.0565 0.847587 9.43782 1.22891C9.68145 1.47254 9.85687 1.77164 9.95179 2.09652C10.1782 2.01147 10.4202 1.9667 10.6667 1.9667C11.206 1.9667 11.7232 2.18092 12.1045 2.56224C12.3481 2.80588 12.5235 3.10497 12.6185 3.42985C12.8449 3.3448 13.0868 3.30003 13.3334 3.30003C13.8726 3.30003 14.3898 3.51425 14.7712 3.89558C15.1525 4.2769 15.3667 4.79409 15.3667 5.33336V9.33336C15.3667 10.9335 14.731 12.4681 13.5996 13.5996C12.4681 14.731 10.9335 15.3667 9.33337 15.3667H8.00004C5.9452 15.3667 4.63549 14.7179 3.5134 13.6033L3.51173 13.6017L1.11173 11.2017C1.10332 11.1933 1.09512 11.1846 1.08715 11.1758C0.737354 10.7884 0.549933 10.2813 0.563696 9.75953C0.577459 9.23775 0.79135 8.74125 1.16109 8.37282C1.53082 8.00439 2.02808 7.79226 2.5499 7.78034C2.80794 7.77445 3.06221 7.81774 3.30004 7.90547V4.00003C3.30004 3.46075 3.51426 2.94357 3.89559 2.56224C4.27691 2.18092 4.7941 1.9667 5.33337 1.9667C5.57991 1.9667 5.82184 2.01147 6.04828 2.09652C6.1432 1.77164 6.31862 1.47254 6.56225 1.22891ZM5.9667 4.00003V7.00003C5.9667 7.38663 6.2801 7.70003 6.6667 7.70003C7.0533 7.70003 7.3667 7.38663 7.3667 7.00003V2.6667C7.3667 2.49872 7.43343 2.33763 7.5522 2.21886C7.67098 2.10009 7.83207 2.03336 8.00004 2.03336C8.16801 2.03336 8.3291 2.10009 8.44787 2.21886C8.56664 2.33763 8.63337 2.49872 8.63337 2.6667V6.66669C8.63337 7.05329 8.94677 7.36669 9.33337 7.36669C9.71997 7.36669 10.0334 7.05329 10.0334 6.66669V4.00003C10.0334 3.83206 10.1001 3.67097 10.2189 3.55219C10.3376 3.43342 10.4987 3.3667 10.6667 3.3667C10.8347 3.3667 10.9958 3.43342 11.1145 3.55219C11.2333 3.67097 11.3 3.83206 11.3 4.00003V7.33336C11.3 7.71996 11.6134 8.03336 12 8.03336C12.3866 8.03336 12.7 7.71996 12.7 7.33336V5.33336C12.7 5.16539 12.7668 5.0043 12.8855 4.88553C13.0043 4.76675 13.1654 4.70003 13.3334 4.70003C13.5013 4.70003 13.6624 4.76675 13.7812 4.88553C13.9 5.0043 13.9667 5.16539 13.9667 5.33336V9.33336C13.9667 10.5622 13.4785 11.7407 12.6096 12.6096C11.7407 13.4785 10.5622 13.9667 9.33337 13.9667H8.00004C6.32212 13.9667 5.36525 13.4692 4.50091 12.6109C4.50061 12.6107 4.50031 12.6104 4.50001 12.6101L2.11662 10.2267C2.01387 10.1075 1.95905 9.95411 1.96321 9.79644C1.9675 9.63392 2.03412 9.47927 2.14928 9.36452C2.26444 9.24976 2.41933 9.18369 2.58186 9.17998C2.73988 9.17637 2.89336 9.23197 3.0123 9.33557L4.17173 10.495C4.4451 10.7684 4.88831 10.7684 5.16168 10.495C5.43504 10.2216 5.43504 9.77842 5.16168 9.50505L4.70004 9.04341V4.00003C4.70004 3.83206 4.76676 3.67097 4.88554 3.55219C5.00431 3.43342 5.1654 3.3667 5.33337 3.3667C5.50134 3.3667 5.66243 3.43342 5.7812 3.55219C5.89998 3.67097 5.9667 3.83206 5.9667 4.00003Z"
      fill="currentColor"
    />
  </svg>
);
export default HandIcon;
