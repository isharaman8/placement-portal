import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
// import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly notificationsService: NotificationsService) {}

  @SubscribeMessage('createNotification')
  async create(@MessageBody() createNotificationDto: CreateNotificationDto) {
    console.log(createNotificationDto);
    if (
      !this.notificationsService.getSocketId(
        createNotificationDto.notificationfor,
      )
    )
      return;

    const data = await this.notificationsService.create(createNotificationDto);

    this.server
      .to(this.notificationsService.getSocketId(data.notificationfor))
      .emit('getSingleNotification', data);

    return data;
  }

  @SubscribeMessage('findAllNotifications')
  async findAll(@MessageBody('userid') userid: string) {
    if (!this.notificationsService.getSocketId(userid)) return;
    // console.log(userid);
    const notifications = await this.notificationsService.findAll(userid);

    // this.server
    //   .in(this.notificationsService.getSocketId(userid))
    //   .emit('getNotifications', notifications);

    return notifications;
  }

  @SubscribeMessage('removeNotification')
  async remove(@MessageBody() body: { id: string; userID: string }) {
    console.log(body);
    if (!this.notificationsService.getSocketId(body.userID)) return;

    const data = await this.notificationsService.remove(body.id, body.userID);
    if (data) return data;
  }

  @SubscribeMessage('join')
  join(
    @ConnectedSocket() client: Socket,
    @MessageBody('userid') userid: string,
  ) {
    this.notificationsService.identify(userid, client.id);
    const id = this.notificationsService.getSocketId(userid);
    console.log(`${id} joined the room`);
    return id;
  }
}
