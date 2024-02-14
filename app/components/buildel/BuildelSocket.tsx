import { BuildelSocket } from "@buildel/buildel";
import { createContext, useContext, useEffect, useState } from "react";

const BuildelContext = createContext<{
  buildel: BuildelSocket | null;
  setBuildel: (socket: BuildelSocket) => void;
} | null>(null);

export function BuildelProvider({ children }: { children: React.ReactNode }) {
  const [buildel, setBuildel] = useState<BuildelSocket | null>(null);

  useEffect(() => {
    async function connect() {
      const organizationId = 27;
      const authUrl = "/buildel/auth";
      const buildel = new BuildelSocket(organizationId, { authUrl });

      await buildel.connect();

      setBuildel(buildel);
    }

    connect();

    return () => {
      if (!buildel) return;
      buildel!.disconnect().then(() => {
        console.log("Disconnected from Buildel");
      });
    };
  }, []);

  return (
    <BuildelContext.Provider value={{ buildel, setBuildel }}>
      {children}
    </BuildelContext.Provider>
  );
}

export function useBuildelSocket() {
  const context = useContext(BuildelContext);

  if (!context) {
    throw new Error("useBuildelSocket must be used within a BuildelProvider");
  }

  return context;
}
