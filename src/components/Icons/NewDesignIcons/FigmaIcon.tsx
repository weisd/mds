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

const FigmaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.66663 2.03333C5.23345 2.03333 4.818 2.20541 4.51169 2.51172C4.20538 2.81803 4.0333 3.23348 4.0333 3.66666C4.0333 4.09985 4.20538 4.5153 4.51169 4.82161C4.818 5.12792 5.23345 5.3 5.66663 5.3H7.29997V2.03333H5.66663ZM8.69997 2.03333V5.3H10.3333C10.5478 5.3 10.7602 5.25775 10.9584 5.17567C11.1565 5.09359 11.3366 4.97327 11.4882 4.82161C11.6399 4.66994 11.7602 4.48988 11.8423 4.29171C11.9244 4.09355 11.9666 3.88116 11.9666 3.66666C11.9666 3.45217 11.9244 3.23978 11.8423 3.04162C11.7602 2.84345 11.6399 2.66339 11.4882 2.51172C11.3366 2.36005 11.1565 2.23974 10.9584 2.15766C10.7602 2.07558 10.5478 2.03333 10.3333 2.03333H8.69997ZM12.2715 6C12.3431 5.9405 12.4121 5.87763 12.4782 5.81155C12.7599 5.52988 12.9833 5.19549 13.1357 4.82747C13.2882 4.45945 13.3666 4.06501 13.3666 3.66666C13.3666 3.26832 13.2882 2.87388 13.1357 2.50586C12.9833 2.13784 12.7599 1.80345 12.4782 1.52177C12.1965 1.2401 11.8621 1.01667 11.4941 0.86423C11.1261 0.711791 10.7316 0.633331 10.3333 0.633331H5.66663C4.86214 0.633331 4.0906 0.952914 3.52174 1.52177C2.95288 2.09063 2.6333 2.86217 2.6333 3.66666C2.6333 4.47115 2.95288 5.24269 3.52174 5.81155C3.58797 5.87779 3.65695 5.94064 3.72841 6C3.65695 6.05936 3.58797 6.12221 3.52174 6.18844C2.95288 6.7573 2.6333 7.52884 2.6333 8.33333C2.6333 9.13782 2.95288 9.90936 3.52174 10.4782C3.58797 10.5445 3.65695 10.6073 3.72841 10.6667C3.65695 10.726 3.58797 10.7889 3.52174 10.8551C2.95288 11.424 2.6333 12.1955 2.6333 13C2.6333 13.8045 2.95288 14.576 3.52174 15.1449C4.0906 15.7137 4.86214 16.0333 5.66663 16.0333C6.47112 16.0333 7.24266 15.7137 7.81152 15.1449C8.38038 14.576 8.69997 13.8045 8.69997 13V10.8894C8.84959 10.985 9.00767 11.0675 9.17249 11.1358C9.54051 11.2882 9.93496 11.3667 10.3333 11.3667C10.7316 11.3667 11.1261 11.2882 11.4941 11.1358C11.8621 10.9833 12.1965 10.7599 12.4782 10.4782C12.7599 10.1965 12.9833 9.86216 13.1357 9.49414C13.2882 9.12612 13.3666 8.73168 13.3666 8.33333C13.3666 7.93499 13.2882 7.54055 13.1357 7.17252C12.9833 6.80451 12.7599 6.47011 12.4782 6.18844C12.4121 6.12237 12.3431 6.0595 12.2715 6ZM7.29997 9.96666V6.7H5.66663C5.23345 6.7 4.818 6.87208 4.51169 7.17839C4.20538 7.4847 4.0333 7.90014 4.0333 8.33333C4.0333 8.76652 4.20538 9.18196 4.51169 9.48827C4.818 9.79458 5.23345 9.96666 5.66663 9.96666H7.29997ZM7.29997 11.3667H5.66663C5.23345 11.3667 4.818 11.5387 4.51169 11.8451C4.20538 12.1514 4.0333 12.5668 4.0333 13C4.0333 13.4332 4.20538 13.8486 4.51169 14.1549C4.818 14.4612 5.23345 14.6333 5.66663 14.6333C6.09982 14.6333 6.51527 14.4612 6.82157 14.1549C7.12788 13.8486 7.29997 13.4332 7.29997 13V11.3667ZM10.3333 6.7C10.1188 6.7 9.90642 6.74225 9.70825 6.82433C9.51009 6.90641 9.33003 7.02672 9.17836 7.17839C9.02669 7.33006 8.90638 7.51012 8.8243 7.70828C8.74221 7.90645 8.69997 8.11884 8.69997 8.33333C8.69997 8.54782 8.74221 8.76022 8.8243 8.95838C8.90638 9.15655 9.02669 9.3366 9.17836 9.48827C9.33003 9.63994 9.51009 9.76025 9.70825 9.84233C9.90642 9.92442 10.1188 9.96666 10.3333 9.96666C10.5478 9.96666 10.7602 9.92442 10.9584 9.84233C11.1565 9.76025 11.3366 9.63994 11.4882 9.48827C11.6399 9.3366 11.7602 9.15655 11.8423 8.95838C11.9244 8.76021 11.9666 8.54782 11.9666 8.33333C11.9666 8.11884 11.9244 7.90645 11.8423 7.70828C11.7602 7.51012 11.6399 7.33006 11.4882 7.17839C11.3366 7.02672 11.1565 6.90641 10.9584 6.82433C10.7602 6.74225 10.5478 6.7 10.3333 6.7Z"
      fill="currentColor"
    />
  </svg>
);
export default FigmaIcon;
