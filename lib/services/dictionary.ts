import { getDictionary } from "@/lib/get-dictionary";

export abstract class Dict {
    async getDic(): Promise<Awaited<ReturnType<typeof getDictionary>>>{
        const dictionary = await getDictionary();
        return dictionary;
    }
}