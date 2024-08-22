import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";

const CustomForm = ({ thing, handleSubmit, handleInput }) => {
  return (
    <div>
      <h1 className="text-3xl sm:text-6xl font-bold text-center">
        What is your "one Thing"?
      </h1>
      <form
        action=""
        className="flex ring-4 rounded-md ring-slate-200 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800 m-8"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="bg-inherit rounded-md font-sans text-slate-800 py-2 px-5 focus:outline-none text-xl sm:text-2xl placeholder:text-slate-400 caret-teal-600 appearance-none w-full"
          placeholder="Enter One Thing"
          autoFocus
          maxLength="64"
          value={thing}
          onInput={handleInput}
        />
        <button className="bg-inherit rounded-md font-sans text-slate-800 py-2 px-5 focus:outline-none focus:text-teal-600 hover:text-teal-600">
          <ArrowRightCircleIcon className="h-12 w-12 " />
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
