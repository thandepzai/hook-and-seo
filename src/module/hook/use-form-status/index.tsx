import { useFormState } from "react-dom";

async function increment(previousState: number, formData: FormData) {
  return previousState + 1;
}

function StatefulForm({}) {
  const [state, formAction] = useFormState(increment, 0);
  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  );
}
export default StatefulForm;
