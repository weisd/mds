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

const RibbonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.70743 4.43876C4.94467 4.25409 5.19778 4.08908 5.46441 3.94587C6.18015 3.56141 6.97313 3.34486 7.78336 3.31154C7.85499 3.30386 7.9273 3.29997 8.00001 3.29997C8.07113 3.29997 8.14187 3.30369 8.21196 3.31104C8.99802 3.34153 9.76886 3.54453 10.4694 3.90687C10.7601 4.05725 11.0355 4.23338 11.2924 4.43259C11.2375 3.60702 10.8899 3.05627 10.3918 2.68757C9.81903 2.26351 8.97934 2.0333 7.98668 2.0333C7.03482 2.0333 6.19956 2.26171 5.62143 2.68825C5.1166 3.06072 4.76226 3.6149 4.70743 4.43876ZM11.0641 6.14987C10.7738 5.79783 10.4247 5.49834 10.0322 5.26479C10.033 5.28758 10.0333 5.31042 10.0333 5.3333C10.0333 5.89367 9.75687 6.37798 9.48573 6.75812C9.29211 7.02957 9.04382 7.32185 8.80566 7.60219C8.71317 7.71106 8.62221 7.81813 8.53658 7.92148L6.78369 10.1192L4.66238 12.8577L5.85076 13.7201L7.41583 11.6123L7.41799 11.6093L9.14789 9.25401C9.14811 9.25371 9.14832 9.25341 9.14854 9.25312C9.27016 9.08645 9.38871 8.92623 9.50361 8.77095C10.2016 7.82763 10.7648 7.06647 11.0641 6.14987ZM9.73224 10.8234L8.85122 12.023L10.123 13.7244L11.3311 12.8576L9.73224 10.8234ZM7.9819 13.1983L6.56203 15.1106C6.33334 15.4186 5.89935 15.4852 5.58887 15.2598L3.25554 13.5665C3.1022 13.4552 3.00053 13.2866 2.97372 13.099C2.94691 12.9115 2.99727 12.7211 3.11329 12.5713L5.36053 9.67031C5.32568 9.62185 5.29127 9.57403 5.25729 9.52682C4.29987 8.19656 3.68788 7.34626 3.4424 6.20748C3.43666 6.18085 3.43251 6.15424 3.4299 6.12777C3.33642 5.68494 3.30001 5.20499 3.30001 4.66663C3.30001 3.28433 3.87197 2.2392 4.79026 1.56169C5.68046 0.904893 6.83853 0.633301 7.98668 0.633301C9.16734 0.633301 10.3343 0.903095 11.2249 1.56236C12.1445 2.2432 12.7 3.29041 12.7 4.66663C12.7 5.20973 12.6332 5.71485 12.5115 6.18026C12.1727 7.53122 11.3805 8.59586 10.6162 9.62289C10.6086 9.63312 10.601 9.64333 10.5934 9.65355L12.8837 12.5674C13.0017 12.7175 13.0532 12.9094 13.0264 13.0984C12.9995 13.2875 12.8966 13.4574 12.7414 13.5687L10.3814 15.262C10.0716 15.4843 9.64095 15.4178 9.41267 15.1124L7.9819 13.1983ZM4.89037 6.21595C5.09225 6.86556 5.48603 7.43843 6.26377 8.52587L7.09092 7.48879C6.88548 7.24292 6.67713 6.9903 6.51135 6.75632C6.24281 6.37731 5.96668 5.89315 5.96668 5.3333C5.96668 5.312 5.96701 5.29074 5.96768 5.26951C5.55379 5.51708 5.18878 5.8379 4.89037 6.21595ZM7.89668 4.70845C7.76702 4.72989 7.64631 4.79133 7.55218 4.88547C7.4334 5.00424 7.36668 5.16533 7.36668 5.3333C7.36668 5.44012 7.42388 5.62262 7.65368 5.94695C7.75679 6.09248 7.87084 6.2358 7.99748 6.38924C8.12664 6.23452 8.24249 6.09022 8.34596 5.94515C8.57648 5.62195 8.63334 5.4396 8.63334 5.3333C8.63334 5.16533 8.56662 5.00424 8.44785 4.88547C8.35336 4.79098 8.2321 4.72943 8.10189 4.70821C8.05897 4.70715 8.016 4.70679 7.97298 4.70712C7.94753 4.70732 7.92209 4.70776 7.89668 4.70845Z"
      fill="currentColor"
    />
  </svg>
);
export default RibbonIcon;
