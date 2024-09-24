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

const FolderTreeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.00005 1.29999C2.38665 1.29999 2.70005 1.61339 2.70005 1.99999V3.33332C2.70005 3.50129 2.76677 3.66238 2.88555 3.78116C3.00432 3.89993 3.16541 3.96665 3.33338 3.96665H5.33338C5.71998 3.96665 6.03338 4.28006 6.03338 4.66665C6.03338 5.05325 5.71998 5.36665 5.33338 5.36665H3.33338C3.11621 5.36665 2.90262 5.33191 2.70005 5.26551V10.6667C2.70005 10.8346 2.76677 10.9957 2.88555 11.1145C3.00432 11.2333 3.16541 11.3 3.33338 11.3H5.33338C5.71998 11.3 6.03338 11.6134 6.03338 12C6.03338 12.3866 5.71998 12.7 5.33338 12.7H3.33338C2.79411 12.7 2.27692 12.4858 1.8956 12.1044C1.51427 11.7231 1.30005 11.2059 1.30005 10.6667V1.99999C1.30005 1.61339 1.61345 1.29999 2.00005 1.29999ZM7.70034 1.70028C7.95664 1.44398 8.30425 1.29999 8.66672 1.29999H10C10.2122 1.29999 10.4215 1.34939 10.6112 1.44427C10.801 1.53915 10.9661 1.67692 11.0934 1.84665L11.6834 2.63332H13.3334C13.6958 2.63332 14.0435 2.77731 14.2998 3.03361C14.5561 3.28991 14.7 3.63753 14.7 3.99999V5.99999C14.7 6.36245 14.5561 6.71007 14.2998 6.96637C14.0435 7.22267 13.6958 7.36665 13.3334 7.36665H8.66672C8.30425 7.36665 7.95664 7.22267 7.70034 6.96637C7.44404 6.71007 7.30005 6.36245 7.30005 5.99999V2.66665C7.30005 2.30419 7.44404 1.95657 7.70034 1.70028ZM11.6934 2.64665C11.6933 2.6466 11.6934 2.64671 11.6934 2.64665V2.64665ZM8.70005 2.69999V5.96665H13.3V4.03332H11.6667C11.4545 4.03332 11.2453 3.98392 11.0555 3.88904C10.8658 3.79415 10.7007 3.65639 10.5734 3.48665L9.98338 2.69999H8.70005ZM9.91907 8.63332C10.1853 8.63268 10.4459 8.70981 10.6689 8.85525C10.8869 8.9974 11.0596 9.19873 11.167 9.43546L11.4295 9.96665H13.3334C13.6958 9.96665 14.0435 10.1106 14.2998 10.3669C14.5561 10.6232 14.7 10.9709 14.7 11.3333V13.3333C14.7 13.6958 14.5561 14.0434 14.2998 14.2997C14.0435 14.556 13.6958 14.7 13.3334 14.7H8.66672C8.30425 14.7 7.95664 14.556 7.70034 14.2997C7.44404 14.0434 7.30005 13.6958 7.30005 13.3333V9.99999C7.30005 9.63752 7.44404 9.28991 7.70034 9.03361C7.95664 8.77731 8.30425 8.63332 8.66672 8.63332H9.91907ZM9.90093 10.0333H8.70005V13.3H13.3V11.3667H11.3909C11.1409 11.3634 10.8965 11.2915 10.6844 11.159C10.4724 11.0264 10.3007 10.8383 10.1882 10.6149L10.1858 10.6101L9.90581 10.0434C9.90416 10.0401 9.90253 10.0367 9.90093 10.0333Z"
      fill="currentColor"
    />
  </svg>
);
export default FolderTreeIcon;
