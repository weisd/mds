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

const FolderLockIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5774 2.77425C5.48391 2.72446 5.37942 2.69892 5.2735 2.69996L5.26663 2.70002L2.66663 2.69999C2.49866 2.69999 2.33757 2.76672 2.2188 2.88549C2.10003 3.00426 2.0333 3.16535 2.0333 3.33332V12C2.0333 12.168 2.10003 12.3291 2.2188 12.4478C2.33757 12.5666 2.49866 12.6333 2.66663 12.6333H6.66663C7.05323 12.6333 7.36663 12.9467 7.36663 13.3333C7.36663 13.7199 7.05323 14.0333 6.66663 14.0333H2.66663C2.12736 14.0333 1.61017 13.8191 1.22885 13.4378C0.847527 13.0564 0.633301 12.5393 0.633301 12V3.33332C0.633301 2.79405 0.847526 2.27686 1.22885 1.89554C1.61017 1.51422 2.12736 1.29999 2.66663 1.29999H5.26357C5.60233 1.2973 5.93642 1.3793 6.23547 1.53855C6.53433 1.69771 6.78869 1.92897 6.97549 2.21132L7.51795 3.01497C7.57562 3.10253 7.65409 3.17444 7.74639 3.22418C7.83866 3.27391 7.94182 3.29995 8.04663 3.29999C8.04659 3.29999 8.04667 3.29999 8.04663 3.29999H13.3333C13.8726 3.29999 14.3898 3.51422 14.7711 3.89554C15.1524 4.27686 15.3666 4.79405 15.3666 5.33332V6.99999C15.3666 7.38659 15.0532 7.69999 14.6666 7.69999C14.28 7.69999 13.9666 7.38659 13.9666 6.99999V5.33332C13.9666 5.16535 13.8999 5.00426 13.7811 4.88549C13.6624 4.76672 13.5013 4.69999 13.3333 4.69999H8.04663C7.71001 4.69994 7.37854 4.6163 7.08221 4.4566C6.78717 4.2976 6.53602 4.06814 6.3511 3.78866L5.80862 2.98498C5.75037 2.89651 5.6709 2.82404 5.5774 2.77425ZM10.5622 8.56221C10.9435 8.18088 11.4607 7.96666 12 7.96666C12.5392 7.96666 13.0564 8.18088 13.4377 8.56221C13.8191 8.94353 14.0333 9.46072 14.0333 9.99999V10.6337C14.7727 10.6514 15.3666 11.2563 15.3666 12V14C15.3666 14.7548 14.7548 15.3667 14 15.3667H9.99997C9.24518 15.3667 8.6333 14.7548 8.6333 14V12C8.6333 11.2563 9.22725 10.6514 9.96663 10.6337V9.99999C9.96663 9.46072 10.1809 8.94353 10.5622 8.56221ZM10.0333 12.0333V13.9667H13.9666V12.0333H10.0333ZM12.6333 10.6333H11.3666V9.99999C11.3666 9.83202 11.4334 9.67093 11.5521 9.55216C11.6709 9.43338 11.832 9.36666 12 9.36666C12.1679 9.36666 12.329 9.43338 12.4478 9.55216C12.5666 9.67093 12.6333 9.83202 12.6333 9.99999V10.6333Z"
      fill="currentColor"
    />
  </svg>
);
export default FolderLockIcon;
