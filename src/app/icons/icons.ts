// src/app/icons.ts

import {
  cilSpeedometer,
  cilPeople,
  cilUserPlus,
  cilUserUnfollow,
  cilClipboard,
  cilPlus,
  cilAlarm,
  cilHistory,
  cilWallet,
  cilDollar,
  cilList,
  cilChart,
  cilCheckCircle,
  cilCheck,
  cilWarning,           // was cilExclamationTriangle
  cilCalendar,          // was cilEvent → use cilCalendar or cilCalendarCheck
  cilEnvelopeClosed,
  cilBell,
  cilChartPie,
  cilBank,
  cilSettings,
  cilUser,
  cilMonitor,
  cilInfo,              
  cilBook,
  cilLifeRing,
  cilHeadphones,
  cilMenu,
  cilSun,
  cilMoon,
  cilAccountLogout
} from '@coreui/icons';

// ✅ Fix path: assuming file is in the same folder
import { eliteRobotiqueLogo, eliteRobotiqueSignet } from './elite-robotique'; // Removed `/icons/`

export const icons = {
  cilSpeedometer,
  cilPeople,
  cilUserPlus,
  cilUserUnfollow,
  cilClipboard,
  cilPlus,
  cilAlarm,
  cilHistory,
  cilWallet,
  cilDollar,
  cilList,
  cilChart,
  cilCheckCircle,
  cilCheck,
  cilWarning,
  cilCalendar,
  cilEnvelopeClosed,
  cilBell,
  cilChartPie,
  cilBank,
  cilSettings,
  cilUser,
  cilMonitor,
  cilInfo,
  cilBook,
  cilLifeRing,
  cilHeadphones,
  cilMenu,
  cilSun,
  cilMoon,
  cilAccountLogout,

  // Custom logos
  logo: eliteRobotiqueLogo,
  signet: eliteRobotiqueSignet
};