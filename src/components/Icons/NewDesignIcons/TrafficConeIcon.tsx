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

const TrafficConeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.75767 0.968429C7.12323 0.677744 7.57952 0.525145 8.04641 0.537431C8.5133 0.549718 8.96093 0.726104 9.3107 1.03561C9.64657 1.33283 9.87158 1.73455 9.95003 2.17503L11.3254 6.75966C11.3951 6.86975 11.4307 6.9943 11.4332 7.11902L11.576 7.59499L14.4935 9.33307C14.9186 9.58813 15.3667 10.0414 15.3667 10.6666C15.3667 11.3274 14.8784 11.7729 14.3204 12.0238L9.29001 15.0023L9.27331 15.0119C8.4619 15.4627 7.40483 15.4627 6.59341 15.0119L6.57672 15.0023L1.51005 12.0023L1.50655 12.0002C1.08145 11.7452 0.633362 11.2919 0.633362 10.6666C0.633362 10.0414 1.08145 9.58812 1.50655 9.33307L1.51795 9.32623L4.37743 7.6837L4.57505 7.02496C4.58477 6.96251 4.60299 6.90103 4.62983 6.84234L6.05476 2.0926C6.15334 1.64879 6.40128 1.25182 6.75767 0.968429ZM5.59205 8.50708C5.64536 8.42249 5.67979 8.32755 5.69346 8.22923C6.36351 8.53829 7.16755 8.69998 8.00003 8.69998C8.8318 8.69998 9.63518 8.53857 10.3049 8.23002L10.5962 9.20112C10.6062 9.2344 10.6186 9.26677 10.6333 9.298C10.6334 9.30818 10.6334 9.31975 10.6334 9.33331C10.6334 9.56518 10.4851 9.87224 10.0078 10.1573C9.53737 10.4383 8.83403 10.6333 8.00003 10.6333C7.16602 10.6333 6.46269 10.4383 5.99228 10.1573C5.51491 9.87224 5.36669 9.56518 5.36669 9.33331C5.36669 9.29816 5.36675 9.27576 5.36739 9.25518C5.36781 9.24185 5.3684 9.23274 5.36894 9.22663C5.38272 9.19678 5.39438 9.16597 5.40384 9.13446L5.59205 8.50708ZM3.97602 9.52886C4.05353 10.3353 4.60498 10.9595 5.27444 11.3593C6.00404 11.795 6.96737 12.0333 8.00003 12.0333C9.03269 12.0333 9.99602 11.795 10.7256 11.3593C11.4049 10.9536 11.9626 10.317 12.0271 9.49335L13.7732 10.5336C13.7735 10.5337 13.7738 10.5339 13.7741 10.5341C13.844 10.5761 13.8925 10.6158 13.9245 10.6477C13.8844 10.6769 13.8209 10.7152 13.7243 10.7566C13.6965 10.7685 13.6694 10.7822 13.6434 10.7976L8.58598 13.7922C8.20041 14.0026 7.66631 14.0026 7.28074 13.7922L2.22684 10.7997C2.22633 10.7994 2.22583 10.7991 2.22532 10.7988C2.14112 10.7481 2.08814 10.7009 2.05767 10.6666C2.08772 10.6329 2.13966 10.5865 2.22184 10.5366L3.97602 9.52886ZM9.89645 6.86858C9.4345 7.1239 8.7762 7.29998 8.00003 7.29998C7.21421 7.29998 6.54921 7.11949 6.08647 6.85902L6.59856 5.15207C7.04114 5.33132 7.51674 5.42511 8.00003 5.42511C8.47683 5.42511 8.94614 5.33382 9.38365 5.15925L9.89645 6.86858ZM8.97884 3.80988L8.59622 2.53446C8.58661 2.50245 8.57931 2.46979 8.57438 2.43673C8.554 2.30033 8.48622 2.17546 8.38293 2.08406C8.27964 1.99266 8.14745 1.94057 8.00958 1.93695C7.87171 1.93332 7.73697 1.97838 7.62901 2.06422C7.52106 2.15006 7.44681 2.27119 7.41928 2.40634C7.41506 2.42704 7.40991 2.44755 7.40384 2.46779L7.00367 3.80169C7.31356 3.94802 7.65363 4.02511 8.00003 4.02511C8.3399 4.02511 8.67369 3.9509 8.97884 3.80988Z"
      fill="currentColor"
    />
  </svg>
);
export default TrafficConeIcon;
