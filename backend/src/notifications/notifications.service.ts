import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Notification,
  NotificationDocument,
} from 'src/schemas/notifications.schema';
import { CreateNotificationDto } from './dto/create-notification.dto';
// import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationsService {
  onlineUsers = {};
  notifications = [];
  constructor(
    @InjectModel(Notification.name)
    private notificationModel: Model<NotificationDocument>,
  ) {}
  async create(createNotificationDto: CreateNotificationDto) {
    const createdNotification = await this.notificationModel.create(
      createNotificationDto,
    );

    // const createdNotification = { ...createNotificationDto };

    // this.notifications.push(createdNotification);

    return createdNotification;
  }

  async findAll(userid: string) {
    const reqnotifications = await this.notificationModel.find({
      notificationfor: userid,
    });

    // const reqnotifications = this.notifications.filter(
    //   (one: any) => one.notificationfor === userid,
    // );

    return reqnotifications;
  }

  async remove(id: string, userID: string): Promise<any> {
    // if (id >= 0 && id < this.notifications.length)
    //   this.notifications.splice(id, 1);
    // return this.notifications.filter(
    //   (c: any) => c.notificationfor === userID.trim(),
    // );

    await this.notificationModel.findByIdAndRemove(id);

    const allNotifications = await this.findAll(userID);

    return allNotifications;
  }

  identify(userid: string, socketid: string) {
    this.onlineUsers[userid] = socketid;
  }

  getSocketId(userid: string) {
    console.log(this.onlineUsers);
    return this.onlineUsers[userid];
  }
}
