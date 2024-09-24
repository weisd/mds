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

const FileSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.56222 1.22888C2.94354 0.847557 3.46073 0.633331 4 0.633331H10C10.1857 0.633331 10.3637 0.707081 10.495 0.838357L13.8283 4.17169C13.9596 4.30297 14.0333 4.48101 14.0333 4.66666V13.3333C14.0333 13.8726 13.8191 14.3898 13.4378 14.7711C13.0565 15.1524 12.5393 15.3667 12 15.3667H3.99667L3.9949 15.3667C3.63885 15.3658 3.28927 15.2714 2.98114 15.093C2.67302 14.9145 2.41714 14.6583 2.23912 14.35C2.04582 14.0152 2.16053 13.5871 2.49534 13.3938C2.83014 13.2005 3.25826 13.3152 3.45155 13.65C3.50701 13.746 3.5867 13.8258 3.68268 13.8814C3.77839 13.9368 3.88695 13.9662 3.99755 13.9667H12C12.168 13.9667 12.3291 13.8999 12.4478 13.7812C12.5666 13.6624 12.6333 13.5013 12.6333 13.3333V6.03333H10.6667C10.1274 6.03333 9.61021 5.81911 9.22889 5.43778C8.84756 5.05646 8.63334 4.53927 8.63334 4V2.03333H4C3.83203 2.03333 3.67094 2.10006 3.55217 2.21883C3.43339 2.3376 3.36667 2.49869 3.36667 2.66666V4.66666C3.36667 5.05326 3.05327 5.36666 2.66667 5.36666C2.28007 5.36666 1.96667 5.05326 1.96667 4.66666V2.66666C1.96667 2.12739 2.18089 1.6102 2.56222 1.22888ZM10.0333 2.35661V4C10.0333 4.16797 10.1001 4.32906 10.2188 4.44783C10.3376 4.56661 10.4987 4.63333 10.6667 4.63333H12.3101L10.0333 2.35661ZM3.33334 8.03333C2.61536 8.03333 2.03334 8.61536 2.03334 9.33333C2.03334 10.0513 2.61536 10.6333 3.33334 10.6333C4.05131 10.6333 4.63334 10.0513 4.63334 9.33333C4.63334 8.61536 4.05131 8.03333 3.33334 8.03333ZM0.633335 9.33333C0.633335 7.84216 1.84217 6.63333 3.33334 6.63333C4.8245 6.63333 6.03334 7.84216 6.03334 9.33333C6.03334 9.82482 5.90202 10.2856 5.67255 10.6826L6.49498 11.505C6.76834 11.7784 6.76834 12.2216 6.49498 12.495C6.22161 12.7683 5.77839 12.7683 5.50503 12.495L4.6826 11.6725C4.28563 11.902 3.82482 12.0333 3.33334 12.0333C1.84217 12.0333 0.633335 10.8245 0.633335 9.33333Z"
      fill="currentColor"
    />
  </svg>
);
export default FileSearchIcon;
