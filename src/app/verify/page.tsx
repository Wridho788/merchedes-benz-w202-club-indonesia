"use client";

import { useState, useEffect, Suspense, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useVerify } from "@/lib/hooks/useVerify";
import { useReqOtp } from "@/lib/hooks/useReqOtp";
import Swal from "sweetalert2";

const OTP_EXPIRE_SECONDS = 60;

function VerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const customerId = searchParams.get("id");
  const phoneNumber = searchParams.get("phone");

  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timer, setTimer] = useState(OTP_EXPIRE_SECONDS);
  const [canResend, setCanResend] = useState(false);
  
  // Use ref to track if OTP has been requested (prevents re-renders from triggering)
  const otpRequestedRef = useRef(false);

  const verifyMutation = useVerify();
  const reqOtpMutation = useReqOtp();

  // Request OTP function
  const requestOtp = useCallback(async () => {
    if (!phoneNumber) return;
    
    try {
      await reqOtpMutation.mutateAsync({ username: phoneNumber });
      setTimer(OTP_EXPIRE_SECONDS);
      setCanResend(false);
    } catch (error) {
      console.error("Request OTP error:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal Mengirim OTP",
        text: error instanceof Error ? error.message : "Terjadi kesalahan saat mengirim OTP.",
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneNumber]);

  // Auto request OTP on mount (only once)
  useEffect(() => {
    if (!customerId || !phoneNumber) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Data tidak lengkap. Silakan registrasi ulang.",
        confirmButtonText: "Kembali ke Registrasi",
      }).then(() => {
        router.push("/register");
      });
      return;
    }

    // Request OTP automatically on first load only
    if (!otpRequestedRef.current) {
      otpRequestedRef.current = true;
      requestOtp();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerId, phoneNumber]);

  // Countdown timer
  useEffect(() => {
    if (timer <= 0) {
      setCanResend(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // Handle resend OTP
  const handleResendOtp = async () => {
    if (!canResend) return;
    await requestOtp();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otp || otp.length < 4) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Masukkan kode OTP yang valid!",
      });
      return;
    }

    if (!customerId) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "ID Customer tidak ditemukan.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await verifyMutation.mutateAsync({
        customerId,
        otp,
      });

      Swal.fire({
        icon: "success",
        title: "Verifikasi Berhasil!",
        text: "Akun Anda telah berhasil diverifikasi. Selamat bergabung dengan MBW202CI!",
        confirmButtonText: "Lanjut ke Dashboard",
      }).then(() => {
        router.push("/dashboard");
      });
    } catch (error) {
      console.error("Verification error:", error);
      Swal.fire({
        icon: "error",
        title: "Verifikasi Gagal",
        text: error instanceof Error ? error.message : "Kode OTP tidak valid atau sudah kadaluarsa.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  // Format timer display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-brand-primary px-6 py-2 rounded-md mb-4">
              <h1 className="text-2xl md:text-3xl font-sans font-bold text-white">
                Verifikasi OTP
              </h1>
            </div>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-4"></div>
            <p className="text-gray-600">
              Masukkan kode OTP yang telah dikirim ke nomor telepon Anda
              {phoneNumber && (
                <span className="block mt-1 font-medium text-brand-primary">
                  {phoneNumber}
                </span>
              )}
            </p>
          </div>

          {/* OTP Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* OTP Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brand-primary"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="text-center">
                {timer > 0 ? (
                  <div className="text-lg font-medium text-gray-700">
                    Kode berlaku dalam{" "}
                    <span className="text-brand-primary font-bold">
                      {formatTime(timer)}
                    </span>
                  </div>
                ) : (
                  <div className="text-lg font-medium text-red-500">
                    Kode OTP telah kadaluarsa
                  </div>
                )}
              </div>

              {/* OTP Input */}
              <div>
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700 mb-2 text-center"
                >
                  Kode OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={handleOtpChange}
                  className="w-full px-4 py-4 text-center text-2xl tracking-widest border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="- - - - - -"
                  maxLength={6}
                  disabled={timer <= 0}
                  required
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Masukkan 6 digit kode OTP
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || otp.length < 4 || timer <= 0}
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-white border-r-transparent"></span>
                      Memverifikasi...
                    </span>
                  ) : (
                    "Verifikasi"
                  )}
                </button>
              </div>

              {/* Resend OTP */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Tidak menerima kode?{" "}
                  <button
                    type="button"
                    className={`font-medium ${
                      canResend
                        ? "text-brand-primary hover:underline cursor-pointer"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                    onClick={handleResendOtp}
                    disabled={!canResend || reqOtpMutation.isPending}
                  >
                    {reqOtpMutation.isPending
                      ? "Mengirim..."
                      : canResend
                      ? "Kirim ulang"
                      : `Kirim ulang (${formatTime(timer)})`}
                  </button>
                </p>
              </div>
            </form>
          </div>

          {/* Back to Register */}
          <div className="text-center mt-6">
            <button
              onClick={() => router.push("/register")}
              className="text-gray-600 hover:text-brand-primary transition-colors"
            >
              &larr; Kembali ke Registrasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brand-primary border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Memuat...</p>
          </div>
        </div>
      }
    >
      <VerifyContent />
    </Suspense>
  );
}
