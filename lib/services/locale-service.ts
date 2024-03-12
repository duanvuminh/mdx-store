import { csI18n } from "@/lib/const";

export const localeService = {
    generateStaticParams:() =>{
        return csI18n.locales.map((locale) => ({ lang: locale }));
    }
}