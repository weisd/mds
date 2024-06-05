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

const FingerprintIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03333C4.7199 2.03333 2.0333 4.71993 2.0333 8C2.0333 8.3866 1.7199 8.7 1.3333 8.7C0.946701 8.7 0.633301 8.3866 0.633301 8C0.633301 3.94673 3.9467 0.633331 7.99997 0.633331C9.14361 0.633331 10.2715 0.8996 11.2944 1.41105C12.3173 1.9225 13.2071 2.66509 13.8933 3.58C14.1253 3.88928 14.0626 4.32804 13.7533 4.56C13.444 4.79196 13.0053 4.72928 12.7733 4.42C12.2175 3.67896 11.4968 3.0775 10.6683 2.66325C9.83984 2.249 8.92626 2.03333 7.99997 2.03333ZM8.0005 4.69743C7.42105 4.69734 6.85179 4.84982 6.34997 5.13955C6.01516 5.33285 5.58705 5.21814 5.39375 4.88333C5.20045 4.54853 5.31516 4.12041 5.64997 3.92711C6.36468 3.51447 7.17544 3.2973 8.00072 3.29743C8.826 3.29756 9.63669 3.515 10.3513 3.92787C11.0659 4.34073 11.6591 4.93448 12.0714 5.64939C12.4837 6.3643 12.7005 7.17517 12.7 8.00045L12 8H12.7V8.00045V8.00112C12.7 8.31492 12.7 8.78842 12.6864 9.35019C12.6771 9.73668 12.3563 10.0424 11.9698 10.0331C11.5833 10.0238 11.2775 9.70296 11.2868 9.31647C11.3 8.77225 11.3 8.31287 11.3 8V7.99955C11.3003 7.4201 11.1481 6.85077 10.8586 6.34881C10.5692 5.84685 10.1526 5.42996 9.65088 5.14008C9.14916 4.85019 8.57995 4.69753 8.0005 4.69743ZM4.45741 6.0058C4.8224 6.13326 5.01495 6.53246 4.8875 6.89744C4.76591 7.24562 4.69997 7.61437 4.69997 8C4.69997 10.0562 4.35985 12.134 3.99738 13.2214C3.87513 13.5881 3.4787 13.7863 3.11194 13.6641C2.74518 13.5418 2.54697 13.1454 2.66922 12.7786C2.97342 11.866 3.29997 9.94375 3.29997 8C3.29997 7.45229 3.39402 6.92771 3.56577 6.43589C3.69323 6.0709 4.09243 5.87834 4.45741 6.0058ZM14.3942 5.98063C14.7731 5.90379 15.1425 6.14866 15.2193 6.52755C15.2532 6.69473 15.2739 6.9667 15.288 7.25099C15.3031 7.55393 15.3131 7.92561 15.316 8.323C15.3219 9.11294 15.3001 10.0336 15.2298 10.7363C15.1914 11.121 14.8483 11.4017 14.4636 11.3632C14.079 11.3247 13.7983 10.9817 13.8368 10.597C13.8998 9.96638 13.9217 9.10239 13.9161 8.33333C13.9133 7.95122 13.9037 7.59981 13.8898 7.32071C13.8749 7.02296 13.857 6.85393 13.8473 6.80578C13.7704 6.4269 14.0153 6.05746 14.3942 5.98063ZM6.56218 6.56221C6.94351 6.18089 7.46069 5.96666 7.99997 5.96666C8.38657 5.96666 8.69997 6.28006 8.69997 6.66666C8.69997 7.05326 8.38657 7.36666 7.99997 7.36666C7.832 7.36666 7.67091 7.43339 7.55213 7.55216C7.43336 7.67094 7.36663 7.83203 7.36663 8C7.36663 8.71492 7.2973 9.73564 7.1893 10.7414C7.14802 11.1258 6.80295 11.4039 6.41856 11.3627C6.03417 11.3214 5.75603 10.9763 5.7973 10.5919C5.90263 9.61102 5.96663 8.64508 5.96663 8C5.96663 7.46072 6.18086 6.94354 6.56218 6.56221ZM9.3333 8.04666C9.7199 8.04666 10.0333 8.36006 10.0333 8.74666V8.75474C10.0333 9.54494 10.0333 10.6304 9.94787 11.7308C9.863 12.8239 9.69013 13.9927 9.31657 14.9266C9.17299 15.2856 8.76561 15.4602 8.40666 15.3166C8.04771 15.173 7.87312 14.7656 8.0167 14.4067C8.30981 13.6739 8.47026 12.6761 8.55207 11.6225C8.63301 10.58 8.6333 9.54246 8.6333 8.74666C8.6333 8.36006 8.9467 8.04666 9.3333 8.04666ZM0.633301 10.6667C0.633301 10.2801 0.946701 9.96666 1.3333 9.96666H1.33997C1.72657 9.96666 2.03997 10.2801 2.03997 10.6667C2.03997 11.0533 1.72657 11.3667 1.33997 11.3667H1.3333C0.946701 11.3667 0.633301 11.0533 0.633301 10.6667ZM11.9277 11.3033C12.3125 11.3407 12.5941 11.6829 12.5567 12.0677C12.5062 12.5875 12.2925 13.7532 12.213 14.1506C12.1372 14.5297 11.7684 14.7756 11.3894 14.6997C11.0103 14.6239 10.7644 14.2551 10.8402 13.876C10.9208 13.4734 11.1205 12.3725 11.1633 11.9323C11.2007 11.5475 11.5429 11.2659 11.9277 11.3033ZM6.26828 12.644C6.649 12.7112 6.90317 13.0743 6.83598 13.455C6.76178 13.8755 6.62511 14.2926 6.50785 14.6504C6.48188 14.7297 6.45686 14.8061 6.43368 14.8789C6.31646 15.2473 5.92279 15.4509 5.55439 15.3337C5.18599 15.2165 4.98237 14.8228 5.09959 14.4544C5.13051 14.3572 5.16077 14.2645 5.18994 14.175C5.30434 13.8243 5.40202 13.5248 5.45729 13.2117C5.52447 12.831 5.88757 12.5768 6.26828 12.644Z"
      fill="currentColor"
    />
  </svg>
);
export default FingerprintIcon;
