import { useQuery } from "@tanstack/react-query";
import {
    fetchPartner,fetchPartnerById, fetchPartnerCategories, fetchPartnerCities, fetchPartnerSponsorship, 
    PartnerPayload
} from "@/lib/api/client";

export const usePartner = (payload: PartnerPayload) => {
    return useQuery({
        queryKey: ["partner", payload],
        queryFn: () => fetchPartner(payload),
    });
};

export const usePartnerSponsorship = (payload: PartnerPayload) => {
    return useQuery({
        queryKey: ["partner-sponsorship", payload],
        queryFn: () => fetchPartnerSponsorship(payload),
    });
};
export const usePartnerById = (partnerId: string) => {
    return useQuery({
        queryKey: ["partner-detail", partnerId],
        queryFn: () => fetchPartnerById(partnerId),
        enabled: !!partnerId,
    });
};

export const usePartnerCities = () => {
    return useQuery({
        queryKey: ["partner-cities"],
        queryFn: () => fetchPartnerCities(),
    });
};

export const usePartnerCategories = () => {
    return useQuery({
        queryKey: ["partner-categories"],
        queryFn: () => fetchPartnerCategories(),
    });
}