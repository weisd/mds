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

import React from "react";
import { Meta, Story } from "@storybook/react";

import NotificationAlert from "./NotificationAlert";
import { NotificationAlertPrp } from "./NotificationAlert.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";

export default {
  title: "MDS/Information/NotificationAlert",
  component: NotificationAlert,
  argTypes: {},
} as Meta<typeof NotificationAlert>;

const Template: Story<NotificationAlertPrp> = ({ ...props }) => {
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <NotificationAlert {...props} designMode={"card"} />
      <br />
      <NotificationAlert {...props} designMode={"banner"} />
      <br />
      <NotificationAlert
        {...props}
        designMode={"card"}
        emphasisMode={"minimal"}
      />
      <br />
      <NotificationAlert
        {...props}
        designMode={"banner"}
        emphasisMode={"minimal"}
      />
      <br />
      <NotificationAlert {...props} designMode={"card"} onClose={() => {}} />
      <br />
      <NotificationAlert {...props} designMode={"banner"} onClose={() => {}} />
      <br />
      <NotificationAlert
        {...props}
        designMode={"card"}
        onClose={() => {}}
        action={<a>Action</a>}
      />
      <br />
      <NotificationAlert
        {...props}
        designMode={"banner"}
        onClose={() => {}}
        action={<a>Action</a>}
      />
      <br />
      <NotificationAlert
        {...props}
        designMode={"card"}
        onClose={() => {}}
        action={<a>Action</a>}
        shadow
      />
      <br />
      <NotificationAlert
        {...props}
        designMode={"banner"}
        onClose={() => {}}
        action={<a>Action</a>}
        shadow
      />
      <br />
      <NotificationAlert
        {...props}
        designMode={"card"}
        onClose={() => {}}
        action={<a>Action</a>}
        emphasisMode={"minimal"}
        shadow
      />
      <br />
      <NotificationAlert
        {...props}
        designMode={"banner"}
        onClose={() => {}}
        action={<a>Action</a>}
        emphasisMode={"minimal"}
        shadow
      />
      <br />
    </StoryThemeProvider>
  );
};

export const Neutral = Template.bind({});
Neutral.args = {
  variant: "neutral",
  title: "This is the title for a message",
  children: "This is the content for an informative message",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  title: "This is the title for a message",
  children: "This is the content for a success message",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  title: "This is the title for a message",
  children: "This is the content for an warning message",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  title: "This is the title for a message",
  children: "This is the content for an error message",
};

export const Information = Template.bind({});
Information.args = {
  variant: "information",
  title: "This is the title for a message",
  children: "This is the content for an error message",
};