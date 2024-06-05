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

const ThermometerSunIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.0333C11.832 2.0333 11.6709 2.10003 11.5521 2.2188C11.4334 2.33757 11.3666 2.49866 11.3666 2.66663V9.6933C11.3666 9.94339 11.2332 10.1745 11.0166 10.2995C10.6417 10.516 10.3487 10.8501 10.183 11.2501C10.0173 11.6501 9.98826 12.0935 10.1003 12.5117C10.2124 12.9299 10.4593 13.2994 10.8027 13.563C11.1462 13.8265 11.567 13.9694 12 13.9694C12.4329 13.9694 12.8537 13.8265 13.1972 13.563C13.5407 13.2994 13.7876 12.9299 13.8996 12.5117C14.0117 12.0935 13.9826 11.6501 13.8169 11.2501C13.6513 10.8501 13.3582 10.516 12.9833 10.2995C12.7667 10.1745 12.6333 9.94339 12.6333 9.6933V2.66663C12.6333 2.49866 12.5666 2.33757 12.4478 2.2188C12.329 2.10003 12.1679 2.0333 12 2.0333ZM10.5622 1.22885C10.9435 0.847526 11.4607 0.633301 12 0.633301C12.5392 0.633301 13.0564 0.847526 13.4378 1.22885C13.8191 1.61017 14.0333 2.12736 14.0333 2.66663V9.31942C14.5078 9.67898 14.8806 10.1597 15.1104 10.7143C15.394 11.399 15.4437 12.1582 15.2519 12.8741C15.0601 13.5899 14.6374 14.2225 14.0495 14.6737C13.4615 15.1248 12.7411 15.3694 12 15.3694C11.2588 15.3694 10.5384 15.1248 9.95047 14.6737C9.3625 14.2225 8.93983 13.5899 8.74802 12.8741C8.5562 12.1582 8.60596 11.399 8.88957 10.7143C9.11932 10.1597 9.49213 9.67898 9.96663 9.31942V2.66663C9.96663 2.12736 10.1809 1.61017 10.5622 1.22885ZM7.99997 1.29997C8.38657 1.29997 8.69997 1.61337 8.69997 1.99997V3.3333C8.69997 3.7199 8.38657 4.0333 7.99997 4.0333C7.61337 4.0333 7.29997 3.7199 7.29997 3.3333V1.99997C7.29997 1.61337 7.61337 1.29997 7.99997 1.29997ZM2.79166 3.45833C3.06503 3.18496 3.50824 3.18496 3.78161 3.45833L4.72161 4.39833C4.99498 4.67169 4.99498 5.11491 4.72161 5.38828C4.44824 5.66164 4.00503 5.66164 3.73166 5.38828L2.79166 4.44828C2.51829 4.17491 2.51829 3.73169 2.79166 3.45833ZM5.92748 5.98012C6.52676 5.52734 7.26024 5.28796 8.01125 5.30006C8.39779 5.30629 8.70611 5.6247 8.69988 6.01125C8.69365 6.39779 8.37524 6.70611 7.98869 6.69988C7.54998 6.69281 7.12152 6.83264 6.77144 7.09714C6.42137 7.36164 6.16979 7.73561 6.05674 8.15955C5.94369 8.5835 5.97565 9.03307 6.14754 9.43676C6.31943 9.84045 6.62138 10.1751 7.00536 10.3874C7.34368 10.5744 7.4663 11.0004 7.27922 11.3387C7.09215 11.677 6.66624 11.7996 6.32791 11.6126C5.6706 11.2491 5.15371 10.6763 4.85945 9.98524C4.5652 9.29417 4.51048 8.52456 4.70401 7.79882C4.89754 7.07308 5.3282 6.43291 5.92748 5.98012ZM0.633301 8.66663C0.633301 8.28004 0.946701 7.96663 1.3333 7.96663H2.66663C3.05323 7.96663 3.36663 8.28004 3.36663 8.66663C3.36663 9.05323 3.05323 9.36663 2.66663 9.36663H1.3333C0.946701 9.36663 0.633301 9.05323 0.633301 8.66663ZM4.89494 11.7717C5.16831 12.045 5.16831 12.4882 4.89494 12.7616L3.96161 13.6949C3.68824 13.9683 3.24503 13.9683 2.97166 13.6949C2.69829 13.4216 2.69829 12.9784 2.97166 12.705L3.90499 11.7717C4.17836 11.4983 4.62158 11.4983 4.89494 11.7717Z"
      fill="currentColor"
    />
  </svg>
);
export default ThermometerSunIcon;
