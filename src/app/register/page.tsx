"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetChapter } from "@/lib/hooks/useGetChapter";
import { useGetCity } from "@/lib/hooks/useGetCity";
import { useMemberAdd } from "@/lib/hooks/useMemberAdd";
import Swal from "sweetalert2";

interface FormData {
  cchapter: string;
  tname: string;
  taddress: string;
  tzip: string;
  tphone1: string;
  temail: string;
  ccity: string;
  tpassword: string;
  tdob: string;
  tnik: string;
  tcartype: string;
  tpoliceno: string;
}

const initialFormData: FormData = {
  cchapter: "",
  tname: "",
  taddress: "",
  tzip: "",
  tphone1: "",
  temail: "",
  ccity: "",
  tpassword: "",
  tdob: "",
  tnik: "",
  tcartype: "",
  tpoliceno: "",
};

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  // Fetch chapters and cities for dropdowns
  const { data: chapterData, isLoading: isLoadingChapters } = useGetChapter({
    limit: 100,
    offset: 0,
  });
  const { data: cityData, isLoading: isLoadingCities } = useGetCity();

  // Mutations
  const memberAddMutation = useMemberAdd();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.cchapter ||
      !formData.tname ||
      !formData.taddress ||
      !formData.tphone1 ||
      !formData.temail ||
      !formData.ccity ||
      !formData.tpassword ||
      !formData.tdob ||
      !formData.tnik ||
      !formData.tcartype ||
      !formData.tpoliceno
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Semua field harus diisi!",
      });
      return;
    }

    // Validate password confirmation
    if (formData.tpassword !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password tidak cocok!",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Register member
      const registerResult = await memberAddMutation.mutateAsync(formData);
      console.log(registerResult, "register result");
      
      // Check if status code is 200
      if (registerResult.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Registrasi Berhasil!",
          text: "Silakan verifikasi nomor telepon Anda.",
          confirmButtonText: "Lanjutkan Verifikasi",
        }).then(() => {
          // Redirect to verify page with customer ID and phone number
          const params = new URLSearchParams({
            id: registerResult.content.id,
            phone: formData.tphone1,
          });
          router.push(`/verify?${params.toString()}`);
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Registrasi Gagal",
          text: "Terjadi kesalahan saat registrasi. Silakan coba lagi.",
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      Swal.fire({
        icon: "error",
        title: "Registrasi Gagal",
        text: error instanceof Error ? error.message : "Terjadi kesalahan saat registrasi. Silakan coba lagi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-brand-primary px-6 py-2 rounded-md mb-4">
              <h1 className="text-2xl md:text-3xl font-sans font-bold text-white">
                Bergabung dengan MBW202CI
              </h1>
            </div>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-4"></div>
            <p className="text-gray-600">
              Isi formulir pendaftaran untuk menjadi anggota W202 Club Indonesia
            </p>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Chapter Dropdown */}
              <div>
                <label
                  htmlFor="cchapter"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Chapter <span className="text-red-500">*</span>
                </label>
                <select
                  id="cchapter"
                  name="cchapter"
                  value={formData.cchapter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  disabled={isLoadingChapters}
                  required
                >
                  <option value="">
                    {isLoadingChapters ? "Memuat chapter..." : "Pilih Chapter"}
                  </option>
                  {chapterData?.content?.result?.map((chapter) => (
                    <option key={chapter.id} value={chapter.id}>
                      {chapter.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="tname"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="tname"
                  name="tname"
                  value={formData.tname}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>

              {/* NIK */}
              <div>
                <label
                  htmlFor="tnik"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  NIK (No. KTP) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="tnik"
                  name="tnik"
                  value={formData.tnik}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Masukkan NIK"
                  required
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="tdob"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tanggal Lahir <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="tdob"
                  name="tdob"
                  value={formData.tdob}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="tphone1"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  No. Telepon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="tphone1"
                  name="tphone1"
                  value={formData.tphone1}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Contoh: 08123456789"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="temail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="temail"
                  name="temail"
                  value={formData.temail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="email@contoh.com"
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="taddress"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Alamat <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="taddress"
                  name="taddress"
                  value={formData.taddress}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Masukkan alamat lengkap"
                  required
                />
              </div>

              {/* City Dropdown */}
              <div>
                <label
                  htmlFor="ccity"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Kota <span className="text-red-500">*</span>
                </label>
                <select
                  id="ccity"
                  name="ccity"
                  value={formData.ccity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  disabled={isLoadingCities}
                  required
                >
                  <option value="">
                    {isLoadingCities ? "Memuat kota..." : "Pilih Kota"}
                  </option>
                  {cityData?.content?.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.nama} - {city.province}
                    </option>
                  ))}
                </select>
              </div>

              {/* Zip Code */}
              <div>
                <label
                  htmlFor="tzip"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Kode Pos
                </label>
                <input
                  type="text"
                  id="tzip"
                  name="tzip"
                  value={formData.tzip}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Masukkan kode pos"
                />
              </div>

              {/* Car Type */}
              <div>
                <label
                  htmlFor="tcartype"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tipe Mobil <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="tcartype"
                  name="tcartype"
                  value={formData.tcartype}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Contoh: W202 C200"
                  required
                />
              </div>

              {/* Police Number */}
              <div>
                <label
                  htmlFor="tpoliceno"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  No. Polisi <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="tpoliceno"
                  name="tpoliceno"
                  value={formData.tpoliceno}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Contoh: B 1234 ABC"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="tpassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="tpassword"
                  name="tpassword"
                  value={formData.tpassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Masukkan password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Konfirmasi Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Masukkan ulang password"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-white border-r-transparent"></span>
                      Memproses...
                    </span>
                  ) : (
                    "Daftar Sekarang"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
