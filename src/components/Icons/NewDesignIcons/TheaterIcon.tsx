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

const TheaterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.3333 0.633301C3.7199 0.633301 4.0333 0.946701 4.0333 1.3333C4.0333 3.14311 3.48997 4.59124 2.94783 5.58516C2.92711 5.62314 2.9064 5.66046 2.8857 5.69714C4.67588 5.0547 5.96663 3.33632 5.96663 1.3333C5.96663 0.946701 6.28003 0.633301 6.66663 0.633301C7.05323 0.633301 7.36663 0.946701 7.36663 1.3333C7.36663 4.21732 5.31901 6.64362 2.60491 7.23106C2.60585 7.23271 2.6068 7.23435 2.60774 7.236C2.9815 7.89008 3.36663 8.84332 3.36663 9.99997C3.36663 10.3866 3.05323 10.7 2.66663 10.7C2.28003 10.7 1.96663 10.3866 1.96663 9.99997C1.96663 9.15661 1.6851 8.44318 1.3922 7.9306C1.24658 7.67576 1.10149 7.47658 0.995026 7.3435C0.941966 7.27718 0.899017 7.22792 0.871121 7.19703C0.857189 7.18161 0.847066 7.17083 0.841378 7.16485L0.836372 7.15965L0.837114 7.16039L0.837978 7.16126C0.837418 7.1607 0.836931 7.16021 0.836372 7.15965C0.565165 6.88625 0.565636 6.44478 0.837931 6.17205C0.837926 6.17206 0.837937 6.17205 0.837931 6.17205M0.837931 6.17205L0.837074 6.17291C0.836949 6.17304 0.837138 6.17287 0.837931 6.17205L0.847595 6.16194C0.857749 6.15122 0.874627 6.1331 0.897279 6.10775C0.942611 6.05703 1.01088 5.97754 1.09455 5.87063C1.26213 5.6565 1.48991 5.33436 1.71877 4.91477C2.17663 4.07536 2.6333 2.85682 2.6333 1.3333C2.6333 0.946701 2.9467 0.633301 3.3333 0.633301M9.3333 0.633301C9.7199 0.633301 10.0333 0.946701 10.0333 1.3333C10.0333 3.33632 11.324 5.0547 13.1142 5.69714C13.0935 5.66046 13.0728 5.62314 13.0521 5.58516C12.51 4.59124 11.9666 3.14311 11.9666 1.3333C11.9666 0.946701 12.28 0.633301 12.6666 0.633301C13.0532 0.633301 13.3666 0.946701 13.3666 1.3333C13.3666 2.85682 13.8233 4.07536 14.2812 4.91477C14.51 5.33436 14.7378 5.6565 14.9054 5.87063C14.9891 5.97754 15.0573 6.05703 15.1027 6.10775C15.1253 6.1331 15.1422 6.15122 15.1523 6.16194L15.1623 6.17238C15.4346 6.4451 15.4348 6.88618 15.1636 7.15958C15.1632 7.15998 15.1628 7.16037 15.1625 7.16076C15.1623 7.16093 15.1626 7.1606 15.1625 7.16076C15.1628 7.16037 15.1632 7.15998 15.1636 7.15958L15.1586 7.16485C15.1529 7.17083 15.1427 7.18161 15.1288 7.19703C15.1009 7.22792 15.058 7.27718 15.0049 7.3435C14.8984 7.47658 14.7534 7.67576 14.6077 7.9306C14.3148 8.44318 14.0333 9.15661 14.0333 9.99997C14.0333 10.3866 13.7199 10.7 13.3333 10.7C12.9467 10.7 12.6333 10.3866 12.6333 9.99997C12.6333 8.84332 13.0184 7.89008 13.3922 7.236C13.3931 7.23435 13.3941 7.23271 13.395 7.23106C10.6809 6.64362 8.6333 4.21732 8.6333 1.3333C8.6333 0.946701 8.9467 0.633301 9.3333 0.633301ZM14.6666 6.66663C15.1616 6.17166 15.1621 6.17219 15.1623 6.17238C15.1622 6.17225 15.1617 6.17179 15.1616 6.17166L14.6666 6.66663ZM4.6333 9.99997C4.6333 9.61337 4.9467 9.29997 5.3333 9.29997H10.6666C11.0532 9.29997 11.3666 9.61337 11.3666 9.99997C11.3666 10.3866 11.0532 10.7 10.6666 10.7H5.3333C4.9467 10.7 4.6333 10.3866 4.6333 9.99997ZM15.1623 6.17238L15.1634 6.17346C15.1635 6.17359 15.1631 6.17319 15.1623 6.17238ZM2.66663 13.3666C2.49866 13.3666 2.33757 13.4334 2.2188 13.5521C2.10003 13.6709 2.0333 13.832 2.0333 14V14.6666C2.0333 15.0532 1.7199 15.3666 1.3333 15.3666C0.946701 15.3666 0.633301 15.0532 0.633301 14.6666V14C0.633301 13.4607 0.847526 12.9435 1.22885 12.5622C1.61017 12.1809 2.12736 11.9666 2.66663 11.9666H5.3333C5.87257 11.9666 6.38976 12.1809 6.77108 12.5622C7.15241 12.9435 7.36663 13.4607 7.36663 14V14.6666C7.36663 15.0532 7.05323 15.3666 6.66663 15.3666C6.28003 15.3666 5.96663 15.0532 5.96663 14.6666V14C5.96663 13.832 5.89991 13.6709 5.78113 13.5521C5.66236 13.4334 5.50127 13.3666 5.3333 13.3666H2.66663ZM10.6666 13.3666C10.4987 13.3666 10.3376 13.4334 10.2188 13.5521C10.1 13.6709 10.0333 13.832 10.0333 14V14.6666C10.0333 15.0532 9.7199 15.3666 9.3333 15.3666C8.9467 15.3666 8.6333 15.0532 8.6333 14.6666V14C8.6333 13.4607 8.84753 12.9435 9.22885 12.5622C9.61017 12.1809 10.1274 11.9666 10.6666 11.9666H13.3333C13.8726 11.9666 14.3898 12.1809 14.7711 12.5622C15.1524 12.9435 15.3666 13.4607 15.3666 14V14.6666C15.3666 15.0532 15.0532 15.3666 14.6666 15.3666C14.28 15.3666 13.9666 15.0532 13.9666 14.6666V14C13.9666 13.832 13.8999 13.6709 13.7811 13.5521C13.6624 13.4334 13.5013 13.3666 13.3333 13.3666H10.6666Z"
      fill="currentColor"
    />
  </svg>
);
export default TheaterIcon;
