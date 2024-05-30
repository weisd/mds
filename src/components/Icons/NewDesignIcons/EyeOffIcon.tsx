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

const EyeOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838326 0.838357C1.11169 0.56499 1.55491 0.56499 1.82828 0.838357L4.89164 3.90172C4.89802 3.90786 4.9043 3.91414 4.91048 3.92056L7.07886 6.08894C7.08049 6.09055 7.08211 6.09218 7.08373 6.09381L9.9062 8.91628C9.9078 8.91787 9.9094 8.91946 9.91098 8.92106L12.0779 11.088C12.0846 11.0944 12.0911 11.101 12.0976 11.1077L15.1616 14.1717C15.435 14.4451 15.435 14.8883 15.1616 15.1616C14.8882 15.435 14.445 15.435 14.1717 15.1616L11.4855 12.4754C10.4204 13.0616 9.22111 13.3698 7.99917 13.3667C5.40856 13.3664 3.56928 12.0649 2.40368 10.8096C1.82061 10.1817 1.39627 9.55602 1.11721 9.0872C0.97729 8.85213 0.872805 8.65467 0.802254 8.51357C0.766952 8.44296 0.740067 8.38631 0.721418 8.34594C0.712091 8.32575 0.704817 8.30961 0.699573 8.29782L0.693225 8.28342L0.691185 8.27873L0.690448 8.27702C0.690319 8.27672 0.689899 8.27574 1.3333 8L0.689899 8.27574C0.610847 8.09129 0.614763 7.88177 0.700654 7.7004C1.32047 6.39157 2.22338 5.24109 3.34006 4.33004L0.838326 1.82831C0.564959 1.55494 0.564959 1.11172 0.838326 0.838357ZM4.33594 5.32592C3.4155 6.05104 2.65785 6.96317 2.11371 8.00299C2.16688 8.10419 2.23559 8.22895 2.32022 8.37113C2.562 8.77731 2.92932 9.31827 3.42959 9.85701C4.43054 10.935 5.92434 11.9667 7.99997 11.9667L8.00184 11.9667C8.84844 11.9689 9.68157 11.7857 10.444 11.434L9.36157 10.3516C9.2613 10.413 9.15689 10.4681 9.04897 10.5161C8.71777 10.6637 8.36024 10.7431 7.99771 10.7495C7.63518 10.7559 7.27507 10.6892 6.93888 10.5534C6.60268 10.4176 6.29728 10.2155 6.04089 9.95907C5.7845 9.70269 5.58238 9.39728 5.44659 9.06109C5.31079 8.72489 5.2441 8.36479 5.2505 8.00225C5.25689 7.63972 5.33625 7.2822 5.48382 6.951C5.5319 6.84307 5.58692 6.73867 5.64841 6.63839L4.33594 5.32592ZM6.70069 7.69067C6.66931 7.79983 6.65229 7.91288 6.65028 8.02695C6.6472 8.2015 6.67931 8.37489 6.74469 8.53676C6.81008 8.69863 6.90739 8.84568 7.03084 8.96912C7.15428 9.09257 7.30133 9.18989 7.4632 9.25527C7.62508 9.32065 7.79846 9.35276 7.97301 9.34968C8.08709 9.34767 8.20014 9.33066 8.30929 9.29927L6.70069 7.69067ZM7.99917 13.3667C7.99881 13.3667 7.99845 13.3667 7.99809 13.3667L7.99997 12.6668L7.99917 13.3667C7.99944 13.3667 7.99891 13.3667 7.99917 13.3667ZM7.99866 2.63333L7.99997 2.63333C10.591 2.63333 12.4305 3.93496 13.5963 5.19035C14.1793 5.81827 14.6037 6.44398 14.8827 6.91279C15.0226 7.14786 15.1271 7.34532 15.1977 7.48643C15.233 7.55703 15.2599 7.61368 15.2785 7.65406C15.2878 7.67425 15.2951 7.69038 15.3004 7.70218L15.3067 7.71658L15.3087 7.72127L15.3095 7.72298C15.3096 7.72328 15.31 7.72425 14.6666 8L15.31 7.72425C15.3886 7.90752 15.3852 8.11559 15.3009 8.29625C14.979 8.98524 14.5754 9.63298 14.0987 10.2255C13.8563 10.5267 13.4157 10.5744 13.1145 10.3321C12.8133 10.0897 12.7656 9.64907 13.0079 9.34786C13.3454 8.9284 13.6399 8.47644 13.8872 7.99883C13.8339 7.8973 13.7648 7.7719 13.6797 7.62887C13.4379 7.22268 13.0706 6.68173 12.5703 6.14298C11.5695 5.06515 10.0759 4.03355 8.00064 4.03333C7.7463 4.03383 7.49223 4.04985 7.23984 4.08129C6.85621 4.12909 6.50647 3.85684 6.45867 3.47321C6.41087 3.08957 6.68312 2.73983 7.06676 2.69203C7.37591 2.65352 7.68712 2.63391 7.99866 2.63333Z"
      fill="currentColor"
      fillOpacity="0.65"
    />
  </svg>
);

export default EyeOffIcon;
