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

const BrushIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.2396 2.77152C13.0922 2.71118 12.9344 2.68076 12.7752 2.68203C12.616 2.68329 12.4587 2.71622 12.3123 2.77889C12.166 2.84155 12.0336 2.93271 11.9228 3.04705L11.9148 3.05535L6.53474 8.42862C6.2612 8.70181 5.81799 8.70154 5.54479 8.428C5.27159 8.15447 5.27187 7.71125 5.5454 7.43805L10.9216 2.06849C11.1607 1.82284 11.4461 1.62689 11.7612 1.49193C12.0783 1.35615 12.4192 1.28481 12.7641 1.28207C13.109 1.27933 13.451 1.34524 13.7702 1.47597C14.0894 1.6067 14.3793 1.79962 14.6232 2.04351C14.8671 2.2874 15.06 2.57738 15.1908 2.89656C15.3215 3.21574 15.3874 3.55774 15.3847 3.90264C15.3819 4.24755 15.3106 4.58846 15.1748 4.90552C15.0399 5.22061 14.844 5.50589 14.5984 5.74496L9.22899 11.1277C8.95596 11.4014 8.51275 11.4019 8.23904 11.1289C7.96534 10.8559 7.96479 10.4127 8.23782 10.139L13.6196 4.74382C13.734 4.63306 13.8252 4.50072 13.8879 4.35439C13.9505 4.20805 13.9834 4.05071 13.9847 3.89152C13.986 3.73234 13.9556 3.57449 13.8952 3.42718C13.8349 3.27986 13.7458 3.14603 13.6333 3.03346C13.5207 2.9209 13.3869 2.83185 13.2396 2.77152ZM2.01342 11.963C2.01895 10.4723 3.21905 9.26 4.7134 9.26H4.71572C5.07117 9.26118 5.4229 9.33236 5.75084 9.46947C6.07878 9.60659 6.3765 9.80695 6.627 10.0591C6.8775 10.3113 7.07588 10.6103 7.21081 10.9392C7.34559 11.2677 7.41443 11.6194 7.4134 11.9745C7.41278 13.8494 5.90415 15.3667 4.04674 15.3667C2.76367 15.3667 1.65402 14.5977 0.882133 13.812C0.810041 13.7393 0.721572 13.6266 0.67221 13.4692C0.617867 13.296 0.626773 13.1183 0.684845 12.9607C0.781552 12.6983 0.990225 12.5572 1.06064 12.5104C1.15872 12.4453 1.26838 12.3908 1.35116 12.3508C1.39917 12.3276 1.43654 12.3101 1.47205 12.2934C1.5163 12.2726 1.55767 12.2531 1.61316 12.2259C1.79089 12.1386 1.90866 12.0667 1.97913 12.0005C1.99817 11.9827 2.00841 11.97 2.01342 11.963ZM7.4134 11.9745C7.4134 11.9749 7.4134 11.9753 7.4134 11.9757L6.7134 11.9733H7.4134C7.4134 11.9737 7.4134 11.9741 7.4134 11.9745ZM4.71223 10.66C3.99724 10.6606 3.4134 11.2424 3.4134 11.9733C3.4134 12.4443 3.18253 12.7911 2.93726 13.0213C2.79112 13.1585 2.6265 13.2676 2.47535 13.3538C2.98528 13.7342 3.52627 13.9667 4.04674 13.9667C5.12228 13.9667 6.0134 13.0846 6.0134 11.9733L6.01341 11.971C6.01398 11.7994 5.98074 11.6294 5.91561 11.4706C5.85047 11.3119 5.7547 11.1675 5.63376 11.0458C5.51283 10.924 5.36911 10.8273 5.21079 10.7611C5.05283 10.6951 4.88344 10.6607 4.71223 10.66ZM1.83491 13.6768C1.83635 13.6759 1.83813 13.6748 1.84033 13.6734C1.8271 13.6838 1.82311 13.6847 1.83491 13.6768Z"
      fill="currentColor"
    />
  </svg>
);
export default BrushIcon;
