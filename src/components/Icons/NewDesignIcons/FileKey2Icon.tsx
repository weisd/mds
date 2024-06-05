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

const FileKey2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.56218 1.22888C2.94351 0.847557 3.46069 0.633331 3.99997 0.633331H9.99997C10.1856 0.633331 10.3637 0.707081 10.4949 0.838357L13.8283 4.17169C13.9596 4.30297 14.0333 4.48101 14.0333 4.66666V13.3333C14.0333 13.8726 13.8191 14.3898 13.4378 14.7711C13.0564 15.1524 12.5392 15.3667 12 15.3667H2.66663C2.28003 15.3667 1.96663 15.0533 1.96663 14.6667C1.96663 14.2801 2.28003 13.9667 2.66663 13.9667H12C12.1679 13.9667 12.329 13.8999 12.4478 13.7812C12.5666 13.6624 12.6333 13.5013 12.6333 13.3333V6.03333H10.6666C10.1274 6.03333 9.61017 5.81911 9.22885 5.43778C8.84753 5.05646 8.6333 4.53927 8.6333 4V2.03333H3.99997C3.832 2.03333 3.67091 2.10006 3.55213 2.21883C3.43336 2.3376 3.36663 2.49869 3.36663 2.66666V6.66666C3.36663 7.05326 3.05323 7.36666 2.66663 7.36666C2.28003 7.36666 1.96663 7.05326 1.96663 6.66666V2.66666C1.96663 2.12739 2.18086 1.6102 2.56218 1.22888ZM10.0333 2.35661V4C10.0333 4.16797 10.1 4.32906 10.2188 4.44783C10.3376 4.56661 10.4987 4.63333 10.6666 4.63333H12.31L10.0333 2.35661ZM6.17166 6.17169C6.44503 5.89832 6.88824 5.89832 7.16161 6.17169C7.43498 6.44506 7.43498 6.88827 7.16161 7.16164L6.98992 7.33333L7.16161 7.50502C7.43498 7.77839 7.43498 8.22161 7.16161 8.49497C6.88824 8.76834 6.44503 8.76834 6.17166 8.49497L5.99997 8.32328L4.51187 9.81137C4.63259 10.0714 4.69997 10.3611 4.69997 10.6667C4.69997 11.7896 3.78961 12.7 2.66663 12.7C1.54366 12.7 0.633301 11.7896 0.633301 10.6667C0.633301 9.54368 1.54366 8.63333 2.66663 8.63333C2.97215 8.63333 3.26193 8.70071 3.52192 8.82143L5.50459 6.83876C5.50446 6.83889 5.50473 6.83862 5.50459 6.83876C5.50473 6.83862 5.50526 6.83809 5.50539 6.83795L6.17166 6.17169ZM2.66663 10.0333C2.31685 10.0333 2.0333 10.3169 2.0333 10.6667C2.0333 11.0164 2.31685 11.3 2.66663 11.3C3.01641 11.3 3.29997 11.0164 3.29997 10.6667C3.29997 10.3169 3.01641 10.0333 2.66663 10.0333Z"
      fill="currentColor"
    />
  </svg>
);
export default FileKey2Icon;
