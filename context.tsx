"use client";
import React, { createContext, useContext, useState } from "react";

type ArtFaceCollectionContextType = {
  artCollection: string[];
  setArtCollection: React.Dispatch<React.SetStateAction<string[]>>;
};

export const ArtFaceCollectionContext =
  createContext<ArtFaceCollectionContextType | null>(null);

export default function ArtFaceCollectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [artCollection, setArtCollection] = useState<string[]>([]);

  return (
    <ArtFaceCollectionContext.Provider
      value={{ artCollection, setArtCollection }}
    >
      {children}
    </ArtFaceCollectionContext.Provider>
  );
}

export function UseArtCollectionContext() {
  const context = useContext(ArtFaceCollectionContext);

  if (context === null) {
    throw new Error(
      "UseArtCollectionContext must be used within a ArtCollectionContextProvider"
    );
  }

  return context;
}
