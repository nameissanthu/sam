﻿export interface IC0035 {
  comment?: CommentEntity[] | null;
}
export interface CommentEntity {
  name: string;
  date_of_creation: string;
  role: string;
  description: string;
  url_profile_image: string;
}
