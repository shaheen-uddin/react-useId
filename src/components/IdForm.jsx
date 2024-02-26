import { useId } from "react";
export default function IdForm() {
  const useNameId = useId();
  const passwordHintId = useId();
  console.log(useNameId);
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl my-3">There is a simple form.</h1>
      <form className="flex flex-col gap-3">
        <div className="mx-2 flex flex-col space-y-2 text-xl font-mono">
          <label htmlFor={useNameId}>User Name</label>
          <input
            type="text"
            id={useNameId}
            className="border border-slate-300 px-1 py-0.5 rounded"
          />
        </div>
        <div className="mx-2 flex flex-col space-y-2 text-xl font-mono">
          <input
            type="password"
            className="border border-slate-300 px-1 py-0.5 rounded"
            aria-describedby={passwordHintId}
          />
          <p id={passwordHintId}>Password should be 8 character long.</p>
        </div>
      </form>
    </div>
  );
}
