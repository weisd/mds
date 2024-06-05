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

const NotebookIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.99997 2.0333C3.65019 2.0333 3.36663 2.31685 3.36663 2.66663V3.29997H3.99997C4.38657 3.29997 4.69997 3.61337 4.69997 3.99997C4.69997 4.38657 4.38657 4.69997 3.99997 4.69997H3.36663V5.96663H3.99997C4.38657 5.96663 4.69997 6.28003 4.69997 6.66663C4.69997 7.05323 4.38657 7.36663 3.99997 7.36663H3.36663V8.6333H3.99997C4.38657 8.6333 4.69997 8.9467 4.69997 9.3333C4.69997 9.7199 4.38657 10.0333 3.99997 10.0333H3.36663V11.3H3.99997C4.38657 11.3 4.69997 11.6134 4.69997 12C4.69997 12.3866 4.38657 12.7 3.99997 12.7H3.36663V13.3333C3.36663 13.6831 3.65019 13.9666 3.99997 13.9666H9.96663V2.0333H3.99997ZM3.99997 0.633301C2.87699 0.633301 1.96663 1.54366 1.96663 2.66663V3.29997H1.3333C0.946701 3.29997 0.633301 3.61337 0.633301 3.99997C0.633301 4.38657 0.946701 4.69997 1.3333 4.69997H1.96663V5.96663H1.3333C0.946701 5.96663 0.633301 6.28003 0.633301 6.66663C0.633301 7.05323 0.946701 7.36663 1.3333 7.36663H1.96663V8.6333H1.3333C0.946701 8.6333 0.633301 8.9467 0.633301 9.3333C0.633301 9.7199 0.946701 10.0333 1.3333 10.0333H1.96663V11.3H1.3333C0.946701 11.3 0.633301 11.6134 0.633301 12C0.633301 12.3866 0.946701 12.7 1.3333 12.7H1.96663V13.3333C1.96663 14.4563 2.87699 15.3666 3.99997 15.3666H12C13.1229 15.3666 14.0333 14.4563 14.0333 13.3333V2.66663C14.0333 1.54366 13.1229 0.633301 12 0.633301H3.99997ZM11.3666 2.0333V13.9666H12C12.3497 13.9666 12.6333 13.6831 12.6333 13.3333V2.66663C12.6333 2.31685 12.3497 2.0333 12 2.0333H11.3666Z"
      fill="currentColor"
    />
  </svg>
);
export default NotebookIcon;
