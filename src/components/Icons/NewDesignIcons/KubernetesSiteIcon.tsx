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

const KubernetesSiteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M7.94375 0.262513C7.8 0.268763 7.6625 0.306263 7.5375 0.362513L1.99375 3.01876C1.70625 3.15626 1.49375 3.41876 1.41875 3.73126L0.05 9.68126C-0.0125 9.95626 0.0375 10.25 0.19375 10.4875C0.2125 10.5188 0.23125 10.5438 0.25625 10.5688L4.09375 15.3375C4.29375 15.5875 4.6 15.7313 4.925 15.7313H11.0813C11.4 15.7313 11.7063 15.5875 11.9125 15.3375L15.75 10.5625C15.95 10.3125 16.025 9.98751 15.9563 9.67501L14.5875 3.72501C14.5125 3.41251 14.3062 3.15001 14.0125 3.01251L8.45625 0.368763C8.3 0.293763 8.125 0.256263 7.94375 0.262513Z"
      fill="#326CE5"
    />
    <path
      d="M8 2.28754C7.81875 2.28754 7.66875 2.45004 7.66875 2.65629C7.66875 2.66254 7.66875 2.66254 7.66875 2.66254C7.66875 2.68754 7.66875 2.72504 7.66875 2.75004C7.675 2.85629 7.69375 2.96254 7.7125 3.06254C7.74375 3.26254 7.75625 3.46254 7.75 3.66254C7.73125 3.73129 7.69375 3.78754 7.64375 3.83129L7.6375 3.96879C7.4375 3.98754 7.2375 4.01879 7.0375 4.06254C6.20625 4.25004 5.45 4.68129 4.86875 5.30004C4.83125 5.27504 4.76875 5.23129 4.75 5.21254C4.68125 5.23129 4.6125 5.22504 4.55 5.19379C4.3875 5.07504 4.2375 4.93754 4.1 4.78754C4.03125 4.70629 3.95625 4.63129 3.88125 4.55629C3.8625 4.53754 3.83125 4.51254 3.80625 4.50004C3.7375 4.44379 3.6625 4.41879 3.575 4.41254C3.475 4.40629 3.375 4.45004 3.3125 4.53129C3.2 4.67504 3.2375 4.89379 3.39375 5.01879C3.39375 5.01879 3.4 5.01879 3.4 5.02504C3.41875 5.04379 3.45 5.06254 3.46875 5.08129C3.55625 5.13754 3.65 5.19379 3.74375 5.24379C3.91875 5.34379 4.0875 5.45629 4.2375 5.58754C4.275 5.64379 4.3 5.71254 4.30625 5.78129L4.4125 5.87504C3.825 6.75629 3.5875 7.81879 3.7375 8.86879L3.6 8.90629C3.5625 8.96254 3.5125 9.01254 3.45625 9.05004C3.2625 9.10004 3.0625 9.13754 2.8625 9.15004C2.75625 9.15004 2.65 9.16254 2.54375 9.17504C2.51875 9.18129 2.48125 9.18754 2.45625 9.19379H2.45C2.25625 9.24379 2.13125 9.41879 2.16875 9.60004C2.21875 9.78129 2.4125 9.89379 2.6 9.84379H2.60625H2.6125C2.6375 9.83754 2.675 9.83129 2.7 9.82504C2.8 9.79379 2.9 9.75629 3 9.71254C3.1875 9.63754 3.38125 9.58129 3.58125 9.54379C3.65 9.55004 3.71875 9.56879 3.775 9.61254L3.91875 9.58754C4.24375 10.5938 4.925 11.4438 5.83125 11.975L5.76875 12.1188C5.79375 12.175 5.80625 12.2438 5.8 12.3063C5.71875 12.4938 5.61875 12.675 5.5 12.8438C5.4375 12.9313 5.375 13.0188 5.325 13.1063C5.3125 13.1313 5.29375 13.1688 5.28125 13.1938C5.1875 13.35 5.2375 13.5563 5.39375 13.65C5.55 13.7438 5.75625 13.6938 5.85 13.5375C5.8625 13.5188 5.86875 13.5 5.875 13.4813C5.8875 13.4563 5.90625 13.4188 5.91875 13.3938C5.95625 13.2938 5.9875 13.1938 6.0125 13.0875C6.1 12.8688 6.15 12.6375 6.26875 12.4938C6.30625 12.4563 6.35625 12.4313 6.4125 12.425L6.4875 12.2875C7.475 12.6688 8.5625 12.6688 9.55 12.2938C9.56875 12.3313 9.6125 12.4063 9.61875 12.4188C9.6875 12.4313 9.75 12.4688 9.7875 12.5188C9.88125 12.7 9.95625 12.8813 10.0125 13.075C10.0375 13.1813 10.0688 13.2813 10.1063 13.3813C10.1188 13.4063 10.1375 13.4375 10.15 13.4688C10.2375 13.65 10.4438 13.7375 10.6063 13.6563C10.775 13.5625 10.8375 13.3563 10.75 13.1875C10.7375 13.1625 10.7188 13.125 10.7063 13.1C10.65 13.0063 10.5938 12.9188 10.5313 12.8375C10.4188 12.675 10.3188 12.4938 10.2375 12.3125C10.2188 12.2438 10.2313 12.175 10.2625 12.1188C10.2438 12.075 10.225 12.0313 10.2063 11.9875C11.1188 11.45 11.8 10.5938 12.1188 9.58129C12.1625 9.58754 12.2375 9.60004 12.2625 9.60629C12.3125 9.56254 12.3813 9.53754 12.45 9.53754C12.65 9.57504 12.8438 9.63129 13.0313 9.70629C13.1313 9.75004 13.225 9.78754 13.3313 9.81879C13.3563 9.82504 13.3875 9.83129 13.4188 9.83754H13.425H13.4313C13.6063 9.89379 13.7938 9.80004 13.85 9.62504C13.9063 9.45004 13.8125 9.26254 13.6375 9.20629C13.6188 9.20004 13.6 9.19379 13.575 9.19379C13.5438 9.18754 13.5063 9.17504 13.4813 9.16879C13.375 9.15629 13.2688 9.14379 13.1625 9.14379C12.9625 9.13129 12.7625 9.10004 12.5688 9.04379C12.5063 9.01254 12.4563 8.96254 12.425 8.90004L12.2938 8.86254C12.4375 7.81879 12.1938 6.75629 11.6 5.87504C11.6375 5.84379 11.7 5.78754 11.7188 5.76879C11.7125 5.70004 11.7375 5.63129 11.7813 5.58129C11.9313 5.45004 12.1 5.33129 12.275 5.23754C12.3688 5.18754 12.4625 5.13754 12.55 5.07504C12.5688 5.05629 12.6 5.03129 12.625 5.01879C12.7813 4.89379 12.8188 4.67504 12.7063 4.53129C12.575 4.38754 12.3563 4.37504 12.2125 4.50004C12.1875 4.51879 12.1563 4.54379 12.1375 4.55629C12.0625 4.63129 11.9875 4.70629 11.9188 4.78754C11.7813 4.93754 11.6313 5.07504 11.4688 5.19379C11.4063 5.21879 11.3375 5.22504 11.2688 5.21879L11.1438 5.30629C10.4188 4.54379 9.4375 4.06879 8.3875 3.97504C8.3875 3.93129 8.38125 3.85004 8.38125 3.82504C8.325 3.78754 8.2875 3.72504 8.275 3.65629C8.26875 3.45629 8.28125 3.25629 8.3125 3.05629C8.33125 2.95004 8.35 2.84379 8.35625 2.74379C8.35625 2.71879 8.35625 2.68129 8.35625 2.65004C8.33125 2.45629 8.18125 2.28754 8 2.28754ZM7.58125 4.86254L7.48125 6.60629L7.475 6.61254C7.46875 6.77504 7.33125 6.90004 7.16875 6.89379C7.1125 6.89379 7.05625 6.87504 7.00625 6.83754L5.58125 5.81879C6.0375 5.37504 6.60625 5.06254 7.225 4.91879C7.35 4.90004 7.4625 4.87504 7.58125 4.86254ZM8.41875 4.86254C9.16875 4.95629 9.86875 5.29379 10.4063 5.81879L8.9875 6.82504H8.98125C8.85 6.91879 8.66875 6.89379 8.575 6.76254C8.54375 6.71879 8.51875 6.66254 8.51875 6.60629L8.41875 4.86254ZM5.06875 6.46879L6.375 7.63129V7.63754C6.49375 7.74379 6.5125 7.93129 6.40625 8.05004C6.36875 8.09379 6.31875 8.12504 6.2625 8.13754V8.14379L4.59375 8.62504C4.5 7.88129 4.66875 7.11879 5.06875 6.46879ZM10.925 6.47504C11.325 7.11879 11.5 7.87504 11.425 8.63129L9.74375 8.15004V8.14379C9.5875 8.10004 9.49375 7.93754 9.5375 7.78129C9.55 7.72504 9.58125 7.67504 9.625 7.63754V7.63129L10.925 6.47504ZM7.73125 7.72504H8.2625L8.59375 8.13754L8.475 8.65629L7.99375 8.88754L7.5125 8.65629L7.39375 8.13754L7.73125 7.72504ZM9.44375 9.14379C9.46875 9.14379 9.4875 9.14379 9.5125 9.15004V9.14379L11.2375 9.43754C10.9813 10.1563 10.4938 10.7688 9.85625 11.175L9.1875 9.55629C9.125 9.40629 9.19375 9.23754 9.34375 9.16879C9.375 9.15629 9.4125 9.15004 9.44375 9.14379ZM6.54375 9.15629C6.70625 9.15629 6.83125 9.29379 6.83125 9.45629C6.83125 9.49379 6.825 9.53129 6.80625 9.56879L6.8125 9.57504L6.15 11.1813C5.5125 10.775 5.025 10.1688 4.76875 9.45629L6.48125 9.16254V9.16879C6.50625 9.15629 6.525 9.15629 6.54375 9.15629ZM7.9875 9.85629C8.1 9.85004 8.2 9.91254 8.25625 10.0125H8.2625L9.10625 11.5375C8.99375 11.575 8.88125 11.6063 8.76875 11.6313C8.15 11.775 7.5 11.7375 6.89375 11.5375L7.7375 10.0125C7.7875 9.91879 7.8875 9.86254 7.9875 9.85629Z"
      fill="white"
    />
    <path
      d="M8 2.28125C8.09375 2.28125 8.18125 2.325 8.2375 2.39375C8.3 2.46875 8.3375 2.5625 8.3375 2.6625C8.3375 2.675 8.3375 2.68125 8.3375 2.69375C8.3375 2.7125 8.3375 2.7375 8.3375 2.75625C8.33125 2.825 8.325 2.9 8.3125 2.96875C8.30625 3 8.3 3.0375 8.29375 3.075V3.09375C8.2625 3.2875 8.25 3.48125 8.25625 3.675C8.26875 3.73125 8.3 3.7875 8.34375 3.81875C8.35 3.825 8.35625 3.83125 8.3625 3.8375V3.84375C8.3625 3.86875 8.36875 3.9375 8.36875 3.9875C8.8875 4.0375 9.4 4.175 9.86875 4.40625C10.3375 4.63125 10.7562 4.94375 11.1187 5.31875L11.2437 5.23125C11.25 5.23125 11.2562 5.23125 11.2625 5.23125C11.2812 5.23125 11.3 5.23125 11.325 5.23125C11.3687 5.23125 11.4062 5.225 11.4437 5.20625C11.6 5.0875 11.7437 4.95625 11.8812 4.8125L11.8937 4.8C11.9187 4.775 11.9437 4.75 11.9625 4.725C12.0062 4.66875 12.0562 4.61875 12.1125 4.56875C12.125 4.55625 12.15 4.54375 12.1687 4.525L12.1875 4.50625C12.2562 4.45 12.3437 4.41875 12.4375 4.41875C12.5375 4.41875 12.6312 4.4625 12.6937 4.5375C12.75 4.6125 12.775 4.70625 12.7562 4.79375C12.7375 4.8875 12.6875 4.975 12.6125 5.0375C12.6062 5.04375 12.5937 5.05 12.5875 5.05625C12.5687 5.06875 12.55 5.0875 12.5375 5.09375C12.4812 5.1375 12.4187 5.16875 12.3562 5.2C12.325 5.21875 12.2937 5.23125 12.2625 5.25C12.0875 5.35 11.925 5.4625 11.7687 5.59375C11.7312 5.6375 11.7062 5.69375 11.7125 5.75C11.7125 5.75625 11.7125 5.76875 11.7125 5.775C11.7062 5.78125 11.6812 5.8 11.6625 5.81875C11.6437 5.8375 11.6187 5.85625 11.6 5.875C12.1875 6.75 12.4312 7.8125 12.2875 8.85625L12.4187 8.89375C12.4187 8.9 12.425 8.9 12.4312 8.90625C12.4625 8.9625 12.5062 9.00625 12.5625 9.03125C12.7562 9.08125 12.95 9.1125 13.15 9.125H13.1562C13.1937 9.125 13.2312 9.13125 13.2625 9.13125C13.3312 9.13125 13.4062 9.1375 13.475 9.15C13.4937 9.15625 13.5125 9.15625 13.5375 9.1625C13.55 9.16875 13.5625 9.16875 13.575 9.16875C13.6687 9.1875 13.75 9.24375 13.8062 9.325C13.8625 9.4 13.8812 9.49375 13.8562 9.58125C13.8125 9.7375 13.6687 9.84375 13.5062 9.8375C13.475 9.8375 13.45 9.83125 13.4187 9.83125C13.4187 9.83125 13.4187 9.83125 13.4125 9.83125C13.4125 9.83125 13.4125 9.83125 13.4062 9.83125C13.3937 9.83125 13.3875 9.825 13.375 9.825C13.3562 9.81875 13.3375 9.81875 13.3187 9.8125C13.25 9.79375 13.1812 9.76875 13.1187 9.7375C13.0875 9.725 13.0562 9.7125 13.0187 9.69375L13.0062 9.6875C12.825 9.6125 12.6312 9.55625 12.4375 9.51875C12.4312 9.51875 12.425 9.51875 12.4187 9.51875C12.3687 9.51875 12.3187 9.5375 12.275 9.575C12.2687 9.58125 12.2625 9.5875 12.2562 9.5875H12.25C12.225 9.58125 12.1562 9.56875 12.1125 9.5625C11.7937 10.5688 11.1125 11.425 10.2062 11.9625C10.2125 11.975 10.2187 11.9875 10.2187 12C10.2312 12.0312 10.2375 12.0562 10.2562 12.0875V12.0938V12.1C10.2562 12.1063 10.25 12.1187 10.25 12.125C10.225 12.175 10.2187 12.2375 10.2312 12.2937C10.3125 12.475 10.4125 12.6562 10.525 12.8188C10.5437 12.85 10.5687 12.8813 10.5875 12.9062C10.6312 12.9625 10.6687 13.0188 10.7062 13.0813C10.7125 13.1 10.725 13.125 10.7375 13.1438C10.7437 13.1562 10.7437 13.1625 10.75 13.1687C10.7937 13.2562 10.8 13.3562 10.775 13.45C10.75 13.5375 10.6875 13.6125 10.6062 13.65C10.5625 13.6687 10.5187 13.6812 10.4687 13.6812C10.325 13.675 10.1937 13.5875 10.1375 13.4563C10.1312 13.45 10.1312 13.4375 10.125 13.4312C10.1125 13.4125 10.1062 13.3875 10.0937 13.3687C10.0687 13.3 10.0437 13.2375 10.025 13.1687C10.0187 13.1375 10.0062 13.1 9.99375 13.0688V13.0625C9.9375 12.875 9.8625 12.6875 9.76875 12.5125C9.7375 12.4625 9.68125 12.4312 9.625 12.4187C9.61875 12.4187 9.6125 12.4125 9.6 12.4125C9.59375 12.4 9.58125 12.3812 9.56875 12.3562C9.55625 12.3313 9.54375 12.3125 9.53125 12.2937C8.54375 12.6625 7.45625 12.6625 6.475 12.2875L6.4 12.4187H6.39375C6.34375 12.425 6.29375 12.45 6.25625 12.4875C6.175 12.5875 6.125 12.7313 6.06875 12.8813C6.04375 12.9438 6.025 13.0125 6 13.0813C5.9875 13.1188 5.98125 13.15 5.96875 13.1875C5.95 13.2563 5.93125 13.325 5.9 13.3875C5.89375 13.4062 5.88125 13.425 5.875 13.4438C5.86875 13.45 5.86875 13.4625 5.8625 13.4688C5.8 13.6 5.675 13.6875 5.53125 13.6875C5.4875 13.6875 5.4375 13.675 5.39375 13.6562C5.3125 13.6187 5.25 13.5437 5.225 13.4563C5.2 13.3625 5.20625 13.2625 5.25 13.175C5.25625 13.1625 5.2625 13.1562 5.2625 13.1438C5.275 13.125 5.28125 13.1 5.2875 13.0875C5.31875 13.025 5.3625 12.9625 5.40625 12.9062C5.425 12.8813 5.45 12.85 5.46875 12.8188C5.5875 12.65 5.6875 12.4688 5.76875 12.2812C5.775 12.2188 5.76875 12.1562 5.7375 12.1L5.79375 11.9563C4.8875 11.4187 4.2125 10.575 3.8875 9.575L3.74375 9.6L3.73125 9.59375C3.68125 9.5625 3.63125 9.54375 3.56875 9.5375C3.5625 9.5375 3.5625 9.5375 3.55625 9.5375C3.3625 9.575 3.175 9.63125 2.9875 9.70625L2.975 9.7125C2.94375 9.725 2.90625 9.7375 2.875 9.75C2.8125 9.78125 2.74375 9.80625 2.675 9.825C2.65625 9.83125 2.6375 9.83125 2.6125 9.8375L2.5875 9.84375C2.5875 9.84375 2.5875 9.84375 2.58125 9.84375C2.58125 9.84375 2.58125 9.84375 2.575 9.84375C2.54375 9.85 2.51875 9.85625 2.4875 9.85625C2.325 9.8625 2.18125 9.75625 2.1375 9.6C2.11875 9.5125 2.1375 9.41875 2.1875 9.34375C2.24375 9.2625 2.325 9.20625 2.41875 9.1875L2.44375 9.18125C2.4625 9.175 2.4875 9.16875 2.50625 9.16875C2.575 9.15625 2.64375 9.15 2.71875 9.15C2.75625 9.15 2.7875 9.15 2.825 9.14375H2.83125C3.03125 9.13125 3.225 9.1 3.41875 9.05C3.46875 9.01875 3.5125 8.975 3.54375 8.925C3.55 8.91875 3.55 8.9125 3.55625 8.90625L3.69375 8.86875C3.54375 7.825 3.7875 6.7625 4.36875 5.88125L4.2625 5.7875C4.2625 5.78125 4.2625 5.775 4.2625 5.775C4.25625 5.7125 4.2375 5.65625 4.2 5.60625C4.05 5.475 3.88125 5.3625 3.70625 5.2625C3.675 5.24375 3.64375 5.225 3.6125 5.2125C3.55 5.18125 3.4875 5.14375 3.43125 5.10625C3.41875 5.09375 3.4 5.08125 3.38125 5.06875L3.3625 5.05C3.2875 4.9875 3.23125 4.9 3.21875 4.80625C3.2 4.7125 3.225 4.625 3.28125 4.55C3.34375 4.475 3.4375 4.43125 3.5375 4.43125C3.54375 4.43125 3.54375 4.43125 3.55 4.43125C3.6375 4.4375 3.71875 4.46875 3.7875 4.51875L3.80625 4.53125C3.825 4.54375 3.84375 4.5625 3.8625 4.575C3.91875 4.625 3.9625 4.675 4.0125 4.725C4.0375 4.75 4.05625 4.775 4.08125 4.80625L4.0875 4.8125C4.21875 4.95625 4.36875 5.09375 4.525 5.2125C4.55625 5.23125 4.59375 5.24375 4.625 5.24375C4.65 5.24375 4.66875 5.24375 4.69375 5.2375C4.7 5.2375 4.7125 5.2375 4.71875 5.23125H4.725C4.74375 5.24375 4.8 5.2875 4.8375 5.3125C5.41875 4.69375 6.175 4.2625 7.00625 4.075C7.2 4.03125 7.4 4 7.6 3.98125L7.60625 3.84375C7.65625 3.8 7.69375 3.74375 7.7125 3.675C7.71875 3.475 7.70625 3.275 7.675 3.08125V3.075C7.66875 3.0375 7.6625 3.00625 7.65625 2.96875C7.64375 2.9 7.63125 2.83125 7.63125 2.75625C7.63125 2.7375 7.63125 2.71875 7.63125 2.7C7.63125 2.6875 7.63125 2.68125 7.63125 2.675C7.63125 2.675 7.63125 2.675 7.63125 2.66875V2.6625C7.6625 2.45 7.8125 2.28125 8 2.28125ZM8.35 3.8375C8.34375 3.83125 8.3375 3.825 8.33125 3.825C8.28125 3.7875 8.25 3.73125 8.2375 3.66875C8.23125 3.475 8.24375 3.275 8.275 3.08125V3.0625C8.28125 3.025 8.2875 2.9875 8.29375 2.95625C8.30625 2.8875 8.31875 2.81875 8.31875 2.75C8.31875 2.73125 8.31875 2.7125 8.31875 2.6875C8.31875 2.675 8.31875 2.6625 8.31875 2.65625C8.31875 2.5625 8.2875 2.46875 8.225 2.4C8.16875 2.33125 8.08125 2.29375 7.99375 2.29375C7.8125 2.29375 7.66875 2.45625 7.66875 2.65625C7.66875 2.65625 7.66875 2.65625 7.66875 2.6625V2.66875C7.66875 2.675 7.66875 2.6875 7.66875 2.69375C7.66875 2.7125 7.66875 2.7375 7.66875 2.75C7.675 2.81875 7.68125 2.8875 7.69375 2.95625C7.7 2.9875 7.70625 3.025 7.7125 3.0625V3.06875C7.74375 3.26875 7.75625 3.46875 7.75 3.66875C7.73125 3.7375 7.69375 3.79375 7.64375 3.84375L7.6375 3.9875H7.63125C7.43125 4.00625 7.23125 4.0375 7.03125 4.08125C6.2 4.26875 5.45 4.7 4.86875 5.31875L4.8625 5.325L4.85625 5.31875C4.825 5.29375 4.7625 5.25 4.7375 5.2375C4.73125 5.2375 4.725 5.2375 4.71875 5.2375C4.69375 5.24375 4.675 5.24375 4.65 5.24375C4.6125 5.24375 4.575 5.23125 4.5375 5.2125C4.375 5.09375 4.23125 4.9625 4.09375 4.8125C4.06875 4.7875 4.04375 4.75625 4.025 4.73125C3.98125 4.675 3.93125 4.625 3.88125 4.58125C3.86875 4.56875 3.84375 4.55 3.825 4.5375L3.80625 4.525C3.74375 4.475 3.6625 4.44375 3.58125 4.4375C3.575 4.4375 3.575 4.4375 3.56875 4.4375C3.475 4.4375 3.38125 4.475 3.325 4.55C3.26875 4.61875 3.25 4.70625 3.2625 4.79375C3.28125 4.8875 3.33125 4.96875 3.4 5.025L3.41875 5.04375C3.4375 5.05625 3.45625 5.075 3.46875 5.08125C3.525 5.11875 3.5875 5.15625 3.65 5.1875C3.68125 5.20625 3.7125 5.21875 3.74375 5.2375C3.91875 5.3375 4.0875 5.45625 4.2375 5.5875C4.275 5.6375 4.3 5.7 4.30625 5.76875C4.30625 5.775 4.30625 5.775 4.30625 5.78125L4.4125 5.88125L4.40625 5.8875C3.81875 6.76875 3.58125 7.83125 3.73125 8.875V8.88125L3.5875 8.925L3.575 8.9375C3.54375 8.9875 3.49375 9.0375 3.44375 9.06875C3.25 9.11875 3.05625 9.15 2.85625 9.16875H2.85C2.8125 9.175 2.775 9.175 2.74375 9.175C2.675 9.175 2.60625 9.18125 2.5375 9.19375C2.51875 9.2 2.5 9.2 2.475 9.20625L2.45 9.2125C2.3625 9.23125 2.28125 9.2875 2.225 9.3625C2.175 9.43125 2.15625 9.525 2.175 9.60625C2.2125 9.75625 2.35625 9.85625 2.5125 9.85C2.54375 9.85 2.56875 9.85 2.59375 9.84375C2.59375 9.84375 2.59375 9.84375 2.6 9.84375C2.6 9.84375 2.6 9.84375 2.60625 9.84375L2.63125 9.8375C2.65 9.83125 2.675 9.83125 2.69375 9.825C2.7625 9.80625 2.825 9.78125 2.89375 9.75C2.925 9.7375 2.95625 9.725 2.99375 9.70625L3.00625 9.7C3.19375 9.625 3.38125 9.56875 3.575 9.53125C3.58125 9.53125 3.58125 9.53125 3.5875 9.53125C3.65 9.5375 3.70625 9.55625 3.75625 9.59375L3.76875 9.6L3.91875 9.575V9.58125C4.24375 10.5813 4.925 11.4312 5.83125 11.9688L5.8375 11.975L5.775 12.125C5.8 12.1812 5.8125 12.25 5.80625 12.3125C5.725 12.5 5.625 12.6812 5.50625 12.8562C5.4875 12.8875 5.4625 12.9188 5.44375 12.9438C5.4 13 5.3625 13.0562 5.33125 13.1187C5.325 13.1312 5.3125 13.1562 5.30625 13.175C5.3 13.1875 5.29375 13.2 5.29375 13.2063C5.25625 13.2875 5.24375 13.3875 5.26875 13.475C5.29375 13.5563 5.35 13.6312 5.43125 13.6687C5.46875 13.6875 5.5125 13.7 5.5625 13.7C5.7 13.6937 5.825 13.6125 5.88125 13.4875C5.8875 13.4812 5.8875 13.4688 5.89375 13.4625C5.90625 13.4437 5.9125 13.425 5.91875 13.4062C5.94375 13.3438 5.96875 13.275 5.98125 13.2063C5.9875 13.175 6 13.1375 6.0125 13.1C6.0375 13.0375 6.0625 12.9688 6.08125 12.9062C6.13125 12.75 6.18125 12.6063 6.26875 12.5063C6.30625 12.4688 6.35625 12.4438 6.4125 12.4375L6.4875 12.3H6.49375C7.475 12.675 8.5625 12.6812 9.55 12.3062H9.55625L9.5625 12.3125C9.575 12.3313 9.5875 12.3563 9.6 12.3813C9.6125 12.4062 9.625 12.425 9.63125 12.4375C9.6375 12.4375 9.64375 12.4438 9.65 12.4438C9.7125 12.4563 9.7625 12.4937 9.8 12.5437C9.89375 12.7188 9.96875 12.9062 10.025 13.0938V13.1C10.0375 13.1375 10.0437 13.1687 10.0562 13.2C10.075 13.2688 10.0937 13.3375 10.125 13.4C10.1312 13.4187 10.1437 13.4375 10.1562 13.4625C10.1625 13.4688 10.1625 13.4812 10.1687 13.4875C10.225 13.6125 10.35 13.6937 10.4875 13.7C10.5312 13.7 10.575 13.6875 10.6187 13.6687C10.7 13.6312 10.7562 13.5625 10.7812 13.475C10.8062 13.3875 10.8 13.2875 10.7562 13.2063C10.75 13.2 10.75 13.1875 10.7437 13.1812C10.7312 13.1625 10.725 13.1375 10.7125 13.1187C10.6812 13.0562 10.6375 13 10.6 12.9438C10.5812 12.9188 10.5562 12.8875 10.5375 12.8562C10.425 12.6875 10.325 12.5125 10.2437 12.325C10.225 12.2688 10.2312 12.2 10.2625 12.15C10.2625 12.1437 10.2687 12.1375 10.2687 12.1313C10.2562 12.1063 10.2437 12.075 10.2312 12.0437C10.225 12.025 10.2187 12.0125 10.2125 12V11.9937L10.2187 11.9875C11.1312 11.45 11.8062 10.5938 12.1312 9.5875V9.58125H12.1375C12.1812 9.5875 12.25 9.6 12.275 9.60625C12.2812 9.6 12.2875 9.6 12.2937 9.59375C12.3375 9.55625 12.3875 9.5375 12.4437 9.5375C12.45 9.5375 12.4562 9.5375 12.4625 9.5375C12.6562 9.575 12.85 9.63125 13.0312 9.70625L13.0437 9.7125C13.0812 9.725 13.1125 9.7375 13.1437 9.75625C13.2062 9.7875 13.275 9.8125 13.3375 9.83125C13.35 9.8375 13.375 9.8375 13.3937 9.84375C13.4062 9.84375 13.4125 9.85 13.425 9.85C13.425 9.85 13.425 9.85 13.4312 9.85C13.4312 9.85 13.4312 9.85 13.4375 9.85C13.4625 9.85625 13.4937 9.85625 13.5187 9.85625C13.675 9.8625 13.8125 9.7625 13.8562 9.6125C13.875 9.525 13.8562 9.4375 13.8062 9.36875C13.75 9.29375 13.675 9.2375 13.5812 9.21875C13.5687 9.21875 13.5562 9.2125 13.5437 9.2125C13.525 9.20625 13.5 9.2 13.4812 9.2C13.4125 9.1875 13.3437 9.18125 13.275 9.18125C13.2375 9.18125 13.2062 9.18125 13.1687 9.175H13.1625C12.9625 9.1625 12.7687 9.13125 12.575 9.075C12.5187 9.04375 12.4687 9 12.4375 8.94375L12.4312 8.93125L12.2937 8.89375V8.8875C12.4375 7.84375 12.1937 6.78125 11.6062 5.90625L11.6 5.9L11.6062 5.89375C11.625 5.875 11.65 5.85625 11.675 5.83125C11.6937 5.8125 11.7125 5.79375 11.725 5.7875C11.725 5.78125 11.725 5.775 11.725 5.76875C11.725 5.70625 11.7437 5.64375 11.7875 5.6C11.9437 5.46875 12.1062 5.35 12.2812 5.25C12.3125 5.23125 12.3437 5.2125 12.375 5.2C12.4375 5.16875 12.5 5.13125 12.5562 5.09375C12.5687 5.08125 12.5875 5.06875 12.6062 5.05625C12.6125 5.05 12.625 5.04375 12.6312 5.0375C12.7062 4.98125 12.7562 4.89375 12.7687 4.80625C12.7875 4.71875 12.7625 4.63125 12.7062 4.5625C12.6437 4.4875 12.5562 4.45 12.4625 4.45C12.375 4.45 12.2937 4.48125 12.225 4.5375L12.2062 4.55625C12.1875 4.56875 12.1687 4.5875 12.1562 4.6C12.1062 4.65 12.0562 4.7 12.0062 4.75C11.9812 4.775 11.9625 4.8 11.9375 4.83125L11.925 4.84375C11.7937 4.9875 11.6437 5.11875 11.4875 5.2375C11.45 5.25625 11.4062 5.26875 11.3625 5.2625C11.3375 5.2625 11.3187 5.2625 11.3 5.2625H11.2875L11.1562 5.35625L11.15 5.35C10.7937 4.975 10.3687 4.6625 9.9 4.4375C9.43125 4.20625 8.91875 4.06875 8.4 4.01875H8.39375V4.0125C8.35625 3.94375 8.35 3.86875 8.35 3.8375ZM8.40625 4.85625H8.4125C9.1625 4.95 9.8625 5.2875 10.4062 5.81875L10.4125 5.825L10.4062 5.83125L8.9875 6.8375H8.98125C8.84375 6.93125 8.65625 6.9 8.5625 6.7625C8.53125 6.71875 8.5125 6.6625 8.50625 6.60625L8.40625 4.85625ZM10.3937 5.81875C9.85625 5.3 9.16875 4.9625 8.425 4.86875L8.525 6.59375V6.6C8.53125 6.75625 8.6625 6.88125 8.825 6.86875C8.88125 6.86875 8.9375 6.85 8.98125 6.8125H8.9875H8.99375L10.3937 5.81875ZM7.59375 4.85625L7.49375 6.6125L7.4875 6.61875C7.475 6.78125 7.3375 6.9125 7.16875 6.9C7.1125 6.89375 7.05625 6.875 7.0125 6.84375H7.00625L5.56875 5.825L5.575 5.81875C5.8 5.6 6.05 5.4125 6.325 5.2625C6.60625 5.10625 6.9125 4.99375 7.23125 4.91875C7.35 4.89375 7.46875 4.875 7.5875 4.85625H7.59375ZM7.475 6.6L7.575 4.875C7.45625 4.8875 7.34375 4.9125 7.23125 4.9375C6.91875 5.00625 6.6125 5.125 6.33125 5.28125C6.0625 5.43125 5.8125 5.6125 5.59375 5.83125L7.0125 6.8375H7.01875C7.14375 6.93125 7.325 6.9 7.41875 6.775C7.45 6.73125 7.46875 6.675 7.475 6.61875V6.6125V6.6ZM5.0625 6.4625L6.375 7.6375V7.64375C6.5 7.75625 6.50625 7.94375 6.4 8.06875C6.3625 8.1125 6.3125 8.14375 6.2625 8.15625V8.1625H6.25625L4.575 8.65V8.64375C4.49375 7.8875 4.6625 7.125 5.0625 6.475V6.4625ZM6.3625 7.6375L5.06875 6.48125C4.675 7.125 4.50625 7.875 4.5875 8.625L6.24375 8.14375V8.1375H6.25C6.4 8.09375 6.49375 7.9375 6.45 7.7875C6.4375 7.73125 6.40625 7.6875 6.3625 7.65H6.35625L6.3625 7.6375ZM10.925 6.4625L10.9312 6.46875C11.3312 7.1125 11.5062 7.875 11.4312 8.63125V8.6375L9.7375 8.15V8.14375C9.58125 8.1 9.4875 7.93125 9.53125 7.76875C9.55 7.7125 9.575 7.66875 9.61875 7.63125V7.625H9.625L10.925 6.4625ZM11.4187 8.61875C11.4875 7.875 11.3125 7.125 10.925 6.48125L9.6375 7.63125V7.6375H9.63125C9.5125 7.74375 9.5 7.91875 9.60625 8.0375C9.64375 8.08125 9.69375 8.1125 9.74375 8.125H9.75V8.13125L11.4187 8.61875ZM7.73125 7.71875H8.275L8.60625 8.1375L8.4875 8.6625L8 8.89375L7.5125 8.65625L7.39375 8.13125L7.73125 7.71875ZM8.2625 7.7375H7.7375L7.4125 8.14375L7.53125 8.65625L8.00625 8.88125L8.48125 8.65625L8.6 8.14375L8.2625 7.7375ZM9.45625 9.1375C9.475 9.1375 9.49375 9.1375 9.50625 9.14375V9.1375H9.5125L11.25 9.43125L11.2437 9.4375C10.9875 10.1562 10.5 10.7687 9.85625 11.1812L9.85 11.1875L9.175 9.55625C9.1125 9.4 9.1875 9.225 9.3375 9.1625C9.36875 9.15 9.4 9.14375 9.4375 9.1375C9.45 9.1375 9.45 9.1375 9.45625 9.1375ZM9.5125 9.1625C9.35625 9.13125 9.20625 9.2375 9.175 9.39375C9.1625 9.45 9.16875 9.50625 9.19375 9.55625V9.5625L9.85625 11.1687C10.4875 10.7625 10.9687 10.1562 11.225 9.45L9.5125 9.1625ZM6.5375 9.14375C6.70625 9.14375 6.8375 9.28125 6.8375 9.45C6.8375 9.4875 6.83125 9.525 6.8125 9.55625L6.81875 9.5625V9.56875L6.15 11.1812L6.14375 11.175C5.50625 10.7688 5.01875 10.1563 4.7625 9.44375L4.75625 9.4375L6.48125 9.14375V9.15C6.50625 9.15 6.51875 9.14375 6.5375 9.14375ZM6.8 9.56875L6.79375 9.5625V9.55625C6.85625 9.4125 6.7875 9.24375 6.64375 9.18125C6.6125 9.16875 6.575 9.15625 6.5375 9.15625C6.51875 9.15625 6.5 9.15625 6.48125 9.1625H6.475V9.15625L4.775 9.44375C5.03125 10.1438 5.5125 10.7437 6.1375 11.15L6.8 9.56875ZM8 9.85C8.10625 9.85 8.20625 9.90625 8.2625 10.0063H8.26875V10.0125L9.11875 11.5437H9.1125C9.00625 11.5813 8.8875 11.6125 8.775 11.6375C8.525 11.6937 8.2625 11.725 8.00625 11.725C7.63125 11.725 7.25625 11.6625 6.9 11.5437H6.89375L7.74375 10.0063C7.79375 9.9125 7.8875 9.85625 7.99375 9.85C7.99375 9.85 7.99375 9.85 8 9.85ZM8.25625 10.0188H8.25V10.0125C8.2 9.91875 8.10625 9.8625 8 9.8625H7.9875C7.8875 9.86875 7.79375 9.925 7.74375 10.0125V10.0188L6.90625 11.5312C7.25625 11.65 7.625 11.7125 8 11.7125C8.25625 11.7125 8.5125 11.6812 8.76875 11.625C8.88125 11.6 8.99375 11.5688 9.09375 11.5312L8.25625 10.0188Z"
      fill="white"
    />
  </svg>
);
export default KubernetesSiteIcon;
