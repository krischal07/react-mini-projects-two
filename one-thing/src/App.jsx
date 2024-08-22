import React, { useState } from "react";
import CustomForm from "./components/CustomForm";
import OneThing from "./components/OneThing";

import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();

function getSuccessMessage() {
  const Messages = [
    "Operation completed successfully!",
    "Your changes have been saved!",
    "Data submitted successfully!",
    "Your request was processed successfully!",
    "Item added to your cart!",
    "Profile updated successfully!",
    "Payment was successful!",
    "Registration completed successfully!",
    "Your settings have been updated!",
    "File uploaded successfully!",
  ];
  return Messages[Math.floor(Math.random() * Messages.length)];
}

const App = () => {
  const [thing, setThing] = useState("");
  const [isCompleted, setIsCompleted] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(false);
    console.log(e);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setThing(e.target.value);
  };

  const handleCompleteThing = async (e) => {
    e.target.setAttribute("disabled", true);
    setThing(getSuccessMessage());
    await jsConfetti.addConfetti({
      // emojis: ["🫡", "🚀", "💹"],
    });
    e.target.removeAttribute("disabled");
    setThing("");
    setIsCompleted(true);
  };

  return (
    <main className=" grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-500 dark:from-slate-500 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted && (
          <CustomForm
            thing={thing}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        )}
        {!isCompleted && (
          <OneThing thing={thing} handleCompletedThing={handleCompleteThing} />
        )}
      </div>
    </main>
  );
};

export default App;
