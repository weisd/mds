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

const FileAxis3dIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.56222 1.22888C2.94354 0.847557 3.46073 0.633331 4 0.633331H10C10.1857 0.633331 10.3637 0.707081 10.495 0.838357L13.8283 4.17169C13.9596 4.30297 14.0333 4.48101 14.0333 4.66666V13.3333C14.0333 13.8726 13.8191 14.3898 13.4378 14.7711C13.0565 15.1524 12.5393 15.3667 12 15.3667H4C3.46073 15.3667 2.94354 15.1524 2.56222 14.7711C2.18089 14.3898 1.96667 13.8726 1.96667 13.3333V2.66666C1.96667 2.12739 2.18089 1.6102 2.56222 1.22888ZM12.3101 4.63333L10.0333 2.35661V4C10.0333 4.16797 10.1001 4.32906 10.2188 4.44783C10.3376 4.56661 10.4987 4.63333 10.6667 4.63333H12.3101ZM8.63333 2.03333V4C8.63333 4.53927 8.84756 5.05646 9.22888 5.43778C9.61021 5.81911 10.1274 6.03333 10.6667 6.03333H12.6333V13.3333C12.6333 13.5013 12.5666 13.6624 12.4478 13.7812C12.3291 13.8999 12.168 13.9667 12 13.9667H4C3.83203 13.9667 3.67094 13.8999 3.55217 13.7812C3.43339 13.6624 3.36667 13.5013 3.36667 13.3333V2.66666C3.36667 2.49869 3.43339 2.3376 3.55217 2.21883C3.67094 2.10006 3.83203 2.03333 4 2.03333H8.63333ZM5.33333 5.96666C5.71993 5.96666 6.03333 6.28006 6.03333 6.66666V10.31L7.50503 8.83836C7.77839 8.56499 8.22161 8.56499 8.49498 8.83836C8.76834 9.11172 8.76834 9.55494 8.49498 9.82831L7.02328 11.3H10.6667C11.0533 11.3 11.3667 11.6134 11.3667 12C11.3667 12.3866 11.0533 12.7 10.6667 12.7H5.33333C4.94673 12.7 4.63333 12.3866 4.63333 12V6.66666C4.63333 6.28006 4.94673 5.96666 5.33333 5.96666Z"
      fill="currentColor"
    />
  </svg>
);
export default FileAxis3dIcon;
