import { useMutation } from "@tanstack/react-query";
import { fetchReqOtp, PayloadRequestOTP, ResponseRequestOTP } from "@/lib/api/client";

export const useReqOtp = () => {
  return useMutation<ResponseRequestOTP, Error, PayloadRequestOTP>({
    mutationFn: (payload: PayloadRequestOTP) => fetchReqOtp(payload),
  });
};
