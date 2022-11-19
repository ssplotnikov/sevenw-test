import React, { useState, useCallback } from "react";

export default function useInput(initialState: any) {
    const [value, setValue] = useState<any>(initialState)
    const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);
    return [value, handler];
}

