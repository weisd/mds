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

const ShieldMinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.94943 2.05107C6.72166 3.12198 4.91726 4.02047 3.36667 4.03322V8.66669C3.36667 10.1485 3.87706 11.2236 4.68169 12.0477C5.50538 12.8913 6.66912 13.5025 8.00849 13.965L8.01282 13.9666C9.34248 13.5014 10.4988 12.8901 11.3187 12.0489C12.123 11.2238 12.6333 10.1485 12.6333 8.66669V4.03322C11.0834 4.02057 9.28556 3.12911 8.05054 2.05103C8.03628 2.03942 8.01844 2.03306 8.00001 2.03306C7.98156 2.03306 7.9637 2.03943 7.94943 2.05107ZM7.03864 0.987813C7.30663 0.758854 7.64753 0.633057 8.00001 0.633057C8.35248 0.633057 8.69339 0.758854 8.96138 0.987813L8.96744 0.992999L8.96741 0.993033C10.0567 1.94542 11.5594 2.63336 12.6667 2.63336C13.0291 2.63336 13.3768 2.77734 13.6331 3.03364C13.8894 3.28994 14.0333 3.63756 14.0333 4.00002V8.66669C14.0333 10.5182 13.3771 11.9429 12.3213 13.0261C11.2846 14.0898 9.89379 14.7936 8.45707 15.2944L8.45134 15.2964L8.45133 15.2963C8.15672 15.3962 7.83696 15.3925 7.54488 15.2861C6.10661 14.7887 4.71637 14.0872 3.67999 13.0257C2.62295 11.9431 1.96667 10.5182 1.96667 8.66669V4.00002C1.96667 3.63756 2.11066 3.28994 2.36696 3.03364C2.62326 2.77734 2.97088 2.63336 3.33334 2.63336C4.44015 2.63336 5.94947 1.93922 7.03282 0.992844L7.03861 0.987781L7.03864 0.987813ZM5.30001 8.00002C5.30001 7.61342 5.61341 7.30002 6.00001 7.30002H10C10.3866 7.30002 10.7 7.61342 10.7 8.00002C10.7 8.38662 10.3866 8.70002 10 8.70002H6.00001C5.61341 8.70002 5.30001 8.38662 5.30001 8.00002Z"
      fill="currentColor"
    />
  </svg>
);
export default ShieldMinusIcon;
