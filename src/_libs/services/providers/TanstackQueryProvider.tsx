"use client";
import React from "react";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChildrenProp } from "@/_libs/interfaces/global/ChildrenProp";

const TanstackProvider = ({ children }: ChildrenProp) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default TanstackProvider;
