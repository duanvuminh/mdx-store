import "reflect-metadata";
import "server-only";

import { IApi } from "@/lib/models/interface";
import { TYPES } from "@/lib/const";
import { IAuthRepository } from "@/lib/repository/auth-repository";
import { FirebaseRepository } from "@/lib/repository/implement/firebase-repository";
import {
  IPostRepository,
} from "@/lib/repository/post-repository";
import { KApiService } from "@/lib/services/api-service";
import { Container } from "inversify";
import { AngoliaRepository } from "@/lib/repository/implement/angolia-repository";

const myContainer = new Container();
myContainer.bind<IPostRepository>(TYPES.IPostRepository).to(AngoliaRepository);
myContainer.bind<IAuthRepository>(TYPES.IAuthRepository).to(FirebaseRepository);
myContainer.bind<IApi>(TYPES.IApi).to(KApiService);

export { myContainer };
