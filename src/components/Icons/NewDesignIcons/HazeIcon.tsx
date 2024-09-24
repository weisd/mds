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

const HazeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 0.966675C8.38657 0.966675 8.69997 1.28008 8.69997 1.66667V3.33334C8.69997 3.71994 8.38657 4.03334 7.99997 4.03334C7.61337 4.03334 7.29997 3.71994 7.29997 3.33334V1.66667C7.29997 1.28008 7.61337 0.966675 7.99997 0.966675ZM2.97166 3.63837C3.24503 3.365 3.68824 3.365 3.96161 3.63837L4.89494 4.5717C5.16831 4.84507 5.16831 5.28828 4.89494 5.56165C4.62157 5.83502 4.17836 5.83502 3.90499 5.56165L2.97166 4.62832C2.69829 4.35495 2.69829 3.91173 2.97166 3.63837ZM13.0283 3.63837C13.3016 3.91173 13.3016 4.35495 13.0283 4.62832L12.0949 5.56165C11.8216 5.83502 11.3784 5.83502 11.105 5.56165C10.8316 5.28828 10.8316 4.84507 11.105 4.5717L12.0383 3.63837C12.3117 3.365 12.7549 3.365 13.0283 3.63837ZM5.61937 6.28608C6.25075 5.65471 7.10707 5.30001 7.99997 5.30001C8.89286 5.30001 9.74919 5.65471 10.3806 6.28608C11.0119 6.91745 11.3666 7.77378 11.3666 8.66667C11.3666 9.05327 11.0532 9.36667 10.6666 9.36667C10.28 9.36667 9.96663 9.05327 9.96663 8.66667C9.96663 8.14508 9.75943 7.64485 9.39061 7.27603C9.02179 6.90721 8.52156 6.70001 7.99997 6.70001C7.47837 6.70001 6.97815 6.90721 6.60932 7.27603C6.2405 7.64485 6.0333 8.14508 6.0333 8.66667C6.0333 9.05327 5.7199 9.36667 5.3333 9.36667C4.9467 9.36667 4.6333 9.05327 4.6333 8.66667C4.6333 7.77378 4.988 6.91745 5.61937 6.28608ZM0.633301 8.66667C0.633301 8.28008 0.946701 7.96667 1.3333 7.96667H2.66663C3.05323 7.96667 3.36663 8.28008 3.36663 8.66667C3.36663 9.05327 3.05323 9.36667 2.66663 9.36667H1.3333C0.946701 9.36667 0.633301 9.05327 0.633301 8.66667ZM12.6333 8.66667C12.6333 8.28008 12.9467 7.96667 13.3333 7.96667H14.6666C15.0532 7.96667 15.3666 8.28008 15.3666 8.66667C15.3666 9.05327 15.0532 9.36667 14.6666 9.36667H13.3333C12.9467 9.36667 12.6333 9.05327 12.6333 8.66667ZM0.633301 11.3333C0.633301 10.9467 0.946701 10.6333 1.3333 10.6333H14.6666C15.0532 10.6333 15.3666 10.9467 15.3666 11.3333C15.3666 11.7199 15.0532 12.0333 14.6666 12.0333H1.3333C0.946701 12.0333 0.633301 11.7199 0.633301 11.3333ZM0.633301 14C0.633301 13.6134 0.946701 13.3 1.3333 13.3H14.6666C15.0532 13.3 15.3666 13.6134 15.3666 14C15.3666 14.3866 15.0532 14.7 14.6666 14.7H1.3333C0.946701 14.7 0.633301 14.3866 0.633301 14Z"
      fill="currentColor"
    />
  </svg>
);
export default HazeIcon;
