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

import { useState, useCallback } from "react";
import { NotificationStackProps } from "./NotificationStack.types";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationStackProps[]>(
    [],
  );

  const addNotification = useCallback(
    (message: React.ReactNode, duration: number) => {
      const id = Date.now();
      const newNotification = { id, message, duration };
      setNotifications((prevState) => [...prevState, newNotification]);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((notif) => notif.id !== id));
      }, duration); // Se wait for this notification to complete it's appearance.
    },
    [],
  );

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  }, []);

  return {
    notifications,
    addNotification,
    removeNotification,
  };
};