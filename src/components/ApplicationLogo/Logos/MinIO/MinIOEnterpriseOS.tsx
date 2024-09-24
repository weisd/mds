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

import React, { FC, SVGProps } from "react";

import LogoBase from "../LogoBase/LogoBase";
import { LogoBaseProps } from "../LogoBase/LogoBase.types";

const MinIOEnterpriseOS: FC<SVGProps<any> & LogoBaseProps> = ({
  inverse,
  onClick,
}) => {
  return (
    <LogoBase viewBox="0 0 482.6 67.4" inverse={inverse} onClick={onClick}>
      <g id="Group_16740">
        <g id="Group_1082">
          <rect
            id="Rectangle_674"
            x="28.6"
            y="0.3"
            className={"minioSection"}
            width="4.9"
            height="14.6"
          />
          <path
            id="Path_87"
            className={"minioSection"}
            d="M22.6,0.5l-10,6.1c-0.1,0.1-0.3,0.1-0.5,0l-10-6.1C1.9,0.3,1.6,0.3,1.4,0.3h0
			C0.6,0.3,0,0.9,0,1.6v13.2h4.9V8.5C4.9,8.3,5.1,8,5.4,8c0.1,0,0.2,0,0.3,0.1l5.6,3.4c0.6,0.3,1.2,0.4,1.8,0L19,8.1
			c0.2-0.1,0.5-0.1,0.7,0.2c0,0.1,0.1,0.2,0.1,0.3v6.3h4.9V1.6c0-0.8-0.6-1.4-1.4-1.4h0C23.1,0.3,22.8,0.3,22.6,0.5L22.6,0.5
			L22.6,0.5z"
          />
          <path
            id="Path_88"
            className={"minioSection"}
            d="M58.1,0.3h-5v6.6c0,0.3-0.2,0.5-0.5,0.5c-0.1,0-0.2,0-0.2-0.1l-13-6.9c-0.2-0.1-0.4-0.2-0.7-0.2
			l0,0c-0.8,0-1.4,0.6-1.4,1.4v13.2h5V8.2c0-0.3,0.2-0.5,0.5-0.5c0.1,0,0.2,0,0.2,0.1l13,6.9c0.2,0.1,0.4,0.2,0.7,0.2l0,0
			c0.8,0,1.4-0.6,1.4-1.4L58.1,0.3L58.1,0.3z"
          />
        </g>
        <path
          id="Path_89"
          className={"minioSection"}
          d="M62,14.8V0.3h2.3v14.6L62,14.8L62,14.8z"
        />
        <path
          id="Path_90"
          className={"minioSection"}
          d="M77.7,15.1c-6.1,0-10.4-2.9-10.4-7.5S71.6,0,77.7,0s10.5,2.9,10.5,7.6S83.9,15.1,77.7,15.1z
		 M77.7,1.9c-4.5,0-8,2-8,5.6s3.5,5.6,8,5.6s8.1-2,8.1-5.6C85.7,3.9,82.2,1.9,77.7,1.9L77.7,1.9z"
        />
      </g>
      <g id="ENTERPRISE">
        <g>
          <path
            className={"minioApplicationName"}
            d="M23.8,57.9H0V26.1h23.6v5.8H6.3V39h16.5v5.8H6.3v7.3h17.4V57.9z"
          />
          <path
            className={"minioApplicationName"}
            d="M49.9,43.9v14H44V45.8c0-3.2-1.6-4.9-4.3-4.9c-2.5,0-4.7,1.7-4.7,5v12.1h-5.9v-22h5.8v2.6
			c1.6-2.3,4-3.2,6.5-3.2C46.4,35.3,49.9,38.8,49.9,43.9z"
          />
          <path
            className={"minioApplicationName"}
            d="M71.1,41.2h-8v8c0,2.8,1.5,3.8,3.3,3.8c1.4,0,2.9-0.7,4.1-1.4l2.2,4.6c-1.9,1.3-4.2,2.3-7.3,2.3
			c-5.5,0-8.2-3.1-8.2-8.8v-8.5h-4.2v-5.3h4.2v-6.5h5.9v6.5h8V41.2z"
          />
          <path
            className={"minioApplicationName"}
            d="M95.8,46.9c0,0.7-0.1,1.5-0.1,2H80.1c0.6,3.2,2.9,4.6,5.7,4.6c1.9,0,4-0.8,5.6-2.1l3.5,3.8
			c-2.5,2.3-5.7,3.3-9.4,3.3C78.7,58.5,74,53.9,74,47s4.6-11.7,11.1-11.7S95.8,40,95.8,46.9z M80.1,44.8h9.8
			c-0.6-2.8-2.2-4.4-4.8-4.4C82.3,40.4,80.6,42.1,80.1,44.8L80.1,44.8z"
          />
          <path
            className={"minioApplicationName"}
            d="M115,35.8l-0.9,5.9c-1-0.4-2.4-0.7-3.6-0.7c-2.8,0-4.6,1.7-4.6,5v12H100v-22h5.8v2.4c1.4-2.1,3.5-3,6.2-3
			C113.2,35.3,114.2,35.5,115,35.8L115,35.8z"
          />
          <path
            className={"minioApplicationName"}
            d="M141.5,46.9c0,6.6-4.6,11.6-10.7,11.6c-3,0-5.1-1.2-6.5-2.9V67h-5.9V35.9h5.8v2.4c1.4-1.8,3.6-3,6.6-3
			C136.9,35.3,141.5,40.3,141.5,46.9L141.5,46.9z M124,46.9c0,3.5,2.3,6.1,5.7,6.1s5.7-2.7,5.7-6.1s-2.2-6.1-5.7-6.1
			S124,43.4,124,46.9z"
          />
          <path
            className={"minioApplicationName"}
            d="M160.7,35.8l-0.9,5.9c-1-0.4-2.4-0.7-3.6-0.7c-2.8,0-4.6,1.7-4.6,5v12h-5.9v-22h5.8v2.4c1.4-2.1,3.5-3,6.2-3
			C158.9,35.3,159.9,35.5,160.7,35.8L160.7,35.8z"
          />
          <path
            className={"minioApplicationName"}
            d="M170.8,28.7c0,2.1-1.7,3.8-3.8,3.8s-3.8-1.6-3.8-3.8s1.6-3.8,3.8-3.8S170.8,26.6,170.8,28.7z M170,57.9h-5.9
			v-22h5.9V57.9z"
          />
          <path
            className={"minioApplicationName"}
            d="M191.3,42c-1.8-0.9-4.6-1.8-7-1.8c-2.2,0-3.4,0.8-3.4,2c0,1.3,1.6,1.6,3.6,1.9l2,0.3c4.8,0.7,7.4,2.9,7.4,6.6
			c0,4.5-3.7,7.5-10.1,7.5c-3,0-6.9-0.6-9.8-2.6l2.3-4.5c1.9,1.2,4.2,2.2,7.5,2.2c2.8,0,4.1-0.8,4.1-2.1c0-1.1-1.1-1.7-3.7-2
			l-1.8-0.2c-5.1-0.7-7.6-2.9-7.6-6.7c0-4.5,3.5-7.2,9.3-7.2c3.5,0,6.3,0.7,9.2,2.1L191.3,42L191.3,42z"
          />
          <path
            className={"minioApplicationName"}
            d="M218.3,46.9c0,0.7-0.1,1.5-0.1,2h-15.6c0.6,3.2,2.9,4.6,5.7,4.6c1.9,0,4-0.8,5.6-2.1l3.5,3.8
			c-2.5,2.3-5.7,3.3-9.4,3.3c-6.8,0-11.4-4.6-11.4-11.5s4.6-11.7,11.1-11.7S218.3,40,218.3,46.9L218.3,46.9z M202.6,44.8h9.8
			c-0.6-2.8-2.2-4.4-4.8-4.4C204.8,40.4,203.1,42.1,202.6,44.8L202.6,44.8z"
          />
          <path
            className={"minioSection"}
            d="M263.1,42c0,9.5-6.9,16.4-16.5,16.4s-16.5-6.9-16.5-16.4s6.9-16.4,16.5-16.4S263.1,32.5,263.1,42z M234.4,42
			c0,7.5,5.3,12.5,12.3,12.5S259,49.5,259,42s-5.3-12.5-12.3-12.5S234.4,34.5,234.4,42z"
          />
          <path
            className={"minioSection"}
            d="M289.1,47.1c0,6.5-4.8,11.2-10.8,11.2c-3.4,0-5.9-1.3-7.6-3.3v2.9h-3.7V25.2h3.7v14c1.7-2,4.2-3.3,7.6-3.3
			C284.3,35.9,289.1,40.6,289.1,47.1z M270.4,47.1c0,4.4,3,7.8,7.4,7.8s7.4-3.5,7.4-7.8s-3-7.8-7.4-7.8S270.4,42.7,270.4,47.1z"
          />
          <path
            className={"minioSection"}
            d="M297.4,61.3c0,4-2.2,6.1-5.6,6.1c-1.1,0-2.3-0.3-3.1-0.7l0.9-3.2c0.6,0.2,1.2,0.4,1.9,0.4
			c1.3,0,2.2-0.8,2.2-2.8V36.3h3.7L297.4,61.3L297.4,61.3z M298.1,28.8c0,1.5-1.2,2.6-2.7,2.6s-2.6-1.1-2.6-2.6s1.1-2.7,2.6-2.7
			S298.1,27.2,298.1,28.8z"
          />
          <path
            className={"minioSection"}
            d="M322.7,47.1c0,0.5,0,1-0.1,1.4h-17c0.5,4.5,3.6,6.7,7.3,6.7c2.5,0,4.8-1,6.7-2.6l2,2.5
			c-2.7,2.5-5.7,3.3-8.9,3.3c-6.4,0-11-4.5-11-11.2s4.5-11.2,10.7-11.2S322.7,40.5,322.7,47.1L322.7,47.1z M305.7,45.5h13.2
			c-0.5-3.8-2.9-6.3-6.4-6.3C308.6,39.2,306.3,41.8,305.7,45.5L305.7,45.5z"
          />
          <path
            className={"minioSection"}
            d="M344.8,39.3l-2.4,2.5c-1.6-1.5-3.4-2.4-5.7-2.4c-4.2,0-7.3,3.2-7.3,7.8s3.2,7.8,7.3,7.8c2.3,0,4.3-1,5.8-2.5
			l2.3,2.6c-2,2.2-4.8,3.4-8,3.4c-6.7,0-11.2-4.8-11.2-11.2s4.5-11.2,11.2-11.2C339.9,35.9,342.8,37.1,344.8,39.3L344.8,39.3z"
          />
          <path
            className={"minioSection"}
            d="M364.4,39.7h-9.1v10.5c0,3.2,1.7,4.7,4.1,4.7c1.6,0,3.2-0.6,4.4-1.5l1.8,2.8c-1.7,1.2-3.8,2.1-6.5,2.1
			c-4.7,0-7.5-2.6-7.5-8.1V39.7H347v-3.4h4.6v-6.8h3.7v6.8h9.1V39.7L364.4,39.7z"
          />
          <path
            className={"minioSection"}
            d="M398.1,32.4c-2.6-1.8-5.8-2.9-9.4-2.9c-4.7,0-8,2.1-8,5.5c0,2.9,2.4,4.4,7.2,5l2.8,0.3c5.4,0.7,10,2.8,10,8.5
			c0,6.3-5.8,9.7-12.6,9.7c-4.5,0-9.5-1.6-12.5-4.1l2.2-3.2c2.2,1.9,6.3,3.5,10.4,3.5c4.8,0,8.5-1.9,8.5-5.5c0-3-2.7-4.4-7.6-5
			l-3-0.4c-5.2-0.6-9.4-3.1-9.4-8.5c0-6.1,5.5-9.6,12.2-9.6c4.8,0,8.5,1.4,11.5,3.5L398.1,32.4L398.1,32.4z"
          />
          <path
            className={"minioSection"}
            d="M419.2,39.7h-9.1v10.5c0,3.2,1.7,4.7,4.1,4.7c1.6,0,3.2-0.6,4.4-1.5l1.8,2.8c-1.7,1.2-3.8,2.1-6.5,2.1
			c-4.7,0-7.5-2.6-7.5-8.1V39.7h-4.6v-3.4h4.6v-6.8h3.7v6.8h9.1V39.7L419.2,39.7z"
          />
          <path
            className={"minioSection"}
            d="M443.8,47.1c0,6.4-4.9,11.2-11.4,11.2S421,53.5,421,47.1s4.9-11.2,11.4-11.2S443.8,40.7,443.8,47.1z
			 M424.8,47.1c0,4.5,3.3,7.8,7.6,7.8s7.6-3.2,7.6-7.8s-3.3-7.8-7.6-7.8S424.8,42.6,424.8,47.1z"
          />
          <path
            className={"minioSection"}
            d="M461.5,36.6l-0.9,3.7c-1-0.5-2.5-0.8-3.7-0.8c-3.3,0-5.6,2.5-5.6,6.5v12h-3.7V36.3h3.7v2.8
			c1.5-2.1,3.8-3.3,6.3-3.3C459.1,35.9,460.3,36.1,461.5,36.6L461.5,36.6z"
          />
          <path
            className={"minioSection"}
            d="M482.6,47.1c0,0.5,0,1-0.1,1.4h-17c0.5,4.5,3.6,6.7,7.3,6.7c2.5,0,4.8-1,6.7-2.6l2,2.5
			c-2.7,2.5-5.7,3.3-8.9,3.3c-6.4,0-11-4.5-11-11.2s4.5-11.2,10.7-11.2S482.6,40.5,482.6,47.1L482.6,47.1z M465.6,45.5h13.2
			c-0.5-3.8-2.9-6.3-6.4-6.3C468.6,39.2,466.2,41.8,465.6,45.5L465.6,45.5z"
          />
        </g>
      </g>
    </LogoBase>
  );
};

export default MinIOEnterpriseOS;
