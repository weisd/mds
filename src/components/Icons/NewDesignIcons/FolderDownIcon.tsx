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

const FolderDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.22891 1.89554C1.61024 1.51421 2.12742 1.29999 2.6667 1.29999H5.28669C5.62332 1.30004 5.95478 1.38367 6.25112 1.54337C6.54616 1.70238 6.79731 1.93184 6.98222 2.21132L7.5247 3.015C7.58296 3.10346 7.66243 3.17593 7.75593 3.22572C7.84942 3.27551 7.95391 3.30106 8.05983 3.30002L8.06669 3.29995L13.3334 3.29999C13.8726 3.29999 14.3898 3.51421 14.7711 3.89554C15.1525 4.27686 15.3667 4.79405 15.3667 5.33332V12C15.3667 12.5393 15.1525 13.0564 14.7711 13.4378C14.3898 13.8191 13.8726 14.0333 13.3334 14.0333H2.6667C2.12742 14.0333 1.61023 13.8191 1.22891 13.4378C0.847587 13.0564 0.633362 12.5393 0.633362 12V3.33332C0.633362 2.79405 0.847587 2.27686 1.22891 1.89554ZM2.6667 2.69999C2.49872 2.69999 2.33763 2.76671 2.21886 2.88549C2.10009 3.00426 2.03336 3.16535 2.03336 3.33332V12C2.03336 12.168 2.10009 12.329 2.21886 12.4478C2.33763 12.5666 2.49872 12.6333 2.6667 12.6333H13.3334C13.5013 12.6333 13.6624 12.5666 13.7812 12.4478C13.9 12.329 13.9667 12.168 13.9667 12V5.33332C13.9667 5.16535 13.9 5.00426 13.7812 4.88549C13.6624 4.76671 13.5013 4.69999 13.3334 4.69999H8.06977C7.731 4.70268 7.39691 4.62068 7.09786 4.46142C6.799 4.30227 6.54464 4.07101 6.35783 3.78865L5.81538 2.98501C5.75771 2.89744 5.67924 2.82554 5.58694 2.7758C5.49467 2.72607 5.39151 2.70002 5.28669 2.69999C5.28666 2.69999 5.28673 2.69999 5.28669 2.69999H2.6667ZM8.00003 5.96665C8.38663 5.96665 8.70003 6.28005 8.70003 6.66665V8.9767L9.50505 8.17168C9.77842 7.89831 10.2216 7.89831 10.495 8.17168C10.7684 8.44505 10.7684 8.88826 10.495 9.16163L8.495 11.1616C8.22164 11.435 7.77842 11.435 7.50505 11.1616L5.50505 9.16163C5.23169 8.88826 5.23169 8.44505 5.50505 8.17168C5.77842 7.89831 6.22164 7.89831 6.495 8.17168L7.30003 8.9767V6.66665C7.30003 6.28005 7.61343 5.96665 8.00003 5.96665Z"
      fill="currentColor"
    />
  </svg>
);
export default FolderDownIcon;
