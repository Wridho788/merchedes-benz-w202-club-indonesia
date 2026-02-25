import { useMutation } from "@tanstack/react-query";
import { fetchVerify, VerifyResponse } from "@/lib/api/client";

interface VerifyParams {
  customerId: string;
  otp: string;
}

export const useVerify = () => {
  return useMutation<VerifyResponse, Error, VerifyParams>({
    mutationFn: ({ customerId, otp }: VerifyParams) => fetchVerify(customerId, otp),
  });
};
