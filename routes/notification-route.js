import { Router } from "express";
import { createNotification, deleteNotification, getNotifications } from "../controllers/notification.js";

 export const notificationRouter = Router();

 notificationRouter.post('/notifications', createNotification)

 notificationRouter.get("/notifications", getNotifications)

 notificationRouter.delete('/notifications/:id', deleteNotification)