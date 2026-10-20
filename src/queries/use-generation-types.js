import { getGeneration } from "@/services/get-generation";
import { useEffect } from "react";
import { useState } from "react";

export function useGenerationTypes(id) {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        getGeneration(id).then((data) => {
            const types = data ? data.types.map((t) => t.name) : [];
            setTypes(types);
        });
    }, [id]);

    return types
}