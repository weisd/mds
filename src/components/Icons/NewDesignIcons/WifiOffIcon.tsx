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

const WifiOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838333 0.838326C1.1117 0.564959 1.55492 0.564959 1.82828 0.838326L4.60179 3.61183C4.6095 3.6192 4.61706 3.62676 4.62446 3.6345L7.25564 6.26568C7.26906 6.2781 7.28202 6.29105 7.29447 6.30451L15.1616 14.1717C15.435 14.445 15.435 14.8882 15.1616 15.1616C14.8882 15.435 14.445 15.435 14.1717 15.1616L10.6071 11.5971C10.3546 11.7042 10.0514 11.6566 9.84331 11.4525C9.35106 10.97 8.68926 10.6998 7.99997 10.6998C7.31069 10.6998 6.64889 10.97 6.15664 11.4525C5.88055 11.7232 5.43736 11.7187 5.16674 11.4426C4.89612 11.1665 4.90055 10.7234 5.17664 10.4527C5.93059 9.71372 6.94424 9.29978 7.99997 9.29978C8.10809 9.29978 8.21576 9.30412 8.32276 9.3127L6.55452 7.54446C5.52651 7.80119 4.58309 8.32772 3.82333 9.07251C3.54726 9.34314 3.10407 9.33873 2.83343 9.06266C2.5628 8.78659 2.56721 8.34339 2.84328 8.07276C3.58595 7.34472 4.47078 6.78559 5.43703 6.42697L3.96478 4.95472C3.17957 5.33282 2.4507 5.81975 1.79995 6.40174C1.51178 6.65946 1.06925 6.63477 0.811533 6.34661C0.553816 6.05844 0.578501 5.61591 0.866669 5.35819C1.49429 4.79689 2.18507 4.31244 2.92423 3.91418L0.838333 1.82828C0.564966 1.55491 0.564966 1.11169 0.838333 0.838326ZM7.08119 2.67322C8.53551 2.54785 10.0001 2.72138 11.3849 3.18313C12.7696 3.64488 14.0453 4.38509 15.1333 5.35821C15.4215 5.61593 15.4461 6.05846 15.1884 6.34662C14.9307 6.63478 14.4881 6.65945 14.2 6.40173C13.2543 5.55593 12.1456 4.91258 10.942 4.51124C9.73843 4.10991 8.46546 3.95908 7.20143 4.06805C6.81626 4.10125 6.4771 3.81592 6.44389 3.43075C6.41069 3.04558 6.69602 2.70642 7.08119 2.67322ZM10.7222 7.20777C10.9152 6.87281 11.3432 6.75777 11.6782 6.95081C12.2163 7.26097 12.7131 7.63794 13.1567 8.07276C13.4327 8.34339 13.4371 8.78658 13.1665 9.06266C12.8959 9.33873 12.4527 9.34314 12.1766 9.07251C11.8174 8.72033 11.415 8.415 10.9791 8.16379C10.6442 7.97075 10.5291 7.54272 10.7222 7.20777ZM7.29997 13.3333C7.29997 12.9467 7.61337 12.6333 7.99997 12.6333H8.00664C8.39324 12.6333 8.70664 12.9467 8.70664 13.3333C8.70664 13.7199 8.39324 14.0333 8.00664 14.0333H7.99997C7.61337 14.0333 7.29997 13.7199 7.29997 13.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default WifiOffIcon;
