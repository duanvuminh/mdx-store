import "reflect-metadata";
import "server-only";

import { TYPES } from "@/lib/const";
import { IApi } from "@/lib/models/interface";
import { IAuthRepository } from "@/lib/repository/auth-repository";
import { AngoliaRepository } from "@/lib/repository/implement/angolia-repository";
import { FirebaseRepository } from "@/lib/repository/implement/firebase-repository";
import { IPostRepository } from "@/lib/repository/post-repository";
import { KApiService } from "@/lib/services/api-service";
import { Container } from "inversify";
import { MdxService } from "./services/impl/mdx-service";
import { IMdxService } from "./services/interface";

const myContainer = new Container();
myContainer.bind<IPostRepository>(TYPES.IPostRepository).to(AngoliaRepository);
myContainer.bind<IAuthRepository>(TYPES.IAuthRepository).to(FirebaseRepository);
myContainer.bind<IApi>(TYPES.IApi).to(KApiService);
myContainer.bind<IMdxService>(TYPES.IMdxService).to(MdxService);

export { myContainer };
