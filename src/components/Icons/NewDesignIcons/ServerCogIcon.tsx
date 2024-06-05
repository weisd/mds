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

const ServerCogIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 2.0333C2.49866 2.0333 2.33757 2.10003 2.2188 2.2188C2.10003 2.33757 2.0333 2.49866 2.0333 2.66663V5.3333C2.0333 5.50127 2.10003 5.66236 2.2188 5.78113C2.33757 5.89991 2.49866 5.96663 2.66663 5.96663H2.99997C3.38657 5.96663 3.69997 6.28003 3.69997 6.66663C3.69997 7.05323 3.38657 7.36663 2.99997 7.36663H2.66663C2.12736 7.36663 1.61017 7.15241 1.22885 6.77108C0.847526 6.38976 0.633301 5.87257 0.633301 5.3333V2.66663C0.633301 2.12736 0.847526 1.61017 1.22885 1.22885C1.61017 0.847526 2.12736 0.633301 2.66663 0.633301H13.3333C13.8726 0.633301 14.3898 0.847526 14.7711 1.22885C15.1524 1.61017 15.3666 2.12736 15.3666 2.66663V5.3333C15.3666 5.87257 15.1524 6.38976 14.7711 6.77108C14.3898 7.15241 13.8726 7.36663 13.3333 7.36663H13C12.6134 7.36663 12.3 7.05323 12.3 6.66663C12.3 6.28003 12.6134 5.96663 13 5.96663H13.3333C13.5013 5.96663 13.6624 5.89991 13.7811 5.78113C13.8999 5.66236 13.9666 5.50127 13.9666 5.3333V2.66663C13.9666 2.49866 13.8999 2.33757 13.7811 2.2188C13.6624 2.10003 13.5013 2.0333 13.3333 2.0333H2.66663ZM3.29997 3.99997C3.29997 3.61337 3.61337 3.29997 3.99997 3.29997H4.00663C4.39323 3.29997 4.70663 3.61337 4.70663 3.99997C4.70663 4.38657 4.39323 4.69997 4.00663 4.69997H3.99997C3.61337 4.69997 3.29997 4.38657 3.29997 3.99997ZM9.15466 4.86922C9.52142 4.99148 9.71963 5.3879 9.59738 5.75466L9.57905 5.80963C9.77992 5.9547 9.96004 6.12672 10.1141 6.32039L10.2067 6.28337C10.5656 6.13979 10.973 6.31438 11.1166 6.67333C11.2601 7.03227 11.0856 7.43965 10.7266 7.58323L10.6713 7.60534C10.6902 7.73415 10.7 7.86592 10.7 7.99997C10.7 8.09069 10.6955 8.18038 10.6868 8.26881L10.688 8.26922C11.0548 8.39147 11.253 8.7879 11.1307 9.15466C11.0085 9.52142 10.612 9.71963 10.2453 9.59738L10.1903 9.57905C10.0452 9.77992 9.87321 9.96004 9.67955 10.1141L9.71657 10.2067C9.86015 10.5656 9.68556 10.973 9.32661 11.1166C8.96766 11.2601 8.56028 11.0856 8.4167 10.7266L8.39459 10.6713C8.26578 10.6902 8.13401 10.7 7.99997 10.7C7.90924 10.7 7.81956 10.6955 7.73113 10.6868L7.73071 10.688C7.60846 11.0548 7.21204 11.253 6.84527 11.1307C6.47851 11.0085 6.2803 10.612 6.40256 10.2453L6.42088 10.1903C6.22001 10.0452 6.03989 9.87321 5.88583 9.67955L5.79327 9.71657C5.43433 9.86015 5.02695 9.68556 4.88337 9.32661C4.73979 8.96766 4.91438 8.56028 5.27333 8.4167L5.3286 8.39459C5.30974 8.26578 5.29997 8.13401 5.29997 7.99997C5.29997 7.90924 5.30444 7.81956 5.31318 7.73113L5.31194 7.73071C4.94518 7.60846 4.74697 7.21204 4.86922 6.84527C4.99148 6.47851 5.3879 6.2803 5.75466 6.40256L5.80963 6.42088C5.9547 6.22001 6.12672 6.03989 6.32039 5.88583L6.28337 5.79327C6.13979 5.43433 6.31438 5.02695 6.67333 4.88337C7.03227 4.73979 7.43965 4.91438 7.58323 5.27333L7.60534 5.3286C7.73415 5.30974 7.86592 5.29997 7.99997 5.29997C8.09069 5.29997 8.18038 5.30444 8.26881 5.31318L8.26922 5.31194C8.39147 4.94518 8.7879 4.74697 9.15466 4.86922ZM7.32465 6.88891C7.3701 6.88064 7.41539 6.86772 7.45994 6.8499C7.52173 6.82518 7.57806 6.79265 7.62824 6.75389C7.74602 6.71881 7.87079 6.69997 7.99997 6.69997C8.47062 6.69997 8.88287 6.95008 9.11102 7.32465C9.1193 7.3701 9.13221 7.41539 9.15003 7.45994C9.17475 7.52173 9.20728 7.57806 9.24605 7.62824C9.28113 7.74602 9.29997 7.87079 9.29997 7.99997C9.29997 8.47062 9.04985 8.88287 8.67528 9.11102C8.62984 9.1193 8.58454 9.13221 8.53999 9.15003C8.4782 9.17475 8.42187 9.20728 8.37169 9.24605C8.25391 9.28113 8.12914 9.29997 7.99997 9.29997C7.52931 9.29997 7.11707 9.04985 6.88891 8.67528C6.88064 8.62984 6.86772 8.58454 6.8499 8.53999C6.82518 8.4782 6.79265 8.42187 6.75389 8.37169C6.71881 8.25391 6.69997 8.12914 6.69997 7.99997C6.69997 7.52931 6.95008 7.11707 7.32465 6.88891ZM1.22885 9.22885C1.61017 8.84753 2.12736 8.6333 2.66663 8.6333H2.99997C3.38657 8.6333 3.69997 8.9467 3.69997 9.3333C3.69997 9.7199 3.38657 10.0333 2.99997 10.0333H2.66663C2.49866 10.0333 2.33757 10.1 2.2188 10.2188C2.10003 10.3376 2.0333 10.4987 2.0333 10.6666V13.3333C2.0333 13.5013 2.10003 13.6624 2.2188 13.7811C2.33757 13.8999 2.49866 13.9666 2.66663 13.9666H13.3333C13.5013 13.9666 13.6624 13.8999 13.7811 13.7811C13.8999 13.6624 13.9666 13.5013 13.9666 13.3333V10.6666C13.9666 10.4987 13.8999 10.3376 13.7811 10.2188C13.6624 10.1 13.5013 10.0333 13.3333 10.0333H13C12.6134 10.0333 12.3 9.7199 12.3 9.3333C12.3 8.9467 12.6134 8.6333 13 8.6333H13.3333C13.8726 8.6333 14.3898 8.84753 14.7711 9.22885C15.1524 9.61017 15.3666 10.1274 15.3666 10.6666V13.3333C15.3666 13.8726 15.1524 14.3898 14.7711 14.7711C14.3898 15.1524 13.8726 15.3666 13.3333 15.3666H2.66663C2.12736 15.3666 1.61017 15.1524 1.22885 14.7711C0.847526 14.3898 0.633301 13.8726 0.633301 13.3333V10.6666C0.633301 10.1274 0.847526 9.61017 1.22885 9.22885ZM3.29997 12C3.29997 11.6134 3.61337 11.3 3.99997 11.3H4.00663C4.39323 11.3 4.70663 11.6134 4.70663 12C4.70663 12.3866 4.39323 12.7 4.00663 12.7H3.99997C3.61337 12.7 3.29997 12.3866 3.29997 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ServerCogIcon;
