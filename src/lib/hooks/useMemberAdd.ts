import { useMutation } from "@tanstack/react-query";
import { fetchMemberAdd, RegisterRequest, ResponseMemberAdd } from "@/lib/api/client";

export const useMemberAdd = () => {
  return useMutation<ResponseMemberAdd, Error, RegisterRequest>({
    mutationFn: (payload: RegisterRequest) => fetchMemberAdd(payload),
  });
};
