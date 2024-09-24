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

const PianoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.72973 0.402851C5.98525 0.119652 7.30097 0.304793 8.42957 0.923469C9.54473 1.53477 10.4013 2.52775 10.8427 3.71931C11.1354 4.27666 11.6918 4.63328 12.3333 4.63328C13.9866 4.63328 15.3667 6.01334 15.3667 7.66661V13.3333C15.3667 13.8725 15.1524 14.3897 14.7711 14.7711C14.3898 15.1524 13.8726 15.3666 13.3333 15.3666H2.66667C2.1274 15.3666 1.61021 15.1524 1.22889 14.7711C0.847563 14.3897 0.633338 13.8725 0.633338 13.3333V6.03293C0.517596 4.76374 0.864832 3.49504 1.61165 2.46135C2.36538 1.41808 3.47422 0.686049 4.72973 0.402851ZM2.03334 10.0333V13.3333C2.03334 13.5012 2.10006 13.6623 2.21884 13.7811C2.33761 13.8999 2.4987 13.9666 2.66667 13.9666H13.3333C13.5013 13.9666 13.6624 13.8999 13.7812 13.7811C13.8999 13.6623 13.9667 13.5012 13.9667 13.3333V10.0333H12.7V11.9999C12.7 12.3865 12.3866 12.6999 12 12.6999C11.6134 12.6999 11.3 12.3865 11.3 11.9999V10.0333H10.0333V11.9999C10.0333 12.3865 9.71994 12.6999 9.33334 12.6999C8.94674 12.6999 8.63334 12.3865 8.63334 11.9999V10.0333H7.36667V11.9999C7.36667 12.3865 7.05327 12.6999 6.66667 12.6999C6.28007 12.6999 5.96667 12.3865 5.96667 11.9999V10.0333H4.7V11.9999C4.7 12.3865 4.3866 12.6999 4 12.6999C3.61341 12.6999 3.3 12.3865 3.3 11.9999V10.0333H2.03334ZM2.03334 8.63328V5.99994C2.03334 5.97715 2.03222 5.95438 2.03 5.9317C1.9378 4.99041 2.19258 4.04786 2.74646 3.28122C3.30034 2.51458 4.11517 1.97665 5.03778 1.76854C5.96039 1.56043 6.92725 1.69648 7.7566 2.15112C8.58596 2.60575 9.2207 3.34766 9.5415 4.23738C9.55081 4.2632 9.56163 4.28844 9.57391 4.31299C10.086 5.33709 11.1206 6.03328 12.3333 6.03328C13.2134 6.03328 13.9667 6.78654 13.9667 7.66661V8.63328H2.03334Z"
      fill="currentColor"
    />
  </svg>
);
export default PianoIcon;
