export const REDIS_EXPIRATION_MILLISECONDS = 1000 * 60;

export const DB_REDIS = 'db';

export const REDIS_CONSTANTS = {
  DB_REDIS_CHAT_ROOM_MESSAGES: `${DB_REDIS}:chat:room-messages`,
};

export const REDIS_CONSTANTS_KEY = {
  chat: {
    CHAT_ROOM_MESSAGES_KEY: (room: string) =>
      `${REDIS_CONSTANTS.DB_REDIS_CHAT_ROOM_MESSAGES}:${room}`,
  },
};
