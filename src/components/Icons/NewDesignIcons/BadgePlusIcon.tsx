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

const BadgePlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99999 2.03652C7.66986 2.03652 7.34504 2.11963 7.05548 2.27817C6.76591 2.43672 6.52092 2.66562 6.34308 2.94375C6.18445 3.19184 5.88752 3.31413 5.60019 3.24971C5.27708 3.17727 4.94092 3.18758 4.62286 3.2797C4.3048 3.37181 4.01515 3.54274 3.78076 3.77664C3.54638 4.01053 3.37484 4.29983 3.28206 4.61769C3.18928 4.93556 3.17826 5.2717 3.25002 5.59496C3.31398 5.88307 3.19038 6.18034 2.941 6.33816C2.66073 6.51554 2.42987 6.76091 2.2699 7.05147C2.10992 7.34202 2.02604 7.66831 2.02604 8C2.02604 8.33168 2.10992 8.65797 2.2699 8.94853C2.42987 9.23908 2.66073 9.48446 2.941 9.66183C3.19038 9.81965 3.31398 10.1169 3.25002 10.405C3.17826 10.7283 3.18928 11.0644 3.28206 11.3823C3.37484 11.7002 3.54638 11.9895 3.78076 12.2234C4.01515 12.4573 4.3048 12.6282 4.62286 12.7203C4.94092 12.8124 5.27708 12.8227 5.60019 12.7503C5.88811 12.6857 6.18558 12.8087 6.34395 13.0576C6.52156 13.3368 6.76675 13.5667 7.05681 13.7259C7.34687 13.8852 7.67242 13.9687 8.00333 13.9687C8.33423 13.9687 8.65979 13.8852 8.94985 13.7259C9.23991 13.5667 9.48509 13.3368 9.6627 13.0576C9.82078 12.8091 10.1175 12.6861 10.405 12.75C10.7283 12.8217 11.0644 12.8107 11.3823 12.7179C11.7002 12.6252 11.9895 12.4536 12.2234 12.2192C12.4573 11.9848 12.6282 11.6952 12.7203 11.3771C12.8124 11.0591 12.8227 10.7229 12.7503 10.3998C12.6859 10.1125 12.8082 9.81554 13.0562 9.65691C13.3344 9.47907 13.5633 9.23408 13.7218 8.94451C13.8804 8.65495 13.9635 8.33013 13.9635 8C13.9635 7.66987 13.8804 7.34505 13.7218 7.05548C13.5633 6.76591 13.3344 6.52092 13.0562 6.34308C12.808 6.18437 12.6857 5.88723 12.7504 5.59978C12.8231 5.27618 12.8129 4.93944 12.7205 4.62087C12.6282 4.30231 12.4568 4.01227 12.2222 3.77774C11.9877 3.54321 11.6977 3.3718 11.3791 3.27947C11.0606 3.18713 10.7238 3.17686 10.4002 3.24961C10.1128 3.31424 9.81562 3.19197 9.65691 2.94375C9.47907 2.66562 9.23408 2.43672 8.94451 2.27817C8.65494 2.11963 8.33012 2.03652 7.99999 2.03652ZM6.38311 1.0502C6.87881 0.778785 7.43485 0.63652 7.99999 0.63652C8.56513 0.63652 9.12118 0.778785 9.61688 1.0502C9.97483 1.24619 10.293 1.50498 10.5568 1.81295C10.9636 1.77964 11.3744 1.82047 11.7689 1.93481C12.3142 2.09288 12.8107 2.38631 13.2122 2.78779C13.6137 3.18928 13.9071 3.68578 14.0652 4.23112C14.1795 4.62562 14.2204 5.03641 14.187 5.44318C14.495 5.707 14.7538 6.02516 14.9498 6.38311C15.2212 6.87881 15.3635 7.43486 15.3635 8C15.3635 8.56514 15.2212 9.12118 14.9498 9.61688C14.7538 9.97491 14.4949 10.2931 14.1868 10.557C14.2199 10.9629 14.1791 11.3729 14.065 11.7666C13.9073 12.3111 13.6147 12.8069 13.2143 13.2081C12.8139 13.6094 12.3187 13.903 11.7746 14.0619C11.3811 14.1767 10.9713 14.2184 10.5653 14.1862C10.3014 14.4958 9.98257 14.7561 9.62364 14.9531C9.1271 15.2258 8.56979 15.3687 8.00333 15.3687C7.43686 15.3687 6.87956 15.2258 6.38301 14.9531C6.02436 14.7562 5.70579 14.4962 5.44194 14.1869C5.03633 14.2198 4.62678 14.179 4.23341 14.065C3.68893 13.9074 3.19309 13.6147 2.79185 13.2143C2.39061 12.8139 2.09696 12.3187 1.93814 11.7746C1.8234 11.3815 1.78171 10.9721 1.81372 10.5664C1.50282 10.3024 1.24145 9.9833 1.04349 9.62375C0.769641 9.12636 0.626038 8.56779 0.626038 8C0.626038 7.4322 0.769641 6.87363 1.04349 6.37624C1.24145 6.01669 1.50282 5.69755 1.81372 5.43359C1.78171 5.02794 1.8234 4.61852 1.93814 4.22542C2.09696 3.68128 2.39061 3.18605 2.79185 2.78565C3.19309 2.38525 3.68893 2.09264 4.23341 1.93496C4.62712 1.82093 5.03704 1.78013 5.443 1.81316C5.70685 1.50509 6.02508 1.24624 6.38311 1.0502ZM7.99999 4.63333C8.38659 4.63333 8.69999 4.94673 8.69999 5.33333V7.3H10.6667C11.0533 7.3 11.3667 7.6134 11.3667 8C11.3667 8.3866 11.0533 8.7 10.6667 8.7H8.69999V10.6667C8.69999 11.0533 8.38659 11.3667 7.99999 11.3667C7.61339 11.3667 7.29999 11.0533 7.29999 10.6667V8.7H5.33333C4.94673 8.7 4.63333 8.3866 4.63333 8C4.63333 7.6134 4.94673 7.3 5.33333 7.3H7.29999V5.33333C7.29999 4.94673 7.61339 4.63333 7.99999 4.63333Z"
      fill="currentColor"
    />
  </svg>
);
export default BadgePlusIcon;
