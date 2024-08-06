import { Message } from "@/models/User";

export interface ApiResponse {
  success: Boolean;
  message: string;
  isAcceptingMessages?: boolean;
  messages?: Array<Message>;
}
