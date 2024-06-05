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

const CloudUploadIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.45131 2.97615C6.89105 2.75619 6.28808 2.6666 5.68807 2.71419C5.08806 2.76178 4.50675 2.94528 3.98816 3.25081C3.46958 3.55633 3.02732 3.97587 2.6949 4.47763C2.36247 4.9794 2.14858 5.55023 2.06945 6.1469C1.99031 6.74357 2.04799 7.35042 2.23813 7.92149C2.42826 8.49257 2.74586 9.01288 3.16687 9.44303C3.43729 9.71931 3.43253 10.1625 3.15625 10.4329C2.87996 10.7033 2.43677 10.6986 2.16636 10.4223C1.59675 9.84033 1.16706 9.13638 0.909817 8.36375C0.652574 7.59112 0.574532 6.77008 0.6816 5.96283C0.788668 5.15557 1.07804 4.38326 1.5278 3.70441C1.97755 3.02555 2.5759 2.45794 3.27751 2.04459C3.97913 1.63123 4.76561 1.38295 5.57738 1.31857C6.38916 1.25419 7.20495 1.37539 7.96294 1.67299C8.72094 1.97059 9.40128 2.43678 9.95242 3.03626C10.3837 3.50531 10.7269 4.04634 10.9675 4.63333H11.6665C11.6665 4.63333 11.6666 4.63333 11.6665 4.63333C12.4604 4.63326 13.2333 4.8885 13.8709 5.36136C14.5086 5.83423 14.9772 6.49966 15.2077 7.25935C15.4381 8.01903 15.4181 8.83269 15.1506 9.58013C14.883 10.3276 14.3822 10.9691 13.7221 11.4101C13.4006 11.6248 12.9659 11.5383 12.7512 11.2168C12.5365 10.8953 12.623 10.4606 12.9445 10.2459C13.3548 9.97181 13.6662 9.57299 13.8324 9.10837C13.9987 8.64374 14.0112 8.13796 13.8679 7.66572C13.7247 7.19348 13.4334 6.77984 13.037 6.48589C12.6406 6.19194 12.1602 6.03327 11.6667 6.03333H10.4733C10.1638 6.03333 9.89108 5.83012 9.80254 5.5336C9.63034 4.95686 9.32915 4.42688 8.92179 3.98378C8.51443 3.54069 8.01157 3.19611 7.45131 2.97615ZM7.99995 7.3C8.1856 7.3 8.36365 7.37375 8.49492 7.50502L11.1616 10.1717C11.435 10.4451 11.435 10.8883 11.1616 11.1616C10.8882 11.435 10.445 11.435 10.1716 11.1616L8.69995 9.68995V14C8.69995 14.3866 8.38655 14.7 7.99995 14.7C7.61335 14.7 7.29995 14.3866 7.29995 14V9.68995L5.82826 11.1616C5.55489 11.435 5.11167 11.435 4.83831 11.1616C4.56494 10.8883 4.56494 10.4451 4.83831 10.1717L7.50497 7.50502C7.63625 7.37375 7.8143 7.3 7.99995 7.3Z"
      fill="currentColor"
    />
  </svg>
);
export default CloudUploadIcon;
