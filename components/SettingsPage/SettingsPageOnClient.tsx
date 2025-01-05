"use client";

import { Settings } from "@/types";
import { editSettings } from "@/utils/editSettings";
import React, { useState, useEffect } from "react";

type NotificationPreferences = {
  sms: boolean;
  push: boolean;
  email: boolean;
};

export const SettingsPageOnClient = ({
  initialSettings,
}: {
  initialSettings: Settings;
}) => {
  const [settings, setSettings] = useState<Settings>(initialSettings);

  // Sync settings with the server whenever they change
  useEffect(() => {
    editSettings(settings);
  }, [settings]);

  // Handler for toggling notification preferences
  const toggleNotificationPreference = (key: keyof NotificationPreferences) => {
    setSettings((prev) => ({
      ...prev,
      notificationPreferences: {
        ...prev.notificationPreferences,
        [key]: !prev.notificationPreferences[key],
      },
    }));
  };

  // Handler for toggling twoFactorAuth
  const toggleTwoFactorAuth = () => {
    setSettings((prev) => ({
      ...prev,
      twoFactorAuth: !prev.twoFactorAuth,
    }));
  };

  return (
    <div className="flex flex-col mt-[104px] h-full w-full">
      <div className="grid grid-cols-1 gap-10 w-[85%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[20%] 3xl:w-[18%] text-sm self-center">
        {/* Notification Preferences */}
        <div className="card p-4 space-y-4">
          <h2 className="text-base">Notification Preferences</h2>
          {Object.entries(settings.notificationPreferences).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between p-2 border-b border-zinc-800"
            >
              <span className="capitalize">{key}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  className="sr-only peer"
                  onChange={() =>
                    toggleNotificationPreference(key as keyof NotificationPreferences)
                  }
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-zinc-700 peer-checked:bg-green-500 peer-focus:ring-2 peer-focus:ring-green-300 transition-all"></div>
                <span className="ml-3 text-sm font-medium text-gray-300">
                  {value ? "Enabled" : "Disabled"}
                </span>
              </label>
            </div>
          ))}
        </div>

        {/* Two-Factor Authentication */}
        <div className="card p-4">
          <h2 className="text-base">Two-Factor Authentication</h2>
          <div className="flex items-center justify-between text-sm mt-6 p-2 border-b border-zinc-800">
            <span>Enable Two-Factor Authentication</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.twoFactorAuth}
                className="sr-only peer"
                onChange={toggleTwoFactorAuth}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-zinc-700 peer-checked:bg-green-500 peer-focus:ring-2 peer-focus:ring-green-300 transition-all"></div>
              <span className="ml-3 text-sm font-medium text-gray-300">
                {settings.twoFactorAuth ? "Enabled" : "Disabled"}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
