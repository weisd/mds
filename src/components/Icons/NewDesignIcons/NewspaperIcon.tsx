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

const NewspaperIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.89552 1.22885C4.27684 0.847526 4.79403 0.633301 5.3333 0.633301H13.3333C13.8726 0.633301 14.3898 0.847526 14.7711 1.22885C15.1524 1.61017 15.3666 2.12736 15.3666 2.66663V13.3333C15.3666 13.8726 15.1524 14.3898 14.7711 14.7711C14.3898 15.1524 13.8726 15.3666 13.3333 15.3666H2.66663C2.12736 15.3666 1.61017 15.1524 1.22885 14.7711C0.847526 14.3898 0.633301 13.8726 0.633301 13.3333V7.3333C0.633301 6.21337 1.5467 5.29997 2.66663 5.29997H3.29997V2.66663C3.29997 2.12736 3.51419 1.61017 3.89552 1.22885ZM3.29997 6.69997H2.66663C2.3199 6.69997 2.0333 6.98657 2.0333 7.3333V13.3333C2.0333 13.5013 2.10003 13.6624 2.2188 13.7811C2.33757 13.8999 2.49866 13.9666 2.66663 13.9666C2.8346 13.9666 2.9957 13.8999 3.11447 13.7811C3.23324 13.6624 3.29997 13.5013 3.29997 13.3333V6.69997ZM4.59882 13.9666C4.66523 13.7641 4.69997 13.5505 4.69997 13.3333V2.66663C4.69997 2.49866 4.76669 2.33757 4.88547 2.2188C5.00424 2.10003 5.16533 2.0333 5.3333 2.0333H13.3333C13.5013 2.0333 13.6624 2.10003 13.7811 2.2188C13.8999 2.33757 13.9666 2.49866 13.9666 2.66663V13.3333C13.9666 13.5013 13.8999 13.6624 13.7811 13.7811C13.6624 13.8999 13.5013 13.9666 13.3333 13.9666H4.59882ZM5.96663 3.99997C5.96663 3.61337 6.28003 3.29997 6.66663 3.29997H12C12.3866 3.29997 12.7 3.61337 12.7 3.99997V6.66663C12.7 7.05323 12.3866 7.36663 12 7.36663H6.66663C6.28003 7.36663 5.96663 7.05323 5.96663 6.66663V3.99997ZM7.36663 4.69997V5.96663H11.3V4.69997H7.36663ZM5.96663 9.3333C5.96663 8.9467 6.28003 8.6333 6.66663 8.6333H12C12.3866 8.6333 12.7 8.9467 12.7 9.3333C12.7 9.7199 12.3866 10.0333 12 10.0333H6.66663C6.28003 10.0333 5.96663 9.7199 5.96663 9.3333ZM5.96663 12C5.96663 11.6134 6.28003 11.3 6.66663 11.3H9.99997C10.3866 11.3 10.7 11.6134 10.7 12C10.7 12.3866 10.3866 12.7 9.99997 12.7H6.66663C6.28003 12.7 5.96663 12.3866 5.96663 12Z"
      fill="currentColor"
    />
  </svg>
);
export default NewspaperIcon;
