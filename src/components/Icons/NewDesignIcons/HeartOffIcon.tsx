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

const HeartOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838358 0.838387C1.11173 0.56502 1.55494 0.56502 1.82831 0.838387L11.4943 10.5044C11.4945 10.5046 11.4948 10.5048 11.495 10.5051C11.4952 10.5053 11.4954 10.5055 11.4956 10.5057L15.1616 14.1717C15.435 14.4451 15.435 14.8883 15.1616 15.1617C14.8883 15.435 14.4451 15.435 14.1717 15.1617L11 11.99L8.49497 14.495C8.22161 14.7684 7.77839 14.7684 7.50502 14.495L2.84252 9.8325C1.83939 8.86229 0.633333 7.51458 0.633333 5.66669L0.633333 5.66614C0.633862 4.99893 0.787279 4.34071 1.0818 3.74203C1.26018 3.37945 1.48743 3.04455 1.75627 2.74625L0.838358 1.82834C0.564991 1.55497 0.564991 1.11175 0.838358 0.838387ZM2.74818 3.73816C2.5864 3.92679 2.44842 4.1356 2.33802 4.36003C2.13797 4.76668 2.03374 5.21376 2.03333 5.66695C2.03344 6.88297 2.82389 7.86731 3.81985 8.83007L3.82838 8.83832L3.82831 8.83839L8 13.0101L10.01 11L2.74818 3.73816ZM9.71452 2.93347C9.34095 3.09617 8.95508 3.36823 8.49497 3.82834C8.36331 3.96 8.18462 4.03378 7.99843 4.03336C7.81223 4.03294 7.63388 3.95836 7.50281 3.82611C6.83426 3.15154 6.30189 2.86775 5.70847 2.75423C5.32876 2.68159 5.07983 2.31488 5.15247 1.93517C5.22511 1.55545 5.59181 1.30652 5.97153 1.37916C6.71887 1.52213 7.3615 1.84406 8.00137 2.38155C8.37446 2.06918 8.75163 1.82582 9.15548 1.64992C9.7431 1.39399 10.3432 1.30003 11 1.30003C12.1581 1.30003 13.2688 1.76009 14.0877 2.579C14.9066 3.3979 15.3667 4.50858 15.3667 5.66669C15.3667 7.37893 14.3143 8.66206 13.3852 9.60474C13.1138 9.88008 12.6706 9.88329 12.3953 9.61191C12.12 9.34053 12.1167 8.89733 12.3881 8.62199C13.2857 7.71133 13.9667 6.78113 13.9667 5.66669C13.9667 4.87989 13.6541 4.1253 13.0977 3.56894C12.5414 3.01259 11.7868 2.70003 11 2.70003C10.4835 2.70003 10.0836 2.77273 9.71452 2.93347Z"
      fill="currentColor"
    />
  </svg>
);
export default HeartOffIcon;
