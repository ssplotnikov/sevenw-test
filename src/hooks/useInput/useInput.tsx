import React, { useState, useCallback } from "react";

export default function useInput(initialState: number | string) {
    const [value, setValue] = useState(initialState)
    const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);
    return [value, handler];
}

