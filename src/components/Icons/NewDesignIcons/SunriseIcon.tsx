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

const SunriseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50499 0.838326C7.77836 0.564959 8.22157 0.564959 8.49494 0.838326L11.1616 3.50499C11.435 3.77836 11.435 4.22158 11.1616 4.49494C10.8882 4.76831 10.445 4.76831 10.1717 4.49494L8.69997 3.02325V6.66663C8.69997 7.05323 8.38657 7.36663 7.99997 7.36663C7.61337 7.36663 7.29997 7.05323 7.29997 6.66663V3.02325L5.82828 4.49494C5.55491 4.76831 5.11169 4.76831 4.83833 4.49494C4.56496 4.22158 4.56496 3.77836 4.83833 3.50499L7.50499 0.838326ZM2.79166 6.79166C3.06503 6.51829 3.50824 6.51829 3.78161 6.79166L4.72161 7.73166C4.99498 8.00503 4.99498 8.44824 4.72161 8.72161C4.44824 8.99498 4.00503 8.99498 3.73166 8.72161L2.79166 7.78161C2.51829 7.50824 2.51829 7.06503 2.79166 6.79166ZM13.2083 6.79166C13.4816 7.06503 13.4816 7.50824 13.2083 7.78161L12.2683 8.72161C11.9949 8.99498 11.5517 8.99498 11.2783 8.72161C11.005 8.44824 11.005 8.00503 11.2783 7.73166L12.2183 6.79166C12.4917 6.51829 12.9349 6.51829 13.2083 6.79166ZM5.61937 9.61937C6.25075 8.988 7.10707 8.6333 7.99997 8.6333C8.89286 8.6333 9.74919 8.988 10.3806 9.61937C11.0119 10.2507 11.3666 11.1071 11.3666 12C11.3666 12.3866 11.0532 12.7 10.6666 12.7C10.28 12.7 9.96663 12.3866 9.96663 12C9.96663 11.4784 9.75943 10.9781 9.39061 10.6093C9.02179 10.2405 8.52156 10.0333 7.99997 10.0333C7.47837 10.0333 6.97815 10.2405 6.60932 10.6093C6.2405 10.9781 6.0333 11.4784 6.0333 12C6.0333 12.3866 5.7199 12.7 5.3333 12.7C4.9467 12.7 4.6333 12.3866 4.6333 12C4.6333 11.1071 4.988 10.2507 5.61937 9.61937ZM0.633301 12C0.633301 11.6134 0.946701 11.3 1.3333 11.3H2.66663C3.05323 11.3 3.36663 11.6134 3.36663 12C3.36663 12.3866 3.05323 12.7 2.66663 12.7H1.3333C0.946701 12.7 0.633301 12.3866 0.633301 12ZM12.6333 12C12.6333 11.6134 12.9467 11.3 13.3333 11.3H14.6666C15.0532 11.3 15.3666 11.6134 15.3666 12C15.3666 12.3866 15.0532 12.7 14.6666 12.7H13.3333C12.9467 12.7 12.6333 12.3866 12.6333 12ZM0.633301 14.6666C0.633301 14.28 0.946701 13.9666 1.3333 13.9666H14.6666C15.0532 13.9666 15.3666 14.28 15.3666 14.6666C15.3666 15.0532 15.0532 15.3666 14.6666 15.3666H1.3333C0.946701 15.3666 0.633301 15.0532 0.633301 14.6666Z"
      fill="currentColor"
    />
  </svg>
);
export default SunriseIcon;
