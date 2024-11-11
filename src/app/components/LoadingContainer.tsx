import type { FC, PropsWithChildren } from "react";
import { TailSpin } from "react-loader-spinner";
import { cn } from "../utils/cn";

export const LoadingContainer: FC<PropsWithChildren<{ loading: boolean }>> = ({
  children,
  loading,
}): JSX.Element => {
  console.log(loading);
  return (
    <div
      className={cn(
        "w-auto h-auto relative",
        loading ? "opacity-95 pointer-events-none" : ""
      )}
    >
      {loading ? (
        <div className="absolute inset-0 z-50 flex items-center w-full  h-full justify-center bg-white bg-opacity-80">
          <TailSpin color="#006FEE" height={50} width={50} />
        </div>
      ) : (
        children
      )}
    </div>
  );
};
