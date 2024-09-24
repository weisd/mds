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

const LeafyGreenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.30439 0.713377C8.8126 0.593711 9.34309 0.607248 9.84454 0.752677C10.139 0.838066 10.4175 0.967228 10.6713 1.13483C11.1579 0.820669 11.7285 0.649855 12.3166 0.649855C12.715 0.649855 13.1094 0.728317 13.4775 0.880762C13.8455 1.03321 14.1799 1.25665 14.4616 1.53833C14.7433 1.82001 14.9667 2.15442 15.1192 2.52245C15.2716 2.89049 15.3501 3.28495 15.3501 3.68331C15.3501 4.08166 15.2716 4.47612 15.1192 4.84416C15.0491 5.01338 14.964 5.17549 14.8651 5.32864C15.0327 5.58241 15.1619 5.86096 15.2473 6.15539C15.3927 6.65684 15.4062 7.18733 15.2866 7.69554C15.1669 8.20374 14.9181 8.67246 14.5642 9.05633C14.3788 9.25742 14.1679 9.43166 13.9376 9.57507C14.0175 9.88418 14.0485 10.2055 14.028 10.5272C13.9917 11.0972 13.7951 11.6454 13.461 12.1086C13.1269 12.5719 12.6687 12.9314 12.1393 13.1458C11.8009 13.2828 11.4422 13.357 11.0805 13.3665C10.9423 13.6819 10.7561 13.9755 10.5274 14.2361C10.165 14.6492 9.707 14.9673 9.19337 15.1627C8.67974 15.358 8.12611 15.4246 7.5808 15.3568C7.03549 15.2889 6.51508 15.0886 6.065 14.7733C6.03803 14.7544 6.01242 14.7336 5.98837 14.7111C5.44293 14.2008 4.72751 13.9122 3.9818 13.9004C3.26752 14.0122 2.79498 14.3918 2.10056 14.9497C1.99506 15.0345 1.88445 15.1234 1.76708 15.216C1.48784 15.4365 1.0876 15.4125 0.836789 15.1601C0.585974 14.9077 0.564381 14.5073 0.786599 14.2295C0.849121 14.1513 0.909711 14.0761 0.968325 14.0033C1.57806 13.2463 1.97401 12.7547 2.10851 11.9573C2.14858 11.6825 2.08513 11.3823 1.9187 11.0277C1.74971 10.6677 1.50621 10.3144 1.23693 9.92374L1.22693 9.90922C0.917537 9.45992 0.721791 8.94192 0.656865 8.40027C0.591938 7.85863 0.659606 7.30932 0.854044 6.79962C1.04848 6.28992 1.36387 5.83511 1.77305 5.47433C2.03095 5.24693 2.32125 5.06118 2.63337 4.92259C2.64253 4.55985 2.71674 4.2 2.85417 3.8606C3.06855 3.33119 3.42805 2.87306 3.8913 2.53894C4.35454 2.20482 4.90271 2.00827 5.47272 1.97193C5.79445 1.95142 6.11575 1.98241 6.42486 2.06231C6.56827 1.83206 6.74251 1.62113 6.9436 1.43575C7.32747 1.08186 7.79619 0.833043 8.30439 0.713377ZM9.45458 2.09727C9.18457 2.01896 8.89892 2.01167 8.62527 2.07611C8.35162 2.14054 8.09923 2.27452 7.89253 2.46508C7.68583 2.65563 7.53182 2.89632 7.44539 3.16384C7.38139 3.36195 7.23251 3.5213 7.0392 3.5986C6.84588 3.6759 6.62818 3.66314 6.44522 3.56378C6.17495 3.41701 5.86874 3.34952 5.56181 3.36909C5.25488 3.38866 4.95971 3.49449 4.71027 3.6744C4.46083 3.85432 4.26725 4.101 4.15182 4.38607C4.03638 4.67114 4.00378 4.983 4.05776 5.28578C4.12263 5.64968 3.89339 6.0013 3.53426 6.08876C3.22463 6.16417 2.93797 6.31368 2.69894 6.52443C2.45991 6.73519 2.27568 7.00087 2.1621 7.29861C2.04852 7.59636 2.00899 7.91724 2.04691 8.23365C2.08483 8.54996 2.19902 8.85232 2.37965 9.11472M12.3166 2.04985C11.8834 2.04985 11.4679 2.22195 11.1616 2.52828C11.0294 2.66045 10.8499 2.73427 10.663 2.7333C10.4761 2.73232 10.2973 2.65664 10.1665 2.5231C9.96981 2.32225 9.72459 2.17558 9.45458 2.09727M12.3166 2.04985C12.5311 2.04985 12.7435 2.09211 12.9417 2.17419L12.3166 2.04985ZM12.9417 2.17419C13.1399 2.25628 13.32 2.3766 13.4716 2.52828L12.9417 2.17419ZM13.4716 2.52828C13.6233 2.67996 13.7436 2.86003 13.8257 3.05821L13.4716 2.52828ZM13.8257 3.05821C13.9078 3.25639 13.9501 3.4688 13.9501 3.68331L13.8257 3.05821ZM13.9501 3.68331C13.9501 3.89782 13.9078 4.11022 13.8257 4.3084L13.9501 3.68331ZM11.8283 4.17167C12.1016 4.44503 12.1016 4.88825 11.8283 5.16161L4.4586 12.5313C5.3667 12.6401 6.22286 13.0296 6.90423 13.6513C7.15873 13.8213 7.44959 13.9296 7.75371 13.9675C8.07226 14.0071 8.39567 13.9682 8.69571 13.8541C8.99575 13.74 9.2633 13.5542 9.47499 13.3129C9.68669 13.0716 9.8361 12.7821 9.91019 12.4698C9.99587 12.1085 10.3487 11.877 10.7141 11.9422C11.0169 11.9962 11.3288 11.9635 11.6139 11.8481C11.8989 11.7327 12.1456 11.5391 12.3255 11.2897C12.5054 11.0402 12.6113 10.7451 12.6308 10.4381C12.6504 10.1312 12.5829 9.82498 12.4361 9.55471C12.3368 9.37175 12.324 9.15405 12.4013 8.96074C12.4786 8.76742 12.638 8.61855 12.8361 8.55454C13.1036 8.46811 13.3443 8.3141 13.5349 8.1074C13.7254 7.9007 13.8594 7.64831 13.9238 7.37466C13.9883 7.10101 13.981 6.81536 13.9027 6.54535C13.8244 6.27534 13.6777 6.03012 13.4768 5.83341C13.3433 5.70262 13.2676 5.52386 13.2666 5.33695C13.2657 5.15004 13.3395 4.9705 13.4716 4.83833C13.6233 4.68665 13.7436 4.50658 13.8257 4.3084M3.50433 11.5057L10.8383 4.17167C11.1117 3.8983 11.5549 3.8983 11.8283 4.17167M3.50433 11.5057C3.46151 11.1153 3.33692 10.7543 3.18605 10.4329C2.96683 9.96584 2.66497 9.5283 2.4153 9.16641C2.40335 9.14909 2.39135 9.13169 2.37965 9.11472"
      fill="currentColor"
    />
  </svg>
);
export default LeafyGreenIcon;
