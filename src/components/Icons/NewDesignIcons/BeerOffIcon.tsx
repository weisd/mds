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

const BeerOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838326 0.838357C1.11169 0.56499 1.55491 0.56499 1.82828 0.838357L2.98273 1.99281L5.49997 4.51005C5.51312 4.52223 5.52581 4.53492 5.53802 4.5481L9.16131 8.17139C9.16111 8.17119 9.16151 8.17159 9.16131 8.17139L11.8279 10.838C11.8281 10.8382 11.8284 10.8385 11.8287 10.8387L15.1616 14.1717C15.435 14.4451 15.435 14.8883 15.1616 15.1616C14.8882 15.435 14.445 15.435 14.1717 15.1616L12.0333 13.0233V13.3333C12.0333 13.8726 11.8191 14.3898 11.4377 14.7711C11.0564 15.1524 10.5392 15.3667 9.99997 15.3667H4.66663C4.12736 15.3667 3.61017 15.1524 3.22885 14.7711C2.84753 14.3898 2.6333 13.8726 2.6333 13.3333V5.79598C2.53622 5.74888 2.44211 5.69502 2.35168 5.63462C1.96241 5.37457 1.659 5.00491 1.47983 4.57241C1.30067 4.1399 1.2538 3.66398 1.34516 3.20483C1.38994 2.97974 1.46696 2.76365 1.57285 2.56283L0.838326 1.82831C0.564959 1.55494 0.564959 1.11172 0.838326 0.838357ZM2.69994 3.68992C2.70279 3.80841 2.72742 3.92599 2.77325 4.03662C2.84643 4.21327 2.97036 4.36426 3.12936 4.47048C3.28186 4.57235 3.46005 4.62865 3.64307 4.63305L2.69994 3.68992ZM4.80069 5.79067C4.7395 5.80849 4.67508 5.82848 4.60459 5.85036C4.57812 5.85857 4.55079 5.86706 4.52244 5.87579C4.38678 5.91759 4.21988 5.96784 4.0333 6.00016V13.3333C4.0333 13.5013 4.10003 13.6624 4.2188 13.7812C4.33757 13.8999 4.49866 13.9667 4.66663 13.9667H9.99997C10.1679 13.9667 10.329 13.8999 10.4478 13.7812C10.5666 13.6624 10.6333 13.5013 10.6333 13.3333V11.6233L9.36663 10.3566V12C9.36663 12.3866 9.05323 12.7 8.66663 12.7C8.28003 12.7 7.96663 12.3866 7.96663 12V8.95661L4.80069 5.79067ZM6.53085 2.45221C6.44717 2.52551 6.34327 2.61653 6.23966 2.69472C5.93109 2.92762 5.49214 2.86627 5.25924 2.55769C5.02635 2.24912 5.0877 1.81017 5.39627 1.57727C5.45579 1.53235 5.51502 1.4806 5.59983 1.40649C5.61659 1.39184 5.63436 1.37632 5.65332 1.3598C5.75811 1.26854 5.89055 1.15537 6.04366 1.04955C6.36304 0.828833 6.78189 0.633331 7.3333 0.633331C8.11738 0.633331 8.61601 1.02899 8.93338 1.30577C8.98092 1.34722 9.02131 1.38303 9.05676 1.41445C9.15315 1.4999 9.21295 1.55291 9.28014 1.59872C9.31286 1.62103 9.33168 1.63004 9.34007 1.63331C9.55547 1.63223 9.75206 1.57952 10.014 1.49816C10.0336 1.49207 10.0542 1.4856 10.0756 1.47886C10.3087 1.40543 10.6434 1.3 11 1.3C11.6276 1.3 12.2296 1.54934 12.6735 1.99318C13.1173 2.43701 13.3666 3.03899 13.3666 3.66666C13.3666 4.29434 13.1173 4.89631 12.6735 5.34015C12.4852 5.52844 12.2684 5.68173 12.0333 5.79583V6.63353C12.471 6.63891 12.9011 6.75065 13.2863 6.95935C13.6813 7.17336 14.0167 7.48255 14.262 7.8589C14.5074 8.23525 14.6549 8.66687 14.6913 9.11465C14.7277 9.56243 14.6518 10.0122 14.4704 10.4232C14.3143 10.7769 13.9011 10.9372 13.5474 10.7811C13.1937 10.625 13.0335 10.2118 13.1895 9.8581C13.2768 9.6602 13.3134 9.44364 13.2959 9.22804C13.2784 9.01244 13.2073 8.80463 13.0892 8.62342C12.9711 8.44221 12.8096 8.29334 12.6194 8.1903C12.4292 8.08726 12.2163 8.03331 12 8.03333H11.9169C11.7915 8.22218 11.577 8.34666 11.3333 8.34666C10.9467 8.34666 10.6333 8.03326 10.6333 7.64666V5.99983C10.4193 5.96274 10.2262 5.90192 10.0756 5.85446C10.0542 5.84773 10.0336 5.84126 10.014 5.83517C9.75018 5.75323 9.55266 5.70035 9.33545 5.7C9.20961 5.70096 9.08447 5.71889 8.96341 5.75331C8.59155 5.85904 8.20439 5.6433 8.09866 5.27144C7.99292 4.89958 8.20866 4.51242 8.58052 4.40669C8.82405 4.33744 9.07585 4.30156 9.32903 4.30001L9.3333 4.29998C9.78191 4.3 10.1573 4.4137 10.4292 4.49816C10.7325 4.59233 10.8692 4.63333 11 4.63333C11.2563 4.63333 11.5022 4.53149 11.6835 4.3502C11.8648 4.16892 11.9666 3.92304 11.9666 3.66666C11.9666 3.41029 11.8648 3.16441 11.6835 2.98313C11.5022 2.80184 11.2563 2.7 11 2.7C10.8692 2.7 10.7325 2.741 10.4292 2.83517C10.1573 2.91963 9.78191 3.03333 9.3333 3.03333C8.97674 3.03333 8.69652 2.89525 8.49146 2.75544C8.34278 2.65406 8.19266 2.52035 8.08265 2.42235C8.05718 2.39967 8.03387 2.3789 8.01322 2.36089C7.75726 2.13768 7.58922 2.03333 7.3333 2.03333C7.14138 2.03333 6.99556 2.0935 6.83961 2.20128C6.75505 2.25971 6.67216 2.329 6.57278 2.41554C6.5595 2.42711 6.54548 2.43939 6.53085 2.45221ZM5.99997 9.03333C6.38657 9.03333 6.69997 9.34673 6.69997 9.73333V12C6.69997 12.3866 6.38657 12.7 5.99997 12.7C5.61337 12.7 5.29997 12.3866 5.29997 12V9.73333C5.29997 9.34673 5.61337 9.03333 5.99997 9.03333Z"
      fill="currentColor"
    />
  </svg>
);
export default BeerOffIcon;
