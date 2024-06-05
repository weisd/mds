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

const CogIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 0.633331C8.3866 0.633331 8.7 0.946732 8.7 1.33333V2.00739C9.28497 2.0757 9.85403 2.22902 10.3898 2.46016L10.7273 1.87635C10.9208 1.54165 11.3489 1.42716 11.6836 1.62063C12.0183 1.8141 12.1328 2.24227 11.9394 2.57698L11.6023 3.16009C11.8359 3.33393 12.0579 3.52545 12.2662 3.73379C12.4745 3.94212 12.6661 4.16412 12.8399 4.39768L13.423 4.06063C13.7577 3.86715 14.1859 3.98165 14.3794 4.31635C14.5728 4.65106 14.4583 5.07923 14.1236 5.2727L13.5398 5.61016C13.771 6.14597 13.9243 6.71503 13.9926 7.3H14.6667C15.0533 7.3 15.3667 7.6134 15.3667 8C15.3667 8.3866 15.0533 8.7 14.6667 8.7H13.9926C13.9243 9.28497 13.771 9.85403 13.5398 10.3898L14.1236 10.7273C14.4583 10.9208 14.5728 11.3489 14.3794 11.6836C14.1859 12.0183 13.7577 12.1328 13.423 11.9394L12.8399 11.6023C12.6661 11.8359 12.4745 12.0579 12.2662 12.2662C12.0579 12.4745 11.8359 12.6661 11.6023 12.8399L11.9394 13.423C12.1328 13.7577 12.0183 14.1859 11.6836 14.3794C11.3489 14.5728 10.9208 14.4583 10.7273 14.1236L10.3898 13.5398C9.85403 13.771 9.28497 13.9243 8.7 13.9926V14.6667C8.7 15.0533 8.3866 15.3667 8 15.3667C7.6134 15.3667 7.3 15.0533 7.3 14.6667V13.9926C6.71488 13.9243 6.14569 13.7709 5.60977 13.5397L5.27292 14.1233C5.07966 14.4581 4.65156 14.5728 4.31673 14.3796C3.98191 14.1863 3.86715 13.7582 4.06041 13.4234L4.39734 12.8397C4.16391 12.6659 3.94202 12.4744 3.73379 12.2662C3.52545 12.0579 3.33393 11.8359 3.16009 11.6023L2.57698 11.9394C2.24227 12.1328 1.8141 12.0183 1.62063 11.6836C1.42716 11.3489 1.54165 10.9208 1.87635 10.7273L2.46016 10.3898C2.22902 9.85403 2.0757 9.28497 2.00739 8.7H1.33333C0.946732 8.7 0.633331 8.3866 0.633331 8C0.633331 7.6134 0.946732 7.3 1.33333 7.3H2.00739C2.0757 6.71503 2.22902 6.14597 2.46016 5.61016L1.87635 5.2727C1.54165 5.07923 1.42716 4.65106 1.62063 4.31635C1.8141 3.98165 2.24227 3.86715 2.57698 4.06063L3.16009 4.39768C3.33393 4.16412 3.52545 3.94212 3.73379 3.73379C3.94202 3.52555 4.16391 3.33411 4.39734 3.16034L4.06041 2.5766C3.86715 2.24177 3.98191 1.81367 4.31673 1.62041C4.65156 1.42715 5.07966 1.54191 5.27292 1.87673L5.60977 2.46033C6.14569 2.2291 6.71488 2.07572 7.3 2.00739V1.33333C7.3 0.946732 7.6134 0.633331 8 0.633331ZM5.10345 4.38366C4.97135 4.48946 4.84455 4.60292 4.72374 4.72374C3.85482 5.59265 3.36666 6.77116 3.36666 8C3.36666 9.22883 3.85482 10.4073 4.72374 11.2763C4.84455 11.3971 4.97135 11.5105 5.10344 11.6163L6.43883 9.30278C6.135 8.9387 5.96666 8.47803 5.96666 8C5.96666 7.52197 6.135 7.06129 6.43883 6.69722L5.10345 4.38366ZM7.65104 5.99682L6.31584 3.68359C6.84759 3.47611 7.41815 3.36666 8 3.36666C9.22883 3.36666 10.4073 3.85482 11.2763 4.72374C11.9784 5.42592 12.432 6.33028 12.5802 7.3H9.90904C9.80833 7.02536 9.64859 6.77303 9.43778 6.56221C9.05646 6.18089 8.53927 5.96666 8 5.96666C7.88223 5.96666 7.76552 5.97688 7.65104 5.99682ZM7.65897 7.46632C7.66712 7.46203 7.67522 7.45757 7.68326 7.45292C7.69157 7.44813 7.69974 7.44319 7.70777 7.43811C7.79721 7.3916 7.89732 7.36666 8 7.36666C8.16797 7.36666 8.32906 7.43339 8.44783 7.55216C8.5666 7.67094 8.63333 7.83203 8.63333 8C8.63333 8.16797 8.5666 8.32906 8.44783 8.44783C8.32906 8.5666 8.16797 8.63333 8 8.63333C7.89732 8.63333 7.79721 8.6084 7.70777 8.56188C7.69974 8.55681 7.69157 8.55187 7.68326 8.54707C7.67522 8.54243 7.66712 8.53796 7.65897 8.53367C7.62066 8.5092 7.58481 8.48048 7.55216 8.44783C7.43339 8.32906 7.36666 8.16797 7.36666 8C7.36666 7.83203 7.43339 7.67094 7.55216 7.55216C7.58481 7.51951 7.62066 7.4908 7.65897 7.46632ZM7.65104 10.0032L6.31584 12.3164C6.84759 12.5239 7.41815 12.6333 8 12.6333C9.22883 12.6333 10.4073 12.1452 11.2763 11.2763C11.9784 10.5741 12.432 9.66971 12.5802 8.7H9.90904C9.80833 8.97463 9.64859 9.22697 9.43778 9.43778C9.05646 9.8191 8.53927 10.0333 8 10.0333C7.88223 10.0333 7.76552 10.0231 7.65104 10.0032Z"
      fill="currentColor"
    />
  </svg>
);
export default CogIcon;
