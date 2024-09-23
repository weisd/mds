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

const AIStorTag: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 200.3 51" inverse={inverse} onClick={onClick}>
      <path
        className={"minioApplicationName"}
        d="M147.1,50.8c-3.3,0-6.6-.4-9.7-1.7-2.6-1-4.9-2.5-6.6-4.9-1.6-2.3-2.1-4.9-1.8-7.6.5-4.3,2.9-7.1,6.6-9.1,2.3-1.2,4.7-1.8,7.2-2.2,2.5-.3,4.9-.4,7.4-.1,3.4.3,6.7,1.1,9.7,3,2.7,1.7,4.6,4,5.2,7.2.9,4.5-.4,8.3-3.9,11.2-2.2,1.9-4.8,2.9-7.6,3.5-2.1.5-4.3.7-6.5.7h0ZM146.6,46.2c2.6,0,4.5-.3,6.4-1,3.2-1.3,5.5-4,5.3-7.7,0-2-.7-3.7-2.2-5.1-1.3-1.2-2.8-1.9-4.5-2.3-2.1-.5-4.3-.6-6.5-.4-1.6.1-3.2.5-4.6,1.1-4.6,2-5.3,6.4-4.2,9.5.7,2,2.2,3.4,4.1,4.4,2.1,1.1,4.4,1.4,6.2,1.5Z"
      />
      <path
        className={"minioApplicationName"}
        d="M78.7,25.1c4,0,8,.6,11.8,2.1.7.3,1.3.6,2,.9.2,0,.2.2.1.3-.6,1.3-1.3,2.6-1.9,3.9,0,.2-.1.2-.3,0-2.4-1.2-5-1.9-7.6-2.3-3-.5-5.9-.6-8.9,0-.7.1-1.4.4-2.1.8-.4.3-.8.7-.8,1.3,0,.7.2,1.2.8,1.6.7.5,1.5.7,2.2.8,1.8.4,3.6.5,5.5.7,2.9.2,5.8.5,8.7,1.3,1.5.4,2.9,1,4.1,2.1,1.2,1.1,1.7,2.5,1.6,4.2-.1,2.3-1.4,4-3.2,5.3-1.7,1.1-3.6,1.8-5.6,2.2-2.3.5-4.6.6-6.9.6-3.5,0-6.9-.5-10.2-1.8-1.5-.6-2.9-1.3-4.2-2.3-.3-.2-.3-.3,0-.6.9-1.1,1.9-2.2,2.8-3.3,0-.1.2-.2.3,0,2.1,1.6,4.5,2.3,7,2.8,2.5.5,5,.6,7.5.4,1.4-.1,2.7-.3,4-.9.5-.2.9-.5,1.3-.9.7-.8.6-1.9-.2-2.6-.8-.6-1.7-.8-2.6-1-1.9-.4-3.9-.6-5.8-.7-2.8-.2-5.6-.5-8.2-1.3-1.3-.4-2.6-1-3.7-1.9-2.2-1.8-2.4-4.9-1-7,.9-1.4,2.2-2.3,3.7-3,1.9-.9,4-1.3,6.1-1.6,1.3-.2,2.6-.2,3.9-.2h0Z"
      />
      <path
        className={"minioApplicationName"}
        d="M188.6,40.8c3.6,3.2,7.1,6.3,10.7,9.5-.2,0-.3,0-.4,0-2.7,0-5.4,0-8.1,0-.3,0-.6,0-.8-.3-2.8-2.9-5.6-5.8-8.4-8.7-.5-.5-1-1.1-1.1-1.8-.2-.9.3-1.5,1.1-1.6.4,0,.7,0,1.1,0,1.8,0,3.6,0,5.4-.2.8-.1,1.6-.3,2.4-.7,1.9-1,2.5-3.5,1.2-5-.6-.7-1.4-1.1-2.3-1.3-1.2-.3-2.4-.4-3.6-.5-3.1,0-6.1,0-9.2,0-.3,0-.4,0-.4.4,0,6.5,0,13,0,19.5,0,.4-.1.4-.5.4-1.9,0-3.8,0-5.7,0-.3,0-.4,0-.4-.4,0-8,0-16,0-24,0-.3,0-.4.4-.4,5.5,0,10.9,0,16.4,0,2.6,0,5.3.3,7.7,1.2,1.4.5,2.8,1.3,3.8,2.5,1.8,2.3,1.8,5.4-.1,7.8-1.5,1.9-3.5,2.9-5.8,3.4-1,.2-1.9.3-2.9.3-.2,0-.4,0-.6,0h0Z"
      />
      <path
        className={"minioApplicationName"}
        d="M8,50.2c-.1,0-.2,0-.3,0-2.2,0-4.3,0-6.5,0h-.4c.4-.8.8-1.5,1.2-2.2,3.9-7.4,7.8-14.8,11.8-22.3.1-.2.3-.3.5-.3,2.9,0,5.8,0,8.6,0,.2,0,.4,0,.5.3,3,5.8,6.1,11.6,9.1,17.4,1.2,2.2,2.3,4.5,3.5,6.7.2.3.2.3-.2.3-2.3,0-4.5,0-6.8,0-.2,0-.3,0-.4-.3-3.3-7.1-6.6-14.2-9.9-21.4,0-.1-.1-.2-.2-.3-1.3,2.7-2.6,5.4-3.9,8-.8,1.7-1.6,3.4-2.4,5,0,0-.1.1-.2.2-1.2,2.5-2.4,4.9-3.6,7.4-.2.4-.4.8-.5,1.2,0,0,0,0,0,0,0,0,0,0,0,0h0Z"
      />
      <path
        className={"minioApplicationName"}
        d="M112,25.6c5.2,0,10.3,0,15.5,0,.3,0,.4,0,.4.4,0,1.3,0,2.5,0,3.8,0,.3,0,.4-.4.4-4,0-7.9,0-11.9,0-.3,0-.4,0-.4.4,0,6.4,0,12.9,0,19.3,0,.3,0,.4-.4.4-1.9,0-3.8,0-5.7,0-.3,0-.4,0-.4-.4,0-6.5,0-12.9,0-19.4,0-.3,0-.4-.4-.4-4,0-7.9,0-11.9,0-.3,0-.4,0-.4-.4,0-1.3,0-2.5,0-3.8,0-.4.1-.4.4-.4,5.2,0,10.3,0,15.5,0h0Z"
      />
      <path
        className={"minioSection"}
        d="M32.8,8.3c0,2.1,0,4.2,0,6.4,0,.3-.1.4-.4.4-1.4,0-2.8,0-4.2,0-.3,0-.4,0-.4-.4,0-1.9,0-3.8,0-5.7,0-.7-.3-.9-.9-.5-1.9,1.1-3.7,2.2-5.6,3.3-.8.5-1.5.4-2.2,0-1.8-1.1-3.5-2.2-5.3-3.2-.2-.1-.4-.3-.6-.1-.2.1-.3.4-.3.6,0,1.9,0,3.8,0,5.7,0,.3,0,.3-.3.3-1.4,0-2.9,0-4.3,0-.3,0-.3,0-.3-.4,0-4.2,0-8.4,0-12.7,0-.6.2-1.1.7-1.4.6-.3,1.1-.2,1.6.1,3.2,2,6.4,3.9,9.6,5.9.4.2.6.2,1,0,3.2-2,6.4-3.9,9.7-5.9.8-.5,1.8-.3,2.1.6,0,.2,0,.4,0,.6,0,2.1,0,4.2,0,6.3h0Z"
      />
      <path
        className={"minioSection"}
        d="M45.5,8.3c0-2.1,0-4.2,0-6.3,0-1.2,1.1-1.8,2.1-1.3,4.3,2.3,8.5,4.5,12.8,6.8.1,0,.3.2.4.1.3,0,.5-.2.5-.6,0-.9,0-1.7,0-2.6,0-1.2,0-2.4,0-3.6,0-.2,0-.3.3-.3,1.5,0,2.9,0,4.4,0,.2,0,.3,0,.3.3,0,4.3,0,8.6,0,12.8,0,1.2-1.1,1.8-2.1,1.3-4-2.1-7.9-4.2-11.9-6.3-.3-.2-.6-.3-.9-.5-.5-.3-.8,0-.8.5,0,2,0,4.1,0,6.1,0,.3,0,.4-.4.4-1.4,0-2.9,0-4.3,0-.2,0-.3,0-.3-.3,0-2.2,0-4.3,0-6.5h0Z"
      />
      <path
        className={"minioApplicationName"}
        d="M45.6,37.9c0,4,0,8,0,12,0,.3,0,.4-.4.4-2,0-4,0-5.9,0-.3,0-.3,0-.3-.3,0-8,0-16.1,0-24.1,0-.3,0-.3.3-.3,2,0,4,0,6,0,.3,0,.3,0,.3.3,0,4,0,8,0,12.1h0Z"
      />
      <path
        className={"minioSection"}
        d="M85.7,15.4c-2,0-4.2-.3-6.2-1.4-1.8-.9-3.1-2.2-3.7-4.1-1-3.1.2-6.1,3.1-7.9,1.6-1,3.3-1.5,5.2-1.6,2.3-.2,4.5-.1,6.7.6,1.8.6,3.4,1.5,4.5,3,2.2,3,1.4,7.3-1.8,9.4-1.5,1-3.2,1.5-4.9,1.8-.8.1-1.7.2-2.8.2h0ZM85.9,13.4c.6,0,1.1,0,1.7-.1,1.6-.2,3.1-.6,4.4-1.6,2.3-1.7,2.7-4.9.8-7.1-.8-1-1.9-1.5-3.1-1.9-2-.6-4-.7-6.1-.4-1.4.2-2.7.6-3.8,1.5-1.7,1.3-2.3,2.9-1.9,5,.3,1.5,1.2,2.6,2.6,3.4,1.7.9,3.5,1.2,5.4,1.2Z"
      />
      <path
        className={"minioSection"}
        d="M36.7,7.8c0-2.3,0-4.7,0-7,0-.3,0-.3.3-.3,1.5,0,2.9,0,4.4,0,.2,0,.3,0,.3.3,0,4.7,0,9.4,0,14.1,0,.2,0,.3-.3.3-1.5,0-2.9,0-4.4,0-.3,0-.3,0-.3-.3,0-2.3,0-4.7,0-7Z"
      />
      <path
        className={"minioSection"}
        d="M56.3,25.4c1.8,0,3.5,0,5.3,0,.5,0,.8.2.9.6.1.4,0,.8-.5,1.1-3.4,1.9-6.7,3.8-10.1,5.7-.7.4-1.4,0-1.4-.8,0-2.1,0-4.1,0-6.2,0-.3,0-.4.4-.4,1.8,0,3.6,0,5.4,0h0s0,0,0,0Z"
      />
      <path
        className={"minioSection"}
        d="M8.1,50.2c0-.4.3-.8.5-1.2,1.2-2.5,2.4-4.9,3.6-7.4,0,0,.1-.2.2-.2,2,0,4.1,0,6.1,0,.7,0,1.1.5,1.1,1.1,0,.4-.2.6-.5.8-2.8,1.8-5.6,3.6-8.4,5.3-.7.5-1.5.9-2.2,1.4,0,0-.2.2-.3.2h0Z"
      />
      <path
        className={"minioSection"}
        d="M72.5,7.8c0,2.3,0,4.6,0,7,0,.3,0,.4-.4.4-.5,0-1.1,0-1.6,0-.3,0-.4,0-.4-.4,0-3.8,0-7.6,0-11.5s0-1.7,0-2.5c0-.3,0-.4.4-.4.6,0,1.1,0,1.7,0,.2,0,.3,0,.3.3,0,2.4,0,4.7,0,7.1Z"
      />
      <path className={"minioSection"} d="M8,50.2s0,0,0,0c0,0,0,0,0,0Z" />
    </LogoBase>
  );
};

export default AIStorTag;
