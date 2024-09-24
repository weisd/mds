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

const ContactIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.33338 0.633331C5.71998 0.633331 6.03338 0.946732 6.03338 1.33333V1.96666H9.96672V1.33333C9.96672 0.946732 10.2801 0.633331 10.6667 0.633331C11.0533 0.633331 11.3667 0.946732 11.3667 1.33333V1.96666H12.6667C13.7897 1.96666 14.7 2.87702 14.7 4V13.3333C14.7 14.4563 13.7897 15.3667 12.6667 15.3667H3.33338C2.2104 15.3667 1.30005 14.4563 1.30005 13.3333V4C1.30005 2.87702 2.2104 1.96666 3.33338 1.96666H4.63338V1.33333C4.63338 0.946732 4.94678 0.633331 5.33338 0.633331ZM3.33338 3.36666C2.9836 3.36666 2.70005 3.65022 2.70005 4V13.3333C2.70005 13.6831 2.9836 13.9667 3.33338 13.9667H12.6667C13.0165 13.9667 13.3 13.6831 13.3 13.3333V4C13.3 3.65022 13.0165 3.36666 12.6667 3.36666H3.33338ZM8.00005 6.03333C7.65027 6.03333 7.36672 6.31688 7.36672 6.66666C7.36672 7.01644 7.65027 7.3 8.00005 7.3C8.34983 7.3 8.63338 7.01644 8.63338 6.66666C8.63338 6.31688 8.34983 6.03333 8.00005 6.03333ZM5.96672 6.66666C5.96672 5.54368 6.87707 4.63333 8.00005 4.63333C9.12303 4.63333 10.0334 5.54368 10.0334 6.66666C10.0334 7.78964 9.12303 8.7 8.00005 8.7C6.87707 8.7 5.96672 7.78964 5.96672 6.66666ZM4.56227 10.5622C4.94359 10.1809 5.46077 9.96666 6.00005 9.96666H10C10.5393 9.96666 11.0565 10.1809 11.4378 10.5622C11.8192 10.9435 12.0334 11.4607 12.0334 12C12.0334 12.3866 11.72 12.7 11.3334 12.7C10.9468 12.7 10.6334 12.3866 10.6334 12C10.6334 11.832 10.5667 11.6709 10.4479 11.5522C10.3291 11.4334 10.168 11.3667 10 11.3667H6.00005C5.83208 11.3667 5.67099 11.4334 5.55221 11.5522C5.43344 11.6709 5.36672 11.832 5.36672 12C5.36672 12.3866 5.05331 12.7 4.66672 12.7C4.28012 12.7 3.96672 12.3866 3.96672 12C3.96672 11.4607 4.18094 10.9435 4.56227 10.5622Z"
      fill="currentColor"
    />
  </svg>
);
export default ContactIcon;
