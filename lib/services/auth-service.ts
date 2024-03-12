import { TYPES, csKToken } from "@/lib/const";
import { myContainer } from "@/lib/inversify.config";
import { IAuthRepository } from "@/lib/repository/auth-repository";
import { cookies } from "next/headers";

export const authService = {
  validateUser : () => {
    const postRepository = myContainer.get<IAuthRepository>(
      TYPES.IAuthRepository
    );
    const token = _getToken();
    const user = postRepository.validateUser(token);
    return user;
  }
}
function _getToken() {
  const cookieStore = cookies();
  const kTokenSSR = cookieStore.get(csKToken)?.value;
  return kTokenSSR;
}

