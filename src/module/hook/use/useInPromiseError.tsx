import { Suspense, use, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const fetchData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return fetch("https://jsonplaceholder.com/todos")
    .then((response) => response.json())
};

const RenderData = ({ dataPromise }: { dataPromise: Promise<any> }) => {
  const data = use(dataPromise);
  return data
    ? data.slice(0, 10).map((item: any) => (
        <div key={item.id} className="text-xl mb-2">
          - {item.title}
        </div>
      ))
    : null;
};

const DemoUseInPromiseErrorView = () => {
  const [dataPromise, SetDataPromise] = useState<Promise<any>>();

  return (
    <div>
      <button
        className="bg-green-400 rounded-md p-2 mt-2"
        onClick={() => SetDataPromise(fetchData())}
      >
        Fetch Data
      </button>
      {dataPromise !== undefined && (
        <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
          <Suspense fallback={<div>Loading Data...</div>}>
            <RenderData dataPromise={dataPromise} />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default DemoUseInPromiseErrorView;
