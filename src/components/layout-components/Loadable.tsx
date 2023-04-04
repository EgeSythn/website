import { Suspense } from "react";
import { LoadingOverlay } from "@mantine/core";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<LoadingOverlay visible={true} />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
