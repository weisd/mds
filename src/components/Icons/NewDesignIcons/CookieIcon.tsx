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

const CookieIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.90727 1.87484C5.11871 1.06538 6.54298 0.633331 7.99997 0.633331C8.22214 0.633331 8.43111 0.738795 8.56309 0.917517C8.69506 1.09624 8.73435 1.327 8.66897 1.53933C8.56376 1.88103 8.55368 2.24495 8.63983 2.59195C8.72598 2.93896 8.9051 3.25591 9.15791 3.50872C9.41073 3.76154 9.72768 3.94065 10.0747 4.0268C10.4217 4.11295 10.7856 4.10288 11.1273 3.99766C11.3752 3.92134 11.6449 3.98831 11.8283 4.17169C12.0117 4.35507 12.0786 4.62481 12.0023 4.87266C11.8971 5.21436 11.887 5.57829 11.9732 5.92529C12.0593 6.27229 12.2384 6.58924 12.4912 6.84206C12.7441 7.09487 13.061 7.27399 13.408 7.36014C13.755 7.44629 14.1189 7.43621 14.4606 7.33099C14.673 7.26561 14.9037 7.30491 15.0825 7.43688C15.2612 7.56885 15.3666 7.77783 15.3666 8C15.3666 9.45699 14.9346 10.8813 14.1251 12.0927C13.3157 13.3041 12.1652 14.2483 10.8191 14.8059C9.47299 15.3635 7.9918 15.5094 6.56281 15.2251C5.13381 14.9409 3.8212 14.2393 2.79095 13.209C1.7607 12.1788 1.0591 10.8662 0.774853 9.43716C0.490608 8.00817 0.636493 6.52698 1.19406 5.1809C1.75162 3.83481 2.69583 2.6843 3.90727 1.87484ZM7.18201 2.08966C6.29215 2.21281 5.43787 2.53589 4.68507 3.0389C3.70386 3.69452 2.93909 4.62639 2.48749 5.71665C2.03589 6.80692 1.91773 8.00662 2.14795 9.16404C2.37818 10.3215 2.94645 11.3846 3.7809 12.2191C4.61535 13.0535 5.67851 13.6218 6.83593 13.852C7.99335 14.0822 9.19305 13.9641 10.2833 13.5125C11.3736 13.0609 12.3054 12.2961 12.9611 11.3149C13.4641 10.5621 13.7872 9.70782 13.9103 8.81796C13.6287 8.82034 13.3465 8.78738 13.0707 8.71889C12.4767 8.57141 11.9341 8.26479 11.5013 7.83201C11.0685 7.39922 10.7619 6.85664 10.6144 6.26262C10.5509 6.00686 10.518 5.74574 10.5154 5.48458C10.2542 5.48201 9.99311 5.44905 9.73735 5.38555C9.14333 5.23808 8.60075 4.93146 8.16796 4.49867C7.73518 4.06589 7.42856 3.52331 7.28108 2.92929C7.21259 2.65342 7.17963 2.37131 7.18201 2.08966ZM5.66664 4.96666C6.05324 4.96666 6.36664 5.28006 6.36664 5.66666V5.67333C6.36664 6.05993 6.05324 6.37333 5.66664 6.37333C5.28004 6.37333 4.96664 6.05993 4.96664 5.67333V5.66666C4.96664 5.28006 5.28004 4.96666 5.66664 4.96666ZM7.99997 7.3C8.38657 7.3 8.69997 7.6134 8.69997 8V8.00666C8.69997 8.39326 8.38657 8.70666 7.99997 8.70666C7.61337 8.70666 7.29997 8.39326 7.29997 8.00666V8C7.29997 7.6134 7.61337 7.3 7.99997 7.3ZM4.66664 8.63333C5.05324 8.63333 5.36664 8.94673 5.36664 9.33333V9.34C5.36664 9.7266 5.05324 10.04 4.66664 10.04C4.28004 10.04 3.96664 9.7266 3.96664 9.34V9.33333C3.96664 8.94673 4.28004 8.63333 4.66664 8.63333ZM10.6666 9.63333C11.0532 9.63333 11.3666 9.94673 11.3666 10.3333V10.34C11.3666 10.7266 11.0532 11.04 10.6666 11.04C10.28 11.04 9.96664 10.7266 9.96664 10.34V10.3333C9.96664 9.94673 10.28 9.63333 10.6666 9.63333ZM7.3333 10.6333C7.7199 10.6333 8.0333 10.9467 8.0333 11.3333V11.34C8.0333 11.7266 7.7199 12.04 7.3333 12.04C6.94671 12.04 6.6333 11.7266 6.6333 11.34V11.3333C6.6333 10.9467 6.94671 10.6333 7.3333 10.6333Z"
      fill="currentColor"
    />
  </svg>
);
export default CookieIcon;
