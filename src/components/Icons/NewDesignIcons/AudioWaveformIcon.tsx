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

const AudioWaveformIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.3333 2.03333C9.16533 2.03333 9.00424 2.10006 8.88547 2.21883C8.76669 2.3376 8.69997 2.49869 8.69997 2.66666V13.3333C8.69997 13.8726 8.48574 14.3898 8.10442 14.7711C7.72309 15.1524 7.20591 15.3667 6.66663 15.3667C6.12736 15.3667 5.61017 15.1524 5.22885 14.7711C4.84753 14.3898 4.6333 13.8726 4.6333 13.3333V4.66666C4.6333 4.49869 4.56657 4.3376 4.4478 4.21883C4.32903 4.10006 4.16794 4.03333 3.99997 4.03333C3.832 4.03333 3.67091 4.10006 3.55213 4.21883C3.43336 4.3376 3.36663 4.49869 3.36663 4.66666V7.33333C3.36663 7.8726 3.15241 8.38979 2.77108 8.77111C2.38976 9.15244 1.87257 9.36666 1.3333 9.36666C0.946701 9.36666 0.633301 9.05326 0.633301 8.66666C0.633301 8.28006 0.946701 7.96666 1.3333 7.96666C1.50127 7.96666 1.66236 7.89994 1.78114 7.78116C1.89991 7.66239 1.96663 7.5013 1.96663 7.33333V4.66666C1.96663 4.12739 2.18086 3.6102 2.56218 3.22888C2.94351 2.84756 3.46069 2.63333 3.99997 2.63333C4.53924 2.63333 5.05643 2.84756 5.43775 3.22888C5.81908 3.6102 6.0333 4.12739 6.0333 4.66666V13.3333C6.0333 13.5013 6.10003 13.6624 6.2188 13.7812C6.33757 13.8999 6.49866 13.9667 6.66663 13.9667C6.8346 13.9667 6.99569 13.8999 7.11447 13.7812C7.23324 13.6624 7.29997 13.5013 7.29997 13.3333V2.66666C7.29997 2.12739 7.51419 1.6102 7.89552 1.22888C8.27684 0.847557 8.79403 0.633331 9.3333 0.633331C9.87257 0.633331 10.3898 0.847557 10.7711 1.22888C11.1524 1.6102 11.3666 2.12739 11.3666 2.66666V11.3333C11.3666 11.5013 11.4334 11.6624 11.5521 11.7812C11.6709 11.8999 11.832 11.9667 12 11.9667C12.1679 11.9667 12.329 11.8999 12.4478 11.7812C12.5666 11.6624 12.6333 11.5013 12.6333 11.3333V8.66666C12.6333 8.12739 12.8475 7.6102 13.2288 7.22888C13.6102 6.84756 14.1274 6.63333 14.6666 6.63333C15.0532 6.63333 15.3666 6.94673 15.3666 7.33333C15.3666 7.71993 15.0532 8.03333 14.6666 8.03333C14.4987 8.03333 14.3376 8.10006 14.2188 8.21883C14.1 8.3376 14.0333 8.49869 14.0333 8.66666V11.3333C14.0333 11.8726 13.8191 12.3898 13.4377 12.7711C13.0564 13.1524 12.5392 13.3667 12 13.3667C11.4607 13.3667 10.9435 13.1524 10.5622 12.7711C10.1809 12.3898 9.96663 11.8726 9.96663 11.3333V2.66666C9.96663 2.49869 9.89991 2.3376 9.78113 2.21883C9.66236 2.10006 9.50127 2.03333 9.3333 2.03333Z"
      fill="currentColor"
    />
  </svg>
);
export default AudioWaveformIcon;
