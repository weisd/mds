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

const EggFriedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.64727 2.96724C3.05107 3.53032 2.69997 4.33943 2.69997 5.33333C2.69997 5.55114 2.74946 5.77284 2.8281 6.12507C2.83516 6.15668 2.84245 6.18934 2.84997 6.22315C2.93585 6.60963 3.0333 7.08735 3.0333 7.66666C3.0333 8.4705 2.73465 8.95447 2.50578 9.32536C2.4807 9.366 2.45646 9.40528 2.43355 9.44348C2.23267 9.77827 2.0333 10.155 2.0333 11C2.0333 11.9025 2.47412 12.6213 3.1985 13.1387C3.93707 13.6663 4.9558 13.9667 5.99997 13.9667C6.49501 13.9667 6.83516 13.8793 7.09242 13.7658C7.3553 13.6498 7.5658 13.4923 7.80184 13.2956C7.84214 13.262 7.8836 13.2266 7.92646 13.1901C8.37257 12.8097 8.97039 12.3 9.99997 12.3C11.4111 12.3 12.3791 11.9846 12.9915 11.4367C13.589 10.9021 13.9666 10.0385 13.9666 8.66666C13.9666 8.06594 13.8789 7.66795 13.755 7.38509C13.6345 7.11015 13.4621 6.90319 13.2241 6.70834C12.9709 6.50106 12.6626 6.32127 12.2544 6.085L12.2536 6.08454C11.8595 5.85642 11.3955 5.58788 10.9136 5.22692C10.3969 4.83984 10.0259 4.40973 9.71739 4.01319C9.61009 3.87528 9.51545 3.74893 9.4268 3.63059C9.24503 3.38793 9.08846 3.17892 8.89968 2.97289C8.64309 2.69284 8.36735 2.46981 7.99466 2.31003C7.61645 2.14788 7.09709 2.03333 6.3333 2.03333C5.14697 2.03333 4.24596 2.40181 3.64727 2.96724ZM2.686 1.94942C3.58731 1.09818 4.85297 0.633331 6.3333 0.633331C7.23618 0.633331 7.95265 0.768779 8.54631 1.0233C9.1455 1.28018 9.57768 1.64049 9.93192 2.02711C10.1689 2.28574 10.3926 2.58394 10.5947 2.85347C10.6741 2.95927 10.7501 3.06064 10.8223 3.15348C11.0973 3.50693 11.3797 3.82682 11.753 4.10641C12.1608 4.41187 12.5582 4.64321 12.9557 4.87333L12.9893 4.89275C13.3634 5.10923 13.7636 5.34079 14.1109 5.62499C14.4836 5.93014 14.8109 6.30651 15.0373 6.82324C15.2602 7.33204 15.3666 7.93406 15.3666 8.66666C15.3666 10.2948 14.9109 11.5979 13.9251 12.48C12.9541 13.3487 11.5888 13.7 9.99997 13.7C9.49915 13.7 9.2708 13.8913 8.80621 14.2807C8.77155 14.3097 8.73559 14.3398 8.6981 14.3711C8.43413 14.5911 8.10297 14.8502 7.65752 15.0467C7.20644 15.2457 6.67159 15.3667 5.99997 15.3667C4.7108 15.3667 3.3962 15.0004 2.38477 14.2779C1.35915 13.5454 0.633301 12.4308 0.633301 11C0.633301 9.84504 0.933929 9.22173 1.23306 8.72318C1.25995 8.67836 1.28548 8.63633 1.30965 8.59655C1.52621 8.24005 1.6333 8.06377 1.6333 7.66666C1.6333 7.24597 1.56408 6.89036 1.4833 6.52685C1.47517 6.49026 1.46667 6.45269 1.45796 6.41423C1.38586 6.09575 1.29997 5.71638 1.29997 5.33333C1.29997 3.9939 1.7822 2.80301 2.686 1.94942ZM7.66663 6.7C6.76457 6.7 6.0333 7.43127 6.0333 8.33333C6.0333 9.2354 6.76457 9.96666 7.66663 9.96666C8.5687 9.96666 9.29997 9.2354 9.29997 8.33333C9.29997 7.43127 8.5687 6.7 7.66663 6.7ZM4.6333 8.33333C4.6333 6.65807 5.99137 5.3 7.66663 5.3C9.3419 5.3 10.7 6.65807 10.7 8.33333C10.7 10.0086 9.3419 11.3667 7.66663 11.3667C5.99137 11.3667 4.6333 10.0086 4.6333 8.33333Z"
      fill="currentColor"
    />
  </svg>
);
export default EggFriedIcon;
