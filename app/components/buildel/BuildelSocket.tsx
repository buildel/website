import { BuildelRun, BuildelRunStatus, BuildelSocket } from "@buildel/buildel";
import { createContext, useContext, useEffect, useRef, useState } from "react";

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

interface UsePipelineRunProps {
  onBlockOutput?: (
    blockId: string,
    outputName: string,
    payload: unknown
  ) => void;
  onBlockStatusChange?: (blockId: string, isWorking: boolean) => void;
  runId: number;
}

export function usePipelineRun(props: UsePipelineRunProps) {
  const buildel = useBuildelSocket();
  const runRef = useRef<BuildelRun>();
  const [status, setStatus] = useState<BuildelRunStatus>("idle");

  const push = (topic: string, payload: any) => {
    if (!runRef.current) return;

    runRef.current.push(topic, payload);
  };

  useEffect(() => {
    if (!buildel.buildel) return;

    const run = buildel.buildel.run(props.runId, {
      onBlockOutput: (
        blockId: string,
        outputName: string,
        payload: unknown
      ) => {
        console.log(
          `Output from block ${blockId}, output ${outputName}:`,
          payload
        );

        props?.onBlockOutput?.(blockId, outputName, payload);
      },
      onBlockStatusChange: (blockId: string, isWorking: boolean) => {
        console.log(`Block ${blockId} is ${isWorking ? "working" : "stopped"}`);

        props?.onBlockStatusChange?.(blockId, isWorking);
      },
      onStatusChange: (status: BuildelRunStatus) => {
        console.log(`Status changed: ${status}`);

        setStatus(status);
      },
      onBlockError: (blockId: string, errors: string[]) => {
        console.log(`Block ${blockId} errors: ${errors}`);
      },
    });

    run.start().then(() => {
      console.log("started");
    });

    runRef.current = run;

    return () => {
      run.stop().then(() => {
        console.log("stopped");
      });
    };
  }, [buildel.buildel]);

  return { status, push };
}
