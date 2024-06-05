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

const DropletsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.3362 1.31333C9.66879 1.3147 9.9545 1.54991 10.0197 1.87604C10.3194 3.37464 11.2272 4.83201 12.4373 5.80005C13.8959 6.96695 14.6995 8.4197 14.7 10.0119C14.7041 11.0715 14.3936 12.1086 13.8079 12.9916C13.2218 13.8751 12.3867 14.5647 11.4083 14.973C10.4299 15.3813 9.35234 15.4899 8.31216 15.285C7.27198 15.0801 6.31606 14.571 5.56557 13.8222C5.2919 13.5491 5.2914 13.1059 5.56446 12.8322C5.83752 12.5586 6.28073 12.5581 6.55441 12.8311C7.10863 13.3841 7.81456 13.7601 8.58271 13.9114C9.35086 14.0627 10.1466 13.9825 10.8692 13.681C11.5917 13.3795 12.2084 12.8702 12.6412 12.2178C13.0739 11.5654 13.3032 10.7991 13.3 10.0162L13.3 10.0133C13.3 8.9394 12.7703 7.85934 11.5627 6.89327C10.6442 6.15846 9.87057 5.19408 9.33233 4.1218C9.22076 4.34354 9.09878 4.56031 8.96669 4.77136C8.76158 5.09907 8.32965 5.19846 8.00195 4.99336C7.67424 4.78825 7.57485 4.35632 7.77996 4.02862C8.19458 3.36615 8.48849 2.63544 8.64807 1.87039C8.71598 1.54481 9.00361 1.31196 9.3362 1.31333ZM4.66665 2.83332C5.00033 2.83332 5.28762 3.06885 5.35306 3.39604C5.51303 4.1959 5.99554 4.97526 6.63581 5.49759C7.52082 6.21957 8.03332 7.13851 8.03332 8.16666C8.03332 10.0242 6.52893 11.5667 4.66665 11.5667C2.80438 11.5667 1.29999 10.0242 1.29999 8.16666C1.29999 7.15076 1.80082 6.21489 2.7027 5.49338C3.34138 4.98244 3.81937 4.20043 3.98025 3.39604C4.04569 3.06885 4.33298 2.83332 4.66665 2.83332ZM4.6688 5.35948C4.37238 5.82736 4.00177 6.24701 3.57727 6.5866C2.94582 7.09176 2.69999 7.64922 2.69999 8.16666C2.69999 9.26913 3.5956 10.1667 4.66665 10.1667C5.73771 10.1667 6.63332 9.26913 6.63332 8.16666C6.63332 7.64814 6.38582 7.10041 5.75083 6.5824C5.33385 6.24222 4.96529 5.825 4.6688 5.35948Z"
      fill="currentColor"
    />
  </svg>
);
export default DropletsIcon;
