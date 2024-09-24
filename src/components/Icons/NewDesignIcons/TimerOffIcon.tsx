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

const TimerOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838358 0.838326C1.11173 0.564959 1.55494 0.564959 1.82831 0.838326L5.03556 4.04558C6.10306 3.45038 7.33089 3.19112 8.55662 3.31012C9.97783 3.4481 11.304 4.08567 12.2993 5.10936C13.2923 6.10954 13.9039 7.42584 14.0277 8.82987C14.1344 10.0383 13.874 11.246 13.2877 12.2977L15.1616 14.1717C15.435 14.445 15.435 14.8882 15.1616 15.1616C14.8883 15.435 14.4451 15.435 14.1717 15.1616L11.9136 12.9035C11.9074 12.8975 11.9013 12.8914 11.8953 12.8852L7.50533 8.49524C7.50513 8.49504 7.50492 8.49484 7.50472 8.49464L4.4481 5.43801C4.44189 5.43203 4.43577 5.42592 4.42976 5.41967L0.838358 1.82828C0.564991 1.55491 0.564991 1.11169 0.838358 0.838326ZM6.07757 5.08758L7.36394 6.37395C7.47475 6.13352 7.71789 5.96663 8 5.96663C8.3866 5.96663 8.7 6.28003 8.7 6.66663V7.71002L12.2456 11.2557C12.5674 10.538 12.7031 9.74568 12.6332 8.95292C12.5379 7.87364 12.0675 6.86186 11.3036 6.09349L11.2977 6.08763L11.2978 6.08759C10.5332 5.30011 9.51382 4.80964 8.42133 4.70357C7.61514 4.6253 6.80776 4.76011 6.07757 5.08758ZM9.33333 2.0333H6.66667C6.28007 2.0333 5.96667 1.7199 5.96667 1.3333C5.96667 0.946701 6.28007 0.633301 6.66667 0.633301H9.33333C9.71993 0.633301 10.0333 0.946701 10.0333 1.3333C10.0333 1.7199 9.71993 2.0333 9.33333 2.0333ZM3.33554 6.687C3.69248 6.83549 3.86146 7.24522 3.71297 7.60217C3.36211 8.44557 3.26838 9.37387 3.44356 10.2704C3.61851 11.1657 4.05387 11.9895 4.69501 12.6383C5.3439 13.2795 6.16761 13.7148 7.06292 13.8897C7.95943 14.0649 8.88773 13.9712 9.73113 13.6203C10.0881 13.4718 10.4978 13.6408 10.6463 13.9978C10.7948 14.3547 10.6258 14.7644 10.2689 14.9129C9.17063 15.3698 7.96184 15.4919 6.79443 15.2638C5.62703 15.0356 4.5531 14.4675 3.70762 13.6309L3.70242 13.6257L3.70245 13.6257C2.86576 12.7802 2.29766 11.7063 2.06954 10.5389C1.84143 9.37146 1.96348 8.16267 2.42036 7.06443C2.56885 6.70749 2.97859 6.5385 3.33554 6.687Z"
      fill="currentColor"
    />
  </svg>
);
export default TimerOffIcon;
