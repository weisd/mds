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

const SubscriptIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.1717 2.83833C2.44507 2.56496 2.88828 2.56496 3.16165 2.83833L5.33334 5.01002L7.50503 2.83833C7.7784 2.56496 8.22162 2.56496 8.49498 2.83833C8.76835 3.11169 8.76835 3.55491 8.49498 3.82828L6.32329 5.99997L8.49498 8.17166C8.76835 8.44503 8.76835 8.88824 8.49498 9.16161C8.22162 9.43498 7.7784 9.43498 7.50503 9.16161L5.33334 6.98992L3.16165 9.16161C2.88828 9.43498 2.44507 9.43498 2.1717 9.16161C1.89833 8.88824 1.89833 8.44503 2.1717 8.17166L4.34339 5.99997L2.1717 3.82828C1.89833 3.55491 1.89833 3.11169 2.1717 2.83833ZM10.9222 7.57062C11.3425 7.33297 11.8317 7.24692 12.3079 7.32689C12.7841 7.40687 13.2184 7.648 13.538 8.00992L13.5438 8.0165L13.5438 8.01653C13.8597 8.38344 14.0333 8.85214 14.0333 9.3333C14.0333 10.0687 13.6227 10.5825 13.2038 10.9195C12.8137 11.2334 12.3384 11.4573 12.0035 11.615C11.9906 11.6212 11.9778 11.6272 11.9653 11.6331C11.6474 11.783 11.5431 11.8805 11.4895 11.9634C11.4888 11.9645 11.4881 11.9655 11.4874 11.9666H13.3333C13.7199 11.9666 14.0333 12.28 14.0333 12.6666C14.0333 13.0532 13.7199 13.3666 13.3333 13.3666H10.6667C10.2801 13.3666 9.96667 13.0532 9.96667 12.6666C9.96667 12.1112 10.0453 11.6185 10.3139 11.2032C10.5836 10.7861 10.9793 10.5502 11.368 10.3669C11.7385 10.1921 12.0747 10.0311 12.3262 9.82874C12.564 9.63742 12.6333 9.48454 12.6333 9.3333C12.6333 9.18919 12.5813 9.04595 12.4857 8.93334C12.3788 8.81379 12.2343 8.73414 12.076 8.70756C11.9168 8.68082 11.7533 8.70941 11.6126 8.78854C11.4762 8.86691 11.3757 8.98869 11.3262 9.12781C11.1967 9.49207 10.7964 9.68236 10.4322 9.55285C10.0679 9.42334 9.87761 9.02305 10.0071 8.65879C10.1708 8.19838 10.4965 7.81386 10.9194 7.5722L10.9221 7.57061L10.9222 7.57062Z"
      fill="currentColor"
    />
  </svg>
);
export default SubscriptIcon;
