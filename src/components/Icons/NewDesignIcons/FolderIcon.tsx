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

const FolderIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.22885 1.89554C1.61017 1.51421 2.12736 1.29999 2.66663 1.29999H5.28663C5.62326 1.30004 5.95472 1.38367 6.25106 1.54337C6.5461 1.70238 6.79724 1.93184 6.98216 2.21132L7.52464 3.015C7.5829 3.10346 7.66237 3.17593 7.75587 3.22572C7.84936 3.27551 7.95385 3.30106 8.05977 3.30002L8.06663 3.29995L13.3333 3.29999C13.8726 3.29999 14.3898 3.51421 14.7711 3.89554C15.1524 4.27686 15.3666 4.79405 15.3666 5.33332V12C15.3666 12.5393 15.1524 13.0564 14.7711 13.4378C14.3898 13.8191 13.8726 14.0333 13.3333 14.0333H2.66663C2.12736 14.0333 1.61017 13.8191 1.22885 13.4378C0.847526 13.0564 0.633301 12.5393 0.633301 12V3.33332C0.633301 2.79405 0.847526 2.27686 1.22885 1.89554ZM2.66663 2.69999C2.49866 2.69999 2.33757 2.76671 2.2188 2.88549C2.10003 3.00426 2.0333 3.16535 2.0333 3.33332V12C2.0333 12.168 2.10003 12.329 2.2188 12.4478C2.33757 12.5666 2.49866 12.6333 2.66663 12.6333H13.3333C13.5013 12.6333 13.6624 12.5666 13.7811 12.4478C13.8999 12.329 13.9666 12.168 13.9666 12V5.33332C13.9666 5.16535 13.8999 5.00426 13.7811 4.88549C13.6624 4.76671 13.5013 4.69999 13.3333 4.69999H8.06971C7.73094 4.70268 7.39685 4.62068 7.0978 4.46142C6.79894 4.30227 6.54458 4.07101 6.35777 3.78865L5.81531 2.98501C5.75765 2.89744 5.67918 2.82554 5.58688 2.7758C5.49461 2.72607 5.39144 2.70002 5.28663 2.69999C5.2866 2.69999 5.28667 2.69999 5.28663 2.69999H2.66663Z"
      fill="currentColor"
    />
  </svg>
);
export default FolderIcon;
