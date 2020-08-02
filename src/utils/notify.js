import { NotificationManager } from "react-notifications";



export const notifyInfo = (message, title, time, cb) => NotificationManager.info(message, title, time, cb);
export const notifySuccess = (message, title, time, cb) => NotificationManager.success(message, title, time, cb);
export const notifyWarning = (message, title, time, cb) => NotificationManager.warning(message, title, time, cb);
export const notifyError = (message = 'Something wnt wrong', title, time, cb) => NotificationManager.error(message, title, time, cb);


export const CanvasNotifyTime = 2000;
