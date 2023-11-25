import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full border-b-2 border-stone-300 bg-stone-200 rounded-sm text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-2">
      <label className="text-[#776B5D] text-sm font-bold uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea {...props} ref={ref} className={classes}></textarea>
      ) : (
        <input {...props} ref={ref} className={classes}></input>
      )}
    </p>
  );
});

export default Input;
