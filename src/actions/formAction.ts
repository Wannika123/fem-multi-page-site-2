'use server'

import { toCamelCase } from "@/utils/formatString";
import { validateInputs } from "@/utils/validateInputs";
import { redirect } from "next/navigation";
import { InvalidInputsType } from "@/components/booking/Form";

export async function reserveFormAction(prevState: Partial<InvalidInputsType>, formData: FormData) {
    console.log(prevState);

    // When working with forms that have many fields, you may want to consider 
    // using the entries() method with JavaScript's Object.fromEntries(). 
    // For example: const rawFormData = Object.fromEntries(formData). 
    // One thing to note is that the formData will include additional $ACTION_ properties.
    // (source: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
    
    const rawFormData = Object.fromEntries(formData);
    const rawFormDataArr = Object.entries(rawFormData);

    const isInvalidInputs: Partial<InvalidInputsType> = {}

    rawFormDataArr.forEach(entry => {
        if (/\$ACTION/.test(entry[0])) return;

        const camelKey = toCamelCase(entry[0]);
        const value = entry[1].toString();
        const isValid = validateInputs(value, camelKey)

        if (!isValid) {
            if (camelKey === 'name' || camelKey === 'email' || camelKey === 'dateMonth' || camelKey === 'dateDay' || camelKey === 'dateYear' || camelKey === 'timeHour' || camelKey === 'timeMin') {
                isInvalidInputs[camelKey] = true
            }           
        }
    })

    if (Object.keys(isInvalidInputs).length > 0) {
        return isInvalidInputs
    }

    // send data to the server somehow
    redirect('/')
}